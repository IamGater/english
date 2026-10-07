'use strict';

// Небольшие функции, которые нужны в разных файлах.

// Делает копию шаблона <template id="..."> из index.html
function cloneTemplate(templateId) {
  const template = document.getElementById(templateId);
  return template.content.firstElementChild.cloneNode(true);
}

// Показывает один экран, остальные прячет
function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  for (const screenElement of screens) {
    screenElement.hidden = screenElement.id !== screenId;
  }
}

// Возвращает новый массив с теми же элементами в случайном порядке
function shuffle(list) {
  const result = list.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temporary = result[i];
    result[i] = result[randomIndex];
    result[randomIndex] = temporary;
  }
  return result;
}

// Выбирает форму слова после числа: 1 слово, 2 слова, 5 слов
function pluralize(number, one, few, many) {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) {
    return few;
  }
  return many;
}

function formatDays(count) {
  return count + ' ' + pluralize(count, 'день', 'дня', 'дней');
}

// 0.85 → «85%»
function formatScore(score) {
  return Math.round(score * 100) + '%';
}

// 19.7 → «19,7»
function formatNumber(value) {
  const rounded = Math.round(value * 10) / 10;
  return String(rounded).replace('.', ',');
}

// Приводит ответ к виду, удобному для сравнения:
// без регистра, лишних пробелов и знаков препинания
function normalizeAnswer(text) {
  let result = text.toLowerCase().trim();
  result = result.replace(/\s+/g, ' ');
  result = result.replace(/[.!?,]/g, '');
  result = result.replace(/[’`]/g, "'"); // разные виды апострофа считаем одинаковыми
  return result;
}

// Начало сегодняшнего дня в миллисекундах
function getTodayStart() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.getTime();
}

// Дата в виде «2026-10-07» — так мы отмечаем дни занятий
function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return year + '-' + month + '-' + day;
}

// Подставляет слово в разметку: само слово, перевод, пример и кнопки озвучки.
// Работает с любым элементом, внутри которого есть нужные классы (строка списка, карточка, вопрос).
function fillWordElements(container, word) {
  const englishElement = container.querySelector('.word-english');
  if (englishElement) {
    englishElement.textContent = word.english;
  }

  const speakWordButton = container.querySelector('.speak-word');
  if (speakWordButton) {
    speakWordButton.dataset.text = word.english;
  }

  const translationElement = container.querySelector('.word-translation');
  if (translationElement) {
    translationElement.textContent = word.russian;
  }

  const exampleElement = container.querySelector('.word-example');
  if (exampleElement) {
    exampleElement.hidden = word.example === '';
    exampleElement.querySelector('.word-example-text').textContent = word.example;
    exampleElement.querySelector('.speak-example').dataset.text = word.example;
  }
}

function createWordCard(word) {
  const card = cloneTemplate('word-card-template');
  fillWordElements(card, word);
  return card;
}
