'use strict';

// Раздел «Глаголы»: таблица неправильных глаголов и тренировка.
// Прогресс по глаголу — сколько раз подряд верно названы обе формы.
// Три раза подряд — глагол считается выученным, ошибка обнуляет счётчик.

const VERB_LEARNED_STREAK = 3;
const VERBS_PER_SESSION = 10;

function isVerbKnown(verb) {
  return (progress.verbs[verb.base] || 0) >= VERB_LEARNED_STREAK;
}

// Если форм две («learnt/learned»), подойдёт любая из них
function isVerbFormCorrect(typedText, correctForms) {
  const typed = normalizeAnswer(typedText);
  for (const form of correctForms.split('/')) {
    if (typed === normalizeAnswer(form)) {
      return true;
    }
  }
  return false;
}

/* ================= Таблица ================= */

function showVerbsPage() {
  showScreen('screen-verbs');

  let knownCount = 0;
  for (const verb of IRREGULAR_VERBS) {
    if (isVerbKnown(verb)) {
      knownCount++;
    }
  }
  document.getElementById('verbs-summary').textContent = 'Выучено ' + knownCount + ' из ' + IRREGULAR_VERBS.length + '.';
  renderVerbList();
}

function renderVerbList() {
  const searchText = document.getElementById('verbs-search').value.trim().toLowerCase();
  const filter = document.getElementById('verbs-filter').value;
  const list = document.getElementById('verbs-list');
  list.replaceChildren();

  for (const verb of IRREGULAR_VERBS) {
    const isKnown = isVerbKnown(verb);
    if ((filter === 'known' && !isKnown) || (filter === 'unknown' && isKnown)) {
      continue;
    }
    if (searchText !== '') {
      const text = (verb.base + ' ' + verb.past + ' ' + verb.participle + ' ' + verb.russian).toLowerCase();
      if (!text.includes(searchText)) {
        continue;
      }
    }

    const row = cloneTemplate('verb-row-template');
    row.querySelector('.verb-base').textContent = verb.base;
    row.querySelector('.verb-past').textContent = verb.past;
    row.querySelector('.verb-participle').textContent = verb.participle;
    row.querySelector('.verb-russian').textContent = verb.russian;
    row.classList.toggle('known', isKnown);
    list.append(row);
  }

  document.getElementById('verbs-empty').hidden = list.childElementCount > 0;
}

document.getElementById('verbs-search').addEventListener('input', renderVerbList);
document.getElementById('verbs-filter').addEventListener('change', renderVerbList);

/* ================= Тренировка ================= */

function showVerbsTrainingPage() {
  showScreen('screen-session');
  const backLink = document.getElementById('session-back-link');
  backLink.textContent = '← Глаголы';
  backLink.href = '#/verbs';
  document.getElementById('session-title').textContent = 'Тренировка глаголов';
  const content = document.getElementById('session-content');

  // Сначала самые слабые глаголы (с наименьшей серией верных ответов), внутри серии — случайно
  const verbs = shuffle(IRREGULAR_VERBS).sort(function (first, second) {
    return (progress.verbs[first.base] || 0) - (progress.verbs[second.base] || 0);
  }).slice(0, VERBS_PER_SESSION);
  const questions = shuffle(verbs);

  let index = 0;
  let correctCount = 0;
  let answeredCount = 0;

  function showQuestion() {
    if (index >= questions.length) {
      finish();
      return;
    }
    const verb = questions[index];
    const element = cloneTemplate('verb-question-template');
    const pastInput = element.querySelector('.verb-past-input');
    const participleInput = element.querySelector('.verb-participle-input');
    const checkButton = element.querySelector('.check-button');

    element.querySelector('.verb-question-base').textContent = verb.base;
    element.querySelector('.verb-question-russian').textContent = '— ' + verb.russian;

    function check() {
      if (pastInput.value.trim() === '') {
        pastInput.focus();
        return;
      }
      if (participleInput.value.trim() === '') {
        participleInput.focus();
        return;
      }

      const isPastCorrect = isVerbFormCorrect(pastInput.value, verb.past);
      const isParticipleCorrect = isVerbFormCorrect(participleInput.value, verb.participle);
      const isCorrect = isPastCorrect && isParticipleCorrect;

      pastInput.disabled = true;
      participleInput.disabled = true;
      pastInput.classList.add(isPastCorrect ? 'correct' : 'wrong');
      participleInput.classList.add(isParticipleCorrect ? 'correct' : 'wrong');
      checkButton.hidden = true;

      // Повтор после ошибки в счёт не идёт, как и в тренировке слов
      if (!verb.isRetry) {
        answeredCount++;
        if (isCorrect) {
          correctCount++;
        }
      }
      if (isCorrect) {
        progress.verbs[verb.base] = (progress.verbs[verb.base] || 0) + 1;
      } else {
        progress.verbs[verb.base] = 0;
        questions.push(Object.assign({ isRetry: true }, verb));
      }
      countAnswersToday(1, isCorrect ? 1 : 0);
      saveProgress();
      showAnswer(element, verb, isCorrect);
    }

    checkButton.addEventListener('click', check);
    for (const input of [pastInput, participleInput]) {
      input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          check();
        }
      });
    }

    const wrapper = cloneTemplate('quiz-template');
    wrapper.querySelector('.quiz-progress').style.width = (index / questions.length * 100) + '%';
    wrapper.querySelector('.quiz-counter').textContent = (index + 1) + ' / ' + questions.length;
    wrapper.querySelector('.quiz-body').append(element);
    content.replaceChildren(wrapper);
    pastInput.focus();
    speak(verb.base);
  }

  function showAnswer(questionElement, verb, isCorrect) {
    const feedback = cloneTemplate('feedback-template');
    feedback.querySelector('.feedback').classList.add(isCorrect ? 'ok' : 'bad');
    feedback.querySelector('.feedback-title').textContent = isCorrect ? 'Верно' : 'Неверно';
    feedback.querySelector('.feedback-details').textContent = verb.base + ' — ' + verb.past + ' — ' + verb.participle;
    feedback.querySelector('.feedback-note').hidden = true;

    const nextButton = feedback.querySelector('.next-button');
    if (index === questions.length - 1) {
      nextButton.textContent = 'Завершить';
    }
    nextButton.addEventListener('click', function () {
      index++;
      showQuestion();
    });
    questionElement.append(feedback);
    nextButton.focus();
  }

  function finish() {
    showResult(content, {
      isSuccess: true,
      score: correctCount + ' / ' + answeredCount,
      title: 'Тренировка завершена',
      text: 'Глагол считается выученным после ' + VERB_LEARNED_STREAK + ' верных ответов подряд.',
      againText: 'Ещё раз',
      onAgain: showVerbsTrainingPage,
      linkText: 'К таблице',
      linkAddress: '#/verbs'
    });
  }

  showQuestion();
}
