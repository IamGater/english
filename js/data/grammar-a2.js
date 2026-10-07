// Грамматика A2: правила и упражнения.
// В упражнении есть либо options — варианты ответа (первый всегда правильный, на экране они перемешиваются),
// либо answer — слово, которое нужно вписать вместо ___.
const GRAMMAR_A2 = [
  {
    id: 'a2-past-irregular',
    level: 'A2',
    title: 'Past Simple: неправильные глаголы',
    rule: `
      <p>Многие частые глаголы образуют прошедшее время не с помощью -ed — их формы нужно запомнить.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>go</th><th>see</th><th>buy</th><th>eat</th><th>write</th><th>have</th><th>do</th><th>take</th></tr>
          <tr><td>went</td><td>saw</td><td>bought</td><td>ate</td><td>wrote</td><td>had</td><td>did</td><td>took</td></tr>
        </table>
      </div>
      <p>В отрицании и вопросе после <b>did / didn't</b> глагол возвращается в начальную форму:</p>
      <p class="rule-example">I <b>went</b> to the cinema. — I <b>didn't go</b> to the cinema. — <b>Did</b> you <b>go</b> to the cinema?</p>
    `,
    exercises: [
      { question: 'I ___ to the cinema yesterday. (go)', answer: 'went' },
      { question: 'She ___ a new phone. (buy)', answer: 'bought' },
      { question: 'Did you ___ him? (see)', answer: 'see' },
      { question: 'We ___ pizza for dinner.', options: ['ate', 'eated', 'eat'] },
      { question: "He didn't ___ the homework.", options: ['do', 'did', 'done'] },
      { question: 'They ___ a letter last week. (write)', answer: 'wrote' }
    ]
  },
  {
    id: 'a2-future',
    level: 'A2',
    title: 'Будущее: will и be going to',
    rule: `
      <ul>
        <li><b>will</b> + глагол — решение, принятое в момент речи, обещание, прогноз-мнение: I think it <b>will rain</b>. I<b>'ll help</b> you.</li>
        <li><b>be going to</b> + глагол — заранее задуманный план или прогноз по явным признакам: We <b>are going to visit</b> our grandparents. Look at the clouds! It <b>is going to rain</b>.</li>
      </ul>
      <p>Отрицание от will — <b>won't</b> (will not): She <b>won't</b> come.</p>
      <p class="rule-example">— The phone is ringing. — I<b>'ll</b> answer it. (решил сейчас)<br>
        I<b>'m going to</b> call her tonight. (уже запланировал)</p>
    `,
    exercises: [
      { question: 'I think it ___ rain tomorrow.', options: ['will', 'is going', 'goes'] },
      { question: 'We are going ___ visit our grandparents.', answer: 'to' },
      { question: 'Look at the clouds! It ___ to rain.', options: ['is going', 'will', 'goes'] },
      { question: "Don't worry, I ___ help you. (will)", answer: 'will', alsoCorrect: ["'ll"] },
      { question: 'She ___ come to the party, she is ill.', options: ["won't", 'not will', "willn't"] },
      { question: 'What are you ___ to do after school? (go)', answer: 'going' }
    ]
  },
  {
    id: 'a2-comparison',
    level: 'A2',
    title: 'Степени сравнения прилагательных',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>сравнительная</th><th>превосходная</th></tr>
          <tr><td>короткие: tall</td><td>tall<b>er</b></td><td>the tall<b>est</b></td></tr>
          <tr><td>на -y: happy</td><td>happ<b>ier</b></td><td>the happ<b>iest</b></td></tr>
          <tr><td>длинные: expensive</td><td><b>more</b> expensive</td><td>the <b>most</b> expensive</td></tr>
          <tr><td>good / bad</td><td><b>better</b> / <b>worse</b></td><td>the <b>best</b> / the <b>worst</b></td></tr>
        </table>
      </div>
      <ul>
        <li>Сравнение: <b>than</b> — She is taller <b>than</b> her brother.</li>
        <li>Равенство: <b>as … as</b> — He is <b>as</b> tall <b>as</b> his father.</li>
      </ul>
    `,
    exercises: [
      { question: 'My car is ___ than yours. (fast)', answer: 'faster' },
      { question: 'This book is ___ interesting than that one.', answer: 'more' },
      { question: 'It is the ___ day of my life. (good)', answer: 'best' },
      { question: 'She is ___ than her brother.', options: ['taller', 'more tall', 'tallest'] },
      { question: 'He is as tall ___ his father.', options: ['as', 'than', 'like'] },
      { question: 'This is the ___ expensive hotel in the city.', answer: 'most' }
    ]
  },
  {
    id: 'a2-quantifiers',
    level: 'A2',
    title: 'Количество: much, many, some, any',
    rule: `
      <p>Выбор слова зависит от того, можно ли предмет посчитать.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>исчисляемые (apples)</th><th>неисчисляемые (water)</th></tr>
          <tr><td>много</td><td><b>many</b> / a lot of</td><td><b>much</b> / a lot of</td></tr>
          <tr><td>немного</td><td><b>a few</b></td><td><b>a little</b></td></tr>
          <tr><td>сколько?</td><td>How <b>many</b>?</td><td>How <b>much</b>?</td></tr>
        </table>
      </div>
      <ul>
        <li><b>some</b> — в утверждениях: I have <b>some</b> friends.</li>
        <li><b>any</b> — в отрицаниях и вопросах: I don't have <b>any</b> money. Do you have <b>any</b> questions?</li>
      </ul>
    `,
    exercises: [
      { question: 'How ___ apples do we need?', options: ['many', 'much', 'lot'] },
      { question: 'How ___ money do you have?', options: ['much', 'many', 'few'] },
      { question: "There isn't ___ milk in the fridge.", options: ['any', 'some', 'many'] },
      { question: 'I have ___ friends in London.', options: ['some', 'any', 'much'] },
      { question: "We have a ___ time, let's have a coffee.", options: ['little', 'few', 'many'] },
      { question: 'She has a ___ books about art.', options: ['few', 'little', 'much'] }
    ]
  },
  {
    id: 'a2-present-perfect',
    level: 'A2',
    title: 'Present Perfect: основы',
    rule: `
      <p>Present Perfect связывает прошлое с настоящим: важен результат или жизненный опыт, а не момент, когда это произошло.</p>
      <p>Формула: <b>have / has</b> + третья форма глагола (у правильных — <b>-ed</b>, у неправильных — своя: seen, eaten, been, lost).</p>
      <ul>
        <li>Опыт: I <b>have been</b> to London. <b>Have</b> you <b>ever eaten</b> sushi? I <b>have never seen</b> this film.</li>
        <li>Результат сейчас: He <b>has lost</b> his keys (и сейчас их нет).</li>
        <li>Только что: We <b>have just finished</b>.</li>
      </ul>
      <p>Если указано, когда именно это было (yesterday, in 2019), нужен Past Simple.</p>
    `,
    exercises: [
      { question: 'I have ___ this film. (see)', answer: 'seen' },
      { question: 'She ___ never been to Italy.', answer: 'has' },
      { question: 'Have you ever ___ sushi? (eat)', answer: 'eaten' },
      { question: 'We ___ just finished our work.', options: ['have', 'has', 'are'] },
      { question: 'He has ___ his keys. (lose)', answer: 'lost' },
      { question: '___ they arrived yet?', options: ['Have', 'Has', 'Did'] }
    ]
  },
  {
    id: 'a2-modals',
    level: 'A2',
    title: 'Must, have to, should',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>глагол</th><th>значение</th><th>пример</th></tr>
          <tr><td><b>must</b></td><td>должен (правило, личное убеждение)</td><td>You must wear a seat belt.</td></tr>
          <tr><td><b>have to</b></td><td>приходится (внешние обстоятельства)</td><td>She has to get up early.</td></tr>
          <tr><td><b>should</b></td><td>следует (совет)</td><td>You should see a doctor.</td></tr>
          <tr><td><b>mustn't</b></td><td>нельзя (запрет)</td><td>You mustn't smoke here.</td></tr>
          <tr><td><b>don't have to</b></td><td>не обязательно</td><td>You don't have to come.</td></tr>
        </table>
      </div>
      <p>После must и should глагол стоит без to. <b>have to</b> изменяется как обычный глагол: he <b>has to</b>, <b>do</b> you <b>have to</b>?</p>
    `,
    exercises: [
      { question: 'You ___ smoke here. It is forbidden.', options: ["mustn't", "don't have to", "shouldn't to"] },
      { question: 'She ___ to get up early every day.', options: ['has', 'must', 'should'] },
      { question: 'You look tired. You ___ go to bed.', options: ['should', 'have', 'must to'] },
      { question: "Tomorrow is Sunday, so I don't ___ to work.", answer: 'have' },
      { question: "We ___ wear a uniform at school. It's the rule.", options: ['must', 'should to', 'have'] },
      { question: 'You should ___ more water. (drink)', answer: 'drink' }
    ]
  },
  {
    id: 'a2-past-continuous',
    level: 'A2',
    title: 'Past Continuous: действие в процессе в прошлом',
    rule: `
      <p>Past Continuous показывает, что действие было в процессе в определённый момент прошлого. Формула: <b>was / were</b> + глагол с <b>-ing</b>.</p>
      <ul>
        <li>В конкретное время: At 8 o'clock I <b>was having</b> breakfast.</li>
        <li>Фон для другого действия: I <b>was watching</b> TV <b>when</b> you <b>called</b>. Длительное действие — Past Continuous, короткое — Past Simple.</li>
        <li>Два действия одновременно: <b>While</b> she <b>was cooking</b>, he <b>was reading</b>.</li>
      </ul>
    `,
    exercises: [
      { question: 'I ___ watching TV when you called.', answer: 'was' },
      { question: 'They were ___ football at 5 pm. (play)', answer: 'playing' },
      { question: 'While she ___ cooking, the phone rang.', options: ['was', 'were', 'is'] },
      { question: "What ___ you doing at 8 o'clock yesterday?", answer: 'were' },
      { question: 'He ___ when I came in.', options: ['was sleeping', 'sleeps', 'is sleeping'] },
      { question: 'It was raining when we ___ the house. (leave)', answer: 'left' }
    ]
  },
  {
    id: 'a2-conditionals',
    level: 'A2',
    title: 'Условные предложения: нулевой и первый тип',
    rule: `
      <ul>
        <li><b>Нулевой тип</b> — то, что верно всегда: <b>If</b> + Present Simple, Present Simple.<br>If you <b>heat</b> ice, it <b>melts</b>.</li>
        <li><b>Первый тип</b> — реальное условие в будущем: <b>If</b> + Present Simple, <b>will</b> + глагол.<br>If it <b>rains</b>, we <b>will stay</b> at home.</li>
      </ul>
      <p>Главное отличие от русского: после <b>if</b> будущее время не используется, хотя по смыслу речь о будущем.</p>
      <p class="rule-example">Если я его <u>увижу</u>, я ему скажу. — If I <b>see</b> him, I <b>will tell</b> him.</p>
    `,
    exercises: [
      { question: 'If it rains, we ___ stay at home.', answer: 'will', alsoCorrect: ["'ll"] },
      { question: 'If you heat ice, it ___. (melt)', answer: 'melts' },
      { question: 'I will call you if I ___ time. (have)', answer: 'have' },
      { question: 'If she ___ hard, she will pass the exam.', options: ['studies', 'will study', 'studied'] },
      { question: 'Выберите правильное предложение:', options: ['If I see him, I will tell him.', 'If I will see him, I tell him.', 'If I will see him, I will tell him.'] },
      { question: 'We will be late if we ___ hurry.', options: ["don't", "won't", "didn't"] }
    ]
  }
];
