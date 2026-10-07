'use strict';

// Работа над ошибками. Каждый неверный ответ запоминается (кроме входного теста и экзамена),
// а здесь эти слова и упражнения можно пройти заново. Верный ответ убирает вопрос из списка.

const MAX_MISTAKE_WORDS = 15;
const MAX_MISTAKE_EXERCISES = 10;

// Вызывается из викторины после неверного ответа
function rememberMistake(question) {
  if (question.type === 'grammar') {
    // У упражнений нет своего номера, поэтому запоминаем их по тексту вопроса
    const key = question.exercise.question;
    progress.grammarMistakes[key] = (progress.grammarMistakes[key] || 0) + 1;
  } else if (question.word) {
    const wordId = question.word.id;
    progress.wordMistakes[wordId] = (progress.wordMistakes[wordId] || 0) + 1;
  }
}

function forgetMistake(question) {
  if (question.type === 'grammar') {
    delete progress.grammarMistakes[question.exercise.question];
  } else if (question.word) {
    delete progress.wordMistakes[question.word.id];
  }
}

// Слова с ошибками: сначала те, в которых ошибались чаще
function getMistakeWords() {
  const words = [];
  for (const word of WORDS) {
    if (progress.wordMistakes[word.id]) {
      words.push(word);
    }
  }
  words.sort(function (first, second) {
    return progress.wordMistakes[second.id] - progress.wordMistakes[first.id];
  });
  return words;
}

function getMistakeExercises() {
  const exercises = [];
  for (const lesson of GRAMMAR) {
    for (const exercise of lesson.exercises) {
      if (progress.grammarMistakes[exercise.question]) {
        exercises.push(exercise);
      }
    }
  }
  return exercises;
}

function countMistakes() {
  return getMistakeWords().length + getMistakeExercises().length;
}

function showMistakesPage() {
  showScreen('screen-session');
  const backLink = document.getElementById('session-back-link');
  backLink.textContent = '← Обзор';
  backLink.href = '#/';
  document.getElementById('session-title').textContent = 'Работа над ошибками';
  const content = document.getElementById('session-content');

  const words = getMistakeWords().slice(0, MAX_MISTAKE_WORDS);
  const exercises = getMistakeExercises().slice(0, MAX_MISTAKE_EXERCISES);

  if (words.length === 0 && exercises.length === 0) {
    content.replaceChildren(cloneTemplate('no-mistakes-template'));
    return;
  }

  let questions = [];
  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      questions.push({ type: 'translate', word: words[i] });
    } else {
      questions.push({ type: 'choose-word', word: words[i] });
    }
  }
  for (const exercise of exercises) {
    questions.push({ type: 'grammar', exercise: exercise });
  }
  questions = shuffle(questions);

  function onAnswer(question, isCorrect) {
    if (isCorrect) {
      forgetMistake(question);
      saveProgress();
      return 'Ошибка исправлена, вопрос убран из списка.';
    }
    return 'Вопрос останется в списке ошибок.';
  }

  function onFinish(result) {
    const mistakesLeft = countMistakes();
    const options = {
      isSuccess: true,
      score: result.correctCount + ' / ' + result.answeredCount,
      title: 'Работа над ошибками завершена',
      text: 'Исправлено: ' + result.correctCount + '. В списке ошибок осталось: ' + mistakesLeft + '.',
      linkText: 'К обзору',
      linkAddress: '#/'
    };
    if (mistakesLeft > 0) {
      options.againText = 'Продолжить';
      options.onAgain = showMistakesPage;
    }
    showResult(content, options);
  }

  startQuiz(content, questions, onAnswer, onFinish);
}
