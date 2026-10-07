'use strict';

// Правила обучения: этапы слов, интервальные повторения и расчёт готовности к уровню.

const DAY_MS = 24 * 60 * 60 * 1000;

// Слово проходит этапы 0 → 1 → 2 → 3 → 4 → 5.
// Через сколько дней слово придёт на повторение после перехода на этап:
const REVIEW_INTERVALS = [0, 1, 3, 7, 21, 60];
// Какую долю «выученного слова» даёт каждый этап при расчёте прогресса:
const STAGE_CREDIT = [0, 0.25, 0.6, 1, 1, 1];
// С этого этапа слово считается выученным
const LEARNED_STAGE = 3;
const LAST_STAGE = 5;

// Слова уровня, зачтённого входным тестом, получают этот этап, а на контрольное
// повторение приходят в случайный день из этого промежутка — чтобы не свалиться все сразу
const KNOWN_WORD_STAGE = 4;
const KNOWN_WORD_MIN_DAYS = 3;
const KNOWN_WORD_MAX_DAYS = 60;

// Тема, тест или диалог засчитываются при таком результате
const PASS_SCORE = 0.8;

// Из чего складывается готовность к уровню
const WORDS_WEIGHT = 0.5;
const GRAMMAR_WEIGHT = 0.3;
const PRACTICE_WEIGHT = 0.2;

/* ================= Слова ================= */

// Этап слова с учётом забывания: если «выученное» слово давно не повторяли
// (просрочили больше чем на его интервал), оно перестаёт считаться выученным.
function getWordStage(word) {
  const record = progress.words[word.id];
  if (!record) {
    return 0;
  }

  if (record.stage >= LEARNED_STAGE) {
    const interval = REVIEW_INTERVALS[record.stage] * DAY_MS;
    const isForgotten = Date.now() > record.nextReview + interval;
    if (isForgotten) {
      return LEARNED_STAGE - 1;
    }
  }
  return record.stage;
}

function isWordLearned(word) {
  return getWordStage(word) >= LEARNED_STAGE;
}

// Слово новое, если его ещё не начинали или ни разу не ответили верно
function isWordNew(word) {
  const record = progress.words[word.id];
  return !record || record.stage === 0;
}

// Пришло ли время повторить слово
function isWordDue(word) {
  const record = progress.words[word.id];
  if (!record || record.stage === 0) {
    return false;
  }
  return record.nextReview <= Date.now();
}

// Чем выше этап, тем сложнее вопрос:
// выбрать перевод → выбрать слово → напечатать слово
function getQuestionType(word) {
  const record = progress.words[word.id];
  const stage = record ? record.stage : 0;

  if (stage === 0) {
    return 'translate';
  }
  if (stage === 1) {
    return 'choose-word';
  }
  return 'type-word';
}

// Засчитывает ответ на вопрос по слову и возвращает пояснение для пользователя.
// Этап повышается только в день повторения: если ответить на то же слово ещё раз
// в тот же день, этап не изменится. Так слово нельзя «выучить» за один вечер.
// skipStage — режим «уже знаю»: верный письменный ответ переводит новое слово сразу на 2-й этап.
function gradeWord(word, isCorrect, skipStage) {
  let record = progress.words[word.id];
  if (!record) {
    record = { stage: 0, nextReview: 0, correct: 0, wrong: 0 };
    progress.words[word.id] = record;
  }

  const wasLearned = isWordLearned(word);
  const isReviewDay = record.stage === 0 || record.nextReview <= Date.now();
  let message = '';

  if (!isCorrect) {
    record.wrong++;
    if (record.stage > 0) {
      record.stage = 1;
      record.nextReview = getTodayStart() + DAY_MS;
    }
    message = 'Слово ещё раз появится в этой тренировке и вернётся на первый этап.';
  } else if (!isReviewDay) {
    record.correct++;
    message = 'Закреплено. Этап повысится в день планового повторения.';
  } else {
    record.correct++;
    if (skipStage && record.stage === 0) {
      record.stage = 2;
    } else if (record.stage < LAST_STAGE) {
      record.stage++;
    }

    const daysUntilReview = REVIEW_INTERVALS[record.stage];
    record.nextReview = getTodayStart() + daysUntilReview * DAY_MS;

    if (record.stage >= LEARNED_STAGE) {
      message = 'Слово выучено. Контрольное повторение через ' + formatDays(daysUntilReview) + '.';
    } else {
      message = 'Этап ' + record.stage + ' из ' + LEARNED_STAGE + '. Следующее повторение через ' + formatDays(daysUntilReview) + '.';
    }
  }

  markActivityToday();
  saveProgress();

  return {
    message: message,
    justLearned: !wasLearned && isWordLearned(word)
  };
}

// Зачитывает уровень по результату входного теста (score — доля верных ответов на этом уровне).
// Слова считаются выученными, но это предварительно: каждое придёт на контрольное повторение,
// и при ошибке вернётся на первый этап. Уже имеющийся прогресс не ухудшается.
function markLevelAsKnown(level, score) {
  for (const word of WORDS) {
    if (word.level !== level) {
      continue;
    }
    const record = progress.words[word.id];
    if (record && record.stage >= KNOWN_WORD_STAGE) {
      continue;
    }

    const daysRange = KNOWN_WORD_MAX_DAYS - KNOWN_WORD_MIN_DAYS + 1;
    const daysUntilReview = KNOWN_WORD_MIN_DAYS + Math.floor(Math.random() * daysRange);
    progress.words[word.id] = {
      stage: KNOWN_WORD_STAGE,
      nextReview: getTodayStart() + daysUntilReview * DAY_MS,
      correct: 0,
      wrong: 0
    };
  }

  // Темы грамматики и задания практики этого уровня получают результат теста
  for (const lesson of GRAMMAR) {
    if (lesson.level === level && (progress.grammar[lesson.id] || 0) < score) {
      progress.grammar[lesson.id] = score;
    }
  }
  for (const task of PRACTICE) {
    if (task.level === level && (progress.practice[task.id] || 0) < score) {
      progress.practice[task.id] = score;
    }
  }

  markActivityToday();
  saveProgress();
}

// Подсказка для точек этапа в списке слов: «Этап 2 из 3, повторение через 3 дня»
function getStageHint(word) {
  const record = progress.words[word.id];
  let stage = getWordStage(word);
  if (stage > LEARNED_STAGE) {
    stage = LEARNED_STAGE;
  }
  let hint = 'Этап ' + stage + ' из ' + LEARNED_STAGE;

  if (record && record.stage > 0) {
    const daysLeft = Math.ceil((record.nextReview - Date.now()) / DAY_MS);
    if (daysLeft <= 0) {
      hint += ', пора повторить';
    } else {
      hint += ', повторение через ' + formatDays(daysLeft);
    }
  }
  return hint;
}

// Сколько дней подряд пользователь занимается
function countStreakDays() {
  const day = new Date();
  day.setHours(12, 0, 0, 0);

  // Если сегодня занятий ещё не было, серия считается со вчерашнего дня
  if (!progress.activityDays[getDateKey(day)]) {
    day.setDate(day.getDate() - 1);
  }

  let streak = 0;
  while (progress.activityDays[getDateKey(day)]) {
    streak++;
    day.setDate(day.getDate() - 1);
  }
  return streak;
}

/* ================= Готовность к уровню ================= */

function isPassed(scores, id) {
  const bestScore = scores[id] || 0;
  return bestScore >= PASS_SCORE;
}

// Считает темы грамматики или задания практики, которые входят в уровень.
// credit — сумма «частичных зачётов»: результат 40% при пороге 80% даёт половину зачёта.
function countItems(items, scores, levelIndex) {
  const result = { total: 0, passed: 0, credit: 0 };

  for (const item of items) {
    if (LEVELS.indexOf(item.level) > levelIndex) {
      continue;
    }
    const bestScore = scores[item.id] || 0;

    result.total++;
    if (bestScore >= PASS_SCORE) {
      result.passed++;
      result.credit += 1;
    } else {
      result.credit += bestScore / PASS_SCORE;
    }
  }
  return result;
}

// Готовность к уровню. Уровни накопительные: в A2 входит весь материал A1 и так далее.
function getLevelProgress(level) {
  const levelIndex = LEVELS.indexOf(level);

  let wordsTotal = 0;
  let wordsLearned = 0;
  let wordsCredit = 0;
  for (const word of WORDS) {
    if (LEVELS.indexOf(word.level) > levelIndex) {
      continue;
    }
    const stage = getWordStage(word);
    wordsTotal++;
    wordsCredit += STAGE_CREDIT[stage];
    if (stage >= LEARNED_STAGE) {
      wordsLearned++;
    }
  }

  const grammar = countItems(GRAMMAR, progress.grammar, levelIndex);
  const practice = countItems(PRACTICE, progress.practice, levelIndex);

  const wordsLeft = wordsTotal - wordsLearned;
  const grammarLeft = grammar.total - grammar.passed;
  const practiceLeft = practice.total - practice.passed;
  const isComplete = wordsLeft === 0 && grammarLeft === 0 && practiceLeft === 0;

  let percent = 100 * (
    WORDS_WEIGHT * wordsCredit / wordsTotal +
    GRAMMAR_WEIGHT * grammar.credit / grammar.total +
    PRACTICE_WEIGHT * practice.credit / practice.total
  );

  if (isComplete) {
    percent = 100;
  } else {
    // Округляем вниз до десятых, чтобы 100% появлялось только когда сделано всё.
    // Маленькая добавка нужна из-за неточности дробных чисел (19.7 может храниться как 19.6999…).
    percent = Math.floor(percent * 10 + 0.000001) / 10;
    if (percent > 99.9) {
      percent = 99.9;
    }
  }

  return {
    level: level,
    percent: percent,
    isComplete: isComplete,
    wordsLeft: wordsLeft,
    grammarLeft: grammarLeft,
    practiceLeft: practiceLeft
  };
}

// «До уровня A2 осталось: 14% (осталось выучить 120 слов и пройти 3 темы грамматики).»
function getRemainingText(levelProgress) {
  if (levelProgress.isComplete) {
    return 'Уровень ' + levelProgress.level + ' достигнут.';
  }

  const tasks = [];
  if (levelProgress.wordsLeft > 0) {
    tasks.push('выучить ' + levelProgress.wordsLeft + ' ' + pluralize(levelProgress.wordsLeft, 'слово', 'слова', 'слов'));
  }
  if (levelProgress.grammarLeft > 0) {
    tasks.push('пройти ' + levelProgress.grammarLeft + ' ' + pluralize(levelProgress.grammarLeft, 'тему', 'темы', 'тем') + ' грамматики');
  }
  if (levelProgress.practiceLeft > 0) {
    tasks.push('выполнить ' + levelProgress.practiceLeft + ' ' + pluralize(levelProgress.practiceLeft, 'задание', 'задания', 'заданий') + ' практики');
  }

  // Соединяем через запятую, а последнее задание — через «и»
  let tasksText = tasks[0];
  for (let i = 1; i < tasks.length; i++) {
    if (i === tasks.length - 1) {
      tasksText += ' и ' + tasks[i];
    } else {
      tasksText += ', ' + tasks[i];
    }
  }

  const percentLeft = formatNumber(100 - levelProgress.percent);
  return 'До уровня ' + levelProgress.level + ' осталось: ' + percentLeft + '% (осталось ' + tasksText + ').';
}

// Первый уровень, который ещё не закрыт полностью
function getCurrentLevel() {
  for (const level of LEVELS) {
    if (!getLevelProgress(level).isComplete) {
      return level;
    }
  }
  return LEVELS[LEVELS.length - 1];
}
