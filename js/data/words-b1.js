// Словарь B1.
// Каждая строка: английское слово | перевод | пример.
// Строка, которая начинается с #, — название темы.
const WORDS_B1 = `
# Общество и политика
society|общество|Society is changing fast.
politics|политика|I am interested in politics.
politician|политик|The politician gives a speech.
government|правительство|The government is planning new laws.
state|государство; состояние|The state supports families.
election|выборы|The election is in autumn.
vote|голосовать; голос|You can vote at eighteen.
citizen|гражданин|The citizens protest against the plans.
mayor|мэр|The mayor opens the festival.
population|население|The population is growing.
inhabitant|житель|The town has 200,000 inhabitants.
democracy|демократия|We live in a democracy.
freedom|свобода|Freedom is very important.
justice|справедливость, правосудие|They fight for justice.
equality|равенство|Equality is not yet a reality everywhere.
law|закон; право|The law applies to everyone.
duty|обязанность, долг|It is my duty to help.
tax|налог|Taxes have gone up.
authority|власть, орган власти|The authority has checked the application.
permission|разрешение|You need permission for that.
visa|виза|I would like to apply for a visa.
nationality|гражданство, национальность|What is your nationality?
foreigner|иностранец|Many foreigners live in London.
immigration|иммиграция|Immigration is an important topic.
refugee|беженец|The city helps the refugees.
homeland|родина|I miss my homeland.
war|война|The war lasted four years.
peace|мир (без войны)|Everybody wants peace.
poverty|бедность|Poverty is increasing.
unemployment|безработица|Unemployment has fallen.
crime|преступление, преступность|Crime has gone down.
violence|насилие|Violence is not a solution.
thief|вор|The thief was caught.
steal|красть|Somebody has stolen my bike.
court|суд|The case goes to court.
witness|свидетель|The witness saw everything.
punishment|наказание|The punishment was fair.
fine|штраф|He has to pay a fine.
prison|тюрьма|He is in prison.
guilty|виновный|The man is guilty.
innocent|невиновный|She is innocent.
demonstration|демонстрация|Thousands came to the demonstration.
strike|забастовка|There are no trains because of the strike.
majority|большинство|The majority is in favour.
minority|меньшинство|Only a minority is against it.
community|сообщество, община|The local community helped us.
charity|благотворительность|She works for a charity.
volunteer|волонтёр|Volunteers clean the beach.
protest|протестовать; протест|People protest against the new law.

# Работа и карьера
business|бизнес, дело|He runs his own business.
employment|занятость|Full employment is the goal.
wage|заработная плата (почасовая)|The wage is paid weekly.
income|доход|The income is hardly enough.
pay rise|повышение зарплаты|I got a pay rise.
job interview|собеседование|I have a job interview tomorrow.
apply|подавать заявление|I am applying for the job.
applicant|соискатель|There are many applicants.
vacancy|вакансия|There is a vacancy in our team.
hire|нанимать|The company is hiring new people.
fire|увольнять|He was fired last week.
resign|уходить в отставку, увольняться|She resigned yesterday.
full-time|полный рабочий день|I work full-time.
part-time|неполный рабочий день|She works part-time.
shift|смена|I have the night shift this week.
pension|пенсия|My father will get a pension soon.
retire|выходить на пенсию|He will retire next year.
responsibility|ответственность|He has a lot of responsibility.
responsible|ответственный|Who is responsible for this?
ability|способность|She has many abilities.
achievement|достижение|That was a great achievement.
success|успех|I wish you success.
successful|успешный|The project was successful.
failure|неудача|You learn from failure.
challenge|вызов, трудная задача|The new job is a challenge.
deadline|крайний срок|The deadline is on Friday.
task|задача|This task is difficult.
project|проект|We are working on a new project.
conference|конференция|The conference is in Vienna.
negotiate|вести переговоры|We are negotiating the price.
competition|конкуренция; соревнование|The competition is strong.
cooperation|сотрудничество|Thank you for the good cooperation.
manage|руководить; справляться|She manages the department.
represent|представлять|I represent our company.
in charge|ответственный, главный|Who is in charge here?
industry|промышленность, отрасль|Which industry do you work in?
business trip|командировка|I am on a business trip.
public holiday|государственный праздник|The shops are closed on public holidays.
promotion|повышение по службе|She got a promotion.
staff|персонал|The staff is very friendly.
profession|профессия|Teaching is a difficult profession.
qualified|квалифицированный|She is well qualified.
skilled|умелый, квалифицированный|We need skilled workers.
workplace|рабочее место|My workplace is near my home.
client|клиент|The client is waiting.
supplier|поставщик|We changed our supplier.
schedule|расписание, график|My schedule is full.

# Образование и наука
education|образование|Education is the key to success.
science|наука|Science is making progress.
scientist|учёный|Scientists have studied this.
research|исследование|He works in research.
investigate|расследовать, исследовать|The police investigate the case.
result|результат|The result is surprising.
development|развитие|The development is fast.
develop|развивать, разрабатывать|We are developing a new app.
invention|изобретение|The wheel was an important invention.
invent|изобретать|Who invented the telephone?
discover|открывать, обнаруживать|Columbus discovered America.
experiment|эксперимент|The experiment was successful.
method|метод|This method is effective.
theory|теория|It is only a theory.
fact|факт|That is a fact.
proof|доказательство|There is no proof of that.
prove|доказывать|I can prove it.
lecture|лекция|The lecture is cancelled today.
term|семестр; термин|The term starts in October.
scholarship|стипендия|She got a scholarship.
presentation|презентация, доклад|I am giving a presentation tomorrow.
essay|эссе, сочинение|I have to write an essay.
summary|краткое изложение|Write a summary.
summarise|резюмировать|Can you summarise it briefly?
concept|понятие, концепция|I do not know this concept.
expression|выражение|That is a typical expression.
content|содержание|The content of the book is exciting.
paragraph|абзац|Read the first paragraph.
requirement|требование|Good English is a requirement.
talented|талантливый|The child is very talented.
concentrate|сосредоточиваться|I cannot concentrate.
revise|повторять (материал)|I am revising for the exam.
graduate|оканчивать вуз|She graduated last year.
by heart|наизусть|I learn the poem by heart.
attend|посещать|I attend an evening course.
improve|улучшать|I want to improve my English.
explain in detail|объяснять подробно|Could you explain it in detail?
source|источник|What is the source of this information?
solve|решать (задачу)|We solved the problem.
solution|решение|We are looking for a solution.

# Окружающая среда
environment|окружающая среда|We must protect the environment.
pollution|загрязнение|Pollution is increasing.
climate|климат|The climate is changing.
climate change|изменение климата|Climate change is a global problem.
energy|энергия|We must save energy.
solar power|солнечная энергия|Solar power is getting more important.
power station|электростанция|The power station will be closed.
waste|отходы; тратить впустую|We produce too much waste.
recycle|перерабатывать|We recycle paper and glass.
plastic|пластик|The bottle is made of plastic.
packaging|упаковка|Too much packaging harms the environment.
noise|шум|The noise disturbs me.
disaster|катастрофа|The earthquake was a disaster.
earthquake|землетрясение|The earthquake destroyed many houses.
flood|наводнение|The flood came after the rain.
drought|засуха|The drought destroys the harvest.
harvest|урожай|The harvest was good this year.
agriculture|сельское хозяйство|He works in agriculture.
area|область, территория|The area is protected.
region|регион|The region is very quiet.
valley|долина|The village is in a valley.
desert|пустыня|It rarely rains in the desert.
species|вид (биол.)|This species is in danger.
die out|вымирать|Many animal species are dying out.
protect|защищать|We must protect nature.
pollute|загрязнять|Cars pollute the air.
destroy|разрушать|The storm destroyed the roof.
consume|потреблять|The car consumes a lot of petrol.
environmentally friendly|экологичный|Cycling is environmentally friendly.
sustainable|устойчивый, экологичный|We want to live in a sustainable way.
renewable|возобновляемый|Renewable energy is the future.
resource|ресурс|Water is a valuable resource.
fuel|топливо|Fuel is getting expensive.
global warming|глобальное потепление|Global warming is a serious problem.
wildlife|дикая природа|We must protect wildlife.

# Медиа и технологии
media|СМИ|The media report on it daily.
press|пресса|The press was invited.
article|статья|I read an interesting article.
headline|заголовок|The headline is exaggerated.
report|отчёт, репортаж|The report is very detailed.
interview|интервью|The interview was exciting.
survey|опрос|According to a survey, many are against it.
publish|публиковать|The author publishes a new book.
audience|зрители, публика|The audience is clapping.
channel|канал|Which channel do you watch?
broadcast|трансляция; транслировать|The broadcast starts at eight.
technology|технология|New technologies change our work.
artificial intelligence|искусственный интеллект|Artificial intelligence is a big topic.
data|данные|The data is saved.
software|программное обеспечение|The software must be updated.
network|сеть|The network is down.
social media|социальные сети|Many people use social media.
user|пользователь|The app has a million users.
connection|соединение, связь|The connection is bad.
signal|сигнал|I have no signal here.
update|обновлять|I have to update the app.
delete|удалять|I deleted the file.
upload|загружать (в сеть)|I am uploading the photos.
attachment|вложение|The file is in the attachment.
forward|пересылать|I will forward the email.
progress|прогресс|Technical progress is enormous.
future|будущее|Nobody knows the future.
past|прошлое|That belongs to the past.
online|в сети|I do my shopping online.
website|сайт|The website is not working.
search|искать; поиск|I search for information online.
link|ссылка|Click on the link.
screen time|экранное время|Children have too much screen time.

# Здоровье и самочувствие
treatment|лечение|The treatment takes three weeks.
treat|лечить; обращаться|The doctor treats the patient.
operation|операция|The operation went well.
vaccination|прививка|The vaccination protects against the disease.
injection|укол|I am afraid of injections.
side effect|побочный эффект|The medicine has side effects.
allergy|аллергия|I have an allergy to nuts.
wound|рана|The wound is healing well.
heal|заживать, излечивать|The injury heals slowly.
recover|выздоравливать|I recover on holiday.
recovery|выздоровление|I wish you a quick recovery.
weight|вес|I want to keep my weight.
put on weight|набирать вес|I have put on two kilos.
addiction|зависимость|Smoking is an addiction.
drug|наркотик; лекарство|Drugs are dangerous.
specialist|специалист|You need to see a specialist.
care|уход, забота|The care of old people is important.
disability|инвалидность|People with a disability need support.
mental|психический|Stress can cause mental problems.
physical|физический|The work is physically hard.
exhausted|изнурённый|I am exhausted after work.
tiring|утомительный|The day was tiring.
dizzy|испытывающий головокружение|I feel dizzy.
disease|заболевание|It is a serious disease.
symptom|симптом|What are the symptoms?
surgery|хирургия, операция|He needs surgery.
breathe|дышать|Breathe deeply.
lifestyle|образ жизни|A healthy lifestyle is important.
habit|привычка|That is a bad habit.

# Чувства и отношения
relationship|отношения|We have a good relationship.
friendship|дружба|Friendship is important to me.
marriage|брак|Their marriage is happy.
divorce|развод|He moved after the divorce.
break up|расставаться|They have broken up.
fall in love|влюбляться|He fell in love with her.
wedding|свадьба|The wedding was beautiful.
partner|партнёр|My partner likes cooking.
relative|родственник|My relatives live in Poland.
upbringing|воспитание|A good upbringing is important.
bring up|воспитывать|She brings up her children alone.
trust|доверять; доверие|I trust you.
understanding|понимание|Thank you for your understanding.
respect|уважение; уважать|I have great respect for her.
patience|терпение|I have no more patience.
disappointment|разочарование|That was a big disappointment.
disappointed|разочарованный|I am disappointed in you.
jealous|ревнивый, завистливый|He is jealous of her colleague.
envy|зависть|Envy is a bad feeling.
anger|гнев|He was full of anger.
furious|разъярённый|She is furious with me.
worry|беспокойство; беспокоиться|Do not worry!
grief|горе, скорбь|The grief was great.
pity|жалость|I feel pity for him.
surprise|сюрприз|What a surprise!
atmosphere|атмосфера|The atmosphere was great.
desperate|отчаявшийся|She is completely desperate.
relieved|испытывающий облегчение|I am relieved.
grateful|благодарный|I am very grateful to you.
embarrassing|неловкий|That is embarrassing.
ashamed|пристыженный|I am ashamed of it.
get used to|привыкать|I got used to the weather.
rely on|полагаться|You can rely on him.
offend|обижать|I did not want to offend you.
forgive|прощать|Can you forgive me?
support|поддерживать; поддержка|My family supports me.
reliable|надёжный|He is a reliable colleague.
generous|щедрый|My aunt is very generous.
modest|скромный|She is clever and modest.
confident|уверенный в себе|She seems very confident.
ambitious|амбициозный|He is very ambitious.
tolerant|терпимый|We should be tolerant.
selfish|эгоистичный|That was selfish of you.
sensitive|чувствительный|He is very sensitive.
stubborn|упрямый|My brother is stubborn.
cheerful|жизнерадостный|She is always cheerful.

# Экономика и финансы
economy|экономика|The economy is growing slowly.
trade|торговля|Trade with China is increasing.
goods|товары|The goods will be delivered tomorrow.
product|продукт, изделие|The product is very popular.
produce|производить|The company produces furniture.
production|производство|Production is expensive.
consumer|потребитель|Consumers pay attention to the price.
demand|спрос; требовать|Demand has risen.
profit|прибыль|The company makes a profit.
loss|убыток, потеря|The company is making a loss.
costs|расходы, издержки|The costs are too high.
expenses|расходы|Our expenses are rising.
debt|долг|He has high debts.
loan|кредит, заём|We are taking out a loan.
interest|проценты; интерес|The interest is low.
fee|сбор, плата|The fee is ten pounds.
amount|сумма, количество|Please transfer the amount.
deposit|залог, депозит|The deposit is three months' rent.
currency|валюта|The pound is a stable currency.
inflation|инфляция|Inflation is rising.
crisis|кризис|The crisis affects many companies.
growth|рост|Growth is weak.
wealth|богатство|Wealth is unequally shared.
increase|повышать; рост|The company increases its prices.
reduce|снижать|The state reduces taxes.
decrease|уменьшаться|Prices are decreasing.
invest|инвестировать|We invest in new technology.
be worth|стоить того|It is worth waiting.
guarantee|гарантия|The device has a two-year guarantee.
complain|жаловаться|I want to complain.
complaint|жалоба|We received your complaint.
damage|ущерб; повреждать|The damage is great.
replace|заменять|The insurance replaces the phone.
budget|бюджет|Our budget is limited.
bargain|выгодная покупка|This coat was a bargain.

# Культура и традиции
culture|культура|I am interested in culture.
art|искусство|I like modern art.
artist|художник, артист|The artist shows his pictures.
painting|картина (живопись)|The painting is very valuable.
literature|литература|I love English literature.
writer|писатель|The writer reads from his novel.
poem|стихотворение|She writes poems.
fairy tale|сказка|Grandma tells a fairy tale.
history|история (наука)|The history of the city is interesting.
story|рассказ, история|He told a funny story.
century|век|The church is from the fifteenth century.
Middle Ages|Средневековье|The castle is from the Middle Ages.
monument|памятник|The monument is in the centre.
tradition|традиция|It is an old tradition.
custom|обычай|This custom is very old.
religion|религия|Religion is a private matter.
faith|вера|Her faith gives her strength.
Christmas|Рождество|The whole family comes at Christmas.
Easter|Пасха|Children look for eggs at Easter.
stage|сцена|The band is on stage.
actor|актёр|The actor is very famous.
role|роль|She plays the main role.
performance|представление, выступление|The performance lasts two hours.
director|режиссёр; директор|The director won a prize.
plot|сюжет|The plot is set in London.
prejudice|предрассудок|We all have prejudices.
impression|впечатление|I have a good impression of him.
impressive|впечатляющий|The view is impressive.
enthusiastic|восторженный|I am enthusiastic about the concert.
character|персонаж; характер|He is the main character.

# Абстрактные понятия
possibility|возможность|There are several possibilities.
opportunity|удобный случай, шанс|This is a good opportunity.
decision|решение (выбор)|It was a hard decision.
reason|причина|For what reason?
cause|причина, первопричина|The cause is unknown.
consequence|следствие, последствие|It had bad consequences.
purpose|цель, назначение|What is the purpose of this?
goal|цель|My goal is the B1 exam.
advantage|преимущество|It has many advantages.
disadvantage|недостаток|One disadvantage is the high price.
difference|различие|What is the difference?
comparison|сравнение|In comparison with the past, it is better.
condition|условие|I will come on one condition.
rule|правило|As a rule, I get up at seven.
exception|исключение|This is an exception.
ban|запрет|There is a smoking ban here.
danger|опасность|There is no danger.
risk|риск|The risk is too high.
safety|безопасность|Safety comes first.
effect|эффект, действие|The medicine has an effect.
influence|влияние; влиять|He has great influence.
importance|важность|The importance of education is growing.
expectation|ожидание|It meets my expectations.
intention|намерение|It was not my intention.
dream|мечта, сон|My dream is a trip around the world.
truth|правда|Tell me the truth!
doubt|сомнение; сомневаться|I have no doubt about it.
misunderstanding|недоразумение|It was a misunderstanding.
difficulty|трудность|I have difficulty with grammar.
situation|ситуация|The situation is serious.
coincidence|совпадение|It was pure coincidence.
fate|судьба|It was fate.
behaviour|поведение|His behaviour is strange.
feature|черта, особенность|Patience is a good feature.
crowd|толпа|A big crowd is waiting.
part|часть|That is only part of the truth.
average|среднее значение|On average I work forty hours.
per cent|процент|Ten per cent of the students are absent.
aim|цель; стремиться|The aim of the course is clear.

# Глаголы
accept|принимать|I accept your offer.
assume|предполагать|I assume that he is coming.
attract|привлекать|The city attracts many tourists.
avoid|избегать|I avoid stress.
give up|сдаваться; бросать|Do not give up!
express|выражать|I cannot express it.
consider|рассматривать, считать|We must consider that.
affect|влиять|The weather affects my mood.
claim|утверждать|He claims to know nothing.
realise|осознавать|I did not realise the mistake.
make an effort|стараться|I make an effort to be on time.
observe|наблюдать|The police observe the house.
advise|советовать|I advise you to wait.
confirm|подтверждать|Please confirm the appointment.
determine|определять|Who determines that?
concern|касаться; беспокоить|That concerns all of us.
prefer|предпочитать|I prefer tea.
carry out|проводить, выполнять|We are carrying out a survey.
estimate|оценивать (примерно)|How do you estimate the costs?
correspond|соответствовать|That does not correspond to the truth.
arise|возникать|High costs arise from this.
find out|узнавать, выяснять|I found it out yesterday.
fulfil|исполнять|He fulfils all the requirements.
receive|получать|You will receive an answer soon.
recognise|узнавать, распознавать|I did not recognise you.
enquire|осведомляться|I enquire about the price.
expect|ожидать|I am expecting a call.
mention|упоминать|He did not mention that.
encourage|поощрять, ободрять|The school encourages talented children.
succeed|преуспевать, удаваться|I succeeded in the end.
be valid|быть действительным|The ticket is valid for one day.
occur|происходить|What occurred?
found|основывать|He founded a company.
act|действовать|We must act now.
prevent|предотвращать|We were able to prevent the accident.
point out|указывать|I would like to point that out.
clarify|прояснять|We still have to clarify that.
suffer|страдать|He suffers from an allergy.
inform|сообщать|Please inform us of your address.
plan|планировать|We are planning a trip.
react|реагировать|How did he react?
appreciate|ценить|I appreciate your help.
take place|состояться|The concert takes place tomorrow.
disturb|мешать, беспокоить|Am I disturbing you?
convince|убеждать|You have convinced me.
distinguish|различать|I cannot distinguish the twins.
connect|соединять|Can you connect me with Mr Miller?
compare|сравнивать|Compare the prices.
require|требовать|What do you require for it?
suppose|полагать|I suppose he is ill.
postpone|переносить, откладывать|Can we postpone the appointment?
insure|страховать|The car is well insured.
do without|обходиться без|I do without meat.
intend|намереваться|What do you intend to do at the weekend?
perceive|воспринимать|I perceive it differently.
contradict|противоречить|I have to contradict you there.
seem|казаться|He seems tired.
admit|признавать|I admit that I was wrong.
achieve|достигать|She achieved her goal.
involve|включать в себя, вовлекать|The job involves a lot of travel.
provide|предоставлять|The hotel provides breakfast.
include|включать|The price includes breakfast.
contain|содержать|The box contains books.
remind|напоминать|Remind me to call her.
deserve|заслуживать|You deserve a break.
depend|зависеть|It depends on the weather.

# Прилагательные
dependent|зависимый|That is dependent on the weather.
independent|независимый|She is financially independent.
pleasant|приятный|It was a pleasant evening.
unpleasant|неприятный|That is unpleasant for me.
attentive|внимательный|The students listen attentively.
detailed|подробный|Thank you for the detailed answer.
sufficient|достаточный|That is not sufficient.
extraordinary|необычайный|It is an extraordinary achievement.
significant|значительный|He is a significant artist.
urgent|срочный|I need urgent help.
obvious|очевидный|The answer is obvious.
decisive|решающий|That is the decisive point.
eternal|вечный|They promised each other eternal friendship.
fair|справедливый|That is not fair.
legal|законный, юридический|Is that legal?
ordinary|обычный|It was an ordinary day.
thorough|тщательный|He works very thoroughly.
frequent|частый|That is a frequent mistake.
complicated|сложный|The situation is complicated.
artificial|искусственный|The flowers are artificial.
odd|странный|That is really odd.
personal|личный|That is my personal opinion.
reasonable|разумный|That is a reasonable idea.
constant|постоянный|He is constantly late.
common|общепринятый, распространённый|That is common here.
various|различный|There are various opinions.
sensible|благоразумный|Be sensible!
careful|осторожный|Be careful!
valuable|ценный|It is a valuable ring.
essential|существенный, необходимый|That is an essential difference.
numerous|многочисленный|There were numerous problems.
additional|дополнительный|That costs an additional five pounds.
available|доступный|The book is available online.
suitable|подходящий|This film is suitable for children.
aware|осведомлённый|I am aware of the problem.
familiar|знакомый|The name sounds familiar.
complete|полный, завершённый|The list is complete.
recent|недавний|This is a recent photo.
previous|предыдущий|I had a previous appointment.
current|текущий|What is the current situation?

# Наречия и связки
in order to|для того чтобы|I study a lot in order to pass the exam.
in case|в случае если|Take an umbrella in case it rains.
as soon as|как только|I will come as soon as I am ready.
as long as|пока; при условии что|We stay here as long as it rains.
nevertheless|тем не менее|It was expensive; nevertheless, I bought it.
though|хотя; однако|It was hard. I enjoyed it, though.
therefore|поэтому|I was ill, therefore I could not come.
instead|вместо этого|I will drink tea instead.
on the other hand|с другой стороны|On the other hand, it is very expensive.
on the one hand|с одной стороны|On the one hand, I would like to travel.
meanwhile|тем временем|Meanwhile it has got dark.
so far|до сих пор|So far everything has gone well.
in those days|в те времена|In those days there was no internet.
recently|недавно|I met him recently.
occasionally|время от времени|We meet occasionally.
regularly|регулярно|I do sport regularly.
at the same time|одновременно|I cannot do everything at the same time.
actually|на самом деле|Actually, I wanted to stay at home.
apparently|по-видимому|Apparently he forgot.
definitely|определённо|You definitely have to see this!
at least|как минимум|It takes at least an hour.
at most|самое большее|It costs ten pounds at most.
partly|частично|That is only partly true.
completely|полностью|That is completely right.
altogether|в целом, всего|Altogether it was a good day.
above all|прежде всего|Above all I need rest.
for example|например|I like fruit, for example apples.
on the contrary|наоборот|On the contrary, I think it is good.
in any case|в любом случае|I will come in any case.
in my opinion|по моему мнению|In my opinion, that is wrong.
because of|из-за|We stay at home because of the rain.
despite|несмотря на|We go out despite the rain.
within|в пределах, в течение|You will get an answer within a week.
according to|согласно|According to the forecast, it will rain.
due to|вследствие|The train is cancelled due to the strike.
`;
