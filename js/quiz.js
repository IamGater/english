'use strict';

// Викторина: показывает вопросы по одному, после каждого — разбор ответа.
// На ней построены тренировка слов, упражнения урока и тест уровня.
//
// Вопрос — это объект с полем type:
//   { type: 'new-word', word }      — знакомство с новым словом (без ответа)
//   { type: 'translate', word }     — выбрать перевод английского слова
//   { type: 'choose-word', word }   — выбрать английское слово
//   { type: 'type-word', word }     — напечатать английское слово
//   { type: 'dictation', word }     — услышать слово и написать его
//   { type: 'grammar', exercise }   — грамматическое упражнение
//   { type: 'comprehension', exercise } — вопрос к тексту или записи (устроен как упражнение с вариантами)
// Дополнительно у вопроса по слову могут быть поля isRetry (повтор после ошибки,
// в счёт не идёт) и skipStage (режим «уже знаю»).

// Викторина на странице всегда одна, её состояние лежит здесь
let quiz = null;

// onAnswer(question, isCorrect) вызывается после каждого ответа и может вернуть пояснение.
// onFinish(result) вызывается в конце, result = { correctCount, answeredCount, score }.
function startQuiz(container, questions, onAnswer, onFinish) {
  const quizElement = cloneTemplate('quiz-template');
  container.replaceChildren(quizElement);

  quiz = {
    questions: questions,
    currentIndex: 0,
    correctCount: 0,
    answeredCount: 0,
    onAnswer: onAnswer,
    onFinish: onFinish,
    isExam: false,
    progressElement: quizElement.querySelector('.quiz-progress'),
    counterElement: quizElement.querySelector('.quiz-counter'),
    bodyElement: quizElement.querySelector('.quiz-body'),
    feedbackElement: quizElement.querySelector('.quiz-feedback')
  };

  showCurrentQuestion();
}

// Режим экзамена (входной тест): после ответа сразу идёт следующий вопрос, без разбора,
// и есть кнопка «Не знаю», чтобы не приходилось угадывать.
function startExam(container, questions, onAnswer, onFinish) {
  startQuiz(container, questions, onAnswer, onFinish);
  quiz.isExam = true;

  const skipButton = container.querySelector('.skip-button');
  skipButton.hidden = false;
  skipButton.addEventListener('click', function () {
    finishQuestion(false);
  });
}

function showCurrentQuestion() {
  const total = quiz.questions.length;

  if (quiz.currentIndex >= total) {
    let score = 0;
    if (quiz.answeredCount > 0) {
      score = quiz.correctCount / quiz.answeredCount;
    }
    quiz.onFinish({
      correctCount: quiz.correctCount,
      answeredCount: quiz.answeredCount,
      score: score
    });
    return;
  }

  quiz.progressElement.style.width = (quiz.currentIndex / total * 100) + '%';
  quiz.counterElement.textContent = (quiz.currentIndex + 1) + ' / ' + total;
  quiz.feedbackElement.replaceChildren();

  const question = quiz.questions[quiz.currentIndex];

  if (question.type === 'new-word') {
    showNewWord(question.word);
  } else if (question.type === 'translate') {
    showTranslateQuestion(question.word);
  } else if (question.type === 'choose-word') {
    showChooseWordQuestion(question.word);
  } else if (question.type === 'type-word') {
    showTypeWordQuestion(question.word);
  } else if (question.type === 'dictation') {
    showDictationQuestion(question.word);
  } else if (question.exercise.options) {
    showGrammarChoiceQuestion(question.exercise);
  } else {
    showGrammarGapQuestion(question.exercise);
  }
}

function goToNextQuestion() {
  quiz.currentIndex++;
  showCurrentQuestion();
}

// Вызывается, когда пользователь ответил: считаем результат и показываем разбор
function finishQuestion(isCorrect) {
  const question = quiz.questions[quiz.currentIndex];

  if (!question.isRetry) {
    quiz.answeredCount++;
    if (isCorrect) {
      quiz.correctCount++;
    }
  }

  // Для статистики считаем каждый ответ. Ошибки запоминаем для работы над ошибками,
  // но не во входном тесте и не на экзамене: там много ещё не изученного материала.
  countAnswersToday(1, isCorrect ? 1 : 0);
  if (!isCorrect && !quiz.isExam) {
    rememberMistake(question);
  }
  saveProgress();

  let note = '';
  if (quiz.onAnswer) {
    note = quiz.onAnswer(question, isCorrect) || '';
  }

  if (quiz.isExam) {
    goToNextQuestion();
    return;
  }
  showFeedback(question, isCorrect, note);
}

function showFeedback(question, isCorrect, note) {
  const element = cloneTemplate('feedback-template');
  const box = element.querySelector('.feedback');
  const title = element.querySelector('.feedback-title');
  const details = element.querySelector('.feedback-details');
  const noteElement = element.querySelector('.feedback-note');
  const nextButton = element.querySelector('.next-button');

  if (isCorrect) {
    box.classList.add('ok');
    title.textContent = 'Верно';
  } else {
    box.classList.add('bad');
    title.textContent = 'Неверно';
  }

  // После вопроса по слову показываем его карточку, после грамматики — правильное предложение
  if (question.exercise) {
    details.append(createGrammarAnswer(question.exercise));
  } else {
    details.append(createWordCard(question.word));
  }

  noteElement.textContent = note;
  noteElement.hidden = note === '';

  const isLastQuestion = quiz.currentIndex === quiz.questions.length - 1;
  if (isLastQuestion) {
    nextButton.textContent = 'Завершить';
  }
  nextButton.addEventListener('click', goToNextQuestion);

  quiz.feedbackElement.replaceChildren(element);
  nextButton.focus(); // чтобы можно было идти дальше клавишей Enter
}

/* ================= Общие части вопросов ================= */

// Три неправильных варианта. Берём слова из той же темы — они похожи по смыслу и части речи,
// поэтому угадать правильный ответ методом исключения сложнее.
function pickWrongWords(word) {
  let candidates = [];
  for (const other of WORDS) {
    if (other !== word && other.level === word.level && other.topic === word.topic) {
      candidates.push(other);
    }
  }
  // Если тема совсем маленькая, берём слова всего уровня
  if (candidates.length < 6) {
    candidates = [];
    for (const other of WORDS) {
      if (other !== word && other.level === word.level) {
        candidates.push(other);
      }
    }
  }

  const wrongWords = [];
  for (const candidate of shuffle(candidates)) {
    // Вариант не должен совпадать с правильным ответом или с уже выбранным вариантом
    let isDuplicate = candidate.russian === word.russian || candidate.english === word.english;
    for (const chosen of wrongWords) {
      if (chosen.russian === candidate.russian || chosen.english === candidate.english) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      wrongWords.push(candidate);
    }
    if (wrongWords.length === 3) {
      break;
    }
  }
  return wrongWords;
}

// Создаёт кнопки с вариантами ответа и возвращает их списком
function createOptionButtons(container, texts) {
  const buttons = [];
  for (const text of texts) {
    const button = cloneTemplate('option-template');
    button.textContent = text;
    container.append(button);
    buttons.push(button);

    // Длинные варианты не помещаются в две колонки
    if (text.length > 22) {
      container.classList.add('one-column');
    }
  }
  return buttons;
}

// Блокирует кнопки и подсвечивает правильный вариант и ошибку пользователя
function revealOptions(buttons, correctText, chosenButton) {
  for (const button of buttons) {
    button.disabled = true;
    button.classList.remove('selected');
    if (button.textContent === correctText) {
      button.classList.add('correct');
    } else if (button === chosenButton) {
      button.classList.add('wrong');
    }
  }
}

// Ответ в поле ввода можно отправить кнопкой «Проверить» или клавишей Enter
function setupAnswerInput(questionElement, input, onSubmit) {
  questionElement.querySelector('.check-button').addEventListener('click', onSubmit);
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit();
    }
  });
}

// Делит предложение по пропуску: «Ich ___ Student.» → до: «Ich », после: « Student.»
function splitByGap(sentence) {
  const gapPosition = sentence.indexOf('___');
  if (gapPosition === -1) {
    return { hasGap: false, before: sentence, after: '' };
  }
  return {
    hasGap: true,
    before: sentence.slice(0, gapPosition),
    after: sentence.slice(gapPosition + 3)
  };
}

function getCorrectAnswer(exercise) {
  if (exercise.options) {
    return exercise.options[0]; // в данных правильный вариант всегда первый
  }
  return exercise.answer;
}

/* ================= Вопросы по словам ================= */

// Знакомство с новым словом: карточка и две кнопки
function showNewWord(word) {
  const element = cloneTemplate('new-word-template');
  const continueButton = element.querySelector('.continue-button');

  let label = 'Новое слово · ' + word.level;
  if (word.topic) {
    label += ' · ' + word.topic;
  }
  element.querySelector('.question-label').textContent = label;
  element.querySelector('.word-card-place').append(createWordCard(word));

  continueButton.addEventListener('click', goToNextQuestion);
  element.querySelector('.already-know-button').addEventListener('click', function () {
    askWordRightNow(word);
  });

  quiz.bodyElement.replaceChildren(element);
  continueButton.focus();
  speak(word.english);
}

// «Уже знаю»: убираем обычный вопрос по этому слову и сразу задаём письменный
function askWordRightNow(word) {
  for (let i = quiz.currentIndex + 1; i < quiz.questions.length; i++) {
    const question = quiz.questions[i];
    if (question.word === word && question.type !== 'new-word') {
      quiz.questions.splice(i, 1);
      break;
    }
  }
  quiz.questions.splice(quiz.currentIndex + 1, 0, { type: 'type-word', word: word, skipStage: true });
  goToNextQuestion();
}

// Показано английское слово — нужно выбрать перевод
function showTranslateQuestion(word) {
  const element = cloneTemplate('translate-question-template');
  fillWordElements(element, word);

  const answerWords = shuffle([word].concat(pickWrongWords(word)));
  const texts = [];
  for (const answerWord of answerWords) {
    texts.push(answerWord.russian);
  }

  const buttons = createOptionButtons(element.querySelector('.options'), texts);
  for (const button of buttons) {
    button.addEventListener('click', function () {
      revealOptions(buttons, word.russian, button);
      finishQuestion(button.textContent === word.russian);
    });
  }

  quiz.bodyElement.replaceChildren(element);
  speak(word.english);
}

// Показан перевод — нужно выбрать английское слово
function showChooseWordQuestion(word) {
  const element = cloneTemplate('choice-question-template');
  element.querySelector('.question-label').textContent = 'Выберите слово';
  element.querySelector('.text-before').textContent = word.russian;

  const answerWords = shuffle([word].concat(pickWrongWords(word)));
  const texts = [];
  for (const answerWord of answerWords) {
    texts.push(answerWord.english);
  }

  const buttons = createOptionButtons(element.querySelector('.options'), texts);
  for (const button of buttons) {
    button.addEventListener('click', function () {
      revealOptions(buttons, word.english, button);
      finishQuestion(button.textContent === word.english);
    });
  }

  quiz.bodyElement.replaceChildren(element);
}

// Показан перевод — нужно напечатать английское слово
function showTypeWordQuestion(word) {
  const element = cloneTemplate('typing-question-template');
  const input = element.querySelector('.answer-input');

  element.querySelector('.question-text').textContent = word.russian;
  // Подсказка нужна, потому что у русского слова бывает несколько английских переводов
  element.querySelector('.hint-first-letter').textContent = word.english[0];
  element.querySelector('.hint-length').textContent = word.english.length;

  function checkAnswer() {
    let typedText = normalizeAnswer(input.value);
    if (typedText === '') {
      input.focus();
      return;
    }
    // Глагол можно написать и с частицей to: «to go» засчитывается как «go»
    if (typedText.startsWith('to ') && !word.english.startsWith('to ')) {
      typedText = typedText.slice(3);
    }

    const isCorrect = typedText === normalizeAnswer(word.english);
    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'wrong');
    element.querySelector('.check-button').hidden = true;
    finishQuestion(isCorrect);
  }

  setupAnswerInput(element, input, checkAnswer);
  quiz.bodyElement.replaceChildren(element);
  input.focus();
}

// Диктант: слово звучит, его нужно написать. Перевод и само слово на экране не показываются.
function showDictationQuestion(word) {
  const element = cloneTemplate('dictation-question-template');
  const input = element.querySelector('.answer-input');

  element.querySelector('.listen-button').addEventListener('click', function () {
    speak(word.english);
    input.focus();
  });

  function checkAnswer() {
    if (input.value.trim() === '') {
      input.focus();
      return;
    }
    const isCorrect = normalizeAnswer(input.value) === normalizeAnswer(word.english);
    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'wrong');
    element.querySelector('.check-button').hidden = true;
    finishQuestion(isCorrect);
  }

  setupAnswerInput(element, input, checkAnswer);
  quiz.bodyElement.replaceChildren(element);
  input.focus();
  speak(word.english);
}

/* ================= Вопросы по грамматике ================= */

// Упражнение с вариантами ответа
function showGrammarChoiceQuestion(exercise) {
  const element = cloneTemplate('choice-question-template');
  const sentence = splitByGap(exercise.question);
  const correctText = getCorrectAnswer(exercise);

  element.querySelector('.question-label').textContent = 'Выберите правильный вариант';
  element.querySelector('.question-text').classList.add('sentence');
  element.querySelector('.text-before').textContent = sentence.before;
  element.querySelector('.text-after').textContent = sentence.after;
  element.querySelector('.gap').hidden = !sentence.hasGap;

  const buttons = createOptionButtons(element.querySelector('.options'), shuffle(exercise.options));
  for (const button of buttons) {
    button.addEventListener('click', function () {
      revealOptions(buttons, correctText, button);
      finishQuestion(button.textContent === correctText);
    });
  }

  quiz.bodyElement.replaceChildren(element);
}

// Упражнение с пропуском, в который нужно вписать слово
function showGrammarGapQuestion(exercise) {
  const element = cloneTemplate('gap-question-template');
  const input = element.querySelector('.answer-input');
  const sentence = splitByGap(exercise.question);

  element.querySelector('.text-before').textContent = sentence.before;
  element.querySelector('.text-after').textContent = sentence.after;

  function checkAnswer() {
    if (input.value.trim() === '') {
      input.focus();
      return;
    }

    // Иногда правильных ответов несколько (например, will и 'll)
    const acceptedAnswers = [exercise.answer].concat(exercise.alsoCorrect || []);
    let isCorrect = false;
    for (const answer of acceptedAnswers) {
      if (normalizeAnswer(answer) === normalizeAnswer(input.value)) {
        isCorrect = true;
      }
    }

    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'wrong');
    element.querySelector('.check-button').hidden = true;
    finishQuestion(isCorrect);
  }

  setupAnswerInput(element, input, checkAnswer);
  quiz.bodyElement.replaceChildren(element);
  input.focus();
}

// Предложение с подставленным правильным ответом — для разбора после вопроса
function createGrammarAnswer(exercise) {
  const element = cloneTemplate('grammar-answer-template');
  const sentence = splitByGap(exercise.question);

  element.querySelector('.correct-answer').textContent = getCorrectAnswer(exercise);
  if (sentence.hasGap) {
    element.querySelector('.text-before').textContent = sentence.before;
    element.querySelector('.text-after').textContent = sentence.after;
  }
  return element;
}

/* ================= Итоговый экран ================= */

// Показывает итог. В options:
//   isSuccess, score (крупная надпись), title, text,
//   againText и onAgain — кнопка «ещё раз» (если onAgain нет, кнопка скрыта),
//   linkText и linkAddress — основная кнопка-ссылка.
function showResult(container, options) {
  const element = cloneTemplate('result-template');
  const againButton = element.querySelector('.again-button');
  const link = element.querySelector('.result-link');

  element.classList.add(options.isSuccess ? 'ok' : 'bad');
  element.querySelector('.result-score').textContent = options.score;
  element.querySelector('.result-title').textContent = options.title;
  element.querySelector('.result-text').textContent = options.text;

  if (options.onAgain) {
    againButton.addEventListener('click', options.onAgain);
    if (options.againText) {
      againButton.textContent = options.againText;
    }
  } else {
    againButton.hidden = true;
  }

  link.textContent = options.linkText;
  link.href = options.linkAddress;

  container.replaceChildren(element);
}

// Итог с процентом и надписью «Зачтено» / «Пока не зачтено» — для урока, теста и диалога
function showScoreResult(container, score, text, options) {
  const isPassedNow = score >= PASS_SCORE;

  options.isSuccess = isPassedNow;
  options.score = formatScore(score);
  options.title = isPassedNow ? 'Зачтено' : 'Пока не зачтено';
  options.text = text;

  showResult(container, options);
}
