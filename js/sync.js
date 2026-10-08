'use strict';

// Вход через Google и синхронизация прогресса между устройствами (Firebase).
// Без входа всё работает как раньше: прогресс лежит только в localStorage.
//
// Прогресс хранится в Firestore одним документом users/<uid>: { data, updatedAt },
// где data — тот же JSON, что и в localStorage. Побеждает более свежая версия.
// Исключение — первый вход на устройстве: тогда местный прогресс объединяется с облачным.

const FIREBASE_VERSION = '10.14.1';
const FIREBASE_URL = 'https://www.gstatic.com/firebasejs/' + FIREBASE_VERSION + '/';

// С каким аккаунтом это устройство уже синхронизировалось
const SYNC_UID_KEY = 'english.syncUid';
// У бесплатного тарифа Firebase есть дневной предел на число записей, поэтому в облако уходит
// не каждый ответ, а всё разом: в конце урока, при переходе на другую страницу, при закрытии
// настроек и когда вкладку сворачивают. Задержка — запасной вариант для очень долгого урока.
const CLOUD_SAVE_DELAY = 5 * 60 * 1000;

let isSyncReady = false;
let cloudUser = null;
let cloudDocument = null;
let stopCloudListener = null;
let cloudSaveTimer = null;
let hasUnsentChanges = false;
let syncStatus = '';
// 'off' — без входа, 'busy' — идёт обмен или есть неотправленное, 'ok' — всё в облаке, 'error' — сбой
let syncState = 'off';
let isPhotoBroken = false;

// Вход работает только на сайте (http/https) и только когда заполнен firebase-config.js
function isSyncAvailable() {
  return Boolean(FIREBASE_CONFIG.apiKey) && location.protocol.startsWith('http');
}

function loadScript(address) {
  return new Promise(function (resolve, reject) {
    const script = document.createElement('script');
    script.src = address;
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

// Библиотеки Firebase подгружаются после отрисовки страницы, чтобы не задерживать её
function startSync() {
  loadScript(FIREBASE_URL + 'firebase-app-compat.js')
    .then(function () {
      return Promise.all([
        loadScript(FIREBASE_URL + 'firebase-auth-compat.js'),
        loadScript(FIREBASE_URL + 'firebase-firestore-compat.js')
      ]);
    })
    .then(function () {
      firebase.initializeApp(FIREBASE_CONFIG);
      firebase.auth().onAuthStateChanged(onUserChanged);
    })
    .catch(function () {
      setSyncStatus('Нет связи с сервером', 'error');
    });
}

function onUserChanged(user) {
  if (stopCloudListener) {
    stopCloudListener();
    stopCloudListener = null;
  }
  isSyncReady = true;
  cloudUser = user;
  cloudDocument = null;
  isPhotoBroken = false;

  if (user) {
    cloudDocument = firebase.firestore().collection('users').doc(user.uid);
    // includeMetadataChanges нужен, чтобы узнать, когда данные из кэша подтвердит сервер
    stopCloudListener = cloudDocument.onSnapshot({ includeMetadataChanges: true }, onCloudSnapshot, function () {
      setSyncStatus('Не удалось получить прогресс', 'error');
    });
    setSyncStatus('Синхронизация…', 'busy');
  } else {
    setSyncStatus('', 'off');
  }
}

// Вызывается при входе и каждый раз, когда прогресс изменился на другом устройстве
function onCloudSnapshot(snapshot) {
  // Собственные неотправленные изменения и данные из кэша (без связи) не учитываем:
  // пустой кэш выглядел бы как пустое облако, и мы затёрли бы настоящий прогресс
  if (snapshot.metadata.hasPendingWrites || snapshot.metadata.fromCache) {
    return;
  }

  const cloudProgress = readCloudProgress(snapshot);
  const isFirstSync = getSyncUid() !== cloudUser.uid;

  if (isFirstSync) {
    if (cloudProgress) {
      setProgress(mergeProgress(progress, cloudProgress));
    }
    setSyncUid(cloudUser.uid);
    progress.updatedAt = Date.now();
    writeProgress();
    saveToCloud();
    showSyncedProgress();
  } else if (cloudProgress && cloudProgress.updatedAt > progress.updatedAt) {
    setProgress(cloudProgress);
    writeProgress();
    clearTimeout(cloudSaveTimer);
    cloudSaveTimer = null;
    hasUnsentChanges = false;
    showSyncedProgress();
    setSyncStatus('Синхронизировано', 'ok');
  } else if (!cloudProgress || cloudProgress.updatedAt < progress.updatedAt) {
    // Здесь прогресс свежее (например, занимались без связи)
    saveToCloud();
  } else {
    setSyncStatus('Синхронизировано', 'ok');
  }
}

function readCloudProgress(snapshot) {
  if (!snapshot.exists) {
    return null;
  }
  try {
    const data = JSON.parse(snapshot.data().data);
    if (typeof data.words !== 'object' || typeof data.grammar !== 'object') {
      return null;
    }
    data.updatedAt = data.updatedAt || 0;
    return data;
  } catch (error) {
    return null;
  }
}

function saveToCloud() {
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer = null;
  hasUnsentChanges = false;
  if (!cloudDocument) {
    return;
  }

  setSyncStatus('Сохранение…', 'busy');
  // Прогресс лежит одной строкой: у Firestore есть предел на число полей в документе,
  // а слов тысячи. Без связи запись ждёт в очереди и уйдёт, когда связь появится.
  cloudDocument.set({ data: JSON.stringify(progress), updatedAt: progress.updatedAt })
    .then(function () {
      setSyncStatus('Синхронизировано', 'ok');
    })
    .catch(function () {
      setSyncStatus('Не удалось сохранить прогресс', 'error');
    });
}

// Вызывается из saveProgress при каждом изменении прогресса: только запоминает, что есть что отправить
function markUnsentChanges() {
  // До первой синхронизации в облако не пишем, иначе затрём то, что там уже лежит
  if (!cloudDocument || getSyncUid() !== cloudUser.uid) {
    return;
  }
  hasUnsentChanges = true;
  setSyncStatus('Изменения ждут отправки', 'busy');
  if (!cloudSaveTimer) {
    cloudSaveTimer = setTimeout(saveToCloud, CLOUD_SAVE_DELAY);
  }
}

// Отправляет накопленные изменения, если они есть
function sendUnsentChanges() {
  if (hasUnsentChanges) {
    saveToCloud();
  }
}

// Показывает прогресс, пришедший из облака
function showSyncedProgress() {
  applyTheme();
  updateSettingsControls();

  // Урок или викторину посреди работы не перерисовываем: ответы пропали бы
  const contentIds = ['session-content', 'lesson-content', 'listening-content', 'reading-content', 'exam-content'];
  for (const id of contentIds) {
    if (document.getElementById(id).childElementCount > 0) {
      return;
    }
  }
  showCurrentPage();
}

/* ================= Объединение прогресса ================= */

// Объединяет прогресс этого устройства с облачным при первом входе: ничего не теряется.
function mergeProgress(local, cloud) {
  const merged = createEmptyProgress();

  // Слово берём оттуда, где на него отвечали больше, а при равенстве — где этап выше
  const wordIds = Object.keys(Object.assign({}, local.words, cloud.words));
  for (const id of wordIds) {
    const first = local.words[id];
    const second = cloud.words[id];
    if (!first || !second) {
      merged.words[id] = first || second;
      continue;
    }
    const firstAnswers = first.correct + first.wrong;
    const secondAnswers = second.correct + second.wrong;
    if (firstAnswers !== secondAnswers) {
      merged.words[id] = firstAnswers > secondAnswers ? first : second;
    } else {
      merged.words[id] = first.stage >= second.stage ? first : second;
    }
  }

  merged.grammar = mergeByLargest(local.grammar, cloud.grammar);
  merged.practice = mergeByLargest(local.practice, cloud.practice);
  merged.exams = mergeByLargest(local.exams, cloud.exams);
  merged.wordMistakes = mergeByLargest(local.wordMistakes, cloud.wordMistakes);
  merged.grammarMistakes = mergeByLargest(local.grammarMistakes, cloud.grammarMistakes);

  // День берём оттуда, где в этот день ответили больше
  const dayKeys = Object.keys(Object.assign({}, local.activityDays, cloud.activityDays));
  for (const key of dayKeys) {
    const first = local.activityDays[key];
    const second = cloud.activityDays[key];
    if (!first || !second) {
      merged.activityDays[key] = first || second;
    } else {
      merged.activityDays[key] = (first.answers || 0) >= (second.answers || 0) ? first : second;
    }
  }

  // Настройки — с того устройства, где прогресс меняли позже
  const newer = (local.updatedAt || 0) >= (cloud.updatedAt || 0) ? local : cloud;
  merged.theme = newer.theme;
  merged.newWordsPerSession = newer.newWordsPerSession;
  merged.hasSeenWelcome = Boolean(local.hasSeenWelcome || cloud.hasSeenWelcome);
  return merged;
}

// Из двух наборов чисел (результаты, счётчики ошибок) берёт по каждому ключу большее
function mergeByLargest(first, second) {
  const result = Object.assign({}, first);
  for (const key in second) {
    if (result[key] === undefined || second[key] > result[key]) {
      result[key] = second[key];
    }
  }
  return result;
}

/* ================= Вход и выход ================= */

function getSyncUid() {
  try {
    return localStorage.getItem(SYNC_UID_KEY);
  } catch (error) {
    return null;
  }
}

function setSyncUid(uid) {
  try {
    if (uid) {
      localStorage.setItem(SYNC_UID_KEY, uid);
    } else {
      localStorage.removeItem(SYNC_UID_KEY);
    }
  } catch (error) {
    // Хранилище недоступно — при следующем входе прогресс просто объединится ещё раз
  }
}

function signIn() {
  if (!isSyncReady) {
    return;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch(function (error) {
    if (error.code === 'auth/popup-closed-by-user' || error.code === 'auth/cancelled-popup-request') {
      return;
    }
    if (error.code === 'auth/popup-blocked') {
      alert('Браузер заблокировал окно входа. Разрешите всплывающие окна для этого сайта.');
    } else if (error.code === 'auth/unauthorized-domain') {
      alert('Этот адрес сайта не разрешён в Firebase: добавьте его в Authentication → Settings → Authorized domains.');
    } else {
      alert('Не удалось войти: ' + error.message);
    }
  });
}

// После выхода прогресс остаётся на устройстве, но больше не синхронизируется
function signOut() {
  sendUnsentChanges();
  setSyncUid(null);
  firebase.auth().signOut();
}

/* ================= Окно настроек и приветствие ================= */

function setSyncStatus(status, state) {
  syncStatus = status;
  syncState = state;
  updateAccountControls();
}

function updateAccountControls() {
  const button = document.getElementById('account-button');
  const status = document.getElementById('account-status');

  document.getElementById('account-field').hidden = !isSyncAvailable();
  // На приветствии вход нужен тем, кто уже занимался на другом устройстве
  document.getElementById('welcome-login').hidden = !isSyncAvailable() || Boolean(cloudUser);

  button.disabled = !isSyncReady;
  if (cloudUser) {
    button.textContent = 'Выйти';
    status.textContent = (cloudUser.email || 'Вход выполнен') + (syncStatus ? ' · ' + syncStatus : '');
  } else {
    button.textContent = 'Войти через Google';
    status.textContent = syncStatus || 'Прогресс хранится только на этом устройстве. Войдите, чтобы он был один на всех устройствах.';
  }
  status.dataset.state = syncState;
  updateAccountIndicator();
}

// Значок в шапке: без входа — перечёркнутое облако, после входа — фото и точка состояния
function updateAccountIndicator() {
  const indicator = document.getElementById('account-indicator');
  const photo = document.getElementById('account-indicator-photo');
  const letter = document.getElementById('account-indicator-letter');
  const hasPhoto = Boolean(cloudUser && cloudUser.photoURL) && !isPhotoBroken;

  indicator.hidden = !isSyncAvailable();
  // Пока неизвестно, выполнен ли вход, значок не показываем: иначе он мигнул бы «без входа»
  indicator.classList.toggle('loading', !isSyncReady && syncState === 'off');
  indicator.dataset.state = syncState;

  document.getElementById('account-indicator-icon').toggleAttribute('hidden', Boolean(cloudUser));
  photo.hidden = !hasPhoto;
  letter.hidden = !cloudUser || hasPhoto;
  if (hasPhoto && photo.getAttribute('src') !== cloudUser.photoURL) {
    photo.src = cloudUser.photoURL;
  }

  let hint = 'Прогресс хранится только на этом устройстве. Нажмите, чтобы войти';
  if (cloudUser) {
    const name = cloudUser.email || cloudUser.displayName || 'Аккаунт';
    letter.textContent = name[0].toUpperCase();
    hint = name + ' · ' + syncStatus;
  } else if (syncStatus) {
    hint = syncStatus;
  }
  indicator.title = hint;
  indicator.setAttribute('aria-label', hint);
}

document.getElementById('account-indicator').addEventListener('click', openSettings);
// Фото не загрузилось — показываем первую букву адреса
document.getElementById('account-indicator-photo').addEventListener('error', function () {
  isPhotoBroken = true;
  updateAccountIndicator();
});

document.getElementById('account-button').addEventListener('click', function () {
  if (cloudUser) {
    signOut();
  } else {
    signIn();
  }
});
document.getElementById('welcome-login-button').addEventListener('click', signIn);

// Вкладку закрывают или сворачивают, уходят со страницы или закрывают настройки
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
    sendUnsentChanges();
  }
});
window.addEventListener('hashchange', sendUnsentChanges);
settingsDialog.addEventListener('close', sendUnsentChanges);

onProgressSaved = markUnsentChanges;
onLessonFinished = sendUnsentChanges;
updateAccountControls();
if (isSyncAvailable()) {
  startSync();
}
