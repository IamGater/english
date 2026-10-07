'use strict';

// Экран «Обзор»: подтверждённый уровень и готовность к каждому уровню.

function showHomePage() {
  showScreen('screen-home');

  // Подтверждённый уровень — самый высокий из полностью закрытых
  let reachedLevel = 'A0';
  const allProgress = [];
  for (const level of LEVELS) {
    const levelProgress = getLevelProgress(level);
    allProgress.push(levelProgress);
    if (levelProgress.isComplete) {
      reachedLevel = level;
    }
  }
  document.getElementById('home-level').textContent = reachedLevel;

  let learnedCount = 0;
  let dueCount = 0;
  for (const word of WORDS) {
    if (isWordLearned(word)) {
      learnedCount++;
    }
    if (isWordDue(word)) {
      dueCount++;
    }
  }
  const streakDays = countStreakDays();

  // Короткая строка под уровнем: «34 слова выучено · 10 к повторению · 3 дня подряд»
  const facts = [];
  facts.push(learnedCount + ' ' + pluralize(learnedCount, 'слово', 'слова', 'слов') + ' выучено');
  if (dueCount > 0) {
    facts.push(dueCount + ' к повторению');
  }
  if (streakDays > 1) {
    facts.push(formatDays(streakDays) + ' подряд');
  }
  document.getElementById('home-facts').textContent = facts.join(' · ');

  const trainLink = document.getElementById('home-train-link');
  if (dueCount > 0) {
    trainLink.textContent = 'Продолжить тренировку';
  } else {
    trainLink.textContent = 'Начать тренировку';
  }

  const levelsContainer = document.getElementById('home-levels');
  levelsContainer.replaceChildren();
  for (const levelProgress of allProgress) {
    levelsContainer.append(createLevelRow(levelProgress));
  }
}

// Строка уровня: название, полоса прогресса, процент и сколько осталось
function createLevelRow(levelProgress) {
  const row = cloneTemplate('level-row-template');

  row.querySelector('.level-name').textContent = levelProgress.level;
  row.querySelector('.level-bar-fill').style.width = levelProgress.percent + '%';
  row.querySelector('.level-percent').textContent = formatNumber(levelProgress.percent) + '%';
  row.querySelector('.level-remaining').textContent = getRemainingText(levelProgress);

  if (levelProgress.isComplete) {
    row.classList.add('done');
  }
  return row;
}
