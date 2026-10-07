// Аудирование A1: текст, который читает голос браузера, и вопросы к нему.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const LISTENING_A1 = [
  {
    id: 'a1-listening-introduction',
    level: 'A1',
    title: 'Мария рассказывает о себе',
    text: "Hello! My name is Maria and I am from Spain. I am twenty-five years old and I live in London now. I work as a nurse in a hospital. My work starts at seven o'clock. At the weekend I learn English and meet my friends. I have one brother. His name is Pablo and he lives in Madrid.",
    questions: [
      { question: 'Откуда Мария?', options: ['Из Испании', 'Из Италии', 'Из Англии'] },
      { question: 'Кем она работает?', options: ['Медсестрой', 'Учительницей', 'Продавцом'] },
      { question: 'Во сколько начинается её работа?', options: ['В семь часов', 'В восемь часов', 'В девять часов'] },
      { question: 'Где живёт её брат?', options: ['В Мадриде', 'В Лондоне', 'В Барселоне'] }
    ]
  },
  {
    id: 'a1-listening-shopping',
    level: 'A1',
    title: 'В супермаркете',
    text: 'Today is Saturday. Tom goes to the supermarket. He buys bread, cheese, milk and six eggs. He also wants to buy apples, but the apples are too expensive. He takes bananas. At the till he pays twelve pounds. Then he goes home and makes breakfast for his family.',
    questions: [
      { question: 'Какой сегодня день?', options: ['Суббота', 'Воскресенье', 'Пятница'] },
      { question: 'Почему Том не покупает яблоки?', options: ['Они слишком дорогие', 'Их нет в магазине', 'Он их не любит'] },
      { question: 'Сколько он платит?', options: ['12 фунтов', '20 фунтов', '10 фунтов'] },
      { question: 'Что он делает дома?', options: ['Готовит завтрак', 'Смотрит телевизор', 'Ложится спать'] }
    ]
  },
  {
    id: 'a1-listening-day',
    level: 'A1',
    title: 'Мой день',
    text: "I get up at half past six every day. First I have a shower, then I drink coffee. At eight o'clock I go to work by bus. I work in an office. I have lunch in the canteen. I finish work at five o'clock. In the evening I cook or watch a film. I go to bed at eleven o'clock.",
    questions: [
      { question: 'Во сколько человек встаёт?', options: ['В половине седьмого', 'В семь часов', 'В половине восьмого'] },
      { question: 'Как он добирается до работы?', options: ['На автобусе', 'На машине', 'Пешком'] },
      { question: 'Где он обедает?', options: ['В столовой', 'Дома', 'В ресторане'] },
      { question: 'Что он делает вечером?', options: ['Готовит или смотрит фильм', 'Занимается спортом', 'Встречается с друзьями'] }
    ]
  }
];
