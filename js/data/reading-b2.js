// Чтение B2: текст и вопросы на понимание.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const READING_B2 = [
  {
    id: 'b2-reading-four-day-week',
    level: 'B2',
    title: 'Четырёхдневная рабочая неделя',
    text: 'The idea sounds tempting: work four days, have three days off, and keep your full salary. In several European countries, companies have tested this model in recent years, and the results surprised even the sceptics. In most of the firms involved, productivity stayed the same or even rose slightly, while sick leave fell considerably. Supporters attribute this to the fact that well-rested employees work with greater concentration and that unnecessary meetings are cut. Critics point out, however, that the model cannot be transferred to every industry. In nursing or retail, for instance, additional staff would have to be hired, and given the shortage of skilled workers they are almost impossible to find. Whether the four-day week will become the norm therefore remains an open question.',
    questions: [
      { question: 'What did the trials show in most firms?', options: ['Productivity stayed the same or rose slightly.', 'Productivity fell considerably.', 'Salaries had to be cut.'] },
      { question: 'How do supporters explain the result?', options: ['Well-rested employees concentrate better.', 'Employees work more overtime.', 'The firms hire more staff.'] },
      { question: 'What objection do critics raise?', options: ['The model cannot be transferred to every industry.', 'Employees do not want a day off.', 'The trials were too short.'] },
      { question: 'Why is the model difficult in nursing?', options: ['The additional staff cannot be found.', 'Patients reject it.', 'It is forbidden by law.'] }
    ]
  },
  {
    id: 'b2-reading-food-waste',
    level: 'B2',
    title: 'Выброшенные продукты',
    text: "Around a third of all the food produced worldwide ends up not on a plate but in the bin. For a long time, responsibility was placed mainly on consumers, who buy too much and confuse the best-before date with a use-by date. More recent research shows, however, that a considerable share of the losses occurs before the food is even sold: fruit and vegetables that do not meet retailers' cosmetic standards are often not harvested at all. Initiatives that deliberately market such produce are therefore becoming increasingly popular. Experts stress, however, that voluntary measures alone are not enough. They are calling for binding rules for retailers, like those already in force in France, where large supermarkets are no longer allowed simply to throw away unsold food.",
    questions: [
      { question: 'Who was mainly blamed for food waste for a long time?', options: ['Consumers.', 'Farmers.', 'Restaurants.'] },
      { question: 'What does more recent research show?', options: ['Many losses occur before the food is sold.', 'Consumers no longer throw anything away.', 'Food waste has fallen sharply.'] },
      { question: 'Why are some fruit and vegetables not harvested?', options: ["They do not meet retailers' cosmetic standards.", 'They are no longer fresh.', 'Harvesting is too expensive.'] },
      { question: 'What are the experts calling for?', options: ['Binding rules for retailers.', 'More voluntary initiatives.', 'Higher food prices.'] }
    ]
  },
  {
    id: 'b2-reading-bilingual-children',
    level: 'B2',
    title: 'Дети с двумя языками',
    text: 'Children who grow up with two languages used to be regarded as disadvantaged: it was feared that they would master neither language properly. This assumption is now considered to have been disproved. It is true that bilingual children often have a slightly smaller vocabulary in each individual language at first than monolingual children of the same age, but this difference usually evens out during their school years. At the same time, numerous studies suggest that bilingualism improves the ability to switch between tasks and to ignore what is irrelevant. According to linguists, however, what matters is that both languages are actually used in everyday life. Parents are therefore advised to speak to their children in the language they know best rather than struggling in a foreign one.',
    questions: [
      { question: 'What was feared about bilingual children in the past?', options: ['That they would master neither language properly.', 'That they would talk too much.', 'That they would be worse at maths.'] },
      { question: 'What does the text say about vocabulary?', options: ['The initial difference usually evens out.', 'It always remains smaller.', 'It is larger from the start.'] },
      { question: 'Which advantage do studies mention?', options: ['Better switching between tasks.', 'A better ear for music.', 'Learning to read faster.'] },
      { question: 'What are parents advised to do?', options: ['Speak the language they know best.', 'Speak only the language of the country.', 'Send their children to language courses early.'] }
    ]
  }
];
