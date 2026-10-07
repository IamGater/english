// Грамматика B2: правила и упражнения.
// В упражнении есть либо options — варианты ответа (первый всегда правильный, на экране они перемешиваются),
// либо answer — слово, которое нужно вписать вместо ___.
const GRAMMAR_B2 = [
  {
    id: 'b2-third-conditional',
    level: 'B2',
    title: 'Условные предложения третьего и смешанного типа',
    rule: `
      <p>Третий тип говорит о прошлом, которое уже нельзя изменить: «если бы тогда…, то…».</p>
      <p>Формула: <b>If</b> + Past Perfect, <b>would have</b> + третья форма глагола.</p>
      <p class="rule-example">If I <b>had known</b>, I <b>would have come</b>. — Если бы я знал, я бы пришёл.<br>
        If she <b>had studied</b> harder, she <b>would have passed</b>. — Если бы она занималась усерднее, она бы сдала.</p>
      <p><b>Смешанный тип</b>: условие в прошлом, а следствие — сейчас. If I <b>had taken</b> that job, I <b>would be</b> living in Paris now.</p>
      <p>После if не ставится would: <s>If I would have known</s>.</p>
    `,
    exercises: [
      { question: 'If I had known, I would ___ come.', answer: 'have' },
      { question: 'If she ___ studied harder, she would have passed.', answer: 'had' },
      { question: 'We would have won if we ___ better.', options: ['had played', 'played', 'would play'] },
      { question: "If I hadn't missed the bus, I ___ have been late.", answer: "wouldn't", alsoCorrect: ['would not'] },
      { question: 'Выберите правильное предложение:', options: ['If you had told me, I would have helped you.', 'If you would have told me, I had helped you.', 'If you told me, I would have help you.'] },
      { question: 'If I had taken that job, I ___ be living in Paris now.', answer: 'would' }
    ]
  },
  {
    id: 'b2-narrative-tenses',
    level: 'B2',
    title: 'Past Perfect и Past Perfect Continuous',
    rule: `
      <p>В рассказе о прошлом эти времена показывают, что одно событие произошло раньше другого.</p>
      <ul>
        <li><b>Past Perfect</b> (had + третья форма) — действие завершилось до другого момента в прошлом: When we arrived, the film <b>had</b> already <b>started</b>.</li>
        <li><b>Past Perfect Continuous</b> (had been + -ing) — действие длилось до этого момента: She was tired because she <b>had been working</b> all day.</li>
      </ul>
      <p>Частые сигналы: <i>by the time, already, after, before, when</i>.</p>
      <p class="rule-example">By the time he called, we <b>had finished</b> dinner. — К тому времени, как он позвонил, мы уже поужинали.</p>
    `,
    exercises: [
      { question: 'When we arrived, the film ___ already started.', answer: 'had' },
      { question: 'She was tired because she had been ___ all day. (work)', answer: 'working' },
      { question: 'I realised that I ___ my keys at home.', options: ['had left', 'have left', 'was leaving'] },
      { question: 'By the time he called, we ___ dinner.', options: ['had finished', 'have finished', 'finish'] },
      { question: 'They had ___ waiting for an hour when the bus came.', answer: 'been' },
      { question: 'After she had ___ the letter, she posted it. (write)', answer: 'written' }
    ]
  },
  {
    id: 'b2-modals-deduction',
    level: 'B2',
    title: 'Модальные глаголы: предположения и упрёки',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>уверенность</th><th>о настоящем</th><th>о прошлом</th></tr>
          <tr><td>почти уверен, что да</td><td>He <b>must</b> be asleep.</td><td>He <b>must have</b> forgotten.</td></tr>
          <tr><td>возможно</td><td>He <b>might / could</b> be at work.</td><td>They <b>might have</b> missed the train.</td></tr>
          <tr><td>почти уверен, что нет</td><td>It <b>can't</b> be true.</td><td>She <b>can't have</b> forgotten.</td></tr>
        </table>
      </div>
      <p>О прошлом: модальный глагол + <b>have</b> + третья форма.</p>
      <p><b>should have</b> + третья форма — упрёк или сожаление: You <b>should have told</b> me earlier. — Тебе следовало сказать мне раньше.</p>
    `,
    exercises: [
      { question: "He isn't answering the phone. He ___ be asleep.", options: ['must', "can't", 'should'] },
      { question: 'She ___ have forgotten about the meeting — she never forgets anything.', options: ["can't", 'must', 'should'] },
      { question: 'They might ___ missed the train.', answer: 'have' },
      { question: 'The lights are off. They must have ___ out. (go)', answer: 'gone' },
      { question: "I'm not sure, but he ___ be at work.", options: ['might', 'must', "can't"] },
      { question: "You ___ have told me earlier! Now it's too late.", options: ['should', 'must', 'might not'] }
    ]
  },
  {
    id: 'b2-passive-advanced',
    level: 'B2',
    title: 'Пассив: have something done, is said to',
    rule: `
      <ul>
        <li><b>have + предмет + третья форма</b> — действие для нас выполняет кто-то другой: I <b>had my hair cut</b>. — Я подстригся (в парикмахерской). We <b>are having our house painted</b>.</li>
        <li><b>It is said / believed / thought that…</b> — «говорят, считается, что…»: It <b>is believed</b> that the company will close.</li>
        <li><b>He is said to + глагол</b> — то же самое с подлежащим: He <b>is said to be</b> very rich. О прошлом: He <b>is thought to have left</b> the country.</li>
      </ul>
      <p>Такие конструкции типичны для новостей и официальных текстов.</p>
    `,
    exercises: [
      { question: 'I had my hair ___ yesterday. (cut)', answer: 'cut' },
      { question: 'He is said ___ be very rich.', answer: 'to' },
      { question: 'We are having our house ___. (paint)', answer: 'painted' },
      { question: 'She ___ her car repaired last week.', options: ['had', 'was', 'did'] },
      { question: 'It is ___ that the company will close.', options: ['believed', 'believing', 'believe'] },
      { question: 'The suspect is thought to ___ left the country.', answer: 'have' }
    ]
  },
  {
    id: 'b2-wishes',
    level: 'B2',
    title: 'I wish и if only',
    rule: `
      <p><b>I wish</b> и более эмоциональное <b>if only</b> выражают сожаление о том, что есть или было.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>о чём сожаление</th><th>форма</th><th>пример</th></tr>
          <tr><td>о настоящем</td><td>Past Simple</td><td>I wish I <b>had</b> more free time.</td></tr>
          <tr><td>о прошлом</td><td>Past Perfect</td><td>I wish I <b>had studied</b> harder.</td></tr>
          <tr><td>раздражение, хочется перемен</td><td>would + глагол</td><td>I wish it <b>would stop</b> raining.</td></tr>
        </table>
      </div>
      <p>Глагол to be после wish обычно имеет форму <b>were</b>: I wish you <b>were</b> here. С can используется <b>could</b>: I wish I <b>could</b> fly.</p>
    `,
    exercises: [
      { question: 'I wish I ___ more free time. (have)', answer: 'had' },
      { question: 'I wish I ___ studied harder at school.', answer: 'had' },
      { question: 'If only it ___ stop raining!', answer: 'would' },
      { question: 'She wishes she ___ speak French.', options: ['could', 'can', 'will'] },
      { question: 'I wish you ___ here with us now.', options: ['were', 'are', 'would be'] },
      { question: "If only I hadn't ___ that! (say)", answer: 'said' }
    ]
  },
  {
    id: 'b2-future-forms',
    level: 'B2',
    title: 'Future Continuous и Future Perfect',
    rule: `
      <ul>
        <li><b>Future Continuous</b> (will be + -ing) — действие будет в процессе в определённый момент будущего: This time tomorrow I <b>will be lying</b> on the beach.</li>
        <li><b>Future Perfect</b> (will have + третья форма) — действие завершится к определённому моменту: By next year she <b>will have finished</b> her degree.</li>
      </ul>
      <p>Сигналы Future Perfect: <i>by Friday, by 2030, by the time…</i> После <b>by the time</b> используется настоящее время: By the time you <b>arrive</b>, I will have cooked dinner.</p>
    `,
    exercises: [
      { question: 'This time tomorrow I will be ___ on the beach. (lie)', answer: 'lying' },
      { question: 'By next year she will have ___ her degree. (finish)', answer: 'finished' },
      { question: 'By 2030 they ___ built the new bridge.', options: ['will have', 'will be', 'are going'] },
      { question: "Don't call at eight — we will ___ having dinner.", answer: 'be' },
      { question: 'At 10 am tomorrow he ___ working.', options: ['will be', 'will have', 'is being'] },
      { question: 'By the time you arrive, I will ___ cooked dinner.', answer: 'have' }
    ]
  },
  {
    id: 'b2-linking-words',
    level: 'B2',
    title: 'Связки: although, despite, however, whereas, unless',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>слово</th><th>что после него</th><th>пример</th></tr>
          <tr><td><b>although</b> (хотя)</td><td>предложение</td><td>Although it was raining, we went out.</td></tr>
          <tr><td><b>despite / in spite of</b> (несмотря на)</td><td>существительное или -ing</td><td>Despite the rain, we went out.</td></tr>
          <tr><td><b>however</b> (однако)</td><td>новое предложение, запятая</td><td>He is rich. However, he is not happy.</td></tr>
          <tr><td><b>whereas</b> (тогда как)</td><td>противопоставление</td><td>She likes tea, whereas he prefers coffee.</td></tr>
          <tr><td><b>unless</b> (если не)</td><td>предложение без not</td><td>I won't go unless you come with me.</td></tr>
        </table>
      </div>
    `,
    exercises: [
      { question: '___ it was raining, we went out.', options: ['Although', 'Despite', 'However'] },
      { question: '___ the rain, we went out.', options: ['Despite', 'Although', 'However'] },
      { question: 'He is rich. ___, he is not happy.', options: ['However', 'Although', 'Despite'] },
      { question: 'In spite ___ being tired, she kept working.', answer: 'of' },
      { question: "I won't go ___ you come with me.", options: ['unless', 'if not', 'despite'] },
      { question: 'She likes tea, ___ her husband prefers coffee.', options: ['whereas', 'despite', 'unless'] }
    ]
  },
  {
    id: 'b2-reporting-verbs',
    level: 'B2',
    title: 'Глаголы передачи речи и косвенные вопросы',
    rule: `
      <p>Вместо say и tell часто используют более точные глаголы. У каждого своя конструкция:</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>конструкция</th><th>глаголы</th><th>пример</th></tr>
          <tr><td>+ -ing</td><td>suggest, deny, admit</td><td>He suggested <b>going</b> to the cinema.</td></tr>
          <tr><td>+ to</td><td>refuse, promise, offer, agree</td><td>They refused <b>to help</b> us.</td></tr>
          <tr><td>+ кого-то + to</td><td>advise, ask, warn, remind</td><td>She advised me <b>to see</b> a doctor.</td></tr>
          <tr><td>+ предлог + -ing</td><td>apologise for, accuse of, insist on</td><td>She apologised <b>for being</b> late.</td></tr>
        </table>
      </div>
      <p>В косвенном вопросе порядок слов как в утверждении, без do / did: He asked me where I <b>lived</b>.</p>
    `,
    exercises: [
      { question: 'He suggested ___ to the cinema. (go)', answer: 'going' },
      { question: 'She advised me ___ a doctor. (see)', answer: 'to see' },
      { question: 'He denied ___ the money.', options: ['taking', 'to take', 'take'] },
      { question: 'She apologised ___ being late.', answer: 'for' },
      { question: 'He asked me where I ___.', options: ['lived', 'did live', 'do I live'] },
      { question: 'They refused ___ us.', options: ['to help', 'helping', 'help'] }
    ]
  },
  {
    id: 'b2-inversion-emphasis',
    level: 'B2',
    title: 'Инверсия и выделение',
    rule: `
      <p>Чтобы усилить высказывание, в письменной и формальной речи меняют порядок слов.</p>
      <ul>
        <li>После отрицательных слов в начале предложения порядок слов как в вопросе: <b>Never have I</b> seen such a film. <b>Not only did he</b> come, he also helped. <b>Hardly had we</b> arrived when it started to rain.</li>
        <li>Условие без if: <b>Had I known</b>, I would have come. <b>Should you need</b> help, call me.</li>
        <li>Выделение с <b>what</b>: <b>What I need is</b> a holiday.</li>
        <li>Выделение с <b>it is … that</b>: <b>It was Tom who</b> called.</li>
        <li>Усилительное <b>do</b>: I <b>do</b> like it!</li>
      </ul>
    `,
    exercises: [
      { question: 'Never ___ I seen such a beautiful place.', answer: 'have' },
      { question: 'Not only ___ he arrive late, he also forgot the documents.', answer: 'did' },
      { question: '___ I known about it, I would have told you.', options: ['Had', 'If', 'Would'] },
      { question: 'What I need ___ a long holiday.', answer: 'is' },
      { question: 'It was Tom ___ called you yesterday.', options: ['who', 'what', 'which'] },
      { question: 'Выберите правильное предложение:', options: ['Hardly had we arrived when it started to rain.', 'Hardly we had arrived when it started to rain.', 'Hardly had we arrived than it started to rain.'] }
    ]
  },
  {
    id: 'b2-participle-clauses',
    level: 'B2',
    title: 'Причастные обороты',
    rule: `
      <p>Причастный оборот заменяет придаточное предложение и делает текст короче. Подлежащее у оборота и главной части должно быть одним и тем же.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>форма</th><th>значение</th><th>пример</th></tr>
          <tr><td><b>-ing</b></td><td>активное действие в то же время или причина</td><td><b>Feeling</b> tired, I went to bed.</td></tr>
          <tr><td><b>having + третья форма</b></td><td>действие, которое произошло раньше</td><td><b>Having finished</b> the report, she went home.</td></tr>
          <tr><td><b>третья форма</b></td><td>пассивное значение</td><td><b>Built</b> in 1900, the house needs repairs.</td></tr>
        </table>
      </div>
      <p>Такой же оборот может стоять после существительного: The man <b>standing</b> at the door is my uncle. The book <b>written</b> by Orwell is a classic.</p>
    `,
    exercises: [
      { question: '___ finished the report, she went home.', options: ['Having', 'Had', 'Being'] },
      { question: '___ in 1900, the house needs repairs. (build)', answer: 'Built' },
      { question: '___ tired, I went to bed early. (feel)', answer: 'Feeling' },
      { question: 'The man ___ at the door is my uncle.', options: ['standing', 'stood', 'stands'] },
      { question: 'The book ___ by Orwell is a classic.', options: ['written', 'writing', 'wrote'] },
      { question: 'Not ___ what to do, I called my sister. (know)', answer: 'knowing' }
    ]
  },
  {
    id: 'b2-causative-verbs',
    level: 'B2',
    title: 'Make, let, get, have: побудить кого-то к действию',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>конструкция</th><th>значение</th><th>пример</th></tr>
          <tr><td><b>make</b> + кого + глагол</td><td>заставить</td><td>My parents made me clean my room.</td></tr>
          <tr><td><b>let</b> + кого + глагол</td><td>позволить</td><td>She let him use her car.</td></tr>
          <tr><td><b>have</b> + кого + глагол</td><td>поручить</td><td>The teacher had the students write an essay.</td></tr>
          <tr><td><b>get</b> + кого + <b>to</b> + глагол</td><td>уговорить</td><td>I got him to help me.</td></tr>
        </table>
      </div>
      <p>После make, let и have глагол стоит <b>без to</b>, после get — <b>с to</b>. В пассиве у make появляется to: He <b>was made to wait</b>.</p>
    `,
    exercises: [
      { question: 'My parents made me ___ my room. (clean)', answer: 'clean' },
      { question: 'She let him ___ her car. (use)', answer: 'use' },
      { question: 'I got him ___ me. (help)', answer: 'to help' },
      { question: 'He was made ___ for an hour.', options: ['to wait', 'wait', 'waiting'] },
      { question: 'The teacher had the students ___ an essay.', options: ['write', 'to write', 'writing'] },
      { question: 'Do not let them ___ you.', options: ['stop', 'to stop', 'stopping'] }
    ]
  }
];
