// Словарь A1.
// Каждая строка: английское слово | перевод | пример.
// Строка, которая начинается с #, — название темы.
const WORDS_A1 = `
# Приветствия и вежливость
hello|привет, здравствуйте|Hello, how are you?
hi|привет|Hi, Tom!
goodbye|до свидания|Goodbye, see you tomorrow!
bye|пока|Bye, see you later!
good morning|доброе утро|Good morning, Mrs Smith!
good evening|добрый вечер|Good evening, everyone!
good night|спокойной ночи|Good night, sleep well!
please|пожалуйста (просьба)|A coffee, please.
thank you|спасибо|Thank you for your help!
sorry|извините|Sorry, I am late.
excuse me|простите (обращение)|Excuse me, where is the station?
yes|да|Yes, that is right.
no|нет|No, thank you.
maybe|может быть|Maybe I will come tomorrow.
of course|конечно|Of course I can help you.
welcome|добро пожаловать|Welcome to London!
name|имя|My name is Anna.
surname|фамилия|What is your surname?
address|адрес|What is your address?
country|страна|Canada is a big country.
language|язык|Which language do you speak?
question|вопрос|I have a question.
answer|ответ|The answer is correct.

# Местоимения и вопросы
I|я|I am tired.
you|ты, вы|Where are you from?
he|он|He is my brother.
she|она|She lives in Paris.
it|оно, это|It is cold today.
we|мы|We learn English.
they|они|They are at home.
my|мой|This is my book.
your|твой, ваш|Where is your car?
his|его|His name is Peter.
her|её|Her dog is small.
our|наш|Our house is old.
their|их|Their children are at school.
this|этот|This film is good.
that|тот|That house is big.
who|кто|Who is that?
what|что|What are you doing?
where|где, куда|Where do you live?
when|когда|When does the lesson start?
why|почему|Why are you laughing?
how|как|How are you?
how much|сколько (о цене, количестве)|How much is it?
which|который, какой|Which bus goes to the station?
everybody|все|Everybody is here.
something|что-то|I want something to drink.
nothing|ничего|I understand nothing.
somebody|кто-то|Somebody is at the door.
nobody|никто|Nobody is at home.
here|здесь|I live here.
there|там|The bank is over there.

# Числа
zero|ноль|My number starts with zero.
one|один|I have one sister.
two|два|I have two brothers.
three|три|We are three people.
four|четыре|The child is four years old.
five|пять|I will come in five minutes.
six|шесть|The lesson starts at six.
seven|семь|A week has seven days.
eight|восемь|I work eight hours.
nine|девять|The film starts at nine.
ten|десять|It costs ten pounds.
eleven|одиннадцать|It is eleven o'clock.
twelve|двенадцать|A year has twelve months.
twenty|двадцать|She is twenty years old.
thirty|тридцать|The month has thirty days.
hundred|сто|The book has a hundred pages.
thousand|тысяча|The car costs a thousand pounds.
number|число, номер|What is your phone number?
first|первый|Today is my first day.
second|второй|I live on the second floor.
half|половина|It is half past seven.

# Люди и семья
person|человек|She is a nice person.
people|люди|There are many people here.
man|мужчина|The man works here.
woman|женщина|The woman is reading a book.
child|ребёнок|The child is playing in the garden.
boy|мальчик|The boy is ten years old.
girl|девочка, девушка|The girl is called Lisa.
baby|младенец|The baby is sleeping.
family|семья|My family is big.
parents|родители|My parents live in Leeds.
father|отец|My father is a doctor.
mother|мать|My mother cooks well.
son|сын|Their son goes to school.
daughter|дочь|Our daughter is small.
brother|брат|My brother is a student.
sister|сестра|My sister lives in York.
husband|муж|Her husband is a teacher.
wife|жена|His wife works in a bank.
grandfather|дедушка|My grandfather is eighty.
grandmother|бабушка|My grandmother bakes cakes.
uncle|дядя|My uncle lives in Berlin.
aunt|тётя|My aunt is coming tomorrow.
friend|друг|He is my best friend.
neighbour|сосед|Our neighbour is very kind.
guest|гость|We have guests today.
married|женатый, замужняя|I am married.
single|холостой, незамужняя|Are you single?
age|возраст|What is your age?
birthday|день рождения|Tomorrow is my birthday.

# Еда и напитки
food|еда|The food is ready.
bread|хлеб|I am buying bread.
butter|сливочное масло|Bread and butter, please.
cheese|сыр|I like cheese.
meat|мясо|I do not eat meat.
fish|рыба|We eat fish on Fridays.
chicken|курица|I will have the chicken.
egg|яйцо|I would like an egg.
milk|молоко|The child drinks milk.
water|вода|A glass of water, please.
juice|сок|I drink orange juice.
coffee|кофе|The coffee is hot.
tea|чай|Would you like some tea?
beer|пиво|A beer, please.
wine|вино|The wine tastes good.
fruit|фрукты|Fruit is healthy.
apple|яблоко|The apple is red.
banana|банан|The banana is yellow.
orange|апельсин|I am eating an orange.
vegetables|овощи|I eat a lot of vegetables.
potato|картофель|Fish and potatoes, please.
tomato|помидор|The tomato is ripe.
salad|салат|I will have a salad.
soup|суп|The soup is hot.
rice|рис|We eat rice with vegetables.
pasta|макароны|Children like pasta.
cake|торт, пирог|The cake is delicious.
chocolate|шоколад|I love chocolate.
sugar|сахар|Coffee without sugar, please.
salt|соль|The soup needs salt.
breakfast|завтрак|Breakfast is at eight.
lunch|обед|What is for lunch?
dinner|ужин|Dinner is ready.
hungry|голодный|I am hungry.
thirsty|испытывающий жажду|Are you thirsty?
glass|стакан|A glass of juice, please.
cup|чашка|A cup of tea, please.
bottle|бутылка|A bottle of water, please.
plate|тарелка|The plate is empty.
knife|нож|The knife is sharp.
fork|вилка|I need a fork.
spoon|ложка|Where is the spoon?
restaurant|ресторан|We eat in a restaurant.
menu|меню|The menu, please.
bill|счёт|The bill, please!
delicious|вкусный|The pizza is delicious.

# Дом и квартира
house|дом|The house is old.
flat|квартира|The flat is small.
room|комната|My room is light.
kitchen|кухня|We eat in the kitchen.
bathroom|ванная|The bathroom is on the left.
toilet|туалет|Where is the toilet?
bedroom|спальня|The bedroom is quiet.
living room|гостиная|We are sitting in the living room.
garden|сад|The children are in the garden.
door|дверь|Please close the door.
window|окно|The window is open.
table|стол|The book is on the table.
chair|стул|The chair is comfortable.
bed|кровать|I am going to bed.
wardrobe|шкаф для одежды|The jacket is in the wardrobe.
sofa|диван|The cat is sleeping on the sofa.
lamp|лампа|The lamp is broken.
picture|картина, фотография|The picture is on the wall.
wall|стена|The wall is white.
floor|пол; этаж|We live on the third floor.
fridge|холодильник|The milk is in the fridge.
cooker|плита|The pan is on the cooker.
shower|душ|The shower is new.
key|ключ|Where is my key?
rent|арендная плата|The rent is high.
stairs|лестница|The stairs are on the right.
television|телевизор|The television is on.
phone|телефон|The phone is ringing.
computer|компьютер|The computer is broken.
clock|часы (настенные)|The clock is on the wall.
furniture|мебель|The furniture is new.

# Город и транспорт
city|большой город|London is a big city.
town|небольшой город|I live in a small town.
village|деревня|My grandmother lives in a village.
street|улица|The street is long.
square|площадь|The café is on the square.
station|вокзал, станция|The train is at the station.
airport|аэропорт|We are going to the airport.
bus stop|автобусная остановка|The bus stop is over there.
bus|автобус|The bus comes at nine.
train|поезд|The train is late.
underground|метро|I go by underground.
car|машина|The car is new.
bicycle|велосипед|I ride a bicycle.
taxi|такси|We are taking a taxi.
plane|самолёт|The plane is landing.
ticket|билет|I am buying a ticket.
supermarket|супермаркет|I am going to the supermarket.
shop|магазин|The shop is closed.
market|рынок|There is fruit at the market.
bank|банк|The bank opens at nine.
post office|почта|The post office is next to the bank.
pharmacy|аптека|The pharmacy is on the corner.
hospital|больница|He is in hospital.
hotel|гостиница|The hotel is expensive.
cinema|кинотеатр|We are going to the cinema.
museum|музей|The museum is closed on Mondays.
park|парк|We walk in the park.
church|церковь|The church is very old.
police|полиция|Call the police!
way|путь, дорога|The way is long.
corner|угол|The café is on the corner.
left|левый, налево|Turn left.
right|правый, направо|The bank is on the right.
straight on|прямо|Go straight on.
entrance|вход|The entrance is there.
exit|выход|Where is the exit?
money|деньги|I have no money.
price|цена|The price is good.
pound|фунт|It costs five pounds.

# Время
time|время|I have no time.
day|день|It is a nice day.
week|неделя|A week has seven days.
month|месяц|The month is over.
year|год|A year has twelve months.
hour|час|The lesson lasts an hour.
minute|минута|Wait a minute!
morning|утро|In the morning I drink coffee.
afternoon|время после полудня|I am free in the afternoon.
evening|вечер|In the evening I watch TV.
night|ночь|I sleep at night.
today|сегодня|Today is Monday.
tomorrow|завтра|Tomorrow I am free.
yesterday|вчера|Yesterday I was ill.
now|сейчас|I am coming now.
later|позже|See you later.
soon|скоро|See you soon!
always|всегда|He is always on time.
often|часто|I often go to the cinema.
sometimes|иногда|Sometimes I cook.
never|никогда|I never drink coffee.
early|рано|I get up early.
late|поздно|It is already late.
Monday|понедельник|I work on Monday.
Tuesday|вторник|I have an English class on Tuesday.
Wednesday|среда|I go swimming on Wednesday.
Thursday|четверг|My brother is coming on Thursday.
Friday|пятница|We go out on Friday.
Saturday|суббота|I go shopping on Saturday.
Sunday|воскресенье|I sleep late on Sunday.
weekend|выходные|Have a nice weekend!
January|январь|It is cold in January.
July|июль|We go to the sea in July.
December|декабрь|Christmas is in December.
spring|весна|Everything is green in spring.
summer|лето|It is warm in summer.
autumn|осень|It often rains in autumn.
winter|зима|It snows in winter.
date|дата|What is the date today?
holiday|отпуск, праздник|I am on holiday in August.

# Глаголы
be|быть|I want to be a doctor.
have|иметь|We have a car.
do|делать (вообще)|What do you do?
make|делать, изготавливать|I make breakfast.
go|идти, ехать|I go to work by bus.
come|приходить|Are you coming with us?
walk|идти пешком, гулять|I walk to school.
run|бежать|The child runs fast.
fly|лететь|I fly to Spain tomorrow.
stay|оставаться|I am staying at home.
live|жить|I live in Manchester.
work|работать|He works in a bank.
learn|учить, учиться|I am learning English.
study|изучать, учиться в вузе|She studies medicine.
play|играть|The children play football.
speak|говорить (на языке)|Do you speak English?
say|сказать|What did you say?
tell|рассказывать, сообщать|Tell me about your family.
ask|спрашивать|Can I ask something?
listen|слушать|I listen to music.
hear|слышать|I can hear you.
see|видеть|I see a bird.
watch|смотреть|I watch a film.
read|читать|He reads the newspaper.
write|писать|I am writing an email.
understand|понимать|I do not understand.
know|знать|I do not know.
think|думать|I think about you often.
eat|есть|We eat at twelve.
drink|пить|I drink water.
cook|готовить|My husband likes to cook.
buy|покупать|I buy bread every day.
pay|платить|I would like to pay.
cost|стоить|How much does it cost?
take|брать|I take the bus.
give|давать|Give me the book, please.
bring|приносить|Bring me the menu, please.
need|нуждаться|I need help.
look for|искать|I am looking for my key.
find|находить|I cannot find my phone.
sleep|спать|The baby is sleeping.
get up|вставать|I get up at seven.
start|начинать|The lesson starts at nine.
finish|заканчивать|The class finishes at twelve.
open|открывать|Please open the book.
close|закрывать|The shop closes at eight.
help|помогать|Can you help me?
wait|ждать|I am waiting for the bus.
meet|встречать|I am meeting friends today.
visit|навещать, посещать|We visit our grandmother.
call|звонить; звать|I will call you tomorrow.
like|нравиться, любить|I like dogs.
love|любить|I love you.
want|хотеть|I want to go home.
can|мочь, уметь|I can swim.
swim|плавать|I swim a lot in summer.
dance|танцевать|She dances very well.
sing|петь|The children sing a song.
travel|путешествовать|I like to travel.
sit|сидеть|We are sitting in the garden.
stand|стоять|The car stands in front of the house.
wash|мыть, стирать|I wash the car.
clean|убирать, чистить|I clean the flat.
show|показывать|Show me the photo, please.
explain|объяснять|Can you explain that?
repeat|повторять|Please repeat!
spell|произносить по буквам|Can you spell it?
rain|идти (о дожде)|It is raining today.
smoke|курить|You cannot smoke here.
laugh|смеяться|The children are laughing.
drive|водить машину|I drive to work.
put|класть, ставить|Put the book on the table.
use|использовать|Can I use your phone?

# Прилагательные
good|хороший|The food is good.
bad|плохой|The weather is bad.
big|большой|The house is big.
small|маленький|The flat is small.
new|новый|My car is new.
old|старый|The man is old.
young|молодой|She is still young.
beautiful|красивый|The city is beautiful.
ugly|некрасивый|The building is ugly.
long|длинный|The road is long.
short|короткий|The film is short.
expensive|дорогой|The hotel is expensive.
cheap|дешёвый|The T-shirt is cheap.
fast|быстрый|The train is fast.
slow|медленный|The bus is slow.
hot|горячий, жаркий|The tea is hot.
warm|тёплый|It is warm today.
cold|холодный|The water is cold.
easy|лёгкий, простой|The exercise is easy.
difficult|трудный|English is not difficult.
heavy|тяжёлый|The suitcase is heavy.
correct|правильный|The answer is correct.
wrong|неправильный|That is wrong.
important|важный|That is very important.
interesting|интересный|The book is interesting.
boring|скучный|The film is boring.
tired|уставший|I am very tired.
ill|больной|My son is ill.
healthy|здоровый|Fruit is healthy.
happy|счастливый|She is happy.
sad|грустный|Why are you sad?
nice|приятный, милый|The teacher is nice.
friendly|дружелюбный|The people are friendly.
ready|готовый|Dinner is ready.
free|свободный|Is this seat free?
busy|занятой|I am busy today.
closed|закрытый|The bank is closed.
full|полный|The bus is full.
empty|пустой|The bottle is empty.
dirty|грязный|The shoes are dirty.
light|светлый; лёгкий|The room is light.
dark|тёмный|It gets dark early in winter.
loud|громкий|The music is too loud.
quiet|тихий|The street is quiet.
far|далёкий|Is it far?
near|близкий|The station is very near.
high|высокий|The mountain is high.
broken|сломанный|My phone is broken.
great|отличный|That is a great idea.
sweet|сладкий|The cake is sweet.
many|много (исчисляемое)|I have many friends.
little|мало; маленький|I have little time.

# Учёба и работа
school|школа|The children go to school.
university|университет|She studies at university.
course|курс|The course starts in May.
class|класс, урок|The class is big.
teacher|учитель|The teacher explains the grammar.
student|студент, ученик|The student learns a lot.
book|книга|I am reading a book.
notebook|тетрадь|Write in your notebook.
pen|ручка|Do you have a pen?
pencil|карандаш|I write with a pencil.
paper|бумага|I need some paper.
word|слово|I do not know this word.
sentence|предложение|Please write a sentence.
exercise|упражнение|The exercise is easy.
homework|домашнее задание|I am doing my homework.
mistake|ошибка|That is a mistake.
exam|экзамен|I have an exam tomorrow.
break|перерыв|We are having a break.
job|работа (должность)|I like my job.
office|офис|I work in an office.
company|компания|The company is big.
boss|начальник|The boss is on holiday.
colleague|коллега|My colleague is ill.
doctor|врач|I am going to the doctor.
shop assistant|продавец|The shop assistant is friendly.
email|электронное письмо|I am writing an email.
letter|письмо; буква|The letter is for you.
form|бланк, анкета|Please fill in the form.

# Тело, одежда, цвета
head|голова|My head hurts.
eye|глаз|She has blue eyes.
ear|ухо|My ear hurts.
nose|нос|My nose is cold.
mouth|рот|Open your mouth!
tooth|зуб|My tooth hurts.
hand|рука (кисть)|Give me your hand.
arm|рука (от плеча)|My arm hurts.
leg|нога|The leg is broken.
foot|ступня|I go on foot.
stomach|живот|My stomach hurts.
hair|волосы|She has long hair.
clothes|одежда|The clothes are expensive.
trousers|брюки|The trousers are too long.
shirt|рубашка|The shirt is white.
T-shirt|футболка|The T-shirt is new.
sweater|свитер|The sweater is warm.
jacket|куртка|Take a jacket!
coat|пальто|The coat is black.
dress|платье|The dress is beautiful.
skirt|юбка|The skirt is short.
shoe|ботинок, туфля|The shoes are new.
bag|сумка|The bag is heavy.
glasses|очки|Where are my glasses?
colour|цвет|What colour do you like?
red|красный|The car is red.
blue|синий|The sky is blue.
green|зелёный|The light is green.
yellow|жёлтый|The sun is yellow.
black|чёрный|The coffee is black.
white|белый|The snow is white.
grey|серый|The sky is grey.
brown|коричневый|The table is brown.

# Природа и погода
weather|погода|The weather is nice.
sun|солнце|The sun is shining.
snow|снег|There is snow in winter.
wind|ветер|The wind is strong.
sky|небо|The sky is clear.
sea|море|We are going to the sea.
lake|озеро|We swim in the lake.
river|река|The river is wide.
mountain|гора|The mountain is very high.
forest|лес|We walk in the forest.
tree|дерево|The tree is old.
flower|цветок|The flower is beautiful.
animal|животное|What animal do you like?
dog|собака|The dog is friendly.
cat|кошка|The cat is sleeping.
bird|птица|The bird is singing.
horse|лошадь|The horse runs fast.

# Служебные слова
and|и|I drink tea and coffee.
or|или|Tea or coffee?
but|но|I am tired but happy.
because|потому что|I am staying at home because I am ill.
also|тоже, также|I also speak French.
not|не|I am not tired.
very|очень|That is very good.
only|только|I have only five pounds.
still|всё ещё|I am still at the office.
already|уже|I am already ready.
again|снова|He is ill again.
together|вместе|We cook together.
alone|один, в одиночку|I live alone.
in|в|I live in London.
from|из, от|I am from Poland.
to|к, в (направление)|I am going to the doctor.
with|с|I go with my friend.
without|без|Coffee without milk, please.
for|для|The present is for you.
at|у, в (точка)|I am at home.
on|на|The book is on the table.
under|под|The cat is under the table.
in front of|перед|The car is in front of the house.
behind|за, позади|The garden is behind the house.
next to|рядом с|The bank is next to the post office.
between|между|The pharmacy is between the bank and the shop.
until|до (о времени)|I work until five.
about|о; примерно|We talk about the film.
`;
