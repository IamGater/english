// Грамматика B1: правила и упражнения.
// В упражнении есть либо options — варианты ответа (первый всегда правильный, на экране они перемешиваются),
// либо answer — слово, которое нужно вписать вместо ___.
const GRAMMAR_B1 = [
  {
    id: 'b1-perfect-vs-past',
    level: 'B1',
    title: 'Present Perfect или Past Simple',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>Present Perfect</th><th>Past Simple</th></tr>
          <tr><td>период ещё не закончился или время не названо</td><td>законченный момент в прошлом</td></tr>
          <tr><td>for, since, already, yet, just, ever, never</td><td>yesterday, last year, in 2015, two days ago</td></tr>
          <tr><td>I <b>have lived</b> here since 2015.</td><td>I <b>lived</b> there in 2015.</td></tr>
        </table>
      </div>
      <ul>
        <li><b>for</b> + отрезок времени: for ten years. <b>since</b> + момент начала: since January.</li>
        <li><b>already</b> — в утверждениях, <b>yet</b> — в вопросах и отрицаниях (в конце): Have you finished <b>yet</b>?</li>
      </ul>
    `,
    exercises: [
      { question: 'I ___ here since 2015. (live)', answer: 'have lived', alsoCorrect: ["'ve lived", 'have been living'] },
      { question: 'She ___ to Paris last year. (go)', answer: 'went' },
      { question: 'We have known each other ___ ten years.', answer: 'for' },
      { question: 'Have you finished your homework ___?', options: ['yet', 'ago', 'since'] },
      { question: 'I ___ him yesterday.', options: ['saw', 'have seen', 'seen'] },
      { question: 'He has worked here ___ January.', answer: 'since' }
    ]
  },
  {
    id: 'b1-perfect-continuous',
    level: 'B1',
    title: 'Present Perfect Continuous',
    rule: `
      <p>Это время подчёркивает длительность действия, которое началось в прошлом и продолжается до сих пор (или только что закончилось и оставило след).</p>
      <p>Формула: <b>have / has been</b> + глагол с <b>-ing</b>.</p>
      <p class="rule-example">I <b>have been waiting</b> for two hours. — Я жду уже два часа.<br>
        How long <b>have</b> you <b>been learning</b> English? — Как давно ты учишь английский?<br>
        They are tired because they <b>have been working</b> all day.</p>
      <p>С глаголами состояния (know, like, want, be) используется обычный Present Perfect: I <b>have known</b> him for years.</p>
    `,
    exercises: [
      { question: 'I have been ___ for two hours. (wait)', answer: 'waiting' },
      { question: 'She has ___ learning English since 2020.', answer: 'been' },
      { question: 'How long ___ you been living here?', answer: 'have' },
      { question: 'It ___ raining all day.', options: ['has been', 'is been', 'was been'] },
      { question: 'They are tired because they have been ___ all day. (work)', answer: 'working' },
      { question: 'He ___ been feeling well lately.', options: ["hasn't", "haven't", "isn't"] }
    ]
  },
  {
    id: 'b1-second-conditional',
    level: 'B1',
    title: 'Условные предложения второго типа',
    rule: `
      <p>Второй тип описывает нереальную или маловероятную ситуацию в настоящем и будущем — русское «если бы».</p>
      <p>Формула: <b>If</b> + Past Simple, <b>would</b> + глагол.</p>
      <p class="rule-example">If I <b>had</b> more time, I <b>would learn</b> Spanish. — Если бы у меня было больше времени, я бы выучил испанский.<br>
        If I <b>were</b> you, I <b>would see</b> a doctor. — На твоём месте я бы сходил к врачу.</p>
      <ul>
        <li>Глагол to be в условии обычно имеет форму <b>were</b> для всех лиц.</li>
        <li>После if не ставится would: <s>If I would have</s>.</li>
      </ul>
    `,
    exercises: [
      { question: 'If I ___ rich, I would travel the world. (to be)', answer: 'were', alsoCorrect: ['was'] },
      { question: 'If she had more time, she ___ learn Spanish.', answer: 'would' },
      { question: 'What would you do if you ___ the lottery? (win)', answer: 'won' },
      { question: 'If I ___ you, I would see a doctor.', options: ['were', 'am', 'would be'] },
      { question: 'We would buy a house if we ___ enough money.', options: ['had', 'have', 'would have'] },
      { question: 'I ___ help you if I could.', answer: 'would' }
    ]
  },
  {
    id: 'b1-passive',
    level: 'B1',
    title: 'Страдательный залог (Passive)',
    rule: `
      <p>Пассив используют, когда важно само действие, а не тот, кто его совершил. Формула: <b>to be</b> в нужном времени + третья форма глагола.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>время</th><th>пример</th></tr>
          <tr><td>Present Simple</td><td>English <b>is spoken</b> here.</td></tr>
          <tr><td>Past Simple</td><td>The house <b>was built</b> in 1900.</td></tr>
          <tr><td>Present Continuous</td><td>The car <b>is being repaired</b>.</td></tr>
          <tr><td>Present Perfect</td><td>The work <b>has been done</b>.</td></tr>
          <tr><td>с модальным глаголом</td><td>The work <b>must be finished</b> today.</td></tr>
        </table>
      </div>
      <p>Исполнитель действия вводится предлогом <b>by</b>: The book was written <b>by</b> a young author.</p>
    `,
    exercises: [
      { question: 'English ___ spoken all over the world.', answer: 'is' },
      { question: 'This house was ___ in 1900. (build)', answer: 'built' },
      { question: 'The letters ___ sent yesterday.', options: ['were', 'was', 'are'] },
      { question: 'The car is being ___ at the moment. (repair)', answer: 'repaired' },
      { question: 'The book was written ___ a young author.', answer: 'by' },
      { question: 'The work must ___ finished today.', options: ['be', 'been', 'being'] }
    ]
  },
  {
    id: 'b1-relative-clauses',
    level: 'B1',
    title: 'Придаточные с who, which, that, where, whose',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>слово</th><th>о чём</th><th>пример</th></tr>
          <tr><td><b>who</b> / that</td><td>люди</td><td>The man <b>who</b> lives next door is a doctor.</td></tr>
          <tr><td><b>which</b> / that</td><td>предметы, животные</td><td>The film <b>which</b> we saw was great.</td></tr>
          <tr><td><b>where</b></td><td>место</td><td>That is the town <b>where</b> I was born.</td></tr>
          <tr><td><b>whose</b></td><td>принадлежность</td><td>She is the girl <b>whose</b> brother is a singer.</td></tr>
        </table>
      </div>
      <p>Если относительное слово не является подлежащим придаточного, его можно опустить: The film (which) we saw was great.</p>
    `,
    exercises: [
      { question: 'The man ___ lives next door is a doctor.', options: ['who', 'which', 'whose'] },
      { question: 'This is the book ___ I told you about.', options: ['that', 'who', 'where'] },
      { question: 'That is the town ___ I was born.', answer: 'where' },
      { question: 'She is the girl ___ brother is a singer.', answer: 'whose' },
      { question: 'The film ___ we saw yesterday was great.', options: ['which', 'who', 'whose'] },
      { question: 'Do you know the people ___ live here?', answer: 'who', alsoCorrect: ['that'] }
    ]
  },
  {
    id: 'b1-reported-speech',
    level: 'B1',
    title: 'Косвенная речь',
    rule: `
      <p>Когда мы передаём чужие слова после <b>said / told</b>, время сдвигается на шаг в прошлое.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>прямая речь</th><th>косвенная речь</th></tr>
          <tr><td>"I <b>am</b> tired."</td><td>He said he <b>was</b> tired.</td></tr>
          <tr><td>"I <b>live</b> in Rome."</td><td>He said he <b>lived</b> in Rome.</td></tr>
          <tr><td>"I <b>have finished</b>."</td><td>He said he <b>had finished</b>.</td></tr>
          <tr><td>"I <b>will</b> call you."</td><td>She said she <b>would</b> call me.</td></tr>
          <tr><td>"I <b>can</b> swim."</td><td>She said she <b>could</b> swim.</td></tr>
        </table>
      </div>
      <p><b>say</b> используется без указания собеседника, <b>tell</b> — с ним: He <b>said</b> (that)… / He <b>told me</b> (that)…</p>
    `,
    exercises: [
      { question: '"I am tired." → He said he ___ tired.', answer: 'was' },
      { question: '"I will call you." → She said she ___ call me.', answer: 'would' },
      { question: '"I live in Rome." → He said he ___ in Rome.', answer: 'lived' },
      { question: 'She ___ me that she was busy.', options: ['told', 'said', 'spoke'] },
      { question: '"I have finished." → He said he ___ finished.', answer: 'had' },
      { question: '"I can swim." → She said she ___ swim.', answer: 'could' }
    ]
  },
  {
    id: 'b1-used-to',
    level: 'B1',
    title: 'Used to: прошлые привычки',
    rule: `
      <p><b>used to</b> + глагол описывает то, что регулярно происходило или было правдой раньше, но теперь уже нет.</p>
      <ul>
        <li>I <b>used to play</b> football when I was a child. — В детстве я играл в футбол (сейчас не играю).</li>
        <li>Отрицание: She <b>didn't use to</b> like vegetables.</li>
        <li>Вопрос: <b>Did</b> you <b>use to</b> have long hair?</li>
      </ul>
      <p>В отрицании и вопросе пишется <b>use</b> без -d, потому что прошедшее время уже выражено словом did.</p>
      <p class="rule-example">There <b>used to be</b> a cinema here. — Раньше здесь был кинотеатр.</p>
    `,
    exercises: [
      { question: 'I ___ to play football when I was a child.', answer: 'used' },
      { question: "She didn't ___ to like vegetables.", answer: 'use' },
      { question: 'We used to ___ in a small village. (live)', answer: 'live' },
      { question: 'Did you ___ to have long hair?', options: ['use', 'used', 'using'] },
      { question: 'He ___ smoke, but he stopped last year.', options: ['used to', 'use to', 'was used'] },
      { question: 'There ___ to be a cinema here.', answer: 'used' }
    ]
  },
  {
    id: 'b1-gerund-infinitive',
    level: 'B1',
    title: 'Герундий или инфинитив',
    rule: `
      <p>После одних глаголов следующий глагол получает окончание <b>-ing</b>, после других — частицу <b>to</b>.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>+ -ing</th><th>+ to</th></tr>
          <tr><td>enjoy, finish, avoid, mind, keep, suggest</td><td>want, decide, hope, plan, promise, learn</td></tr>
          <tr><td>I enjoy <b>reading</b>.</td><td>I want <b>to read</b>.</td></tr>
        </table>
      </div>
      <ul>
        <li>После предлогов всегда <b>-ing</b>: She is good at <b>cooking</b>. Thank you for <b>coming</b>.</li>
        <li>После like, love, hate, start возможны оба варианта почти без разницы в смысле.</li>
      </ul>
    `,
    exercises: [
      { question: 'I enjoy ___ books. (read)', answer: 'reading' },
      { question: 'She decided ___ a new job. (find)', answer: 'to find' },
      { question: 'He is good at ___. (cook)', answer: 'cooking' },
      { question: 'We want ___ to the cinema.', options: ['to go', 'going', 'go'] },
      { question: 'They finished ___ the house at six.', options: ['cleaning', 'to clean', 'clean'] },
      { question: 'I hope ___ you soon. (see)', answer: 'to see' }
    ]
  },
  {
    id: 'b1-modals-ability',
    level: 'B1',
    title: 'Could, be able to, may, might',
    rule: `
      <ul>
        <li><b>could</b> — умел или мог в прошлом вообще: I <b>could</b> swim when I was five.</li>
        <li><b>was / were able to</b> — смог в конкретной ситуации: The door was locked, but I <b>was able to</b> open it.</li>
        <li>У can нет будущего времени и перфекта, поэтому используется <b>be able to</b>: I <b>will be able to</b> come. I <b>haven't been able to</b> sleep.</li>
        <li><b>may</b> и <b>might</b> — «возможно»: It <b>may</b> rain. She <b>might</b> be at home. Might выражает чуть меньшую уверенность.</li>
        <li><b>May I…?</b> — вежливая просьба о разрешении: <b>May</b> I come in?</li>
      </ul>
    `,
    exercises: [
      { question: 'I ___ swim when I was five.', options: ['could', 'can', 'may'] },
      { question: 'I will be ___ to help you tomorrow.', answer: 'able' },
      { question: 'Take an umbrella. It ___ rain later.', options: ['might', 'can', 'is able to'] },
      { question: '___ I come in?', options: ['May', 'Am I able', 'Might to'] },
      { question: "I haven't been able ___ sleep.", answer: 'to' },
      { question: 'The exam was hard, but she was ___ to pass.', answer: 'able' }
    ]
  },
  {
    id: 'b1-question-tags',
    level: 'B1',
    title: 'Разделительные вопросы (question tags)',
    rule: `
      <p>Короткий вопрос в конце предложения соответствует русскому «не так ли?». Он строится из вспомогательного глагола и местоимения.</p>
      <ul>
        <li>Утверждение → отрицательный хвостик: You are tired, <b>aren't you</b>?</li>
        <li>Отрицание → положительный хвостик: She doesn't smoke, <b>does she</b>?</li>
        <li>Глагол берётся тот же, что в основной части. Если вспомогательного глагола нет, используется <b>do / does / did</b>: He lives here, <b>doesn't he</b>? They came, <b>didn't they</b>?</li>
        <li>Особые случаи: I am right, <b>aren't I</b>? Let's go, <b>shall we</b>?</li>
      </ul>
    `,
    exercises: [
      { question: "You are tired, ___ you?", answer: "aren't" },
      { question: "She doesn't smoke, ___ she?", answer: 'does' },
      { question: 'He lives here, ___?', options: ["doesn't he", "isn't he", "don't he"] },
      { question: 'They came yesterday, ___?', options: ["didn't they", "weren't they", "don't they"] },
      { question: "You can swim, ___ you?", answer: "can't" },
      { question: "Let's go, ___?", options: ['shall we', "don't we", 'will you'] }
    ]
  },
  {
    id: 'b1-articles-advanced',
    level: 'B1',
    title: 'Артикли: когда the не нужен',
    rule: `
      <ul>
        <li><b>Без артикля</b> — когда говорим о чём-то вообще: <b>Life</b> is beautiful. I like <b>music</b>. <b>Dogs</b> are friendly.</li>
        <li><b>Без артикля</b> — приёмы пищи, языки, виды транспорта с by, большинство стран и городов: have <b>breakfast</b>, speak <b>English</b>, go <b>by bus</b>, in <b>France</b>.</li>
        <li><b>the</b> — единственное в своём роде, превосходная степень, музыкальные инструменты, реки, моря и океаны: <b>the</b> sun, <b>the</b> best film, play <b>the</b> piano, <b>the</b> Thames.</li>
        <li><b>a / an</b> — профессии: She is <b>an</b> engineer.</li>
      </ul>
    `,
    exercises: [
      { question: 'Выберите правильное предложение:', options: ['Life is beautiful.', 'The life is beautiful.', 'A life is beautiful.'] },
      { question: 'She plays ___ piano.', answer: 'the' },
      { question: 'Выберите правильное предложение:', options: ['We had breakfast at eight.', 'We had the breakfast at eight.', 'We had a breakfast at eight.'] },
      { question: 'It is ___ best film I have ever seen.', answer: 'the' },
      { question: 'Выберите правильное предложение:', options: ['He goes to work by bus.', 'He goes to work by the bus.', 'He goes to work by a bus.'] },
      { question: 'My sister is ___ engineer.', answer: 'an' }
    ]
  },
  {
    id: 'b1-phrasal-verbs-order',
    level: 'B1',
    title: 'Фразовые глаголы: порядок слов',
    rule: `
      <p>Фразовый глагол состоит из глагола и частицы (up, off, on, out…), которая меняет его значение: give → give <b>up</b> (бросить).</p>
      <ul>
        <li><b>Разделяемые</b>: существительное можно поставить и после частицы, и между глаголом и частицей — turn <b>off</b> the light / turn the light <b>off</b>.</li>
        <li>Местоимение у разделяемых глаголов стоит <b>только в середине</b>: turn <b>it</b> off (не <s>turn off it</s>).</li>
        <li><b>Неразделяемые</b>: дополнение всегда после частицы — look <b>after</b> the baby, look <b>for</b> the keys.</li>
      </ul>
    `,
    exercises: [
      { question: 'Выберите правильное предложение:', options: ['Turn it off, please.', 'Turn off it, please.', 'Turn it of, please.'] },
      { question: 'Выберите правильное предложение:', options: ['I am looking for my keys.', 'I am looking my keys for.', 'I am looking for to my keys.'] },
      { question: 'Please take ___ your shoes.', answer: 'off' },
      { question: 'Can you pick me ___ at six?', answer: 'up' },
      { question: 'Выберите правильное предложение:', options: ['She looks after her little brother.', 'She looks her little brother after.', 'She looks after of her little brother.'] },
      { question: 'I gave ___ smoking last year.', answer: 'up' }
    ]
  }
];
