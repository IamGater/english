// Диалоги B2.
// speaker: 'partner' — реплика собеседника, 'me' — реплика, которую выбирает пользователь.
// У реплики пользователя в wrong лежат два варианта с ошибкой.
const DIALOGS_B2 = [
  {
    id: 'b2-remote-work',
    level: 'B2',
    title: 'Обсуждение удалённой работы',
    scene: 'Руководитель отдела спрашивает ваше мнение о планах компании.',
    turns: [
      { speaker: 'partner', english: 'Management is thinking about limiting remote work again. What do you make of that?', russian: 'Руководство думает снова ограничить удалённую работу. Что вы об этом думаете?' },
      {
        speaker: 'me',
        english: 'To be honest, I think it would be a mistake, since most people are more productive at home.',
        russian: 'Честно говоря, я думаю, это было бы ошибкой, так как большинство людей дома продуктивнее.',
        wrong: [
          'To be honest, I think it would be a mistake, since the most people are more productive at home.',
          'To be honest, I think it would be a mistake, since most people are productiver at home.'
        ]
      },
      { speaker: 'partner', english: "But doesn't communication within the team suffer?", russian: 'Но разве общение в команде не страдает?' },
      {
        speaker: 'me',
        english: 'That may be true; however, it could be solved by having fixed office days.',
        russian: 'Возможно; однако это можно было бы решить фиксированными офисными днями.',
        wrong: [
          'That may be true; however, it could be solved by have fixed office days.',
          'That may be true; although, it could be solve by having fixed office days.'
        ]
      },
      { speaker: 'partner', english: 'Some colleagues claim that people work less at home.', russian: 'Некоторые коллеги утверждают, что дома люди работают меньше.' },
      {
        speaker: 'me',
        english: 'There is no evidence for that; if anything, the figures suggest the opposite.',
        russian: 'Этому нет подтверждений; цифры, скорее, говорят об обратном.',
        wrong: [
          'There are no evidences for that; if anything, the figures suggest the opposite.',
          'There is no evidence for that; if anything, the figures suggest opposite.'
        ]
      },
      { speaker: 'partner', english: 'So what would you suggest?', russian: 'Так что бы вы предложили?' },
      {
        speaker: 'me',
        english: 'I would suggest introducing fixed office days as well as allowing flexible arrangements.',
        russian: 'Я бы предложил ввести фиксированные офисные дни, а также разрешить гибкие договорённости.',
        wrong: [
          'I would suggest to introduce fixed office days as well as allowing flexible arrangements.',
          'I would suggest introducing fixed office days as well as to allowing flexible arrangements.'
        ]
      },
      { speaker: 'partner', english: 'And what if management sticks to its plan anyway?', russian: 'А если руководство всё равно останется при своём плане?' },
      {
        speaker: 'me',
        english: 'Then they should at least explain the decision in detail.',
        russian: 'Тогда им следует хотя бы подробно объяснить решение.',
        wrong: [
          'Then they should at least to explain the decision in detail.',
          'Then they should at least explain the decision in details.'
        ]
      },
      { speaker: 'partner', english: "All right, I'll pass your arguments on.", russian: 'Хорошо, я передам ваши аргументы.' },
      {
        speaker: 'me',
        english: 'Thank you. The sooner we discuss it, the better.',
        russian: 'Спасибо. Чем раньше мы это обсудим, тем лучше.',
        wrong: [
          'Thank you. The sooner we discuss it, better.',
          'Thank you. As sooner we discuss it, the better.'
        ]
      }
    ]
  },
  {
    id: 'b2-order-complaint',
    level: 'B2',
    title: 'Претензия по заказу',
    scene: 'Вы звоните в службу поддержки интернет-магазина.',
    turns: [
      { speaker: 'partner', english: 'Customer service, Laura speaking. How may I help you?', russian: 'Служба поддержки, говорит Лора. Чем могу помочь?' },
      {
        speaker: 'me',
        english: "Hello, I ordered a laptop two weeks ago, and it still hasn't been delivered.",
        russian: 'Здравствуйте, две недели назад я заказал ноутбук, и он до сих пор не доставлен.',
        wrong: [
          "Hello, I have ordered a laptop two weeks ago, and it still hasn't been delivered.",
          "Hello, I ordered a laptop two weeks ago, and it still hasn't delivered."
        ]
      },
      { speaker: 'partner', english: "I'm sorry about that. Could you give me your order number, please?", russian: 'Мне жаль. Назовите, пожалуйста, номер заказа.' },
      {
        speaker: 'me',
        english: "It's 48213. I was promised delivery within three days.",
        russian: 'Номер 48213. Мне обещали доставку в течение трёх дней.',
        wrong: [
          "It's 48213. I was promised delivery during three days.",
          "It's 48213. I have promised delivery within three days."
        ]
      },
      { speaker: 'partner', english: 'I can see that the parcel was lost in transit.', russian: 'Я вижу, что посылка была утеряна при пересылке.' },
      {
        speaker: 'me',
        english: 'I should have been told about that earlier.',
        russian: 'Мне должны были сообщить об этом раньше.',
        wrong: [
          'I should have told about that earlier.',
          'I should have been tell about that earlier.'
        ]
      },
      { speaker: 'partner', english: 'You are absolutely right. We can send you the laptop again.', russian: 'Вы совершенно правы. Мы можем отправить вам ноутбук повторно.' },
      {
        speaker: 'me',
        english: 'How long would that take? I rely on the laptop for my work.',
        russian: 'Сколько это займёт? Ноутбук необходим мне для работы.',
        wrong: [
          'How long would that take? I rely at the laptop for my work.',
          'How long would that take? I am relying the laptop for my work.'
        ]
      },
      { speaker: 'partner', english: 'About five working days. Alternatively, we can refund you.', russian: 'Около пяти рабочих дней. Либо мы можем вернуть вам деньги.' },
      {
        speaker: 'me',
        english: 'In that case, I insist on express delivery at no extra cost.',
        russian: 'В таком случае я настаиваю на экспресс-доставке без дополнительной платы.',
        wrong: [
          'In that case, I insist in express delivery at no extra cost.',
          'In that case, I insist on express delivery at no extra costs.'
        ]
      },
      { speaker: 'partner', english: "Agreed. I'll arrange that right away and you will receive a confirmation today.", russian: 'Согласна. Я сейчас же это организую, подтверждение вы получите сегодня.' },
      {
        speaker: 'me',
        english: "Thank you. Should there be any further problems, I'll get in touch again.",
        russian: 'Спасибо. Если возникнут ещё какие-то проблемы, я свяжусь с вами снова.',
        wrong: [
          "Thank you. Should there will be any further problems, I'll get in touch again.",
          "Thank you. Should be there any further problems, I'll get in touch again."
        ]
      }
    ]
  },
  {
    id: 'b2-car-free',
    level: 'B2',
    title: 'Спор о центре без машин',
    scene: 'Вы с другом обсуждаете планы города закрыть центр для автомобилей.',
    turns: [
      { speaker: 'partner', english: 'Have you heard? They want to make the city centre completely car-free.', russian: 'Ты слышал? Центр города хотят полностью закрыть для машин.' },
      {
        speaker: 'me',
        english: "Yes, and in my opinion it's long overdue.",
        russian: 'Да, и, по-моему, это давно назрело.',
        wrong: [
          "Yes, and on my opinion it's long overdue.",
          "Yes, and in my opinion it long overdue."
        ]
      },
      { speaker: 'partner', english: 'Really? Shop owners are afraid that customers will stay away.', russian: 'Правда? Владельцы магазинов боятся, что покупатели перестанут приходить.' },
      {
        speaker: 'me',
        english: 'According to several studies, exactly the opposite has happened in other cities.',
        russian: 'Согласно ряду исследований, в других городах произошло ровно обратное.',
        wrong: [
          'According several studies, exactly the opposite has happened in other cities.',
          'According to several studies, exactly the opposite has been happened in other cities.'
        ]
      },
      { speaker: 'partner', english: 'And what about people who depend on their cars?', russian: 'А как быть людям, которые зависят от машины?' },
      {
        speaker: 'me',
        english: 'There would have to be exceptions for them; otherwise the rule would be unfair.',
        russian: 'Для них должны быть исключения; иначе правило было бы несправедливым.',
        wrong: [
          'There would have to be exceptions for them; otherwise the rule would unfair.',
          'There would must be exceptions for them; otherwise the rule would be unfair.'
        ]
      },
      { speaker: 'partner', english: 'Still, public transport is already overcrowded.', russian: 'И всё же общественный транспорт уже перегружен.' },
      {
        speaker: 'me',
        english: "I agree with you there; it won't work unless the service is improved.",
        russian: 'Тут я с тобой согласен; это не сработает, если транспорт не улучшат.',
        wrong: [
          "I agree with you there; it won't work unless the service isn't improved.",
          "I am agree with you there; it won't work unless the service is improved."
        ]
      },
      { speaker: 'partner', english: "So you're not completely in favour after all?", russian: 'Значит, ты всё-таки не полностью «за»?' },
      {
        speaker: 'me',
        english: 'I am, but only on condition that the city invests in buses and trains first.',
        russian: 'Я «за», но только при условии, что город сначала вложится в автобусы и поезда.',
        wrong: [
          'I am, but only on condition that the city will invests in buses and trains first.',
          'I am, but only in condition that the city invests in buses and trains first.'
        ]
      },
      { speaker: 'partner', english: "That sounds reasonable. You've almost convinced me.", russian: 'Звучит разумно. Ты меня почти убедил.' },
      {
        speaker: 'me',
        english: "I'm glad to hear it. If I were the mayor, I would have done it years ago.",
        russian: 'Рад это слышать. Будь я мэром, я бы сделал это много лет назад.',
        wrong: [
          "I'm glad to hear it. If I would be the mayor, I would have done it years ago.",
          "I'm glad to hear it. If I were the mayor, I would did it years ago."
        ]
      }
    ]
  }
];
