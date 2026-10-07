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
authority|власть, орган власти|The local authority has checked the application.
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
staff|персонал|The staff are very friendly.
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
recover|выздоравливать|He is recovering after the operation.
recovery|выздоровление|I wish you a quick recovery.
weight|вес|I have to watch my weight.
put on weight|набирать вес|I have put on two kilos.
addiction|зависимость|Smoking is an addiction.
drug|наркотик; лекарство|Drugs are dangerous.
specialist|специалист|You need to see a specialist.
care|уход, забота|The care of old people is important.
disability|инвалидность|People with a disability need support.
mental|психический|Stress can cause mental problems.
physical|физический|Physical work is tiring.
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
interest|проценты; интерес|The bank pays little interest.
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
replace|заменять|We need to replace the old printer.
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
feature|черта, особенность|The phone has many new features.
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
observe|наблюдать|Scientists observe the animals.
advise|советовать|I advise you to wait.
confirm|подтверждать|Please confirm the appointment.
determine|определять|Who determines that?
concern|касаться; беспокоить|That concerns all of us.
prefer|предпочитать|I prefer tea.
carry out|проводить, выполнять|We are carrying out a survey.
estimate|оценивать (примерно)|We estimate the costs at a thousand pounds.
correspond|соответствовать|That does not correspond to the truth.
arise|возникать|High costs arise from this.
find out|узнавать, выяснять|I found out the truth yesterday.
fulfil|исполнять|He fulfils all the requirements.
receive|получать|You will receive an answer soon.
recognise|узнавать, распознавать|I did not recognise you.
enquire|осведомляться|I would like to enquire about the price.
expect|ожидать|I am expecting a call.
mention|упоминать|He did not mention that.
encourage|поощрять, ободрять|The school encourages talented children.
succeed|преуспевать, удаваться|I succeeded in the end.
be valid|быть действительным|The ticket is valid for one day.
occur|происходить|The accident occurred at night.
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
distinguish|различать|I cannot distinguish between the twins.
connect|соединять|Can you connect me with Mr Miller?
compare|сравнивать|Compare the prices.
require|требовать|The job requires experience.
suppose|полагать|I suppose he is ill.
postpone|переносить, откладывать|Can we postpone the appointment?
insure|страховать|The car is well insured.
do without|обходиться без|I can do without meat.
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
attentive|внимательный|The students are very attentive.
detailed|подробный|Thank you for the detailed answer.
sufficient|достаточный|That is not sufficient.
extraordinary|необычайный|It is an extraordinary achievement.
significant|значительный|There is a significant difference.
urgent|срочный|I need urgent help.
obvious|очевидный|The answer is obvious.
decisive|решающий|That is the decisive point.
eternal|вечный|They promised each other eternal friendship.
fair|справедливый|That is not fair.
legal|законный, юридический|Is that legal?
ordinary|обычный|It was an ordinary day.
thorough|тщательный|He is very thorough in his work.
frequent|частый|That is a frequent mistake.
complicated|сложный|The situation is complicated.
artificial|искусственный|The flowers are artificial.
odd|странный|That is really odd.
personal|личный|That is my personal opinion.
reasonable|разумный|That is a reasonable idea.
constant|постоянный|The constant noise annoys me.
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
therefore|поэтому|I was ill and therefore could not come.
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

# Жильё и ремонт
property|недвижимость, собственность|The property is for sale.
flatmate|сосед по квартире|My flatmate likes cooking.
caretaker|смотритель дома|The caretaker repairs the light.
renovation|ремонт (помещения)|The renovation takes a month.
renovate|ремонтировать (помещение)|We are renovating the bathroom.
dustbin|мусорный бак|The dustbin is in the yard.
yard|двор|The children play in the yard.
neighbourhood|район, соседи|The neighbourhood is very friendly.
tap|кран|The tap is dripping.
bath|ванна|I like lying in the bath.
sink|раковина|The sink is blocked.
air conditioning|кондиционер|The air conditioning is too cold.
fence|забор|The fence is freshly painted.
terrace|терраса|We have breakfast on the terrace.
square metre|квадратный метр|The flat is eighty square metres.
furnished|меблированный|The room is furnished.
light bulb|лампочка|The light bulb is broken.
switch|выключатель|The switch is next to the door.
doorbell|дверной звонок|The doorbell does not work.
fireplace|камин|We sit in front of the fireplace.
mattress|матрас|The mattress is too soft.
chest of drawers|комод|The socks are in the chest of drawers.
drawer|выдвижной ящик|The key is in the drawer.
bucket|ведро|The bucket is full of water.
broom|метла|The broom is in the corner.
cloth|тряпка, ткань|I wipe the table with a cloth.
washing powder|стиральный порошок|We need washing powder.
hook|крючок|The jacket is on the hook.
nail|гвоздь; ноготь|I hammer a nail into the wall.
hammer|молоток|Give me the hammer, please.
screw|винт, шуруп|One screw is missing.
drill|сверлить; дрель|The neighbour is drilling again.
ladder|приставная лестница|I need a ladder.
drip|капать|Water is dripping from the ceiling.
mortgage|ипотека|We have a mortgage on the house.
estate agent|агент по недвижимости|The estate agent showed us the flat.
lease|договор аренды|I signed the lease.
utilities|коммунальные услуги|Utilities are included in the rent.
cupboard|шкаф (кухонный)|The plates are in the cupboard.
ceiling light|потолочный светильник|The ceiling light is too bright.
storage room|кладовая|The boxes are in the storage room.
decorate|украшать; делать ремонт|We decorated the living room.
install|устанавливать|They installed a new kitchen.
leak|течь, протекать|The roof is leaking.

# Поездки и дорога
travel agency|турагентство|We booked at a travel agency.
package holiday|пакетный тур|We booked a package holiday.
cruise|круиз|My parents are going on a cruise.
guidebook|путеводитель|The guidebook has good maps.
destination|место назначения|Our destination is Spain.
booking|бронирование|The booking is confirmed.
cancel|отменять|I have to cancel the trip.
connecting flight|стыковочный рейс|We missed our connecting flight.
stopover|промежуточная остановка|The flight has a stopover in Dubai.
hand luggage|ручная кладь|Only one piece of hand luggage is allowed.
security check|контроль безопасности|The security check takes a long time.
conductor|кондуктор; дирижёр|The conductor checks the tickets.
reduction|скидка, снижение|Students get a reduction.
full board|полный пансион|We booked full board.
half board|полупансион|The hotel offers half board.
youth hostel|хостел|We sleep in a youth hostel.
campsite|кемпинг|The campsite is by the lake.
tent|палатка|We sleep in a tent.
sleeping bag|спальный мешок|The sleeping bag is warm.
peak|вершина|You can see the sea from the peak.
sunset|закат|We watch the sunset.
sunrise|восход|The sunrise was beautiful.
get lost|заблудиться|We got lost in the forest.
breakdown|поломка (в дороге)|We had a breakdown on the motorway.
tyre|шина|The tyre is flat.
brake|тормоз; тормозить|The driver had to brake hard.
overtake|обгонять|You must not overtake here.
speed|скорость|The speed is limited.
means of transport|вид транспорта|Which means of transport do you use?
cycle path|велодорожка|The cycle path runs along the river.
diversion|объезд|There is a diversion because of roadworks.
roadworks|дорожные работы|There are roadworks on the main road.
road sign|дорожный знак|Watch the road signs.
parking ticket|штраф за парковку|I got a parking ticket.
bend|поворот|Careful, there is a sharp bend!
check in|регистрироваться|We check in at two.
check out|выписываться|We have to check out by eleven.
boarding pass|посадочный талон|Show your boarding pass, please.
gate|выход на посадку; ворота|The flight leaves from gate twelve.
land|приземляться|The plane lands on time.
aisle|проход|I would like an aisle seat.
seat belt|ремень безопасности|Fasten your seat belt.
currency exchange|обмен валюты|Where is the currency exchange?
landmark|ориентир, достопримечательность|The tower is a famous landmark.
scenery|пейзаж|The scenery is wonderful.
backpacker|турист с рюкзаком|The hostel is full of backpackers.
jet lag|нарушение суточного ритма после перелёта|I still have jet lag.

# Продукты и кухня
ingredient|ингредиент|Which ingredients do we need?
recipe|рецепт (кулинарный)|I have a new recipe.
spice|пряность|Which spices do you use?
sauce|соус|The sauce is too spicy.
side dish|гарнир|Rice is the side dish.
flavour|вкус, аромат|The flavour is unusual.
bitter|горький|The coffee is bitter.
mild|мягкий (о вкусе)|The cheese is mild.
crispy|хрустящий|The bread is crispy.
juicy|сочный|The apple is juicy.
tender|нежный, мягкий|The meat is tender.
peel|чистить (от кожуры)|I peel the potatoes.
grate|тереть на тёрке|Grate the cheese.
freeze|замораживать|I freeze the bread.
defrost|размораживать|The meat needs to defrost.
expiry date|срок годности|The expiry date has passed.
frozen food|замороженные продукты|I rarely buy frozen food.
supply|запас|We have enough supplies.
portion|порция|The portion is too big.
calorie|калория|This dish has many calories.
vitamin|витамин|Fruit contains many vitamins.
protein|белок|Eggs contain a lot of protein.
carbohydrates|углеводы|Pasta contains carbohydrates.
nut|орех|I am allergic to nuts.
almond|миндаль|The cake is made with almonds.
bean|фасоль, боб|I am cooking a bean soup.
pea|горох|Peas and carrots, please.
cabbage|капуста|Cabbage is healthy.
spinach|шпинат|Children rarely like spinach.
pumpkin|тыква|We make pumpkin soup in autumn.
raspberry|малина|Raspberries are sweet.
plum|слива|The cake is made with plums.
peach|персик|The peach is ripe.
pineapple|ананас|I do not like pineapple on pizza.
salmon|лосось|I will have the salmon.
tuna|тунец|A tuna salad, please.
lamb|ягнёнок, баранина|We eat lamb at Easter.
roast|жаркое; запекать|The roast is in the oven.
stew|рагу, тушёное блюдо|I often cook stew in winter.
cereal|хлопья|I eat cereal for breakfast.
sparkling wine|игристое вино|We drink a glass of sparkling wine.
non-alcoholic|безалкогольный|A non-alcoholic beer, please.
tap water|вода из-под крана|Can you drink the tap water?
canteen|столовая|I eat in the canteen.
takeaway|еда навынос|Let's get a takeaway tonight.
leftovers|остатки еды|We eat the leftovers tomorrow.
slice|ломтик|A slice of bread, please.
ripe|спелый|The bananas are ripe.
tasty|вкусный|The soup is very tasty.
allergic|страдающий аллергией|I am allergic to milk.
vegan|веганский|Is this dish vegan?
wholemeal|цельнозерновой|I prefer wholemeal bread.
chop|рубить, нарезать|Chop the onions.

# Спорт и увлечения
championship|чемпионат|The championship starts in May.
tournament|турнир|We won the tournament.
victory|победа|The victory was deserved.
defeat|поражение|The defeat was bitter.
referee|судья (спорт.)|The referee blows the whistle.
coach|тренер|The coach is satisfied.
equipment|снаряжение, оборудование|The equipment is expensive.
racket|ракетка|I need a new racket.
dive|нырять|I like to dive on holiday.
row|грести|He rows in a club.
gymnastics|гимнастика|I do gymnastics every morning.
stretch|растягивать|Stretch your muscles before sport.
muscle|мышца|My muscles hurt.
medal|медаль|She won a medal.
board game|настольная игра|We are playing a board game.
dice|игральный кубик|Where is the dice?
puzzle|головоломка|I like solving puzzles.
knit|вязать|My grandmother knits socks.
choir|хор|I sing in a choir.
orchestra|оркестр|The orchestra plays Mozart.
rehearsal|репетиция|The rehearsal starts at seven.
gallery|галерея|The gallery shows modern art.
flea market|блошиный рынок|There is a flea market on Sunday.
score|счёт; забивать|He scored two goals.
fan|болельщик, фанат|The fans celebrate the victory.
leisure activity|занятие в свободное время|What leisure activities are there?
match|матч|The match starts at three.
player|игрок|He is the best player.
spectator|зритель (на стадионе)|The spectators are cheering.
race|гонка, забег|She won the race.
pitch|поле (спортивное)|The players are on the pitch.
athlete|спортсмен|The athlete trains every day.
fitness|физическая форма|I want to improve my fitness.
yoga|йога|I do yoga twice a week.
martial arts|боевые искусства|He does martial arts.
chess|шахматы|My grandfather plays chess.
gardening|садоводство|Gardening relaxes me.
pottery|гончарное дело|She does pottery as a hobby.
craft|ремесло, рукоделие|The children do crafts.

# Тело и самочувствие
lung|лёгкое|Smoking damages the lungs.
liver|печень|Alcohol damages the liver.
kidney|почка|People have two kidneys.
bone|кость|The bone is broken.
joint|сустав|My joints hurt.
rib|ребро|He broke a rib.
spine|позвоночник|My spine hurts.
nerve|нерв|That gets on my nerves.
brain|мозг|The brain needs oxygen.
forehead|лоб|His forehead is hot.
cheek|щека|She kisses him on the cheek.
chin|подбородок|He has a beard on his chin.
lip|губа|My lips are dry.
tongue|язык (орган)|Show me your tongue.
eyebrow|бровь|She has dark eyebrows.
elbow|локоть|I hit my elbow.
wrist|запястье|The watch is on my wrist.
thumb|большой палец|I hurt my thumb.
hip|бедро|My grandmother has a new hip.
ankle|лодыжка|I hurt my ankle.
toe|палец ноги|My toe hurts.
sweat|пот; потеть|I sweat a lot when I do sport.
shiver|дрожать|She is shivering with cold.
sneeze|чихать|I keep sneezing.
breath|дыхание|Hold your breath.
bleed|кровоточить|The wound is bleeding.
bandage|повязка|The nurse puts on a bandage.
plaster|пластырь; гипс|Do you have a plaster?
wheelchair|инвалидная коляска|She uses a wheelchair.
thermometer|градусник|The thermometer shows 38 degrees.
sunburn|солнечный ожог|I have sunburn.
sting|укус (насекомого); жалить|The sting itches.
itch|чесаться|My arm itches.
rash|сыпь|The child has a rash.
swollen|опухший|My foot is swollen.
sprain|растянуть (связки)|I sprained my ankle.
scar|шрам|He has a scar on his chin.
unconscious|без сознания|The man was unconscious.
oxygen|кислород|Plants produce oxygen.
painkiller|обезболивающее|I am taking a painkiller.
check-up|профилактический осмотр|I go for a regular check-up.
faint|падать в обморок|She fainted in the heat.
vomit|рвать (тошнить)|He had to vomit.
bruise|синяк|I have a bruise on my leg.
infection|инфекция|He has an ear infection.
blood test|анализ крови|I need a blood test.
X-ray|рентген|The doctor ordered an X-ray.
stitches|швы|The cut needed five stitches.
pulse|пульс|The nurse checks my pulse.
first aid|первая помощь|Everyone should know first aid.

# Фразовые глаголы
look forward to|ждать с нетерпением|I look forward to the weekend.
get on with|ладить с|I get on with my colleagues.
give back|возвращать|Give me my pen back.
put off|откладывать|We put off the meeting.
turn down|отклонять; убавлять|He turned down the offer.
turn up|появляться; прибавлять|She turned up late.
look up|искать (в словаре)|I look up the word.
run out of|заканчиваться (о запасе)|We have run out of milk.
set up|основывать, устанавливать|She set up her own company.
take care of|заботиться о|I take care of my grandmother.
take up|начинать заниматься|I took up yoga.
give in|уступать, сдаваться|He finally gave in.
go on|продолжать; происходить|What is going on?
carry on|продолжать|Carry on with your work.
come across|случайно встретить|I came across an old photo.
get over|оправиться|She got over the illness.
get rid of|избавляться от|I got rid of my old car.
grow up|вырастать|I grew up in a village.
hold on|подождать|Hold on a minute!
look out|быть осторожным|Look out! A car is coming.
make up|выдумывать; мириться|He made up the story.
pay back|возвращать (деньги)|I will pay you back tomorrow.
put away|убирать на место|Put your toys away.
put down|класть, опускать|Put the bag down.
put out|тушить|The fire brigade put out the fire.
show off|хвастаться|He likes to show off.
slow down|замедляться|Slow down, please!
speed up|ускоряться|We need to speed up.
stand for|означать|What does BBC stand for?
stay up|не ложиться спать|I stayed up late.
take after|быть похожим на|She takes after her mother.
take over|принимать руководство|He took over the company.
throw away|выбрасывать|Do not throw it away!
try out|испытывать, пробовать|I am trying out a new recipe.
turn into|превращаться в|The rain turned into snow.
wear out|изнашивать(ся)|My shoes are worn out.
work out|разрабатывать; тренироваться|I work out three times a week.
write down|записывать|Write down the number.
call back|перезванивать|I will call you back.
call off|отменять|The match was called off.
calm down|успокаиваться|Calm down, please!
cheer up|приободрять(ся)|Cheer up! It will be fine.
come in|входить|Come in, please!
come up with|придумывать|She came up with a good idea.
count on|рассчитывать на|You can count on me.
cut down|сокращать|I am cutting down on sugar.
drop off|высаживать, завозить|I will drop you off at the station.
eat out|есть вне дома|We eat out on Fridays.
end up|оказываться в итоге|We ended up at home.
fall apart|разваливаться|The old book is falling apart.
fill up|наполнять доверху|Fill up the tank, please.
get away|выбираться, сбегать|I need to get away for a few days.
get back|возвращаться|When did you get back?
get by|справляться, обходиться|I can get by in French.
get together|собираться вместе|We get together every Christmas.
go ahead|продолжать, начинать|Go ahead, I am listening.
hand out|раздавать|The teacher hands out the tests.
hang out|проводить время|We hang out in the park.
hang up|класть трубку|He hung up on me.
keep up|не отставать|I cannot keep up with you.
lie down|ложиться|I need to lie down.
log in|входить в систему|Log in with your password.
move in|въезжать|When can we move in?
move out|съезжать|They moved out last month.
plug in|включать в розетку|Plug in the laptop.
run away|убегать|The dog ran away.
set off|отправляться|We set off at six.
sign up|записываться|I signed up for a course.
sort out|улаживать, разбирать|I need to sort out my papers.
split up|расставаться|They split up last year.

# Общение и договорённости
announcement|объявление|Did you hear the announcement?
warning|предупреждение|That was a final warning.
warn|предупреждать|I warned you.
request|просьба; запрос|I have a request.
joke|шутка|He likes telling jokes.
rumour|слух|It is only a rumour.
quarrel|ссора|The quarrel was soon over.
discussion|дискуссия|The discussion was interesting.
arrangement|договорённость|We have an arrangement for Friday.
compliment|комплимент|Thank you for the compliment.
praise|хвалить; похвала|The boss praises the staff.
accusation|обвинение|That is a serious accusation.
insult|оскорбление; оскорблять|That was an insult.
threaten|угрожать|He threatened to call the police.
persuade|уговаривать, убеждать|She persuaded me to come.
scream|кричать, визжать|The baby is screaming.
keep silent|молчать|He prefers to keep silent.
dial|набирать номер|Dial 999 in an emergency.
area code|телефонный код|What is the area code for Leeds?
feedback|обратная связь|Thank you for the quick feedback.
agreement|соглашение|We reached an agreement.
disagreement|разногласие|We had a disagreement.
interrupt|прерывать|May I interrupt for a moment?
gossip|сплетни; сплетничать|I do not like gossip.
tone|тон|I did not like his tone.
gesture|жест|It was a kind gesture.
body language|язык тела|Body language says a lot.
eye contact|зрительный контакт|Keep eye contact when you speak.
small talk|светская беседа|I am not good at small talk.
respond|отвечать, реагировать|He did not respond to my email.
announce|объявлять|The company announced changes.
remark|замечание|That was an interesting remark.
speech|речь|The mayor gave a speech.
pronounce|произносить|How do you pronounce this word?

# Глаголы: действия
beg|умолять, просить|He begged for help.
behave|вести себя|The children behave well.
blame|винить|Do not blame me.
bury|хоронить, закапывать|The dog buried a bone.
chase|гнаться|The dog chases the cat.
cheat|обманывать, списывать|He cheated in the exam.
chew|жевать|Chew your food well.
commit|совершать (преступление)|He committed a crime.
confuse|путать, сбивать с толку|I always confuse the two.
crash|врезаться; зависать|The car crashed into a tree.
crawl|ползать|The baby crawls on the floor.
cure|вылечивать|The medicine cured him.
dare|осмеливаться|I do not dare to ask.
defend|защищать|She defends her opinion.
disappear|исчезать|My key has disappeared.
dislike|не любить|I dislike waiting.
earn a living|зарабатывать на жизнь|He earns a living as a driver.
escape|сбегать, спасаться|The bird escaped from its cage.
exist|существовать|Does life exist on Mars?
fasten|пристёгивать, застёгивать|Fasten your jacket, it is cold.
flow|течь|The river flows into the sea.
fold|складывать|Fold the paper in half.
force|принуждать|Nobody is forcing you.
frighten|пугать|You frightened me.
gain|получать, набирать|She gained a lot of experience.
grab|хватать|He grabbed my arm.
hesitate|колебаться|Do not hesitate to ask.
hug|обнимать|She hugs her friend.
hunt|охотиться|The cat hunts birds.
imagine|представлять себе|Imagine a house by the sea.
injure|ранить, травмировать|He injured his leg.
kneel|становиться на колени|She kneels on the floor.
lead|вести, руководить|The path leads to the lake.
lean|наклоняться, опираться|Do not lean out of the window.
lower|понижать, опускать|Please lower your voice.
nod|кивать|He nods in agreement.
obey|слушаться, подчиняться|The dog does not obey.
owe|быть должным|I owe you ten pounds.
pretend|притворяться|He pretends to be asleep.
punish|наказывать|The offender was punished.
raise|поднимать; растить|Raise your hand.
rescue|спасать|The fire brigade rescued the cat.
resist|сопротивляться|I cannot resist chocolate.
reward|вознаграждать; награда|Hard work is rewarded.
rub|тереть|He rubs his eyes.
rush|мчаться, торопиться|Do not rush!
scratch|царапать, чесать|The cat scratches.
seek|искать|They seek a solution.
separate|разделять|Separate the eggs.
shoot|стрелять; снимать (фильм)|The film was shot in Rome.
slide|скользить|The door slides open.
spread|распространять(ся); намазывать|The news spread quickly.
squeeze|сжимать, выжимать|Squeeze a lemon.
stare|пристально смотреть|Do not stare at people.
struggle|бороться, с трудом справляться|I struggle with maths.
surround|окружать|The house is surrounded by trees.
survive|выживать|He survived the accident.
swear|клясться; ругаться|I swear it is true.
tend|иметь склонность|I tend to forget names.
tremble|дрожать|Her hands were trembling.
unpack|распаковывать|I unpack the suitcase.
vary|различаться, меняться|Prices vary from shop to shop.
wander|бродить|We wandered through the old town.
warm up|разогревать(ся)|Warm up before you run.
waste time|тратить время впустую|Do not waste time.
wrap up|заворачивать; завершать|Let's wrap up the meeting.
bet|держать пари|I bet he is late.
book in advance|бронировать заранее|It is cheaper to book in advance.
bump into|столкнуться, случайно встретить|I bumped into an old friend.
care about|заботиться, придавать значение|I care about the environment.
complain about|жаловаться на|She complains about the noise.
concentrate on|сосредоточиться на|I cannot concentrate on my work.
depend on|зависеть от|It depends on the price.
dream of|мечтать о|I dream of a house by the sea.
insist on|настаивать на|He insists on paying.
laugh at|смеяться над|Do not laugh at me.
participate|участвовать|Everyone can participate.
prepare for|готовиться к|I am preparing for the exam.
recover from|оправиться от|She recovered from the flu.
smile at|улыбаться кому-то|The baby smiled at me.
suffer from|страдать от|He suffers from headaches.
think of|думать о, придумывать|I cannot think of a better idea.
translate into|переводить на|Translate the text into English.
vote for|голосовать за|I voted for the green party.
worry about|беспокоиться о|Do not worry about me.

# Прилагательные: описание
absent|отсутствующий|The boss is absent today.
old-fashioned|старомодный|The dress is old-fashioned.
limited|ограниченный|The seats are limited.
pale|бледный|You look pale.
blind|слепой|The man is blind.
deaf|глухой|My grandfather is almost deaf.
dense|плотный, густой|The fog is dense.
genuine|подлинный, настоящий|Is that genuine leather?
former|бывший|He is my former boss.
final|окончательный|The decision is final.
grown-up|взрослый|My children are grown-up.
firm|твёрдый, прочный|The mattress is firm.
damp|влажный, сырой|The towel is still damp.
fluent|беглый|She speaks fluent English.
second-hand|подержанный|I bought a second-hand car.
educated|образованный|She is very well educated.
secret|секретный|It is a secret plan.
poisonous|ядовитый|The mushroom is poisonous.
smooth|гладкий|The surface is smooth.
slippery|скользкий|The road is slippery.
indifferent|равнодушный|He seems indifferent.
rough|грубый, шершавый|My hands are rough.
magnificent|великолепный|The view is magnificent.
violent|жестокий, сильный|It was a violent storm.
helpless|беспомощный|I feel helpless.
annual|ежегодный|The festival is an annual event.
scarce|скудный, дефицитный|Water is scarce here.
entire|весь, целый|I read the entire book.
powerful|мощный, сильный|It is a powerful engine.
critical|критический|The situation is critical.
crooked|кривой|The picture hangs crooked.
lively|оживлённый|The city is very lively.
loose|свободный, незакреплённый|The screw is loose.
human|человеческий|Mistakes are human.
oral|устный|The oral exam is tomorrow.
written|письменный|The written exam is on Monday.
courageous|мужественный|That was courageous of you.
cowardly|трусливый|That was a cowardly act.
naked|голый|The baby is naked.
sober|трезвый|The driver must be sober.
drunk|пьяный|He was completely drunk.
public|общественный|It is a public park.
private|частный|That is private.
tidy|аккуратный|Her room is always tidy.
untidy|неаккуратный|His desk is untidy.
positive|положительный|The result is positive.
negative|отрицательный|The test was negative.
affordable|доступный по цене|The restaurant is affordable.
pure|чистый, без примесей|It is pure cotton.
huge|огромный|The house is huge.
tiny|крошечный|The room is tiny.
gentle|нежный, мягкий|She has a gentle voice.
disgusting|отвратительный|The smell is disgusting.
visible|видимый|The stain is hardly visible.
economical|экономный|This car is very economical.
sharp|острый (о ноже)|The knife is sharp.
blunt|тупой|The knife is blunt.
steep|крутой|The path is steep.
strict|строгий|The teacher is strict.
addicted|зависимый|He is addicted to sugar.
dead|мёртвый|The plant is dead.
loyal|верный|The dog is loyal.
typical|типичный|That is typical of him.
unusual|необычный|That is unusual.
incredible|невероятный|That is incredible!
forbidden|запрещённый|Parking is forbidden here.
crazy|сумасшедший|That is a crazy idea.
understandable|понятный|The explanation is understandable.
related|родственный, связанный|We are related.
awake|бодрствующий|Are you awake yet?
wise|мудрый|That was a wise decision.
accidental|случайный|It was an accidental meeting.
enormous|громадный|The difference is enormous.
ancient|древний|Rome is an ancient city.
bare|голый, пустой|The walls are bare.
brief|краткий|The meeting was brief.
casual|повседневный, непринуждённый|The dress code is casual.
cruel|жестокий|That was a cruel joke.
delighted|в восторге|I am delighted to see you.
eager|страстно желающий|She is eager to learn.
faithful|верный|He is a faithful friend.
fierce|свирепый, ожесточённый|The competition is fierce.
fragile|хрупкий|The glass is fragile.
harmless|безвредный|The snake is harmless.
immediate|немедленный|We need an immediate answer.
mature|зрелый|She is very mature for her age.
obedient|послушный|The dog is obedient.
remote|отдалённый|They live in a remote village.
shallow|мелкий (о воде)|The water is shallow here.
spare|запасной, свободный|Do you have a spare key?
upset|расстроенный|She is upset about the news.

# Понятия и формы
farewell|прощание|The farewell was hard.
everyday life|повседневная жизнь|Everyday life is stressful.
occasion|повод, случай|What is the occasion?
instructions|инструкция|Read the instructions, please.
attention|внимание|Thank you for your attention.
instant|мгновение|It happened in an instant.
encounter|встреча|It was an interesting encounter.
duration|продолжительность|The duration of the course is three months.
pressure|давление|I am under pressure.
distance|расстояние|The distance is ten kilometres.
memory|память; воспоминание|I have good memories of the trip.
substitute|замена|We need a substitute for him.
case|случай|In this case you are right.
imagination|воображение|Children have a lot of imagination.
mystery|тайна, загадка|It is a mystery to me.
thought|мысль|That is a good thought.
pile|куча, стопка|There is a pile of paper on the desk.
height|высота, рост|The height of the tower is 100 metres.
depth|глубина|The depth of the lake is unknown.
width|ширина|The width of the table is one metre.
length|длина|The length is two metres.
strength|сила|I do not have the strength.
circle|круг|The children sit in a circle.
triangle|треугольник|A triangle has three corners.
surface|поверхность|The surface of the lake is calm.
edge|край|The glass is on the edge of the table.
space|пространство, место|There is not enough space.
shadow|тень|The cat is afraid of its shadow.
step|шаг; ступень|That is the first step.
guilt|вина|He feels guilt.
trace|след|The police found no trace.
style|стиль|She has good style.
level|уровень|The level is too high.
sum|сумма|The sum is too high.
symbol|символ|The dove is a symbol of peace.
system|система|The system works well.
pace|темп|The pace is too fast.
type|тип|He is not my type.
extent|степень, размер|The extent of the damage is unclear.
surroundings|окрестности, окружение|The surroundings are beautiful.
circumstance|обстоятельство|Under these circumstances I will stay at home.
nonsense|чепуха|That is nonsense!
mind|ум, разум|She has a sharp mind.
manner|способ, манера|He spoke in a friendly manner.
value|ценность|The value of the house has risen.
reality|действительность|In reality it is different.
miracle|чудо|It is a miracle.
sign of|признак|Dark clouds are a sign of rain.
`;
