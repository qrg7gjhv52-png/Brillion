/* ─────────────────────────────────────────────────────────────
   Brillion · open vragen over alledaagse dingen
   Iedereen kan meteen iets bedenken ("vork"), maar wie zich
   verdiept, vindt zeldzame antwoorden ("schuimspaan").
   Elk antwoord: NL|EN|andere namen. Volgorde = van vaak genoemd naar
   zeldzaam: de eerste 20% is Gewoon, de laatste 20% 1 in a Brillion.
   lvl = moeilijkheid (1 makkelijk · 2 gemiddeld · 3 moeilijk).
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;

  /* ── Alledaags ───────────────────────────────────────────── */
  B.addQuestions('life', [
    { id: 'kitchen', lvl: 1, nl: 'Noem een keukengerei (iets waarmee je kookt of eet)', en: 'Name a kitchen utensil (something you cook or eat with)', a: `
      Vork|Fork; Mes|Knife; Lepel|Spoon; Pan|Frying pan|Koekenpan|Pan; Kookpot|Saucepan|Kookpan|Pot; Snijplank|Cutting board|Chopping board;
      Garde|Whisk|Klopper; Pollepel|Ladle|Opscheplepel; Spatel|Spatula; Rasp|Grater; Dunschiller|Peeler|Aardappelschilmesje|Schilmesje;
      Vergiet|Colander; Deegrol|Rolling pin; Blikopener|Can opener|Tin opener; Kurkentrekker|Corkscrew; Flesopener|Bottle opener;
      Keukenschaar|Kitchen scissors|Schaar; Weegschaal|Kitchen scale|Keukenweegschaal; Maatbeker|Measuring jug|Measuring cup;
      Zeef|Sieve; Knoflookpers|Garlic press; Pizzasnijder|Pizza cutter|Pizzames; Keukentang|Tongs|Tang; Wok; Bakplaat|Baking tray;
      Springvorm|Cake tin|Taartvorm|Bakvorm; Vijzel|Mortar and pestle|Mortier; Pepermolen|Pepper mill; Notenkraker|Nutcracker;
      Kookwekker|Kitchen timer|Eierwekker|Timer; Schuimspaan|Skimmer|Slotted spoon; Trechter|Funnel; Citruspers|Citrus press|Fruitpers|Juicer;
      Mandoline; Bakkwast|Pastry brush|Kwast; Spuitzak|Piping bag; Slacentrifuge|Salad spinner; Appelboor|Apple corer; IJsschep|Ice cream scoop;
      Broodmes|Bread knife; Koksmes|Chef's knife; Hakmes|Cleaver; Steelpan|Milk pan; Braadpan|Casserole dish|Stoofpot|Dutch oven;
      Wafelijzer|Waffle iron; Tosti-ijzer|Sandwich toaster|Croque-monsieurtoestel; Broodrooster|Toaster; Waterkoker|Kettle;
      Koffiezetapparaat|Coffee maker|Koffiemachine; Magnetron|Microwave|Microgolfoven; Oven; Airfryer; Friteuse|Deep fryer|Frietketel;
      Keukenmachine|Food processor; Staafmixer|Hand blender; Mixer|Mixer|Handmixer; Blender; Rijstkoker|Rice cooker; Snelkookpan|Pressure cooker;
      Fondueset|Fondue set; Gourmetstel|Gourmet set; Eetstokjes|Chopsticks; Theelepel|Teaspoon; Botervloot|Butter dish; Kaasschaaf|Cheese slicer;
      Eierdopje|Egg cup; Pannenkoekenpan|Crêpe pan|Crepe pan; Grillpan|Griddle pan; Ovenwant|Oven glove|Pannenlap; Soepkom|Soup bowl|Kom;
      Bord|Plate; Glas|Glass; Tas|Cup|Kopje; Mok|Mug; Karaf|Carafe|Decanter; Theepot|Teapot; Ontkerner|Pitter|Kersenontpitter;
      Vleeshamer|Meat tenderiser|Meat mallet; Uienhakker|Vegetable chopper; Spiraalsnijder|Spiralizer; Sushimat|Sushi mat` },

    { id: 'clothing', lvl: 1, nl: 'Noem een kledingstuk', en: 'Name a piece of clothing', a: `
      T-shirt|T-shirt|Tshirt; Broek|Trousers|Pants; Jeans|Jeans|Spijkerbroek|Jeansbroek; Trui|Jumper|Sweater|Pull; Jas|Coat|Jacket;
      Hemd|Shirt|Overhemd; Rok|Skirt; Kleed|Dress|Jurk; Sokken|Socks|Sok; Onderbroek|Underpants|Boxershort|Slip; Short|Shorts|Korte broek;
      Hoodie|Hoodie|Hooded sweater; Pyjama|Pyjamas|Pajamas; Muts|Beanie|Woolly hat; Hoed|Hat; Pet|Cap|Baseball cap; Sjaal|Scarf;
      Handschoenen|Gloves|Handschoen; Wanten|Mittens; Das|Tie|Stropdas; Blazer; Kostuum|Suit|Pak; Vest|Cardigan; Bh|Bra|Beha;
      Badpak|Swimsuit; Bikini; Zwembroek|Swimming trunks; Trainingspak|Tracksuit|Jogging|Joggingbroek; Legging|Leggings; Panty|Tights|Kousenbroek;
      Polo|Polo shirt; Topje|Top|Tanktop; Blouse; Regenjas|Raincoat; Bodywarmer|Gilet|Body warmer; Badjas|Bathrobe|Ochtendjas|Dressing gown;
      Overall|Overalls|Dungarees|Tuinbroek; Smoking|Tuxedo; Trouwjurk|Wedding dress; Kimono; Sari; Poncho; Cape; Parka; Anorak; Fleece|Fleece|Fleecetrui;
      Coltrui|Turtleneck|Rolkraagtrui; Onesie; Rompertje|Romper|Romper suit; Kniekousen|Knee socks; Bretels|Braces|Suspenders; Riem|Belt|Ceintuur;
      Strik|Bow tie|Vlinderdas|Strikje; Kilt; Toga; Tuniek|Tunic; Sarong; Djellaba; Boerka|Burqa; Hoofddoek|Headscarf; Tulband|Turban; Sombrero;
      Baret|Beret; Bivakmuts|Balaclava; Oorwarmers|Earmuffs; Leren jas|Leather jacket; Jumpsuit; Korset|Corset; Tutu; Wetsuit|Wetsuit|Duikpak;
      Schort|Apron; Uniform; Labojas|Lab coat|Doktersjas; Mantel|Cloak; Kousen|Stockings; String|Thong; Hemdje|Vest (UK)|Onderhemd|Undershirt;
      Duffelcoat|Duffle coat; Trenchcoat; Bomberjack|Bomber jacket; Cargobroek|Cargo trousers|Cargo pants; Chino|Chinos; Capri|Capri pants|Driekwartsbroek` },

    { id: 'jobs', lvl: 1, nl: 'Noem een beroep', en: 'Name a job', a: `
      Leerkracht|Teacher|Leraar|Lerares|Juf|Meester; Dokter|Doctor|Arts|Huisarts; Politieagent|Police officer|Agent|Politie|Flik; Brandweerman|Firefighter|Brandweer;
      Verpleegkundige|Nurse|Verpleger|Verpleegster; Bakker|Baker; Kok|Chef|Cook; Advocaat|Lawyer; Kapper|Hairdresser|Kapster; Boer|Farmer|Landbouwer;
      Piloot|Pilot; Ingenieur|Engineer; Tandarts|Dentist; Loodgieter|Plumber; Elektricien|Electrician; Timmerman|Carpenter|Schrijnwerker;
      Architect; Postbode|Postman|Postbezorger|Mail carrier; Kassier|Cashier|Caissière; Slager|Butcher|Beenhouwer; Apotheker|Pharmacist;
      Dierenarts|Vet|Veterinarian; Journalist; Programmeur|Programmer|Developer|Software developer; Rechter|Judge; Soldaat|Soldier|Militair;
      Buschauffeur|Bus driver|Chauffeur|Driver; Vrachtwagenchauffeur|Lorry driver|Truck driver|Trucker; Schilder|Painter; Metselaar|Bricklayer;
      Ober|Waiter|Kelner|Serveerster|Waitress; Bankier|Banker|Bankbediende; Boekhouder|Accountant; Kinesist|Physiotherapist|Fysiotherapeut;
      Psycholoog|Psychologist; Wetenschapper|Scientist|Onderzoeker; Fotograaf|Photographer; Acteur|Actor|Actrice; Zanger|Singer|Zangeres;
      Muzikant|Musician; Schrijver|Writer|Auteur; Kunstenaar|Artist; Astronaut; Bibliothecaris|Librarian; Monteur|Mechanic|Garagist;
      Stewardess|Flight attendant|Steward; Kapitein|Captain; Visser|Fisherman; Tuinman|Gardener|Hovenier; Poetsvrouw|Cleaner|Schoonmaker;
      Secretaris|Secretary|Secretaresse; Makelaar|Estate agent|Real estate agent; Verkoper|Salesperson|Verkoopster; Notaris|Notary;
      Burgemeester|Mayor; Priester|Priest|Pastoor; Dominee|Pastor|Predikant; Imam; Rabbijn|Rabbi; Vroedvrouw|Midwife; Chirurg|Surgeon;
      Bouwvakker|Builder|Construction worker; Glazenwasser|Window cleaner; Schoenmaker|Shoemaker|Cobbler; Kleermaker|Tailor|Naaister|Coupeuse;
      Juwelier|Jeweller|Jeweler; Goudsmid|Goldsmith; Smid|Blacksmith; Bloemist|Florist; Slotenmaker|Locksmith; Dakwerker|Roofer;
      Vuilnisman|Bin man|Garbage collector; Conducteur|Conductor|Treinbegeleider; Machinist|Train driver; Taxichauffeur|Taxi driver;
      Barman|Bartender|Barvrouw; Sommelier; Barista; Pizzabakker|Pizza maker; Patissier|Pastry chef|Banketbakker; Chocolatier;
      Diplomaat|Diplomat; Politicus|Politician; Minister; Ambassadeur|Ambassador; Detective|Detective|Speurder; Bodyguard|Lijfwacht;
      Beveiliger|Security guard|Bewaker; Cipier|Prison guard|Gevangenisbewaker; Douanier|Customs officer; Archeoloog|Archaeologist;
      Historicus|Historian; Bioloog|Biologist; Chemicus|Chemist|Scheikundige; Natuurkundige|Physicist|Fysicus; Wiskundige|Mathematician;
      Astronoom|Astronomer; Meteoroloog|Meteorologist|Weerman|Weervrouw; Geoloog|Geologist; Economist|Economist|Econoom; Handelsingenieur|Business engineer;
      Webdesigner|Web designer; Grafisch ontwerper|Graphic designer; Modeontwerper|Fashion designer; Interieurarchitect|Interior designer;
      Model|Model|Mannequin; Danser|Dancer|Danseres; Clown; Goochelaar|Magician; Youtuber|YouTuber; Influencer; Profvoetballer|Footballer|Voetballer;
      Scheidsrechter|Referee; Trainer|Coach; Jockey; Herder|Shepherd; Imker|Beekeeper; Boswachter|Forest ranger|Ranger; Dierenverzorger|Zookeeper;
      Redder|Lifeguard|Strandredder; Ambulancier|Paramedic; Opticien|Optician; Logopedist|Speech therapist; Ergotherapeut|Occupational therapist;
      Diëtist|Dietitian|Dietist; Orthodontist; Anesthesist|Anaesthetist|Anesthesiologist; Radioloog|Radiologist; Huisbewaarder|Caretaker|Conciërge;
      Kraanmachinist|Crane operator; Lasser|Welder; Stukadoor|Plasterer|Plafonneerder; Tegelzetter|Tiler|Vloerder; Behanger|Wallpaperer;
      Schoorsteenveger|Chimney sweep; Vertaler|Translator; Tolk|Interpreter; Gids|Tour guide|Reisleider; Croupier; Ondertaker|Undertaker|Begrafenisondernemer|Uitvaartondernemer;
      Notarisklerk|Paralegal; Actuaris|Actuary; Auditor; Taxateur|Appraiser|Schatter; Veilingmeester|Auctioneer` },

    { id: 'furniture', lvl: 1, nl: 'Noem een meubelstuk', en: 'Name a piece of furniture', a: `
      Stoel|Chair; Tafel|Table; Bed; Zetel|Sofa|Bank|Couch|Canapé; Kast|Cupboard|Wardrobe|Kleerkast; Bureau|Desk; Boekenkast|Bookcase|Boekenrek;
      Ladekast|Chest of drawers|Commode; Nachtkastje|Bedside table|Nightstand; Salontafel|Coffee table; Fauteuil|Armchair; Kruk|Stool|Barkruk;
      Bureaustoel|Office chair; Schommelstoel|Rocking chair; Stapelbed|Bunk bed; Wieg|Cradle|Crib; Kaptafel|Dressing table; Dressoir|Sideboard;
      Tv-meubel|TV stand|Tv-kast; Hoekbank|Corner sofa; Poef|Pouffe|Pouf; Ligstoel|Deckchair|Sun lounger|Strandstoel; Hangmat|Hammock;
      Bank (buiten)|Bench|Bankje|Tuinbank; Kapstok|Coat rack|Kapstok; Spiegel|Mirror; Vitrinekast|Display cabinet|Vitrine; Kinderstoel|High chair;
      Box|Playpen; Schrijftafel|Writing desk; Secretaire|Secretary desk; Hemelbed|Four-poster bed; Waterbed; Slaapbank|Sofa bed|Bedbank;
      Futon; Bijzettafel|Side table; Eettafel|Dining table; Klaptafel|Folding table; Klapstoel|Folding chair; Zitzak|Beanbag;
      Chaise longue|Chaise longue|Lounge chair; Ottomaan|Ottoman; Kist|Chest|Kist|Koffer; Schoenenkast|Shoe cabinet|Schoenenrek;
      Wandrek|Shelf|Rek|Plank; Archiefkast|Filing cabinet; Kledingrek|Clothes rail; Garderobe|Wardrobe (hall)|Garderobekast; Hutkoffer|Trunk;
      Bidbank|Prie-dieu; Troon|Throne; Lessenaar|Lectern; Schoolbank|School desk; Kaptafelkruk|Vanity stool; Opstapje|Step stool|Trapje;
      Kruk aan de bar|Bar stool; Loungeset|Lounge set; Tuinstoel|Garden chair; Strandbed|Day bed|Daybed` },

    { id: 'bathroom', lvl: 1, nl: 'Noem iets dat je in een badkamer vindt', en: 'Name something you find in a bathroom', a: `
      Tandenborstel|Toothbrush; Tandpasta|Toothpaste; Douche|Shower; Bad|Bath|Bathtub|Badkuip; Lavabo|Sink|Wastafel|Washbasin; Spiegel|Mirror;
      Handdoek|Towel|Handdoeken; Zeep|Soap; Shampoo; Wc|Toilet|Toilet|Wc-pot; Wc-papier|Toilet paper|Toiletpapier|Toilet roll; Kam|Comb;
      Haarborstel|Hairbrush|Borstel; Douchegel|Shower gel; Conditioner|Conditioner|Crèmespoeling; Föhn|Hairdryer|Haardroger; Scheermes|Razor|Scheerapparaat;
      Deodorant|Deodorant|Deo; Parfum|Perfume|Eau de toilette; Badmat|Bath mat; Douchegordijn|Shower curtain; Kraan|Tap|Faucet|Kraantje;
      Weegschaal|Bathroom scale|Personenweegschaal; Nagelknipper|Nail clipper; Tandflos|Dental floss|Floss; Mondwater|Mouthwash; Wattenstaafjes|Cotton buds|Q-tips|Oorstokjes;
      Watten|Cotton wool|Wattenschijfjes; Make-up|Make-up|Schmink; Mascara; Lippenstift|Lipstick; Crème|Moisturiser|Dagcrème|Bodylotion|Lotion;
      Zonnecrème|Sunscreen|Zonnebrandcrème; Badjas|Bathrobe; Washandje|Flannel|Washcloth; Spons|Sponge; Badeend|Rubber duck|Badeendje;
      Wasmand|Laundry basket; Wasmachine|Washing machine; Droogkast|Tumble dryer|Droogtrommel; Medicijnkastje|Medicine cabinet; Pleisters|Plasters|Band-aid|Pleister;
      Thermometer; Wc-borstel|Toilet brush; Luchtverfrisser|Air freshener; Handzeep|Hand soap; Bidet; Urinoir|Urinal; Radiator|Radiator|Handdoekradiator|Towel radiator;
      Pincet|Tweezers; Nagelvijl|Nail file; Nagellak|Nail polish; Krulspeld|Curling iron|Krultang; Stijltang|Hair straightener; Haarlak|Hairspray;
      Gel|Hair gel; Scheerschuim|Shaving foam; Aftershave; Badzout|Bath salts; Bruisbal|Bath bomb; Kaarsen|Candles|Kaars; Ventilator|Extractor fan;
      Contactlenzen|Contact lenses|Lenzen; Lenzenvloeistof|Contact lens solution; Elektrische tandenborstel|Electric toothbrush; Tongschraper|Tongue scraper;
      Plopper|Plunger|Ontstopper; Vuilbakje|Bin|Pedaalemmer; Haarelastiekjes|Hair ties|Elastiekjes; Bodyscrub|Body scrub; Puimsteen|Pumice stone` },

    { id: 'transport', lvl: 1, nl: 'Noem een vervoermiddel', en: 'Name a means of transport', a: `
      Auto|Car|Wagen; Fiets|Bicycle|Bike|Velo; Trein|Train; Bus; Vliegtuig|Aeroplane|Airplane|Plane; Boot|Boat; Tram; Metro|Underground|Subway;
      Motor|Motorbike|Motorfiets|Motorcycle; Bromfiets|Moped|Brommer; Step|Scooter (kick)|Kickscooter; Elektrische step|E-scooter; Scooter;
      Taxi; Vrachtwagen|Lorry|Truck; Helikopter|Helicopter; Schip|Ship; Veerboot|Ferry; Zeilboot|Sailing boat|Sailboat; Kano|Canoe; Kajak|Kayak;
      Roeiboot|Rowing boat|Rowboat; Skateboard; Rolschaatsen|Roller skates|Skeelers|Inline skates; Hoverboard; Segway; Luchtballon|Hot-air balloon;
      Zeppelin|Airship; Raket|Rocket; Ruimteveer|Space shuttle; Cruiseschip|Cruise ship; Jacht|Yacht; Duikboot|Submarine|Onderzeeër;
      Tractor; Paard|Horse; Kameel|Camel; Olifant|Elephant; Ezel|Donkey; Koets|Carriage|Paardenkoets; Slee|Sledge|Sled|Slede; Hondenslee|Dog sled;
      Sneeuwscooter|Snowmobile; Kabelbaan|Cable car|Gondel|Gondola; Skilift|Ski lift|Stoeltjeslift|Chairlift; Lift|Lift|Elevator; Roltrap|Escalator;
      Bakfiets|Cargo bike; Tandem; Driewieler|Tricycle; Riksja|Rickshaw|Tuktuk|Tuk-tuk; Gondel (Venetië)|Venetian gondola; Vlot|Raft;
      Speedboot|Speedboat; Jetski|Jet ski; Hovercraft; Hydrofoil|Draagvleugelboot; Monorail; Hogesnelheidstrein|High-speed train|TGV|Thalys|Eurostar;
      Kabeltram|Cable car (tram)|Kabeltram; Ambulance|Ambulance|Ziekenwagen; Brandweerwagen|Fire engine|Fire truck; Politiewagen|Police car;
      Camper|Motorhome|Mobilhome; Caravan; Busje|Van|Bestelwagen|Minibus; Limousine; Cabrio|Convertible; Quad|Quad bike; Golfkarretje|Golf cart;
      Zweefvliegtuig|Glider; Deltavlieger|Hang glider; Paraglider|Paraglider|Schermvliegen; Parachute; Watervliegtuig|Seaplane; Drone;
      Unicycle|Eenwieler; Waveboard; Longboard; Bobslee|Bobsleigh; Pedalo|Waterfiets; Supboard|Paddle board|SUP; Surfplank|Surfboard` },

    { id: 'tools', lvl: 1, nl: 'Noem een stuk gereedschap', en: 'Name a tool', a: `
      Hamer|Hammer; Schroevendraaier|Screwdriver; Zaag|Saw; Boormachine|Drill|Boor; Tang|Pliers; Moersleutel|Spanner|Wrench|Sleutel;
      Waterpas|Spirit level; Meetlint|Tape measure|Rolmeter|Meter; Beitel|Chisel; Schuurpapier|Sandpaper; Schaar|Scissors; Bijl|Axe;
      Schop|Shovel|Spade; Hark|Rake; Kruiwagen|Wheelbarrow; Ladder; Nijptang|Pincers; Combinatietang|Combination pliers; Kniptang|Wire cutters;
      Stanleymes|Utility knife|Box cutter|Cuttermes|Breekmes; Lijmpistool|Glue gun; Soldeerbout|Soldering iron; Schuurmachine|Sander;
      Decoupeerzaag|Jigsaw; Cirkelzaag|Circular saw; Kettingzaag|Chainsaw; Slijpschijf|Angle grinder|Haakse slijper; Schaaf|Plane|Houtschaaf;
      Vijl|File; Rasp|Rasp; Lijmklem|Clamp|Klem|Schroefklem; Bankschroef|Vice|Vise; Inbussleutel|Allen key|Hex key|Imbussleutel;
      Steeksleutel|Open-end spanner; Ratel|Ratchet|Ratelsleutel; Krik|Jack|Autokrik; Breekijzer|Crowbar|Koevoet; Moker|Sledgehammer;
      Rubberen hamer|Mallet|Rubberhamer; Nietpistool|Staple gun|Nietmachine; Kwast|Paintbrush|Verfborstel; Verfroller|Paint roller|Rol;
      Plamuurmes|Putty knife|Spatel|Plamuurspaan; Truweel|Trowel|Troffel; Hooivork|Pitchfork|Riek|Greep; Snoeischaar|Pruning shears|Secateurs;
      Heggenschaar|Hedge trimmer|Haagschaar; Grasmaaier|Lawnmower; Bladblazer|Leaf blower; Hogedrukreiniger|Pressure washer; Zeis|Scythe; Sikkel|Sickle;
      Houweel|Pickaxe; Spijkers|Nails|Nagels; Schroeven|Screws; Duimstok|Folding rule|Meterlat; Winkelhaak|Try square|Square; Schietlood|Plumb bob;
      Draadstripper|Wire stripper; Spanningzoeker|Voltage tester; Multimeter; Momentsleutel|Torque wrench; Pijpentang|Pipe wrench|Waterpomptang;
      Popnageltang|Rivet gun|Klinknageltang; Siliconenspuit|Caulking gun|Kitpistool; Föhn (verf)|Heat gun|Verfstripper; Tegelsnijder|Tile cutter;
      Ijzerzaag|Hacksaw|Metaalzaag; Handzaag|Handsaw; Fretzaag|Fretsaw|Figuurzaag; Priem|Awl|Els; Ponsmachine|Punch; Doorslag|Centre punch|Centerpons` },

    { id: 'school-subjects', lvl: 1, nl: 'Noem een schoolvak', en: 'Name a school subject', a: `
      Wiskunde|Maths|Math|Mathematics; Nederlands|Dutch; Frans|French; Engels|English; Geschiedenis|History; Aardrijkskunde|Geography;
      Biologie|Biology; Lichamelijke opvoeding|Physical education|LO|Turnen|Gym|Sport|PE; Chemie|Chemistry|Scheikunde; Fysica|Physics|Natuurkunde;
      Duits|German; Spaans|Spanish; Godsdienst|Religion|Religious education|Religie; Muziek|Music; Plastische opvoeding|Art|Tekenen|Beeldende vorming|Kunst;
      Informatica|Computer science|ICT|Programmeren; Economie|Economics; Latijn|Latin; Grieks|Greek; Zedenleer|Ethics|Niet-confessionele zedenleer|Filosofie|Philosophy;
      Natuurwetenschappen|Science|Wetenschappen|Natuurkennis|Wereldoriëntatie; Techniek|Technology|Technologie; Burgerschap|Citizenship|Maatschappijleer;
      Psychologie|Psychology; Sociologie|Sociology; Boekhouden|Accounting; Bedrijfseconomie|Business studies; Drama|Drama|Toneel; Dans|Dance;
      Italiaans|Italian; Chinees|Chinese|Mandarijn; Russisch|Russian; Arabisch|Arabic; Statistiek|Statistics; Recht|Law; Koken|Cooking|Huishoudkunde|Home economics;
      Mediawijsheid|Media studies; Esthetica|Aesthetics; Seksuele opvoeding|Sex education; Verkeer|Road safety|Verkeersopvoeding; Schrijven|Handwriting|Schoonschrift;
      Lezen|Reading; Rekenen|Arithmetic; Astronomie|Astronomy; Aardwetenschappen|Earth science; Ondernemen|Entrepreneurship` },

    { id: 'holidays', lvl: 2, nl: 'Noem een feestdag (van eender welk land of geloof)', en: 'Name a holiday or festival (from any country or religion)', a: `
      Kerstmis|Christmas|Kerst; Pasen|Easter; Nieuwjaar|New Year|Nieuwjaarsdag|New Year's Day; Oudejaarsavond|New Year's Eve|Oudjaar|Silvester;
      Halloween; Sinterklaas|Sinterklaas|Sint-Nicolaas|Saint Nicholas Day; Valentijn|Valentine's Day|Valentijnsdag; Moederdag|Mother's Day;
      Vaderdag|Father's Day; Carnaval|Carnival; Pinksteren|Pentecost|Whitsun; Hemelvaart|Ascension Day|Ons-Heer-Hemelvaart; Allerheiligen|All Saints' Day;
      Allerzielen|All Souls' Day; Dag van de Arbeid|Labour Day|1 mei|May Day; Nationale feestdag|National Day|21 juli; Ramadan; Suikerfeest|Eid al-Fitr|Eid;
      Offerfeest|Eid al-Adha; Chanoeka|Hanukkah|Chanukah; Pesach|Passover; Jom Kipoer|Yom Kippur; Rosj Hasjana|Rosh Hashanah; Divali|Diwali;
      Holi; Chinees Nieuwjaar|Chinese New Year|Lentefeest|Spring Festival; Thanksgiving; Independence Day|Independence Day|4 juli|Fourth of July;
      Koningsdag|King's Day; Bevrijdingsdag|Liberation Day; Wapenstilstand|Armistice Day|11 november|Remembrance Day; Driekoningen|Epiphany|Three Kings' Day;
      Maria-Tenhemelopneming|Assumption of Mary|15 augustus|Assumption Day; Goede Vrijdag|Good Friday; Witte Donderdag|Maundy Thursday;
      Aswoensdag|Ash Wednesday; Palmzondag|Palm Sunday; Lichtmis|Candlemas; Sint-Maarten|Martinmas|Saint Martin's Day; Kerstavond|Christmas Eve;
      Tweede Kerstdag|Boxing Day; Saint Patrick's Day|Saint Patrick's Day|St. Patrick's Day; Día de los Muertos|Day of the Dead|Dia de los Muertos;
      Oktoberfest; Bastille Day|Bastille Day|14 juli|Quatorze juillet; Guy Fawkes Night|Bonfire Night; Australia Day; Canada Day; Cinco de Mayo;
      Mardi Gras|Mardi Gras|Vette dinsdag|Shrove Tuesday; Pannenkoekendag|Pancake Day; Vasten|Lent|Vastentijd|Veertigdagentijd; Advent;
      Midzomer|Midsummer|Sint-Jan; Wintersolstitium|Winter solstice|Yule|Joelfeest; Loofhuttenfeest|Sukkot; Poerim|Purim; Vesak|Wesak|Boeddhadag;
      Songkran; Obon; Hanami; Tet|Tết|Vietnamees Nieuwjaar; Nowruz|Perzisch Nieuwjaar; Navratri; Ganesh Chaturthi; Raksha Bandhan;
      Kwanzaa; Juneteenth; Memorial Day; Labor Day (VS)|Labor Day; Martin Luther King Day|MLK Day; Presidents' Day|Presidents Day;
      Dag van de Leerkracht|Teachers' Day|Lerarendag; Dag van de Aarde|Earth Day; Vrouwendag|International Women's Day|Internationale Vrouwendag;
      Werelddierendag|World Animal Day` },

    { id: 'beach', lvl: 1, nl: 'Noem iets dat je meeneemt naar het strand', en: 'Name something you take to the beach', a: `
      Handdoek|Towel|Strandlaken|Beach towel; Zonnecrème|Sunscreen|Zonnebrandcrème|Sun cream; Zonnebril|Sunglasses; Zwembroek|Swimming trunks|Zwemkleding|Swimwear;
      Badpak|Swimsuit; Bikini; Parasol|Beach umbrella|Parasol; Emmer|Bucket|Emmertje; Schep|Spade|Schepje; Bal|Ball|Strandbal|Beach ball;
      Flesje water|Bottle of water|Water|Drinkfles|Water bottle; Pet|Cap|Hoed|Sun hat|Zonnehoed; Slippers|Flip-flops|Teenslippers; Boek|Book;
      Koelbox|Cool box|Cooler; Picknick|Picnic|Boterhammen|Sandwiches|Lunchpakket; Strandstoel|Beach chair|Ligstoel; Windscherm|Windbreak;
      Luchtmatras|Lilo|Air mattress; Zwemband|Rubber ring|Swim ring|Zwembandje; Zwembandjes|Armbands|Water wings|Bandjes; Frisbee;
      Vlieger|Kite; Bodyboard|Bodyboard|Boogieboard; Surfplank|Surfboard; Duikbril|Diving mask|Snorkelmasker; Snorkel; Zwemvliezen|Flippers|Fins;
      Schelpenemmertje|Shell bucket; Zandvormpjes|Sand moulds|Vormpjes; Strandtent|Beach tent|Beach shelter; Smartphone|Phone|Gsm|Telefoon; Muziekbox|Speaker|Bluetoothspeaker;
      Ijsje|Ice cream; Fruit; Chips|Crisps; Aftersun; Lippenbalsem|Lip balm; Strandtas|Beach bag; Petanque|Pétanque|Boules|Jeu de boules;
      Badminton|Badminton|Badmintonrackets; Strandtennis|Beach tennis|Matkot|Beach paddle; Kaartspel|Playing cards|Kaarten; Tijdschrift|Magazine;
      Krant|Newspaper; Verrekijker|Binoculars; Fototoestel|Camera; Strandmat|Beach mat|Mat|Rieten mat;
      Windmolentje|Toy windmill|Strandmolentje; Krabbennet|Shrimp net|Garnalennet|Schepnetje; Wetsuit; Muggenspray|Insect repellent; EHBO-kit|First aid kit` },

    { id: 'hobbies', lvl: 1, nl: 'Noem een hobby', en: 'Name a hobby', a: `
      Lezen|Reading; Gamen|Gaming|Videogames; Voetballen|Football|Voetbal|Soccer; Tekenen|Drawing; Koken|Cooking; Muziek luisteren|Listening to music|Muziek;
      Dansen|Dancing; Zingen|Singing; Fietsen|Cycling; Zwemmen|Swimming; Lopen|Running|Joggen|Jogging; Wandelen|Hiking|Walking; Schilderen|Painting;
      Fotograferen|Photography|Fotografie; Tuinieren|Gardening; Bakken|Baking; Breien|Knitting; Naaien|Sewing; Haken|Crochet; Vissen|Fishing;
      Reizen|Travelling|Traveling; Schaken|Chess; Puzzelen|Puzzles|Jigsaw puzzles; Muziek maken|Playing music|Muziekinstrument spelen|Gitaar spelen|Piano spelen;
      Fitness|Gym|Krachttraining; Yoga; Klimmen|Climbing|Bouldering|Boulderen; Skaten|Skateboarding; Paardrijden|Horse riding|Paardensport;
      Verzamelen|Collecting; Postzegels verzamelen|Stamp collecting|Filatelie; Munten verzamelen|Coin collecting|Numismatiek; Bordspellen|Board games;
      Films kijken|Watching films|Films; Series kijken|Watching series|Series; Schrijven|Writing; Dichten|Poetry|Gedichten schrijven; Bloggen|Blogging;
      Vloggen|Vlogging; Programmeren|Programming|Coding; Knutselen|Crafts|Arts and crafts; Origami; Kalligrafie|Calligraphy; Pottenbakken|Pottery|Keramiek;
      Beeldhouwen|Sculpting; Houtbewerking|Woodworking; Modelbouw|Model building|Scale modelling; Treinen verzamelen|Model trains|Modeltreinen;
      Lego|Lego|Lego bouwen; Kamperen|Camping; Vogels spotten|Birdwatching|Vogelkijken; Sterrenkijken|Stargazing|Astronomie; Geocaching;
      Duiken|Diving|Scuba diving; Surfen|Surfing; Skiën|Skiing; Snowboarden|Snowboarding; Zeilen|Sailing; Kajakken|Kayaking; Toneel|Acting|Theater;
      Goochelen|Magic tricks; Jongleren|Juggling; Kruiswoordpuzzels|Crosswords; Sudoku; Escape rooms|Escape room; Karaoke; Dj'en|DJing;
      Imkeren|Beekeeping; Paddenstoelen zoeken|Foraging; Metaaldetectie|Metal detecting; Stamboomonderzoek|Genealogy; Vrijwilligerswerk|Volunteering;
      Cosplay; Larpen|LARP; Airsoft; Paintball; Darts; Biljarten|Billiards|Snooker|Pool; Bowlen|Bowling; Golfen|Golf; Kitesurfen|Kitesurfing;
      Duivensport|Pigeon racing; Aquarium|Fishkeeping; Brouwen|Homebrewing|Bier brouwen; Kaarsen maken|Candle making; Zeep maken|Soap making;
      Borduren|Embroidery; Quilten|Quilting; Macramé|Macrame; Bonsai; Taxidermie|Taxidermy; Stand-upcomedy|Stand-up comedy` },

    { id: 'emotions', lvl: 1, nl: 'Noem een gevoel of emotie', en: 'Name a feeling or emotion', a: `
      Blij|Happy|Blijdschap|Happiness|Vreugde|Joy; Verdrietig|Sad|Verdriet|Sadness; Boos|Angry|Woede|Anger|Kwaad; Bang|Scared|Angst|Fear;
      Verliefd|In love|Liefde|Love; Moe|Tired|Vermoeid; Verrast|Surprised|Verrassing|Surprise; Jaloers|Jealous|Jaloezie|Jealousy;
      Zenuwachtig|Nervous|Nervositeit|Stress|Gestrest|Stressed; Eenzaam|Lonely|Eenzaamheid|Loneliness; Trots|Proud|Trots|Pride;
      Schaamte|Shame|Beschaamd|Ashamed; Verveling|Boredom|Verveeld|Bored; Teleurgesteld|Disappointed|Teleurstelling|Disappointment;
      Opgewonden|Excited|Enthousiast|Enthusiasm; Walging|Disgust|Vies|Disgusted; Schuldgevoel|Guilt|Schuldig|Guilty; Hoop|Hope; Dankbaarheid|Gratitude|Dankbaar;
      Medelijden|Pity|Compassie|Compassion|Medeleven; Nieuwsgierig|Curious|Nieuwsgierigheid|Curiosity; Rust|Calm|Kalm|Rustig|Ontspannen|Relaxed;
      Frustratie|Frustration|Gefrustreerd; Heimwee|Homesick|Homesickness; Nostalgie|Nostalgia; Verwarring|Confusion|Verward|Confused;
      Paniek|Panic; Opluchting|Relief|Opgelucht; Spijt|Regret; Wanhoop|Despair; Tevreden|Content|Tevredenheid|Satisfaction; Onzeker|Insecure|Onzekerheid; Zelfvertrouwen|Confidence; Ontroering|Being moved|Ontroerd; Euforie|Euphoria;
      Melancholie|Melancholy; Rouw|Grief; Ergernis|Annoyance|Geërgerd|Annoyed; Afgunst|Envy; Haat|Hate|Hatred; Wraak|Vengefulness|Wraakgevoel;
      Bewondering|Admiration; Ontzag|Awe; Verbazing|Amazement|Verbaasd; Gêne|Embarrassment|Gegeneerd; Leedvermaak|Schadenfreude;
      Weemoed|Wistfulness; Berusting|Resignation; Onverschilligheid|Indifference; Apathie|Apathy; Achterdocht|Suspicion|Wantrouwen;
      Saudade; Hygge|Gezelligheid|Coziness; Fernweh|Wanderlust|Reislust; FOMO|Fear of missing out; Vervreemding|Alienation` },

    { id: 'weather', lvl: 1, nl: 'Noem een soort weer of weersverschijnsel', en: 'Name a type of weather or weather phenomenon', a: `
      Regen|Rain; Zon|Sun|Zonneschijn|Sunshine|Zonnig|Sunny; Sneeuw|Snow; Wind; Onweer|Thunderstorm|Storm met donder; Storm|Storm; Mist|Fog;
      Hagel|Hail; Bliksem|Lightning; Donder|Thunder; Wolken|Clouds|Bewolkt|Cloudy; Regenboog|Rainbow; Ijzel|Freezing rain|Black ice|IJzel;
      Vorst|Frost|Nachtvorst; Motregen|Drizzle; Tornado|Tornado|Windhoos|Twister; Orkaan|Hurricane; Hittegolf|Heatwave; Natte sneeuw|Sleet;
      Sneeuwstorm|Snowstorm|Blizzard; Wervelstorm|Cyclone|Cycloon; Tyfoon|Typhoon; Moesson|Monsoon; Dauw|Dew; Nevel|Mist (light)|Heiigheid|Haze;
      Stortbui|Downpour|Wolkbreuk|Cloudburst; Droogte|Drought; Zandstorm|Sandstorm; Waterhoos|Waterspout; Smog; Hoosbui|Shower|Bui|Regenbui;
      Hagelstorm|Hailstorm; Noorderlicht|Northern lights|Aurora|Poollicht; Halo|Halo|Zonnehalo; Bijzon|Sun dog|Parhelium; Kogelbliksem|Ball lightning;
      Föhn|Foehn wind|Föhnwind; Mistral; Sirocco; Tramontana; Bora; Passaatwind|Trade wind|Passaat; Inversie|Temperature inversion;
      Ijsregen|Ice pellets; Rijp|Hoarfrost; Dooi|Thaw; Indian summer|Indian summer|Nazomer;
      El Niño|El Nino; La Niña|La Nina; Ochtendrood|Red sky; Fata morgana|Mirage|Luchtspiegeling` },

    { id: 'shoes', lvl: 2, nl: 'Noem een soort schoen', en: 'Name a type of shoe', a: `
      Sneakers|Sneakers|Sportschoenen|Trainers|Loopschoenen; Laarzen|Boots|Laars; Slippers|Flip-flops|Teenslippers; Sandalen|Sandals|Sandaal;
      Pantoffels|Slippers (house)|Sloffen|Pantoffel; Hakken|High heels|Pumps|Naaldhakken; Klompen|Clogs; Regenlaarzen|Wellies|Rubber boots|Wellingtons;
      Ballerina's|Ballet flats|Ballerinas; Instappers|Loafers|Mocassins|Moccasins; Wandelschoenen|Hiking boots|Bergschoenen; Voetbalschoenen|Football boots|Cleats;
      Skischoenen|Ski boots; Schaatsen|Skates|Ice skates; Rolschaatsen|Roller skates; Espadrilles; Crocs; Enkellaarsjes|Ankle boots;
      Chelsea boots|Chelsea boots; Cowboylaarzen|Cowboy boots; Gympen|Plimsolls|Canvas shoes|Turnpantoffels; Dansschoenen|Dance shoes;
      Balletschoenen|Ballet shoes|Spitzen|Pointe shoes; Golfschoenen|Golf shoes; Wielerschoenen|Cycling shoes; Spikes|Spikes|Atletiekspikes;
      Veterschoenen|Lace-ups|Oxfords|Derby; Brogues; Bootschoenen|Boat shoes|Docksiders; Plateauzolen|Platform shoes|Plateauschoenen; Sleehakken|Wedges;
      Muiltjes|Mules; Slingbacks; Kitten heels; Dijlaarzen|Thigh-high boots; Snowboots|Snow boots|Moonboots|Moon boots; Uggs|Ugg boots;
      Werkschoenen|Work boots|Veiligheidsschoenen|Safety shoes; Legerkistjes|Combat boots|Kistjes|Army boots; Dr. Martens|Doc Martens|Docs;
      Monkstraps|Monk shoes; Tabi; Geta; Waterschoenen|Water shoes|Aquaschoenen; Barefootschoenen|Barefoot shoes;
      Orthopedische schoenen|Orthopaedic shoes; Duikschoenen|Diving boots; Klimschoenen|Climbing shoes|Climbing shoes; Bowlingschoenen|Bowling shoes` },

    { id: 'outdoor-games', lvl: 1, nl: 'Noem een spelletje dat kinderen buiten spelen', en: 'Name a game children play outside', a: `
      Verstoppertje|Hide and seek|Verstoppertje spelen; Tikkertje|Tag|Tikken|Tikspel; Voetbal|Football|Soccer; Touwtjespringen|Skipping|Jump rope|Springtouw;
      Hinkelen|Hopscotch|Hinkelpad; Knikkeren|Marbles|Knikkers; Rood licht groen licht|Red light, green light|Annemaria koekoek|Eén twee drie piano;
      Zakdoekje leggen|Duck duck goose; Kat en muis|Cat and mouse; Trefbal|Dodgeball; Elastiekspringen|Chinese jump rope|Elastiek; Stoepkrijt|Chalk drawing|Krijten op de stoep;
      Slagbal|Rounders|Kickball; Vliegeren|Kite flying|Vlieger; Schommelen|Swinging|Schommel; Glijbaan|Slide; Wip|Seesaw; Zandbak|Sandpit|Sandbox|Zandkasteel;
      Fietsen|Cycling; Steppen|Scooting; Rolschaatsen|Roller skating; Waterpistool|Water fight|Waterpistolen|Waterballonnen|Water balloons;
      Bellenblazen|Blowing bubbles; Frisbee; Kiekeboe|Peekaboo; Landjepik|Land grab|Landveroveren; Kampvuur|Campfire; Hutten bouwen|Den building|Kamp bouwen;
      Boompje klimmen|Tree climbing|In bomen klimmen; Kastie|Capture the flag|Vlaggenroof; Schipper mag ik overvaren|Schipper mag ik overvaren|British bulldog;
      Overgooien|Catch|Vangen; Petanque|Pétanque|Boules|Jeu de boules; Badminton; Ping-pong|Table tennis|Pingpong; Basketbal|Basketball;
      Bokspringen|Leapfrog; Haasje-over|Leapfrog (2)|Haasje over; Zaklopen|Sack race; Koekhappen|Bun bobbing; Blindemannetje|Blind man's buff;
      Eierlopen|Egg and spoon race; Touwtrekken|Tug of war; Stoelendans|Musical chairs; Burgertje Pluk|Statues|Standbeeldje; Diefje met verlos|Cops and robbers|Politie en boef;
      Vossenjacht|Fox hunt|Vossenjacht; Speurtocht|Treasure hunt|Schattenjacht; Kegelen|Skittles; Kubb; Mölkky|Molkky; Cornhole; Diabolo; Jojo|Yo-yo;
      Tollen|Spinning top|Tol; Hoepelen|Hula hoop|Hoelahoep|Hoepel; Stelten lopen|Stilts|Steltlopen; Slootjespringen|Ditch jumping|Polsstokspringen` },

    { id: 'shapes', lvl: 1, nl: 'Noem een vorm (van een figuur of lichaam)', en: 'Name a shape', a: `
      Cirkel|Circle|Rond; Vierkant|Square; Driehoek|Triangle; Rechthoek|Rectangle; Ster|Star; Hart|Heart; Ovaal|Oval; Kubus|Cube; Bol|Sphere;
      Piramide|Pyramid; Zeshoek|Hexagon; Vijfhoek|Pentagon; Achthoek|Octagon; Ruit|Rhombus|Diamond; Cilinder|Cylinder; Kegel|Cone; Trapezium|Trapezium|Trapezoid;
      Parallellogram|Parallelogram; Halve maan|Crescent|Maansikkel; Kruis|Cross; Pijl|Arrow; Spiraal|Spiral; Ellips|Ellipse; Balk|Cuboid|Rechthoekig blok;
      Prisma|Prism; Zevenhoek|Heptagon; Negenhoek|Nonagon; Tienhoek|Decagon; Twaalfhoek|Dodecagon; Halve cirkel|Semicircle|Halfrond;
      Tetraëder|Tetrahedron; Octaëder|Octahedron; Dodecaëder|Dodecahedron; Icosaëder|Icosahedron; Torus|Torus|Donut; Vlieger|Kite|Deltoïde|Deltoid;
      Hexagram|Hexagram|Davidster; Pentagram; Klaverblad|Trefoil|Klaver; Druppel|Teardrop|Druppelvorm; Kwartcirkel|Quarter circle; Sector|Sector|Cirkelsector;
      Lemniscaat|Lemniscate|Oneindigheidsteken; Möbiusband|Möbius strip|Mobius strip; Parabool|Parabola; Hyperbool|Hyperbola; Fractal; Reuleauxdriehoek|Reuleaux triangle;
      Rhombicuboctaëder|Rhombicuboctahedron; Antiprisma|Antiprism; Afgeknotte kegel|Frustum` },

    { id: 'body', lvl: 1, nl: 'Noem een deel van het menselijk lichaam (aan de buitenkant)', en: 'Name a part of the human body (on the outside)', a: `
      Hand; Voet|Foot; Arm; Been|Leg; Hoofd|Head; Neus|Nose; Oog|Eye|Ogen; Oor|Ear|Oren; Mond|Mouth; Knie|Knee; Vinger|Finger; Teen|Toe|Tenen;
      Elleboog|Elbow; Schouder|Shoulder; Buik|Belly|Stomach|Abdomen; Rug|Back; Nek|Neck|Hals; Haar|Hair; Lippen|Lips|Lip; Duim|Thumb; Kin|Chin;
      Wang|Cheek|Wangen; Voorhoofd|Forehead; Navel|Belly button|Navel; Borst|Chest; Heup|Hip; Pols|Wrist; Enkel|Ankle; Hiel|Heel; Billen|Buttocks|Bum|Achterwerk|Kont;
      Dij|Thigh; Kuit|Calf; Wenkbrauw|Eyebrow|Wenkbrauwen; Wimpers|Eyelashes|Wimper; Ooglid|Eyelid; Nagel|Nail|Nagels|Vingernagel; Tong|Tongue; Tanden|Teeth|Tand;
      Handpalm|Palm|Palm; Vuist|Fist; Oksel|Armpit; Lies|Groin; Kaak|Jaw; Slaap|Temple; Scheen|Shin|Scheenbeen; Knokkel|Knuckle; Middelvinger|Middle finger;
      Wijsvinger|Index finger; Ringvinger|Ring finger; Pink|Little finger|Pinky; Grote teen|Big toe; Oorlel|Earlobe; Neusgat|Nostril; Tepel|Nipple;
      Sleutelbeen|Collarbone; Schouderblad|Shoulder blade; Onderarm|Forearm; Bovenarm|Upper arm; Knieholte|Back of the knee|Kniekuil; Wreef|Instep;
      Voetzool|Sole|Zool; Kuiltje|Dimple|Kuiltjes; Sproeten|Freckles; Moedervlek|Mole|Birthmark; Huig|Uvula; Adamsappel|Adam's apple; Gootje|Philtrum|Neusgootje;
      Taille|Waist; Lende|Loin|Lendenen; Kruin|Crown|Kruin; Achterhoofd|Back of the head; Nagelriem|Cuticle` },

    { id: 'round-things', lvl: 2, nl: 'Noem iets dat rond is', en: 'Name something that is round', a: `
      Bal|Ball; Zon|Sun; Maan|Moon; Wiel|Wheel|Band|Tyre|Tire; Bord|Plate; Klok|Clock; Pizza; Munt|Coin|Muntstuk; Appel|Apple; Sinaasappel|Orange;
      Aarde|Earth|Wereldbol|Globe; Donut|Doughnut|Donut; Knoop|Button; Ring; Cd|CD|Dvd|DVD; Taart|Cake|Pie; Koekje|Biscuit|Cookie; Ballon|Balloon;
      Pannenkoek|Pancake; Hamburger|Burger; Pupil; Oog|Eye; Hoela hoep|Hula hoop|Hoepel; Frisbee; Knikker|Marble; Erwt|Pea; Druif|Grape; Kers|Cherry; Tomaat|Tomato; Meloen|Melon; Watermeloen|Watermelon; Basketbal|Basketball;
      Tennisbal|Tennis ball; Golfbal|Golf ball; Voetbal|Football; Bowlingbal|Bowling ball; Planeet|Planet; Bel|Bubble|Zeepbel; Kaas (bol)|Cheese wheel|Kaaswiel;
      Stuur|Steering wheel; Deksel|Lid; Ronde tafel|Round table|Tafel (rond); Schijf|Disc|Disk; Medaille|Medal; Rotonde|Roundabout; Camembert; Brie; Gouda; Bagel; Pistolet|Bread roll|Broodje; Tortilla; Pita;
      Bierviltje|Beer mat|Coaster|Onderzetter; Lampion|Paper lantern; Trommel|Drum; Tamboerijn|Tambourine; Gong; Schoteltje|Saucer; Vergrootglas|Magnifying glass;
      Kompas|Compass; Patrijspoort|Porthole; Putdeksel|Manhole cover; Hoepelrok|Hoop skirt; Krans|Wreath; Halo` }
  ]);

  /* ── Eten & dieren ───────────────────────────────────────── */
  B.addQuestions('nature', [
    { id: 'desserts', lvl: 1, nl: 'Noem een dessert', en: 'Name a dessert', a: `
      IJs|Ice cream|Roomijs; Chocolademousse|Chocolate mousse|Mousse; Tiramisu; Pannenkoeken|Pancakes|Pannenkoek|Crêpes|Crepes; Wafels|Waffles|Wafel;
      Taart|Cake; Pudding; Crème brûlée|Creme brulee; Fruitsalade|Fruit salad; Rijstpap|Rice pudding|Rijstpudding; Dame blanche|Dame blanche;
      Brownie|Brownie|Brownies; Cheesecake|Cheesecake|Kaastaart; Panna cotta; Appeltaart|Apple pie; Yoghurt|Yoghurt|Yogurt; Tarte tatin;
      Profiteroles|Soesjes|Choux buns; Sorbet; Milkshake; Coupe; Bananensplit|Banana split; Moelleux|Lava cake|Fondant au chocolat|Chocolate fondant;
      Clafoutis; Crumble|Crumble|Appelcrumble; Trifle; Pavlova; Baklava; Churros; Mochi; Gelato; Sabayon|Zabaglione; Île flottante|Floating island;
      Rode vruchten|Red berries|Bosvruchten; Aardbeien met slagroom|Strawberries and cream|Aardbeien; Flan|Flan|Karamelpudding|Crème caramel;
      Vlaai|Fruit tart|Fruittaart; Bavarois; Soufflé|Souffle; Parfait; Semifreddo; Granita; Frozen yoghurt|Frozen yogurt|Froyo;
      Apfelstrudel|Strudel|Appelstrudel; Sachertorte|Sacher torte|Sachertaart; Zwarte Woudtaart|Black Forest gâteau|Black Forest cake; Bread and butter pudding|Broodpudding;
      Sticky toffee pudding; Kheer; Gulab jamun; Halva|Halwa|Halvah; Turks fruit|Turkish delight|Lokum; Cannoli; Zuppa inglese; Affogato;
      Kaasplank|Cheese board|Kaas; Peer Belle-Hélène|Poire Belle Hélène|Pears Belle Helene; Pêche Melba|Peach Melba; Crêpe Suzette|Crepe Suzette;
      Rabarbercompote|Rhubarb compote|Compote|Appelmoes|Apple sauce; Gâteau|Gateau; Mille-feuille|Mille-feuille|Tompouce|Boekje; Éclair|Eclair` },

    { id: 'sauces', lvl: 1, nl: 'Noem een saus', en: 'Name a sauce', a: `
      Ketchup|Ketchup|Tomatenketchup; Mayonaise|Mayonnaise|Mayo; Mosterd|Mustard; Bolognaise|Bolognese|Bolognesesaus; Pesto; Bearnaise|Béarnaise|Bearnaisesaus;
      Barbecuesaus|Barbecue sauce|BBQ-saus|BBQ sauce; Sojasaus|Soy sauce; Currysaus|Curry sauce|Curry ketchup|Curryketchup; Tomatensaus|Tomato sauce;
      Bechamel|Béchamel|White sauce|Witte saus; Andalouse; Samurai|Samurai sauce|Samuraisaus; Cocktailsaus|Cocktail sauce|Rosé; Tartaar|Tartare sauce|Tartaarsaus;
      Hollandaise|Hollandaise; Pepersaus|Pepper sauce|Peppersaus; Champignonsaus|Mushroom sauce; Kaassaus|Cheese sauce; Carbonara; Arrabbiata;
      Napolitaine|Napoletana|Marinara; Pindasaus|Peanut sauce|Satésaus|Satay sauce; Sweet chili|Sweet chilli sauce|Zoete chilisaus; Sriracha; Tabasco|Tabasco|Hot sauce|Pikante saus;
      Guacamole; Salsa; Tzatziki; Hummus|Houmous; Aioli|Aïoli|Look saus|Garlic sauce|Looksaus; Vinaigrette|Dressing|Slasaus; Joppiesaus|Joppie sauce;
      Bicky-saus|Bicky sauce; Hannibal|Hannibal sauce; Brasil|Brazil sauce|Brasilsaus; Americain|Americain sauce; Pickles|Piccalilly|Piccalilli;
      Teriyaki; Hoisin|Hoisin sauce; Oestersaus|Oyster sauce; Vissaus|Fish sauce; Worcestershiresaus|Worcestershire sauce; Jus|Gravy|Juus|Jus de viande;
      Appelmoes|Apple sauce; Muntsaus|Mint sauce; Cranberrysaus|Cranberry sauce; Mierikswortelsaus|Horseradish sauce|Mierikswortel; Chimichurri;
      Harissa; Sambal; Ponzu; Tahini|Tahin; Romesco; Beurre blanc; Velouté|Veloute; Espagnole; Bordelaise; Madeirasaus|Madeira sauce; Mornay;
      Ravigote; Gribiche; Rouille; Remoulade; Mole; Raita; Chutney|Mango chutney; Tkemali; Ajvar; Pistou; Salsa verde; Alfredo|Alfredo sauce;
      Puttanesca; Amatriciana; Cacio e pepe; Ragù|Ragu; Dijonnaise; Honing-mosterd|Honey mustard; Ranch|Ranch dressing; Caesar|Caesar dressing;
      Thousand Island|Thousand Island dressing; Blue cheese|Blue cheese dressing; Gochujang; Ssamjang; Tonkatsusaus|Tonkatsu sauce; Okonomiyakisaus|Okonomiyaki sauce;
      Bulldog; Kewpie|Kewpie mayo; Zigeunersaus|Gypsy sauce|Zigeuner; Stroganoff|Stroganoffsaus; Diable|Sauce diable; Choron; Foyot` },

    { id: 'breakfast', lvl: 1, nl: 'Noem iets dat je kan eten of drinken als ontbijt', en: 'Name something you can eat or drink for breakfast', a: `
      Boterham|Sandwich|Brood|Bread|Toast; Cornflakes|Cornflakes|Ontbijtgranen|Cereal; Ei|Egg|Eieren|Eggs; Koffie|Coffee; Thee|Tea; Melk|Milk;
      Croissant; Yoghurt|Yoghurt|Yogurt; Choco|Chocolate spread|Chocopasta|Nutella; Confituur|Jam|Jam|Marmelade; Fruitsap|Juice|Sinaasappelsap|Orange juice;
      Spek|Bacon; Muesli; Havermout|Porridge|Oatmeal|Pap; Pannenkoeken|Pancakes; Wafels|Waffles; Banaan|Banana; Appel|Apple; Fruit;
      Spiegelei|Fried egg; Roerei|Scrambled eggs; Gekookt ei|Boiled egg|Zachtgekookt ei; Omelet|Omelette; Kaas|Cheese; Hesp|Ham|Ham; Boter|Butter;
      Honing|Honey; Pistolets|Bread rolls|Broodjes; Koffiekoek|Danish pastry|Koffiekoeken; Chocoladebroodje|Pain au chocolat; Granola; Smoothie;
      Chocolademelk|Hot chocolate|Cacao|Warme chocolademelk; Pindakaas|Peanut butter; Hagelslag|Sprinkles|Muisjes; Speculoos|Speculoos spread|Speculoospasta;
      Avocado|Avocado toast|Avocadotoast; Bagel; Muffin; Wentelteefjes|French toast|Verloren brood; Worstjes|Sausages|Worstje; Bonen in tomatensaus|Baked beans;
      Tomaat|Tomato; Champignons|Mushrooms; Hashbrowns|Hash browns|Rösti; Ontbijtkoek|Gingerbread|Peperkoek|Kruidkoek; Beschuit|Rusk|Biscotte;
      Cracotte|Crispbread|Knäckebröd|Crackers; Kwark|Quark|Platte kaas|Plattekaas; Skyr; Chiapudding|Chia pudding; Açaibowl|Acai bowl|Açai;
      Eggs Benedict|Eieren Benedict; Shakshuka; Full English breakfast|English breakfast; Black pudding|Bloedworst; Congee|Rijstepap|Rice porridge;
      Miso-soep|Miso soup; Natto; Dosa; Idli; Paratha; Huevos rancheros; Chilaquiles; Arepa|Arepas; Pão de queijo; Tostada; Churros met chocolade|Churros; Rozijnenbrood|Raisin bread|Krentenbrood|Cramique; Suikerbrood|Sugar bread|Craquelin; Sandwich met zalm|Smoked salmon|Gerookte zalm;
      Grapefruit; Kiwi; Bessen|Berries; Kefir; Ontbijtdrank|Breakfast drink` },

    { id: 'soft-drinks', lvl: 1, nl: 'Noem een drankje zonder alcohol', en: 'Name a non-alcoholic drink', a: `
      Water; Cola|Coca-Cola|Coke; Sinaasappelsap|Orange juice|Fruitsap|Juice; Melk|Milk; Thee|Tea|Ijsthee|Iced tea|Ice tea; Koffie|Coffee;
      Chocolademelk|Chocolate milk|Hot chocolate|Cécémel|Cacao; Limonade|Lemonade; Spuitwater|Sparkling water|Bruiswater; Fanta; Sprite; Appelsap|Apple juice;
      Energydrank|Energy drink|Red Bull|Monster; Smoothie; Milkshake; Seven-up|7 Up|7up; Tonic|Tonic water; Ginger ale; Ginger beer|Gemberbier;
      Pepsi; Multivruchtensap|Multifruit juice; Ananassap|Pineapple juice; Tomatensap|Tomato juice; Grapefruitsap|Grapefruit juice; Druivensap|Grape juice;
      Siroop|Squash|Cordial|Grenadine|Limonadesiroop; Sportdrank|Sports drink|Aquarius|Gatorade|Powerade; Kokoswater|Coconut water; Bubble tea|Boba;
      Kombucha; Kefir; Karnemelk|Buttermilk; Yoghurtdrank|Yoghurt drink|Lassi; Ayran; Horchata; Root beer; Bitter lemon; Dr Pepper;
      Mountain Dew; Schweppes; Orangina; Fristi; Chocomel; Alcoholvrij bier|Alcohol-free beer|0.0|Alcoholvrij;
      Mocktail; Virgin mojito|Virgin mojito; Kinderchampagne|Kids' champagne|Champagne zonder alcohol; Muntthee|Mint tea|Marokkaanse thee;
      Groene thee|Green tea; Matcha; Kruidenthee|Herbal tea|Kamillethee|Chamomile tea; Rooibos; Chai|Chai latte; Cappuccino; Latte|Caffè latte|Latte macchiato;
      Espresso; Frappé|Frappe|Frappuccino; Sojamelk|Soy milk; Havermelk|Oat milk; Amandelmelk|Almond milk; Rijstmelk|Rice milk; Mineraalwater|Mineral water;
      Bouillon|Broth; Aloë vera-drank|Aloe vera drink; Guaraná|Guarana; Inca Kola; Irn-Bru; Kvas|Kvass; Sikhye; Tamarindesap|Tamarind juice|Agua de tamarindo;
      Agua fresca; Sugarcane juice|Suikerrietsap; Birch water|Berkensap; Maté|Mate|Yerba mate` },

    { id: 'ice-cream', lvl: 1, nl: 'Noem een ijssmaak', en: 'Name an ice cream flavour', a: `
      Vanille|Vanilla; Chocolade|Chocolate; Aardbei|Strawberry; Stracciatella; Mokka|Coffee|Koffie|Mocha; Pistache|Pistachio; Citroen|Lemon;
      Karamel|Caramel|Salted caramel|Gezouten karamel; Hazelnoot|Hazelnut; Framboos|Raspberry; Mango; Banaan|Banana; Kokos|Coconut;
      Cookie dough|Cookie dough; Cookies and cream|Cookies and cream|Oreo; Munt-chocolade|Mint chocolate chip|Munt|Mint; Speculoos; Tiramisu;
      Yoghurt|Yoghurt|Yogurt; Rum-rozijn|Rum and raisin|Rum rozijn; Nougat|Nougat|Noga; Meloen|Melon; Perzik|Peach; Kers|Cherry; Bosvruchten|Forest fruits|Mixed berries;
      Passievrucht|Passion fruit; Sinaasappel|Orange; Ananas|Pineapple; Watermeloen|Watermelon; Appel|Apple; Peer|Pear; Blauwe bes|Blueberry;
      Rocky road; Kauwgom|Bubblegum|Bubble gum; Smurfenijs|Smurf|Blue moon; Tutti frutti|Tutti frutti; Malaga; Advocaat|Advocaat|Eierlikeur;
      Mascarpone; Ricotta; Kaneel|Cinnamon; Gember|Ginger; Groene thee|Green tea|Matcha; Zwarte sesam|Black sesame; Lavendel|Lavender;
      Rozen|Rose; Honing|Honey; Pindakaas|Peanut butter; Witte chocolade|White chocolate; Pure chocolade|Dark chocolate;
      Neapolitaans|Neapolitan; Spumoni; Dulce de leche; Kulfi; Ube; Durian; Lychee|Litchi; Yuzu; Kaki|Persimmon; Vijg|Fig; Granaatappel|Pomegranate;
      Rabarber|Rhubarb; Basilicum|Basil; Olijfolie|Olive oil; Avocado; Pompoen|Pumpkin; Zoete aardappel|Sweet potato; Kaas|Cheese; Bacon` },

    { id: 'pizza', lvl: 1, nl: 'Noem iets dat je op een pizza kan leggen', en: 'Name something you can put on a pizza', a: `
      Kaas|Cheese|Mozzarella; Tomatensaus|Tomato sauce|Tomaat|Tomato; Salami|Salami|Pepperoni; Hesp|Ham|Ham; Champignons|Mushrooms|Champignon;
      Ananas|Pineapple; Ui|Onion|Uien; Paprika|Pepper|Bell pepper; Olijven|Olives|Olijf; Tonijn|Tuna; Kip|Chicken; Gehakt|Mince|Minced meat;
      Spek|Bacon; Basilicum|Basil; Ansjovis|Anchovies; Mais|Sweetcorn|Corn; Ei|Egg; Spinazie|Spinach; Rucola|Rocket|Arugula; Parmezaan|Parmesan;
      Gorgonzola; Geitenkaas|Goat's cheese|Goat cheese; Chorizo; Prosciutto|Parmaham|Parma ham; Oregano; Kappertjes|Capers; Jalapeño|Jalapeno|Jalapeños;
      Look|Garlic|Knoflook; Zeevruchten|Seafood|Frutti di mare; Garnalen|Prawns|Shrimp; Mosselen|Mussels; Zalm|Salmon; Kebab|Doner|Döner;
      Pittige worst|Spicy sausage|Salsiccia|Worst; Aubergine|Aubergine|Eggplant; Courgette|Courgette|Zucchini; Artisjok|Artichoke; Zongedroogde tomaat|Sun-dried tomatoes;
      Pesto; Ricotta; Burrata; Brie; Feta; Cheddar; Emmentaler|Emmental|Gruyère; Taleggio; Scamorza; Truffel|Truffle; Pijnboompitten|Pine nuts;
      Rode ui|Red onion; Lente-ui|Spring onion|Sjalot|Shallot; Chili|Chilli flakes|Pepervlokken|Chili flakes; Barbecuesaus|BBQ sauce; Crème fraîche|Creme fraiche|Room;
      Aardappel|Potato; Broccoli; Asperges|Asparagus; Pompoen|Pumpkin; Peer|Pear; Vijgen|Figs; Walnoten|Walnuts; Honing|Honey; Nutella|Chocolate|Chocolade;
      Banaan|Banana; Kerrie|Curry|Curry chicken; Tandoori; Mortadella; Nduja|'Nduja; Speck; Bresaola; Inktvis|Squid|Calamari; Octopus|Inktvis (octopus);
      Rivierkreeftjes|Crayfish; Kaviaar|Caviar; Kreeft|Lobster; Avocado; Boerenkool|Kale; Rode biet|Beetroot; Hummus` },

    { id: 'breads', lvl: 2, nl: 'Noem een soort brood of broodje', en: 'Name a type of bread or bread roll', a: `
      Stokbrood|Baguette|Baguette; Witbrood|White bread|Wit brood; Bruin brood|Brown bread|Volkorenbrood|Wholemeal bread; Pistolet|Pistolet|Broodje|Bread roll;
      Croissant; Ciabatta; Pita|Pitta|Pitabrood; Naan|Naan|Naanbrood; Toast|Toast|Toastbrood; Krentenbrood|Raisin bread|Rozijnenbrood|Cramique;
      Suikerbrood|Sugar bread|Craquelin; Zuurdesembrood|Sourdough|Zuurdesem; Roggebrood|Rye bread; Focaccia; Bagel; Tortilla|Tortilla|Wrap;
      Hamburgerbroodje|Burger bun|Bun; Pain au chocolat|Chocoladebroodje; Brioche; Meergranenbrood|Multigrain bread; Speltbrood|Spelt bread;
      Maisbrood|Cornbread; Pumpernickel; Matze|Matzo|Matza; Chapati; Paratha; Roti; Lavash; Injera; Pretzel|Pretzel|Krakeling|Bretzel;
      Kaiserbroodje|Kaiser roll; Sandwich|Sandwich|Sandwichbroodje|Zachte sandwich; Hotdogbroodje|Hot dog bun; Panini; Grissini|Soepstengels|Breadsticks;
      Knäckebröd|Crispbread; Beschuit|Rusk; Kerststol|Stollen|Stol; Paasbrood|Easter bread; Challa|Challah;
      Soda bread|Sodabrood; Scone|Scones; English muffin; Crumpet; Arepa; Pão de queijo; Pan de muerto; Pandesal; Melonpan|Melon pan;
      Mantou; Baozi|Bao|Bapao; Panettone; Pandoro; Fougasse; Pain de campagne|Boerenbrood|Landbrood; Waldkornbrood|Waldkorn; Tijgerbrood|Tiger bread|Tijgerbol;
      Piccolo; Fladenbrood|Flatbread|Turks brood|Turkish bread|Pide; Simit; Khachapuri; Zemelenbrood|Bran bread;
      Glutenvrij brood|Gluten-free bread; Desembrood|Leaven bread; Hoornbrood|Horn bread; Ontbijtkoek|Breakfast cake|Peperkoek|Gingerbread; Bâtard|Batard; Boule; Miche; Couronne` },

    { id: 'farm-animals', lvl: 1, nl: 'Noem een dier dat je op een boerderij kan zien', en: 'Name an animal you can see on a farm', a: `
      Koe|Cow; Varken|Pig; Kip|Chicken|Hen; Schaap|Sheep; Paard|Horse; Geit|Goat; Eend|Duck; Haan|Rooster|Cockerel; Ezel|Donkey; Konijn|Rabbit;
      Kat|Cat; Hond|Dog|Herdershond|Sheepdog; Gans|Goose; Kalkoen|Turkey; Pony; Stier|Bull; Kalf|Calf; Lam|Lamb; Big|Piglet|Biggetje;
      Kuiken|Chick|Kuikentje; Muis|Mouse; Rat; Alpaca|Alpaca|Lama|Llama; Os|Ox; Muilezel|Mule; Bij|Bee|Bijen; Kwartel|Quail; Parelhoen|Guinea fowl;
      Duif|Pigeon|Dove; Pauw|Peacock; Struisvogel|Ostrich; Emoe|Emu; Waterbuffel|Water buffalo|Buffel; Yak; Hert|Deer; Zwaluw|Swallow; Uil|Owl|Kerkuil|Barn owl;
      Vos|Fox; Mol|Mole; Egel|Hedgehog; Kikker|Frog; Karper|Carp; Forel|Trout; Merrie|Mare; Veulen|Foal; Ram; Bok|Billy goat; Zeug|Sow; Ever|Boar|Beer (varken); Fazant|Pheasant; Cavia|Guinea pig; Fret|Ferret; Kameel|Camel; Rendier|Reindeer; Zijderups|Silkworm; Slak|Snail` },

    { id: 'african-animals', lvl: 1, nl: 'Noem een dier dat in het wild in Afrika leeft', en: 'Name an animal that lives in the wild in Africa', a: `
      Leeuw|Lion; Olifant|Elephant; Giraf|Giraffe; Zebra; Neushoorn|Rhinoceros|Rhino|Neushoren; Nijlpaard|Hippopotamus|Hippo; Krokodil|Crocodile|Nijlkrokodil;
      Cheeta|Cheetah|Jachtluipaard; Luipaard|Leopard; Gorilla; Chimpansee|Chimpanzee|Chimp; Hyena|Hyena|Hyaena; Antilope|Antelope; Gnoe|Wildebeest|Gnu;
      Struisvogel|Ostrich; Flamingo; Buffel|Buffalo|Kaapse buffel|Cape buffalo; Bavianen|Baboon|Baviaan; Wrattenzwijn|Warthog; Gazelle|Gazelle|Thomsongazelle;
      Impala; Stokstaartje|Meerkat; Lemur|Lemur|Maki|Ringstaartmaki; Okapi; Bonobo; Mandril|Mandrill; Wilde hond|African wild dog|Hyenahond; Jakhals|Jackal;
      Gier|Vulture; Adelaar|Eagle|Visarend; Pinguïn|Penguin|Zwartvoetpinguïn|African penguin; Kameel|Camel|Dromedaris|Dromedary; Fennek|Fennec fox|Woestijnvos;
      Python; Cobra; Zwarte mamba|Black mamba|Mamba; Kameleon|Chameleon; Schildpad|Tortoise|Landschildpad; Secretarisvogel|Secretary bird; Neushoornvogel|Hornbill;
      Maraboe|Marabou stork|Maraboe; Pelikaan|Pelican; Ibis; Kraanvogel|Crane|Kroonkraanvogel; Koedoe|Kudu; Eland|Eland|Elandantilope; Oryx|Oryx|Gemsbok;
      Springbok; Dikdik|Dik-dik; Klipspringer; Serval; Caracal|Caracal|Woestijnlynx; Civetkat|Civet; Genetkat|Genet; Mangoeste|Mongoose|Mangoest;
      Honingdas|Honey badger; Aardvarken|Aardvark|Erdvark; Schubdier|Pangolin; Galago|Bushbaby; Colobusaap|Colobus monkey; Vervet|Vervet monkey|Groene meerkat;
      Klipdas|Rock hyrax|Hyrax; Naakte molrat|Naked mole-rat; Springhaas|Springhare; Nijlvaraan|Nile monitor|Varaan; Goliathkikker|Goliath frog;
      Tseetseevlieg|Tsetse fly; Mestkever|Dung beetle; Termiet|Termite; Wever|Weaver bird|Wevervogel; Bijeneter|Bee-eater; Lepelaar|Spoonbill;
      Schoenbekooievaar|Shoebill; Bongo; Sitatunga; Waterbok|Waterbuck; Topi; Hartebeest|Hartebeest|Kaapse hartebeest; Nyala; Sabelantilope|Sable antelope;
      Bontebok; Duiker|Duiker|Duikerantilope; Gelada|Gelada|Dzjelada; Aye-aye|Vingerdier` },

    { id: 'insects', lvl: 2, nl: 'Noem een insect (spinnen zijn geen insecten!)', en: 'Name an insect (spiders are not insects!)', a: `
      Bij|Bee|Honingbij|Honeybee; Mier|Ant; Vlieg|Fly; Mug|Mosquito; Vlinder|Butterfly; Wesp|Wasp; Lieveheersbeestje|Ladybird|Ladybug; Kever|Beetle;
      Sprinkhaan|Grasshopper; Libel|Dragonfly|Libelle; Hommel|Bumblebee; Kakkerlak|Cockroach; Mot|Moth; Rups|Caterpillar; Vuurvlieg|Firefly|Glimworm;
      Krekel|Cricket; Termiet|Termite; Bidsprinkhaan|Praying mantis|Mantis; Vlo|Flea; Luis|Louse|Luizen|Lice; Wandelende tak|Stick insect;
      Paardenvlieg|Horsefly|Daas; Fruitvlieg|Fruit fly|Fruitvliegje; Meikever|Cockchafer|May bug; Vliegend hert|Stag beetle; Mestkever|Dung beetle;
      Hoornaar|Hornet; Bladluis|Aphid; Oorwurm|Earwig; Zilvervisje|Silverfish; Cicade|Cicada; Waterjuffer|Damselfly; Schorpioenvlieg|Scorpionfly; Atalanta|Red admiral; Pauwoog|Peacock butterfly|Dagpauwoog; Koolwitje|Cabbage white; Monarchvlinder|Monarch butterfly;
      Zijderups|Silkworm; Mestvlieg|Dung fly; Steekmug|Biting midge|Knut; Tseetseevlieg|Tsetse fly; Wants|Bug|Bedwants|Bedbug; Schildwants|Shield bug|Stinkwants|Stink bug;
      Schaatsenrijder|Pond skater|Water strider; Waterkever|Water beetle; Snuitkever|Weevil; Coloradokever|Colorado beetle; Boktor|Longhorn beetle;
      Goudhaantje|Leaf beetle; Glazenmaker|Hawker dragonfly; Eendagsvlieg|Mayfly; Steenvlieg|Stonefly; Schietmot|Caddisfly; Gaasvlieg|Lacewing;
      Mierenleeuw|Antlion; Houtwesp|Wood wasp; Galwesp|Gall wasp; Sluipwesp|Parasitoid wasp|Ichneumon; Zweefvlieg|Hoverfly;
      Langpootmug|Crane fly|Daddy longlegs; Paardenhorzel|Botfly|Horzel; Trips|Thrips|Onweersbeestje|Thunderfly; Witte vlieg|Whitefly;
      Schildluis|Scale insect; Wolluis|Mealybug; Springstaart|Springtail; Walking leaf|Wandelend blad; Neushoornkever|Rhinoceros beetle; Goliathkever|Goliath beetle;
      Herculeskever|Hercules beetle; Atlasvlinder|Atlas moth; Doodshoofdvlinder|Death's-head hawkmoth; Kolibrievlinder|Hummingbird hawk-moth; Processierups|Processionary caterpillar|Eikenprocessierups` },

    { id: 'birds', lvl: 1, nl: 'Noem een vogel', en: 'Name a bird', a: `
      Mus|Sparrow; Merel|Blackbird; Duif|Pigeon|Dove; Meeuw|Gull|Seagull; Kraai|Crow; Uil|Owl; Arend|Eagle|Adelaar; Pinguïn|Penguin; Papegaai|Parrot;
      Zwaan|Swan; Eend|Duck; Kip|Chicken|Hen; Ooievaar|Stork; Struisvogel|Ostrich; Flamingo; Pauw|Peacock; Roodborstje|Robin; Koolmees|Great tit|Mees|Tit;
      Ekster|Magpie; Specht|Woodpecker; Valk|Falcon; Kolibrie|Hummingbird; Zwaluw|Swallow; Reiger|Heron; Pelikaan|Pelican; Kanarie|Canary; Toekan|Toucan;
      Spreeuw|Starling; Vink|Finch; Gans|Goose; Kalkoen|Turkey; Havik|Hawk|Havik; Buizerd|Buzzard; Gier|Vulture; Kiwi; Emoe|Emu; Koekoek|Cuckoo;
      Ijsvogel|Kingfisher|IJsvogel; Lijster|Thrush; Kauw|Jackdaw; Roek|Rook; Raaf|Raven; Gaai|Jay|Vlaamse gaai; Winterkoning|Wren; Pimpelmees|Blue tit;
      Grasparkiet|Budgerigar|Budgie|Parkiet; Kaketoe|Cockatoo; Ara|Macaw; Fazant|Pheasant; Patrijs|Partridge; Kwartel|Quail; Fuut|Great crested grebe;
      Meerkoet|Coot; Waterhoen|Moorhen; Aalscholver|Cormorant; Kievit|Lapwing; Scholekster|Oystercatcher; Grutto|Black-tailed godwit; Wulp|Curlew;
      Albatros|Albatross; Stormvogel|Petrel|Fulmar; Jan-van-gent|Gannet; Papegaaiduiker|Puffin; Lepelaar|Spoonbill; Kraanvogel|Crane;
      Nachtegaal|Nightingale; Leeuwerik|Lark|Veldleeuwerik|Skylark; Goudvink|Bullfinch; Putter|Goldfinch|Distelvink; Sijs|Siskin; Boomklever|Nuthatch;
      Boomkruiper|Treecreeper; Kwikstaart|Wagtail; Gierzwaluw|Swift; Huiszwaluw|House martin; Slechtvalk|Peregrine falcon; Torenvalk|Kestrel; Sperwer|Sparrowhawk;
      Visarend|Osprey; Zeearend|White-tailed eagle; Steenarend|Golden eagle; Condor|Andean condor; Secretarisvogel|Secretary bird; Kasuaris|Cassowary;
      Nandoe|Rhea; Dodo; Lier vogel|Lyrebird|Liervogel; Paradijsvogel|Bird of paradise; Quetzal; Hop|Hoopoe; Bijeneter|Bee-eater; Scharrelaar|Roller;
      Klauwier|Shrike; Wielewaal|Golden oriole; Tureluur|Redshank; Kluut|Avocet; Strandloper|Sandpiper|Drieteenstrandloper|Sanderling; Steltkluut|Black-winged stilt;
      Roerdomp|Bittern; Kwak|Night heron; Ibis; Maraboe|Marabou stork; Kookaburra|Kookaburra|Lachvogel; Wevervogel|Weaver; Mainavogel|Myna|Beo; Lori|Lorikeet` },

    { id: 'sea-animals', lvl: 1, nl: 'Noem een dier dat in de zee leeft', en: 'Name an animal that lives in the sea', a: `
      Vis|Fish; Haai|Shark; Walvis|Whale; Dolfijn|Dolphin; Kwal|Jellyfish; Octopus|Octopus|Inktvis; Krab|Crab; Zeester|Starfish; Zeehond|Seal;
      Schildpad|Turtle|Zeeschildpad|Sea turtle; Kreeft|Lobster; Garnaal|Shrimp|Prawn|Garnalen; Mossel|Mussel|Mosselen; Oester|Oyster; Zeepaardje|Seahorse;
      Rog|Ray|Pijlstaartrog|Stingray; Krill; Coelacant|Coelacanth; Orka|Orca|Killer whale; Clownvis|Clownfish|Nemo; Zalm|Salmon; Tonijn|Tuna; Kabeljauw|Cod; Haring|Herring;
      Zeekoe|Manatee|Lamantijn|Doejong|Dugong; Walrus; Zeeleeuw|Sea lion; Pinguïn|Penguin; Zee-egel|Sea urchin; Zeeanemoon|Sea anemone|Anemoon;
      Koraal|Coral; Spons|Sponge|Zeespons; Pijlinktvis|Squid|Calamaris; Zeekomkommer|Sea cucumber; Narwal|Narwhal; Bultrug|Humpback whale;
      Blauwe vinvis|Blue whale; Potvis|Sperm whale; Bruinvis|Porpoise; Beluga|Beluga|Witte dolfijn; Zwaardvis|Swordfish; Murene|Moray eel|Moeraal;
      Paling|Eel|Aal; Kogelvis|Pufferfish|Blaasvis; Maanvis|Ocean sunfish|Mola; Sardine|Sardine|Sardien; Makreel|Mackerel; Ansjovis|Anchovy;
      Schol|Plaice; Tong|Sole; Tarbot|Turbot; Zeebaars|Sea bass; Heilbot|Halibut; Barracuda; Zeeduivel|Monkfish|Anglerfish; Lantaarnvis|Lanternfish;
      Hamerhaai|Hammerhead shark; Witte haai|Great white shark; Walvishaai|Whale shark; Reuzenhaai|Basking shark; Manta|Manta ray; Zaagvis|Sawfish;
      Heremietkreeft|Hermit crab; Zeespin|Spider crab; Zeepok|Barnacle; Sint-jakobsschelp|Scallop|Coquille Saint-Jacques;
      Wulk|Whelk; Alikruik|Periwinkle; Zeeslak|Sea slug|Naaktslak; Zeenaald|Pipefish; Koraalduivel|Lionfish|Koraalduivel; Steenvis|Stonefish;
      Doktersvis|Surgeonfish; Papegaaivis|Parrotfish; Keizersvis|Angelfish|Keizersvis; Vliegende vis|Flying fish; Nautilus; Zeekat|Cuttlefish;
      Reuzeninktvis|Giant squid; Portugees oorlogsschip|Portuguese man o' war; Zeeotter|Sea otter; Olifantszeehond|Elephant seal;
      Luipaardrob|Leopard seal; Grijze zeehond|Grey seal; Zeebeer|Fur seal; Zeeslang|Sea snake; Zeeleguaan|Marine iguana` },

    { id: 'reptiles', lvl: 2, nl: 'Noem een reptiel', en: 'Name a reptile', a: `
      Slang|Snake; Krokodil|Crocodile; Schildpad|Turtle|Tortoise; Hagedis|Lizard; Kameleon|Chameleon; Leguaan|Iguana; Alligator; Gekko|Gecko;
      Python; Cobra; Komodovaraan|Komodo dragon; Adder|Adder|Viper; Ratelslang|Rattlesnake; Anaconda; Boa|Boa constrictor; Zwarte mamba|Black mamba|Mamba;
      Varaan|Monitor lizard; Kaaiman|Caiman; Gaviaal|Gharial|Gavial; Zeeschildpad|Sea turtle; Landschildpad|Tortoise (land); Hazelworm|Slow worm;
      Baardagaam|Bearded dragon; Gila monster|Gilamonster|Gila-monster; Hoornhagedis|Horned lizard; Kraagshagedis|Frilled lizard; Basilisk;
      Vliegende draak|Flying dragon|Draco; Muurhagedis|Wall lizard; Zandhagedis|Sand lizard; Levendbarende hagedis|Viviparous lizard; Gladde slang|Smooth snake;
      Ringslang|Grass snake; Koningsslang|King snake; Koraalslang|Coral snake; Taipan; Bruine slang|Brown snake; Zeeslang|Sea snake; Gabonadder|Gaboon viper;
      Hoornadder|Horned viper; Groene mamba|Green mamba; Koningscobra|King cobra; Bushmaster; Zijwinder|Sidewinder; Korenslang|Corn snake;
      Melkslang|Milk snake; Reuzenschildpad|Giant tortoise|Galapagosreuzenschildpad; Lederschildpad|Leatherback turtle; Bijtschildpad|Snapping turtle;
      Roodwangschildpad|Red-eared slider; Tuatara|Brughagedis; Skink|Skink|Glansskink; Anolis|Anole; Agame|Agama; Doornduivel|Thorny devil;
      Zeeleguaan|Marine iguana` },

    { id: 'hibernation', lvl: 2, nl: 'Noem een dier dat een winterslaap houdt', en: 'Name an animal that hibernates', a: `
      Beer|Bear|Bruine beer|Brown bear; Egel|Hedgehog; Eekhoorn|Squirrel|Grondeekhoorn|Ground squirrel; Vleermuis|Bat; Marmot|Marmot|Bergmarmot;
      Hamster; Slaapmuis|Dormouse|Hazelmuis|Relmuis; Kikker|Frog; Schildpad|Tortoise|Turtle; Slang|Snake; Hagedis|Lizard; Pad|Toad; Salamander|Salamander|Newt|Watersalamander;
      Das|Badger; Wasbeer|Raccoon; Wangzakeekhoorn|Chipmunk|Aardeekhoorn; Prairiehond|Prairie dog; Zwarte beer|Black bear; Grizzlybeer|Grizzly bear|Grizzly;
      Hommel|Bumblebee (queen); Lieveheersbeestje|Ladybird; Vlinder|Butterfly|Citroenvlinder|Brimstone; Slak|Snail|Wijngaardslak; Mier|Ant; Wesp|Wasp (queen); Stinkdier|Skunk; Bosmarmot|Woodchuck|Groundhog; Lemur|Dikstaartmaki|Fat-tailed dwarf lemur; Gewone poorwill|Common poorwill|Poorwill; Alpenmarmot|Alpine marmot; IJsbeer|Polar bear (pregnant); Karper|Carp` }
  ]);

  /* ── Cultuur ─────────────────────────────────────────────── */
  B.addQuestions('culture', [
    { id: 'superheroes', lvl: 1, nl: 'Noem een superheld', en: 'Name a superhero', a: `
      Spider-Man|Spider-Man|Spiderman|Spinnenman; Batman; Superman; Iron Man|Iron Man|Ironman; Hulk|Hulk|The Hulk|De Hulk; Captain America;
      Thor; Wonder Woman; Black Panther; Black Widow; Flash|The Flash|Flash; Aquaman; Wolverine; Deadpool; Doctor Strange|Dr. Strange;
      Ant-Man|Antman; Captain Marvel; Hawkeye; Green Lantern; Groot; Star-Lord|Starlord; Rocket|Rocket Raccoon; Gamora; Vision; Scarlet Witch|Wanda;
      Falcon; Winter Soldier|Bucky; Robin; Batgirl; Supergirl; Storm; Cyclops|Cycloop; Jean Grey|Phoenix; Professor X|Professor Xavier;
      Beast; Rogue; Mystique; Nightcrawler; Daredevil; Punisher|The Punisher; Luke Cage; Jessica Jones; Iron Fist; Ghost Rider; Blade; Moon Knight;
      Shang-Chi; Ms. Marvel|Kamala Khan; She-Hulk; Silver Surfer; Mister Fantastic|Mr. Fantastic; Invisible Woman; Human Torch; The Thing|Thing;
      Cyborg; Green Arrow; Shazam; Martian Manhunter; Nightwing; Hellboy; Spawn; The Incredibles|Mr. Incredible|De Incredibles; Elastigirl; Frozone; Obelix; Asterix; Wonder Twins; Static Shock; Booster Gold; Blue Beetle; Atom|The Atom;
      Hawkman; Hawkgirl; Zatanna; Raven; Starfire; Beast Boy; Miles Morales; Spider-Gwen|Ghost-Spider|Gwen Stacy; Venom;
      Kick-Ass; Invincible; Homelander; Captain Planet; Underdog; Ladybug|Miraculous Ladybug; Cat Noir; Mighty Mouse; Kim Possible; Ben 10;
      Power Rangers; Sailor Moon; One-Punch Man|Saitama; All Might; Deku; Goku; Astro Boy; Ultraman; Superted|SuperTed; Mega Mindy; Big Hero 6|Baymax; Hancock; Darkwing Duck; Inspector Gadget|Inspecteur Gadget` },

    { id: 'fairy-tales', lvl: 1, nl: 'Noem een sprookje', en: 'Name a fairy tale', a: `
      Roodkapje|Little Red Riding Hood; Sneeuwwitje|Snow White|Sneeuwwitje en de zeven dwergen; Assepoester|Cinderella; Doornroosje|Sleeping Beauty;
      Hans en Grietje|Hansel and Gretel; De drie biggetjes|The Three Little Pigs|Drie kleine biggetjes; Repelsteeltje|Rumpelstiltskin; Rapunzel;
      De kleine zeemeermin|The Little Mermaid|Zeemeermin; Belle en het beest|Beauty and the Beast|De schone en het beest; De prinses op de erwt|The Princess and the Pea;
      Het lelijke eendje|The Ugly Duckling; Klein Duimpje|Tom Thumb|Duimpje|Hop-o'-My-Thumb; De gelaarsde kat|Puss in Boots; De wolf en de zeven geitjes|The Wolf and the Seven Young Goats;
      Pinokkio|Pinocchio; Peter Pan; Goudlokje en de drie beren|Goldilocks and the Three Bears|Goudlokje; De nieuwe kleren van de keizer|The Emperor's New Clothes;
      Sjaak en de bonenstaak|Jack and the Beanstalk|Jaak en de bonenstaak; De Bremer stadsmuzikanten|Town Musicians of Bremen|Bremer stadsmuzikanten;
      Het meisje met de zwavelstokjes|The Little Match Girl; De rattenvanger van Hamelen|The Pied Piper of Hamelin; De Sneeuwkoningin|The Snow Queen;
      De kikkerkoning|The Frog Prince|De kikkerprins; Duimelijntje|Thumbelina; Aladdin|Aladdin|Aladdin en de wonderlamp; Ali Baba en de veertig rovers|Ali Baba and the Forty Thieves|Ali Baba;
      Sinbad de zeeman|Sinbad the Sailor|Sinbad; Blauwbaard|Bluebeard; Tafeltje dek je|The Wishing Table; Vrouw Holle|Mother Holle|Frau Holle;
      De standvastige tinnen soldaat|The Steadfast Tin Soldier|Tinnen soldaatje; De nachtegaal|The Nightingale; De twaalf dansende prinsessen|The Twelve Dancing Princesses;
      Sneeuwwitje en Rozerood|Snow-White and Rose-Red; De visser en zijn vrouw|The Fisherman and His Wife;
      De zes zwanen|The Six Swans; De wilde zwanen|The Wild Swans; De gouden gans|The Golden Goose; De koning van de gouden berg|The King of the Golden Mountain;
      Klein Zaches|Little Zaches; Baba Jaga|Baba Yaga; De vuurvogel|The Firebird; Vasilisa de schone|Vasilisa the Beautiful;
      Hans in geluk|Hans in Luck; Het dappere snijdertje|The Valiant Little Tailor; De drie wensen|The Three Wishes; Raponsje|Rapunzel (2)` },

    { id: 'cartoons', lvl: 1, nl: 'Noem een tekenfilmfiguur', en: 'Name a cartoon character', a: `
      Mickey Mouse|Mickey Mouse|Mickey; Donald Duck|Donald Duck|Donald; Bugs Bunny; Homer Simpson|Homer Simpson|Homer; SpongeBob|SpongeBob|SpongeBob SquarePants;
      Tom en Jerry|Tom and Jerry|Tom|Jerry; Pikachu; Shrek; Goofy; Minnie Mouse|Minnie; Scooby-Doo|Scooby Doo; Bart Simpson|Bart; Patrick Ster|Patrick Star|Patrick;
      Winnie de Poeh|Winnie the Pooh|Poeh; Pluto; Dora|Dora the Explorer; Peppa Pig|Peppa; Woody; Buzz Lightyear|Buzz; Nemo; Elsa; Olaf; Simba; Garfield;
      Snoopy; Charlie Brown; Popeye; Tweety; Daffy Duck; Road Runner|Roadrunner; Wile E. Coyote|Coyote; Speedy Gonzales; Porky Pig; Pink Panther|Roze Panter;
      Fred Flintstone|Fred Flintstone|Flintstones; Smurf|Smurfen|Smurfs|Grote Smurf|Papa Smurf; Gargamel; Kuifje|Tintin; Bobbie|Snowy; Asterix; Obelix;
      Lucky Luke; Suske|Suske en Wiske; Wiske; Lambik; Jommeke; Nero; Kiekeboe; Marsupilami; Guust Flater|Gaston Lagaffe; Dumbo; Pinokkio|Pinocchio;
      Stitch|Lilo en Stitch; Aladdin; Genie|Geest; Ariel; Mulan; Moana|Vaiana; Rapunzel; Hercules; Tarzan; Belle; Assepoester|Cinderella; Sneeuwwitje|Snow White;
      Sully; Mike Wazowski|Mike; Lightning McQueen|Bliksem McQueen; Ratatouille|Remy; Wall-E; Marge Simpson|Marge; Lisa Simpson|Lisa; Maggie Simpson|Maggie;
      Stewie Griffin|Stewie; Peter Griffin; Rick|Rick Sanchez; Morty; Cartman|Eric Cartman; Kenny; Bender; Finn de mens|Finn the Human; Jake de hond|Jake the Dog;
      Ben 10; Dexter; Johnny Bravo; Courage|Courage the Cowardly Dog; Ed, Edd en Eddy|Ed, Edd n Eddy; Phineas; Ferb; Perry het vogelbekdier|Perry the Platypus;
      Gumball; Steven Universe; Avatar Aang|Aang; Naruto; Goku; Doraemon; Hello Kitty; Totoro; Maya de Bij|Maya the Bee;
      Bobo; Paddington; Bob de Bouwer|Bob the Builder; Thomas de stoomlocomotief|Thomas the Tank Engine; Teletubbies|Tinky Winky; Barbapapa; Nijntje|Miffy;
      Calimero; Pingu; Woody Woodpecker; Betty Boop; Felix de Kat|Felix the Cat; Casper; Richie Rich; Taz|Tasmanian Devil; Sylvester;
      Marvin de Marsmannetje|Marvin the Martian; Yosemite Sam; Elmer Fudd; Foghorn Leghorn; Pepé Le Pew|Pepe Le Pew; Droopy; Jessica Rabbit; Roger Rabbit` },

    { id: 'fantasy-creatures', lvl: 1, nl: 'Noem een fabeldier of fantasiewezen', en: 'Name a mythical creature', a: `
      Draak|Dragon; Eenhoorn|Unicorn; Zeemeermin|Mermaid; Vampier|Vampire; Weerwolf|Werewolf; Elf|Elf; Fee|Fairy; Trol|Troll; Kabouter|Gnome|Dwerg|Dwarf;
      Heks|Witch; Spook|Ghost; Zombie; Reus|Giant; Feniks|Phoenix; Pegasus; Griffioen|Griffin|Gryphon; Centaur|Centaur|Kentaur; Minotaurus|Minotaur;
      Cycloop|Cyclops; Yeti|Yeti|Verschrikkelijke sneeuwman|Abominable Snowman; Bigfoot|Bigfoot|Sasquatch; Monster van Loch Ness|Loch Ness Monster|Nessie;
      Goblin; Ork|Orc; Hydra; Medusa; Sfinx|Sphinx; Kraken; Basilisk; Chimera|Chimaera; Sater|Satyr|Faun; Nimf|Nymph; Leprechaun;
      Banshee; Golem; Djinn|Genie|Geest uit de lamp; Hobbit; Ent; Dementor; Hippogrief|Hippogriff; Mantichora|Manticore; Wyvern; Kerberos|Cerberus;
      Sirene|Siren; Harpij|Harpy; Gorgo|Gorgon; Titaan|Titan; Valkyrie|Walkure|Walkyrie; Fenrir; Jörmungandr|Jormungandr|Midgaardslang; Sleipnir;
      Kitsune; Tengu; Kappa; Oni; Qilin|Kirin; Chupacabra; Wendigo; Thunderbird|Donder vogel; Bunyip; Mothman; Jackalope;
      Kobold; Nisse|Tomte; Huldra; Selkie; Kelpie; Lamia; Ghoul; Succubus; Incubus; Imp|Duiveltje; Gargoyle|Waterspuwer; Salamander (vuur)|Fire salamander (myth);
      Roc; Simurgh; Garuda; Naga; Rakshasa; Yokai; Baba Jaga|Baba Yaga; Kikimora; Rusalka; Domovoj|Domovoi; Lindworm; Tatzelwurm; Krampus; Aswang; Tikbalang;
      Witte Wieven|Witte wieven; Lange Wapper; Kludde; Nekker; Ossaert` },

    { id: 'instruments-all', lvl: 1, nl: 'Noem een muziekinstrument', en: 'Name a musical instrument', a: `
      Gitaar|Guitar; Piano; Drum|Drums|Drumstel|Trommel; Viool|Violin; Fluit|Flute|Dwarsfluit; Trompet|Trumpet; Saxofoon|Saxophone|Sax;
      Basgitaar|Bass guitar|Bas; Elektrische gitaar|Electric guitar; Keyboard|Keyboard|Synthesizer; Cello; Klarinet|Clarinet; Harp; Blokfluit|Recorder;
      Accordeon|Accordion; Trombone|Trombone|Schuiftrompet; Hobo|Oboe; Contrabas|Double bass; Altviool|Viola; Tuba; Hoorn|French horn|Hoorn;
      Fagot|Bassoon; Xylofoon|Xylophone; Triangel|Triangle; Tamboerijn|Tambourine; Mondharmonica|Harmonica; Ukelele|Ukulele; Banjo; Mandoline|Mandolin;
      Orgel|Organ|Kerkorgel; Doedelzak|Bagpipes; Panfluit|Pan flute|Panfluit; Didgeridoo; Djembé|Djembe; Bongo|Bongos; Cajón|Cajon; Marimba; Vibrafoon|Vibraphone;
      Klokkenspel|Glockenspiel; Pauken|Timpani|Pauk; Bekken|Cymbals; Gong; Castagnetten|Castanets; Maracas; Steeldrum|Steel drum|Steelpan; Sitar; Tabla;
      Koto; Shamisen; Erhu; Balalaika; Bouzouki; Oud|Ud; Luit|Lute; Citer|Zither; Lier|Lyre; Klavecimbel|Harpsichord; Theremin; Kazoo; Ocarina;
      Melodica; Concertina; Bandoneon; Harmonium; Celesta; Euphonium; Kornet|Cornet; Bugel|Flugelhorn; Piccolo|Piccolo|Piccolofluit; Sousafoon|Sousaphone;
      Hakkebord|Hammered dulcimer|Dulcimer; Draailier|Hurdy-gurdy; Gamelan; Kalimba|Duimpiano|Mbira; Mondharp|Jaw harp|Jew's harp; Hang|Handpan|Hang drum;
      Tamtam; Woodblock; Koebel|Cowbell; Washboard|Wasbord; Glasharmonica|Glass harmonica; Alpenhoorn|Alphorn; Sjofar|Shofar; Duduk; Zurna; Shakuhachi;
      Pipa; Guzheng; Kora; Ngoni; Charango; Cuatro; Berimbau; Talking drum|Sprekende trom; Spinet; Clavichord; Ondes Martenot; Mellotron` }
  ]);

  /* ── Sport ───────────────────────────────────────────────── */
  B.addQuestions('sport', [
    { id: 'water-sports', lvl: 1, nl: 'Noem een sport die je in of op het water doet', en: 'Name a sport you do in or on the water', a: `
      Zwemmen|Swimming; Surfen|Surfing; Waterpolo|Water polo; Zeilen|Sailing; Duiken|Diving|Scuba diving; Kajakken|Kayaking|Kajak; Roeien|Rowing;
      Kanoën|Canoeing|Kano; Waterskiën|Water skiing|Waterski; Windsurfen|Windsurfing; Kitesurfen|Kitesurfing|Kiteboarding; Suppen|Stand-up paddleboarding|SUP|Supboard;
      Schoonspringen|Diving (springboard)|Springen; Synchroonzwemmen|Artistic swimming|Synchronised swimming|Kunstzwemmen; Wakeboarden|Wakeboarding;
      Raften|Rafting|White-water rafting|Wildwatervaren; Snorkelen|Snorkelling|Snorkeling; Jetskiën|Jet skiing|Jetski; Bodyboarden|Bodyboarding;
      Vinzwemmen|Finswimming; Onderwaterrugby|Underwater rugby; Onderwaterhockey|Underwater hockey; Kanopolo|Canoe polo; Drakenbootvaren|Dragon boat racing;
      Open water zwemmen|Open water swimming|Marathonzwemmen; Triatlon|Triathlon; Vrijduiken|Freediving|Apneu; Klifduiken|Cliff diving; Motorbootracen|Powerboat racing;
      Parasailen|Parasailing; Flyboarden|Flyboarding; Kneeboarden|Kneeboarding; Skimboarden|Skimboarding; Hydrofoil|Foiling|Wingfoilen|Wing foiling; Canyoning; Ijszwemmen|Ice swimming|Winterzwemmen; Reddend zwemmen|Lifesaving sport; Aquajogging|Aqua jogging|Aquagym|Aqua aerobics;
      Vissen|Fishing|Sportvissen; Speervissen|Spearfishing; Kanoslalom|Canoe slalom; Coastal rowing|Kustroeien; Waterbasketbal|Water basketball` },

    { id: 'winter-sports', lvl: 1, nl: 'Noem een wintersport', en: 'Name a winter sport', a: `
      Skiën|Skiing; Snowboarden|Snowboarding; Schaatsen|Ice skating|Skating; IJshockey|Ice hockey|Hockey op ijs; Kunstschaatsen|Figure skating;
      Langlaufen|Cross-country skiing|Langlauf; Schansspringen|Ski jumping; Bobsleeën|Bobsleigh|Bobslee; Rodelen|Luge|Slee; Curling; Biatlon|Biathlon;
      Shorttrack|Short track|Short track speed skating; Skeleton; Freestyle skiën|Freestyle skiing; Noordse combinatie|Nordic combined; Alpineskiën|Alpine skiing|Afdaling|Downhill;
      Slalom; Reuzenslalom|Giant slalom; Super-G; Moguls|Bultskiën; Skicross|Ski cross; Snowboardcross; Halfpipe; Slopestyle; Big air; Langebaanschaatsen|Long track speed skating|Hardrijden;
      Sledehondenrennen|Sled dog racing|Hondensleeën; Sneeuwscooter|Snowmobiling|Sneeuwscooterrijden; Toerskiën|Ski touring|Ski mountaineering|Skialpinisme;
      Telemark; IJsklimmen|Ice climbing; Sneeuwschoenwandelen|Snowshoeing|Sneeuwschoenen; IJsvissen|Ice fishing; Bandy; Kiteskiën|Snowkiting; Skibob;
      Ijsspeedway|Ice speedway; IJszeilen|Ice yachting|Ice sailing; Eisstockschießen|Ice stock sport; Ski-orienteering|Ski-oriëntatieloop; Ijsdansen|Ice dancing;
      Paarrijden|Pair skating; Elfstedentocht|Elfstedentocht; Monoski|Monoskiing; Snowtubing|Bandjesglijden; Sledgehockey|Para ice hockey` },

    { id: 'racket-sports', lvl: 2, nl: 'Noem een sport die je met een racket, bat of slagplank speelt', en: 'Name a sport played with a racket, bat or paddle', a: `
      Tennis; Badminton; Tafeltennis|Table tennis|Pingpong|Ping-pong; Padel; Squash; Honkbal|Baseball; Cricket; Softbal|Softball; Hockey|Field hockey;
      IJshockey|Ice hockey; Golf; Pickleball; Racquetball; Beachtennis|Beach tennis; Strandtennis|Matkot|Frescobol; Speedminton|Crossminton;
      Lacrosse; Hurling; Polo; Pelota|Basque pelota|Jai alai|Pelota; Rounders|Slagbal; Platform tennis|Paddle tennis;
      Real tennis|Kaatstennis|Jeu de paume; Rackets; Floorball|Unihockey|Floorball; Croquet;
      Biljart|Billiards|Snooker|Pool; Bandy; Shinty; Camogie; Teqball; Tamburello; Stoolball; Pesäpallo|Finnish baseball; Lapta; Vigoro` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
