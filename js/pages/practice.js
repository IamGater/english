'use strict';

// Раздел «Практика»: список заданий, тест уровня и диалоги.

const TEST_WORD_QUESTIONS = 10;
const TEST_GRAMMAR_QUESTIONS = 10;

/* ================= Список заданий ================= */

function showPracticePage() {
  showScreen('screen-practice');
  const container = document.getElementById('practice-list');
  showItemsByLevel(container, PRACTICE, progress.practice, function (task) {
    return task.link;
  });
}

/* ================= Тест уровня ================= */

// В тесте случайные слова и случайные упражнения уровня.
// Ответы в тесте не меняют этапы слов — он только проверяет знания.
function showTestPage(level) {
  if (!LEVELS.includes(level)) {
    showPracticePage();
    return;
  }

  showScreen('screen-session');
  const backLink = document.getElementById('session-back-link');
  backLink.textContent = '← Практика';
  backLink.href = '#/practice';
  document.getElementById('session-title').textContent = 'Тест уровня ' + level;
  const content = document.getElementById('session-content');

  let questions = [];

  // Вопросы по словам: через один «выбрать перевод» и «выбрать слово»
  const testWords = shuffle(getWordsOfLevel(level)).slice(0, TEST_WORD_QUESTIONS);
  for (let i = 0; i < testWords.length; i++) {
    if (i % 2 === 0) {
      questions.push({ type: 'translate', word: testWords[i] });
    } else {
      questions.push({ type: 'choose-word', word: testWords[i] });
    }
  }

  // Упражнения собираем из всех тем этого уровня
  let levelExercises = [];
  for (const lesson of GRAMMAR) {
    if (lesson.level === level) {
      levelExercises = levelExercises.concat(lesson.exercises);
    }
  }
  const testExercises = shuffle(levelExercises).slice(0, TEST_GRAMMAR_QUESTIONS);
  for (const exercise of testExercises) {
    questions.push({ type: 'grammar', exercise: exercise });
  }

  questions = shuffle(questions);

  function onFinish(result) {
    saveBestScore(progress.practice, 'test-' + level, result.score);
    const text = 'Верно ' + result.correctCount + ' из ' + result.answeredCount + '.';
    showScoreResult(content, result.score, text, {
      onAgain: function () {
        showTestPage(level);
      },
      linkText: 'К практике',
      linkAddress: '#/practice'
    });
  }

  startQuiz(content, questions, null, onFinish);
}

/* ================= Диалог ================= */

// Реплики собеседника появляются сами, свою реплику нужно выбрать из трёх вариантов.
// Засчитываются только реплики, выбранные верно с первой попытки.

let currentDialog = null;
let dialogTurnIndex = 0;
let dialogReplyCount = 0;
let dialogMistakeCount = 0;

function showDialogPage(dialogId) {
  const dialog = findDialog(dialogId);
  if (!dialog) {
    showPracticePage();
    return;
  }

  currentDialog = dialog;
  dialogTurnIndex = 0;
  dialogReplyCount = 0;
  dialogMistakeCount = 0;

  showScreen('screen-dialog');
  document.getElementById('dialog-title').textContent = dialog.title;
  document.getElementById('dialog-scene').textContent = dialog.scene;
  document.getElementById('dialog-chat').replaceChildren();
  document.getElementById('dialog-reply').replaceChildren();

  continueDialog();
}

function continueDialog() {
  const turns = currentDialog.turns;

  // Показываем реплики собеседника, пока не дойдём до реплики пользователя
  while (dialogTurnIndex < turns.length && turns[dialogTurnIndex].speaker === 'partner') {
    const turn = turns[dialogTurnIndex];
    addDialogBubble(turn, false);
    if (dialogTurnIndex > 0) {
      speak(turn.english); // самую первую реплику не озвучиваем: пользователь ещё ничего не нажал
    }
    dialogTurnIndex++;
  }

  if (dialogTurnIndex >= turns.length) {
    finishDialog();
  } else {
    askDialogReply(turns[dialogTurnIndex]);
  }
}

function addDialogBubble(turn, isMine) {
  const bubble = cloneTemplate('bubble-template');
  bubble.querySelector('.bubble-text').textContent = turn.english;
  bubble.querySelector('.bubble-translation').textContent = turn.russian;
  bubble.querySelector('.speak-button').dataset.text = turn.english;
  if (isMine) {
    bubble.classList.add('mine');
  }
  document.getElementById('dialog-chat').append(bubble);
}

function askDialogReply(turn) {
  const replyContainer = document.getElementById('dialog-reply');
  const element = cloneTemplate('reply-template');
  let hasMistake = false;
  dialogReplyCount++;

  const texts = shuffle([turn.english].concat(turn.wrong));
  const buttons = createOptionButtons(element.querySelector('.options'), texts);

  for (const button of buttons) {
    button.addEventListener('click', function () {
      if (button.textContent !== turn.english) {
        // Неверный вариант отключаем, пользователь выбирает дальше
        button.classList.add('wrong');
        button.disabled = true;
        if (!hasMistake) {
          hasMistake = true;
          dialogMistakeCount++;
        }
        return;
      }

      replyContainer.replaceChildren();
      addDialogBubble(turn, true);
      dialogTurnIndex++;
      continueDialog();
    });
  }

  replyContainer.replaceChildren(element);
}

function finishDialog() {
  const correctCount = dialogReplyCount - dialogMistakeCount;
  const score = correctCount / dialogReplyCount;
  const dialogId = currentDialog.id;

  saveBestScore(progress.practice, dialogId, score);

  const text = 'Реплик с первой попытки: ' + correctCount + ' из ' + dialogReplyCount + '.';
  showScoreResult(document.getElementById('dialog-reply'), score, text, {
    onAgain: function () {
      showDialogPage(dialogId);
    },
    linkText: 'К практике',
    linkAddress: '#/practice'
  });
}

// Галочка «Показывать перевод» работает для всех реплик сразу
document.getElementById('dialog-translation-checkbox').addEventListener('change', function (event) {
  document.getElementById('dialog-chat').classList.toggle('show-translation', event.target.checked);
});
