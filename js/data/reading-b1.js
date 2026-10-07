// Чтение B1: текст и вопросы на понимание.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const READING_B1 = [
  {
    id: 'b1-reading-volunteering',
    level: 'B1',
    title: 'Волонтёр в доме престарелых',
    text: 'Every Tuesday afternoon Mark Weber does not go home after work. Instead, he drives to the care home next to the city park. There he reads to elderly people, plays cards with them or simply listens. He is not paid for it. "At first I just wanted to do something useful," says the thirty-four-year-old bank clerk. "Now I get back much more than I give." He is especially impressed by Mrs Lang, who still reads the newspaper every day at the age of ninety-one and tells him stories about the past. The home is urgently looking for more volunteers, because many residents rarely have visitors. Anyone who is interested can simply phone; no special skills are needed.',
    questions: [
      { question: 'What does Mark do every Tuesday afternoon?', options: ['He visits elderly people in a care home.', 'He works longer at the bank.', 'He plays cards with his friends.'] },
      { question: 'What does he get for his help?', options: ['No money.', 'A small salary.', 'Extra days off at the bank.'] },
      { question: 'Why is the home looking for more volunteers?', options: ['Because many residents rarely have visitors.', 'Because Mark wants to stop.', 'Because the home is getting bigger.'] },
      { question: 'What do you need to take part?', options: ['No special skills.', 'Medical training.', 'Your own car.'] }
    ]
  },
  {
    id: 'b1-reading-cycling',
    level: 'B1',
    title: 'Город пересаживается на велосипед',
    text: 'More and more people in British cities are switching from the car to the bicycle. Their reasons are different: some want to save money, others want to do something for their health or for the environment. In cities such as Cambridge, the bike has long been one of the most important means of transport. But conditions are not as good everywhere. Many cyclists complain that cycle paths are missing or suddenly end. They also often feel unsafe in heavy traffic. Transport experts are therefore calling for more money to be invested in safe cycle paths. They point out that drivers would benefit too: the more people cycle, the fewer traffic jams there are.',
    questions: [
      { question: 'Which reason for cycling is not mentioned in the text?', options: ['Getting to places faster.', 'Saving money.', 'Doing something for the environment.'] },
      { question: 'What do we learn about Cambridge?', options: ['The bike is one of the most important means of transport there.', 'Cars are banned there.', 'A lot of cycle paths are missing there.'] },
      { question: 'What do many cyclists complain about?', options: ['Cycle paths that are missing or suddenly end.', 'Bikes that are too expensive.', 'Too many pedestrians.'] },
      { question: 'Why would drivers benefit too?', options: ['Because there would be fewer traffic jams.', 'Because petrol would be cheaper.', 'Because there would be more parking spaces.'] }
    ]
  },
  {
    id: 'b1-reading-complaint',
    level: 'B1',
    title: 'Письмо-жалоба',
    text: 'Dear Sir or Madam, on the third of March I ordered a vacuum cleaner from your online shop. According to your website, it should have been delivered within five working days. In fact, the parcel did not arrive until three weeks later. When I opened it, I also found that one part was missing and that the case was scratched. I have tried twice to reach your customer service by phone, unfortunately without success. I would therefore ask you either to send me a new vacuum cleaner or to refund the price. If I do not hear from you by the end of the month, I will cancel the purchase. Yours faithfully, Karen Bird',
    questions: [
      { question: 'How long did delivery actually take?', options: ['Three weeks.', 'Five working days.', 'Three days.'] },
      { question: 'What was wrong with the vacuum cleaner?', options: ['A part was missing and it was scratched.', 'It was the wrong model.', 'It would not switch on.'] },
      { question: 'What happened with customer service?', options: ['She could not reach anyone.', 'They were very rude to her.', 'They promised a quick solution.'] },
      { question: 'What does Mrs Bird ask for?', options: ['A new vacuum cleaner or her money back.', 'A voucher for her next purchase.', 'An apology by phone.'] }
    ]
  }
];
