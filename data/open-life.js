/* ─────────────────────────────────────────────────────────────
   Brillion · alledaagse open vragen (deel 1: kleuren, huis, stad)
   Vragen waar iedereen iets op weet, maar waar je ook ver kan gaan.
   Elk antwoord: NL|EN|andere namen; van vaak genoemd naar zeldzaam.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;

  B.addQuestions('life', [
    { id: 'red', lvl: 1, nl: 'Noem iets dat rood is', en: 'Name something that is red', a: `
      Aardbei|Strawberry; Tomaat|Tomato; Bloed|Blood; Brandweerwagen|Fire truck|Brandweerauto|Fire engine; Kers|Cherry;
      Roos|Rose|Rode roos|Red rose; Appel|Apple|Rode appel|Red apple; Hart|Heart|Liefde|Love; Stopbord|Stop sign;
      Rood licht|Red light|Verkeerslicht|Traffic light; Ketchup|Ketchup|Tomatenketchup; Lippenstift|Lipstick; Framboos|Raspberry;
      Paprika|Pepper|Rode paprika|Red pepper; Kreeft|Lobster; Lieveheersbeestje|Ladybird|Ladybug; Kerstman|Santa Claus|Santa;
      Coca-Cola|Coca-Cola|Cola-blikje|Coke can; Brievenbus|Postbox|Mailbox; Vuur|Fire|Vlammen|Flames; Chilipeper|Chilli pepper|Chili|Chilli;
      Klaproos|Poppy; Rode wijn|Red wine; Watermeloen|Watermelon; Rode biet|Beetroot|Biet; Radijs|Radish; Tulp|Tulip;
      Mars|Mars|Rode planeet|Red planet; Ferrari; Rode kaart|Red card; Spiderman|Spider-Man; Elmo; Rode loper|Red carpet;
      Sinterklaas|Saint Nicholas; Robijn|Ruby; Roodkapje|Little Red Riding Hood; Rode Kruis|Red Cross; Granaatappel|Pomegranate;
      Veenbes|Cranberry; Roodborstje|Robin; Vos|Fox; Rood haar|Red hair|Ros haar; Zonsondergang|Sunset; Brandblusser|Fire extinguisher;
      Telefooncel|Phone box|Rode telefooncel|Red phone box; Dubbeldekker|Double-decker bus|Londense bus|London bus; Rode panda|Red panda;
      Salami; Chorizo; Krab|Crab; Tabasco; Aalbes|Redcurrant|Rode bes; Mario; Lava; Kardinaal|Cardinal; Rode draak|Red dragon|Welshe draak|Welsh dragon;
      Rode wouw|Red kite; Rode mier|Red ant|Vuurmier|Fire ant; Kersttrui|Christmas jumper; Bloedappelsien|Blood orange; Rode ui|Red onion; Rode kool|Red cabbage;
      Rode Duivels|Red Devils; Rood potlood|Red pencil; Rode lantaarn|Red lantern; Rode vlag|Red flag; Rode bloedcel|Red blood cell; Rode dwerg|Red dwarf` },

    { id: 'yellow', lvl: 1, nl: 'Noem iets dat geel is', en: 'Name something that is yellow', a: `
      Banaan|Banana; Zon|Sun; Citroen|Lemon; Kuiken|Chick; Badeendje|Rubber duck|Eendje|Duckling; Kaas|Cheese; Boter|Butter;
      Maïs|Corn|Sweetcorn|Mais; Zonnebloem|Sunflower; Taxi|Taxi|Gele taxi|Yellow cab; Schoolbus|School bus; Eigeel|Egg yolk|Dooier|Yolk;
      Mosterd|Mustard; Pikachu; Minion|Minion|Minions; SpongeBob|SpongeBob|SpongeBob SquarePants; Tweety; Bart Simpson|Bart Simpson|Simpsons|The Simpsons|Homer Simpson;
      Narcis|Daffodil; Paardenbloem|Dandelion; Tennisbal|Tennis ball; Gele kaart|Yellow card; Gele trui|Yellow jersey; Goud|Gold;
      Ananas|Pineapple; Mango; Gele paprika|Yellow pepper; Bij|Bee; Wesp|Wasp; Kanarie|Canary; Post-it|Post-it|Memoblaadje|Sticky note;
      Markeerstift|Highlighter|Fluostift; Fluohesje|Hi-vis vest|Hesje|Fluo-vest; Bliksem|Lightning; Zand|Sand; Honing|Honey; Vanillepudding|Custard|Vla|Pudding;
      Frietjes|Fries|Friet|Frieten|French fries; Popcorn; Omelet|Omelette; Kurkuma|Turmeric; Saffraan|Saffron; Citroenvlinder|Brimstone butterfly;
      Smiley|Smiley face|Emoji; Bouwhelm|Hard hat|Veiligheidshelm; McDonald's|McDonald's|McDonalds|Gouden bogen|Golden arches; Grapefruit;
      Gele tulp|Yellow tulip; Sterren|Stars|Ster|Star; Gele marker|Yellow marker; Gele post-it|Yellow note; Gele regenjas|Yellow raincoat|Regenjas|Raincoat;
      Gele potlood|Yellow pencil|Potlood|Pencil; Graan|Wheat|Tarwe; Stro|Straw|Hooi|Hay; Zwavel|Sulphur|Sulfur; Gele Rivier|Yellow River; Geelzucht|Jaundice;
      Geelvintonijn|Yellowfin tuna; Geel kanariepietje|Tweety bird; Brazilië-shirt|Brazil shirt|Braziliaans shirt; Gele Duikboot|Yellow Submarine; Winnie de Poeh|Winnie the Pooh|Winnie the Pooh` },

    { id: 'green', lvl: 1, nl: 'Noem iets dat groen is', en: 'Name something that is green', a: `
      Gras|Grass; Blad|Leaf|Bladeren|Leaves; Kikker|Frog; Komkommer|Cucumber; Broccoli; Groene appel|Green apple; Erwt|Pea|Erwten|Peas|Doperwt;
      Sla|Lettuce|Salade|Salad; Groen licht|Green light; Kiwi; Shrek; Hulk|Hulk|The Hulk; Avocado; Druif|Grape|Druiven|Grapes; Limoen|Lime;
      Spinazie|Spinach; Courgette|Courgette|Zucchini; Krokodil|Crocodile; Schildpad|Turtle|Tortoise; Hagedis|Lizard; Kameleon|Chameleon;
      Rups|Caterpillar; Sprinkhaan|Grasshopper; Mos|Moss; Cactus; Klavertje vier|Four-leaf clover|Klaver|Clover; Kerstboom|Christmas tree|Dennenboom|Pine tree;
      Olijf|Olive; Sperzieboon|Green bean|Boontjes|Sperziebonen|Green beans; Pistache|Pistachio; Groene paprika|Green pepper; Smaragd|Emerald; Jade;
      Groene thee|Green tea; Pesto; Kermit; Grinch|The Grinch; Yoda; Slijm|Slime; Voetbalveld|Football pitch|Grasveld|Pitch; Biljarttafel|Pool table|Snookertafel|Snooker table;
      Golfbaan|Golf course; Dollarbiljet|Dollar bill|Dollar; Ierland|Ireland|Ierse vlag|Irish flag; Leprechaun|Leprechaun|Kaboutertje; Nooduitgang|Emergency exit|Exitbord|Exit sign;
      Prei|Leek; Selder|Celery|Selderij; Spruitje|Brussels sprout|Spruitjes|Brussels sprouts; Artisjok|Artichoke; Peterselie|Parsley; Basilicum|Basil; Munt|Mint;
      Zeewier|Seaweed; Algen|Algae|Alg; Wasabi; Papegaai|Parrot; Bidsprinkhaan|Praying mantis; Boomkikker|Tree frog; Groene mamba|Green mamba;
      Jaloezie|Jealousy|Groen van jaloezie; Groene olijf|Green olive; Matcha; Kryptoniet|Kryptonite; Hulst|Holly; Varen|Fern; Bamboe|Bamboo;
      Dennennaald|Pine needle; Groene ster|Green star; Groen stoplicht|Green traffic light; Zeegroen|Sea green; Groene leguaan|Green iguana|Leguaan|Iguana` },

    { id: 'blue', lvl: 1, nl: 'Noem iets dat blauw is', en: 'Name something that is blue', a: `
      Lucht|Sky|Hemel; Zee|Sea|Oceaan|Ocean; Water; Jeans|Jeans|Spijkerbroek|Denim; Smurf|Smurf|Smurfen|Smurfs; Bosbes|Blueberry|Blauwe bes;
      Blauwe vinvis|Blue whale; Politie|Police|Politieauto|Police car; Sonic; Dory; Stitch; Avatar|Avatar|Na'vi; Genie|Genie|Geest uit de lamp;
      Saffier|Sapphire; Korenbloem|Cornflower; Vergeet-mij-nietje|Forget-me-not; Blauwe druif|Black grape; Blauwe ogen|Blue eyes|Ogen|Eyes;
      Ijsvogel|Kingfisher; Pauw|Peacock; Blauwe gaai|Blue jay|Vlaamse gaai|Jay; Facebook|Facebook|Facebook-logo; Twitter|Twitter|Twitter-vogel;
      Europese vlag|EU flag|Vlag van Europa; Nivea|Nivea|Nivea-blik; Blauwe pen|Blue pen|Balpen|Ballpoint pen; Planeet Aarde|Earth|Aarde;
      Neptunus|Neptune; Uranus; Ijs|Ice|Gletsjer|Glacier; Blauwe plek|Bruise; Blauwe kaas|Blue cheese; Lapis lazuli; Turkoois|Turquoise;
      Blauw licht|Blue light|Zwaailicht|Siren light; Blauwe maandag|Blue Monday; Chelsea-shirt|Chelsea shirt|Chelsea; Italië-shirt|Italy shirt|Squadra Azzurra;
      Hyacint|Hyacinth; Blauwe regen|Wisteria; Delfts blauw|Delft Blue|Delfts aardewerk; Blauwe vlinder|Blue butterfly|Icarusblauwtje; Blauwe tang|Blue tang;
      Blauwe vlag|Blue flag; Kobalt|Cobalt; Indigo; Blauwe maan|Blue moon; Grote Smurf|Papa Smurf; Cookie Monster|Cookie Monster|Koekiemonster;
      Elsa|Elsa|Frozen; Doraemon; Blauwe haai|Blue shark; Blauwe ring|Blue ring|Blauwgeringde octopus|Blue-ringed octopus; Blauwvintonijn|Bluefin tuna;
      Blauwtje|Blue tit|Pimpelmees; Ford-logo|Ford logo|Ford; Samsung; IKEA|IKEA|Ikea-tas|IKEA bag; Blauwe zak|Blue bag|PMD-zak|Recycling bag` },

    { id: 'pink', lvl: 2, nl: 'Noem iets dat roze is', en: 'Name something that is pink', a: `
      Varken|Pig; Flamingo; Barbie; Suikerspin|Candyfloss|Cotton candy; Kauwgom|Bubblegum|Chewing gum; Roze roos|Pink rose|Roos;
      Kersenbloesem|Cherry blossom|Sakura; Pink Panther|Pink Panther|Roze Panter; Peppa Pig|Peppa Pig|Peppa; Biggetje|Piglet|Knorretje;
      Garnaal|Prawn|Shrimp|Garnalen; Zalm|Salmon; Ham; Aardbeienijs|Strawberry ice cream|Aardbeiensmaak; Marshmallow; Flamingo-zwemband|Flamingo float;
      Roze trui|Pink jersey|Maglia rosa; Tong|Tongue; Lippen|Lips; Wangen|Cheeks|Blos|Blush; Roze grapefruit|Pink grapefruit|Grapefruit;
      Pioen|Peony|Pioenroos; Roze olifant|Pink elephant; Prinses|Princess|Prinsessenjurk|Princess dress; Hello Kitty; Kirby; Jigglypuff;
      Patrick Ster|Patrick Star|Patrick; Gum|Eraser|Gom|Rubber; Roze koek|Pink iced biscuit|Roze glazuur|Pink icing; Donut met roze glazuur|Pink donut|Donut;
      Roze limonade|Pink lemonade; Rosé|Rosé|Roséwijn|Rosé wine; Roze zout|Pink salt|Himalayazout|Himalayan salt;
      Roze dolfijn|Pink dolphin|Amazonedolfijn; Axolotl; Naakte molrat|Naked mole rat; Roze lint|Pink ribbon; Roze hesje|Pink vest; Roze kwal|Pink jellyfish; Roze meer|Pink lake|Lake Hillier; Gamba|King prawn; Roze koeken|Pink wafer|Wafeltje; Lepelaar|Roseate spoonbill|Rode lepelaar; Roze kakatoe|Galah|Roze kaketoe; Roze Champagne|Pink champagne; Roze peper|Pink peppercorn|Roze peperkorrel` },

    { id: 'fridge', lvl: 1, nl: 'Noem iets dat je in een koelkast vindt', en: 'Name something you find in a fridge', a: `
      Melk|Milk; Kaas|Cheese; Boter|Butter; Eieren|Eggs|Ei|Egg; Yoghurt|Yoghurt|Yogurt; Groenten|Vegetables; Vlees|Meat; Ham;
      Frisdrank|Soft drink|Cola|Coke; Water|Water|Fles water; Bier|Beer; Ketchup; Mayonaise|Mayonnaise|Mayo; Mosterd|Mustard; Sla|Lettuce;
      Tomaten|Tomatoes|Tomaat|Tomato; Fruit; Fruitsap|Juice|Sinaasappelsap|Orange juice|Appelsap|Apple juice; Room|Cream|Slagroom|Whipped cream; Pudding|Pudding|Chocomousse|Chocolate mousse;
      Restjes|Leftovers|Restjes eten; Salami; Kip|Chicken; Vis|Fish; Worst|Sausage|Worstjes|Sausages; Pizza; Wortels|Carrots|Wortel|Carrot;
      Komkommer|Cucumber; Paprika|Pepper; Wijn|Wine|Witte wijn|White wine; Champagne; Jam|Jam|Confituur; Choco|Chocolate spread|Chocopasta|Nutella;
      Pesto; Hummus; Augurken|Gherkins|Pickles|Augurk; Olijven|Olives|Olijf; Mozzarella; Smeerkaas|Cream cheese|Philadelphia; Vla|Custard|Pap;
      Zalm|Salmon|Gerookte zalm|Smoked salmon; Garnalen|Prawns|Shrimp; Tofu; Gehakt|Mince|Minced meat; Bacon|Bacon|Spek; Chocolade|Chocolate;
      IJsblokjes|Ice cubes|Ijsblokjes; Diepvriespizza|Frozen pizza; Batterijen|Batteries; Lampje|Fridge light|Lamp|Light; Magneet|Magnet|Koelkastmagneet|Fridge magnet;
      Sauzen|Sauces|Saus|Sauce; Sojasaus|Soy sauce; Kombucha; Energiedrank|Energy drink; Ijsthee|Iced tea; Cake|Cake|Taart; Deeg|Dough|Bladerdeeg|Puff pastry;
      Medicijnen|Medicine|Insuline|Insulin; Nagellak|Nail polish; Gezichtsmasker|Face mask; Babyvoeding|Baby food|Flesvoeding|Baby milk` },

    { id: 'schoolbag', lvl: 1, nl: 'Noem iets dat je in een boekentas vindt', en: 'Name something you find in a school bag', a: `
      Pennenzak|Pencil case|Etui; Boeken|Books|Boek|Book; Schrift|Notebook|Schriften|Schrijfschrift; Pen|Pen|Balpen|Ballpoint; Potlood|Pencil;
      Gom|Rubber|Eraser|Gum; Lat|Ruler|Liniaal; Boterhammen|Sandwiches|Brooddoos|Lunchbox|Lunch; Drinkfles|Water bottle|Fles|Bottle|Brikje|Drink;
      Agenda|Planner|Schoolagenda|Diary; Rekenmachine|Calculator; Laptop; Map|Folder|Ringmap|Ring binder; Slijper|Sharpener|Puntenslijper|Pencil sharpener;
      Schaar|Scissors; Lijm|Glue|Lijmstift|Glue stick; Kleurpotloden|Coloured pencils|Kleurpotlood; Stiften|Felt-tip pens|Stift|Marker; Markeerstift|Highlighter|Fluostift;
      Passer|Compass|Pair of compasses; Geodriehoek|Set square|Driehoek; Gsm|Phone|Smartphone|Mobile; Koptelefoon|Headphones|Oortjes|Earphones|Oordopjes|Earbuds;
      Sleutels|Keys|Sleutel|Key; Portemonnee|Wallet|Geld|Money; Turnzak|PE bag|Sportzak|Gym bag|Turnkledij; Woordenboek|Dictionary; Atlas;
      Tablet|Tablet|iPad; Koek|Biscuit|Koekje|Cookie; Fruit|Fruit|Appel|Apple; Snoep|Sweets|Candy; Kauwgom|Chewing gum; Papier|Paper|Blaadjes|Sheets of paper;
      Correctieroller|Correction tape|Tipp-ex|Tippex|Correctievloeistof; Plakband|Sticky tape|Tape; Nietjesmachine|Stapler; Usb-stick|USB stick|Usb|Memory stick;
      Agenda van de school|Homework diary; Toetsen|Tests|Toets; Rapport|Report card; Zakdoeken|Tissues|Zakdoek|Tissue; Paraplu|Umbrella; Regenjas|Raincoat;
      Bus- of treinabonnement|Bus pass|Abonnement|Travel card; Leesbril|Glasses|Bril; Lippenbalsem|Lip balm; Deo|Deodorant; Muntjes|Mints;
      Fietssleutel|Bike lock key|Fietsslot|Bike lock; Oplader|Charger|Powerbank|Power bank; Mondmasker|Face mask; Handgel|Hand gel|Handgel tegen bacteriën|Hand sanitiser` },

    { id: 'bedroom', lvl: 1, nl: 'Noem iets dat je in een slaapkamer vindt', en: 'Name something you find in a bedroom', a: `
      Bed; Kussen|Pillow|Hoofdkussen; Dekbed|Duvet|Deken|Blanket; Kast|Wardrobe|Kleerkast|Closet; Nachtkastje|Bedside table|Nachttafel|Nightstand;
      Lamp|Lamp|Nachtlampje|Night light|Bedlampje; Wekker|Alarm clock; Matras|Mattress; Laken|Sheet|Lakens|Sheets; Gordijnen|Curtains|Gordijn|Curtain;
      Bureau|Desk; Stoel|Chair|Bureaustoel; Spiegel|Mirror; Kleren|Clothes|Kleding; Knuffel|Cuddly toy|Teddybeer|Teddy bear|Knuffelbeer;
      Tv|TV|Televisie|Television; Pyjama|Pyjamas|Pajamas; Pantoffels|Slippers|Sloffen; Raam|Window; Poster|Poster|Posters; Boeken|Books|Boek|Book;
      Rolluik|Shutter|Rolgordijn|Blind; Tapijt|Rug|Vloerkleed|Carpet; Ladekast|Chest of drawers|Commode; Kapstok|Coat hook|Kleerhanger|Hanger;
      Laptop|Laptop|Computer; Gsm-oplader|Phone charger|Oplader|Charger; Spelconsole|Games console|PlayStation|Xbox; Wasmand|Laundry basket;
      Radiator|Radiator|Verwarming|Heater; Ventilator|Fan; Plant|Plant|Kamerplant|Houseplant; Foto's|Photos|Fotokader|Photo frame;
      Kaars|Candle|Kaarsen|Candles; Speelgoed|Toys; Wieg|Cot|Crib|Babybedje; Stapelbed|Bunk bed; Hangmat|Hammock; Boxspring;
      Sieraden|Jewellery|Sieradendoos|Jewellery box; Parfum|Perfume; Make-up|Make-up|Makeup; Haardroger|Hairdryer|Föhn; Strijkplank|Ironing board;
      Spinnen|Spiders|Spin|Spider; Stof|Dust; Monsters onder het bed|Monster under the bed|Monster; Dagboek|Diary|Dagboekje; Spaarpot|Piggy bank;
      Gitaar|Guitar; Wereldbol|Globe; Bijzettafel|Side table; Kluis|Safe; Sokken|Socks|Sok|Sock; Wekkerradio|Clock radio; Luchtbevochtiger|Humidifier` },

    { id: 'garden', lvl: 1, nl: 'Noem iets dat je in een tuin vindt', en: 'Name something you find in a garden', a: `
      Gras|Grass|Gazon|Lawn; Bloemen|Flowers|Bloem|Flower; Boom|Tree|Bomen|Trees; Grasmaaier|Lawnmower; Schommel|Swing; Vijver|Pond;
      Tuinhuis|Garden shed|Schuur|Shed|Tuinhuisje; Barbecue|Barbecue|BBQ; Tuinstoel|Garden chair|Tuinstoelen|Garden chairs; Tuintafel|Garden table;
      Struik|Bush|Struiken|Shrub|Haag|Hedge; Trampoline; Zandbak|Sandpit|Sandbox; Tuinslang|Hose|Garden hose|Waterslang; Gieter|Watering can;
      Kabouter|Garden gnome|Tuinkabouter; Schep|Spade|Schop|Shovel; Hark|Rake; Kruiwagen|Wheelbarrow; Moestuin|Vegetable patch|Groentetuin|Vegetable garden;
      Hek|Fence|Omheining; Pad|Path|Tuinpad; Terras|Patio|Terrace; Parasol; Ligstoel|Sun lounger|Strandstoel|Deckchair; Zwembad|Swimming pool|Pool;
      Vogelhuisje|Birdhouse|Nestkast|Nest box; Voederhuisje|Bird feeder; Kippen|Chickens|Kip|Chicken|Kippenhok|Chicken coop; Hond|Dog|Hondenhok|Kennel;
      Kat|Cat; Egel|Hedgehog; Regenworm|Earthworm|Worm|Wormen; Slak|Snail|Slakken|Naaktslak|Slug; Mier|Ant|Mieren|Ants; Bij|Bee|Bijen|Bees;
      Vlinder|Butterfly; Mol|Mole|Molshoop|Molehill; Merel|Blackbird; Mus|Sparrow; Roodborstje|Robin; Composthoop|Compost heap|Compostbak|Compost bin;
      Onkruid|Weeds|Onkruidje; Paardenbloem|Dandelion; Madeliefje|Daisy; Rozen|Roses|Roos|Rose; Tulpen|Tulips|Tulp|Tulip; Appelboom|Apple tree;
      Fruitboom|Fruit tree; Kerselaar|Cherry tree; Klimrek|Climbing frame; Glijbaan|Slide; Voetbaldoel|Football goal|Doeltje|Goal;
      Tuinverlichting|Garden lights|Tuinlamp|Garden lamp; Fontein|Fountain; Vogelbad|Bird bath; Regenton|Water butt|Regenwaterton|Rain barrel;
      Serre|Greenhouse|Kas|Broeikas; Hangmat|Hammock; Robotmaaier|Robot mower|Robotgrasmaaier; Bladblazer|Leaf blower; Heggenschaar|Hedge trimmer|Snoeischaar|Pruning shears` },

    { id: 'suitcase', lvl: 1, nl: 'Noem iets dat je meeneemt op vakantie in je koffer', en: 'Name something you pack in your suitcase for a holiday', a: `
      Kleren|Clothes|Kleding; Ondergoed|Underwear|Onderbroek|Underpants; Sokken|Socks|Sok; Tandenborstel|Toothbrush; Tandpasta|Toothpaste;
      Zwembroek|Swimming trunks|Bikini|Badpak|Swimsuit|Zwemkledij; Zonnecrème|Sun cream|Sunscreen|Zonnebrand; Pyjama|Pyjamas|Pajamas; Schoenen|Shoes|Slippers|Teenslippers|Flip-flops;
      Handdoek|Towel|Strandlaken|Beach towel; Paspoort|Passport|Identiteitskaart|ID card|Id-kaart; Oplader|Charger|Gsm-oplader|Phone charger; Zonnebril|Sunglasses;
      Shampoo; Deo|Deodorant; T-shirts|T-shirts|T-shirt|Tshirt; Broek|Trousers|Pants|Korte broek|Shorts; Jas|Coat|Jasje|Jacket|Regenjas|Raincoat;
      Boek|Book|Boeken|Books; Medicijnen|Medicine|Medicatie|Pillen|Pills; Kam|Comb|Borstel|Hairbrush; Haardroger|Hairdryer|Föhn; Make-up|Make-up|Makeup;
      Scheermes|Razor|Scheerapparaat|Shaver; Petje|Cap|Hoed|Hat|Zonnehoed|Sun hat; Trui|Jumper|Sweater|Hoodie; Jurk|Dress|Kleedje; Rok|Skirt;
      Koptelefoon|Headphones|Oortjes|Earphones|Earbuds; Camera|Camera|Fototoestel; Wereldstekker|Travel adapter|Stekker-adapter|Plug adapter;
      Powerbank|Power bank; Laptop|Laptop|Tablet; Toilettas|Toiletry bag|Washand|Washcloth; Parfum|Perfume; Muggenspray|Mosquito repellent|Antimuggenmiddel;
      Pleisters|Plasters|Plasters|EHBO-kit|First aid kit; Geld|Money|Portemonnee|Wallet|Cash; Bankkaart|Bank card|Kredietkaart|Credit card;
      Reisgids|Travel guide; Kaartspel|Pack of cards|Speelkaarten|Playing cards; Snacks|Snacks|Snoep|Sweets; Waterfles|Water bottle; Knuffel|Cuddly toy|Knuffelbeer;
      Slaapmasker|Sleep mask|Oogmasker; Oordopjes|Earplugs; Reiskussen|Travel pillow|Nekkussen|Neck pillow; Wasknijpers|Clothes pegs; Waszak|Laundry bag;
      Strijkijzer|Travel iron|Strijkijzertje; Snorkel|Snorkel|Duikbril|Goggles; Ski's|Skis|Skibril|Ski goggles; Wandelschoenen|Hiking boots; Rugzak|Backpack|Rugtas` },

    { id: 'wheels', lvl: 1, nl: 'Noem iets met wielen', en: 'Name something with wheels', a: `
      Auto|Car; Fiets|Bike|Bicycle; Bus; Vrachtwagen|Lorry|Truck; Trein|Train; Motor|Motorbike|Motorfiets|Motorcycle; Skateboard; Step|Scooter|Kickstep|Kick scooter;
      Rolschaatsen|Roller skates|Rollerskates|Skeelers|Inline skates; Kinderwagen|Pram|Buggy|Stroller; Rolstoel|Wheelchair; Tram; Tractor; Vliegtuig|Plane|Airplane|Aeroplane;
      Kruiwagen|Wheelbarrow; Winkelkar|Shopping trolley|Winkelkarretje|Shopping cart; Koffer|Suitcase|Trolley|Rolkoffer; Bureaustoel|Office chair;
      Brommer|Moped|Bromfiets; Driewieler|Tricycle; Bakfiets|Cargo bike; Caravan; Taxi; Ambulance; Brandweerwagen|Fire engine|Fire truck;
      Politiewagen|Police car; Camper|Camper|Mobilhome|Motorhome; Graafmachine|Excavator|Digger; Bulldozer; Kraan|Crane|Hijskraan; Betonmolen|Cement mixer;
      Golfkarretje|Golf cart|Golfkar; Quad; Kart|Go-kart|Gocart|Karting; Segway; Monowiel|Unicycle|Eenwieler; Speelgoedauto|Toy car|Hot Wheels;
      Kar|Cart|Paardenkar|Horse cart|Koets|Carriage; Strijdwagen|Chariot; Tank; Vuilniswagen|Bin lorry|Garbage truck|Vuilniskar; Heftruck|Forklift;
      Bolderkar|Wagon|Bolderwagen; Steekkar|Hand truck|Kruiwagentje; Loopfiets|Balance bike; Hoverboard; Elektrische step|E-scooter|Elektrisch stepje;
      Rollator|Rollator|Walker; Ziekenhuisbed|Hospital bed; Tafel op wieltjes|Trolley table|Serveerwagen|Serving trolley; Barbecue op wieltjes|Barbecue;
      Kanon|Cannon; Marsrover|Mars rover|Rover; Achtbaan|Roller coaster|Achtbaankarretje; Hamsterwiel|Hamster wheel;
      Vliegveld-bagagekar|Luggage trolley|Bagagekar; Tandem; Ligfiets|Recumbent bike; Trolleybus; Metro|Metro|Underground|Subway` },

    { id: 'flying', lvl: 1, nl: 'Noem iets dat kan vliegen', en: 'Name something that can fly', a: `
      Vogel|Bird; Vliegtuig|Plane|Aeroplane|Airplane; Helikopter|Helicopter; Vlieg|Fly; Bij|Bee; Vlinder|Butterfly; Drone; Vleermuis|Bat;
      Mug|Mosquito; Raket|Rocket; Luchtballon|Hot-air balloon|Ballon|Balloon; Vlieger|Kite; Superman; Eend|Duck; Duif|Pigeon|Dove; Arend|Eagle|Adelaar;
      Wesp|Wasp; Lieveheersbeestje|Ladybird|Ladybug; Libel|Dragonfly; Mot|Moth; Meeuw|Seagull|Zeemeeuw; Papegaai|Parrot; Uil|Owl; Kraai|Crow;
      Zwaluw|Swallow; Valk|Falcon; Draak|Dragon; Fee|Fairy; Engel|Angel; Peter Pan; Heks op een bezem|Witch on a broomstick|Heks|Witch|Bezem|Broomstick;
      Vliegend tapijt|Flying carpet|Tapijt; Kerstman|Santa Claus|Santa|Rendier|Reindeer; Dumbo; Zweefvliegtuig|Glider; Zeppelin|Zeppelin|Luchtschip|Airship;
      Parachutist|Parachutist|Parachute|Skydiver; Paraglider|Paraglider|Paragliding; Papieren vliegtuigje|Paper plane; Frisbee; Boemerang|Boomerang;
      Vliegende vis|Flying fish; Vliegende eekhoorn|Flying squirrel; Kolibrie|Hummingbird; Albatros|Albatross; Ooievaar|Stork; Kraanvogel|Crane;
      Kever|Beetle; Hommel|Bumblebee; Sprinkhaan|Grasshopper|Locust; Pegasus; Griffioen|Griffin;
      Feniks|Phoenix; Iron Man; Thor; Hedwig; Buzz Lightyear; Mary Poppins; Aladdin; Vliegende auto|Flying car; Ufo|UFO; Satelliet|Satellite;
      Spaceshuttle|Space Shuttle|Ruimteveer; Straaljager|Fighter jet|Gevechtsvliegtuig; Watervliegtuig|Seaplane; Pterodactylus|Pterodactyl|Pterosaurus|Pterosaur;
      Stof|Dust|Stofjes; Bladeren|Leaves; Zaadjes|Seeds|Pluisjes van een paardenbloem|Dandelion seeds; Tijd|Time` },

    { id: 'cold', lvl: 1, nl: 'Noem iets dat koud is', en: 'Name something that is cold', a: `
      IJs|Ice; Sneeuw|Snow; IJsje|Ice cream|Roomijs; IJsblokje|Ice cube|Ijsblokjes|Ice cubes; Koelkast|Fridge; Diepvries|Freezer; Winter;
      Noordpool|North Pole; Zuidpool|South Pole|Antarctica; Gletsjer|Glacier; IJsberg|Iceberg; Sneeuwpop|Snowman; Hagel|Hail; IJspegel|Icicle;
      Koude drank|Cold drink|Frisdrank|Soft drink; Water|Cold water|Koud water; Vorst|Frost|Rijp; IJsbeer|Polar bear; Pinguïn|Penguin; Iglo|Igloo;
      Ijsthee|Iced tea; Smoothie; Milkshake; Gazpacho; Koude handen|Cold hands|Handen|Hands; Koude voeten|Cold feet|Voeten|Feet; Neus|Nose;
      Ijspak|Ice pack|Coldpack|Cold pack; Koelbox|Cool box|Cooler; Ijsbaan|Ice rink|Schaatsbaan; Ijshotel|Ice hotel; Siberië|Siberia; Groenland|Greenland;
      Alaska; IJsland|Iceland; Bergtop|Mountain top|Top van een berg; Ruimte|Space|Heelal; Pluto; Maan|Moon; Vloeibare stikstof|Liquid nitrogen;
      Droogijs|Dry ice; Ijskoffie|Iced coffee; Koude douche|Cold shower|Ijsbad|Ice bath; Wind|Wind|Koude wind; Metaal|Metal; Marmer|Marble;
      Tegelvloer|Tiled floor|Tegels|Tiles; Kikker|Frog; Slang|Snake|Reptiel; Vis|Fish; Lijk|Corpse; Spook|Ghost; Elsa|Elsa|Frozen;
      Olaf; Sneeuwkoningin|Snow Queen; Yeti|Yeti|Verschrikkelijke sneeuwman|Abominable snowman; Ijstijd|Ice Age; Mammoet|Mammoth; Kou|Cold|Verkoudheid;
      Ijsjes op een stokje|Ice lolly|Waterijsje|Popsicle; Sorbet; Slush|Slushie|Slush Puppie; Ijskristal|Ice crystal|Sneeuwvlok|Snowflake` },

    { id: 'hot', lvl: 1, nl: 'Noem iets dat heet is', en: 'Name something that is hot', a: `
      Zon|Sun; Vuur|Fire; Oven; Koffie|Coffee; Thee|Tea; Soep|Soup; Lava|Lava|Magma; Vulkaan|Volcano; Kookplaat|Hob|Stove|Fornuis|Kookvuur;
      Strijkijzer|Iron; Kaars|Candle|Kaarsvlam|Candle flame; Woestijn|Desert|Sahara; Zomer|Summer; Sauna; Chocolademelk|Hot chocolate|Warme chocomelk;
      Chilipeper|Chilli pepper|Chili|Peper|Pepper; Barbecue|Barbecue|BBQ; Haard|Fireplace|Open haard|Kachel; Radiator|Radiator|Verwarming|Heater;
      Waterkoker|Kettle; Frietketel|Deep fryer|Friteuse; Pizza|Pizza|Pizzaoven|Pizza oven; Haardroger|Hairdryer|Föhn; Krultang|Curling iron|Stijltang|Hair straightener;
      Bad|Hot bath|Warm bad; Douche|Hot shower|Warme douche; Lucifer|Match; Aansteker|Lighter; Kampvuur|Campfire; Toaster|Toaster|Broodrooster;
      Magnetron|Microwave; Lasapparaat|Welder|Lasbrander; Soldeerbout|Soldering iron; Gloeilamp|Light bulb|Lamp; Motor|Engine|Automotor;
      Uitlaat|Exhaust; Hete lucht|Hot air|Luchtballon|Hot-air balloon; Koorts|Fever; Kruik|Hot-water bottle|Warmwaterkruik; Warmtekussen|Heat pad;
      Zand op het strand|Hot sand|Zand|Sand; Asfalt|Tarmac|Asphalt; Draak|Dragon; Hel|Hell; Mercurius|Mercury; Venus; Kern van de aarde|Earth's core;
      Bliksem|Lightning; Geiser|Geyser; Warmwaterbron|Hot spring; Smeltoven|Furnace|Hoogoven|Blast furnace; Gesmolten ijzer|Molten iron|Gloeiend ijzer;
      Sambal|Sambal|Sriracha|Tabasco; Wasabi; Curry; Glühwein|Mulled wine|Warme wijn; Pannenkoek|Pancake|Pannenkoeken; Frietjes|Fries|Frieten` },

    { id: 'screen', lvl: 1, nl: 'Noem iets met een scherm', en: 'Name something with a screen', a: `
      Gsm|Phone|Smartphone|Mobile phone|Mobiele telefoon; Televisie|Television|Tv|TV; Computer|Computer|Pc|PC; Laptop; Tablet|Tablet|iPad;
      Smartwatch|Smartwatch|Slim horloge|Apple Watch; Spelconsole|Games console|Nintendo Switch|Switch; Rekenmachine|Calculator; Bioscoop|Cinema|Filmscherm|Cinema screen;
      Navigatiesysteem|Sat nav|GPS|Gps; Auto|Car|Boordcomputer|Dashboard; Geldautomaat|Cash machine|ATM|Bankautomaat|Bancontact; Kassa|Till|Cash register|Kassasysteem;
      Magnetron|Microwave; Wasmachine|Washing machine; Fototoestel|Camera|Camera; E-reader|E-reader|Kindle; Beamer|Projector|Projectiescherm;
      Monitor; Digitaal bord|Smartboard|Interactive whiteboard|Smartbord; Vliegtuig|Plane|Inflight screen; Kaartjesautomaat|Ticket machine;
      Zelfscankassa|Self-checkout; Scorebord|Scoreboard; Reclamebord|Billboard|Digitaal reclamebord; Stopwatch|Stopwatch|Digitale klok|Digital clock;
      Wekker|Alarm clock|Wekkerradio; Thermostaat|Thermostat; Weegschaal|Scales|Bathroom scales|Personenweegschaal; Babyfoon|Baby monitor;
      Deurbel met camera|Video doorbell|Videofoon; Bewakingscamera|CCTV|Bewakingsscherm|Security monitor; Echo-toestel|Ultrasound machine|Echografie;
      Hartmonitor|Heart monitor|Monitor in het ziekenhuis; Game Boy|Game Boy|Gameboy; Nintendo DS|Nintendo DS|DS; Tamagotchi; Koelkast|Smart fridge|Slimme koelkast;
      Printer; Kopieermachine|Photocopier|Kopieerapparaat; Fitnesstoestel|Treadmill|Loopband; Betaalterminal|Card machine|Betaalautomaat;
      Drone-afstandsbediening|Drone controller; VR-bril|VR headset|Virtual reality-bril; Arcadekast|Arcade machine|Gokkast|Slot machine;
      Rekenmachine met grafiek|Graphing calculator|Grafisch rekentoestel; Oscilloscoop|Oscilloscope; Radar|Radar screen; Sonar|Sonar screen` },

    { id: 'batteries', lvl: 2, nl: 'Noem iets dat op batterijen werkt', en: 'Name something that runs on batteries', a: `
      Afstandsbediening|Remote control|Remote|Afstandsbedieningen; Zaklamp|Torch|Flashlight; Gsm|Phone|Smartphone|Mobile phone; Speelgoed|Toys|Speelgoedauto|Toy car;
      Klok|Clock|Wandklok|Wall clock; Horloge|Watch; Rekenmachine|Calculator; Laptop; Elektrische tandenborstel|Electric toothbrush|Tandenborstel|Toothbrush;
      Rookmelder|Smoke alarm|Rookalarm|Smoke detector; Computermuis|Computer mouse|Muis|Mouse; Toetsenbord|Keyboard|Draadloos toetsenbord; Controller|Controller|Gamecontroller|Joystick;
      Fototoestel|Camera; Radio|Radio|Transistorradio; Weegschaal|Scales|Keukenweegschaal|Kitchen scales; Thermometer|Thermometer|Koortsthermometer;
      Elektrische auto|Electric car|Tesla; Elektrische fiets|E-bike|Elektrische step|E-scooter; Hoortoestel|Hearing aid; Pacemaker; Oortjes|Earbuds|AirPods;
      Koptelefoon|Headphones; Scheerapparaat|Shaver|Elektrisch scheerapparaat; Drone; Robotstofzuiger|Robot vacuum|Robotstofzuiger; Fietslicht|Bike light|Fietslampje;
      Wekker|Alarm clock; Kerstverlichting|Fairy lights|Lichtsnoer|String lights; Deurbel|Doorbell|Draadloze deurbel; Babyfoon|Baby monitor;
      Walkietalkie|Walkie-talkie; Tablet|Tablet|iPad; Smartwatch; Muziekdoosje|Music box|Speelgoedpiano; Knuffel die praat|Talking toy|Praatpop;
      Lasergun|Laser tag gun; Elektrische kaars|LED candle|Ledkaars; Haartrimmer|Hair clipper|Tondeuse; Zaklantaarn op je hoofd|Head torch|Hoofdlamp|Headlamp;
      Bloeddrukmeter|Blood pressure monitor; Insulinepomp|Insulin pump; Glucosemeter|Blood glucose meter;
      E-reader|E-reader|Kindle; Game Boy|Game Boy|Gameboy; Tamagotchi; Robotmaaier|Robot mower; Grasmaaier|Battery lawnmower|Accugrasmaaier; Boormachine|Cordless drill|Accuboor;
      Ruimtevoertuig|Mars rover|Satelliet|Satellite; Onderzeeër|Submarine; Hybride auto|Hybrid car; Golfkarretje|Golf cart; Rolstoel|Electric wheelchair|Elektrische rolstoel` },

    { id: 'street', lvl: 1, nl: 'Noem iets dat je op straat ziet', en: 'Name something you see in the street', a: `
      Auto|Car|Auto's|Cars; Fiets|Bike|Bicycle; Verkeerslicht|Traffic light|Stoplicht; Zebrapad|Zebra crossing|Oversteekplaats|Pedestrian crossing;
      Mensen|People|Voetganger|Pedestrian; Bus; Huizen|Houses|Huis|House; Bomen|Trees|Boom|Tree; Lantaarnpaal|Lamppost|Straatlantaarn|Street light; Stoep|Pavement|Sidewalk|Trottoir;
      Verkeersbord|Road sign|Bord|Sign; Winkel|Shop|Winkels|Shops; Hond|Dog|Honden|Dogs; Vuilnisbak|Bin|Rubbish bin|Vuilbak|Trash can; Brievenbus|Postbox|Mailbox;
      Duiven|Pigeons|Duif|Pigeon; Bankje|Bench|Zitbank; Taxi; Vrachtwagen|Lorry|Truck; Motor|Motorbike|Motorcycle; Tram; Bushalte|Bus stop; Rotonde|Roundabout;
      Kruispunt|Junction|Crossroads|Intersection; Fietspad|Cycle path|Bike lane; Parkeerplaats|Parking space|Parking|Car park; Parkeermeter|Parking meter|Parkeerautomaat;
      Graffiti|Graffiti|Muurschildering|Mural; Reclamebord|Billboard|Affiche|Poster; Bouwwerf|Building site|Construction site|Werf; Kraan|Crane;
      Politie|Police|Politieagent|Police officer; Ambulance; Postbode|Postman|Postbode; Pakjesbezorger|Delivery driver|Koerier|Courier; Kauwgom op de grond|Chewing gum on the ground|Kauwgom;
      Afval|Litter|Rommel|Rubbish; Plassen|Puddles|Plas|Puddle; Putdeksel|Manhole cover|Riooldeksel|Drain; Brandkraan|Fire hydrant; Fontein|Fountain;
      Standbeeld|Statue; Kerk|Church; Café|Café|Terras|Terrace|Kroeg|Pub; Straatmuzikant|Busker|Straatartiest|Street performer; Daklozen|Homeless person|Dakloze;
      Kat|Cat|Katten; Step|Scooter|Deelstep|E-scooter; Bloembak|Planter|Bloemen|Flowers; Bewakingscamera|CCTV camera|Camera; Flitspaal|Speed camera|Trajectcontrole;
      Verkeersdrempel|Speed bump; Paaltjes|Bollards|Paaltje|Bollard; Pijl|Arrow|Wegmarkering|Road markings; Laadpaal|Charging point|Charging station; Fietsenrek|Bike rack;
      Glascontainer|Bottle bank|Container; Telefooncel|Phone box; IJskar|Ice cream van|Ijsjeskar; Marktkraam|Market stall|Markt|Market; Stoepkrijt|Pavement chalk|Krijt` },

    { id: 'buildings', lvl: 1, nl: 'Noem een soort gebouw', en: 'Name a type of building', a: `
      Huis|House; School; Ziekenhuis|Hospital; Kerk|Church; Kasteel|Castle; Flatgebouw|Block of flats|Appartementsgebouw|Apartment building|Flat;
      Winkel|Shop|Store; Supermarkt|Supermarket; Kantoor|Office|Kantoorgebouw|Office building; Wolkenkrabber|Skyscraper; Station|Station|Treinstation|Train station;
      Stadion|Stadium; Bibliotheek|Library; Museum; Bioscoop|Cinema|Movie theater; Theater|Theatre|Schouwburg; Restaurant; Hotel; Gemeentehuis|Town hall|Stadhuis|City hall;
      Moskee|Mosque; Synagoge|Synagogue; Tempel|Temple; Kathedraal|Cathedral; Fabriek|Factory; Boerderij|Farm|Hoeve|Farmhouse; Schuur|Barn;
      Garage; Tankstation|Petrol station|Gas station; Politiekantoor|Police station|Politiebureau|Commissariaat; Brandweerkazerne|Fire station;
      Gevangenis|Prison|Jail; Universiteit|University; Sporthal|Sports hall|Sportcentrum|Leisure centre; Zwembad|Swimming pool|Zwembadgebouw;
      Postkantoor|Post office; Bank; Paleis|Palace; Vuurtoren|Lighthouse; Windmolen|Windmill|Molen|Mill; Iglo|Igloo; Piramide|Pyramid; Toren|Tower;
      Villa; Bungalow; Chalet; Tent; Hut|Hut|Strandhut|Beach hut; Kapel|Chapel; Klooster|Monastery|Abdij|Abbey; Parlement|Parliament|Parlementsgebouw;
      Luchthaven|Airport|Vliegveld; Ambassade|Embassy; Rechtbank|Court|Gerechtsgebouw|Courthouse; Kazerne|Barracks; Bunker; Kerncentrale|Nuclear power station;
      Pakhuis|Warehouse|Magazijn; Winkelcentrum|Shopping centre|Mall; Parkeergarage|Car park|Multi-storey car park|Parking garage; Serre|Greenhouse|Kas;
      Rusthuis|Care home|Woonzorgcentrum|Nursing home; Crèche|Nursery|Kinderdagverblijf|Daycare; Jeugdherberg|Youth hostel|Hostel; Casino; Sterrenwacht|Observatory;
      Planetarium; Aquarium; Dierentuin|Zoo; Slachthuis|Slaughterhouse; Brouwerij|Brewery; Wasserette|Launderette|Laundromat; Tuinhuis|Shed|Tuinhuisje` },

    { id: 'shops', lvl: 1, nl: 'Noem een soort winkel', en: 'Name a type of shop', a: `
      Bakker|Baker's|Bakkerij|Bakery; Supermarkt|Supermarket; Slager|Butcher's|Beenhouwer|Butcher|Slagerij; Kledingwinkel|Clothes shop|Clothing store;
      Apotheek|Pharmacy|Chemist's; Schoenenwinkel|Shoe shop; Boekenwinkel|Bookshop|Bookstore|Boekhandel; Speelgoedwinkel|Toy shop|Toy store;
      Kapper|Hairdresser's|Kapsalon|Barbershop|Barber; Bloemenwinkel|Florist|Bloemist; Krantenwinkel|Newsagent|Dagbladhandel|Krantenkiosk;
      Groenteboer|Greengrocer|Groentewinkel; Elektronicawinkel|Electronics shop|Mediamarkt; Juwelier|Jeweller's|Jewelry store; Opticien|Optician's|Brillenwinkel;
      Fietsenwinkel|Bike shop|Fietsenmaker; Bouwmarkt|DIY store|Hardware store|Doe-het-zelfzaak; Meubelwinkel|Furniture shop|Furniture store; Sportwinkel|Sports shop|Sporting goods store;
      Snoepwinkel|Sweet shop|Candy store; Ijssalon|Ice cream parlour|Ijswinkel; Kaaswinkel|Cheese shop; Visboer|Fishmonger|Viswinkel; Chocolatier|Chocolate shop|Chocoladewinkel;
      Tweedehandswinkel|Charity shop|Kringwinkel|Second-hand shop|Thrift store; Dierenwinkel|Pet shop|Pet store; Tuincentrum|Garden centre; Drogisterij|Drugstore|Kruidvat;
      Parfumerie|Perfumery; Wijnwinkel|Wine shop|Drankenhandel|Off-licence|Liquor store; Tabakswinkel|Tobacconist; Muziekwinkel|Music shop; Gamewinkel|Game shop|Game Mania;
      Telefoonwinkel|Phone shop; Souvenirwinkel|Souvenir shop|Giftshop|Gift shop; Antiekwinkel|Antique shop; Kunstgalerie|Art gallery|Galerie; Papierwinkel|Stationer's|Kantoorboekhandel;
      Nachtwinkel|Late-night shop|Avondwinkel|Convenience store; Frituur|Chip shop|Frietkot|Chippy; Pizzeria; Broodjeszaak|Sandwich shop; Koffiebar|Coffee shop|Coffeeshop;
      Wassalon|Launderette|Wasserette; Stomerij|Dry cleaner's; Schoenmaker|Cobbler; Slotenmaker|Locksmith; Naaiatelier|Tailor's|Kleermaker|Tailor; Lingeriewinkel|Lingerie shop;
      Warenhuis|Department store|Hema; Outletwinkel|Outlet store|Outlet; Biowinkel|Health food shop|Natuurvoedingswinkel|Organic shop; Delicatessenzaak|Deli|Traiteur;
      Pandjeshuis|Pawnshop; Wapenwinkel|Gun shop; Hobbywinkel|Craft shop|Knutselwinkel; Fotowinkel|Photo shop; Reisbureau|Travel agent's|Travel agency; Makelaar|Estate agent's` },

    { id: 'birthday', lvl: 1, nl: 'Noem iets dat je op een verjaardagsfeestje ziet', en: 'Name something you see at a birthday party', a: `
      Taart|Cake|Verjaardagstaart|Birthday cake; Kaarsjes|Candles|Kaars|Candle; Cadeaus|Presents|Cadeau|Present|Gifts|Gift; Ballonnen|Balloons|Ballon|Balloon;
      Slingers|Streamers|Bunting|Slinger; Feesthoedje|Party hat|Hoedje; Vrienden|Friends|Familie|Family|Gasten|Guests; Snoep|Sweets|Candy; Chips|Crisps|Chips;
      Frisdrank|Soft drinks|Limonade|Lemonade|Cola; Muziek|Music; Kaartjes|Cards|Verjaardagskaart|Birthday card; Confetti; Spelletjes|Games;
      Pizza; Ijs|Ice cream; Cupcakes|Cupcakes|Cupcake|Muffins; Taartvorkjes|Cake forks|Bordjes|Paper plates; Rietjes|Straws|Rietje;
      Toeters|Party blowers|Feesttoeter|Party horn; Pinata|Piñata|Pinata; Clown; Goochelaar|Magician; Springkasteel|Bouncy castle|Luchtkasteel;
      Dansen|Dancing; Foto's|Photos; Lampionnen|Lanterns|Lampion; "Lang zal ze leven"|Happy Birthday song|Verjaardagslied|Lang zal hij leven;
      Cijferkaars|Number candle|Cijferballon|Number balloon; Pakpapier|Wrapping paper|Inpakpapier; Strikjes|Bows|Strik; Schmink|Face paint|Grime;
      Stoelendans|Musical chairs; Zakjes met snoep|Party bags|Uitdeelzakjes|Goodie bags; Taartschep|Cake slice; Slagroom|Whipped cream|Room;
      Hapjes|Snacks|Nibbles|Finger food; Worstenbroodjes|Sausage rolls; Barbecue; Champagne|Champagne|Cava|Prosecco; Wijn|Wine; Bier|Beer; Koffie|Coffee;
      Fototoestel|Camera; Feestverlichting|Party lights|Discobal|Disco ball; DJ; Karaoke; Fontein|Sparkler|Sterretjes|Sparklers; Taart in je gezicht|Cake in the face;
      Verjaardagsbanner|Birthday banner|Banner; Opa en oma|Grandparents|Grootouders; Huisdier met een hoedje|Dog in a party hat; Uitnodiging|Invitation|Uitnodigingen` },

    { id: 'christmas', lvl: 1, nl: 'Noem iets dat met Kerstmis te maken heeft', en: 'Name something to do with Christmas', a: `
      Kerstboom|Christmas tree|Kerstbomen; Kerstman|Santa Claus|Santa|Father Christmas; Cadeaus|Presents|Cadeau|Present|Gifts; Sneeuw|Snow;
      Kerstballen|Baubles|Kerstbal|Bauble; Rendier|Reindeer|Rudolf|Rudolph; Kerstverlichting|Christmas lights|Lichtjes|Fairy lights; Piek|Tree topper|Ster|Star;
      Kerststal|Nativity scene|Kribbe|Manger; Jezus|Jesus|Kindje Jezus|Baby Jesus; Maria|Mary; Jozef|Joseph; Engel|Angel|Engelen|Angels; Drie Koningen|Three Kings|Wijzen|Wise men;
      Kerstliedjes|Christmas carols|Kerstlied|Carol; Kerstmarkt|Christmas market; Kalkoen|Turkey; Kerstdiner|Christmas dinner; Kerststronk|Yule log|Bûche de Noël;
      Sneeuwpop|Snowman; Elfjes|Elves|Elf; Slee|Sleigh; Schoorsteen|Chimney; Kous|Stocking|Kerstsok; Hulst|Holly; Mistletoe|Mistletoe|Maretak;
      Kerstkaart|Christmas card; Kerstman-muts|Santa hat|Kerstmuts; Kersttrui|Christmas jumper|Christmas sweater; Glühwein|Mulled wine|Warme wijn;
      Kaarsen|Candles|Kaars|Candle; Adventskalender|Advent calendar; Adventskrans|Advent wreath|Kerstkrans|Christmas wreath; Zuurstok|Candy cane;
      Peperkoek|Gingerbread|Peperkoekmannetje|Gingerbread man; Kerstpudding|Christmas pudding; Kerstkoekjes|Christmas cookies; Pakjespapier|Wrapping paper|Inpakpapier;
      Noordpool|North Pole; Kerstvakantie|Christmas holidays|Vakantie; Nachtmis|Midnight Mass|Kerk|Church; Bethlehem; Kerstster|Poinsettia; Dennenappel|Pine cone;
      Grinch|The Grinch; Home Alone|Home Alone|Thuis alleen; "All I Want for Christmas"|Mariah Carey|All I Want for Christmas Is You; "Last Christmas"|Last Christmas|Wham!;
      Scrooge|Scrooge|Ebenezer Scrooge; Notenkraker|Nutcracker; Klokken|Bells|Bel|Jingle bells; Gourmet|Gourmet|Raclette|Fondue; Champagne|Champagne|Prosecco;
      Kerstpakket|Christmas hamper; Kerststol|Stollen; Panettone; Kerstcrackers|Christmas crackers|Cracker; Familie|Family; Secret Santa|Secret Santa|Lootjes trekken` },

    { id: 'halloween', lvl: 1, nl: 'Noem iets dat met Halloween te maken heeft', en: 'Name something to do with Halloween', a: `
      Pompoen|Pumpkin|Lampionpompoen|Jack-o'-lantern; Heks|Witch; Spook|Ghost; Snoep|Sweets|Candy; Verkleden|Dressing up|Verkleedkleren|Costume|Kostuum;
      Skelet|Skeleton; Vampier|Vampire|Dracula; Zombie; Spin|Spider|Spinnen|Spiders; Spinnenweb|Cobweb|Spiderweb; Vleermuis|Bat; Zwarte kat|Black cat|Kat;
      Bezem|Broomstick|Heksenbezem; Grafsteen|Gravestone|Kerkhof|Graveyard|Cemetery; Mummie|Mummy; Weerwolf|Werewolf; Frankenstein; Duivel|Devil;
      Monster; Schedel|Skull; "Trick or treat"|Trick or treat|Snoep of je leven; Masker|Mask; Heksenhoed|Witch's hat; Ketel|Cauldron|Heksenketel;
      Kaarsen|Candles|Kaars; Oktober|October|31 oktober; Spookhuis|Haunted house; Bloed|Blood; Doodshoofd|Death's head|Doodskop; Doodskist|Coffin;
      Uil|Owl; Kraai|Crow|Raaf|Raven; Maan|Moon|Volle maan|Full moon; Nacht|Night; Schrik|Fright|Angst|Fear; Horrorfilm|Horror film|Griezelfilm;
      Zeis|Scythe|Magere Hein|Grim Reaper; Clown|Scary clown|Enge clown; Gremlin; Lijk|Corpse; Mist|Fog; Toverdrank|Potion|Heksendrankje;
      Schmink|Face paint|Make-up; Nepbloed|Fake blood; Pompoensoep|Pumpkin soup; Appeltjes happen|Apple bobbing|Appelhappen; Snoepzakje|Trick-or-treat bag|Emmertje;
      Allerheiligen|All Saints' Day; Hocus Pocus|Hocus Pocus; Jack Skellington|Jack Skellington|Nightmare Before Christmas; Casper; Ghostbusters;
      Michael Myers|Michael Myers|Halloween; Scream|Scream|Ghostface; Chucky; Pennywise; Freddy Krueger` },

    { id: 'fairground', lvl: 2, nl: 'Noem een attractie op de kermis of in een pretpark', en: 'Name a funfair or theme park ride', a: `
      Achtbaan|Roller coaster; Reuzenrad|Ferris wheel|Big wheel; Botsauto's|Bumper cars|Dodgems|Botsautootjes; Draaimolen|Merry-go-round|Carousel|Paardenmolen;
      Spookhuis|Ghost train|Haunted house|Spooktrein; Vrije val|Drop tower|Free fall|Vrijevaltoren; Wildwaterbaan|Log flume|Rapids|Rafting; Schommelschip|Pirate ship|Swinging ship|Piratenschip;
      Zweefmolen|Chair swing ride|Swing carousel|Wave swinger; Spiegelpaleis|Hall of mirrors|Spiegeldoolhof; Kop-van-Jut|High striker|Strength tester;
      Eendjes vissen|Hook-a-duck|Duck pond; Schiettent|Shooting gallery|Schietkraam; Grijpmachine|Claw machine|Grijpkraan; Waltzer|Waltzer|Rups|Caterpillar;
      Theekopjes|Teacups|Draaiende kopjes|Spinning teacups; Springkussen|Bouncy castle|Luchtkussen; Trampoline|Trampoline|Bungeetrampoline|Bungee trampoline;
      Glijbaan|Slide|Reuzenglijbaan|Helter-skelter; Doolhof|Maze|Labyrint|Labyrinth; Kabelbaan|Cable car|Gondel; Monorail; Treintje|Miniature train|Kindertreintje;
      Waterglijbaan|Water slide; Wilde muis|Wild mouse|Wilde Muis; Booster|Booster|Top Spin|Breakdance; Octopus|Octopus|Polyp; Paratrooper; Enterprise|Enterprise|Ranger;
      Rodelbaan|Toboggan|Alpine coaster|Zomerrodelbaan; Skyflyer|Skycoaster|Sky swing; Bungeejump|Bungee jump; Katapult|Slingshot|Reverse bungee;
      Toren|Tower|Uitkijktoren|Observation tower; 4D-film|4D cinema|4D-bioscoop; Simulator|Simulator|Vluchtsimulator|Motion simulator; Darkride|Dark ride|Spookbaan;
      Lasergame|Laser tag; Kartbaan|Go-kart track|Karting|Go-karts; Paardjes|Pony ride|Ponyrijden; Waterfietsen|Pedalos|Waterfiets|Pedalo;
      Suikerspinkraam|Candyfloss stall|Suikerspin|Candyfloss; Smoutebollen|Doughnut stall|Oliebollen|Doughnuts;
      Ballen gooien|Coconut shy|Blikken gooien|Can toss; Ringwerpen|Hoopla|Ring toss; Paardenrace-spel|Horse racing game|Kamelenrace|Camel race;
      Halfpipe|Halfpipe|Freestyle; Spinning coaster|Spinning coaster|Draaiende achtbaan; Houten achtbaan|Wooden roller coaster; Hyper coaster|Hypercoaster|Giga coaster` },

    { id: 'hospital', lvl: 1, nl: 'Noem iets dat je in een ziekenhuis vindt', en: 'Name something you find in a hospital', a: `
      Dokter|Doctor|Arts|Dokters|Doctors; Verpleegster|Nurse|Verpleger|Verpleegkundige; Bed|Bed|Ziekenhuisbed|Hospital bed; Patiënt|Patient|Patiënten|Patients|Zieken;
      Ambulance; Spuit|Syringe|Injectie|Injection|Naald|Needle; Rolstoel|Wheelchair; Medicijnen|Medicine|Pillen|Pills; Operatiekamer|Operating theatre|Operating room|Operatiezaal;
      Spoed|A&E|Emergency room|Spoedafdeling|Spoedgevallen|ER; Stethoscoop|Stethoscope; Röntgenfoto|X-ray|Rontgen; Infuus|Drip|IV drip; Chirurg|Surgeon;
      Gips|Plaster cast|Cast; Krukken|Crutches|Kruk|Crutch; Verband|Bandage|Pleister|Plaster; Thermometer; Bloeddrukmeter|Blood pressure monitor;
      Hartmonitor|Heart monitor|Monitor; Wachtkamer|Waiting room; Lift|Lift|Elevator; Kantine|Canteen|Cafetaria|Cafeteria; Bezoekers|Visitors|Bezoek;
      Baby's|Babies|Kraamafdeling|Maternity ward|Materniteit; Brancard|Stretcher; Mondmasker|Face mask|Masker|Mask; Handschoenen|Gloves|Wegwerphandschoenen;
      Scanner|Scanner|MRI|CT-scan|CT scan; Echografie|Ultrasound|Echo; Labo|Lab|Laboratorium|Laboratory; Bloed|Blood|Bloedzakjes|Blood bags;
      Apotheek|Pharmacy; Bloemen|Flowers; Druiven|Grapes; Kaartjes|Get-well cards|Beterschapskaart; Schorten|Gowns|Ziekenhuisschort|Hospital gown;
      Scalpel; Hechtingen|Stitches|Hechting; Zuurstof|Oxygen|Zuurstofmasker|Oxygen mask; Defibrillator|Defibrillator|AED; Beademingstoestel|Ventilator;
      Intensieve zorg|Intensive care|IC|ICU; Kinderafdeling|Children's ward|Pediatrie; Receptie|Reception|Onthaal; Helikopterplatform|Helipad|Helikopter|Helicopter;
      Ontsmettingsmiddel|Disinfectant|Handgel|Hand sanitiser; Ondersteek|Bedpan|Po; Gordijnen rond het bed|Hospital curtains|Gordijn` },

    { id: 'classroom', lvl: 1, nl: 'Noem iets dat je in een klaslokaal vindt', en: 'Name something you find in a classroom', a: `
      Bord|Board|Schoolbord|Blackboard|Whiteboard; Bank|Desk|Schoolbank|Lessenaar|Bankjes; Stoel|Chair|Stoelen|Chairs; Leerkracht|Teacher|Juf|Meester|Leraar|Lerares;
      Leerlingen|Pupils|Students|Leerling|Klasgenoten|Classmates; Krijt|Chalk; Boeken|Books|Boek|Book; Bordenwisser|Board rubber|Board eraser|Wisser;
      Stiften|Markers|Whiteboardstift|Whiteboard marker; Klok|Clock; Raam|Window|Ramen|Windows; Kast|Cupboard|Kasten|Boekenkast|Bookcase; Kaart|Map|Wereldkaart|World map;
      Wereldbol|Globe; Computer|Computer|Pc|PC; Digitaal bord|Smartboard|Interactive whiteboard; Beamer|Projector; Vuilbak|Bin|Prullenbak|Wastepaper basket;
      Schriften|Notebooks|Schrift|Notebook; Pennen|Pens|Pen; Potloden|Pencils|Potlood|Pencil; Lat|Ruler; Schaar|Scissors; Lijm|Glue; Papier|Paper;
      Rugzakken|Schoolbags|Boekentas|Schoolbag|Rugzak; Kapstok|Coat hooks|Kapstokken|Coat rack; Planten|Plants|Plant; Poster|Posters|Affiches;
      Kalender|Calendar; Lessenrooster|Timetable|Rooster|Schedule; Agenda|Planner|Schoolagenda; Toetsen|Tests|Toets|Test|Examens|Exams;
      Rekenmachine|Calculator; Woordenboek|Dictionary; Laptop|Laptops|Chromebook; Tablet|Tablets|iPads; Luidspreker|Speakers|Speaker; Microfoon|Microphone;
      Deur|Door; Lamp|Lights|Licht|TL-lamp; Radiator|Radiator|Verwarming|Heating; Gordijnen|Curtains|Rolgordijn|Blinds; Lavabo|Sink|Wasbak;
      Puntenslijper|Pencil sharpener|Slijper; Nietjesmachine|Stapler; Prikbord|Noticeboard|Bulletin board; Speelgoed|Toys; Klassenhuisdier|Class pet|Hamster|Goudvis|Goldfish;
      Rapport|Report card; Gsm-bakje|Phone box|Gsm-kastje; Kauwgom onder de bank|Gum under the desk|Kauwgom; Spiekbriefje|Cheat sheet|Spiekpapiertje;
      Skelet|Skeleton|Anatomisch model; Microscoop|Microscope; Reageerbuisjes|Test tubes|Proefbuisjes; Periodiek systeem|Periodic table` },

    { id: 'rooms', lvl: 1, nl: 'Noem een kamer of ruimte in een huis', en: 'Name a room or space in a house', a: `
      Keuken|Kitchen; Slaapkamer|Bedroom; Badkamer|Bathroom; Woonkamer|Living room|Salon|Lounge|Living; Toilet|Toilet|Wc|WC|Loo;
      Zolder|Attic|Loft; Kelder|Cellar|Basement; Garage; Gang|Hallway|Hall|Corridor; Eetkamer|Dining room; Bureau|Study|Werkkamer|Office|Thuiskantoor|Home office;
      Hal|Entrance hall|Inkomhal|Entrance; Berging|Storage room|Bergruimte|Storeroom|Rommelkamer|Junk room; Washok|Utility room|Wasplaats|Laundry room;
      Speelkamer|Playroom; Logeerkamer|Guest room|Gastenkamer|Spare room; Veranda|Conservatory|Serre|Sunroom; Balkon|Balcony; Terras|Patio|Terrace;
      Trappenhuis|Stairwell|Trap|Stairs; Overloop|Landing; Kinderkamer|Children's room|Babykamer|Nursery; Dressing|Walk-in wardrobe|Inloopkast|Walk-in closet;
      Bibliotheek|Library|Leeskamer|Reading room; Hobbyruimte|Hobby room|Atelier|Studio; Fitnessruimte|Home gym|Fitness; Thuisbioscoop|Home cinema|Bioscoopkamer;
      Wijnkelder|Wine cellar; Sauna; Zwembad|Swimming pool|Binnenzwembad|Indoor pool; Schuur|Shed|Tuinhuis; Tuin|Garden; Oprit|Driveway; Dak|Roof|Dakterras|Roof terrace;
      Kast onder de trap|Cupboard under the stairs; Voorraadkast|Pantry|Provisiekast|Larder; Bijkeuken|Scullery|Back kitchen; Vestiaire|Cloakroom|Garderobe;
      Muziekkamer|Music room; Gamekamer|Games room|Gameroom; Studeerkamer|Study room; Panic room|Panic room|Schuilkelder|Bunker; Kluisruimte|Vault|Kluis` },

    { id: 'appliances', lvl: 1, nl: 'Noem een elektrisch toestel in huis', en: 'Name an electrical appliance in the home', a: `
      Koelkast|Fridge|Refrigerator; Wasmachine|Washing machine; Televisie|Television|Tv|TV; Microgolfoven|Microwave|Magnetron; Stofzuiger|Vacuum cleaner|Hoover;
      Vaatwasser|Dishwasher|Afwasmachine; Oven; Waterkoker|Kettle; Broodrooster|Toaster; Koffiezetapparaat|Coffee machine|Koffiemachine|Coffee maker;
      Droogkast|Tumble dryer|Droger|Dryer; Haardroger|Hairdryer|Föhn; Strijkijzer|Iron; Mixer|Blender|Staafmixer|Hand blender; Diepvries|Freezer;
      Kookplaat|Hob|Cooker|Fornuis|Stove; Computer|Computer|Pc|PC; Laptop; Lamp|Lamp|Lampen|Lights; Ventilator|Fan; Airco|Air conditioner|Air conditioning|Airconditioning;
      Frietketel|Deep fryer|Friteuse|Airfryer|Air fryer; Keukenrobot|Food processor; Tosti-ijzer|Toastie maker|Croque-monsieurtoestel|Sandwich maker;
      Elektrische tandenborstel|Electric toothbrush; Scheerapparaat|Shaver|Electric razor; Wafelijzer|Waffle iron|Wafelmaker; Radio; Printer;
      Spelconsole|Games console|PlayStation|Xbox; Router|Router|Wifi-router|Modem; Gsm-oplader|Phone charger|Oplader|Charger; Wekker|Alarm clock;
      Elektrisch vuurtje|Electric heater|Verwarming|Heater|Kachel; Luchtbevochtiger|Humidifier; Luchtreiniger|Air purifier; Ontvochtiger|Dehumidifier;
      Rijstkoker|Rice cooker; Slowcooker|Slow cooker; Sapcentrifuge|Juicer|Fruitpers|Citruspers; Raclette|Raclette|Gourmetstel|Gourmet set; Fonduestel|Fondue set;
      Melkopschuimer|Milk frother; Ijsmachine|Ice cream maker; Broodbakmachine|Bread maker; Weegschaal|Scales; Robotstofzuiger|Robot vacuum; Stoomreiniger|Steam cleaner;
      Krultang|Curling iron|Stijltang|Hair straightener; Tondeuse|Hair clipper|Trimmer; Elektrische deken|Electric blanket; Boiler|Boiler|Warmwaterboiler|Water heater;
      Diepvrieskist|Chest freezer; Wijnkoelkast|Wine fridge; Waterontharder|Water softener; Bewakingscamera|Security camera; Slimme speaker|Smart speaker|Alexa|Google Home` },

    { id: 'wallet', lvl: 2, nl: 'Noem iets dat je in een portemonnee vindt', en: 'Name something you find in a wallet', a: `
      Geld|Money|Cash; Bankkaart|Bank card|Debetkaart|Debit card|Pinpas; Identiteitskaart|ID card|Id-kaart|Identity card|Eid; Munten|Coins|Muntstukken|Kleingeld|Change;
      Briefjes|Banknotes|Biljetten|Notes|Bills; Kredietkaart|Credit card|Visa|Mastercard; Rijbewijs|Driving licence|Driver's license; Kasticket|Receipt|Bonnetje|Kassabon;
      Foto|Photo|Pasfoto|Passport photo; Klantenkaart|Loyalty card|Spaarkaart|Store card; Ziekenfondskaart|Health insurance card|Mutualiteitskaart;
      Studentenkaart|Student card|Student ID; Bibliotheekkaart|Library card|Bibkaart; Busabonnement|Bus pass|Treinabonnement|Travel card|Abonnement;
      Cadeaubon|Gift card|Gift voucher|Waardebon; Visitekaartje|Business card|Visitekaart; Sleutel|Key|Sleutels; Condoom|Condom; Lotje|Lottery ticket|Kraslot|Scratch card;
      Ticket|Ticket|Bioscoopticket|Cinema ticket|Concertticket; Bloeddonorkaart|Blood donor card|Donorkaart|Organ donor card; Zegels|Stamps|Postzegel|Stamp;
      Briefje met nummer|Note with a phone number|Papiertje|Scrap of paper; Lidkaart|Membership card|Fitnesskaart|Gym card; Parkeerticket|Parking ticket;
      Pleister|Plaster; Tandenstoker|Toothpick; Vreemd geld|Foreign currency|Euro's|Dollars;
      SIM-kaart|SIM card|Simkaart; Geheugenkaart|Memory card|SD-kaart; Coupons|Coupons|Kortingsbon|Voucher; Klavertje vier|Four-leaf clover|Geluksbrenger|Lucky charm;
      Babyfoto|Baby photo; Briefje van mama|Note from mum` },

    { id: 'wood', lvl: 2, nl: 'Noem iets dat van hout gemaakt is', en: 'Name something made of wood', a: `
      Tafel|Table; Stoel|Chair; Kast|Cupboard|Wardrobe; Deur|Door; Potlood|Pencil; Papier|Paper; Bed; Vloer|Floor|Parket|Parquet|Houten vloer|Wooden floor;
      Huis|House|Houten huis|Wooden house|Blokhut|Log cabin; Boot|Boat|Roeiboot|Rowing boat; Lucifer|Match|Lucifers|Matches; Gitaar|Guitar; Viool|Violin;
      Piano; Hek|Fence|Omheining; Trap|Stairs|Ladder; Boomhut|Treehouse; Speelgoed|Toys|Houten speelgoed|Wooden toys|Blokken|Building blocks; Brug|Bridge|Houten brug;
      Pinokkio|Pinocchio; Bankje|Bench; Snijplank|Chopping board|Cutting board; Houten lepel|Wooden spoon|Pollepel; Eetstokjes|Chopsticks; Ijsstokje|Lolly stick|Popsicle stick;
      Wasknijper|Clothes peg|Clothespin; Klompen|Clogs|Klomp|Clog; Fotokader|Picture frame|Kader; Kist|Chest|Schatkist|Treasure chest; Doodskist|Coffin;
      Honkbalknuppel|Baseball bat; Hockeystick|Hockey stick; Cricketbat|Cricket bat; Schaakbord|Chessboard|Schaakstukken|Chess pieces; Jenga; Skateboard;
      Ski's|Skis; Peddel|Paddle|Roeiriem|Oar; Vat|Barrel|Wijnvat|Wine barrel; Kurk|Cork; Bezemsteel|Broom handle|Steel|Handle; Hamer|Hammer handle;
      Boekenkast|Bookcase|Boekenplank|Bookshelf; Bureau|Desk; Wieg|Cradle|Cot; Schommelstoel|Rocking chair; Kapstok|Coat rack; Houten paard|Rocking horse|Hobbelpaard;
      Paard van Troje|Trojan horse; Totempaal|Totem pole; Kruis|Cross; Molen|Windmill|Windmolen; Schip|Ship|Zeilschip|Sailing ship|Piratenschip|Pirate ship;
      Pallet|Pallet; Pergola; Tuinhuis|Garden shed|Shed; Sauna; Fluit|Recorder|Blokfluit; Xylofoon|Xylophone; Klarinet|Clarinet; Drumstokken|Drumsticks;
      Tandenstoker|Toothpick; Houtskool|Charcoal; Wierookstokje|Incense stick; Toverstaf|Wand|Toverstok; Pijl en boog|Bow and arrow|Boog|Bow; Katapult|Catapult|Slingshot` },

    { id: 'glass', lvl: 2, nl: 'Noem iets dat van glas gemaakt is', en: 'Name something made of glass', a: `
      Raam|Window|Ramen|Windows; Glas|Drinking glass|Drinkglas; Fles|Bottle|Glazen fles|Glass bottle; Bril|Glasses|Spectacles; Spiegel|Mirror;
      Lamp|Lamp|Gloeilamp|Light bulb|Lampje; Vaas|Vase; Bokaal|Jar|Pot|Glazen pot|Glass jar|Confituurpot|Jam jar; Wijnglas|Wine glass; Aquarium|Aquarium|Vissenkom|Fish bowl;
      Autoruit|Car window|Voorruit|Windscreen|Windshield; Scherm|Screen|Gsm-scherm|Phone screen; Zonnebril|Sunglasses; Deur|Glass door|Glazen deur;
      Serre|Greenhouse|Kas|Conservatory; Kerstbal|Bauble|Kerstballen; Knikker|Marble|Knikkers|Marbles; Zandloper|Hourglass; Glazen muiltje|Glass slipper;
      Kristallen bol|Crystal ball|Glazen bol; Sneeuwbol|Snow globe; Thermometer; Reageerbuis|Test tube|Proefbuis; Microscoop|Microscope; Verrekijker|Binoculars;
      Telescoop|Telescope; Camera|Camera lens|Lens; Brandglas|Magnifying glass|Vergrootglas; Glas-in-lood|Stained glass|Glasraam|Kerkraam; Fotolijst|Picture frame|Fotokader;
      Ovenschaal|Oven dish|Pyrex; Glazen tafel|Glass table|Tafelblad|Table top; Douchewand|Shower screen|Douchedeur; Kroonluchter|Chandelier;
      Parfumflesje|Perfume bottle; Kaarsenhouder|Candle holder|Theelichthouder|Tealight holder; Asbak|Ashtray; Karaf|Carafe|Decanter; Theepot|Glass teapot;
      Glazen koepel|Glass dome; Piramide van het Louvre|Louvre Pyramid; Wolkenkrabber|Skyscraper|Glazen gevel|Glass facade; Glasvezel|Fibre optics|Glasvezelkabel;
      Zonnepaneel|Solar panel; Horloge|Watch|Horlogeglas; Contactlens|Contact lens|Lenzen; Glazen oog|Glass eye; Kunstwerk|Glass art|Glazen beeld|Glass sculpture;
      Murano-glas|Murano glass; Kristal|Crystal|Kristallen glas; Brandblusser-ruitje|Break-glass point; Lantaarn|Lantern|Stormlamp` },

    { id: 'jewellery', lvl: 1, nl: 'Noem een sieraad of accessoire', en: 'Name a piece of jewellery or an accessory', a: `
      Ring; Ketting|Necklace|Halsketting; Oorbel|Earring|Oorbellen|Earrings; Armband|Bracelet; Horloge|Watch|Polshorloge|Wristwatch; Zonnebril|Sunglasses;
      Bril|Glasses; Riem|Belt|Ceintuur; Handtas|Handbag|Tas|Bag; Sjaal|Scarf; Muts|Hat|Beanie|Hoed; Pet|Cap|Petje|Baseball cap; Handschoenen|Gloves;
      Trouwring|Wedding ring; Verlovingsring|Engagement ring; Piercing|Piercing|Neuspiercing|Nose ring; Haarband|Headband|Diadeem; Haarspeld|Hair clip|Speldje|Hairpin;
      Broche|Brooch; Hanger|Pendant|Medaillon|Locket; Enkelbandje|Anklet|Enkelbandje; Manchetknopen|Cufflinks; Das|Tie|Stropdas|Necktie; Vlinderdas|Bow tie|Strikje;
      Kroon|Crown; Tiara; Haarelastiek|Hair tie|Scrunchie|Elastiekje; Portemonnee|Wallet|Purse; Paraplu|Umbrella; Sleutelhanger|Keyring|Key chain;
      Bretels|Braces|Suspenders; Zakdoek|Handkerchief|Pochet|Pocket square; Waaier|Fan|Hand fan; Boa|Feather boa|Verenboa; Rugzak|Backpack|Rugtas;
      Fitbit|Fitness tracker|Activity tracker|Stappenteller; Smartwatch|Smartwatch|Apple Watch; Bedelarmband|Charm bracelet|Bedeltje|Charm;
      Vriendschapsbandje|Friendship bracelet; Parelketting|Pearl necklace|Parels|Pearls; Choker; Teenring|Toe ring; Navelpiercing|Belly button ring;
      Kunstnagels|False nails|Nepnagels|Press-on nails; Nepwimpers|False eyelashes; Tatoeage|Tattoo|Plaktattoo|Temporary tattoo; Monocle|Monocle|Monokel;
      Wandelstok|Walking stick|Cane; Hoofddoek|Headscarf|Bandana; Oorwarmers|Earmuffs; Zakhorloge|Pocket watch; Gouden tand|Gold tooth|Grillz|Grill` },

    { id: 'headwear', lvl: 2, nl: 'Noem iets dat je op je hoofd draagt', en: 'Name something you wear on your head', a: `
      Pet|Cap|Baseballpet|Baseball cap; Muts|Beanie|Wollen muts|Woolly hat; Hoed|Hat; Helm|Helmet|Fietshelm|Bike helmet; Kroon|Crown; Zonnebril|Sunglasses;
      Koptelefoon|Headphones; Haarband|Headband|Hoofdband; Hoofddoek|Headscarf|Hijab; Bandana; Cowboyhoed|Cowboy hat; Feesthoedje|Party hat;
      Heksenhoed|Witch's hat|Puntmuts; Kerstmuts|Santa hat; Badmuts|Swimming cap|Swim cap; Bivakmuts|Balaclava; Tiara|Tiara|Diadeem; Sluier|Veil|Bruidssluier|Bridal veil;
      Bolhoed|Bowler hat|Derby; Hoge hoed|Top hat; Baret|Beret|Alpinopet; Fez; Tulband|Turban; Sombrero; Strohoed|Straw hat|Zonnehoed|Sun hat;
      Koksmuts|Chef's hat; Petje van de politie|Police cap|Politiepet; Brandweerhelm|Firefighter's helmet; Bouwhelm|Hard hat|Veiligheidshelm;
      Skihelm|Ski helmet; Motorhelm|Motorbike helmet; Rijhelm|Riding helmet|Ruiterhelm; Ridderhelm|Knight's helmet; Vikinghelm|Viking helmet;
      Haarspeld|Hair clip|Speldje; Haarelastiek|Hair tie|Elastiekje; Pruik|Wig; Oorwarmers|Earmuffs; Zweetband|Sweatband; Duikbril|Diving mask|Snorkelmasker;
      VR-bril|VR headset; Hoofdlamp|Head torch|Headlamp; Bloemenkrans|Flower crown|Krans|Wreath|Lauwerkrans|Laurel wreath; Indianentooi|Feathered headdress|Verentooi;
      Papieren kroon|Paper crown|Kroontje; Kippa|Kippah|Yarmulke; Mijter|Mitre|Bisschopsmuts;
      Pijlhoed|Fedora|Fedorahoed|Trilby; Panamahoed|Panama hat; Vissershoedje|Bucket hat|Regenhoedje; Zonneklep|Sun visor|Klep|Visor; Koptelefoon voor gehoorbescherming|Ear defenders` },

    { id: 'toys', lvl: 1, nl: 'Noem een stuk speelgoed', en: 'Name a toy', a: `
      Pop|Doll|Poppen|Dolls|Barbie; Bal|Ball|Voetbal|Football; Lego|Lego|Blokken|Building blocks; Knuffel|Cuddly toy|Teddybeer|Teddy bear|Knuffelbeer;
      Speelgoedauto|Toy car|Autootje|Hot Wheels|Matchbox; Puzzel|Puzzle|Jigsaw|Legpuzzel; Jojo|Yo-yo; Treintje|Toy train|Speelgoedtrein|Treinbaan|Train set;
      Playmobil; Tol|Spinning top|Beyblade; Springtouw|Skipping rope|Jump rope; Vlieger|Kite; Knikkers|Marbles|Knikker|Marble; Rubik's kubus|Rubik's Cube|Rubiks kubus;
      Frisbee; Hobbelpaard|Rocking horse; Poppenhuis|Doll's house|Dollhouse; Fidget spinner|Fidget spinner|Pop-it|Pop it; Waterpistool|Water pistol|Water gun;
      Nerf-geweer|Nerf gun|Nerf; Skateboard; Step|Scooter; Fiets|Bike|Loopfiets|Balance bike; Drone; Robot|Robot|Speelgoedrobot; Bellenblaas|Bubbles|Bubble wand;
      Plasticine|Plasticine|Klei|Play-Doh|Modeling clay; Kleurpotloden|Crayons|Waskrijt|Kleurboek|Colouring book; Ballon|Balloon; Slijm|Slime;
      Speelkaarten|Playing cards|Kaartspel; Dobbelstenen|Dice; Schaakspel|Chess set|Schaakbord; Monopoly; Tamagotchi; Game Boy|Game Boy|Gameboy;
      Rammelaar|Rattle; Bijtring|Teething ring; Mobiel|Baby mobile|Mobiel; Duplo; K'nex|K'Nex|Knex; Meccano; Etch A Sketch|Etch A Sketch|Tekenbord;
      Slinky; Furby; Bratz; Polly Pocket; Action Man|Action Man|Actiefiguur|Action figure|GI Joe; Transformers; Pokémonkaarten|Pokémon cards|Pokémon;
      Stuiterbal|Bouncy ball|Superbal; Waterballon|Water balloon; Badeendje|Rubber duck; Zandbak-emmertje|Bucket and spade|Schepje|Emmertje;
      Trampoline; Schommel|Swing; Glijbaan|Slide; Tent|Play tent|Speeltent; Keukentje|Toy kitchen|Speelkeuken; Dokterskoffer|Toy doctor's kit|Doktersset;
      Kassa|Toy till|Speelgoedkassa; Marionet|Puppet|Handpop|Hand puppet|Poppenkast|Puppet show; Kaleidoscoop|Kaleidoscope; Magic 8-Ball|Magic 8 Ball; Stoepkrijt|Pavement chalk` },

    { id: 'office', lvl: 2, nl: 'Noem iets dat je op een bureau of in een kantoor vindt', en: 'Name something you find on a desk or in an office', a: `
      Computer|Computer|Pc|PC; Pen|Pen|Balpen|Ballpoint; Papier|Paper|Blaadjes|Paper sheets; Laptop; Telefoon|Telephone|Phone|Gsm; Stoel|Chair|Bureaustoel|Office chair;
      Nietjesmachine|Stapler|Nietmachine; Printer; Toetsenbord|Keyboard; Muis|Mouse|Computermuis; Scherm|Screen|Monitor; Potlood|Pencil; Lamp|Desk lamp|Bureaulamp;
      Paperclips|Paper clips|Paperclip; Post-its|Sticky notes|Post-it|Memoblaadjes; Agenda|Diary|Planner|Kalender|Calendar; Map|Folder|Ringmap|Ring binder|Ordner;
      Plakband|Sticky tape|Tape; Schaar|Scissors; Koffie|Coffee|Koffietas|Coffee mug|Mok; Kopieermachine|Photocopier|Kopieerapparaat; Vuilbak|Bin|Papiermand|Wastepaper basket;
      Prikbord|Noticeboard|Corkboard; Whiteboard; Rekenmachine|Calculator; Nietjes|Staples; Perforator|Hole punch|Gaatjesmaker; Lijm|Glue|Lijmstift|Glue stick;
      Plant|Plant|Kamerplant; Foto|Photo|Fotokader|Photo frame; Envelop|Envelope|Enveloppen; Stempel|Stamp|Stempelkussen|Ink pad; Markeerstift|Highlighter;
      Koptelefoon|Headset|Headphones; Webcam; Usb-stick|USB stick|Memory stick; Kabels|Cables|Kabel|Cable|Stekkerdoos|Extension lead; Papierversnipperaar|Shredder;
      Waterkoeler|Water cooler; Koffiemachine|Coffee machine; Archiefkast|Filing cabinet; Bureaulade|Desk drawer|Lade; Visitekaartjes|Business cards;
      Nietjesverwijderaar|Staple remover|Ontnieter; Briefopener|Letter opener; Gom|Rubber|Eraser; Correctieroller|Correction tape|Tipp-ex; Elastiekjes|Rubber bands;
      Stressbal|Stress ball; Muismat|Mouse mat|Mouse pad; Pennenbakje|Pen holder|Pennenpot; Bureaukalender|Desk calendar; Naambordje|Name plate|Naamkaartje;
      Notitieblok|Notepad|Kladblok|Notebook; Laminator|Laminator|Lamineermachine; Projector|Projector|Beamer; Vergaderzaal|Meeting room; Collega's|Colleagues|Baas|Boss` },

    { id: 'drawing', lvl: 2, nl: 'Noem iets waarmee je kan tekenen of schrijven', en: 'Name something you can draw or write with', a: `
      Potlood|Pencil; Pen|Pen|Balpen|Ballpoint pen|Bic; Stift|Felt-tip pen|Viltstift|Marker; Kleurpotlood|Coloured pencil|Kleurpotloden; Krijt|Chalk|Stoepkrijt|Pavement chalk;
      Waskrijt|Wax crayon|Crayon|Waskrijtje; Vulpen|Fountain pen; Markeerstift|Highlighter|Fluostift; Verf|Paint|Penseel|Paintbrush|Waterverf|Watercolour;
      Houtskool|Charcoal; Pastelkrijt|Pastel|Pastels|Oliepastel; Whiteboardstift|Whiteboard marker; Permanente stift|Permanent marker|Sharpie;
      Gelpen|Gel pen; Vulpotlood|Mechanical pencil|Propelling pencil; Inkt|Ink|Ganzenveer|Quill; Kalligrafiepen|Calligraphy pen; Tablet en stylus|Stylus|Digitale pen|Apple Pencil;
      Vinger|Finger|Vingerverf|Finger paint; Spuitbus|Spray paint|Graffitibus|Spray can; Lippenstift|Lipstick; Eyeliner; Stok in het zand|Stick in the sand|Stok|Stick;
      Typemachine|Typewriter; Toetsenbord|Keyboard|Computer; Krijtje op het bord|Blackboard chalk; Muis|Mouse; Lijm-glitter|Glitter glue|Glitterpen;
      Uitwisbare pen|Erasable pen|Frixion; Vierkleurenpen|Four-colour pen|Meerkleurenpen; Tekenpen|Fineliner|Fineliner-pen; Brush pen|Brush pen|Penseelstift;
      Grafietstift|Graphite stick; Conté|Conté crayon; Tekenhoutje|Pencil stub; Spijker in hout|Nail|Mes|Knife; Ketchup|Ketchup op een bord; Zeep op een spiegel|Soap` },

    { id: 'superpowers', lvl: 2, nl: 'Noem een superkracht', en: 'Name a superpower', a: `
      Vliegen|Flying|Flight; Onzichtbaar worden|Invisibility|Onzichtbaarheid; Gedachten lezen|Mind reading|Telepathie|Telepathy; Teleporteren|Teleportation|Teleportatie;
      Supersterkte|Super strength|Superkracht|Strength; Supersnelheid|Super speed|Snelheid|Speed; De tijd stilzetten|Stopping time|Tijd stoppen|Time freeze;
      Tijdreizen|Time travel; Röntgenzicht|X-ray vision|Rontgenzicht; Onsterfelijkheid|Immortality|Onsterfelijk; Genezen|Healing|Zelfgenezing|Self-healing;
      Gedaanteverwisseling|Shapeshifting|Van vorm veranderen; Telekinese|Telekinesis|Dingen laten bewegen met je gedachten; Vuur maken|Fire|Pyrokinese|Pyrokinesis;
      IJs maken|Ice powers|Cryokinese|Cryokinesis; Het weer beheersen|Weather control; Onder water ademen|Underwater breathing|Ademen onder water;
      Met dieren praten|Talking to animals; Klimmen op muren|Wall-crawling|Muren beklimmen; Webben schieten|Web-slinging|Spinnenweb; Laserstralen uit je ogen|Laser eyes|Heat vision;
      Elektriciteit|Electricity|Bliksem|Lightning; Kracht van magnetisme|Magnetism|Magnetisme; Door muren lopen|Walking through walls|Intangibility; Krimpen|Shrinking;
      Groeien|Growing|Reus worden|Giant growth; Uitrekken|Stretching|Elastisch lichaam; Toekomst zien|Precognition|De toekomst voorspellen|Seeing the future;
      Klonen|Duplication|Jezelf klonen|Cloning; Superhoren|Super hearing; Nachtzicht|Night vision; Spinnenzintuig|Spider-sense; Unbreakable|Invulnerability|Onkwetsbaar;
      Toveren|Magic; Gedachten beheersen|Mind control; Illusies maken|Illusions; Talen spreken|Speaking every language|Alle talen spreken; Onzichtbaar schild|Force field|Krachtveld;
      Energie absorberen|Energy absorption; Zwaartekracht beheersen|Gravity control; Geluid als wapen|Sonic scream|Supergeluid; Bovenmenselijke intelligentie|Super intelligence|Supergenie` },

    { id: 'family', lvl: 1, nl: 'Noem een familielid', en: 'Name a family member', a: `
      Moeder|Mother|Mama|Mum|Mom; Vader|Father|Papa|Dad; Broer|Brother; Zus|Sister|Zuster; Oma|Grandma|Grootmoeder|Grandmother|Granny;
      Opa|Grandpa|Grootvader|Grandfather|Granddad; Tante|Aunt|Tantetje; Oom|Uncle|Nonkel|Nonkel; Neef|Cousin|Nicht; Zoon|Son; Dochter|Daughter;
      Kleinkind|Grandchild|Kleinzoon|Grandson|Kleindochter|Granddaughter; Schoonmoeder|Mother-in-law; Schoonvader|Father-in-law; Stiefmoeder|Stepmother;
      Stiefvader|Stepfather; Halfbroer|Half-brother; Halfzus|Half-sister; Stiefbroer|Stepbrother; Stiefzus|Stepsister; Tweelingbroer|Twin brother|Tweeling|Twin;
      Tweelingzus|Twin sister; Overgrootmoeder|Great-grandmother|Overgrootoma|Great-grandma; Overgrootvader|Great-grandfather|Overgrootopa; Peter|Godfather|Peetoom;
      Meter|Godmother|Peettante; Petekind|Godchild|Metekind|Petekindje; Schoonzus|Sister-in-law; Schoonbroer|Brother-in-law|Zwager; Schoonzoon|Son-in-law;
      Schoondochter|Daughter-in-law; Echtgenoot|Husband|Man; Echtgenote|Wife|Vrouw; Baby; Achterkleinkind|Great-grandchild; Achterneef|Second cousin;
      Pleegouders|Foster parents|Pleegmoeder|Foster mother; Pleegkind|Foster child; Partner|Partner|Lief|Vriend|Boyfriend|Vriendin|Girlfriend; Verloofde|Fiancé|Fiancée;
      Oudoom|Great-uncle; Oudtante|Great-aunt; Voorouder|Ancestor|Voorouders|Ancestors; Bonusmama|Bonus mum|Plusmama; Huisdier|Pet` },
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
