'use strict';

// Прогресс пользователя и его сохранение в localStorage.

const STORAGE_KEY = 'english.progress';

// Весь прогресс лежит в одном объекте:
//   words        — по каждому начатому слову: { stage, nextReview, correct, wrong }
//   grammar      — лучший результат по каждой теме (от 0 до 1)
//   practice     — лучший результат по каждому тесту и диалогу (от 0 до 1)
//   activityDays — по дням: сколько вопросов отвечено и сколько из них верно
//   wordMistakes, grammarMistakes — на чём пользователь ошибался (для работы над ошибками)
//   exams        — лучший результат пробного экзамена по каждому уровню
//   theme        — 'light', 'dark' или null (как в системе)
//   hasSeenWelcome — показывали ли уже приветствие с выбором «с нуля / уже знаю»
let progress = createEmptyProgress();

function createEmptyProgress() {
  return {
    words: {},
    grammar: {},
    practice: {},
    activityDays: {},
    wordMistakes: {},
    grammarMistakes: {},
    exams: {},
    theme: null,
    newWordsPerSession: 10,
    hasSeenWelcome: false
  };
}

function loadProgress() {
  try {
    const savedText = localStorage.getItem(STORAGE_KEY);
    if (savedText) {
      setProgress(JSON.parse(savedText));
    }
  } catch (error) {
    // Если данные повреждены или хранилище недоступно, начинаем с чистого листа
    progress = createEmptyProgress();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    // Хранилище может быть недоступно (например, в приватном режиме) — сайт работает и без него
  }
}

// Заменяет прогресс данными из файла или из хранилища.
// Поля, которых в данных нет, остаются со значениями по умолчанию.
function setProgress(data) {
  progress = createEmptyProgress();
  for (const key in progress) {
    if (data[key] !== undefined) {
      progress[key] = data[key];
    }
  }
}

function resetProgress() {
  const theme = progress.theme;
  progress = createEmptyProgress();
  progress.theme = theme;
  saveProgress();
}

// Отмечает, что сегодня пользователь занимался (нужно для счётчика дней подряд)
// Запись о сегодняшнем дне. Если её ещё нет, создаём.
function getTodayActivity() {
  const todayKey = getDateKey(new Date());
  let day = progress.activityDays[todayKey];
  // В старых сохранениях день отмечался просто значением true, без счётчиков
  if (typeof day !== 'object') {
    day = { answers: 0, correct: 0 };
    progress.activityDays[todayKey] = day;
  }
  return day;
}

function markActivityToday() {
  getTodayActivity();
}

// Добавляет ответы в статистику сегодняшнего дня
function countAnswersToday(answerCount, correctCount) {
  const day = getTodayActivity();
  day.answers += answerCount;
  day.correct += correctCount;
}

// Лучший результат темы, теста или диалога. Худший результат лучший не перезаписывает.
function saveBestScore(scores, id, score) {
  const previousBest = scores[id] || 0;
  if (score > previousBest) {
    scores[id] = score;
  } else {
    scores[id] = previousBest;
  }
  markActivityToday();
  saveProgress();
}

loadProgress();
