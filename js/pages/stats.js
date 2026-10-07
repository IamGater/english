'use strict';

// Экран «Статистика»: общие числа, активность по дням, слова по уровням,
// прогноз повторений и самые трудные слова.

const ACTIVITY_CHART_DAYS = 30;
const FORECAST_CHART_DAYS = 7;
const HARD_WORDS_SHOWN = 8;
const WEEKDAY_NAMES = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

function showStatsPage() {
  showScreen('screen-stats');
  showStatTiles();
  showActivityChart();
  showLevelStacks();
  showForecastChart();
  showHardWords();
}

// Статистика одного дня. В старых сохранениях счётчиков нет — тогда считаем нули.
function getDayActivity(dateKey) {
  const day = progress.activityDays[dateKey];
  if (typeof day === 'object') {
    return day;
  }
  return { answers: 0, correct: 0 };
}

/* ================= Числа сверху ================= */

function showStatTiles() {
  let totalAnswers = 0;
  let totalCorrect = 0;
  for (const dateKey in progress.activityDays) {
    const day = getDayActivity(dateKey);
    totalAnswers += day.answers;
    totalCorrect += day.correct;
  }

  let learnedCount = 0;
  for (const word of WORDS) {
    if (isWordLearned(word)) {
      learnedCount++;
    }
  }

  let accuracy = '—';
  if (totalAnswers > 0) {
    accuracy = formatScore(totalCorrect / totalAnswers);
  }

  document.getElementById('stats-streak').textContent = countStreakDays();
  document.getElementById('stats-answers').textContent = totalAnswers;
  document.getElementById('stats-accuracy').textContent = accuracy;
  document.getElementById('stats-learned').textContent = learnedCount;
}

/* ================= Столбчатые диаграммы ================= */

// Один столбец: высота считается от самого большого значения на диаграмме
function createChartColumn(value, maxValue, label, tip) {
  const column = cloneTemplate('chart-column-template');

  let height = 0;
  if (maxValue > 0) {
    height = value / maxValue * 100;
  }
  // Маленькое ненулевое значение не должно пропадать совсем
  if (value > 0 && height < 2) {
    height = 2;
  }

  column.querySelector('.chart-bar').style.height = height + '%';
  // Высота нужна и в CSS, чтобы поставить подпись сразу над столбцом
  column.querySelector('.chart-plot').style.setProperty('--bar-height', height + '%');
  column.querySelector('.chart-label').textContent = label;
  column.querySelector('.chart-tip').textContent = tip;
  return column;
}

function showActivityChart() {
  const days = [];
  let maxAnswers = 0;
  let totalAnswers = 0;
  let activeDays = 0;

  for (let daysAgo = ACTIVITY_CHART_DAYS - 1; daysAgo >= 0; daysAgo--) {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    const answers = getDayActivity(getDateKey(date)).answers;

    days.push({ date: date, answers: answers, daysAgo: daysAgo });
    totalAnswers += answers;
    if (answers > 0) {
      activeDays++;
    }
    if (answers > maxAnswers) {
      maxAnswers = answers;
    }
  }

  const chart = document.getElementById('stats-activity-chart');
  chart.replaceChildren();
  for (const day of days) {
    const dateText = String(day.date.getDate()).padStart(2, '0') + '.' + String(day.date.getMonth() + 1).padStart(2, '0');
    // Подписываем не каждый день, иначе подписи сливаются
    let label = '';
    if (day.daysAgo % 5 === 0) {
      label = dateText;
    }
    const tip = dateText + ' · ' + day.answers + ' ' + pluralize(day.answers, 'ответ', 'ответа', 'ответов');
    chart.append(createChartColumn(day.answers, maxAnswers, label, tip));
  }

  document.getElementById('stats-activity-summary').textContent =
    'Всего ' + totalAnswers + ' ' + pluralize(totalAnswers, 'ответ', 'ответа', 'ответов') +
    ', занятия были в ' + activeDays + ' из ' + ACTIVITY_CHART_DAYS + ' дней. Наведите на столбец, чтобы увидеть число.';
}

function showForecastChart() {
  const todayStart = getTodayStart();
  const counts = [];
  for (let i = 0; i < FORECAST_CHART_DAYS; i++) {
    counts.push(0);
  }

  for (const word of WORDS) {
    const record = progress.words[word.id];
    if (!record || record.stage === 0) {
      continue;
    }
    // Номер дня, считая от сегодняшнего. Просроченные слова относятся к сегодня.
    let dayIndex = Math.floor((record.nextReview - todayStart) / DAY_MS);
    if (dayIndex < 0) {
      dayIndex = 0;
    }
    if (dayIndex < FORECAST_CHART_DAYS) {
      counts[dayIndex]++;
    }
  }

  let maxCount = 0;
  for (const count of counts) {
    if (count > maxCount) {
      maxCount = count;
    }
  }

  const chart = document.getElementById('stats-forecast-chart');
  chart.replaceChildren();
  for (let i = 0; i < counts.length; i++) {
    const date = new Date(todayStart + i * DAY_MS);
    let label = WEEKDAY_NAMES[date.getDay()];
    if (i === 0) {
      label = 'Сегодня';
    }
    chart.append(createChartColumn(counts[i], maxCount, label, String(counts[i])));
  }
}

/* ================= Слова по уровням ================= */

function showLevelStacks() {
  const container = document.getElementById('stats-levels');
  container.replaceChildren();

  for (const level of LEVELS) {
    const words = getWordsOfLevel(level);
    let learnedCount = 0;
    let learningCount = 0;
    for (const word of words) {
      if (isWordLearned(word)) {
        learnedCount++;
      } else if (!isWordNew(word)) {
        learningCount++;
      }
    }
    const newCount = words.length - learnedCount - learningCount;

    const row = cloneTemplate('level-stack-template');
    row.querySelector('.stack-name').textContent = level;
    row.querySelector('.stack-numbers').textContent = learnedCount + ' · ' + learningCount + ' · ' + newCount;
    setStackPart(row.querySelector('.stack-learned'), learnedCount, words.length, 'Выучено');
    setStackPart(row.querySelector('.stack-learning'), learningCount, words.length, 'В процессе');
    setStackPart(row.querySelector('.stack-new'), newCount, words.length, 'Не начато');
    container.append(row);
  }
}

// Часть полосы: ширина пропорциональна числу слов, пустая часть не показывается
function setStackPart(element, count, total, name) {
  element.hidden = count === 0;
  element.style.flexGrow = count;
  element.title = name + ': ' + count + ' из ' + total;
}

/* ================= Трудные слова ================= */

function showHardWords() {
  const container = document.getElementById('stats-hard-words');
  const words = getMistakeWords().slice(0, HARD_WORDS_SHOWN);
  container.replaceChildren();

  for (const word of words) {
    const row = cloneTemplate('hard-word-template');
    const mistakeCount = progress.wordMistakes[word.id];
    fillWordElements(row, word);
    row.querySelector('.hard-word-count').textContent = mistakeCount + ' ' + pluralize(mistakeCount, 'ошибка', 'ошибки', 'ошибок');
    container.append(row);
  }

  const totalMistakes = countMistakes();
  const note = document.getElementById('stats-hard-words-note');
  if (totalMistakes === 0) {
    note.textContent = 'Ошибок пока нет. Здесь появятся слова, в которых вы ошибаетесь чаще всего.';
  } else {
    note.textContent = 'Всего в списке ошибок: ' + totalMistakes + ' (слова и упражнения).';
  }
  document.getElementById('stats-mistakes-link').hidden = totalMistakes === 0;
}
