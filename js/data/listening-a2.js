// Аудирование A2: текст, который читает голос браузера, и вопросы к нему.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const LISTENING_A2 = [
  {
    id: 'a2-listening-holiday',
    level: 'A2',
    title: 'Отпуск в Италии',
    text: 'Last summer I went to Italy with my family. We stayed for two weeks. The hotel was right on the beach, but it was quite noisy. The weather was sunny almost every day. It only rained once. On that day we visited a museum. We really liked the food, especially the pizza. Next year we would like to fly to Greece.',
    questions: [
      { question: 'Куда ездила семья?', options: ['В Италию', 'В Грецию', 'В Испанию'] },
      { question: 'Что было не так с отелем?', options: ['Там было шумно', 'Он был далеко от пляжа', 'Он был слишком дорогим'] },
      { question: 'Что они делали в дождливый день?', options: ['Ходили в музей', 'Остались в номере', 'Ходили по магазинам'] },
      { question: 'Какие планы на следующий год?', options: ['Полететь в Грецию', 'Снова поехать в Италию', 'Остаться дома'] }
    ]
  },
  {
    id: 'a2-listening-flat',
    level: 'A2',
    title: 'Новая квартира',
    text: 'Lisa moved a month ago. Her new flat is on the third floor and has two rooms, a kitchen and a bathroom. Unfortunately, there is no lift. The rent is six hundred and fifty pounds a month. The flat is light and quiet, and the supermarket is only five minutes away. But Lisa does not know her neighbours yet. On Saturday she is going to have a small party and invite them all.',
    questions: [
      { question: 'Когда Лиза переехала?', options: ['Месяц назад', 'Неделю назад', 'Год назад'] },
      { question: 'Чего нет в доме?', options: ['Лифта', 'Кухни', 'Ванной'] },
      { question: 'Сколько стоит аренда?', options: ['650 фунтов', '560 фунтов', '750 фунтов'] },
      { question: 'Зачем Лиза устраивает вечеринку?', options: ['Чтобы познакомиться с соседями', 'Чтобы отметить день рождения', 'Чтобы попрощаться с друзьями'] }
    ]
  },
  {
    id: 'a2-listening-surgery',
    level: 'A2',
    title: 'Автоответчик врача',
    text: "Hello, this is Doctor Weber's surgery. Unfortunately, you are calling outside our opening hours. The surgery is open from Monday to Friday from eight to twelve. On Tuesdays and Thursdays we are also open from three to six in the afternoon. To make an appointment, please call during opening hours or send us an email. If you need urgent medical help, please call one one one. Thank you for calling.",
    questions: [
      { question: 'Что это за запись?', options: ['Автоответчик врачебного кабинета', 'Реклама аптеки', 'Объявление в больнице'] },
      { question: 'Когда кабинет работает и после обеда?', options: ['По вторникам и четвергам', 'По понедельникам и средам', 'Каждый день'] },
      { question: 'Как можно записаться на приём?', options: ['Позвонить в часы работы или написать письмо', 'Только прийти лично', 'Оставить сообщение на автоответчике'] },
      { question: 'Что делать, если помощь нужна срочно?', options: ['Позвонить по номеру 111', 'Прийти без записи', 'Подождать до понедельника'] }
    ]
  }
];
