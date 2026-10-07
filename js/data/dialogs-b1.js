// Диалоги B1.
// speaker: 'partner' — реплика собеседника, 'me' — реплика, которую выбирает пользователь.
// У реплики пользователя в wrong лежат два варианта с ошибкой.
const DIALOGS_B1 = [
  {
    id: 'b1-interview',
    level: 'B1',
    title: 'Собеседование',
    scene: 'Вы проходите собеседование в международной компании.',
    turns: [
      { speaker: 'partner', english: 'Good morning, Mr Petrov. Could you tell us a little about yourself?', russian: 'Доброе утро, господин Петров. Не могли бы вы немного рассказать о себе?' },
      {
        speaker: 'me',
        english: 'I studied computer science and I have been working as a developer for five years.',
        russian: 'Я изучал информатику и уже пять лет работаю разработчиком.',
        wrong: [
          'I studied computer science and I am working as a developer since five years.',
          'I have studied computer science in 2015 and I work as a developer for five years.'
        ]
      },
      { speaker: 'partner', english: 'Why did you apply for this position?', russian: 'Почему вы подали заявку на эту должность?' },
      {
        speaker: 'me',
        english: 'Because your company works on projects that I find really interesting.',
        russian: 'Потому что ваша компания работает над проектами, которые мне очень интересны.',
        wrong: [
          'Because your company works on projects who I find really interesting.',
          'Because your company working on projects that I find really interesting.'
        ]
      },
      { speaker: 'partner', english: 'What are your strengths?', russian: 'Каковы ваши сильные стороны?' },
      {
        speaker: 'me',
        english: 'I am reliable and I am good at working in a team.',
        russian: 'Я надёжный и умею хорошо работать в команде.',
        wrong: [
          'I am reliable and I am good at work in a team.',
          'I am reliable and I am good in to work in a team.'
        ]
      },
      { speaker: 'partner', english: 'And how do you deal with stress?', russian: 'А как вы справляетесь со стрессом?' },
      {
        speaker: 'me',
        english: 'When I have a lot to do, I plan my tasks carefully.',
        russian: 'Когда у меня много дел, я тщательно планирую задачи.',
        wrong: [
          'When I will have a lot to do, I plan my tasks carefully.',
          'When I have a lot to do, I plan carefully my tasks.'
        ]
      },
      { speaker: 'partner', english: 'When would you be able to start?', russian: 'Когда вы могли бы приступить?' },
      {
        speaker: 'me',
        english: 'I could start on the first of March, after I have given notice.',
        russian: 'Я мог бы начать первого марта, после того как подам заявление об уходе.',
        wrong: [
          'I could to start on the first of March, after I have given notice.',
          'I could start on the first of March, after I will give notice.'
        ]
      },
      { speaker: 'partner', english: 'Very good. Do you have any questions for us?', russian: 'Очень хорошо. У вас есть к нам вопросы?' },
      {
        speaker: 'me',
        english: 'Yes, I would like to know if there are any training opportunities.',
        russian: 'Да, я хотел бы узнать, есть ли возможности для обучения.',
        wrong: [
          'Yes, I would like to know if are there any training opportunities.',
          'Yes, I would like know if there are any training opportunities.'
        ]
      },
      { speaker: 'partner', english: 'Yes, there are. We will contact you next week.', russian: 'Да, есть. Мы свяжемся с вами на следующей неделе.' }
    ]
  },
  {
    id: 'b1-hotel',
    level: 'B1',
    title: 'Жалоба в отеле',
    scene: 'В вашем номере проблемы, и вы звоните на ресепшен.',
    turns: [
      { speaker: 'partner', english: 'Reception, good evening. How can I help you?', russian: 'Ресепшен, добрый вечер. Чем могу помочь?' },
      {
        speaker: 'me',
        english: 'Good evening. I would like to complain about my room.',
        russian: 'Добрый вечер. Я хотел бы пожаловаться на свой номер.',
        wrong: [
          'Good evening. I would like to complain on my room.',
          'Good evening. I would like complaining about my room.'
        ]
      },
      { speaker: 'partner', english: "Oh, I'm sorry to hear that. What is the problem?", russian: 'О, мне очень жаль. В чём проблема?' },
      {
        speaker: 'me',
        english: "The heating doesn't work, although I have turned it up.",
        russian: 'Отопление не работает, хотя я включил его посильнее.',
        wrong: [
          "The heating doesn't work, despite I have turned it up.",
          "The heating doesn't works, although I have turned it up."
        ]
      },
      { speaker: 'partner', english: "I'll send someone immediately. Is there anything else?", russian: 'Я сейчас же кого-нибудь пришлю. Что-нибудь ещё?' },
      {
        speaker: 'me',
        english: "Yes, the bathroom hasn't been cleaned.",
        russian: 'Да, ванную не убрали.',
        wrong: [
          "Yes, the bathroom hasn't cleaned.",
          "Yes, the bathroom hasn't been clean up it."
        ]
      },
      { speaker: 'partner', english: 'That is not acceptable, of course. We will take care of it.', russian: 'Это, конечно, недопустимо. Мы этим займёмся.' },
      {
        speaker: 'me',
        english: 'Would it be possible to get another room?',
        russian: 'Можно ли получить другой номер?',
        wrong: [
          'Would it be possible getting another room?',
          'Would be it possible to get another room?'
        ]
      },
      { speaker: 'partner', english: 'One moment… Yes, room 305 is free. It is even a bit bigger.', russian: 'Минуту… Да, номер 305 свободен. Он даже немного больше.' },
      {
        speaker: 'me',
        english: 'That would be great. Could someone help me with my luggage?',
        russian: 'Было бы отлично. Мог бы кто-нибудь помочь мне с багажом?',
        wrong: [
          'That would be great. Could someone help me with my luggages?',
          'That would be great. Could someone to help me with my luggage?'
        ]
      },
      { speaker: 'partner', english: 'Certainly. And as an apology, breakfast is on us tomorrow.', russian: 'Разумеется. А в качестве извинения завтрак завтра за наш счёт.' },
      {
        speaker: 'me',
        english: 'Thank you, that is very kind of you.',
        russian: 'Спасибо, это очень любезно с вашей стороны.',
        wrong: [
          'Thank you, that is very kind from you.',
          'Thank you, that is very kindly of you.'
        ]
      }
    ]
  },
  {
    id: 'b1-flat',
    level: 'B1',
    title: 'Аренда квартиры',
    scene: 'Вы звоните арендодателю по объявлению о квартире.',
    turns: [
      { speaker: 'partner', english: 'Hello, Mark Wilson speaking.', russian: 'Алло, Марк Уилсон слушает.' },
      {
        speaker: 'me',
        english: "Hello, I'm calling about the flat that you advertised online.",
        russian: 'Здравствуйте, я звоню по поводу квартиры, которую вы разместили в интернете.',
        wrong: [
          "Hello, I'm calling about the flat who you advertised online.",
          "Hello, I call about the flat that you have advertised it online."
        ]
      },
      { speaker: 'partner', english: "Yes, it's still available. What would you like to know?", russian: 'Да, она ещё свободна. Что вы хотели бы узнать?' },
      {
        speaker: 'me',
        english: 'Could you tell me how much the bills are?',
        russian: 'Не могли бы вы сказать, сколько составляют коммунальные платежи?',
        wrong: [
          'Could you tell me how much are the bills?',
          'Could you say me how much the bills are?'
        ]
      },
      { speaker: 'partner', english: 'About a hundred and fifty pounds a month. The rent is seven hundred.', russian: 'Около ста пятидесяти фунтов в месяц. Аренда — семьсот.' },
      {
        speaker: 'me',
        english: 'Is the kitchen furnished, or would I have to buy everything myself?',
        russian: 'Кухня обставлена, или мне пришлось бы всё покупать самому?',
        wrong: [
          'Is the kitchen furnished, or would I must buy everything myself?',
          'Is the kitchen furnished, or would I have to buy everything myselves?'
        ]
      },
      { speaker: 'partner', english: 'It is fully furnished. When would you like to move in?', russian: 'Она полностью обставлена. Когда вы хотели бы въехать?' },
      {
        speaker: 'me',
        english: 'At the beginning of next month, if that is possible.',
        russian: 'В начале следующего месяца, если это возможно.',
        wrong: [
          'At the beginning of next month, if that will be possible.',
          'In the beginning of the next month, if is that possible.'
        ]
      },
      { speaker: 'partner', english: 'That works. Would you like to see the flat?', russian: 'Подходит. Хотите посмотреть квартиру?' },
      {
        speaker: 'me',
        english: 'Yes, please. Are you free on Thursday evening?',
        russian: 'Да, пожалуйста. Вы свободны в четверг вечером?',
        wrong: [
          'Yes, please. Are you free at Thursday evening?',
          'Yes, please. Do you free on Thursday evening?'
        ]
      },
      { speaker: 'partner', english: 'Thursday at six is fine. Please bring proof of income.', russian: 'В четверг в шесть подойдёт. Принесите, пожалуйста, подтверждение дохода.' },
      {
        speaker: 'me',
        english: "All right, I'll bring all the documents. See you on Thursday!",
        russian: 'Хорошо, я принесу все документы. До четверга!',
        wrong: [
          "All right, I'll to bring all the documents. See you on Thursday!",
          "All right, I'll bring all the documents. See you in Thursday!"
        ]
      }
    ]
  }
];
