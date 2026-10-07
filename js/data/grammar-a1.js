// Грамматика A1: правила и упражнения.
// В упражнении есть либо options — варианты ответа (первый всегда правильный, на экране они перемешиваются),
// либо answer — слово, которое нужно вписать вместо ___.
const GRAMMAR_A1 = [
  {
    id: 'a1-to-be',
    level: 'A1',
    title: 'Глагол to be',
    rule: `
      <p><b>to be</b> (быть) — главный глагол английского языка. В настоящем времени у него три формы, и в отличие от русского его нельзя пропускать.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>утверждение</th><th>отрицание</th><th>вопрос</th></tr>
          <tr><td>I</td><td>I <b>am</b></td><td>I am not</td><td>Am I?</td></tr>
          <tr><td>he / she / it</td><td>he <b>is</b></td><td>he is not (isn't)</td><td>Is he?</td></tr>
          <tr><td>we / you / they</td><td>we <b>are</b></td><td>we are not (aren't)</td><td>Are we?</td></tr>
        </table>
      </div>
      <p class="rule-example">I <b>am</b> a student. — Я студент.<br>
        She <b>is</b> at home. — Она дома.<br>
        <b>Are</b> you tired? — Ты устал?</p>
    `,
    exercises: [
      { question: 'I ___ a student.', options: ['am', 'is', 'are'] },
      { question: 'She ___ my sister. (to be)', answer: 'is' },
      { question: 'They ___ from Spain.', options: ['are', 'is', 'am'] },
      { question: '___ you tired? (to be)', answer: 'are' },
      { question: 'He ___ not at home.', options: ['is', 'are', 'am'] },
      { question: 'We ___ friends. (to be)', answer: 'are' }
    ]
  },
  {
    id: 'a1-present-simple',
    level: 'A1',
    title: 'Present Simple: настоящее простое время',
    rule: `
      <p>Present Simple описывает привычки, регулярные действия и факты: <i>every day, usually, often, never</i>.</p>
      <ul>
        <li>После <b>he / she / it</b> к глаголу добавляется <b>-s</b>: I work → he work<b>s</b>. После -s, -sh, -ch, -x, -o добавляется <b>-es</b>: watch → watch<b>es</b>, go → go<b>es</b>.</li>
        <li>Отрицание: <b>don't</b> / <b>doesn't</b> + глагол без -s: I <b>don't</b> work. She <b>doesn't</b> work.</li>
        <li>Вопрос: <b>Do</b> / <b>Does</b> + подлежащее + глагол без -s: <b>Does</b> she work?</li>
      </ul>
      <p class="rule-example">She <b>lives</b> in London. — Она живёт в Лондоне.<br>
        <b>Do</b> you speak English? — Ты говоришь по-английски?</p>
    `,
    exercises: [
      { question: 'She ___ in London. (live)', answer: 'lives' },
      { question: 'I ___ coffee every morning.', options: ['drink', 'drinks', 'drinking'] },
      { question: '___ he speak English?', options: ['Does', 'Do', 'Is'] },
      { question: 'We ___ not work on Sundays. (do / does)', answer: 'do' },
      { question: 'He ___ TV in the evening. (watch)', answer: 'watches' },
      { question: 'My parents ___ like fish.', options: ["don't", "doesn't", "aren't"] }
    ]
  },
  {
    id: 'a1-articles',
    level: 'A1',
    title: 'Артикли a, an, the',
    rule: `
      <p>В русском языке артиклей нет, а в английском существительное в единственном числе почти всегда стоит с артиклем.</p>
      <ul>
        <li><b>a</b> / <b>an</b> — «один из», предмет упоминается впервые. <b>a</b> ставится перед согласным звуком, <b>an</b> — перед гласным: <b>a</b> book, <b>an</b> apple, <b>an</b> hour.</li>
        <li><b>the</b> — конкретный, уже известный предмет или единственный в своём роде: <b>the</b> sun, <b>the</b> book on the table.</li>
        <li>С профессиями используется <b>a / an</b>: She is <b>a</b> doctor.</li>
      </ul>
      <p class="rule-example">I have <b>a</b> dog. <b>The</b> dog is black. — У меня есть собака. Эта собака чёрная.</p>
    `,
    exercises: [
      { question: 'It is ___ apple.', options: ['an', 'a', 'the'] },
      { question: 'I have a dog. ___ dog is black.', options: ['The', 'A', 'An'] },
      { question: 'She is ___ teacher. (a / an)', answer: 'a' },
      { question: '___ sun is very hot today.', options: ['The', 'A', 'An'] },
      { question: 'He works for ___ hour every day. (a / an)', answer: 'an' },
      { question: 'It is ___ umbrella. (a / an)', answer: 'an' }
    ]
  },
  {
    id: 'a1-plurals',
    level: 'A1',
    title: 'Множественное число существительных',
    rule: `
      <ul>
        <li>Обычно добавляется <b>-s</b>: book → book<b>s</b>, car → car<b>s</b>.</li>
        <li>После -s, -sh, -ch, -x добавляется <b>-es</b>: box → box<b>es</b>, bus → bus<b>es</b>.</li>
        <li>Согласная + y → <b>-ies</b>: city → cit<b>ies</b>. Но: day → days.</li>
        <li>-f / -fe → <b>-ves</b>: knife → kni<b>ves</b>, leaf → lea<b>ves</b>.</li>
      </ul>
      <p>Некоторые слова образуют множественное число не по правилам:</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>man</th><th>woman</th><th>child</th><th>person</th><th>foot</th><th>tooth</th></tr>
          <tr><td>men</td><td>women</td><td>children</td><td>people</td><td>feet</td><td>teeth</td></tr>
        </table>
      </div>
    `,
    exercises: [
      { question: 'There are two ___ in the room. (box)', answer: 'boxes' },
      { question: 'They have three ___. (child)', answer: 'children' },
      { question: 'London and Paris are big ___. (city)', answer: 'cities' },
      { question: 'Two ___ are waiting outside.', options: ['men', 'mans', 'mens'] },
      { question: 'I brush my ___ twice a day. (tooth)', answer: 'teeth' },
      { question: 'There are five ___ on the table.', options: ['knives', 'knifes', 'knife'] }
    ]
  },
  {
    id: 'a1-there-is',
    level: 'A1',
    title: 'There is / there are',
    rule: `
      <p>Конструкция <b>there is / there are</b> сообщает, что где-то что-то есть. На русский обычно переводится с конца: <i>There is a book on the table</i> — «На столе лежит книга».</p>
      <ul>
        <li><b>There is</b> + единственное число: There is <b>a</b> park near my house.</li>
        <li><b>There are</b> + множественное число: There are <b>two</b> parks.</li>
        <li>Отрицание: There <b>isn't</b> a bank. There <b>aren't</b> any shops.</li>
        <li>Вопрос: <b>Is there</b> a bank near here? <b>Are there</b> any shops?</li>
      </ul>
    `,
    exercises: [
      { question: '___ a book on the table.', options: ['There is', 'There are', 'It is'] },
      { question: '___ two cats in the garden.', options: ['There are', 'There is', 'They are'] },
      { question: 'Is ___ a bank near here?', answer: 'there' },
      { question: 'There ___ not any milk in the fridge. (to be)', answer: 'is' },
      { question: '___ there any students in the room?', options: ['Are', 'Is', 'Do'] },
      { question: 'There ___ three chairs in the kitchen. (to be)', answer: 'are' }
    ]
  },
  {
    id: 'a1-possessives',
    level: 'A1',
    title: 'Притяжательные местоимения и ’s',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>I</th><th>you</th><th>he</th><th>she</th><th>it</th><th>we</th><th>they</th></tr>
          <tr><td>my</td><td>your</td><td>his</td><td>her</td><td>its</td><td>our</td><td>their</td></tr>
        </table>
      </div>
      <p>Эти слова не изменяются по родам и числам: <b>my</b> brother, <b>my</b> sister, <b>my</b> parents. Русское «свой» переводится местоимением того же лица: She loves <b>her</b> dog.</p>
      <p>Принадлежность человеку показывает <b>’s</b>: my brother<b>’s</b> car — машина моего брата, Anna<b>’s</b> book — книга Анны.</p>
    `,
    exercises: [
      { question: 'This is ___ book. (I)', answer: 'my' },
      { question: 'Anna loves ___ dog.', options: ['her', 'his', 'their'] },
      { question: 'We are in ___ car. (we)', answer: 'our' },
      { question: 'It is my ___ bike.', options: ["brother's", 'brothers', 'brother'] },
      { question: 'Tom and Lisa are with ___ children.', options: ['their', 'his', 'they'] },
      { question: 'Is this ___ phone? (you)', answer: 'your' }
    ]
  },
  {
    id: 'a1-can',
    level: 'A1',
    title: 'Модальный глагол can',
    rule: `
      <p><b>can</b> означает «мочь, уметь». У него одна форма для всех лиц, после него стоит глагол <b>без to</b> и без окончаний.</p>
      <ul>
        <li>Утверждение: She <b>can swim</b>. — Она умеет плавать.</li>
        <li>Отрицание: I <b>can't</b> (cannot) drive. — Я не умею водить.</li>
        <li>Вопрос: <b>Can</b> you help me? — Ты можешь мне помочь?</li>
      </ul>
      <p>Вспомогательный глагол do с can не используется: <s>Do you can?</s></p>
    `,
    exercises: [
      { question: 'She ___ speak three languages.', options: ['can', 'cans', 'can to'] },
      { question: 'He can ___ the guitar. (play)', answer: 'play' },
      { question: '___ you help me, please? (can)', answer: 'can' },
      { question: 'We ___ come today, we are busy.', options: ["can't", "don't can", 'not can'] },
      { question: 'Выберите правильное предложение:', options: ['Can you drive a car?', 'Do you can drive a car?', 'Can you to drive a car?'] },
      { question: "My sister can't ___. (cook)", answer: 'cook' }
    ]
  },
  {
    id: 'a1-present-continuous',
    level: 'A1',
    title: 'Present Continuous: действие прямо сейчас',
    rule: `
      <p>Present Continuous описывает то, что происходит в момент речи: <i>now, at the moment, look!</i></p>
      <p>Формула: <b>am / is / are</b> + глагол с окончанием <b>-ing</b>.</p>
      <ul>
        <li>I <b>am reading</b> a book. — Я читаю книгу (сейчас).</li>
        <li>She <b>is not working</b> today. — Она сегодня не работает.</li>
        <li>What <b>are</b> you <b>doing</b>? — Что ты делаешь?</li>
      </ul>
      <p>Правописание: make → mak<b>ing</b>, run → run<b>ning</b>, sit → sit<b>ting</b>.</p>
      <p class="rule-example">Сравните: I <b>read</b> every day (вообще, регулярно) — I <b>am reading</b> now (прямо сейчас).</p>
    `,
    exercises: [
      { question: 'I am ___ a book now. (read)', answer: 'reading' },
      { question: 'She ___ cooking dinner at the moment.', options: ['is', 'are', 'does'] },
      { question: 'They are ___ football. (play)', answer: 'playing' },
      { question: 'What ___ you doing?', options: ['are', 'do', 'is'] },
      { question: 'He is not ___ now. (work)', answer: 'working' },
      { question: 'Look! It ___ raining. (to be)', answer: 'is' }
    ]
  },
  {
    id: 'a1-prepositions',
    level: 'A1',
    title: 'Предлоги in, on, at',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>время</th><th>место</th></tr>
          <tr><td><b>at</b></td><td>точное время: at 5 o'clock, at night</td><td>точка: at home, at school, at the door</td></tr>
          <tr><td><b>on</b></td><td>дни и даты: on Monday, on 5 May</td><td>на поверхности: on the table, on the wall</td></tr>
          <tr><td><b>in</b></td><td>месяцы, годы, части дня: in May, in 2020, in the morning</td><td>внутри: in the room, in London</td></tr>
        </table>
      </div>
      <p>Перед словами <i>next, last, this, every</i> предлог не нужен: <b>next</b> week, <b>every</b> day.</p>
    `,
    exercises: [
      { question: "The lesson starts ___ nine o'clock.", options: ['at', 'on', 'in'] },
      { question: 'My birthday is ___ May.', options: ['in', 'on', 'at'] },
      { question: 'We meet ___ Monday. (in / on / at)', answer: 'on' },
      { question: 'The keys are ___ the table.', options: ['on', 'in', 'at'] },
      { question: 'She lives ___ London. (in / on / at)', answer: 'in' },
      { question: 'I get up early ___ the morning.', options: ['in', 'at', 'on'] }
    ]
  },
  {
    id: 'a1-past-simple',
    level: 'A1',
    title: 'Past Simple: was / were и правильные глаголы',
    rule: `
      <p>Past Simple описывает законченные действия в прошлом: <i>yesterday, last week, in 2019, two days ago</i>.</p>
      <ul>
        <li>Глагол to be: I / he / she / it <b>was</b>, we / you / they <b>were</b>.</li>
        <li>Правильные глаголы получают окончание <b>-ed</b> для всех лиц: work → work<b>ed</b>, live → live<b>d</b>, study → stud<b>ied</b>.</li>
        <li>Отрицание: <b>didn't</b> + глагол без -ed: I <b>didn't work</b>. С to be: I <b>wasn't</b> there.</li>
        <li>Вопрос: <b>Did</b> you <b>work</b>? С to be: <b>Were</b> you there?</li>
      </ul>
    `,
    exercises: [
      { question: 'I ___ at home yesterday. (to be)', answer: 'was' },
      { question: 'They ___ happy.', options: ['were', 'was', 'did'] },
      { question: 'She ___ TV last night. (watch)', answer: 'watched' },
      { question: 'We ___ not play football yesterday.', options: ['did', 'was', 'were'] },
      { question: 'He ___ in Paris in 2019. (live)', answer: 'lived' },
      { question: '___ you at school yesterday?', options: ['Were', 'Was', 'Did'] }
    ]
  },
  {
    id: 'a1-imperative',
    level: 'A1',
    title: 'Повелительное наклонение и местоимения me, him, her',
    rule: `
      <p>Просьба или указание — это глагол в начальной форме без подлежащего. Отрицание образуется с <b>don't</b>.</p>
      <p class="rule-example"><b>Open</b> the window, please. — Открой окно, пожалуйста.<br>
        <b>Don't be</b> late! — Не опаздывай!<br>
        <b>Let's go</b> to the cinema. — Давай пойдём в кино.</p>
      <p>После глагола и после предлога местоимение стоит в объектной форме:</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>I</th><th>you</th><th>he</th><th>she</th><th>it</th><th>we</th><th>they</th></tr>
          <tr><td>me</td><td>you</td><td>him</td><td>her</td><td>it</td><td>us</td><td>them</td></tr>
        </table>
      </div>
      <p class="rule-example">Call <b>me</b> tomorrow. I know <b>him</b>. Come with <b>us</b>.</p>
    `,
    exercises: [
      { question: '___ the door, please. (close)', answer: 'Close' },
      { question: '___ be late!', options: ["Don't", 'Not', "Doesn't"] },
      { question: 'Give ___ the book, please. (I)', answer: 'me' },
      { question: 'Do you know Peter? — Yes, I know ___.', answer: 'him' },
      { question: 'Come with ___! (we)', options: ['us', 'we', 'our'] },
      { question: "___ go to the park.", options: ["Let's", 'Let', 'Lets we'] }
    ]
  },
  {
    id: 'a1-demonstratives',
    level: 'A1',
    title: 'This, that, these, those',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>рядом</th><th>далеко</th></tr>
          <tr><td>один предмет</td><td><b>this</b> book</td><td><b>that</b> book</td></tr>
          <tr><td>несколько</td><td><b>these</b> books</td><td><b>those</b> books</td></tr>
        </table>
      </div>
      <p>Эти слова могут стоять и без существительного: <b>This</b> is my sister. Who is <b>that</b>?</p>
      <p class="rule-example"><b>These</b> shoes are too small. Can I try <b>those</b> over there?</p>
    `,
    exercises: [
      { question: '___ is my book. (рядом, один предмет)', answer: 'This' },
      { question: '___ are my friends. (рядом, несколько)', answer: 'These' },
      { question: 'Look at ___ bird over there!', options: ['that', 'this', 'these'] },
      { question: '___ shoes over there are nice.', options: ['Those', 'That', 'This'] },
      { question: 'Is ___ your pen here?', options: ['this', 'these', 'those'] },
      { question: 'I like ___ flowers in my hand.', options: ['these', 'this', 'that'] }
    ]
  },
  {
    id: 'a1-frequency-adverbs',
    level: 'A1',
    title: 'Наречия частоты и их место в предложении',
    rule: `
      <p>Слова <b>always</b> (всегда), <b>usually</b> (обычно), <b>often</b> (часто), <b>sometimes</b> (иногда), <b>never</b> (никогда) показывают, как часто что-то происходит.</p>
      <ul>
        <li>Перед обычным глаголом: I <b>always get up</b> at seven. She <b>never drinks</b> coffee.</li>
        <li>После глагола to be: He <b>is often</b> late. They <b>are never</b> at home.</li>
        <li>С never второе отрицание не нужно: I <b>never</b> eat meat (не <s>I don't never</s>).</li>
      </ul>
    `,
    exercises: [
      { question: 'Выберите правильное предложение:', options: ['I always get up at seven.', 'I get always up at seven.', 'Always get I up at seven.'] },
      { question: 'Выберите правильное предложение:', options: ['She is never late.', 'She never is late.', 'She is late never.'] },
      { question: 'He ___ plays football on Sundays. (обычно)', answer: 'usually' },
      { question: 'I ___ drink coffee. I do not like it. (никогда)', answer: 'never' },
      { question: 'We ___ go to the cinema. (иногда)', answer: 'sometimes' },
      { question: 'They are ___ at home in the evening. (часто)', answer: 'often' }
    ]
  }
];
