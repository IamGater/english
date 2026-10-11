// Неправильные глаголы.
// Каждая строка: инфинитив | Past Simple | Past Participle | перевод.
// Если форм две, они пишутся через косую черту: learnt/learned.
const IRREGULAR_VERBS_TEXT = `
be|was/were|been|быть
become|became|become|становиться
begin|began|begun|начинать
bend|bent|bent|гнуть, сгибать
bite|bit|bitten|кусать
blow|blew|blown|дуть
break|broke|broken|ломать
bring|brought|brought|приносить
build|built|built|строить
burn|burnt/burned|burnt/burned|гореть, жечь
buy|bought|bought|покупать
catch|caught|caught|ловить
choose|chose|chosen|выбирать
come|came|come|приходить
cost|cost|cost|стоить
cut|cut|cut|резать
dig|dug|dug|копать
do|did|done|делать
draw|drew|drawn|рисовать
dream|dreamt/dreamed|dreamt/dreamed|мечтать, видеть сны
drink|drank|drunk|пить
drive|drove|driven|водить машину
eat|ate|eaten|есть, кушать
fall|fell|fallen|падать
feed|fed|fed|кормить
feel|felt|felt|чувствовать
fight|fought|fought|драться, бороться
find|found|found|находить
fly|flew|flown|летать
forget|forgot|forgotten|забывать
forgive|forgave|forgiven|прощать
freeze|froze|frozen|замерзать
get|got|got|получать, становиться
give|gave|given|давать
go|went|gone|идти, ехать
grow|grew|grown|расти, выращивать
hang|hung|hung|вешать
have|had|had|иметь
hear|heard|heard|слышать
hide|hid|hidden|прятать
hit|hit|hit|ударять
hold|held|held|держать
hurt|hurt|hurt|причинять боль
keep|kept|kept|хранить, держать
know|knew|known|знать
lay|laid|laid|класть
lead|led|led|вести
learn|learnt/learned|learnt/learned|учить, узнавать
leave|left|left|покидать, оставлять
lend|lent|lent|одолжить (кому-то)
let|let|let|позволять
lie|lay|lain|лежать
lose|lost|lost|терять, проигрывать
make|made|made|делать, создавать
mean|meant|meant|означать
meet|met|met|встречать
pay|paid|paid|платить
put|put|put|класть
read|read|read|читать
ride|rode|ridden|ездить верхом
ring|rang|rung|звонить
rise|rose|risen|подниматься
run|ran|run|бегать
say|said|said|говорить, сказать
see|saw|seen|видеть
sell|sold|sold|продавать
send|sent|sent|отправлять
set|set|set|ставить, устанавливать
shake|shook|shaken|трясти
shine|shone|shone|светить, сиять
shoot|shot|shot|стрелять
show|showed|shown|показывать
shut|shut|shut|закрывать
sing|sang|sung|петь
sink|sank|sunk|тонуть
sit|sat|sat|сидеть
sleep|slept|slept|спать
smell|smelt/smelled|smelt/smelled|пахнуть, нюхать
speak|spoke|spoken|говорить
spend|spent|spent|тратить, проводить (время)
spread|spread|spread|распространять
stand|stood|stood|стоять
steal|stole|stolen|красть
swim|swam|swum|плавать
take|took|taken|брать
teach|taught|taught|преподавать, учить
tear|tore|torn|рвать
tell|told|told|рассказывать
think|thought|thought|думать
throw|threw|thrown|бросать
understand|understood|understood|понимать
wake|woke|woken|просыпаться, будить
wear|wore|worn|носить (одежду)
win|won|won|выигрывать
write|wrote|written|писать
arise|arose|arisen|возникать
awake|awoke|awoken|просыпаться, будить
bear|bore|borne|нести, выносить
beat|beat|beaten|бить, побеждать
behold|beheld|beheld|созерцать
bet|bet|bet|держать пари
bid|bid|bid|предлагать цену
bind|bound|bound|связывать
bleed|bled|bled|кровоточить
breed|bred|bred|разводить, воспитывать
broadcast|broadcast|broadcast|транслировать
burst|burst|burst|взрываться, лопаться
cast|cast|cast|бросать, отливать
cling|clung|clung|цепляться
creep|crept|crept|ползти, красться
deal|dealt|dealt|иметь дело, раздавать
dive|dived/dove|dived|нырять
dwell|dwelt|dwelt|обитать
fit|fit/fitted|fit/fitted|подходить по размеру
flee|fled|fled|убегать, спасаться
fling|flung|flung|швырять
forbid|forbade|forbidden|запрещать
forecast|forecast|forecast|прогнозировать
foresee|foresaw|foreseen|предвидеть
grind|ground|ground|молоть, точить
kneel|knelt|knelt|стоять на коленях
knit|knit/knitted|knit/knitted|вязать
lean|leant/leaned|leant/leaned|наклоняться, опираться
leap|leapt/leaped|leapt/leaped|прыгать
light|lit|lit|зажигать
mislead|misled|misled|вводить в заблуждение
mistake|mistook|mistaken|ошибаться, путать
outdo|outdid|outdone|превосходить
overcome|overcame|overcome|преодолевать
overeat|overate|overeaten|переедать
oversleep|overslept|overslept|проспать
overtake|overtook|overtaken|обгонять
prove|proved|proved/proven|доказывать
quit|quit|quit|бросать, уходить
rebuild|rebuilt|rebuilt|перестраивать
redo|redid|redone|переделывать
repay|repaid|repaid|возвращать долг
rethink|rethought|rethought|переосмыслить
rewrite|rewrote|rewritten|переписывать
rid|rid|rid|избавлять
saw|sawed|sawn/sawed|пилить
seek|sought|sought|искать, стремиться
sew|sewed|sewn/sewed|шить
shed|shed|shed|проливать, сбрасывать
shrink|shrank|shrunk|сжиматься, садиться
slay|slew|slain|убивать
slide|slid|slid|скользить
sling|slung|slung|метать, закидывать
slit|slit|slit|разрезать
sow|sowed|sown/sowed|сеять
speed|sped|sped|мчаться
spell|spelt/spelled|spelt/spelled|произносить по буквам
spill|spilt/spilled|spilt/spilled|проливать
spin|spun|spun|вращать, прясть
spit|spat|spat|плевать
split|split|split|раскалывать
spoil|spoilt/spoiled|spoilt/spoiled|портить, баловать
spring|sprang|sprung|прыгать, возникать
stick|stuck|stuck|приклеивать, застревать
sting|stung|stung|жалить
stink|stank|stunk|вонять
stride|strode|stridden|шагать
strike|struck|struck|ударять, поражать
string|strung|strung|нанизывать
strive|strove|striven|стараться, стремиться
swear|swore|sworn|клясться, ругаться
sweep|swept|swept|подметать
swell|swelled|swollen/swelled|опухать, раздуваться
swing|swung|swung|качаться, размахивать
thrust|thrust|thrust|толкать, вонзать
tread|trod|trodden|ступать
undergo|underwent|undergone|переносить, подвергаться
undertake|undertook|undertaken|предпринимать
undo|undid|undone|отменять, расстёгивать
unwind|unwound|unwound|разматывать, расслабляться
uphold|upheld|upheld|поддерживать
upset|upset|upset|расстраивать
weave|wove|woven|ткать, плести
wed|wed/wedded|wed/wedded|жениться, выходить замуж
weep|wept|wept|плакать
wet|wet/wetted|wet/wetted|мочить
wind|wound|wound|заводить, наматывать
withdraw|withdrew|withdrawn|снимать (деньги), отзывать
withhold|withheld|withheld|удерживать, скрывать
withstand|withstood|withstood|выдерживать
wring|wrung|wrung|выжимать
`;

const IRREGULAR_VERBS = IRREGULAR_VERBS_TEXT.trim().split('\n').map(function (line) {
  const parts = line.split('|');
  return { base: parts[0], past: parts[1], participle: parts[2], russian: parts[3] };
}).sort(function (first, second) {
  return first.base.localeCompare(second.base);
});
