'use strict';

// Чтение: текст виден всё время, под ним — вопросы на понимание.

let currentReading = null;

function showReadingPage(readingId) {
  const reading = findReading(readingId);
  if (!reading) {
    showPracticePage();
    return;
  }
  currentReading = reading;
  showScreen('screen-reading');

  document.getElementById('reading-title').textContent = reading.title;
  document.getElementById('reading-text').textContent = reading.text;

  showReadingStart();
}

// Блок под текстом: сколько вопросов, лучший результат и кнопка
function showReadingStart() {
  const element = cloneTemplate('listening-start-template');
  const questionCount = currentReading.questions.length;
  const bestScore = progress.practice[currentReading.id];

  let info = 'Вопросов: ' + questionCount + ', для зачёта нужно ' + (PASS_SCORE * 100) + '% верных ответов.';
  if (bestScore !== undefined) {
    info += ' Лучший результат: ' + formatScore(bestScore) + '.';
  }
  element.querySelector('.listening-info').textContent = info;
  element.querySelector('.start-button').addEventListener('click', startReadingQuestions);

  document.getElementById('reading-content').replaceChildren(element);
}

function startReadingQuestions() {
  const questions = [];
  for (const question of currentReading.questions) {
    questions.push({ type: 'comprehension', exercise: question });
  }
  startQuiz(document.getElementById('reading-content'), questions, null, finishReading);
}

function finishReading(result) {
  saveBestScore(progress.practice, currentReading.id, result.score);

  const text = 'Верно ' + result.correctCount + ' из ' + result.answeredCount + '.';
  showScoreResult(document.getElementById('reading-content'), result.score, text, {
    onAgain: startReadingQuestions,
    linkText: 'К практике',
    linkAddress: '#/practice'
  });
}
