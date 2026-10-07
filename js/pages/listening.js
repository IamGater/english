'use strict';

// Аудирование и диктант. Записей как файлов нет: текст читает голос браузера (см. speech.js).

const DICTATION_WORDS = 10;

/* ================= Аудирование ================= */

let currentListening = null;

function showListeningPage(listeningId) {
  const listening = findListening(listeningId);
  if (!listening) {
    showPracticePage();
    return;
  }
  currentListening = listening;
  showScreen('screen-listening');

  document.getElementById('listening-title').textContent = listening.title;
  document.getElementById('listening-text').textContent = listening.text;
  document.getElementById('listening-no-speech').hidden = isSpeechSupported;

  // Текст записи прячем заново при каждом заходе
  const transcript = document.getElementById('listening-transcript');
  transcript.hidden = true;
  transcript.open = false;

  showListeningStart();
}

// Блок перед вопросами: сколько их, лучший результат и кнопка
function showListeningStart() {
  const element = cloneTemplate('listening-start-template');
  const questionCount = currentListening.questions.length;
  const bestScore = progress.practice[currentListening.id];

  let info = 'Сначала прослушайте запись. Вопросов: ' + questionCount + ', для зачёта нужно ' + (PASS_SCORE * 100) + '% верных ответов.';
  if (bestScore !== undefined) {
    info += ' Лучший результат: ' + formatScore(bestScore) + '.';
  }
  element.querySelector('.listening-info').textContent = info;
  element.querySelector('.start-button').addEventListener('click', startListeningQuestions);

  document.getElementById('listening-content').replaceChildren(element);
}

function startListeningQuestions() {
  // Вопрос к записи устроен так же, как упражнение с вариантами, поэтому подходит обычная викторина
  const questions = [];
  for (const question of currentListening.questions) {
    questions.push({ type: 'comprehension', exercise: question });
  }
  startQuiz(document.getElementById('listening-content'), questions, null, finishListening);
}

function finishListening(result) {
  saveBestScore(progress.practice, currentListening.id, result.score);

  // После ответов можно посмотреть текст и проверить себя
  document.getElementById('listening-transcript').hidden = false;

  const text = 'Верно ' + result.correctCount + ' из ' + result.answeredCount + '. Ниже можно открыть текст записи.';
  showScoreResult(document.getElementById('listening-content'), result.score, text, {
    onAgain: startListeningQuestions,
    linkText: 'К практике',
    linkAddress: '#/practice'
  });
}

document.getElementById('listening-play-button').addEventListener('click', function () {
  const isSlow = document.getElementById('listening-slow-checkbox').checked;
  speakText(currentListening.text, isSlow);
});
document.getElementById('listening-stop-button').addEventListener('click', stopSpeaking);

/* ================= Диктант ================= */

// Звучат случайные слова уровня, каждое нужно написать. На этапы слов диктант не влияет.
function showDictationPage(level) {
  if (!LEVELS.includes(level)) {
    showPracticePage();
    return;
  }

  showScreen('screen-session');
  const backLink = document.getElementById('session-back-link');
  backLink.textContent = '← Практика';
  backLink.href = '#/practice';
  document.getElementById('session-title').textContent = 'Диктант уровня ' + level;
  const content = document.getElementById('session-content');

  if (!isSpeechSupported) {
    content.replaceChildren(cloneTemplate('no-speech-template'));
    return;
  }

  const questions = [];
  const words = shuffle(getWordsOfLevel(level)).slice(0, DICTATION_WORDS);
  for (const word of words) {
    questions.push({ type: 'dictation', word: word });
  }

  function onFinish(result) {
    saveBestScore(progress.practice, 'dictation-' + level, result.score);
    const text = 'Верно ' + result.correctCount + ' из ' + result.answeredCount + '. Пишите слово или выражение целиком, как слышите.';
    showScoreResult(content, result.score, text, {
      onAgain: function () {
        showDictationPage(level);
      },
      linkText: 'К практике',
      linkAddress: '#/practice'
    });
  }

  startQuiz(content, questions, null, onFinish);
}
