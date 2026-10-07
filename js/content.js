'use strict';

// Собирает данные из файлов js/data в общие списки:
// WORDS — все слова, GRAMMAR — все темы, DIALOGS — все диалоги, PRACTICE — задания практики.

const LEVELS = ['A1', 'A2', 'B1', 'B2'];

const WORDS = [];
addWords('A1', WORDS_A1);
addWords('A2', WORDS_A2);
addWords('B1', WORDS_B1);
addWords('B2', WORDS_B2);

const GRAMMAR = [].concat(GRAMMAR_A1, GRAMMAR_A2, GRAMMAR_B1, GRAMMAR_B2);
const DIALOGS = [].concat(DIALOGS_A1, DIALOGS_A2, DIALOGS_B1, DIALOGS_B2);

// В практике у каждого уровня есть тест и несколько диалогов
const PRACTICE = [];
for (const level of LEVELS) {
  PRACTICE.push({
    id: 'test-' + level,
    level: level,
    title: 'Тест уровня ' + level,
    description: '20 вопросов: слова и грамматика',
    link: '#/practice/test/' + level
  });

  for (const dialog of DIALOGS) {
    if (dialog.level === level) {
      PRACTICE.push({
        id: dialog.id,
        level: level,
        title: 'Диалог: ' + dialog.title,
        description: dialog.scene,
        link: '#/practice/dialog/' + dialog.id
      });
    }
  }
}

// Разбирает текст словаря. Каждая строка — «слово|перевод|пример», строка с # — название темы.
function addWords(level, text) {
  const lines = text.split('\n');
  let topic = '';

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line === '') {
      continue;
    }
    if (line.startsWith('#')) {
      topic = line.slice(1).trim();
      continue;
    }

    const parts = line.split('|');
    const english = parts[0].trim();
    const russian = parts[1].trim();
    const example = parts[2] ? parts[2].trim() : '';

    // Слово могло уже встретиться на более раннем уровне — второй раз не добавляем
    if (findWord(english)) {
      continue;
    }

    WORDS.push({
      id: english,
      english: english,
      russian: russian,
      example: example,
      level: level,
      topic: topic
    });
  }
}

function findWord(english) {
  for (const word of WORDS) {
    if (word.english === english) {
      return word;
    }
  }
  return null;
}

function getWordsOfLevel(level) {
  const result = [];
  for (const word of WORDS) {
    if (word.level === level) {
      result.push(word);
    }
  }
  return result;
}

function findLesson(lessonId) {
  for (const lesson of GRAMMAR) {
    if (lesson.id === lessonId) {
      return lesson;
    }
  }
  return null;
}

function findDialog(dialogId) {
  for (const dialog of DIALOGS) {
    if (dialog.id === dialogId) {
      return dialog;
    }
  }
  return null;
}
