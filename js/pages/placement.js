'use strict';

// Первое посещение сайта и входной тест, который определяет уровень.
//
// Тест идёт по уровням от A1 к B2. На каждом уровне — вопросы по словам и грамматике
// этого уровня. Уровень зачтён, если верных ответов не меньше PASS_SCORE (80%).
// После первого незачтённого уровня тест заканчивается: уровень пользователя —
// последний зачтённый.

const PLACEMENT_WORD_QUESTIONS = 8;
const PLACEMENT_GRAMMAR_QUESTIONS = 8;

// Результаты уже пройденных уровней: { level, correctCount, answeredCount, isPassed }
let placementResults = [];

/* ================= Первое посещение ================= */

// Приветствие показываем один раз и только тем, кто ещё ничего не изучал
function shouldShowWelcome() {
  const hasStartedWords = Object.keys(progress.words).length > 0;
  return !progress.hasSeenWelcome && !hasStartedWords;
}

function showWelcomePage() {
  showScreen('screen-welcome');
}

function markWelcomeAsSeen() {
  progress.hasSeenWelcome = true;
  saveProgress();
}

// «Начну с нуля» — просто открываем сайт
document.getElementById('welcome-beginner-button').addEventListener('click', function () {
  markWelcomeAsSeen();
  showCurrentPage();
});

// «Я уже что-то знаю» — переходим к входному тесту
document.getElementById('welcome-test-button').addEventListener('click', function () {
  markWelcomeAsSeen();
  if (location.hash === '#/placement') {
    showCurrentPage();
  } else {
    location.hash = '#/placement';
  }
});

/* ================= Входной тест ================= */

function showPlacementPage() {
  showScreen('screen-session');
  const backLink = document.getElementById('session-back-link');
  backLink.textContent = '← Обзор';
  backLink.href = '#/';
  document.getElementById('session-title').textContent = 'Входной тест';

  // Сначала объясняем правила, тест начинается по кнопке
  const intro = cloneTemplate('placement-intro-template');
  intro.querySelector('.start-button').addEventListener('click', function () {
    markWelcomeAsSeen(); // тест могли открыть и по прямой ссылке, минуя приветствие
    placementResults = [];
    startPlacementLevel(0);
  });
  document.getElementById('session-content').replaceChildren(intro);
}

// Вопросы одного уровня: случайные слова и по одному упражнению из разных тем грамматики
function createPlacementQuestions(level) {
  const questions = [];

  const words = shuffle(getWordsOfLevel(level)).slice(0, PLACEMENT_WORD_QUESTIONS);
  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      questions.push({ type: 'translate', word: words[i] });
    } else {
      questions.push({ type: 'choose-word', word: words[i] });
    }
  }

  const levelLessons = [];
  for (const lesson of GRAMMAR) {
    if (lesson.level === level) {
      levelLessons.push(lesson);
    }
  }
  const chosenLessons = shuffle(levelLessons).slice(0, PLACEMENT_GRAMMAR_QUESTIONS);
  for (const lesson of chosenLessons) {
    const randomExercise = shuffle(lesson.exercises)[0];
    questions.push({ type: 'grammar', exercise: randomExercise });
  }

  return shuffle(questions);
}

function startPlacementLevel(levelIndex) {
  const level = LEVELS[levelIndex];
  const content = document.getElementById('session-content');
  const questions = createPlacementQuestions(level);

  // Сколько ошибок можно сделать, чтобы уровень всё ещё был зачтён (при 16 вопросах и 80% — три)
  const neededCorrect = Math.ceil(questions.length * PASS_SCORE);
  const allowedMistakes = questions.length - neededCorrect;
  let mistakeCount = 0;

  document.getElementById('session-title').textContent = 'Входной тест · уровень ' + level;

  function onAnswer(question, isCorrect) {
    if (!isCorrect) {
      mistakeCount++;
    }
    // Ошибок уже больше допустимого — уровень не зачтён, оставшиеся вопросы можно не задавать
    if (mistakeCount > allowedMistakes) {
      questions.splice(quiz.currentIndex + 1);
    }
    return '';
  }

  function onFinish(result) {
    const isLevelPassed = mistakeCount <= allowedMistakes;
    placementResults.push({
      level: level,
      correctCount: result.correctCount,
      answeredCount: result.answeredCount,
      isPassed: isLevelPassed
    });

    if (isLevelPassed) {
      markLevelAsKnown(level, result.score);
    }

    const hasNextLevel = levelIndex + 1 < LEVELS.length;
    if (isLevelPassed && hasNextLevel) {
      startPlacementLevel(levelIndex + 1);
    } else {
      showPlacementResult();
    }
  }

  startExam(content, questions, onAnswer, onFinish);
}

function showPlacementResult() {
  let reachedLevel = 'A0';
  let nextLevel = LEVELS[0];
  const summaryParts = [];

  for (const levelResult of placementResults) {
    if (levelResult.isPassed) {
      reachedLevel = levelResult.level;
      nextLevel = LEVELS[LEVELS.indexOf(levelResult.level) + 1]; // у последнего уровня следующего нет
      summaryParts.push(levelResult.level + ' — зачтён (' + levelResult.correctCount + ' из ' + levelResult.answeredCount + ')');
    } else {
      summaryParts.push(levelResult.level + ' — не зачтён');
    }
  }

  let text = summaryParts.join(', ') + '. ';
  if (reachedLevel === 'A0') {
    text += 'Начните с уровня A1 — так вы ничего не пропустите. ';
  } else {
    text += 'Зачтённые уровни отмечены как пройденные, а их слова будут понемногу приходить на контрольное повторение: ';
    text += 'если слово забыто, оно вернётся в изучение. ';
    if (nextLevel) {
      text += 'Продолжайте с уровня ' + nextLevel + '. ';
    }
  }
  text += 'Тест оценивает словарь и грамматику; говорение и понимание на слух он не проверяет.';

  document.getElementById('session-title').textContent = 'Входной тест';
  showResult(document.getElementById('session-content'), {
    isSuccess: true,
    score: reachedLevel,
    title: 'Ваш уровень по результатам теста',
    text: text,
    linkText: 'К обзору',
    linkAddress: '#/'
  });
}
