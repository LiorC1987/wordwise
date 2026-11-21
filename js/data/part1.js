// Word list, part 1.
// Format:  english (sense note)|pos|hebrew:transliteration|french|spanish|polish|italian
// "/" separates accepted alternatives; the first one is the main answer.
// Lines starting with "## id | Name" open a topic.
export default `
## basics | Basics
hello|phr|שלום:shalom|bonjour/salut|hola|cześć/dzień dobry|ciao/salve
goodbye|phr|להתראות:lehitraot|au revoir/salut|adiós|do widzenia/cześć|arrivederci/ciao
good morning|phr|בוקר טוב:boker tov|bonjour|buenos días|dzień dobry|buongiorno
good evening|phr|ערב טוב:erev tov|bonsoir|buenas tardes/buenas noches|dobry wieczór|buonasera
good night|phr|לילה טוב:laila tov|bonne nuit|buenas noches|dobranoc|buonanotte
thank you|phr|תודה:toda|merci|gracias|dziękuję/dzięki|grazie
please|phr|בבקשה:bevakasha|s'il vous plaît/s'il te plaît|por favor|proszę|per favore/per piacere
yes|phr|כן:ken|oui|sí|tak|sì
no|phr|לא:lo|non|no|nie|no
sorry|phr|סליחה:slikha|pardon/désolé|perdón/lo siento|przepraszam|scusa/mi dispiace
OK|phr|בסדר:beseder|d'accord/ok|vale/de acuerdo|w porządku/dobrze|va bene/d'accordo
welcome|phr|ברוך הבא:barukh haba|bienvenue|bienvenido|witaj/witamy|benvenuto
cheers!|phr|לחיים:lekhayim|santé/à la vôtre|salud|na zdrowie|salute/cin cin
good luck|phr|בהצלחה:behatslakha|bonne chance|buena suerte|powodzenia|buona fortuna/in bocca al lupo
congratulations|phr|מזל טוב:mazal tov|félicitations|felicidades/enhorabuena|gratulacje|congratulazioni/complimenti
happy birthday|phr|יום הולדת שמח:yom huledet sameakh|joyeux anniversaire|feliz cumpleaños|wszystkiego najlepszego|buon compleanno
how are you?|phr|מה שלומך?:ma shlomkha|comment ça va ?/comment allez-vous ?|¿cómo estás?|jak się masz?|come stai?
my name is…|phr|קוראים לי:korim li|je m'appelle|me llamo|mam na imię/nazywam się|mi chiamo
nice to meet you|phr|נעים מאוד:naim meod|enchanté|encantado/mucho gusto|miło mi|piacere
I don't understand|phr|אני לא מבין/אני לא מבינה:ani lo mevin|je ne comprends pas|no entiendo|nie rozumiem|non capisco
I don't know|phr|אני לא יודע/אני לא יודעת:ani lo yodea|je ne sais pas|no sé|nie wiem|non lo so
help!|phr|הצילו:hatsilu|au secours !/à l'aide !|¡socorro!/¡ayuda!|pomocy!|aiuto!
of course|phr|כמובן:kamuvan|bien sûr|claro/por supuesto|oczywiście|certo/certamente
see you later|phr|נתראה:nitrae|à plus tard/à tout à l'heure|hasta luego|do zobaczenia/na razie|a dopo/ci vediamo
how much is it?|phr|כמה זה עולה?:kama ze ole|combien ça coûte ?|¿cuánto cuesta?|ile to kosztuje?|quanto costa?
enjoy your meal|phr|בתיאבון:beteavon|bon appétit|buen provecho/que aproveche|smacznego|buon appetito
I love you|phr|אני אוהב אותך/אני אוהבת אותך:ani ohev otakh|je t'aime|te quiero/te amo|kocham cię|ti amo/ti voglio bene
I'm hungry|phr|אני רעב/אני רעבה:ani raev|j'ai faim|tengo hambre|jestem głodny/jestem głodna|ho fame
no problem|phr|אין בעיה:ein beaya|pas de problème|no hay problema|nie ma problemu|nessun problema
what time is it?|phr|מה השעה?:ma hashaa|quelle heure est-il ?|¿qué hora es?|która godzina?|che ore sono?

## numbers | Numbers
zero|num|אפס:efes|zéro|cero|zero|zero
one|num|אחת/אחד:akhat|un/une|uno/una|jeden|uno
two|num|שתיים/שניים:shtayim|deux|dos|dwa|due
three|num|שלוש/שלושה:shalosh|trois|tres|trzy|tre
four|num|ארבע/ארבעה:arba|quatre|cuatro|cztery|quattro
five|num|חמש/חמישה:khamesh|cinq|cinco|pięć|cinque
six|num|שש/שישה:shesh|six|seis|sześć|sei
seven|num|שבע/שבעה:sheva|sept|siete|siedem|sette
eight|num|שמונה:shmone|huit|ocho|osiem|otto
nine|num|תשע/תשעה:tesha|neuf|nueve|dziewięć|nove
ten|num|עשר/עשרה:eser|dix|diez|dziesięć|dieci
eleven|num|אחת עשרה/אחד עשר:akhat esre|onze|once|jedenaście|undici
twelve|num|שתים עשרה/שנים עשר:shtem esre|douze|doce|dwanaście|dodici
thirteen|num|שלוש עשרה/שלושה עשר:shlosh esre|treize|trece|trzynaście|tredici
fourteen|num|ארבע עשרה/ארבעה עשר:arba esre|quatorze|catorce|czternaście|quattordici
fifteen|num|חמש עשרה/חמישה עשר:khamesh esre|quinze|quince|piętnaście|quindici
sixteen|num|שש עשרה/שישה עשר:shesh esre|seize|dieciséis|szesnaście|sedici
seventeen|num|שבע עשרה/שבעה עשר:shva esre|dix-sept|diecisiete|siedemnaście|diciassette
eighteen|num|שמונה עשרה/שמונה עשר:shmone esre|dix-huit|dieciocho|osiemnaście|diciotto
nineteen|num|תשע עשרה/תשעה עשר:tsha esre|dix-neuf|diecinueve|dziewiętnaście|diciannove
twenty|num|עשרים:esrim|vingt|veinte|dwadzieścia|venti
thirty|num|שלושים:shloshim|trente|treinta|trzydzieści|trenta
forty|num|ארבעים:arbaim|quarante|cuarenta|czterdzieści|quaranta
fifty|num|חמישים:khamishim|cinquante|cincuenta|pięćdziesiąt|cinquanta
sixty|num|שישים:shishim|soixante|sesenta|sześćdziesiąt|sessanta
seventy|num|שבעים:shivim|soixante-dix|setenta|siedemdziesiąt|settanta
eighty|num|שמונים:shmonim|quatre-vingts|ochenta|osiemdziesiąt|ottanta
ninety|num|תשעים:tishim|quatre-vingt-dix|noventa|dziewięćdziesiąt|novanta
hundred|num|מאה:mea|cent|cien/ciento|sto|cento
thousand|num|אלף:elef|mille|mil|tysiąc|mille
million|num|מיליון:milyon|un million/million|un millón/millón|milion|un milione/milione
first|adj|ראשון:rishon|premier/première|primero|pierwszy|primo
second (2nd)|adj|שני:sheni|deuxième/second|segundo|drugi|secondo
third|adj|שלישי:shlishi|troisième|tercero|trzeci|terzo
half|n|חצי:khetsi|la moitié/demi|la mitad/medio|połowa/pół|la metà/mezzo
quarter|n|רבע:reva|le quart|el cuarto|ćwierć|il quarto
pair|n|זוג:zug|la paire|el par|para|il paio
number|n|מספר:mispar|le nombre/le numéro|el número|liczba/numer|il numero

## time | Time
time|n|זמן:zman|le temps|el tiempo|czas|il tempo
day|n|יום:yom|le jour/la journée|el día|dzień|il giorno
week|n|שבוע:shavua|la semaine|la semana|tydzień|la settimana
month|n|חודש:khodesh|le mois|el mes|miesiąc|il mese
year|n|שנה:shana|l'année/l'an|el año|rok|l'anno
hour|n|שעה:shaa|l'heure|la hora|godzina|l'ora
minute|n|דקה:daka|la minute|el minuto|minuta|il minuto
second (of time)|n|שנייה:shniya|la seconde|el segundo|sekunda|il secondo
today|adv|היום:hayom|aujourd'hui|hoy|dzisiaj/dziś|oggi
tomorrow|adv|מחר:makhar|demain|mañana|jutro|domani
yesterday|adv|אתמול:etmol|hier|ayer|wczoraj|ieri
morning|n|בוקר:boker|le matin/la matinée|la mañana|rano/poranek|la mattina/il mattino
afternoon|n|אחר הצהריים/צהריים:akhar hatsohorayim|l'après-midi|la tarde|popołudnie|il pomeriggio
evening|n|ערב:erev|le soir/la soirée|la noche/la tarde|wieczór|la sera
night|n|לילה:laila|la nuit|la noche|noc|la notte
now|adv|עכשיו:akhshav|maintenant|ahora|teraz|adesso/ora
later|adv|אחר כך/מאוחר יותר:akhar kakh|plus tard|más tarde/luego|później|più tardi/dopo
soon|adv|בקרוב:bekarov|bientôt|pronto|wkrótce/niedługo|presto/fra poco
always|adv|תמיד:tamid|toujours|siempre|zawsze|sempre
never|adv|אף פעם/לעולם לא:af paam|jamais|nunca|nigdy|mai
sometimes|adv|לפעמים:lifamim|parfois/quelquefois|a veces|czasami/czasem|a volte/qualche volta
often|adv|לעיתים קרובות/הרבה פעמים:leitim krovot|souvent|a menudo|często|spesso
early|adv|מוקדם:mukdam|tôt|temprano|wcześnie|presto
late|adv|מאוחר:meukhar|tard/en retard|tarde|późno|tardi/in ritardo
Monday|n|יום שני:yom sheni|lundi|el lunes|poniedziałek|il lunedì
Tuesday|n|יום שלישי:yom shlishi|mardi|el martes|wtorek|il martedì
Wednesday|n|יום רביעי:yom revii|mercredi|el miércoles|środa|il mercoledì
Thursday|n|יום חמישי:yom khamishi|jeudi|el jueves|czwartek|il giovedì
Friday|n|יום שישי:yom shishi|vendredi|el viernes|piątek|il venerdì
Saturday|n|שבת/יום שבת:shabat|samedi|el sábado|sobota|il sabato
Sunday|n|יום ראשון:yom rishon|dimanche|el domingo|niedziela|la domenica
January|n|ינואר:yanuar|janvier|enero|styczeń|gennaio
February|n|פברואר:februar|février|febrero|luty|febbraio
March|n|מרץ:merts|mars|marzo|marzec|marzo
April|n|אפריל:april|avril|abril|kwiecień|aprile
May|n|מאי:mai|mai|mayo|maj|maggio
June|n|יוני:yuni|juin|junio|czerwiec|giugno
July|n|יולי:yuli|juillet|julio|lipiec|luglio
August|n|אוגוסט:ogust|août|agosto|sierpień|agosto
September|n|ספטמבר:september|septembre|septiembre|wrzesień|settembre
October|n|אוקטובר:oktober|octobre|octubre|październik|ottobre
November|n|נובמבר:november|novembre|noviembre|listopad|novembre
December|n|דצמבר:detsember|décembre|diciembre|grudzień|dicembre
weekend|n|סוף שבוע:sof shavua|le week-end|el fin de semana|weekend|il fine settimana/il weekend
spring|n|אביב:aviv|le printemps|la primavera|wiosna|la primavera
summer|n|קיץ:kayits|l'été|el verano|lato|l'estate
autumn|n|סתיו:stav|l'automne|el otoño|jesień|l'autunno
winter|n|חורף:khoref|l'hiver|el invierno|zima|l'inverno
birthday|n|יום הולדת:yom huledet|l'anniversaire|el cumpleaños|urodziny|il compleanno
calendar|n|לוח שנה:luakh shana|le calendrier|el calendario|kalendarz|il calendario

## colors | Colors
color|n|צבע:tseva|la couleur|el color|kolor|il colore
red|adj|אדום:adom|rouge|rojo|czerwony|rosso
orange (color)|adj|כתום:katom|orange|naranja|pomarańczowy|arancione
yellow|adj|צהוב:tsahov|jaune|amarillo|żółty|giallo
green|adj|ירוק:yarok|vert|verde|zielony|verde
blue|adj|כחול:kakhol|bleu|azul|niebieski|blu
light blue|adj|תכלת:tkhelet|bleu clair|celeste/azul claro|błękitny/jasnoniebieski|azzurro
purple|adj|סגול:sagol|violet|morado/violeta|fioletowy|viola
pink|adj|ורוד:varod|rose|rosa|różowy|rosa
brown|adj|חום:khum|marron/brun|marrón/café|brązowy|marrone
black|adj|שחור:shakhor|noir|negro|czarny|nero
white|adj|לבן:lavan|blanc|blanco|biały|bianco
grey|adj|אפור:afor|gris|gris|szary|grigio
gold|n|זהב:zahav|l'or|el oro|złoto|l'oro
silver|n|כסף:kesef|l'argent|la plata|srebro|l'argento

## people | People & Family
person|n|אדם/בן אדם:adam|la personne|la persona|osoba|la persona
people|n|אנשים:anashim|les gens|la gente|ludzie|la gente
man|n|גבר/איש:gever|l'homme|el hombre|mężczyzna|l'uomo
woman|n|אישה:isha|la femme|la mujer|kobieta|la donna
child|n|ילד:yeled|l'enfant|el niño|dziecko|il bambino
children|n|ילדים:yeladim|les enfants|los niños/los hijos|dzieci|i bambini/i figli
boy|n|ילד/נער:yeled|le garçon|el chico/el niño|chłopiec/chłopak|il ragazzo/il bambino
girl|n|ילדה/נערה:yalda|la fille|la chica/la niña|dziewczynka/dziewczyna|la ragazza/la bambina
baby|n|תינוק:tinok|le bébé|el bebé|niemowlę/dziecko|il neonato/il bebè
teenager|n|נער/מתבגר:naar|l'adolescent/l'ado|el adolescente|nastolatek|l'adolescente
adult|n|מבוגר:mevugar|l'adulte|el adulto|dorosły|l'adulto
family|n|משפחה:mishpakha|la famille|la familia|rodzina|la famiglia
mother|n|אמא/אם:ima|la mère/maman|la madre/mamá|matka/mama|la madre/mamma
father|n|אבא/אב:aba|le père/papa|el padre/papá|ojciec/tata|il padre/papà
parents|n|הורים:horim|les parents|los padres|rodzice|i genitori
son|n|בן:ben|le fils|el hijo|syn|il figlio
daughter|n|בת:bat|la fille|la hija|córka|la figlia
brother|n|אח:akh|le frère|el hermano|brat|il fratello
sister|n|אחות:akhot|la sœur|la hermana|siostra|la sorella
grandmother|n|סבתא:savta|la grand-mère/mamie|la abuela|babcia|la nonna
grandfather|n|סבא:saba|le grand-père/papi|el abuelo|dziadek|il nonno
grandchild|n|נכד:nekhed|le petit-enfant/le petit-fils|el nieto|wnuk|il nipote
uncle|n|דוד:dod|l'oncle|el tío|wujek|lo zio
aunt|n|דודה:doda|la tante|la tía|ciocia|la zia
cousin|n|בן דוד/בת דודה:ben dod|le cousin/la cousine|el primo/la prima|kuzyn/kuzynka|il cugino/la cugina
husband|n|בעל:baal|le mari|el marido/el esposo|mąż|il marito
wife|n|אישה/רעיה:isha|la femme/l'épouse|la esposa/la mujer|żona|la moglie
boyfriend|n|חבר/בן זוג:khaver|le copain/le petit ami|el novio|chłopak|il fidanzato/il ragazzo
girlfriend|n|חברה/בת זוג:khavera|la copine/la petite amie|la novia|dziewczyna|la fidanzata/la ragazza
friend|n|חבר/חברה:khaver|l'ami/l'amie|el amigo/la amiga|przyjaciel/przyjaciółka|l'amico/l'amica
neighbor|n|שכן:shakhen|le voisin|el vecino|sąsiad|il vicino
guest|n|אורח:oreakh|l'invité|el invitado|gość|l'ospite
stranger|n|זר:zar|l'inconnu/l'étranger|el desconocido/el extraño|nieznajomy/obcy|lo sconosciuto/l'estraneo
relative|n|קרוב משפחה:karov mishpakha|le proche/le parent|el pariente/el familiar|krewny|il parente
name|n|שם:shem|le nom/le prénom|el nombre|imię|il nome
surname|n|שם משפחה:shem mishpakha|le nom de famille|el apellido|nazwisko|il cognome
age|n|גיל:gil|l'âge|la edad|wiek|l'età
birth|n|לידה:leida|la naissance|el nacimiento|narodziny/urodzenie|la nascita
life|n|חיים:khayim|la vie|la vida|życie|la vita
death|n|מוות:mavet|la mort|la muerte|śmierć|la morte
wedding|n|חתונה:khatuna|le mariage/les noces|la boda|ślub/wesele|il matrimonio/le nozze
group|n|קבוצה:kvutsa|le groupe|el grupo|grupa|il gruppo

## body | Body
body|n|גוף:guf|le corps|el cuerpo|ciało|il corpo
head|n|ראש:rosh|la tête|la cabeza|głowa|la testa
face|n|פנים:panim|le visage/la figure|la cara/el rostro|twarz|la faccia/il viso
hair|n|שיער:sear|les cheveux|el pelo/el cabello|włosy|i capelli
eye|n|עין:ayin|l'œil|el ojo|oko|l'occhio
ear|n|אוזן:ozen|l'oreille|la oreja/el oído|ucho|l'orecchio
nose|n|אף:af|le nez|la nariz|nos|il naso
mouth|n|פה:pe|la bouche|la boca|usta|la bocca
tooth|n|שן:shen|la dent|el diente|ząb|il dente
tongue|n|לשון:lashon|la langue|la lengua|język|la lingua
lip|n|שפה/שפתיים:safa|la lèvre|el labio|warga/usta|il labbro
neck|n|צוואר:tsavar|le cou|el cuello|szyja|il collo
throat|n|גרון:garon|la gorge|la garganta|gardło|la gola
shoulder|n|כתף:katef|l'épaule|el hombro|ramię/bark|la spalla
arm|n|זרוע/יד:zroa|le bras|el brazo|ręka/ramię|il braccio
elbow|n|מרפק:marpek|le coude|el codo|łokieć|il gomito
hand|n|יד:yad|la main|la mano|dłoń/ręka|la mano
finger|n|אצבע:etsba|le doigt|el dedo|palec|il dito
thumb|n|אגודל:agudal|le pouce|el pulgar|kciuk|il pollice
nail|n|ציפורן:tsiporen|l'ongle|la uña|paznokieć|l'unghia
chest|n|חזה:khaze|la poitrine|el pecho|klatka piersiowa/pierś|il petto
back (of the body)|n|גב:gav|le dos|la espalda|plecy|la schiena
stomach|n|בטן:beten|le ventre/l'estomac|el estómago/la barriga|brzuch/żołądek|la pancia/lo stomaco
leg|n|רגל:regel|la jambe|la pierna|noga|la gamba
knee|n|ברך:berekh|le genou|la rodilla|kolano|il ginocchio
foot|n|כף רגל/רגל:kaf regel|le pied|el pie|stopa|il piede
toe|n|בוהן/אצבע רגל:bohen|l'orteil|el dedo del pie|palec u nogi|il dito del piede/l'alluce
ankle|n|קרסול:karsol|la cheville|el tobillo|kostka|la caviglia
skin|n|עור:or|la peau|la piel|skóra|la pelle
bone|n|עצם:etsem|l'os|el hueso|kość|l'osso
blood|n|דם:dam|le sang|la sangre|krew|il sangue
heart|n|לב:lev|le cœur|el corazón|serce|il cuore
brain|n|מוח:moakh|le cerveau|el cerebro|mózg|il cervello
lung|n|ריאה:rea|le poumon|el pulmón|płuco|il polmone
muscle|n|שריר:shrir|le muscle|el músculo|mięsień|il muscolo
beard|n|זקן:zakan|la barbe|la barba|broda|la barba
cheek|n|לחי:lekhi|la joue|la mejilla|policzek|la guancia
chin|n|סנטר:santer|le menton|la barbilla/el mentón|podbródek/broda|il mento
eyebrow|n|גבה:gaba|le sourcil|la ceja|brew|il sopracciglio
forehead|n|מצח:metsakh|le front|la frente|czoło|la fronte

## health | Health
health|n|בריאות:briut|la santé|la salud|zdrowie|la salute
doctor|n|רופא/רופאה:rofe|le médecin/le docteur|el médico/el doctor|lekarz/doktor|il medico/il dottore
nurse|n|אחות/אח:akhot|l'infirmier/l'infirmière|el enfermero/la enfermera|pielęgniarka/pielęgniarz|l'infermiere/l'infermiera
dentist|n|רופא שיניים:rofe shinayim|le dentiste|el dentista|dentysta|il dentista
hospital|n|בית חולים:beit kholim|l'hôpital|el hospital|szpital|l'ospedale
pharmacy|n|בית מרקחת:beit merkakhat|la pharmacie|la farmacia|apteka|la farmacia
medicine|n|תרופה:trufa|le médicament|la medicina/el medicamento|lek/lekarstwo|la medicina
pill|n|כדור/גלולה:kadur|le comprimé/la pilule|la pastilla/la píldora|tabletka|la pillola/la compressa
pain|n|כאב:keev|la douleur|el dolor|ból|il dolore
headache|n|כאב ראש:keev rosh|le mal de tête|el dolor de cabeza|ból głowy|il mal di testa
fever|n|חום:khom|la fièvre|la fiebre|gorączka|la febbre
cold (illness)|n|הצטננות:hitstanenut|le rhume|el resfriado|przeziębienie|il raffreddore
flu|n|שפעת:shapaat|la grippe|la gripe|grypa|l'influenza
cough|n|שיעול:shiul|la toux|la tos|kaszel|la tosse
illness|n|מחלה:makhala|la maladie|la enfermedad|choroba|la malattia
injury|n|פציעה:ptsia|la blessure|la herida/la lesión|uraz/rana|la ferita
ambulance|n|אמבולנס:ambulans|l'ambulance|la ambulancia|karetka|l'ambulanza
sick|adj|חולה:khole|malade|enfermo|chory|malato
healthy|adj|בריא:bari|en bonne santé/sain|sano|zdrowy|sano
tired|adj|עייף:ayef|fatigué|cansado|zmęczony|stanco
pregnant|adj|בהריון:beherayon|enceinte|embarazada|w ciąży|incinta
glasses (for eyes)|n|משקפיים:mishkafayim|les lunettes|las gafas/los lentes|okulary|gli occhiali
allergy|n|אלרגיה:alergya|l'allergie|la alergia|alergia|l'allergia
sleep (noun)|n|שינה:shena|le sommeil|el sueño|sen|il sonno

## food | Food
food|n|אוכל:okhel|la nourriture|la comida|jedzenie|il cibo
bread|n|לחם:lekhem|le pain|el pan|chleb|il pane
butter|n|חמאה:khema|le beurre|la mantequilla|masło|il burro
cheese|n|גבינה:gvina|le fromage|el queso|ser|il formaggio
egg|n|ביצה:beitsa|l'œuf|el huevo|jajko/jajo|l'uovo
meat|n|בשר:basar|la viande|la carne|mięso|la carne
chicken|n|עוף:of|le poulet|el pollo|kurczak|il pollo
beef|n|בשר בקר:basar bakar|le bœuf|la ternera/la carne de res|wołowina|il manzo
sausage|n|נקניקייה:naknikiya|la saucisse|la salchicha|kiełbasa|la salsiccia
ham|n|נקניק חזיר:naknik khazir|le jambon|el jamón|szynka|il prosciutto
rice|n|אורז:orez|le riz|el arroz|ryż|il riso
pasta|n|פסטה:pasta|les pâtes|la pasta|makaron|la pasta
soup|n|מרק:marak|la soupe|la sopa|zupa|la zuppa/la minestra
salad|n|סלט:salat|la salade|la ensalada|sałatka|l'insalata
sandwich|n|כריך/סנדוויץ':karikh|le sandwich|el sándwich/el bocadillo|kanapka|il panino/il tramezzino
cake|n|עוגה:uga|le gâteau|el pastel/la tarta|ciasto|la torta
cookie|n|עוגייה:ugiya|le biscuit/le cookie|la galleta|ciastko|il biscotto
chocolate|n|שוקולד:shokolad|le chocolat|el chocolate|czekolada|il cioccolato
sugar|n|סוכר:sukar|le sucre|el azúcar|cukier|lo zucchero
salt|n|מלח:melakh|le sel|la sal|sól|il sale
pepper (spice)|n|פלפל שחור/פלפל:pilpel shakhor|le poivre|la pimienta|pieprz|il pepe
oil|n|שמן:shemen|l'huile|el aceite|olej|l'olio
honey|n|דבש:dvash|le miel|la miel|miód|il miele
jam|n|ריבה:riba|la confiture|la mermelada|dżem|la marmellata
ice cream|n|גלידה:glida|la glace|el helado|lody|il gelato
breakfast|n|ארוחת בוקר:arukhat boker|le petit-déjeuner|el desayuno|śniadanie|la colazione
lunch|n|ארוחת צהריים:arukhat tsohorayim|le déjeuner|el almuerzo/la comida|obiad/lunch|il pranzo
dinner|n|ארוחת ערב:arukhat erev|le dîner|la cena|kolacja|la cena
meal|n|ארוחה:arukha|le repas|la comida|posiłek|il pasto
fruit|n|פרי:pri|le fruit|la fruta|owoc|la frutta
apple|n|תפוח:tapuakh|la pomme|la manzana|jabłko|la mela
banana|n|בננה:banana|la banane|el plátano/la banana|banan|la banana
orange (fruit)|n|תפוז:tapuz|l'orange|la naranja|pomarańcza|l'arancia
lemon|n|לימון:limon|le citron|el limón|cytryna|il limone
grape|n|ענב:anav|le raisin|la uva|winogrono|l'uva
strawberry|n|תות:tut|la fraise|la fresa|truskawka|la fragola
pear|n|אגס:agas|la poire|la pera|gruszka|la pera
peach|n|אפרסק:afarsek|la pêche|el melocotón/el durazno|brzoskwinia|la pesca
watermelon|n|אבטיח:avatiakh|la pastèque|la sandía|arbuz|l'anguria/il cocomero
cherry|n|דובדבן:duvdevan|la cerise|la cereza|wiśnia/czereśnia|la ciliegia
vegetable|n|ירק:yerek|le légume|la verdura/la hortaliza|warzywo|la verdura/l'ortaggio
tomato|n|עגבנייה:agvaniya|la tomate|el tomate|pomidor|il pomodoro
potato|n|תפוח אדמה:tapuakh adama|la pomme de terre|la patata/la papa|ziemniak|la patata
carrot|n|גזר:gezer|la carotte|la zanahoria|marchewka|la carota
onion|n|בצל:batsal|l'oignon|la cebolla|cebula|la cipolla
garlic|n|שום:shum|l'ail|el ajo|czosnek|l'aglio
cucumber|n|מלפפון:melafefon|le concombre|el pepino|ogórek|il cetriolo
lettuce|n|חסה:khasa|la laitue|la lechuga|sałata|la lattuga
pepper (vegetable)|n|פלפל:pilpel|le poivron|el pimiento|papryka|il peperone
mushroom|n|פטרייה:pitriya|le champignon|la seta/el champiñón|grzyb|il fungo
bean|n|שעועית:sheuit|le haricot|la judía/el frijol|fasola|il fagiolo
corn|n|תירס:tiras|le maïs|el maíz|kukurydza|il mais
nut|n|אגוז:egoz|la noix|la nuez|orzech|la noce
olive|n|זית:zayit|l'olive|la aceituna|oliwka|l'oliva
avocado|n|אבוקדו:avokado|l'avocat|el aguacate|awokado|l'avocado
pineapple|n|אננס:ananas|l'ananas|la piña|ananas|l'ananas
flour|n|קמח:kemakh|la farine|la harina|mąka|la farina
yogurt|n|יוגורט:yogurt|le yaourt|el yogur|jogurt|lo yogurt
sauce|n|רוטב:rotev|la sauce|la salsa|sos|la salsa/il sugo
dessert|n|קינוח:kinuakh|le dessert|el postre|deser|il dolce/il dessert

## drinks | Drinks
water|n|מים:mayim|l'eau|el agua|woda|l'acqua
milk|n|חלב:khalav|le lait|la leche|mleko|il latte
coffee|n|קפה:kafe|le café|el café|kawa|il caffè
tea|n|תה:te|le thé|el té|herbata|il tè
juice|n|מיץ:mits|le jus|el zumo/el jugo|sok|il succo
beer|n|בירה:bira|la bière|la cerveza|piwo|la birra
wine|n|יין:yayin|le vin|el vino|wino|il vino
soft drink|n|משקה קל:mashke kal|le soda/la boisson gazeuse|el refresco|napój gazowany|la bibita
lemonade|n|לימונדה:limonada|la limonade|la limonada|lemoniada|la limonata
drink (noun)|n|משקה:mashke|la boisson|la bebida|napój|la bevanda
bottle|n|בקבוק:bakbuk|la bouteille|la botella|butelka|la bottiglia
glass (for drinking)|n|כוס:kos|le verre|el vaso|szklanka|il bicchiere
cup|n|ספל:sefel|la tasse|la taza|kubek/filiżanka|la tazza
ice|n|קרח:kerakh|la glace/le glaçon|el hielo|lód|il ghiaccio
alcohol|n|אלכוהול:alkohol|l'alcool|el alcohol|alkohol|l'alcol

## kitchen | Kitchen & Eating Out
plate|n|צלחת:tsalakhat|l'assiette|el plato|talerz|il piatto
bowl|n|קערה:keara|le bol|el cuenco/el bol|miska|la ciotola
fork|n|מזלג:mazleg|la fourchette|el tenedor|widelec|la forchetta
knife|n|סכין:sakin|le couteau|el cuchillo|nóż|il coltello
spoon|n|כף:kaf|la cuillère|la cuchara|łyżka|il cucchiaio
pot|n|סיר:sir|la casserole/la marmite|la olla|garnek|la pentola
frying pan|n|מחבת:makhvat|la poêle|la sartén|patelnia|la padella
oven|n|תנור:tanur|le four|el horno|piekarnik|il forno
fridge|n|מקרר:mekarer|le frigo/le réfrigérateur|la nevera/el frigorífico|lodówka|il frigorifero/il frigo
freezer|n|מקפיא:makpi|le congélateur|el congelador|zamrażarka|il congelatore
stove|n|כיריים:kirayim|la cuisinière/la plaque de cuisson|la cocina/los fogones|kuchenka|i fornelli/il fornello
microwave|n|מיקרוגל:mikrogal|le micro-ondes|el microondas|mikrofalówka|il microonde
kettle|n|קומקום:kumkum|la bouilloire|el hervidor|czajnik|il bollitore
dishwasher|n|מדיח כלים:madiakh kelim|le lave-vaisselle|el lavavajillas|zmywarka|la lavastoviglie
napkin|n|מפית:mapit|la serviette|la servilleta|serwetka|il tovagliolo
recipe|n|מתכון:matkon|la recette|la receta|przepis|la ricetta
menu|n|תפריט:tafrit|le menu/la carte|el menú/la carta|menu/karta|il menù
waiter|n|מלצר:meltsar|le serveur|el camarero/el mesero|kelner|il cameriere
bill (in a restaurant)|n|חשבון:kheshbon|l'addition|la cuenta|rachunek|il conto
tip (money)|n|טיפ:tip|le pourboire|la propina|napiwek|la mancia
dish (course)|n|מנה:mana|le plat|el plato|danie|il piatto
taste|n|טעם:taam|le goût|el sabor|smak|il sapore/il gusto
slice|n|פרוסה:prusa|la tranche|la rebanada/la loncha|plasterek/kromka|la fetta
piece|n|חתיכה:khatikha|le morceau|el trozo/el pedazo|kawałek|il pezzo

## home | Home
house|n|בית:bayit|la maison|la casa|dom|la casa
apartment|n|דירה:dira|l'appartement|el piso/el apartamento|mieszkanie|l'appartamento
room|n|חדר:kheder|la pièce/la chambre|la habitación|pokój|la stanza/la camera
kitchen|n|מטבח:mitbakh|la cuisine|la cocina|kuchnia|la cucina
bedroom|n|חדר שינה:kheder shena|la chambre|el dormitorio|sypialnia|la camera da letto
bathroom|n|חדר אמבטיה:kheder ambatya|la salle de bains|el baño|łazienka|il bagno
toilet|n|שירותים:sherutim|les toilettes|el inodoro/el aseo|toaleta|il gabinetto/il WC
living room|n|סלון:salon|le salon|el salón/la sala de estar|salon/pokój dzienny|il soggiorno/il salotto
door|n|דלת:delet|la porte|la puerta|drzwi|la porta
window|n|חלון:khalon|la fenêtre|la ventana|okno|la finestra
wall|n|קיר:kir|le mur|la pared|ściana|il muro/la parete
floor (ground)|n|רצפה:ritspa|le sol/le plancher|el suelo|podłoga|il pavimento
floor (storey)|n|קומה:koma|l'étage|la planta/el piso|piętro|il piano
ceiling|n|תקרה:tikra|le plafond|el techo|sufit|il soffitto
roof|n|גג:gag|le toit|el tejado/el techo|dach|il tetto
stairs|n|מדרגות:madregot|l'escalier|la escalera|schody|le scale
garden|n|גינה:gina|le jardin|el jardín|ogród|il giardino
balcony|n|מרפסת:mirpeset|le balcon|el balcón|balkon|il balcone
key|n|מפתח:mafteakh|la clé|la llave|klucz|la chiave
bed|n|מיטה:mita|le lit|la cama|łóżko|il letto
chair|n|כיסא:kise|la chaise|la silla|krzesło|la sedia
table|n|שולחן:shulkhan|la table|la mesa|stół|il tavolo
sofa|n|ספה:sapa|le canapé|el sofá|kanapa/sofa|il divano
desk|n|שולחן כתיבה:shulkhan ktiva|le bureau|el escritorio|biurko|la scrivania
shelf|n|מדף:madaf|l'étagère|la estantería/el estante|półka|lo scaffale/la mensola
wardrobe|n|ארון:aron|l'armoire/le placard|el armario|szafa|l'armadio
lamp|n|מנורה:menora|la lampe|la lámpara|lampa|la lampada
mirror|n|מראה:mara|le miroir|el espejo|lustro|lo specchio
carpet|n|שטיח:shatiakh|le tapis|la alfombra|dywan|il tappeto
curtain|n|וילון:vilon|le rideau|la cortina|zasłona|la tenda
pillow|n|כרית:karit|l'oreiller|la almohada|poduszka|il cuscino
blanket|n|שמיכה:smikha|la couverture|la manta|koc|la coperta
towel|n|מגבת:magevet|la serviette|la toalla|ręcznik|l'asciugamano
shower|n|מקלחת:miklakhat|la douche|la ducha|prysznic|la doccia
bathtub|n|אמבטיה:ambatya|la baignoire|la bañera|wanna|la vasca da bagno
sink|n|כיור:kiyor|l'évier/le lavabo|el fregadero/el lavabo|zlew/umywalka|il lavandino
soap|n|סבון:sabon|le savon|el jabón|mydło|il sapone
toothbrush|n|מברשת שיניים:mivreshet shinayim|la brosse à dents|el cepillo de dientes|szczoteczka do zębów|lo spazzolino da denti
trash|n|זבל:zevel|les ordures/la poubelle|la basura|śmieci|la spazzatura
box|n|קופסה:kufsa|la boîte|la caja|pudełko|la scatola
picture|n|תמונה:tmuna|l'image/le tableau|el cuadro/la imagen|obraz/obrazek|il quadro/l'immagine
clock|n|שעון:shaon|l'horloge/la pendule|el reloj|zegar|l'orologio
air conditioner|n|מזגן:mazgan|le climatiseur/la clim|el aire acondicionado|klimatyzacja/klimatyzator|il condizionatore
elevator|n|מעלית:maalit|l'ascenseur|el ascensor|winda|l'ascensore
furniture|n|רהיטים:rehitim|les meubles|los muebles|meble|i mobili

## clothes | Clothes
clothes|n|בגדים:bgadim|les vêtements|la ropa|ubrania/ubranie|i vestiti
shirt|n|חולצה:khultsa|la chemise|la camisa|koszula|la camicia
T-shirt|n|טי־שירט/חולצת טי:ti shirt|le t-shirt/le tee-shirt|la camiseta|koszulka/t-shirt|la maglietta
trousers|n|מכנסיים:mikhnasayim|le pantalon|los pantalones|spodnie|i pantaloni
jeans|n|ג'ינס:jins|le jean|los vaqueros/los jeans|dżinsy|i jeans
skirt|n|חצאית:khatsait|la jupe|la falda|spódnica|la gonna
dress|n|שמלה:simla|la robe|el vestido|sukienka|il vestito/l'abito
coat|n|מעיל:meil|le manteau|el abrigo|płaszcz|il cappotto
jacket|n|ז'קט/מעיל קל:zhaket|la veste/le blouson|la chaqueta|kurtka|la giacca
sweater|n|סוודר:sveder|le pull|el jersey/el suéter|sweter|il maglione
shoe|n|נעל:naal|la chaussure|el zapato|but|la scarpa
boot|n|מגף:magaf|la botte|la bota|kozak/kalosz|lo stivale
sock|n|גרב:gerev|la chaussette|el calcetín|skarpetka|il calzino
hat|n|כובע:kova|le chapeau|el sombrero|kapelusz/czapka|il cappello
scarf|n|צעיף:tsaif|l'écharpe|la bufanda|szalik|la sciarpa
glove|n|כפפה:kfafa|le gant|el guante|rękawiczka|il guanto
belt|n|חגורה:khagora|la ceinture|el cinturón|pasek|la cintura
tie|n|עניבה:aniva|la cravate|la corbata|krawat|la cravatta
suit|n|חליפה:khalifa|le costume|el traje|garnitur|il completo/l'abito
pajamas|n|פיג'מה:pijama|le pyjama|el pijama|piżama|il pigiama
underwear|n|תחתונים:takhtonim|les sous-vêtements|la ropa interior|bielizna|la biancheria intima
swimsuit|n|בגד ים:beged yam|le maillot de bain|el bañador/el traje de baño|strój kąpielowy|il costume da bagno
pocket|n|כיס:kis|la poche|el bolsillo|kieszeń|la tasca
button|n|כפתור:kaftor|le bouton|el botón|guzik/przycisk|il bottone/il pulsante
bag|n|תיק:tik|le sac|el bolso/la bolsa|torba/torebka|la borsa
umbrella|n|מטרייה:mitriya|le parapluie|el paraguas|parasol|l'ombrello
watch (on the wrist)|n|שעון יד/שעון:shaon yad|la montre|el reloj|zegarek|l'orologio
ring (jewelry)|n|טבעת:tabaat|la bague|el anillo|pierścionek|l'anello
necklace|n|שרשרת:sharsheret|le collier|el collar|naszyjnik|la collana
size (of clothes)|n|מידה:mida|la taille|la talla|rozmiar|la taglia

## city | City & Places
city|n|עיר:ir|la ville|la ciudad|miasto|la città
town|n|עיירה:ayara|la petite ville/le bourg|el pueblo/la localidad|miasteczko|la cittadina/il paese
village|n|כפר:kfar|le village|el pueblo/la aldea|wieś|il villaggio/il paese
street|n|רחוב:rekhov|la rue|la calle|ulica|la via/la strada
road|n|כביש/דרך:kvish|la route|la carretera|droga|la strada
square (in a town)|n|כיכר:kikar|la place|la plaza|plac/rynek|la piazza
bridge|n|גשר:gesher|le pont|el puente|most|il ponte
park|n|פארק/גן ציבורי:park|le parc|el parque|park|il parco
building|n|בניין:binyan|le bâtiment/l'immeuble|el edificio|budynek|l'edificio/il palazzo
shop|n|חנות:khanut|le magasin/la boutique|la tienda|sklep|il negozio
supermarket|n|סופרמרקט/סופר:supermarket|le supermarché|el supermercado|supermarket|il supermercato
market|n|שוק:shuk|le marché|el mercado|targ/rynek|il mercato
restaurant|n|מסעדה:misada|le restaurant|el restaurante|restauracja|il ristorante
café|n|בית קפה:beit kafe|le café|la cafetería/el café|kawiarnia|il bar/il caffè
bakery|n|מאפייה:maafiya|la boulangerie|la panadería|piekarnia|il panificio/il forno
hotel|n|מלון:malon|l'hôtel|el hotel|hotel|l'albergo/l'hotel
bank|n|בנק:bank|la banque|el banco|bank|la banca
post office|n|דואר/סניף דואר:doar|la poste|correos/la oficina de correos|poczta|l'ufficio postale/la posta
church|n|כנסייה:knesiya|l'église|la iglesia|kościół|la chiesa
museum|n|מוזיאון:muzeon|le musée|el museo|muzeum|il museo
library|n|ספרייה:sifriya|la bibliothèque|la biblioteca|biblioteka|la biblioteca
cinema|n|קולנוע:kolnoa|le cinéma|el cine|kino|il cinema
theater|n|תיאטרון:teatron|le théâtre|el teatro|teatr|il teatro
office|n|משרד:misrad|le bureau|la oficina|biuro|l'ufficio
factory|n|מפעל:mifal|l'usine|la fábrica|fabryka|la fabbrica
city center|n|מרכז העיר:merkaz hair|le centre-ville|el centro|centrum miasta/centrum|il centro
corner|n|פינה:pina|le coin|la esquina|róg|l'angolo
neighborhood|n|שכונה:shkhuna|le quartier|el barrio|dzielnica/okolica|il quartiere
address|n|כתובת:ktovet|l'adresse|la dirección|adres|l'indirizzo
map|n|מפה:mapa|la carte/le plan|el mapa|mapa|la mappa/la cartina
traffic light|n|רמזור:ramzor|le feu/le feu rouge|el semáforo|sygnalizacja świetlna/światła|il semaforo
sidewalk|n|מדרכה:midrakha|le trottoir|la acera|chodnik|il marciapiede
parking lot|n|חניון:khanyon|le parking|el aparcamiento/el estacionamiento|parking|il parcheggio
gas station|n|תחנת דלק:takhanat delek|la station-service|la gasolinera|stacja benzynowa|il distributore di benzina
police station|n|תחנת משטרה:takhanat mishtara|le commissariat|la comisaría|komisariat|la questura/il commissariato
stadium|n|אצטדיון:itstadyon|le stade|el estadio|stadion|lo stadio
hairdresser|n|מספרה/ספר:mispara|le coiffeur|la peluquería/el peluquero|fryzjer|il parrucchiere
zoo|n|גן חיות:gan khayot|le zoo|el zoo/el zoológico|zoo|lo zoo
castle|n|טירה:tira|le château|el castillo|zamek|il castello
tower|n|מגדל:migdal|la tour|la torre|wieża|la torre
`;
