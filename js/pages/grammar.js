'use strict';

// Раздел «Грамматика»: список тем и урок с упражнениями.

/* ================= Список тем ================= */

function showGrammarPage() {
  showScreen('screen-grammar');
  const container = document.getElementById('grammar-list');
  showItemsByLevel(container, GRAMMAR, progress.grammar, function (lesson) {
    return '#/grammar/' + lesson.id;
  });
}

// Выводит список, разбитый по уровням. Используется и для тем грамматики, и для заданий практики.
//   items      — темы или задания (у каждого есть id, level, title)
//   scores     — лучшие результаты пользователя
//   getAddress — функция, которая возвращает ссылку для пункта
function showItemsByLevel(container, items, scores, getAddress) {
  container.replaceChildren();

  for (const level of LEVELS) {
    const group = cloneTemplate('level-group-template');
    const list = group.querySelector('.list');
    let totalCount = 0;
    let passedCount = 0;

    for (const item of items) {
      if (item.level !== level) {
        continue;
      }
      totalCount++;
      if (isPassed(scores, item.id)) {
        passedCount++;
      }
      list.append(createListItem(item, totalCount, scores, getAddress(item)));
    }

    const countBadge = group.querySelector('.group-count');
    group.querySelector('.group-level').textContent = level;
    countBadge.textContent = passedCount + ' / ' + totalCount;
    if (passedCount === totalCount) {
      countBadge.classList.add('ok');
    }

    container.append(group);
  }
}

function createListItem(item, number, scores, address) {
  const element = cloneTemplate('list-item-template');
  const bestScore = scores[item.id];

  element.href = address;
  element.querySelector('.item-number').textContent = number;
  element.querySelector('.item-title-text').textContent = item.title;
  element.querySelector('.item-description').textContent = item.description || '';

  // Справа показываем галочку, если зачтено, или лучший результат, если ещё нет
  const stateElement = element.querySelector('.item-state');
  if (bestScore === undefined) {
    stateElement.textContent = '';
  } else if (bestScore >= PASS_SCORE) {
    stateElement.textContent = '✓';
    element.classList.add('passed');
  } else {
    stateElement.textContent = formatScore(bestScore);
  }

  return element;
}

/* ================= Урок ================= */

let currentLesson = null;

// За одну попытку задаётся не весь банк упражнений, а случайная выборка: так нельзя
// пройти тему, запомнив ответы или угадывая. Не меньше трети вопросов — с вписыванием слова.
const LESSON_QUESTION_COUNT = 10;
const MIN_TYPED_SHARE = 0.4;

// Какие упражнения темы были в прошлой попытке (в этой сессии): в новой попытке они идут в последнюю очередь
const lastAskedExercises = {};

// Выбирает упражнения для одной попытки
function pickLessonExercises(lesson) {
  const previous = lastAskedExercises[lesson.id] || [];
  const fresh = [];
  const seen = [];
  for (const exercise of shuffle(lesson.exercises)) {
    (previous.indexOf(exercise) === -1 ? fresh : seen).push(exercise);
  }
  const ordered = fresh.concat(seen);

  const typed = ordered.filter(function (exercise) { return !exercise.options; });
  const choice = ordered.filter(function (exercise) { return exercise.options; });
  const typedWanted = Math.min(typed.length, Math.ceil(LESSON_QUESTION_COUNT * MIN_TYPED_SHARE));

  // Сначала обязательные «впишите слово», потом остальное в порядке «свежести»
  const picked = typed.slice(0, typedWanted);
  for (const exercise of ordered) {
    if (picked.length >= LESSON_QUESTION_COUNT) {
      break;
    }
    if (picked.indexOf(exercise) === -1) {
      picked.push(exercise);
    }
  }
  lastAskedExercises[lesson.id] = picked;
  return shuffle(picked);
}

function showLessonPage(lessonId) {
  const lesson = findLesson(lessonId);
  if (!lesson) {
    showGrammarPage();
    return;
  }
  currentLesson = lesson;
  showScreen('screen-lesson');

  document.getElementById('lesson-level').textContent = lesson.level;
  document.getElementById('lesson-title').textContent = lesson.title;
  // Правило хранится в данных готовой разметкой (с таблицами и списками)
  document.getElementById('lesson-rule').innerHTML = lesson.rule;

  showLessonStart();
}

// Блок под правилом: сколько упражнений, лучший результат и кнопка «Начать»
function showLessonStart() {
  const element = cloneTemplate('lesson-start-template');
  const startButton = element.querySelector('.start-button');
  const exerciseCount = Math.min(LESSON_QUESTION_COUNT, currentLesson.exercises.length);
  const bestScore = progress.grammar[currentLesson.id];

  let info = exerciseCount + ' ' + pluralize(exerciseCount, 'задание', 'задания', 'заданий') + '. ';
  info += 'Для зачёта нужно ' + (PASS_SCORE * 100) + '% верных ответов.';
  if (bestScore !== undefined) {
    info += ' Лучший результат: ' + formatScore(bestScore) + '.';
    startButton.textContent = 'Пройти ещё раз';
  }
  element.querySelector('.lesson-info').textContent = info;
  startButton.addEventListener('click', startLessonExercises);

  document.getElementById('lesson-content').replaceChildren(element);
}

function startLessonExercises() {
  const content = document.getElementById('lesson-content');

  const questions = [];
  for (const exercise of pickLessonExercises(currentLesson)) {
    questions.push({ type: 'grammar', exercise: exercise });
  }

  startQuiz(content, questions, null, finishLessonExercises);
  content.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishLessonExercises(result) {
  saveBestScore(progress.grammar, currentLesson.id, result.score);

  let text = 'Верно ' + result.correctCount + ' из ' + result.answeredCount + '. ';
  if (result.score >= PASS_SCORE) {
    text += 'Тема засчитана.';
  } else {
    text += 'Перечитайте правило и попробуйте снова.';
  }

  const options = {
    againText: 'Ещё раз',
    onAgain: startLessonExercises,
    linkText: 'К списку тем',
    linkAddress: '#/grammar'
  };
  // Если это не последняя тема, предлагаем перейти к следующей
  const nextLesson = GRAMMAR[GRAMMAR.indexOf(currentLesson) + 1];
  if (nextLesson) {
    options.linkText = 'Следующая тема';
    options.linkAddress = '#/grammar/' + nextLesson.id;
  }

  showScoreResult(document.getElementById('lesson-content'), result.score, text, options);
}
