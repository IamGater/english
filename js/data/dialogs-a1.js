// Диалоги A1.
// speaker: 'partner' — реплика собеседника, 'me' — реплика, которую выбирает пользователь.
// У реплики пользователя в wrong лежат два варианта с ошибкой.
const DIALOGS_A1 = [
  {
    id: 'a1-meeting',
    level: 'A1',
    title: 'Знакомство',
    scene: 'Вы знакомитесь с новой коллегой.',
    turns: [
      { speaker: 'partner', english: "Hi! I'm Emma. What's your name?", russian: 'Привет! Я Эмма. Как тебя зовут?' },
      {
        speaker: 'me',
        english: 'My name is Alex. Nice to meet you!',
        russian: 'Меня зовут Алекс. Приятно познакомиться!',
        wrong: [
          'My name are Alex. Nice to meet you!',
          'I name is Alex. Nice to meet you!'
        ]
      },
      { speaker: 'partner', english: 'Nice to meet you too! Where are you from?', russian: 'Мне тоже! Откуда ты?' },
      {
        speaker: 'me',
        english: 'I am from Kazakhstan.',
        russian: 'Я из Казахстана.',
        wrong: [
          'I am of Kazakhstan.',
          'I from Kazakhstan am.'
        ]
      },
      { speaker: 'partner', english: 'Interesting! And where do you live now?', russian: 'Интересно! А где ты сейчас живёшь?' },
      {
        speaker: 'me',
        english: 'I live in Manchester now.',
        russian: 'Сейчас я живу в Манчестере.',
        wrong: [
          'I lives in Manchester now.',
          'I live on Manchester now.'
        ]
      },
      { speaker: 'partner', english: 'What do you do?', russian: 'Кем ты работаешь?' },
      {
        speaker: 'me',
        english: 'I am a programmer.',
        russian: 'Я программист.',
        wrong: [
          'I am programmer.',
          'I have a programmer.'
        ]
      },
      { speaker: 'partner', english: 'Cool! Do you like your job?', russian: 'Здорово! Тебе нравится твоя работа?' },
      {
        speaker: 'me',
        english: 'Yes, I do. I like it very much.',
        russian: 'Да. Она мне очень нравится.',
        wrong: [
          'Yes, I am. I like it very much.',
          'Yes, I do. I like very much it.'
        ]
      },
      { speaker: 'partner', english: 'Great! See you tomorrow!', russian: 'Отлично! До завтра!' },
      {
        speaker: 'me',
        english: 'Thanks! Bye, see you tomorrow!',
        russian: 'Спасибо! Пока, до завтра!',
        wrong: [
          'Thanks! Bye, see you yesterday!',
          'Thanks! Bye, see tomorrow you!'
        ]
      }
    ]
  },
  {
    id: 'a1-cafe',
    level: 'A1',
    title: 'В кафе',
    scene: 'Вы делаете заказ в кафе.',
    turns: [
      { speaker: 'partner', english: 'Hello! What would you like to drink?', russian: 'Здравствуйте! Что вы хотите выпить?' },
      {
        speaker: 'me',
        english: 'I would like a coffee, please.',
        russian: 'Я бы хотел кофе, пожалуйста.',
        wrong: [
          'I would like an coffee, please.',
          'I would to like a coffee, please.'
        ]
      },
      { speaker: 'partner', english: 'Sure. With milk and sugar?', russian: 'Конечно. С молоком и сахаром?' },
      {
        speaker: 'me',
        english: 'With milk, but without sugar, please.',
        russian: 'С молоком, но без сахара, пожалуйста.',
        wrong: [
          'With milk, but no with sugar, please.',
          'Milk with, but without sugar, please.'
        ]
      },
      { speaker: 'partner', english: 'Would you like something to eat?', russian: 'Хотите что-нибудь поесть?' },
      {
        speaker: 'me',
        english: 'Yes, a piece of apple cake, please.',
        russian: 'Да, кусок яблочного пирога, пожалуйста.',
        wrong: [
          'Yes, an piece of apple cake, please.',
          'Yes, a piece from apple cake, please.'
        ]
      },
      { speaker: 'partner', english: 'Of course. Anything else?', russian: 'Конечно. Что-нибудь ещё?' },
      {
        speaker: 'me',
        english: "No, thank you. That's all.",
        russian: 'Нет, спасибо. Это всё.',
        wrong: [
          'No, thank you. That are all.',
          "No, thank you. All that's."
        ]
      },
      { speaker: 'partner', english: 'Here you are. That is seven pounds fifty.', russian: 'Вот, пожалуйста. С вас семь фунтов пятьдесят.' },
      {
        speaker: 'me',
        english: 'Here is ten pounds.',
        russian: 'Вот десять фунтов.',
        wrong: [
          'Here am ten pounds.',
          'Here is ten pound.'
        ]
      },
      { speaker: 'partner', english: 'Thank you! Have a nice day!', russian: 'Спасибо! Хорошего дня!' },
      {
        speaker: 'me',
        english: 'Thanks, you too!',
        russian: 'Спасибо, вам тоже!',
        wrong: [
          'Thanks, you also too!',
          'Thanks, your too!'
        ]
      }
    ]
  },
  {
    id: 'a1-directions',
    level: 'A1',
    title: 'Как пройти?',
    scene: 'Вы в незнакомом городе и спрашиваете дорогу у прохожего.',
    turns: [
      { speaker: 'partner', english: 'Hello! Can I help you?', russian: 'Здравствуйте! Могу я вам помочь?' },
      {
        speaker: 'me',
        english: 'Yes, please. Where is the train station?',
        russian: 'Да, пожалуйста. Где находится вокзал?',
        wrong: [
          'Yes, please. Where the train station is?',
          'Yes, please. Where are the train station?'
        ]
      },
      { speaker: 'partner', english: 'Go straight on and then take the second street on the left.', russian: 'Идите прямо, а затем вторая улица налево.' },
      {
        speaker: 'me',
        english: 'Is it far from here?',
        russian: 'Это далеко отсюда?',
        wrong: [
          'Is it far of here?',
          'It is far from here is?'
        ]
      },
      { speaker: 'partner', english: 'No, only about ten minutes on foot.', russian: 'Нет, всего минут десять пешком.' },
      {
        speaker: 'me',
        english: 'Is there a pharmacy near here?',
        russian: 'Здесь поблизости есть аптека?',
        wrong: [
          'Are there a pharmacy near here?',
          'Is it a pharmacy near here?'
        ]
      },
      { speaker: 'partner', english: 'Yes, the pharmacy is next to the bank, on the corner.', russian: 'Да, аптека рядом с банком, на углу.' },
      {
        speaker: 'me',
        english: 'Thank you very much for your help!',
        russian: 'Большое спасибо за вашу помощь!',
        wrong: [
          'Thank you very much for you help!',
          'Thank you very many for your help!'
        ]
      },
      { speaker: 'partner', english: "You're welcome. Have a nice day!", russian: 'Пожалуйста. Хорошего дня!' },
      {
        speaker: 'me',
        english: 'Thanks, you too!',
        russian: 'Спасибо, вам тоже!',
        wrong: [
          'Thanks, you are too!',
          'Thanks, you is too!'
        ]
      }
    ]
  }
];
