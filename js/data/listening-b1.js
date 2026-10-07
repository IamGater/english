// Аудирование B1: текст, который читает голос браузера, и вопросы к нему.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const LISTENING_B1 = [
  {
    id: 'b1-listening-remote-work',
    level: 'B1',
    title: 'Работа из дома',
    text: 'For the last two years Jonas has worked almost entirely from home. At first he thought it was great, because he no longer had to spend an hour in traffic every day. But now he can see the disadvantages too. He misses talking to his colleagues, and he finds it hard to switch off after work because his desk is in the living room. So he has agreed with his boss that from next month he will come into the office two days a week. He hopes to get the best of both worlds.',
    questions: [
      { question: 'Why did Jonas like working from home at first?', options: ['He no longer had to sit in traffic.', 'He earned more money.', 'He had more time with colleagues.'] },
      { question: 'What does he find hard now?', options: ['Switching off after work.', 'Getting up early.', 'Using the technology.'] },
      { question: 'Where is his desk?', options: ['In the living room.', 'In the bedroom.', 'In the basement.'] },
      { question: 'What has he agreed with his boss?', options: ['To come into the office two days a week.', 'To work only in the office.', 'To move to another department.'] }
    ]
  },
  {
    id: 'b1-listening-news',
    level: 'B1',
    title: 'Местные новости',
    text: 'And now the local news. Because of roadworks, the High Street will be closed for three weeks from Monday. Drivers are asked to follow the diversion past the station. Bus number twelve will take a different route during this time. Also, the new swimming pool in the city park opens on Saturday. On the first day, entrance is free for all visitors. And the weather: the weekend will be sunny with temperatures of up to twenty-five degrees. Thunderstorms are possible on Sunday evening.',
    questions: [
      { question: 'Why will the High Street be closed?', options: ['Because of roadworks.', 'Because of an accident.', 'Because of a festival.'] },
      { question: 'How long will it be closed?', options: ['For three weeks.', 'For three days.', 'For a month.'] },
      { question: 'What is special about the first day at the new pool?', options: ['Entrance is free.', 'There is a concert.', 'It is open only to children.'] },
      { question: 'When are thunderstorms possible?', options: ['On Sunday evening.', 'On Saturday morning.', 'On Monday.'] }
    ]
  },
  {
    id: 'b1-listening-language-learning',
    level: 'B1',
    title: 'Как учить язык',
    text: 'Many people wonder what the best way to learn a language is. Mrs Keller has been teaching English as a foreign language for fifteen years. In her experience, regular practice is more important than talent. Someone who practises for twenty minutes every day makes faster progress than someone who studies for three hours once a week. She also advises her students not to be afraid of mistakes. Mistakes, she says, are a normal part of learning. What helps most is using the language in everyday life, for example when shopping or chatting with neighbours.',
    questions: [
      { question: 'How long has Mrs Keller been teaching?', options: ['For fifteen years.', 'For five years.', 'For fifty years.'] },
      { question: 'What is more important than talent, according to her?', options: ['Regular practice.', 'An expensive course.', 'A good memory.'] },
      { question: 'What does she say about mistakes?', options: ['They are a normal part of learning.', 'You should avoid them at all costs.', 'They show that you have no talent.'] },
      { question: 'What helps most?', options: ['Using the language in everyday life.', 'Reading many grammar books.', 'Speaking only with the teacher.'] }
    ]
  }
];
