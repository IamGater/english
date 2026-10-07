// Диалоги A2.
// speaker: 'partner' — реплика собеседника, 'me' — реплика, которую выбирает пользователь.
// У реплики пользователя в wrong лежат два варианта с ошибкой.
const DIALOGS_A2 = [
  {
    id: 'a2-doctor',
    level: 'A2',
    title: 'У врача',
    scene: 'Вы пришли на приём к врачу.',
    turns: [
      { speaker: 'partner', english: 'Good morning. What seems to be the problem?', russian: 'Доброе утро. Что вас беспокоит?' },
      {
        speaker: 'me',
        english: 'I have had a sore throat for three days.',
        russian: 'У меня уже три дня болит горло.',
        wrong: [
          'I have a sore throat since three days.',
          'I had have a sore throat for three days.'
        ]
      },
      { speaker: 'partner', english: 'Do you have a temperature as well?', russian: 'Температура тоже есть?' },
      {
        speaker: 'me',
        english: 'Yes, I had a temperature last night.',
        russian: 'Да, вчера вечером была температура.',
        wrong: [
          'Yes, I have had a temperature last night.',
          'Yes, I did had a temperature last night.'
        ]
      },
      { speaker: 'partner', english: 'I see. Are you taking any medicine?', russian: 'Понятно. Вы принимаете какие-нибудь лекарства?' },
      {
        speaker: 'me',
        english: "No, I haven't taken anything yet.",
        russian: 'Нет, я пока ничего не принимал.',
        wrong: [
          "No, I haven't took anything yet.",
          "No, I didn't taken anything yet."
        ]
      },
      { speaker: 'partner', english: 'Right. Take these tablets three times a day after meals.', russian: 'Хорошо. Принимайте эти таблетки три раза в день после еды.' },
      {
        speaker: 'me',
        english: 'Do I have to stay at home?',
        russian: 'Мне нужно оставаться дома?',
        wrong: [
          'Do I have stay at home?',
          'Do I must stay at home?'
        ]
      },
      { speaker: 'partner', english: 'Yes, until Friday. You should drink a lot and rest.', russian: 'Да, до пятницы. Вам следует много пить и отдыхать.' },
      {
        speaker: 'me',
        english: "Should I come back if I don't feel better?",
        russian: 'Мне прийти снова, если не станет лучше?',
        wrong: [
          "Should I come back if I won't feel better?",
          "Should I to come back if I don't feel better?"
        ]
      },
      { speaker: 'partner', english: 'Yes, come again next week. Get well soon!', russian: 'Да, приходите на следующей неделе. Выздоравливайте!' },
      {
        speaker: 'me',
        english: 'Thank you very much, doctor. Goodbye!',
        russian: 'Большое спасибо, доктор. До свидания!',
        wrong: [
          'Thank you very much, doctor. Get well soon!',
          'Thanks you very much, doctor. Goodbye!'
        ]
      }
    ]
  },
  {
    id: 'a2-clothes',
    level: 'A2',
    title: 'В магазине одежды',
    scene: 'Вы выбираете куртку в магазине.',
    turns: [
      { speaker: 'partner', english: 'Hello! Can I help you?', russian: 'Здравствуйте! Могу я вам помочь?' },
      {
        speaker: 'me',
        english: "Yes, I'm looking for a warm jacket for the winter.",
        russian: 'Да, я ищу тёплую куртку на зиму.',
        wrong: [
          "Yes, I'm looking a warm jacket for the winter.",
          "Yes, I'm look for a warm jacket for the winter."
        ]
      },
      { speaker: 'partner', english: 'What size are you?', russian: 'Какой у вас размер?' },
      {
        speaker: 'me',
        english: 'I usually wear a medium.',
        russian: 'Обычно я ношу размер M.',
        wrong: [
          'I wear usually a medium.',
          'I am usually wearing a medium.'
        ]
      },
      { speaker: 'partner', english: 'How do you like this blue one?', russian: 'Как вам вот эта синяя?' },
      {
        speaker: 'me',
        english: 'I like it. Can I try it on?',
        russian: 'Мне нравится. Можно её примерить?',
        wrong: [
          'I like it. Can I try on it?',
          'I like it. Can I to try it on?'
        ]
      },
      { speaker: 'partner', english: 'Of course, the fitting rooms are over there. … Does it fit?', russian: 'Конечно, примерочные вон там. … Подходит?' },
      {
        speaker: 'me',
        english: "It's too small. Do you have a bigger one?",
        russian: 'Она слишком маленькая. У вас есть побольше?',
        wrong: [
          "It's too small. Do you have a more big one?",
          "It's too much small. Do you have a bigger one?"
        ]
      },
      { speaker: 'partner', english: 'Yes, here is a large. It costs eighty-nine pounds.', russian: 'Да, вот размер L. Она стоит восемьдесят девять фунтов.' },
      {
        speaker: 'me',
        english: "Great, I'll take it. Can I pay by card?",
        russian: 'Отлично, я её возьму. Можно оплатить картой?',
        wrong: [
          "Great, I'm take it. Can I pay by card?",
          "Great, I'll take it. Can I pay with the card by?"
        ]
      },
      { speaker: 'partner', english: 'Certainly. The till is just over here.', russian: 'Разумеется. Касса прямо здесь.' }
    ]
  },
  {
    id: 'a2-plans',
    level: 'A2',
    title: 'Договориться о встрече',
    scene: 'Друг звонит и предлагает сходить в кино.',
    turns: [
      { speaker: 'partner', english: 'Hi! Are you doing anything on Saturday?', russian: 'Привет! У тебя есть планы на субботу?' },
      {
        speaker: 'me',
        english: 'No, not yet. Why do you ask?',
        russian: 'Нет, пока нет. А почему ты спрашиваешь?',
        wrong: [
          'No, not yet. Why you ask?',
          'No, not already. Why do you ask?'
        ]
      },
      { speaker: 'partner', english: "There's a new film at the cinema. Would you like to come?", russian: 'В кино идёт новый фильм. Хочешь пойти?' },
      {
        speaker: 'me',
        english: "Yes, I'd love to! What time does the film start?",
        russian: 'Да, с удовольствием! Во сколько начинается фильм?',
        wrong: [
          "Yes, I'd love to! What time starts the film?",
          "Yes, I'd love to! What time the film does start?"
        ]
      },
      { speaker: 'partner', english: 'At eight. Shall we meet before and have something to eat?', russian: 'В восемь. Может, встретимся пораньше и поедим?' },
      {
        speaker: 'me',
        english: "Good idea! Let's meet at half past six in front of the cinema.",
        russian: 'Хорошая идея! Давай встретимся в половине седьмого перед кинотеатром.',
        wrong: [
          "Good idea! Let's to meet at half past six in front of the cinema.",
          "Good idea! Let's meet in half past six in front the cinema."
        ]
      },
      { speaker: 'partner', english: "Half past six is too early for me, I work until six. Is seven OK?", russian: 'Половина седьмого для меня рано, я работаю до шести. В семь нормально?' },
      {
        speaker: 'me',
        english: "No problem, seven is fine. I'll book the tickets.",
        russian: 'Без проблем, в семь подходит. Я забронирую билеты.',
        wrong: [
          "No problem, seven is fine. I will booking the tickets.",
          "No problem, seven is fine. I'll to book the tickets."
        ]
      },
      { speaker: 'partner', english: 'Great! Shall I pick you up by car?', russian: 'Отлично! Заехать за тобой на машине?' },
      {
        speaker: 'me',
        english: "No, thanks, I'll walk because I live near the cinema.",
        russian: 'Нет, спасибо, я дойду пешком, потому что живу рядом с кинотеатром.',
        wrong: [
          "No, thanks, I'll walk because I am live near the cinema.",
          "No, thanks, I'll walk because live I near the cinema."
        ]
      },
      { speaker: 'partner', english: 'OK. See you on Saturday then!', russian: 'Хорошо. Тогда до субботы!' }
    ]
  }
];
