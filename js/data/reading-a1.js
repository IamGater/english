// Чтение A1: текст и вопросы на понимание.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const READING_A1 = [
  {
    id: 'a1-reading-email',
    level: 'A1',
    title: 'Письмо подруге',
    text: "Dear Anna, how are you? I have been in Manchester for two weeks now. The city is big and very nice. I live in a small room near the station. The room costs four hundred pounds a month. Every day I go to my English course. The course starts at nine o'clock and finishes at twelve o'clock. My teacher is Mrs Brown. She is very nice. At the weekend I am going to visit the museum. Can you come and see me in May? Best wishes, Marta",
    questions: [
      { question: 'Как давно Марта в Манчестере?', options: ['Две недели', 'Два месяца', 'Два дня'] },
      { question: 'Где она живёт?', options: ['В маленькой комнате рядом с вокзалом', 'В большой квартире в центре', 'В гостинице'] },
      { question: 'Когда заканчивается курс?', options: ['В двенадцать часов', 'В девять часов', 'В два часа'] },
      { question: 'О чём Марта спрашивает Анну?', options: ['Приедет ли она в мае', 'Сколько стоит её комната', 'Как зовут её учительницу'] }
    ]
  },
  {
    id: 'a1-reading-advert',
    level: 'A1',
    title: 'Объявление о квартире',
    text: 'Flat to rent! Nice, light flat in the centre of Leeds. Two rooms, a kitchen, a bathroom and a balcony. The flat is fifty-five square metres and it is on the second floor. The rent is seven hundred pounds a month. The bus stop is only three minutes away on foot. Sorry, no pets. The flat is free from the first of July. Please call in the evening: Mr Smith, phone 0113 12345.',
    questions: [
      { question: 'Сколько комнат в квартире?', options: ['Две', 'Три', 'Одна'] },
      { question: 'Что в квартире запрещено?', options: ['Держать домашних животных', 'Курить на балконе', 'Приглашать гостей'] },
      { question: 'С какого числа квартира свободна?', options: ['С 1 июля', 'С 1 июня', 'С 1 мая'] },
      { question: 'Когда нужно звонить?', options: ['Вечером', 'Утром', 'В обед'] }
    ]
  },
  {
    id: 'a1-reading-family',
    level: 'A1',
    title: 'Семья Тима',
    text: 'My name is Tim and I am twelve years old. My family is not big. My father is a chef and he works in a restaurant. My mother is a teacher. I have one sister. Her name is Lena and she is only four years old. We also have a dog. His name is Max. On Sunday we have breakfast together and then we go to the park. My father does not cook on Sunday. My mother cooks then.',
    questions: [
      { question: 'Кем работает отец Тима?', options: ['Поваром', 'Учителем', 'Врачом'] },
      { question: 'Сколько лет сестре Тима?', options: ['Четыре года', 'Двенадцать лет', 'Четырнадцать лет'] },
      { question: 'Как зовут собаку?', options: ['Макс', 'Тим', 'Лена'] },
      { question: 'Кто готовит в воскресенье?', options: ['Мама', 'Папа', 'Тим'] }
    ]
  }
];
