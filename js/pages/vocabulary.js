'use strict';

// Раздел «Словарь»: список слов, карточки для просмотра и тренировка.

const MAX_REVIEWS_PER_SESSION = 30;
const NEW_WORDS_GROUP_SIZE = 5;

/* ================= Список слов ================= */

let vocabularyLevel = 'A1';

function showVocabularyPage(level) {
  if (!LEVELS.includes(level)) {
    level = getCurrentLevel();
  }
  vocabularyLevel = level;
  showScreen('screen-vocabulary');

  // На вкладках показываем, сколько слов уровня уже выучено
  const tabs = document.querySelectorAll('#vocabulary-tabs .tab');
  for (const tab of tabs) {
    const tabWords = getWordsOfLevel(tab.dataset.level);
    let learnedCount = 0;
    for (const word of tabWords) {
      if (isWordLearned(word)) {
        learnedCount++;
      }
    }
    tab.querySelector('small').textContent = learnedCount + ' / ' + tabWords.length;
    tab.classList.toggle('active', tab.dataset.level === level);
  }

  const trainLink = document.getElementById('vocabulary-train-link');
  trainLink.textContent = 'Тренировка ' + level;
  trainLink.href = '#/vocab/train/' + level;
  document.getElementById('vocabulary-cards-link').href = '#/vocab/cards/' + level;

  renderWordList();
}

// Рисует список заново с учётом поиска и фильтра
function renderWordList() {
  const searchText = document.getElementById('vocabulary-search').value.trim().toLowerCase();
  const filter = document.getElementById('vocabulary-filter').value;
  const list = document.getElementById('vocabulary-list');

  list.replaceChildren();
  let currentTopic = null;
  let shownCount = 0;

  for (const word of getWordsOfLevel(vocabularyLevel)) {
    if (!doesWordMatchFilter(word, filter)) {
      continue;
    }
    if (searchText !== '') {
      const isInEnglish = word.english.toLowerCase().includes(searchText);
      const isInRussian = word.russian.toLowerCase().includes(searchText);
      if (!isInEnglish && !isInRussian) {
        continue;
      }
    }

    // Перед первым словом каждой темы ставим её название
    if (word.topic !== currentTopic) {
      currentTopic = word.topic;
      const topicElement = cloneTemplate('word-topic-template');
      topicElement.textContent = word.topic;
      list.append(topicElement);
    }

    list.append(createWordRow(word));
    shownCount++;
  }

  list.hidden = shownCount === 0;
  document.getElementById('vocabulary-empty').hidden = shownCount > 0;
}

function doesWordMatchFilter(word, filter) {
  if (filter === 'new') {
    return isWordNew(word);
  }
  if (filter === 'learning') {
    return !isWordNew(word) && !isWordLearned(word);
  }
  if (filter === 'due') {
    return isWordDue(word);
  }
  if (filter === 'learned') {
    return isWordLearned(word);
  }
  return true; // «Все слова»
}

function createWordRow(word) {
  const row = cloneTemplate('word-row-template');
  fillWordElements(row, word);

  // Три точки показывают этап слова
  const stage = getWordStage(word);
  const dotsElement = row.querySelector('.stage-dots');
  const dots = dotsElement.querySelectorAll('i');
  for (let i = 0; i < dots.length; i++) {
    if (stage > i) {
      dots[i].classList.add('filled');
    }
  }
  if (stage >= LEARNED_STAGE) {
    dotsElement.classList.add('complete');
  }
  dotsElement.title = getStageHint(word);

  return row;
}

document.getElementById('vocabulary-search').addEventListener('input', renderWordList);
document.getElementById('vocabulary-filter').addEventListener('change', renderWordList);

// Клик по строке раскрывает пример (но не клик по кнопке озвучки)
document.getElementById('vocabulary-list').addEventListener('click', function (event) {
  if (event.target.closest('.speak-button')) {
    return;
  }
  const row = event.target.closest('.word-row');
  if (row) {
    row.classList.toggle('open');
  }
});

/* ================= Карточки ================= */

let flashcardWords = [];
let flashcardIndex = 0;

function showFlashcardsPage(level) {
  if (!LEVELS.includes(level)) {
    level = getCurrentLevel();
  }
  showScreen('screen-flashcards');

  flashcardWords = getWordsOfLevel(level);
  flashcardIndex = 0;

  document.getElementById('flashcards-back-link').href = '#/vocab/' + level;
  document.getElementById('flashcards-level').textContent = level;
  showFlashcard();
}

function showFlashcard() {
  const word = flashcardWords[flashcardIndex];

  fillWordElements(document.getElementById('flashcard'), word);
  document.getElementById('flashcard-topic').textContent = word.topic;
  document.getElementById('flashcards-counter').textContent = (flashcardIndex + 1) + ' / ' + flashcardWords.length;

  // Новая карточка всегда показывается английской стороной
  document.getElementById('flashcard-back').hidden = true;
  document.getElementById('flashcard-hint').hidden = false;
}

function goToFlashcard(index) {
  // С последней карточки переходим на первую и наоборот
  if (index < 0) {
    index = flashcardWords.length - 1;
  }
  if (index >= flashcardWords.length) {
    index = 0;
  }
  flashcardIndex = index;
  showFlashcard();
  speak(flashcardWords[flashcardIndex].english);
}

document.getElementById('flashcard').addEventListener('click', function (event) {
  if (event.target.closest('.speak-button')) {
    return;
  }
  const back = document.getElementById('flashcard-back');
  back.hidden = !back.hidden;
  document.getElementById('flashcard-hint').hidden = !back.hidden;
});

document.getElementById('flashcards-previous-button').addEventListener('click', function () {
  goToFlashcard(flashcardIndex - 1);
});
document.getElementById('flashcards-next-button').addEventListener('click', function () {
  goToFlashcard(flashcardIndex + 1);
});
document.getElementById('flashcards-random-button').addEventListener('click', function () {
  goToFlashcard(Math.floor(Math.random() * flashcardWords.length));
});

/* ================= Тренировка ================= */

// scope — уровень («A1») или «all» для всех уровней сразу
function showTrainingPage(scope) {
  let words = WORDS;
  let title = 'Тренировка';
  let backAddress = '#/vocab';
  if (LEVELS.includes(scope)) {
    words = getWordsOfLevel(scope);
    title = 'Тренировка ' + scope;
    backAddress = '#/vocab/' + scope;
  }

  showScreen('screen-session');
  const backLink = document.getElementById('session-back-link');
  backLink.textContent = '← Словарь';
  backLink.href = backAddress;
  document.getElementById('session-title').textContent = title;
  const content = document.getElementById('session-content');

  // Слова, которые пора повторить: сначала те, что ждут дольше всех
  let dueWords = [];
  for (const word of words) {
    if (isWordDue(word)) {
      dueWords.push(word);
    }
  }
  dueWords.sort(function (first, second) {
    return progress.words[first.id].nextReview - progress.words[second.id].nextReview;
  });
  dueWords = dueWords.slice(0, MAX_REVIEWS_PER_SESSION);

  // Новые слова берём по порядку, как они идут в словаре
  const newWords = [];
  for (const word of words) {
    if (isWordNew(word) && newWords.length < progress.newWordsPerSession) {
      newWords.push(word);
    }
  }

  if (dueWords.length === 0 && newWords.length === 0) {
    content.replaceChildren(cloneTemplate('nothing-to-train-template'));
    return;
  }

  const questions = [];
  for (const word of shuffle(dueWords)) {
    questions.push({ type: getQuestionType(word), word: word });
  }
  // Новые слова идут группами: сначала знакомимся с пятью словами, потом проверяем их
  for (let start = 0; start < newWords.length; start += NEW_WORDS_GROUP_SIZE) {
    const group = newWords.slice(start, start + NEW_WORDS_GROUP_SIZE);
    for (const word of group) {
      questions.push({ type: 'new-word', word: word });
    }
    for (const word of shuffle(group)) {
      questions.push({ type: 'translate', word: word });
    }
  }

  let learnedCount = 0;

  function onAnswer(question, isCorrect) {
    const result = gradeWord(question.word, isCorrect, question.skipStage === true);
    if (result.justLearned) {
      learnedCount++;
    }
    // После ошибки слово спрашиваем ещё раз в конце тренировки
    if (!isCorrect) {
      questions.push({ type: question.type, word: question.word, isRetry: true });
    }
    return result.message;
  }

  function onFinish(result) {
    let hasMoreNewWords = false;
    for (const word of words) {
      if (isWordNew(word)) {
        hasMoreNewWords = true;
      }
    }

    const options = {
      isSuccess: true,
      score: result.correctCount + ' / ' + result.answeredCount,
      title: 'Тренировка завершена',
      text: 'Повторено: ' + dueWords.length + '. Новых слов начато: ' + newWords.length + '. Выучено за тренировку: ' + learnedCount + '.',
      linkText: 'К обзору',
      linkAddress: '#/'
    };
    if (hasMoreNewWords) {
      options.againText = 'Ещё новые слова';
      options.onAgain = function () {
        showTrainingPage(scope);
      };
    }
    showResult(content, options);
  }

  startQuiz(content, questions, onAnswer, onFinish);
}
