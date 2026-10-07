'use strict';

// Окно настроек: тема, число новых слов, экспорт, импорт и сброс прогресса.

const settingsDialog = document.getElementById('settings-dialog');

// Тема: если пользователь её не выбирал, берём системную
function applyTheme() {
  let theme = progress.theme;
  if (!theme) {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
  }
  document.documentElement.dataset.theme = theme;
}

// Выставляет элементы окна в соответствии с сохранёнными настройками
function updateSettingsControls() {
  const selectedTheme = progress.theme || 'auto';
  const themeButtons = document.querySelectorAll('.theme-button');
  for (const button of themeButtons) {
    button.classList.toggle('active', button.dataset.value === selectedTheme);
  }
  document.getElementById('settings-new-words').value = progress.newWordsPerSession;
}

function openSettings() {
  updateSettingsControls();
  settingsDialog.showModal();
}

function closeSettings() {
  settingsDialog.close();
}

function exportProgress() {
  const file = new Blob([JSON.stringify(progress)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(file);
  link.download = 'english-progress-' + getDateKey(new Date()) + '.json';
  link.click();
  // Ссылку на файл освобождаем чуть позже, когда скачивание уже началось
  setTimeout(function () {
    URL.revokeObjectURL(link.href);
  }, 1000);
}

function importProgress(file) {
  const reader = new FileReader();
  reader.onload = function () {
    let data = null;
    try {
      data = JSON.parse(reader.result);
    } catch (error) {
      data = null;
    }

    // Простая проверка, что это действительно наш файл
    if (!data || typeof data.words !== 'object' || typeof data.grammar !== 'object') {
      alert('Не удалось прочитать файл: это не экспорт прогресса.');
      return;
    }

    setProgress(data);
    saveProgress();
    applyTheme();
    closeSettings();
    showCurrentPage();
  };
  reader.readAsText(file);
}

document.getElementById('settings-open-button').addEventListener('click', openSettings);
document.getElementById('settings-close-button').addEventListener('click', closeSettings);

// Клик по затемнению вокруг окна тоже закрывает его
settingsDialog.addEventListener('click', function (event) {
  if (event.target === settingsDialog) {
    closeSettings();
  }
});

const themeButtons = document.querySelectorAll('.theme-button');
for (const button of themeButtons) {
  button.addEventListener('click', function () {
    if (button.dataset.value === 'auto') {
      progress.theme = null;
    } else {
      progress.theme = button.dataset.value;
    }
    saveProgress();
    applyTheme();
    updateSettingsControls();
  });
}

document.getElementById('settings-new-words').addEventListener('change', function (event) {
  progress.newWordsPerSession = Number(event.target.value);
  saveProgress();
});

// Ссылка на входной тест сама меняет адрес, остаётся только закрыть окно
document.getElementById('settings-placement-link').addEventListener('click', closeSettings);

document.getElementById('settings-export-button').addEventListener('click', exportProgress);

// Кнопка «Импорт» открывает скрытое поле выбора файла
document.getElementById('settings-import-button').addEventListener('click', function () {
  document.getElementById('settings-import-file').click();
});
document.getElementById('settings-import-file').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    importProgress(file);
  }
  event.target.value = ''; // чтобы тот же файл можно было выбрать ещё раз
});

document.getElementById('settings-reset-button').addEventListener('click', function () {
  if (!confirm('Удалить весь прогресс? Это действие нельзя отменить.')) {
    return;
  }
  resetProgress();
  closeSettings();
  showCurrentPage();
});

applyTheme();
