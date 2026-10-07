// Чтение A2: текст и вопросы на понимание.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const READING_A2 = [
  {
    id: 'a2-reading-invitation',
    level: 'A2',
    title: 'Приглашение на день рождения',
    text: "Hi everyone! On Saturday the fourteenth of June I am going to be thirty, and I would like to celebrate with you. The party is not at my place. It is in my parents' garden because there is more space there. We are starting at five o'clock. I will get the drinks and the meat for the barbecue. It would be great if everyone could bring a salad or a cake. If it rains, we will have the party in the garage. Please let me know by Wednesday if you can come. I am looking forward to seeing you! Paul",
    questions: [
      { question: 'Что празднует Пол?', options: ['Тридцатилетие', 'Новоселье', 'Свадьбу'] },
      { question: 'Почему праздник в саду у родителей?', options: ['Там больше места', 'У Пола дома ремонт', 'Так захотели родители'] },
      { question: 'Что гостей просят принести?', options: ['Салат или пирог', 'Напитки', 'Мясо для барбекю'] },
      { question: 'До какого дня нужно ответить?', options: ['До среды', 'До субботы', 'До пятницы'] }
    ]
  },
  {
    id: 'a2-reading-working-day',
    level: 'A2',
    title: 'Рабочий день Сабины',
    text: "Sabine has worked as a shop assistant in a bakery for three years. Her working day starts very early: she opens the shop at half past five. In the morning there are a lot of customers who buy rolls and coffee on their way to work. At lunchtime it is quieter, so Sabine tidies up and orders new goods. She finishes work at two o'clock. She finds getting up early tiring, but she likes having time for her children in the afternoon. She also has to work on Saturdays, but she has Mondays off.",
    questions: [
      { question: 'Где работает Сабина?', options: ['В булочной', 'В кафе', 'В супермаркете'] },
      { question: 'Когда приходит больше всего покупателей?', options: ['Утром', 'В обед', 'Вечером'] },
      { question: 'Что ей нравится в её графике?', options: ['После обеда есть время для детей', 'Высокая зарплата', 'Работа по субботам'] },
      { question: 'В какой день у неё выходной?', options: ['В понедельник', 'В субботу', 'В воскресенье'] }
    ]
  },
  {
    id: 'a2-reading-city',
    level: 'A2',
    title: 'Советы гостям города',
    text: 'Dear visitors, welcome to our city! Here are some tips for your stay. The city museum is open every day except Monday from ten to six. Entrance costs eight pounds, and it is free for children under twelve. From the tower of the old church you have a wonderful view of the city, but be careful: there is no lift, only two hundred steps. On the market square there is a market with local fruit and vegetables every Wednesday and Saturday. With a day ticket for six pounds you can use all the buses and trams.',
    questions: [
      { question: 'Когда музей закрыт?', options: ['По понедельникам', 'По воскресеньям', 'По средам'] },
      { question: 'Кто проходит в музей бесплатно?', options: ['Дети младше двенадцати лет', 'Все по субботам', 'Студенты'] },
      { question: 'Как подняться на башню?', options: ['По лестнице', 'На лифте', 'На автобусе'] },
      { question: 'Сколько стоит дневной билет на транспорт?', options: ['6 фунтов', '8 фунтов', '12 фунтов'] }
    ]
  }
];
