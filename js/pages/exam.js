'use strict';

// Пробный экзамен в формате Cambridge English: чтение, аудирование, лексика и грамматика на время.
// Письма и говорения нет — их нельзя проверить автоматически.
// Результат хранится отдельно (progress.exams) и на готовность к уровню не влияет.

const EXAM_PASS_SCORE = 0.6;
const EXAM_MINUTES = { A1: 20, A2: 25, B1: 30, B2: 35 };
const EXAM_TEXTS = 2;            // сколько текстов для чтения и сколько записей
const EXAM_PLAYS = 2;            // сколько раз можно прослушать запись
const EXAM_WORD_QUESTIONS = 7;
const EXAM_GRAMMAR_QUESTIONS = 7;

// Идущий сейчас экзамен или null
let exam = null;

/* ================= Список экзаменов на странице практики ================= */

function showExamList() {
  const container = document.getElementById('practice-exams');
  container.replaceChildren();

  for (const level of LEVELS) {
    const element = cloneTemplate('list-item-template');
    const bestScore = progress.exams[level];

    element.href = '#/practice/exam/' + level;
    element.querySelector('.item-number').textContent = level;
    element.querySelector('.item-title-text').textContent = 'Пробный экзамен ' + level;
    element.querySelector('.item-description').textContent = EXAM_MINUTES[level] + ' минут, чтение, аудирование, лексика и грамматика';

    const stateElement = element.querySelector('.item-state');
    if (bestScore === undefined) {
      stateElement.textContent = '';
    } else if (bestScore >= EXAM_PASS_SCORE) {
      stateElement.textContent = '✓ ' + formatScore(bestScore);
      element.classList.add('passed');
    } else {
      stateElement.textContent = formatScore(bestScore);
    }
    container.append(element);
  }
}

/* ================= Экран экзамена ================= */

function showExamPage(level) {
  if (!LEVELS.includes(level)) {
    showPracticePage();
    return;
  }
  showScreen('screen-exam');
  document.getElementById('exam-title').textContent = 'Пробный экзамен ' + level;
  hideExamMaterials();
  document.getElementById('exam-bar').hidden = true;

  const intro = cloneTemplate('exam-intro-template');
  intro.querySelector('.exam-minutes').textContent = EXAM_MINUTES[level];
  const bestScore = progress.exams[level];
  if (bestScore !== undefined) {
    intro.querySelector('.exam-best').textContent = 'Ваш лучший результат: ' + formatScore(bestScore) + '.';
  }
  intro.querySelector('.start-button').addEventListener('click', function () {
    startMockExam(level);
  });
  document.getElementById('exam-content').replaceChildren(intro);
}

function hideExamMaterials() {
  document.getElementById('exam-text').hidden = true;
  document.getElementById('exam-player').hidden = true;
}

// Случайные материалы уровня
function pickForLevel(items, level, count) {
  const levelItems = [];
  for (const item of items) {
    if (item.level === level) {
      levelItems.push(item);
    }
  }
  return shuffle(levelItems).slice(0, count);
}

function createComprehensionQuestions(material) {
  const questions = [];
  for (const question of material.questions) {
    questions.push({ type: 'comprehension', exercise: question });
  }
  return questions;
}

function createLanguageQuestions(level) {
  const questions = [];

  const words = shuffle(getWordsOfLevel(level)).slice(0, EXAM_WORD_QUESTIONS);
  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      questions.push({ type: 'translate', word: words[i] });
    } else {
      questions.push({ type: 'choose-word', word: words[i] });
    }
  }

  let exercises = [];
  for (const lesson of GRAMMAR) {
    if (lesson.level === level) {
      exercises = exercises.concat(lesson.exercises);
    }
  }
  for (const exercise of shuffle(exercises).slice(0, EXAM_GRAMMAR_QUESTIONS)) {
    questions.push({ type: 'grammar', exercise: exercise });
  }

  return shuffle(questions);
}

function startMockExam(level) {
  // Экзамен состоит из частей. Каждая часть относится к одному из трёх разделов.
  const sections = [
    { name: 'Чтение', correct: 0, total: 0 },
    { name: 'Аудирование', correct: 0, total: 0 },
    { name: 'Лексика и грамматика', correct: 0, total: 0 }
  ];
  const parts = [];

  for (const reading of pickForLevel(READING, level, EXAM_TEXTS)) {
    parts.push({ section: sections[0], text: reading.text, audio: null, questions: createComprehensionQuestions(reading) });
  }
  for (const listening of pickForLevel(LISTENING, level, EXAM_TEXTS)) {
    parts.push({ section: sections[1], text: null, audio: listening.text, questions: createComprehensionQuestions(listening) });
  }
  parts.push({ section: sections[2], text: null, audio: null, questions: createLanguageQuestions(level) });

  for (const part of parts) {
    part.section.total += part.questions.length;
  }

  exam = {
    level: level,
    sections: sections,
    parts: parts,
    partIndex: 0,
    playsLeft: 0,
    secondsLeft: EXAM_MINUTES[level] * 60,
    timerId: null
  };

  document.getElementById('exam-bar').hidden = false;
  showExamTime();
  exam.timerId = setInterval(tickExamTimer, 1000);
  showExamPart();
}

function showExamPart() {
  const part = exam.parts[exam.partIndex];
  stopSpeaking();

  document.getElementById('exam-part').textContent =
    'Часть ' + (exam.partIndex + 1) + ' из ' + exam.parts.length + ' · ' + part.section.name;

  // Для чтения показываем текст, для аудирования — кнопку прослушивания
  const textElement = document.getElementById('exam-text');
  textElement.hidden = part.text === null;
  textElement.textContent = part.text || '';

  document.getElementById('exam-player').hidden = part.audio === null;
  exam.playsLeft = EXAM_PLAYS;
  showExamPlaysLeft();

  startExam(document.getElementById('exam-content'), part.questions, null, finishExamPart);
  window.scrollTo(0, 0);
}

function finishExamPart(result) {
  exam.parts[exam.partIndex].section.correct += result.correctCount;
  exam.partIndex++;

  if (exam.partIndex < exam.parts.length) {
    showExamPart();
  } else {
    finishMockExam(false);
  }
}

function showExamPlaysLeft() {
  document.getElementById('exam-plays-left').textContent = 'Осталось прослушиваний: ' + exam.playsLeft;
  document.getElementById('exam-play-button').disabled = exam.playsLeft === 0;
}

document.getElementById('exam-play-button').addEventListener('click', function () {
  if (!exam || exam.playsLeft === 0) {
    return;
  }
  exam.playsLeft--;
  showExamPlaysLeft();
  speakText(exam.parts[exam.partIndex].audio, false);
});

/* ================= Таймер ================= */

function showExamTime() {
  const minutes = Math.floor(exam.secondsLeft / 60);
  const seconds = exam.secondsLeft % 60;
  const timer = document.getElementById('exam-timer');
  timer.textContent = minutes + ':' + String(seconds).padStart(2, '0');
  // Последняя минута выделяется цветом
  timer.classList.toggle('low', exam.secondsLeft <= 60);
}

function tickExamTimer() {
  exam.secondsLeft--;
  showExamTime();
  if (exam.secondsLeft <= 0) {
    finishMockExam(true);
  }
}

// Останавливает таймер. Вызывается и при уходе со страницы экзамена (см. main.js).
function stopExamTimer() {
  if (exam && exam.timerId !== null) {
    clearInterval(exam.timerId);
    exam.timerId = null;
  }
}

/* ================= Итог ================= */

function finishMockExam(isTimeUp) {
  stopExamTimer();
  stopSpeaking();

  // Если время вышло посреди части, засчитываем то, что в ней уже отвечено верно
  if (isTimeUp && exam.partIndex < exam.parts.length) {
    exam.parts[exam.partIndex].section.correct += quiz.correctCount;
  }

  let correct = 0;
  let total = 0;
  let text = '';
  if (isTimeUp) {
    text = 'Время вышло. ';
  }
  for (const section of exam.sections) {
    correct += section.correct;
    total += section.total;
    text += section.name + ': ' + section.correct + ' из ' + section.total + '. ';
  }
  text += 'Проходной балл — ' + (EXAM_PASS_SCORE * 100) + '%. Письмо и говорение в пробный экзамен не входят.';

  const score = correct / total;
  const level = exam.level;
  const previousBest = progress.exams[level] || 0;
  if (progress.exams[level] === undefined || score > previousBest) {
    progress.exams[level] = score;
  }
  markActivityToday();
  saveProgress();
  exam = null;

  hideExamMaterials();
  document.getElementById('exam-bar').hidden = true;

  const isPassedNow = score >= EXAM_PASS_SCORE;
  showResult(document.getElementById('exam-content'), {
    isSuccess: isPassedNow,
    score: formatScore(score),
    title: isPassedNow ? 'Экзамен сдан' : 'Экзамен не сдан',
    text: text,
    againText: 'Пройти ещё раз',
    onAgain: function () {
      showExamPage(level);
    },
    linkText: 'К практике',
    linkAddress: '#/practice'
  });
}
