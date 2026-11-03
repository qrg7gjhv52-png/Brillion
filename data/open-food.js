/* ─────────────────────────────────────────────────────────────
   Brillion · alledaagse open vragen (deel 2: eten, drinken, dieren)
   Elk antwoord: NL|EN|andere namen; van vaak genoemd naar zeldzaam.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;

  B.addQuestions('nature', [
    { id: 'sweets', lvl: 1, nl: 'Noem een soort snoep', en: 'Name a type of sweet (candy)', a: `
      Chocolade|Chocolate; Lolly|Lollipop|Lolly; Gummibeertjes|Gummy bears|Gummibeer|Haribo-beertjes; Drop|Liquorice|Licorice; Kauwgom|Chewing gum|Bubblegum;
      Marshmallow|Marshmallow|Spekje|Spekjes|Marshmallows; Zuurtjes|Boiled sweets|Hard candy|Zuurtje; M&M's|M&M's|M&Ms; Snoepjes met zuur|Sour sweets|Zure matten|Sour belts|Zure snoepjes;
      Toffee|Toffee|Toffees; Mentos; Smarties; Skittles; Haribo; Twix; Mars; Snickers; Kitkat|KitKat|Kit Kat; Bounty; Milky Way; Leo; Kinder Bueno|Kinder Bueno|Kinder;
      Kindersurprise|Kinder Surprise|Kinder Egg|Kinderei; Suikerspin|Candyfloss|Cotton candy; Zuurstok|Candy cane; Popcorn; Nougat; Marsepein|Marzipan;
      Pralines|Chocolates|Praline|Bonbon|Bonbons; Fruittella; Tic Tac|Tic Tac|Tictac; Pepermunt|Mint|Mints|Pepermuntjes|Peppermint; Winegums|Wine gums;
      Cola-flesjes|Cola bottles|Colaflesjes; Toblerone; Maltesers;
      Rolo; Chupa Chups; Kauwgomballen|Gumballs|Gumball; Babbelaar|Butterscotch|Babbelaars; Cuberdon|Neuzekes|Cuberdons; Nic-nac|Nic Nac|Nicnac; Haribo Tagada|Tagada;
      Dragées|Dragées|Suikerboontjes|Sugared almonds; Zure spekken|Sour marshmallows; Dropveters|Liquorice laces|Dropveter; Hopjes|Hopjes|Koffiesnoepjes; Fudge; Turks fruit|Turkish delight|Lokum; Halva|Halva|Halwa; Karamel|Caramel|Karamels; Nougatine; Pindarotsjes|Peanut clusters;
      Chocoladeletter|Chocolate letter; Paaseitjes|Mini Easter eggs|Paaseieren|Easter eggs; Snoepketting|Candy necklace; Rocky Road` },

    { id: 'biscuits', lvl: 2, nl: 'Noem een soort koek of koekje', en: 'Name a type of biscuit or cookie', a: `
      Speculoos|Speculoos|Speculaas|Biscoff; Chocoladekoekje|Chocolate chip cookie|Cookie|Cookies; Oreo; Prince|Prince|Prince-koek; Wafel|Waffle|Wafels|Waffles;
      Petit-beurre|Petit beurre|Petit-beurrekoek|Rich tea; Boterkoek|Butter biscuit|Shortbread|Zandkoekje; Stroopwafel|Stroopwafel|Syrup waffle; Bastogne|Bastogne|Bastogne-koek;
      Pim's|Jaffa Cakes|Pims; Macaron|Macaron|Macarons;
      Peperkoek|Gingerbread|Peperkoekmannetje|Gingerbread man; Gevulde koek|Almond-filled cookie|Gevulde koeken; Spritsen|Spritz cookies|Sprits; Kaneelkoekje|Cinnamon biscuit;
      Lange vinger|Ladyfinger|Boudoir|Savoiardi; Café Noir|Café Noir|Cafe noir; Jodenkoek|Jodenkoek|Grote boterkoek; Kletskop|Kletskop|Brandy snap;
      Amandelkoekje|Almond biscuit|Amaretti|Amaretto-koekje; Cantuccini|Cantuccini|Biscotti; Havermoutkoekje|Oatmeal cookie|Oat biscuit|Haverkoek; Gelukskoekje|Fortune cookie; Krakelingen|Pretzel biscuit|Krakeling;
      Brownie|Brownie|Brownies; Snickerdoodle; Anzac-koekje|Anzac biscuit|Anzac biscuits; Custard cream|Custard cream; Bourbon|Bourbon biscuit; Hobnob|Hobnobs|HobNobs;
      Ginger nut|Ginger nut|Gemberkoekje|Ginger snap; Pepernoot|Pepernoot|Kruidnoot|Kruidnoten; Mokatine|Mokatine|Mocca-koekje; Frangipane|Frangipane|Frangipanne;
      Lebkuchen; Madeleine|Madeleine|Madeleines; Financier; Tuile|Tuile|Tuiles; Florentine|Florentine|Florentijntje; Rijstwafel|Rice cake|Rijstwafels|Rice cakes;
      Melkchocoladekoek|Milk chocolate biscuit|Chocoladebiscuit; Mariakoekje|Marie biscuit|Maria; Zandkoek|Sand cookie|Zandkoekjes; Kattentong|Cat's tongue|Langue de chat` },

    { id: 'snacks', lvl: 1, nl: 'Noem een snack van de frituur', en: 'Name a deep-fried snack (like at a chip shop)', a: `
      Frietjes|Fries|Friet|Frieten|French fries|Chips; Frikandel|Frikandel|Curryworst|Frikadel; Kroket|Croquette|Rundvleeskroket|Croquettes|Kroketten; Bitterballen|Bitterballen|Bitterbal;
      Kipnuggets|Chicken nuggets|Nuggets; Mexicano|Mexicano|Mexicaan; Bicky Burger|Bicky Burger|Bicky; Kaaskroket|Cheese croquette; Loempia|Spring roll|Loempias;
      Viandel|Viandel|Viandelle; Sitostick|Sitostick; Boulet|Boulet|Bal|Gehaktbal|Meatball; Cervela|Cervelat|Cervelaat|Cervela; Lucifer|Lucifer|Lucifers;
      Kipcorn|Kipcorn|Chickencorn; Bamischijf|Bami slice|Bamihap; Nasischijf|Nasi slice|Nasibal; Kaassoufflé|Cheese soufflé|Kaassouffle; Uienringen|Onion rings|Onion ring;
      Mozzarellasticks|Mozzarella sticks; Visstick|Fish finger|Fish stick|Vissticks; Calamares|Calamari|Inktvisringen|Squid rings; Kipfilet|Chicken fillet|Kippenreepjes|Chicken strips;
      Hamburger|Burger|Hamburger; Berenklauw|Berenklauw|Bear's claw; Pikanto|Pikanto; Shaslick|Shashlik|Brochette|Kebab skewer;
      Kipschnitzel|Chicken schnitzel|Schnitzel; Garnaalkroket|Shrimp croquette|Garnalenkroket; Mosselen|Mussels|Gefrituurde mosselen; Gefrituurde vis|Fish and chips|Vis|Fish;
      Kaasstick|Cheese stick|Cheese sticks; Jalapeño poppers|Jalapeño poppers|Poppers; Kipvleugeltjes|Chicken wings|Wings;
      Patatje oorlog|Patatje oorlog|Friet oorlog; Kapsalon|Kapsalon; Zoete aardappelfrietjes|Sweet potato fries; Rösti|Rösti|Rosti; Kroketjes van aardappel|Potato croquettes|Aardappelkroketjes;
      Gefrituurde Mars|Deep-fried Mars bar; Churros|Churros|Churro; Smoutebollen|Doughnut balls|Oliebollen|Oliebol; Beignet|Beignet|Beignets; Tempura; Samosa|Samosa|Samosa's; Falafel; Kaasballetjes|Cheese balls; Kiptenders|Chicken tenders|Tenders` },

    { id: 'bbq', lvl: 1, nl: 'Noem iets dat je op de barbecue legt', en: 'Name something you put on the barbecue', a: `
      Worst|Sausage|Worstjes|Sausages|Braadworst|Bratwurst; Hamburger|Burger|Hamburgers; Spareribs|Spare ribs|Ribs|Ribbetjes; Kip|Chicken|Kippenbout|Chicken leg|Kippenboutjes|Drumsticks;
      Brochette|Kebab|Spies|Skewer|Satéstokje|Satay; Steak|Steak|Biefstuk; Merguez; Kotelet|Chop|Varkenskotelet|Pork chop; Spek|Bacon; Vis|Fish;
      Zalm|Salmon; Scampi|Prawns|Garnalen|Shrimp|Gamba's|King prawns; Maïs|Corn on the cob|Maiskolf|Maïskolf|Corn; Paprika|Peppers|Pepper; Courgette|Courgette|Zucchini;
      Champignons|Mushrooms|Champignon|Mushroom; Ui|Onion|Uien|Onions; Tomaat|Tomato|Tomaten; Aardappel|Potato|Aardappelen in folie|Jacket potato|Potatoes;
      Halloumi; Feta|Feta in folie; Groenteburger|Veggie burger|Vegetarische burger; Tofu; Lamskotelet|Lamb chop|Lamskoteletjes|Lamb chops; Lamsvlees|Lamb;
      Kalkoen|Turkey; Kippenvleugels|Chicken wings|Wings|Kippenvleugeltjes; Gehaktballetjes|Meatballs|Gehaktbal; Chipolata|Chipolata|Chipolata's; Cervela|Cervelat;
      Ananas|Pineapple; Banaan met chocolade|Banana with chocolate|Banaan|Banana; Marshmallows|Marshmallows|Spekjes|Marshmallow; Stokbrood|Baguette|Brood|Bread|Look­brood|Garlic bread;
      Pizza|Pizza|Barbecuepizza; Tonijn|Tuna|Tonijnsteak; Kreeft|Lobster; Mosselen|Mussels; Sardines|Sardines|Sardientjes; Makreel|Mackerel; Forel|Trout;
      Asperges|Asparagus|Asperge; Aubergine|Aubergine|Eggplant; Pompoen|Pumpkin; Zoete aardappel|Sweet potato; Knoflook|Garlic; Prei|Leek; Venkel|Fennel;
      Picanha; Entrecote|Entrecôte|Ribeye|Rib-eye; T-bone|T-bone steak|T-bonesteak; Pulled pork; Brisket; Hotdog|Hot dog|Hotdogs; Shoarma|Shawarma|Gyros;
      Kaas|Cheese|Camembert|Camembert in folie; Perzik|Peach; Watermeloen|Watermelon; Appel met kaneel|Baked apple|Appel|Apple; Toast|Toast|Geroosterd brood` },

    { id: 'soups', lvl: 1, nl: 'Noem een soep', en: 'Name a soup', a: `
      Tomatensoep|Tomato soup; Kippensoep|Chicken soup|Kippenbouillon; Groentesoep|Vegetable soup; Erwtensoep|Pea soup|Snert; Uiensoep|Onion soup|Franse uiensoep|French onion soup;
      Pompoensoep|Pumpkin soup; Champignonsoep|Mushroom soup; Aspergesoep|Asparagus soup; Preisoep|Leek soup|Aardappel-preisoep|Leek and potato soup; Minestrone;
      Tomatensoep met balletjes|Tomato soup with meatballs|Balletjessoep; Wortelsoep|Carrot soup; Broccolisoep|Broccoli soup; Bloemkoolsoep|Cauliflower soup;
      Gazpacho; Goulashsoep|Goulash soup|Goulash; Vissoep|Fish soup|Bouillabaisse; Miso|Miso soup|Misosoep; Ramen; Pho|Pho|Phở; Tom yum|Tom yum|Tom yum soup|Tom yam;
      Linzensoep|Lentil soup; Bonensoep|Bean soup; Courgettesoep|Courgette soup; Spinaziesoep|Spinach soup; Kervelsoep|Chervil soup;
      Borsjtsj|Borscht|Bietensoep|Beetroot soup; Chowder|Clam chowder|Mosselsoep|Mussel soup; Waterzooi|Waterzooi|Gentse waterzooi; Harira; Mulligatawny;
      Tortillasoep|Tortilla soup; Wan tan|Wonton soup|Wantansoep; Kippensoep met noedels|Chicken noodle soup|Noedelsoep|Noodle soup; Laksa; Soto ayam|Soto ayam|Soto;
      Zuurkoolsoep|Sauerkraut soup; Koude komkommersoep|Cold cucumber soup|Komkommersoep|Cucumber soup; Vichyssoise; Bisque|Bisque|Kreeftensoep|Lobster bisque|Kreeftenbisque; Kaassoep|Cheese soup|Beer cheese soup; Knoflooksoep|Garlic soup; Avgolemono; Ribollita; Pasta e fagioli|Pasta e fagioli; Shchi|Kool­soep|Cabbage soup|Koolsoep; Zuppa toscana|Zuppa toscana; Egusi|Egusi soup; Chorba|Chorba|Shorba; Callaloo` },

    { id: 'italian', lvl: 1, nl: 'Noem een Italiaans gerecht', en: 'Name an Italian dish', a: `
      Pizza; Spaghetti bolognese|Spaghetti bolognese|Spaghetti|Bolognese|Spag bol; Lasagne|Lasagne|Lasagna; Risotto; Tiramisu|Tiramisu|Tiramisù; Carbonara|Carbonara|Spaghetti carbonara;
      Ravioli; Gnocchi; Pizza Margherita|Margherita|Margarita; Pasta|Pasta|Penne|Tagliatelle|Fusilli|Macaroni; Bruschetta; Calzone; Minestrone; Panna cotta|Panna cotta|Pannacotta;
      Carpaccio; Focaccia; Pesto|Pesto|Pasta pesto; Cannelloni; Tortellini; Arancini; Osso buco|Osso buco|Ossobuco; Saltimbocca; Vitello tonnato;
      Caprese|Caprese|Insalata caprese|Tomaat-mozzarella; Gelato|Gelato|Italiaans ijs|Italian ice cream; Polenta; Parmigiana|Aubergine parmigiana|Melanzane alla parmigiana|Eggplant parmesan;
      Pasta arrabbiata|Arrabbiata|Penne arrabbiata; Spaghetti aglio e olio|Aglio e olio; Cacio e pepe; Amatriciana|Amatriciana|Spaghetti all'amatriciana; Pasta alla vongole|Spaghetti alle vongole|Vongole;
      Pasta puttanesca|Puttanesca; Risotto ai funghi|Mushroom risotto|Paddenstoelenrisotto; Risotto alla milanese|Risotto milanese; Piadina; Panzerotti|Panzerotti|Panzerotto;
      Cannoli; Panettone; Biscotti|Biscotti|Cantuccini; Zabaione|Zabaglione|Zabaione; Affogato; Granita; Semifreddo; Antipasti|Antipasto|Antipasti;
      Prosciutto e melone|Melon and ham|Meloen met ham; Ciabatta; Grissini; Fritto misto; Pizza diavola|Diavola;
      Pasta al forno|Baked pasta; Trofie al pesto|Trofie; Bucatini; Pappardelle; Ragù|Ragù|Ragu; Porchetta; Bistecca alla fiorentina|Florentine steak|Fiorentina;
      Vitello alla milanese|Cotoletta alla milanese|Milanese; Supplì|Suppli; Crostini; Sfogliatella|Sfogliatelle; Pizza bianca; Frittata; Torta della nonna` },

    { id: 'sandwich', lvl: 1, nl: 'Noem iets dat je op je boterham legt', en: 'Name something you put on a slice of bread', a: `
      Kaas|Cheese; Ham; Choco|Chocolate spread|Chocopasta|Nutella; Confituur|Jam|Jam|Konfituur; Pindakaas|Peanut butter; Boter|Butter; Hagelslag|Chocolate sprinkles|Sprinkles|Chocoladehagel;
      Salami; Kip|Chicken|Kipfilet|Chicken slices; Tomaat|Tomato; Ei|Egg|Gekookt ei|Boiled egg; Sla|Lettuce; Komkommer|Cucumber; Smeerkaas|Cream cheese|Philadelphia;
      Honing|Honey; Speculoospasta|Speculoos spread|Biscoff spread; Filet americain|Steak tartare|Préparé|Filet américain; Paté|Pâté|Leverpastei|Liver pâté; Tonijnsalade|Tuna salad|Tonijn|Tuna;
      Kipcurry|Coronation chicken|Kip curry; Krabsalade|Crab salad|Surimi; Eiersalade|Egg salad|Egg mayonnaise; Avocado; Hummus; Bacon|Bacon|Spek; Gerookte zalm|Smoked salmon|Zalm|Salmon;
      Brie; Mozzarella; Gouda; Mosterd|Mustard; Mayonaise|Mayonnaise|Mayo; Ketchup; Banaan|Banana; Appelstroop|Apple syrup|Sirop|Stroop; Suiker|Sugar|Bruine suiker|Brown sugar;
      Muisjes|Aniseed sprinkles|Gestampte muisjes; Vlokken|Chocolate flakes|Chocoladevlokken;
      Kalkoenfilet|Turkey slices|Kalkoen|Turkey; Chorizo; Parmaham|Parma ham|Prosciutto; Rauwe ham|Cured ham|Serranoham|Serrano ham; Gegrilde groenten|Grilled vegetables;
      Pesto; Tapenade; Augurk|Gherkin|Pickle|Augurken; Ui|Onion|Uitjes; Radijs|Radish|Radijsjes;
      Marmite|Marmite|Vegemite; Smeerworst|Spreadable sausage|Smeerleverworst|Liverwurst` },

    { id: 'hot-drinks', lvl: 1, nl: 'Noem een warme drank', en: 'Name a hot drink', a: `
      Koffie|Coffee; Thee|Tea; Warme chocomelk|Hot chocolate|Chocolademelk|Chocomelk|Cocoa; Cappuccino; Latte|Latte|Koffie verkeerd|Latte macchiato|Caffè latte;
      Espresso; Groene thee|Green tea; Muntthee|Mint tea|Verse munt|Fresh mint tea; Kamillethee|Camomile tea|Kamille; Glühwein|Mulled wine|Warme wijn;
      Chai|Chai|Chai latte|Masala chai; Macchiato; Americano; Soep|Soup|Bouillon|Broth; Warme melk|Hot milk|Melk met honing|Milk with honey; Irish coffee;
      Gemberthee|Ginger tea|Gember; Rooibos|Rooibos|Rooibosthee; Earl Grey; Citroenthee|Lemon tea; Matcha|Matcha|Matcha latte; Mocha|Mocha|Mokka|Caffè mocha;
      Flat white; Cortado; Ristretto; Lungo; Kruidenthee|Herbal tea; Vruchtenthee|Fruit tea; Zwarte thee|Black tea; Jasmijnthee|Jasmine tea; Oolong|Oolong tea;
      Pepermuntthee|Peppermint tea; Brandnetelthee|Nettle tea; Lindebloesemthee|Lime blossom tea; Hete citroen|Hot lemon|Hot toddy; Grog; Warme appelsap|Hot apple juice|Warme cider|Hot cider;
      Kurkumamelk|Golden milk|Turmeric latte; Wiener Melange|Wiener Melange; Café au lait|Café au lait; Turkse koffie|Turkish coffee;
      Pumpkin spice latte|Pumpkin spice latte|PSL; Salep|Sahlep|Salep; Atole; Glögg; Eggnog|Eggnog|Advocaat` },

    { id: 'cakes', lvl: 2, nl: 'Noem een soort taart of gebak', en: 'Name a type of cake or pastry', a: `
      Chocoladetaart|Chocolate cake; Appeltaart|Apple pie|Apple tart; Cheesecake|Cheesecake|Kwarktaart; Aardbeientaart|Strawberry tart|Strawberry cake; Tiramisu|Tiramisu|Tiramisù;
      Cupcake|Cupcake|Cupcakes; Muffin|Muffin|Muffins; Brownie|Brownie|Brownies; Donut|Doughnut|Donut|Donuts; Croissant; Éclair|Eclair|Éclair|Eclairs;
      Rijsttaart|Rice tart|Rice pudding tart|Rijstevlaai; Kersentaart|Cherry pie|Cherry tart; Wortelcake|Carrot cake|Worteltaart; Bananenbrood|Banana bread;
      Cake|Pound cake|Cake|Marmercake|Marble cake; Zwarte Woud-taart|Black Forest gateau|Black Forest cake|Schwarzwälder Kirschtorte; Frangipane|Frangipane|Frangipanetaart;
      Merveilleux; Vlaai|Vlaai|Limburgse vlaai; Bladerdeeggebak|Puff pastry|Millefeuille|Mille-feuille|Tompouce|Tompoes;
      Soes|Choux bun|Soesjes|Profiterole|Profiteroles; Macaron|Macaron|Macarons; Citroentaart|Lemon tart|Lemon meringue pie|Tarte au citron; Pecantaart|Pecan pie;
      Pompoentaart|Pumpkin pie; Red velvet|Red velvet cake|Red velvet; Victoria sponge|Victoria sponge|Victoriataart;
      Baklava; Strudel|Apple strudel|Apfelstrudel|Appelstrudel; Tarte tatin|Tarte Tatin; Clafoutis; Crumble|Apple crumble|Crumble; Pavlova; Meringue|Meringue|Schuimtaart|Meringues;
      Bossche bol|Bossche bol|Bosschebol; Berliner|Berliner|Berlinerbol|Jelly doughnut; Kaneelbroodje|Cinnamon roll|Cinnamon bun|Kanelbulle; Pain au chocolat|Pain au chocolat|Chocoladebroodje|Chocolate croissant;
      Koffiekoek|Danish pastry|Danish|Deense koffiekoek; Suikerwafel|Sugar waffle|Luikse wafel|Liège waffle; Brusselse wafel|Brussels waffle; Cake pops|Cake pop|Cake pops;
      Trifle; Saint-Honoré|St Honoré cake|Saint Honoré; Paris-Brest; Kouign-amann; Canelé|Canelé|Cannelé; Mochi; Pastel de nata|Pastel de nata|Pastéis de nata|Natillas;
      Taart met slagroom|Cream cake|Slagroomtaart; Ijstaart|Ice cream cake; Verjaardagstaart|Birthday cake; Bruidstaart|Wedding cake` },

    { id: 'crisps', lvl: 2, nl: 'Noem een smaak chips', en: 'Name a crisp (potato chip) flavour', a: `
      Paprika; Zout|Salted|Ready salted|Naturel|Gezouten; Pickles|Pickles|Augurk; Bolognese; Kaas en ui|Cheese and onion; Barbecue|Barbecue|BBQ;
      Zout en azijn|Salt and vinegar|Azijn|Vinegar; Sweet chili|Sweet chilli|Sweet chili; Peper en zout|Salt and pepper|Peper|Pepper; Ketchup; Ham en kaas|Ham and cheese;
      Bacon|Bacon|Spek; Cheese|Cheese|Kaas; Ui|Onion|Sour cream and onion|Zure room en ui; Pizza; Hamburger|Hamburger|Burger; Kip|Chicken|Roast chicken|Kippensmaak;
      Jalapeño|Jalapeño|Jalapeno; Wasabi; Truffel|Truffle|Truffelchips; Rozemarijn|Rosemary; Thaise curry|Thai curry|Curry; Paprika gerookt|Smoked paprika;
      Mexicaanse kruiden|Mexican spice; Tomaat|Tomato; Chorizo; Mosterd|Mustard|Honingmosterd|Honey mustard; Kebab|Kebab|Shoarma; Cheeseburger; Prawn cocktail|Prawn cocktail|Garnaal|Shrimp;
      Biefstuk|Steak|Steak and onion; Worcestershire|Worcestershire sauce; Mayonaise|Mayonnaise|Frietsaus; Andalouse; Samurai;
      Zeewier|Seaweed; Tzatziki; Teriyaki; Kimchi; Habanero; Yoghurt en munt|Yoghurt and mint;
      Ribbetjes|Ribs|Spareribs; Mozzarella en tomaat|Mozzarella and tomato; Pesto; Olijf|Olive; Feta; Look|Garlic|Knoflook; Limoen|Lime|Chili-limoen|Chilli and lime; Zeezout|Sea salt` },

    { id: 'meat', lvl: 2, nl: 'Noem een soort vlees of vleeswaren', en: 'Name a type of meat or cold cut', a: `
      Kip|Chicken; Varkensvlees|Pork; Rundvlees|Beef; Ham; Gehakt|Mince|Minced meat; Spek|Bacon; Worst|Sausage|Worsten; Salami; Steak|Steak|Biefstuk;
      Lamsvlees|Lamb|Lam; Kalkoen|Turkey; Kalfsvlees|Veal|Kalf; Eend|Duck; Konijn|Rabbit; Paardenvlees|Horse meat|Paard; Hert|Venison|Hertenvlees;
      Everzwijn|Wild boar; Fazant|Pheasant; Patrijs|Partridge; Kwartel|Quail; Gans|Goose; Struisvogel|Ostrich; Kangoeroe|Kangaroo; Geit|Goat|Geitenvlees;
      Schapenvlees|Mutton; Filet americain|Steak tartare|Tartaar; Kotelet|Chop|Karbonade; Spareribs|Spare ribs|Ribs; Kippenbout|Chicken leg|Drumstick; Kipfilet|Chicken breast|Kippenborst;
      Entrecote|Entrecôte|Ribeye|Rib-eye; Ossenhaas|Fillet steak|Tenderloin|Filet pur; Rosbief|Roast beef; Gebraad|Roast|Varkensgebraad|Roast pork; Stoofvlees|Stew|Stoofvlees met friet|Beef stew;
      Chorizo; Pepperoni; Prosciutto|Prosciutto|Parmaham|Parma ham; Serranoham|Serrano ham|Jamón; Pancetta; Mortadella; Paté|Pâté|Leverpastei|Liver pâté;
      Cervela|Cervelat|Cervelaat; Knakworst|Frankfurter|Knakworstje|Hot dog sausage; Bloedworst|Black pudding|Blood sausage; Witte pens|White pudding|Beuling;
      Kippenlever|Chicken liver|Lever|Liver; Niertjes|Kidneys|Nier|Kidney; Tong|Tongue; Pens|Tripe; Merguez; Chipolata; Gyros|Gyros|Shoarma|Shawarma|Doner|Döner;
      Pastrami; Corned beef; Bresaola; Coppa; Pulled pork; Brisket; Wagyu|Wagyu|Kobe|Kobe beef; Kikkerbilletjes|Frogs' legs|Frog legs` },

    { id: 'coffee', lvl: 2, nl: 'Noem een koffiedrank (zoals cappuccino)', en: 'Name a coffee drink (like cappuccino)', a: `
      Cappuccino; Espresso; Latte|Latte|Caffè latte|Koffie verkeerd|Latte macchiato; Americano|Americano|Caffè americano; Macchiato|Macchiato|Espresso macchiato;
      Mocha|Mocha|Mokka|Caffè mocha; Flat white; Ijskoffie|Iced coffee|Iced latte; Irish coffee; Cortado; Ristretto; Lungo; Dubbele espresso|Double espresso|Doppio;
      Frappuccino|Frappuccino; Zwarte koffie|Black coffee|Filterkoffie|Filter coffee; Koffie met melk|White coffee|Coffee with milk; Café au lait|Café au lait;
      Affogato; Turkse koffie|Turkish coffee; Cold brew; Espresso tonic|Espresso tonic; Dalgona|Dalgona coffee|Dalgona-koffie; Pumpkin spice latte|Pumpkin spice latte|PSL;
      Caramel macchiato|Caramel macchiato; Vanille latte|Vanilla latte; Hazelnoot latte|Hazelnut latte; Wiener Melange|Wiener Melange|Viennese coffee|Weense koffie;
      Einspänner; Café bombón|Café bombón|Bombon; Café de olla; Vietnamese ijskoffie|Vietnamese iced coffee|Cà phê sữa đá; Frappé|Greek frappé|Griekse frappé;
      Freddo espresso|Freddo; Red eye|Red eye|Dead eye; Café crème|Café crème|Caffè crema; Galão; Bicerin; Romano|Espresso romano; Breve|Breve|Café breve; Cafezinho; Oploskoffie|Instant coffee|Nescafé; Piccolo|Piccolo latte|Piccolo; Babyccino` },

    { id: 'pets', lvl: 1, nl: 'Noem een huisdier', en: 'Name a pet', a: `
      Hond|Dog; Kat|Cat|Poes; Konijn|Rabbit; Hamster; Goudvis|Goldfish|Vis|Fish; Cavia|Guinea pig; Parkiet|Budgie|Grasparkiet|Budgerigar; Papegaai|Parrot;
      Schildpad|Tortoise|Turtle; Muis|Mouse; Rat; Paard|Horse; Kanarie|Canary; Slang|Snake; Hagedis|Lizard|Gekko|Gecko; Kip|Chicken|Kippen; Pony;
      Fret|Ferret; Chinchilla; Gerbil|Gerbil|Woestijnrat; Degoe|Degu; Egel|Hedgehog|Dwergegel|Pygmy hedgehog; Kaketoe|Cockatoo;
      Ara|Macaw; Duif|Pigeon|Duiven|Pigeons; Eend|Duck; Geit|Goat; Schaap|Sheep; Varken|Pig|Hangbuikzwijn|Pot-bellied pig|Minivarken|Micro pig; Ezel|Donkey;
      Lama|Llama; Alpaca; Bearded dragon|Bearded dragon|Baardagaam; Leguaan|Iguana; Kameleon|Chameleon; Kikker|Frog; Axolotl; Spin|Spider|Vogelspin|Tarantula;
      Wandelende tak|Stick insect; Mieren|Ants|Mierenkolonie|Ant farm; Schorpioen|Scorpion; Slak|Snail|Reuzenslak|Giant snail; Tropische vis|Tropical fish|Guppy|Neontetra;
      Koi|Koi|Koikarper; Krab|Crab|Heremietkreeft|Hermit crab; Zeepaardje|Seahorse; Kwartel|Quail; Uil|Owl;
      Suikereekhoorn|Sugar glider; Stinkdier|Skunk; Capibara|Capybara; Tamagotchi|Tamagotchi|Virtueel huisdier|Virtual pet` },

    { id: 'baby-animals', lvl: 2, nl: 'Noem de naam van een jong dier (zoals een lam)', en: 'Name a word for a baby animal (like a lamb)', a: `
      Puppy|Puppy|Pup|Pups; Kitten|Kitten|Poesje; Lam|Lamb|Lammetje; Kalf|Calf|Kalfje; Kuiken|Chick|Kuikentje; Veulen|Foal; Big|Piglet|Biggetje|Varkentje;
      Welp|Cub|Welpje; Eendje|Duckling|Eendjes|Ducklings; Kikkervisje|Tadpole; Rups|Caterpillar; Jong|Young|Jongen;
      Gansje|Gosling|Gansjes; Reekalf|Fawn|Hertenkalf|Hertje; Uilskuiken|Owlet|Uiltje;
      Arendsjong|Eaglet; Pop|Pupa|Cocon|Cocoon; Kuit|Spawn|Visjes|Fry|Avenka; Elver|Elver|Glasaal|Glass eel; Walvisjong|Whale calf; Zeehondenjong|Seal pup|Huiler; Hatchling|Hatchling|Uitgekomen jong;
      Puggle|Puggle|Vogelbekdierjong; Vossenjong|Fox kit; Nestjong|Nestling; Vliegvlug jong|Fledgling|Uitvlieger;
      Giraffenjong|Giraffe calf; Leeuwenwelp|Lion cub; Berenjong|Bear cub; Tijgerwelp|Tiger cub` },

    { id: 'animal-sounds', lvl: 2, nl: 'Noem een geluid dat een dier maakt (zoals blaffen)', en: 'Name a sound an animal makes (like barking)', a: `
      Blaffen|Bark|Barking|Woef|Woof; Miauwen|Meow|Miauw|Mew; Loeien|Moo|Boe|Mooing; Mekkeren|Baa|Blaten|Bleat|Bleating|Mèh; Knorren|Oink|Grunt|Knor;
      Kukeleku|Cock-a-doodle-doo|Kraaien|Crow|Crowing; Kwaken|Quack|Kwak|Kwaak; Hinniken|Neigh|Whinny; Brullen|Roar|Gebrul|Roaring; Sissen|Hiss|Gesis|Hissing;
      Tjilpen|Tweet|Chirp|Fluiten|Whistle|Kwetteren|Twitter; Zoemen|Buzz|Gezoem|Buzzing; Huilen|Howl|Janken|Howling; Spinnen|Purr|Purring|Gespin; Grommen|Growl|Gegrom|Growling;
      Oehoe|Hoot|Oe-hoe|Hooting; Ribbit|Croak; Kakelen|Cluck|Tok tok|Clucking; Krassen|Caw|Kra kra|Cawing; Snateren|Gaggle|Gakken|Honk|Honking;
      Trompetteren|Trumpet|Trumpeting; Balken|Bray|Ia|Hee-haw|Iaa; Piepen|Squeak|Piep|Squeaking; Koeren|Coo|Kirren|Cooing;
      Krijsen|Screech|Gekrijs|Shriek; Snuiven|Snort|Gesnuif; Zingen|Sing|Song|Walvisgezang|Whale song; Klikken|Click|Clicking; Kloppen|Drumming|Roffelen|Tapping; Brommen|Hum|Humming|Gebrom` },

    { id: 'dangerous-animals', lvl: 1, nl: 'Noem een gevaarlijk dier', en: 'Name a dangerous animal', a: `
      Haai|Shark|Witte haai|Great white shark; Leeuw|Lion; Krokodil|Crocodile; Slang|Snake|Gifslang|Venomous snake; Tijger|Tiger; Beer|Bear|Grizzlybeer|Grizzly bear|IJsbeer|Polar bear;
      Spin|Spider|Zwarte weduwe|Black widow|Vogelspin|Tarantula; Schorpioen|Scorpion; Kwal|Jellyfish|Kubuskwal|Box jellyfish; Mug|Mosquito; Nijlpaard|Hippo|Hippopotamus;
      Wolf; Olifant|Elephant; Neushoorn|Rhino|Rhinoceros; Cobra|Cobra|Koningscobra|King cobra; Ratelslang|Rattlesnake; Python|Python|Wurgslang|Constrictor; Anaconda;
      Piranha; Alligator; Jaguar; Luipaard|Leopard; Poema|Puma|Cougar|Bergleeuw|Mountain lion; Gorilla; Buffel|Buffalo|Kaapse buffel|Cape buffalo; Hyena;
      Black mamba|Black mamba|Zwarte mamba; Pijlgifkikker|Poison dart frog|Gifkikker; Kogelvis|Pufferfish|Fugu; Blauwgeringde octopus|Blue-ringed octopus; Steenvis|Stonefish;
      Orka|Orca|Killer whale; Barracuda; Murene|Moray eel|Moray; Pieterman|Weever fish; Koraalslang|Coral snake; Adder|Adder|Viper|Addersoort; Taipan|Taipan|Inland taipan;
      Komodovaraan|Komodo dragon; Gila-monster|Gila monster; Wesp|Wasp; Horzel|Hornet|Aziatische hoornaar|Asian hornet; Bij|Bee|Moordbij|Killer bee; Mier|Ant|Kogelmier|Bullet ant|Vuurmier|Fire ant;
      Tseetseevlieg|Tsetse fly; Teek|Tick; Rat; Kaaiman|Caiman; Stier|Bull; Eland|Moose; Struisvogel|Ostrich; Kasuaris|Cassowary;
      Zeeslang|Sea snake; Sidderaal|Electric eel; Pijlstaartrog|Stingray; Stierhaai|Bull shark; Bavianen|Baboon|Baviaan` },

    { id: 'forest', lvl: 1, nl: 'Noem een dier dat je in een Europees bos kan zien', en: 'Name an animal you can see in a European forest', a: `
      Hert|Deer|Edelhert|Red deer; Ree|Roe deer|Reetje; Vos|Fox; Everzwijn|Wild boar|Wild zwijn; Eekhoorn|Squirrel|Rode eekhoorn|Red squirrel; Uil|Owl|Bosuil|Tawny owl;
      Specht|Woodpecker|Grote bonte specht; Konijn|Rabbit; Haas|Hare; Egel|Hedgehog; Das|Badger; Wolf; Muis|Mouse|Bosmuis|Wood mouse; Vogel|Bird|Vogels;
      Merel|Blackbird; Mees|Tit|Koolmees|Great tit|Pimpelmees|Blue tit; Vlaamse gaai|Jay|Gaai; Buizerd|Buzzard; Havik|Goshawk|Hawk; Kikker|Frog; Pad|Toad;
      Salamander|Salamander|Vuursalamander|Fire salamander; Slak|Snail|Naaktslak|Slug; Mier|Ant|Bosmier|Wood ant; Spin|Spider; Kever|Beetle|Vliegend hert|Stag beetle;
      Teek|Tick; Mug|Mosquito; Vlinder|Butterfly; Vleermuis|Bat; Boommarter|Pine marten|Marter|Marten; Wezel|Weasel; Hermelijn|Stoat|Ermine; Lynx|Lynx|Los;
      Bruine beer|Brown bear|Beer|Bear; Wisent|European bison|Bizon; Eland|Elk|Moose; Slang|Snake|Adder|Gladde slang|Smooth snake;
      Hazelworm|Slow worm; Hagedis|Lizard|Levendbarende hagedis; Koekoek|Cuckoo; Roodborstje|Robin; Winterkoning|Wren; Boomklever|Nuthatch; Houtduif|Wood pigeon|Duif;
      Fazant|Pheasant; Houtsnip|Woodcock; Raaf|Raven; Wespendief|Honey buzzard; Oehoe|Eagle owl; Zwarte specht|Black woodpecker; Hazelmuis|Hazel dormouse|Slaapmuis|Dormouse;
      Woelmuis|Vole; Mol|Mole; Spitsmuis|Shrew; Moeflon|Mouflon; Damhert|Fallow deer; Steenbok|Ibex; Bever|Beaver; Otter` },

    { id: 'eggs', lvl: 2, nl: 'Noem een dier dat eieren legt', en: 'Name an animal that lays eggs', a: `
      Kip|Chicken|Hen; Vogel|Bird|Vogels; Eend|Duck; Vis|Fish; Slang|Snake; Schildpad|Turtle|Tortoise|Zeeschildpad|Sea turtle; Krokodil|Crocodile; Kikker|Frog;
      Struisvogel|Ostrich; Pinguïn|Penguin; Dinosaurus|Dinosaur; Hagedis|Lizard; Spin|Spider; Insect|Insect|Insecten; Vlinder|Butterfly; Mier|Ant|Koningin|Queen ant;
      Bij|Bee|Bijenkoningin|Queen bee; Vogelbekdier|Platypus; Mierenegel|Echidna; Gans|Goose; Kwartel|Quail; Kalkoen|Turkey; Zwaan|Swan; Duif|Pigeon|Dove;
      Uil|Owl; Arend|Eagle; Papegaai|Parrot; Ooievaar|Stork; Emoe|Emu; Kiwi|Kiwi|Kiwi bird; Zalm|Salmon; Haai|Shark|Hondshaai|Catshark;
      Octopus|Octopus|Inktvis|Squid; Slak|Snail; Kreeft|Lobster; Krab|Crab; Garnaal|Shrimp|Prawn; Salamander; Pad|Toad; Alligator; Leguaan|Iguana; Kameleon|Chameleon;
      Gekko|Gecko; Python; Cobra; Mug|Mosquito; Vlieg|Fly; Lieveheersbeestje|Ladybird|Ladybug; Kakkerlak|Cockroach; Sprinkhaan|Grasshopper; Luis|Louse|Luizen|Lice;
      Teek|Tick; Zeester|Starfish; Kwal|Jellyfish; Mossel|Mussel; Oester|Oyster; Regenworm|Earthworm; Koekoek|Cuckoo; Kolibrie|Hummingbird;
      Flamingo; Pauw|Peacock|Peahen; Komodovaraan|Komodo dragon; Zeepaardje|Seahorse; Karper|Carp; Steur|Sturgeon|Kaviaar|Caviar` },
  ]);

  B.addQuestions('sport', [
    { id: 'helmet', lvl: 2, nl: 'Noem een sport waarbij je een helm draagt', en: 'Name a sport where you wear a helmet', a: `
      Fietsen|Cycling|Wielrennen|Road cycling; Formule 1|Formula 1|F1|Autoracen|Motor racing; Ijshockey|Ice hockey; American football|American football|Football;
      Motorcross|Motocross; Motorracen|Motorcycle racing|MotoGP; Boksen|Boxing|Boxing; Paardrijden|Horse riding|Springruiter|Show jumping|Jockey|Horse racing;
      Skiën|Skiing; Snowboarden|Snowboarding; Klimmen|Climbing|Rotsklimmen|Rock climbing|Bergbeklimmen|Mountaineering; Mountainbiken|Mountain biking|MTB;
      BMX; Skateboarden|Skateboarding; Bobsleeën|Bobsleigh|Bobslee; Skeleton; Rodelen|Luge; Honkbal|Baseball; Cricket; Hurling; Lacrosse;
      Kajak|Kayaking|Wildwaterkajak|Whitewater kayaking; Rafting; Karting|Go-karting|Karten; Rallyrijden|Rally|Rally driving; Polo;
      Inline skaten|Inline skating|Skeeleren; Rollerderby|Roller derby; Schermen|Fencing; Taekwondo; Kickboksen|Kickboxing; Rugby|Rugby; Waterpolo|Water polo;
      Paragliden|Paragliding; Skydiven|Skydiving|Parachutespringen; Speleologie|Caving|Grotten verkennen; Canyoning; Bandy; Kanopolo|Canoe polo; Trial|Trials|Motortrial;
      Ijsklimmen|Ice climbing; Downhill|Downhill mountain biking; Baanwielrennen|Track cycling; Triatlon|Triathlon; Cyclocross|Cyclo-cross|Veldrijden` },

    { id: 'football-clubs', lvl: 1, nl: 'Noem een Europese voetbalclub', en: 'Name a European football club', a: `
      Real Madrid; FC Barcelona|Barcelona|Barça|Barca; Manchester United|Manchester United|Man United|Man Utd; Liverpool; Bayern München|Bayern Munich|Bayern; Juventus;
      Chelsea; Arsenal; Manchester City|Manchester City|Man City; Paris Saint-Germain|Paris Saint-Germain|PSG; AC Milan|AC Milan|Milan; Inter Milaan|Inter Milan|Inter|Internazionale;
      Ajax; Borussia Dortmund|Borussia Dortmund|Dortmund|BVB; Atlético Madrid|Atlético Madrid|Atletico Madrid|Atlético; Tottenham Hotspur|Tottenham Hotspur|Tottenham|Spurs;
      Club Brugge|Club Brugge|Club Bruges; Anderlecht|Anderlecht|RSC Anderlecht; PSV|PSV|PSV Eindhoven; Feyenoord; Benfica; FC Porto|Porto; AS Roma|Roma; Napoli|SSC Napoli|Napels;
      Celtic; Rangers; Olympique Marseille|Marseille|Olympique de Marseille|OM; Olympique Lyon|Lyon|Olympique Lyonnais; Sporting Lissabon|Sporting CP|Sporting Lisbon|Sporting;
      Galatasaray; Fenerbahçe|Fenerbahce; Besiktas|Beşiktaş|Besiktas; Bayer Leverkusen|Bayer Leverkusen|Leverkusen; RB Leipzig|RB Leipzig|Leipzig; Schalke 04|Schalke|Schalke 04;
      Sevilla|Sevilla FC; Valencia|Valencia CF; Villarreal; Athletic Bilbao|Athletic Club|Bilbao; Real Sociedad; Lazio|SS Lazio; Atalanta; Fiorentina; AS Monaco|Monaco;
      Newcastle United|Newcastle|Newcastle United; Aston Villa; West Ham United|West Ham; Everton; Leeds United|Leeds; Leicester City|Leicester; Nottingham Forest;
      KRC Genk|Genk|Racing Genk; Standard Luik|Standard Liège|Standard; AA Gent|Gent|KAA Gent; Antwerp|Royal Antwerp|Royal Antwerp FC; Union Saint-Gilloise|Union SG|Union;
      AZ|AZ Alkmaar; FC Twente|Twente; Red Bull Salzburg|Salzburg|RB Salzburg; Dinamo Zagreb; Rode Ster Belgrado|Red Star Belgrade|Crvena Zvezda; Olympiakos|Olympiacos;
      Panathinaikos; Shakhtar Donetsk|Shakhtar; Dynamo Kiev|Dynamo Kyiv; Spartak Moskou|Spartak Moscow; Zenit Sint-Petersburg|Zenit|Zenit Saint Petersburg;
      Steaua Boekarest|Steaua Bucharest|FCSB; Ferencváros|Ferencvaros; Slavia Praag|Slavia Prague; Sparta Praag|Sparta Prague; FC Kopenhagen|FC Copenhagen; Malmö FF|Malmo|Malmö;
      Rosenborg; Basel|FC Basel; Young Boys|BSC Young Boys; Wolfsburg|VfL Wolfsburg; Eintracht Frankfurt|Frankfurt; VfB Stuttgart|Stuttgart; Werder Bremen|Bremen; Borussia Mönchengladbach|Gladbach` },
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
