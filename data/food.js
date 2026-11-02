/* Brillion · eten & drinken
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam. */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('food', [
    { id: 'pasta', nl: 'Noem een pastasoort', en: 'Name a type of pasta', a: `
      Spaghetti; Penne; Lasagne|Lasagna|Lasagne; Macaroni; Tagliatelle; Fusilli; Farfalle|Farfalle|Vlinderpasta|Strikjes|Bow-tie pasta;
      Ravioli; Tortellini; Linguine; Fettuccine|Fettuccine|Fettuccini; Rigatoni; Gnocchi; Cannelloni; Orecchiette;
      Conchiglie|Conchiglie|Schelpjes|Shells; Pappardelle; Vermicelli; Orzo|Orzo|Risoni; Capellini|Capellini|Angel hair|Engelenhaar;
      Bucatini; Ziti; Tortiglioni; Cavatappi; Gemelli; Rotini; Paccheri; Ditalini; Tortelloni; Mezze maniche; Sedani; Casarecce;
      Trofie; Strozzapreti; Campanelle; Radiatori; Lumaconi; Cappelletti; Agnolotti; Mafaldine|Mafaldine|Mafalde|Reginette;
      Tagliolini|Tagliolini|Taglierini; Spaghettini; Spaghettoni; Pici; Bigoli; Garganelli; Malloreddus; Fregola|Fregola|Fregula;
      Stelline|Stelline|Sterretjes; Anelli|Anelli|Anellini; Letterpasta|Alphabet pasta|Alfabetpasta|Alfabeto; Calamarata; Mezzelune;
      Corzetti; Culurgiones; Lumache; Gigli; Fiori; Rotelle|Rotelle|Ruote|Wagon wheels; Creste di gallo; Cavatelli; Busiate;
      Gramigna; Maltagliati; Lasagnette; Cannolicchi; Ditali; Tubetti; Pastina; Acini di pepe; Quadretti; Sagne; Scialatielli;
      Tonnarelli; Spaghetti alla chitarra|Spaghetti alla chitarra|Chitarra; Mostaccioli; Elicoidali; Manicotti; Conchiglioni;
      Maccheroni; Spätzle||Spaetzle|Spatzle` },
    { id: 'herbs', nl: 'Noem een kruid of specerij', en: 'Name a herb or spice', a: `
      Peper|Pepper|Zwarte peper|Black pepper; Basilicum|Basil; Peterselie|Parsley; Kaneel|Cinnamon; Oregano|Oregano|Wilde marjolein;
      Rozemarijn|Rosemary; Tijm|Thyme; Paprikapoeder|Paprika|Paprika; Munt|Mint|Pepermunt|Peppermint; Knoflook|Garlic|Look;
      Gember|Ginger; Kurkuma|Turmeric|Geelwortel; Komijn|Cumin; Nootmuskaat|Nutmeg; Kerrie|Curry|Kerriepoeder|Curry powder;
      Dille|Dill; Koriander|Coriander|Cilantro; Bieslook|Chives; Laurier|Bay leaf|Laurierblad|Laurierblaadje;
      Kruidnagel|Clove|Cloves|Kruidnagels; Saffraan|Saffron; Vanille|Vanilla; Cayennepeper|Cayenne pepper|Cayenne;
      Chilipoeder|Chili powder|Chili|Chilipeper|Chili pepper; Salie|Sage; Kardemom|Cardamom; Dragon|Tarragon; Steranijs|Star anise;
      Anijs|Anise|Aniseed; Venkelzaad|Fennel seed|Venkel|Fennel; Majoraan|Marjoram; Kervel|Chervil; Lavas|Lovage|Maggiplant;
      Citroenmelisse|Lemon balm|Melisse; Citroengras|Lemongrass|Sereh; Mosterdzaad|Mustard seed|Mosterd|Mustard;
      Karwij|Caraway|Karwijzaad; Fenegriek|Fenugreek; Piment|Allspice; Jeneverbes|Juniper|Juniper berry|Jeneverbessen; Sumak|Sumac;
      Foelie|Mace; Garam masala; Za'atar|Za'atar|Zaatar; Ras el hanout; Vijfkruidenpoeder|Five-spice|Chinese five spice;
      Kaffirlimoenblad|Kaffir lime leaf|Makrut lime leaf|Djeroek poeroet; Galanga|Galangal|Laos; Mierikswortel|Horseradish; Wasabi;
      Selderijzaad|Celery seed; Bonenkruid|Savory|Savoury; Hysop|Hyssop; Wijnruit|Rue; Bernagie|Borage; Zuring|Sorrel;
      Lavendel|Lavender; Kamille|Chamomile; Ajowan|Ajwain|Carom; Asafoetida|Asafoetida|Duivelsdrek;
      Nigella|Nigella|Zwarte komijn|Black cumin|Kalonji; Sesamzaad|Sesame|Sesam; Maanzaad|Poppy seed|Maanzaadjes;
      Szechuanpeper|Sichuan pepper|Szechuan pepper; Roze peper|Pink pepper|Pink peppercorns; Witte peper|White pepper;
      Groene peper|Green peppercorns|Green pepper; Langwerpige peper|Long pepper|Pippali; Cubebe|Cubeb; Annatto|Annatto|Achiote;
      Tamarinde|Tamarind; Amchur|Amchoor|Mango powder; Kerrieblad|Curry leaf|Curryblad; Pandan|Pandan|Pandanblad; Mahlab|Mahleb;
      Paradijskorrels|Grains of paradise; Zoethout|Liquorice|Licorice|Zoethoutwortel; Cajunkruiden|Cajun spice|Cajun;
      Provençaalse kruiden|Herbes de Provence|Provencaalse kruiden; Fines herbes; Bouquet garni; Speculaaskruiden|Speculaas spice|Koekkruiden;
      Pumpkin spice; Berbere; Baharat; Dukkah; Shichimi togarashi|Shichimi togarashi|Shichimi; Gochugaru; Pimentón|Pimenton|Gerookt paprikapoeder|Smoked paprika` },
    { id: 'fruit', nl: 'Noem een fruitsoort', en: 'Name a fruit', a: `
      Appel|Apple; Banaan|Banana; Peer|Pear; Sinaasappel|Orange|Appelsien; Aardbei|Strawberry; Druif|Grape|Druiven|Grapes; Kiwi;
      Ananas|Pineapple; Mango; Kers|Cherry|Kersen|Cherries; Watermeloen|Watermelon; Citroen|Lemon; Perzik|Peach; Framboos|Raspberry|Frambozen;
      Meloen|Melon; Mandarijn|Mandarin|Tangerine; Pruim|Plum; Blauwe bes|Blueberry|Blauwe bessen|Blueberries; Abrikoos|Apricot;
      Granaatappel|Pomegranate; Kokosnoot|Coconut; Limoen|Lime; Braam|Blackberry|Bramen; Grapefruit|Grapefruit|Pompelmoes;
      Papaja|Papaya; Passievrucht|Passion fruit|Maracuja; Nectarine; Vijg|Fig; Avocado; Tomaat|Tomato; Lychee|Lychee|Litchi;
      Clementine; Dadel|Date|Dadels; Rode bes|Redcurrant|Aalbes|Rode aalbes|Red currant; Zwarte bes|Blackcurrant|Cassis|Zwarte aalbes;
      Kruisbes|Gooseberry|Stekelbes; Cranberry|Cranberry|Veenbes; Drakenvrucht|Dragon fruit|Pitaya|Pitahaya;
      Kaki|Persimmon|Sharonfruit|Sharon fruit; Guave|Guava; Kumquat; Kweepeer|Quince; Rabarber|Rhubarb; Olijf|Olive;
      Sterfruit|Star fruit|Carambola; Honingmeloen|Honeydew|Honeydew melon; Cantaloupe|Cantaloupe|Kantaloepmeloen; Galiameloen|Galia melon;
      Rambutan; Mangosteen|Mangosteen|Manggis; Durian|Durian|Doerian; Jackfruit|Jackfruit|Nangka;
      Physalis|Physalis|Goudbes|Kaapse kruisbes|Cape gooseberry; Moerbei|Mulberry|Moerbeien; Vlierbes|Elderberry|Vlierbessen;
      Sleedoorn|Sloe|Sleebes; Mispel|Medlar; Lijsterbes|Rowan berry|Rowanberry; Duindoornbes|Sea buckthorn|Duindoorn;
      Gojibes|Goji berry|Goji|Wolfberry; Açaí|Acai|Acai berry; Kiwibes|Kiwiberry|Hardy kiwi; Nashi|Nashi pear|Aziatische peer|Asian pear;
      Bloedsinaasappel|Blood orange|Bloedappelsien; Pomelo; Yuzu; Bergamot; Kalamansi|Calamansi; Limequat; Ugli|Ugli fruit; Tangelo;
      Satsuma; Minneola; Vingerlimoen|Finger lime|Caviar lime; Cederaat|Citron|Cedraat; Boeddhahand|Buddha's hand;
      Feijoa|Feijoa|Ananasguave|Pineapple guava; Cherimoya|Cherimoya|Custard apple; Zuurzak|Soursop|Guanabana;
      Suikerappel|Sugar apple|Sweetsop; Pawpaw|Pawpaw|Asimina; Sapodilla|Sapodilla|Sawo; Mamey|Mamey sapote|Sapote;
      Longan|Longan|Drakenoog; Pulasan; Salak|Salak|Slangenvrucht|Snake fruit; Langsat|Langsat|Duku; Santol;
      Jambu|Rose apple|Water apple; Tamarillo|Tamarillo|Boomtomaat|Tree tomato; Pepino|Pepino|Pepinomeloen; Naranjilla|Naranjilla|Lulo;
      Kiwano|Kiwano|Horned melon|Hoornmeloen; Cactusvijg|Prickly pear|Vijgcactus; Baobab|Baobab fruit|Apenbrood; Marula;
      Tamarinde|Tamarind; Jujube|Jujube|Chinese dadel|Red date; Loquat|Loquat|Japanse mispel|Nispero;
      Platte perzik|Flat peach|Donut peach|Wilde perzik; Mirabel|Mirabelle|Mirabelle plum; Reine-claude|Greengage|Reine Claude;
      Kriek|Sour cherry|Morel|Zure kers|Morello; Loganbes|Loganberry; Taybes|Tayberry; Boysenbes|Boysenberry;
      Bosaardbei|Wild strawberry|Wilde aardbei; Bosbes|Bilberry|Blauwbes; Rode bosbes|Lingonberry|Vossenbes|Cowberry; Kraaiheide|Crowberry;
      Honingbes|Haskap|Honeyberry; Aronia|Aronia|Chokeberry|Appelbes; Kornoelje|Cornelian cherry|Gele kornoelje;
      Meidoornbes|Hawthorn berry|Haw; Rozenbottel|Rose hip|Rosehip; Bakbanaan|Plantain|Bakbananen; Broodvrucht|Breadfruit;
      Granadilla|Granadilla|Sweet granadilla; Ackee|Ackee|Akee; Noni; Ume|Japanese apricot; Pruimedant|Prune|Gedroogde pruim;
      Rozijn|Raisin|Rozijnen|Krenten|Currants; Charentaismeloen|Charentais melon; Piel de sapo|Santa Claus melon; Kanariemeloen|Canary melon;
      Komkommer|Cucumber; Paprika|Bell pepper; Aubergine|Eggplant; Pompoen|Pumpkin; Courgette|Zucchini` },
    { id: 'vegetables', nl: 'Noem een groente', en: 'Name a vegetable', a: `
      Wortel|Carrot|Wortelen|Carrots; Tomaat|Tomato; Komkommer|Cucumber; Broccoli; Sla|Lettuce; Paprika|Bell pepper|Pepper; Ui|Onion|Uien;
      Spinazie|Spinach; Bloemkool|Cauliflower; Prei|Leek; Courgette|Zucchini; Aubergine|Eggplant; Erwten|Peas|Erwt|Doperwten|Pea;
      Spruitjes|Brussels sprouts|Spruiten|Brusselse spruiten; Champignon|Mushroom|Champignons|Paddenstoel; Maïs|Corn|Mais|Sweetcorn;
      Pompoen|Pumpkin; Witloof|Chicory|Belgian endive|Witlof|Chicon; Aardappel|Potato|Patat|Aardappelen;
      Boontjes|Green beans|Sperziebonen|Prinsessenbonen|Snijbonen; Selder|Celery|Selderij|Bleekselder; Rode kool|Red cabbage;
      Witte kool|White cabbage|Kool|Cabbage; Radijs|Radish|Radijsjes; Asperge|Asparagus|Asperges; Knoflook|Garlic|Look;
      Rode biet|Beetroot|Biet|Beet|Rode bieten; Venkel|Fennel; Artisjok|Artichoke; Boerenkool|Kale|Krulkool; Savooikool|Savoy cabbage;
      Spitskool|Pointed cabbage|Hispi cabbage; Chinese kool|Chinese cabbage|Napa cabbage; Paksoi|Pak choi|Bok choy|Paksoy;
      Rucola|Rocket|Arugula|Raketsla; IJsbergsla|Iceberg lettuce; Veldsla|Lamb's lettuce|Mache; Andijvie|Endive|Escarole;
      Raap|Turnip|Meiraap|Knolraap; Pastinaak|Parsnip; Schorseneer|Salsify|Schorseneren|Black salsify; Knolselder|Celeriac|Knolselderij;
      Koolrabi|Kohlrabi; Rabarber|Rhubarb; Zoete aardappel|Sweet potato|Bataat; Chilipeper|Chili pepper|Spaanse peper|Chili;
      Sjalot|Shallot|Sjalotten; Lente-ui|Spring onion|Scallion|Bosui|Green onion; Rode ui|Red onion; Bonen|Beans|Boon;
      Tuinbonen|Broad beans|Fava beans|Fava; Kikkererwten|Chickpeas|Kikkererwt; Linzen|Lentils;
      Peultjes|Snow peas|Mangetout|Sugar snap peas; Sojabonen|Soybeans|Edamame; Okra|Okra|Gombo; Snijbiet|Swiss chard|Chard|Warmoes;
      Zeekraal|Samphire|Glasswort; Postelein|Purslane; Waterkers|Watercress; Tuinkers|Garden cress|Cress|Kers; Taugé|Bean sprouts|Tauge;
      Bamboescheuten|Bamboo shoots; Butternut|Butternut squash|Flespompoen; Pattisson|Pattypan squash; Spaghettipompoen|Spaghetti squash;
      Hokkaido|Red kuri squash|Potimarron|Hokkaidopompoen; Hopscheuten|Hop shoots; Aardpeer|Jerusalem artichoke|Topinamboer|Sunchoke;
      Peterseliewortel|Parsley root|Wortelpeterselie; Mierikswortel|Horseradish; Yam|Yam|Jam; Cassave|Cassava|Maniok|Yuca|Manioc; Taro;
      Lotuswortel|Lotus root; Daikon|Daikon|Witte radijs|Rammenas|Mooli; Raapstelen|Turnip greens|Rapini|Broccoli rabe|Cime di rapa;
      Mosterdblad|Mustard greens; Palmkool|Cavolo nero|Lacinato kale|Toscaanse kool|Zwarte kool; Romanesco;
      Bimi|Tenderstem broccoli|Broccolini; Koolraap|Rutabaga|Swede|Koolrapen; Kardoen|Cardoon; Courgettebloem|Courgette flower;
      Puntpaprika|Sweet pointed pepper|Romano pepper; Augurk|Gherkin|Augurken|Pickles; Kropsla|Butterhead lettuce|Botersla;
      Romeinse sla|Romaine|Cos lettuce|Bindsla; Lollo rosso; Eikenbladsla|Oak leaf lettuce; Radicchio|Radicchio|Rode andijvie;
      Krulandijvie|Frisée|Frisee; Brandnetel|Nettle|Nettles; Paardenbloemblad|Dandelion greens; Waterspinazie|Water spinach|Kangkong;
      Choy sum; Gai lan|Chinese broccoli|Kai-lan; Komatsuna; Mizuna; Limabonen|Lima beans|Boterbonen|Butter beans;
      Kidneybonen|Kidney beans|Rode bonen; Zwarte bonen|Black beans; Witte bonen|White beans|Cannellini; Pintobonen|Pinto beans;
      Flageolets; Kapucijners|Marrowfat peas|Grey peas; Spliterwten|Split peas; Chayote|Chayote|Christofine;
      Bittere meloen|Bitter melon|Bitter gourd|Karela; Kalebas|Gourd|Calabash; Kousenband|Yardlong beans|Asparagus beans;
      Zilverui|Pearl onion|Zilveruitjes; Cherrytomaat|Cherry tomato|Kerstomaat; Avocado; Olijf|Olive; Zeewier|Seaweed` },
    { id: 'cocktails', nl: 'Noem een cocktail', en: 'Name a cocktail', a: `
      Mojito; Piña colada|Pina colada; Margarita; Sex on the Beach; Cosmopolitan|Cosmopolitan|Cosmo; Gin-tonic|Gin and tonic|Gin tonic|G&T;
      Aperol Spritz|Aperol Spritz|Spritz; Caipirinha; Daiquiri; Long Island Iced Tea|Long Island Iced Tea|Long Island; Martini|Martini|Dry martini;
      Espresso Martini; Pornstar Martini; Bloody Mary; Tequila Sunrise; Cuba Libre|Cuba Libre|Rum-cola|Rum cola; Moscow Mule;
      White Russian; Old Fashioned; Negroni; Manhattan; Mai Tai; Whiskey Sour|Whiskey Sour|Whisky Sour; Pisco Sour; Amaretto Sour;
      Mimosa; Bellini; Kir Royal|Kir Royal|Kir royale; Kir; Hugo|Hugo|Hugo spritz; Blue Lagoon; Black Russian; Caipiroska;
      Irish Coffee; Sangria; Tom Collins; French 75; Sidecar; Gimlet; Paloma; Dark 'n' Stormy|Dark 'n' Stormy|Dark and Stormy; Zombie;
      Hurricane; Singapore Sling; B-52|B-52|B52; Mint Julep; Sazerac; Boulevardier; Aviation; Last Word; Bramble; Gin Fizz;
      Ramos Gin Fizz; Grasshopper; Brandy Alexander|Brandy Alexander|Alexander; Godfather; Rusty Nail; Rob Roy; Vesper|Vesper|Vesper martini;
      Americano; Garibaldi; Appletini|Appletini|Apple martini; Lemon Drop; Kamikaze; Tequila Slammer; Michelada; Batida; Screwdriver;
      Harvey Wallbanger; Sea Breeze; Bay Breeze; Cape Codder; Greyhound; Salty Dog; Tinto de verano; Woo Woo; Fuzzy Navel; Mudslide;
      Painkiller; Planter's Punch; Rumpunch|Rum punch; Hemingway Daiquiri|Hemingway Daiquiri|Hemingway; El Diablo; Ranch Water;
      Spicy Margarita; Frozen Margarita; Bee's Knees; Corpse Reviver|Corpse Reviver|Corpse Reviver No. 2; Clover Club; Paper Plane;
      Penicillin; Jungle Bird; Naked and Famous; Tuxedo; Martinez; Hanky Panky; Bijou; Blood and Sand; Vieux Carré|Vieux Carre; Jack Rose;
      Stinger; Black Velvet; Snowball; Pink Gin; Pimm's Cup|Pimm's Cup|Pimms; Limoncello Spritz; Campari Soda;
      Negroni Sbagliato|Negroni Sbagliato|Sbagliato; Long Beach Iced Tea; Tokyo Iced Tea; Blue Hawaii; Shirley Temple; Grog;
      Glühwein|Gluhwein|Bisschopswijn|Mulled wine; Jägerbomb|Jagerbomb; Flaming Lamborghini; Bombardino` },
    { id: 'nuts', nl: 'Noem een noot (of iets dat in de winkel als noot verkocht wordt)', en: 'Name a nut (or something sold as one)', a: `
      Walnoot|Walnut; Hazelnoot|Hazelnut; Pinda|Peanut|Apennoot|Apennootje; Amandel|Almond; Cashewnoot|Cashew|Cashewnoten;
      Pistache|Pistachio|Pistachenoot; Kokosnoot|Coconut; Paranoot|Brazil nut; Macadamia|Macadamia|Macadamianoot; Pecannoot|Pecan|Pecan nut;
      Kastanje|Chestnut|Tamme kastanje; Pijnboompit|Pine nut|Pijnboompitten|Pine nuts; Muskaatnoot|Nutmeg|Nootmuskaat;
      Beukennoot|Beechnut|Beukennootje; Eikel|Acorn; Hickorynoot|Hickory nut; Kolanoot|Kola nut|Cola nut; Tijgernoot|Tiger nut|Aardamandel;
      Betelnoot|Betel nut|Areca nut; Ginkgonoot|Ginkgo nut; Sheanoot|Shea nut; Kemirie|Candlenut|Kemiri; Pilinoot|Pili nut;
      Barunoot|Baru nut; Mongongo|Mongongo nut; Bunyanoot|Bunya nut; Zwarte walnoot|Black walnut; Paardenkastanje|Horse chestnut|Wilde kastanje;
      Waterkastanje|Water chestnut|Waternoot; Sacha inchi` },
    { id: 'cheese', nl: 'Noem een kaassoort', en: 'Name a type of cheese', a: `
      Gouda; Brie; Camembert; Mozzarella; Cheddar; Parmezaan|Parmesan|Parmigiano Reggiano|Parmigiano; Feta; Emmentaler|Emmental|Emmenthal;
      Gruyère|Gruyere; Roquefort; Gorgonzola; Edammer|Edam; Mascarpone; Ricotta; Halloumi; Manchego; Pecorino|Pecorino|Pecorino Romano;
      Comté|Comte; Raclette; Burrata; Grana Padano; Blauwe kaas|Blue cheese|Blauwschimmelkaas; Geitenkaas|Goat cheese|Chèvre|Chevre;
      Boursin; Roomkaas|Cream cheese|Philadelphia; Stilton; Maasdammer|Maasdam; Leerdammer; Old Amsterdam; Passendale; Maredsous;
      Chimay; Herve|Herve|Hervekaas|Fromage de Herve; Orval; Postel; Rubens; Père Joseph|Pere Joseph; Limburger|Limburger|Limburgse kaas;
      Remoudou; Brugge Blomme; Boerenkaas|Farmhouse cheese; Leidse kaas|Leyden|Komijnekaas|Leiden cheese; Friese nagelkaas|Frisian clove cheese|Nagelkaas;
      Beemster; Mimolette; Port-Salut|Port Salut; Reblochon; Tomme de Savoie|Tomme de Savoie|Tomme; Beaufort; Saint-Nectaire|Saint Nectaire;
      Munster|Munster|Muenster; Époisses|Epoisses; Livarot; Pont-l'Évêque|Pont l'Eveque; Morbier; Cantal; Saint-Marcellin; Valençay|Valencay;
      Crottin de Chavignol|Crottin de Chavignol|Crottin; Neufchâtel|Neufchatel; Brillat-Savarin; Saint-Félicien|Saint-Felicien; Abondance;
      Bleu d'Auvergne; Fourme d'Ambert; Ossau-Iraty; Mont d'Or|Vacherin Mont d'Or|Vacherin; Appenzeller; Tête de Moine|Tete de Moine;
      Sbrinz; Vacherin Fribourgeois; Fontina; Taleggio; Provolone; Asiago; Scamorza; Stracciatella; Bel Paese; Caciocavallo; Montasio;
      Robiola; Castelmagno; Bitto; Ricotta salata; Fior di latte; Bocconcini; Pecorino Sardo; Fiore Sardo; Casu marzu;
      Idiazábal|Idiazabal; Cabrales; Mahón|Mahon; Tetilla; Torta del Casar; Queso fresco; Oaxaca|Oaxaca|Queso Oaxaca; Cotija; Paneer;
      Labneh; Kasjkaval|Kashkaval; Sirene; Graviera; Kefalotyri; Kasseri; Manouri; Mizithra; Anthotyros; Tulum; Akkawi; Nabulsi;
      Jarlsberg; Brunost|Brown cheese|Gjetost|Geitost; Havarti; Danablu|Danish Blue; Esrom; Samsø|Samso; Västerbottensost|Vasterbotten;
      Herrgård|Herrgardsost; Leipäjuusto|Squeaky cheese|Bread cheese; Oscypek; Bryndza; Tilsiter|Tilsiter|Tilsit; Butterkäse|Butterkase;
      Bergkäse|Bergkase|Bergkaas; Cambozola; Kwark|Quark; Hüttenkäse|Cottage cheese|Huttenkase|Cottage; Wensleydale;
      Red Leicester|Red Leicester|Leicester; Double Gloucester|Double Gloucester|Gloucester; Cheshire; Lancashire; Caerphilly;
      Shropshire Blue; Stinking Bishop; Cornish Yarg|Cornish Yarg|Yarg; Monterey Jack|Monterey Jack|Jack; Colby; Pepper Jack;
      American cheese|American cheese|Smeltkaas|Processed cheese; Velveeta; String cheese; Buffelmozzarella|Mozzarella di bufala|Buffalo mozzarella;
      Smeerkaas|Cheese spread; Kruidenkaas|Herb cheese; Rookkaas|Smoked cheese; Fromage frais|Verse kaas|Fresh cheese` },
    { id: 'japanese', nl: 'Noem een Japans gerecht', en: 'Name a Japanese dish', a: `
      Sushi; Ramen; Sashimi; Tempura; Udon; Miso soep|Miso soup|Misosoep|Miso; Teriyaki; Gyoza; Soba; Yakitori; Onigiri; Edamame; Mochi;
      Tonkatsu; Katsu curry|Katsu curry|Katsu; Okonomiyaki; Takoyaki; Bento; Maki; Nigiri; Uramaki; Temaki; Donburi; Gyudon; Katsudon;
      Oyakodon; Karaage; Japanse curry|Japanese curry|Kare raisu|Curry rice; Sukiyaki; Shabu-shabu|Shabu-shabu|Shabu shabu; Yakiniku;
      Yakisoba; Dorayaki; Taiyaki; Dango; Matcha; Natto; Tamagoyaki; Omurice; Chawanmushi; Nikujaga; Oden; Chirashi|Chirashi|Chirashizushi;
      Unadon|Unagi don|Unadon; Tsukemono; Umeboshi; Agedashi tofu; Hiyayakko; Korokke; Menchi katsu; Ebi furai|Ebi fry|Ebi furai;
      Tonjiru; Zosui; Ochazuke; Nabe; Chanko nabe; Yudofu; Kushikatsu|Kushikatsu|Kushiage; Monjayaki; Hayashi rice; Mentaiko; Ikura; Uni;
      Kakigori; Anmitsu; Castella; Melonpan|Melon pan|Melonpan; Wagashi; Inarizushi|Inari|Inarizushi; Gunkanmaki; Futomaki; Hosomaki;
      Oshizushi; Temarizushi|Temari sushi; Kaiseki; Okayu|Kayu|Rijstpap; Tamago kake gohan|TKG; Furikake; Tsukune; Shumai; Katsu sando;
      Tantanmen; Tsukemen; Hiyashi chuka; Somen; Hiyamugi; Champon; Jingisukan; Karaage don` },
    { id: 'coffee', nl: 'Noem een koffiedrank', en: 'Name a coffee drink', a: `
      Espresso; Cappuccino; Latte|Caffè latte|Caffe latte|Koffie latte; Latte macchiato; Americano|Caffè Americano; Macchiato|Espresso macchiato;
      Flat white; Mocha|Mocha|Mokka|Caffè mocha|Mochaccino; Irish coffee; Frappuccino; IJskoffie|Iced coffee|Ijskoffie; Cold brew; Lungo;
      Ristretto; Cortado; Koffie verkeerd; Café au lait|Cafe au lait; Affogato; Frappé|Frappe; Turkse koffie|Turkish coffee; Doppio;
      Dalgona|Dalgona coffee; Piccolo|Piccolo latte; Filterkoffie|Filter coffee|Drip coffee; Café crème|Cafe creme; Red eye; Black eye;
      Long black; Wiener Melange|Wiener Melange|Melange|Weense melange; Einspänner|Einspanner; Caffè corretto|Caffe corretto|Corretto; Carajillo;
      Vietnamese ijskoffie|Vietnamese iced coffee|Ca phe sua da; Eierkoffie|Egg coffee|Vietnamese egg coffee; Galão|Galao;
      Café bombón|Cafe bombon|Bombon; Café de olla|Cafe de olla; Espresso tonic; Babyccino; Mazagran; Pharisäer|Pharisaer;
      Cubaanse koffie|Cuban coffee|Cafecito|Café Cubano; Pumpkin spice latte|Pumpkin spice latte|PSL; Caramel macchiato;
      Bulletproof coffee; Marocchino; Shakerato|Caffè shakerato; Freddo espresso; Freddo cappuccino; Caffè breve|Breve; Cortadito; Bicerin` },
    { id: 'potato', nl: 'Noem een gerecht of bereiding met aardappelen', en: 'Name a potato dish or way to prepare potatoes', a: `
      Frieten|Fries|French fries|Friet|Patat|Patatjes|Frites; Aardappelpuree|Mashed potatoes|Puree|Pureetje;
      Gebakken aardappelen|Fried potatoes|Gebakken patatten|Roasted potatoes|Ovenaardappelen; Chips|Chips|Crisps;
      Kroketten|Croquettes|Aardappelkroketten|Kroket; Gekookte aardappelen|Boiled potatoes|Patatten; Stoemp;
      Gratin dauphinois|Gratin dauphinois|Gratin|Aardappelgratin|Potato gratin; Rösti|Rosti; Aardappelsalade|Potato salad;
      Wedges|Potato wedges|Aardappelpartjes; Hasselback-aardappelen|Hasselback potatoes|Hasselback;
      Gepofte aardappel|Baked potato|Jacket potato|Aardappel in de schil|Pofaardappel; Pommes duchesse|Duchess potatoes|Hertoginneaardappelen;
      Patatas bravas|Patatas bravas|Bravas; Tortilla|Spanish omelette|Tortilla de patatas|Spaanse tortilla; Gnocchi;
      Hash browns|Hash browns|Hashbrowns; Tater tots; Aardappelsoep|Potato soup; Aardappelpannenkoek|Potato pancake|Latkes|Latke|Reibekuchen;
      Poutine; Pommes noisettes|Noisette potatoes; Pommes Anna; Pommes dauphines|Dauphine potatoes|Pommes dauphine; Pommes paille|Straw potatoes;
      Pommes allumettes|Matchstick potatoes; Curly fries; Colcannon; Bubble and squeak; Papas arrugadas; Aloo gobi; Aloo paratha; Samosa;
      Pierogi|Pierogi|Pierogi ruskie; Kartoffelknödel|Potato dumplings|Kartoffelklöße|Aardappelknoedels; Shepherd's pie|Shepherd's pie|Herderstaart;
      Cottage pie; Hachis parmentier|Hachis parmentier|Parmentier; Tartiflette; Aligot; Truffade; Raclette; Pyttipanna; Fish and chips|Fish & chips;
      Vichyssoise; Hutspot; Stamppot|Stamppot|Boerenkoolstamppot; Kapsalon; Patatje oorlog|Patat oorlog|Friet oorlog;
      Smashed potatoes|Geplette aardappelen; Krieltjes|Baby potatoes|Gebakken krieltjes; Pommes Pont-Neuf; Pommes soufflées|Pommes souffles;
      Pommes rissolées|Rissolees; Pommes sautées|Sauteed potatoes; Pommes boulangère|Boulangere potatoes; Papa a la huancaína|Papa a la huancaina;
      Causa limeña|Causa; Llapingachos` },
    { id: 'soup', nl: 'Noem een soep', en: 'Name a soup', a: `
      Tomatensoep|Tomato soup; Groentesoep|Vegetable soup; Kippensoep|Chicken soup; Erwtensoep|Pea soup|Snert; Uiensoep|Onion soup|French onion soup|Franse uiensoep;
      Minestrone; Gazpacho; Champignonsoep|Mushroom soup; Pompoensoep|Pumpkin soup; Aspergesoep|Asparagus soup; Kervelsoep|Chervil soup;
      Preisoep|Leek soup; Wortelsoep|Carrot soup; Bloemkoolsoep|Cauliflower soup; Broccolisoep|Broccoli soup; Linzensoep|Lentil soup;
      Goulashsoep|Goulash soup|Goulash|Gulyás; Ramen; Pho|Phở; Misosoep|Miso soup|Miso; Tom yum|Tom yum|Tom yam; Tom kha|Tom kha|Tom kha gai;
      Borsjtsj|Borscht|Borsch; Bouillabaisse; Vichyssoise; Clam chowder|Clam chowder|Chowder; Kreeftensoep|Lobster bisque|Bisque|Kreeftenbisque;
      Vissoep|Fish soup; Waterzooi; Soep met balletjes|Soup with meatballs|Balletjessoep; Harira; Mulligatawny; Laksa; Wontonsoep|Wonton soup;
      Zuur-pikante soep|Hot and sour soup; Eierdruppelsoep|Egg drop soup; Kerriesoep|Curry soup; Aardappelsoep|Potato soup; Bonensoep|Bean soup;
      Ribollita; Avgolemono; Caldo verde; Knoflooksoep|Garlic soup|Sopa de ajo; Salmorejo; Chorba|Shorba; Okroshka; Solyanka; Sjtsji|Shchi;
      Tarator; Ajiaco; Menudo; Pozole; Sancocho; Callaloo; Gumbo; Mohinga; Soto|Soto ayam; Rawon; Sinigang; Tinola; Seolleongtang;
      Samgyetang; Kimchi jjigae; Cock-a-leekie; Cullen skink; Scotch broth; Ossenstaartsoep|Oxtail soup; Bouillon|Broth|Heldere soep|Consommé|Consomme;
      Mosselsoep|Mussel soup; Sopa de lima; Matzoballensoep|Matzo ball soup; Vogelnestjessoep|Bird's nest soup; Haaienvinnensoep|Shark fin soup;
      Bruine bonensoep|Brown bean soup; Mosterdsoep|Mustard soup; Biersoep|Beer soup; Witloofsoep|Chicory soup; Brandnetelsoep|Nettle soup;
      Spinaziesoep|Spinach soup; Courgettesoep|Courgette soup|Zucchini soup; Paprikasoep|Pepper soup|Red pepper soup; Pindasoep|Peanut soup;
      Kokossoep|Coconut soup; Fruitsoep|Fruit soup; Koude komkommersoep|Cold cucumber soup|Cucumber soup; Soupe au pistou|Soupe au pistou|Pistou;
      Garbure; Pot-au-feu; Zuppa toscana; Pappa al pomodoro; Stracciatella; Italian wedding soup|Italian wedding soup|Wedding soup;
      Pasta e fagioli; Egusi soup|Egusi soup|Egusi; Groundnut soup; Lagman; Ash reshteh; Dushbara; Bún bò Huế|Bun bo Hue; Khao soi; Canh chua;
      Tomatensoep met balletjes|Tomato soup with meatballs` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
