'use strict';

// Навигация. Адрес страницы хранится после # в адресной строке:
//   #/                        — обзор
//   #/vocab/A1                — список слов уровня
//   #/vocab/train/all         — тренировка (all или уровень)
//   #/vocab/cards/A1          — карточки
//   #/grammar                 — список тем
//   #/grammar/a1-to-be        — урок
//   #/practice                — список заданий
//   #/practice/test/A1        — тест уровня
//   #/practice/dialog/a1-cafe — диалог
//   #/practice/dictation/A1   — диктант
//   #/practice/listening/<id> — аудирование
//   #/practice/reading/<id>   — чтение
//   #/practice/exam/A1        — пробный экзамен
//   #/mistakes                — работа над ошибками
//   #/stats                   — статистика
//   #/placement               — входной тест

function showCurrentPage() {
  let address = decodeURIComponent(location.hash);
  if (address.startsWith('#')) {
    address = address.slice(1);
  }
  if (address.startsWith('/')) {
    address = address.slice(1);
  }

  const parts = address.split('/');
  const section = parts[0] || 'home';

  stopSpeaking();
  stopExamTimer();
  window.scrollTo(0, 0);
  highlightMenu(section);

  // Незаконченная викторина не должна остаться на скрытом экране
  document.getElementById('session-content').replaceChildren();
  document.getElementById('lesson-content').replaceChildren();
  document.getElementById('listening-content').replaceChildren();
  document.getElementById('reading-content').replaceChildren();
  document.getElementById('exam-content').replaceChildren();

  // При первом посещении вместо любой страницы показываем приветствие
  if (shouldShowWelcome() && section !== 'placement') {
    showWelcomePage();
    return;
  }

  if (section === 'placement') {
    showPlacementPage();
  } else if (section === 'stats') {
    showStatsPage();
  } else if (section === 'mistakes') {
    showMistakesPage();
  } else if (section === 'vocab') {
    if (parts[1] === 'train') {
      showTrainingPage(parts[2]);
    } else if (parts[1] === 'cards') {
      showFlashcardsPage(parts[2]);
    } else {
      showVocabularyPage(parts[1]);
    }
  } else if (section === 'grammar') {
    if (parts[1]) {
      showLessonPage(parts[1]);
    } else {
      showGrammarPage();
    }
  } else if (section === 'practice') {
    if (parts[1] === 'test') {
      showTestPage(parts[2]);
    } else if (parts[1] === 'dialog') {
      showDialogPage(parts[2]);
    } else if (parts[1] === 'dictation') {
      showDictationPage(parts[2]);
    } else if (parts[1] === 'listening') {
      showListeningPage(parts[2]);
    } else if (parts[1] === 'reading') {
      showReadingPage(parts[2]);
    } else if (parts[1] === 'exam') {
      showExamPage(parts[2]);
    } else {
      showPracticePage();
    }
  } else {
    showHomePage();
  }
}

// Подсвечивает в меню раздел, в котором сейчас находится пользователь
function highlightMenu(section) {
  const links = document.querySelectorAll('.nav a');
  for (const link of links) {
    link.classList.toggle('active', link.dataset.section === section);
  }
}

window.addEventListener('hashchange', showCurrentPage);
showCurrentPage();
