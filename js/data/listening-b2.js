// Аудирование B2: текст, который читает голос браузера, и вопросы к нему.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const LISTENING_B2 = [
  {
    id: 'b2-listening-city-centre',
    level: 'B2',
    title: 'Центр города без машин',
    text: 'In many large cities there is currently a heated debate about whether city centres should be closed to cars. Supporters argue that this would not only improve air quality but also create more space for pedestrians, cyclists and cafés. Critics, above all shop owners, fear falling sales, since customers with cars might switch to shopping centres on the outskirts. However, studies from cities that have already taken this step suggest that sales tend to rise after a transition period. What is crucial, though, is that public transport is significantly expanded beforehand.',
    questions: [
      { question: 'What is being debated in many large cities?', options: ['Whether city centres should be car-free.', 'Whether parking fees should rise.', 'Whether new shopping centres should be built.'] },
      { question: 'What do shop owners fear?', options: ['Falling sales.', 'Rising rents.', 'More noise.'] },
      { question: 'What do studies from other cities suggest?', options: ['Sales tend to rise after a transition period.', 'Many shops have to close.', 'Air quality stays the same.'] },
      { question: 'What is seen as the crucial condition?', options: ['Expanding public transport first.', 'Building new car parks.', 'Lowering taxes for shops.'] }
    ]
  },
  {
    id: 'b2-listening-sleep',
    level: 'B2',
    title: 'Сон и здоровье',
    text: 'Sleep researchers have been warning for years that many adults regularly get too little sleep. People who routinely sleep less than six hours a night have a considerably higher risk of heart disease and find it harder to concentrate. One of the main causes is thought to be the use of screens in the evening: blue light suppresses the release of the sleep hormone melatonin. Experts therefore recommend putting your smartphone away at least an hour before going to bed. Keeping regular bedtimes is also said to help, even at weekends, however difficult that may be.',
    questions: [
      { question: 'What have sleep researchers been warning about?', options: ['That many adults regularly get too little sleep.', 'That children sleep too long.', 'That sleeping pills are dangerous.'] },
      { question: 'What is one effect of too little sleep, according to the text?', options: ['A higher risk of heart disease.', 'A better memory.', 'A smaller appetite.'] },
      { question: 'Why do screens disturb sleep?', options: ['Blue light suppresses the sleep hormone.', 'They are too loud.', 'They make you hungry.'] },
      { question: 'What do the experts recommend?', options: ['Putting the smartphone away an hour before bed.', 'Sleeping longer at weekends.', 'Doing sport in the evening.'] }
    ]
  },
  {
    id: 'b2-listening-ai',
    level: 'B2',
    title: 'Искусственный интеллект и работа',
    text: 'Artificial intelligence is changing the world of work faster than many had expected. While simple, repetitive tasks are increasingly being taken over by software, new professions are emerging that did not exist ten years ago. Labour market researchers assume that there will not be less work overall, but that the skills required will shift fundamentally. What will be in demand are above all the abilities that machines find difficult: creativity, empathy and critical thinking. For employees, this means continuing to learn throughout their lives. Companies, in turn, will have to provide their staff with the time and resources to do so.',
    questions: [
      { question: 'Which tasks are increasingly being taken over by software?', options: ['Simple, repetitive tasks.', 'Creative tasks.', 'Management tasks.'] },
      { question: 'What do labour market researchers expect?', options: ['The skills required will shift fundamentally.', 'There will be far less work.', 'Hardly anything will change.'] },
      { question: 'Which abilities will be in demand?', options: ['Creativity, empathy and critical thinking.', 'Fast typing and arithmetic.', 'Physical strength.'] },
      { question: 'What will companies have to do?', options: ['Provide time and resources for training.', 'Dismiss more staff.', 'Do without new technology.'] }
    ]
  }
];
