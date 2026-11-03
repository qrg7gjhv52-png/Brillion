/* ─────────────────────────────────────────────────────────────
   Brillion · alledaagse open vragen (deel 3: dingen, plekken, wereld)
   Elk antwoord: NL|EN|andere namen; van vaak genoemd naar zeldzaam.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;

  B.addQuestions('life', [
    { id: 'smelly', lvl: 1, nl: 'Noem iets dat stinkt', en: 'Name something that smells bad', a: `
      Sokken|Socks|Zweetsokken|Smelly socks; Scheet|Fart|Winden|Wind; Poep|Poo|Kak|Hondenpoep|Dog poo; Vuilnisbak|Bin|Vuilnis|Rubbish|Afval|Garbage; Stinkdier|Skunk;
      Toilet|Toilet|Wc|WC; Zweet|Sweat|Oksels|Armpits; Kaas|Cheese|Stinkkaas|Smelly cheese; Rotte eieren|Rotten eggs|Rot ei|Rotten egg; Riool|Sewer|Rioolwater|Sewage;
      Mest|Manure|Koeienmest|Cow dung; Schoenen|Shoes|Voeten|Feet|Zweetvoeten|Smelly feet; Vis|Fish|Rotte vis|Rotten fish; Knoflook|Garlic; Ui|Onion|Uien;
      Sigaret|Cigarette|Sigarettenrook|Cigarette smoke|Rook|Smoke; Slechte adem|Bad breath|Mondgeur; Natte hond|Wet dog|Hond|Dog; Kattenbak|Litter box|Kattenpis|Cat pee;
      Luier|Nappy|Diaper|Vuile luier|Dirty nappy; Uitlaatgassen|Exhaust fumes|Uitlaat; Benzine|Petrol|Gasoline; Zure melk|Sour milk|Bedorven melk; Spruitjes|Brussels sprouts;
      Bloemkool|Cauliflower|Gekookte bloemkool; Durian; Surströmming; Kip die bedorven is|Rotten meat|Rot vlees|Bedorven vlees; Varkensstal|Pigsty|Varken|Pig;
      Kippenhok|Chicken coop; Boerderij|Farm; Paardenstal|Stable; Sportzak|Gym bag; Wasgoed|Dirty laundry|Vuile was;
      Moeras|Swamp|Moerasgas; Zwavel|Sulphur|Sulfur; Ammoniak|Ammonia; Azijn|Vinegar; Lijk|Corpse|Dood dier|Dead animal; Kadaver|Carcass;
      Schimmel|Mould|Mold|Beschimmeld brood|Mouldy bread; Natte handdoek|Damp towel|Muffe handdoek; Oude koelkast|Old fridge; Bier van gisteren|Stale beer; Haarlak|Hairspray;
      Nagellak|Nail polish|Nagellakremover|Nail polish remover; Verf|Paint|Verfgeur; Teer|Tar; Lijm|Glue; Bloem die stinkt|Corpse flower|Reuzenaronskelk|Titan arum; Wierook|Incense` },

    { id: 'nice-smell', lvl: 1, nl: 'Noem iets dat lekker ruikt', en: 'Name something that smells nice', a: `
      Bloemen|Flowers|Bloem|Flower; Parfum|Perfume|Eau de toilette; Vers brood|Fresh bread|Brood|Bread; Koffie|Coffee; Rozen|Roses|Roos|Rose; Lavendel|Lavender;
      Taart|Cake|Koekjes bakken|Baking cookies; Vanille|Vanilla; Chocolade|Chocolate; Kaarsen|Scented candles|Geurkaars|Scented candle; Zeep|Soap; Shampoo;
      Vers gemaaid gras|Freshly cut grass|Gras|Grass; Regen|Rain|Geur na de regen|Petrichor; Kaneel|Cinnamon; Popcorn; Pizza; Frietjes|Fries|Friet; Barbecue|Barbecue|BBQ;
      Wasgoed|Clean laundry|Propere was|Wasverzachter|Fabric softener; Baby|Baby|Babygeur; Aardbeien|Strawberries|Aardbei; Citroen|Lemon; Sinaasappel|Orange|Appelsien;
      Munt|Mint; Jasmijn|Jasmine; Kerstboom|Christmas tree|Dennen|Pine; Wafels|Waffles|Wafel; Pannenkoeken|Pancakes|Pannenkoek; Appeltaart|Apple pie;
      Deodorant|Deodorant|Deo; Aftershave; Bodylotion|Body lotion; Kokosnoot|Coconut|Zonnecrème|Sun cream; Zee|Sea|Zeelucht|Sea air; Bos|Forest|Boslucht;
      Wierook|Incense; Sandelhout|Sandalwood; Basilicum|Basil; Rozemarijn|Rosemary; Knoflook in de pan|Garlic frying; Bacon|Bacon|Spek; Gebakken uien|Fried onions;
      Nieuwe auto|New car smell|Nieuwe-autogeur; Nieuw boek|New book|Boeken|Books|Oud papier; Leer|Leather; Houtvuur|Wood fire|Kampvuur|Campfire|Haardvuur; Hooi|Hay;
      Seringen|Lilac|Sering; Lelie|Lily|Lelies; Kamperfoelie|Honeysuckle; Oranjebloesem|Orange blossom; Speculoos|Speculoos|Speculaas; Glühwein|Mulled wine` },

    { id: 'soft', lvl: 1, nl: 'Noem iets dat zacht is', en: 'Name something that is soft', a: `
      Kussen|Pillow|Kussens; Knuffel|Cuddly toy|Teddybeer|Teddy bear; Dekbed|Duvet|Deken|Blanket; Kat|Cat|Kitten|Poes; Watten|Cotton wool|Watje|Cotton ball;
      Wol|Wool; Veren|Feathers|Veer|Feather|Donsveer|Down; Konijn|Rabbit|Konijntje|Bunny; Bed|Bed|Matras|Mattress; Marshmallow|Marshmallow|Spekje; Zetel|Sofa|Couch|Bank;
      Handdoek|Towel; Wolk|Cloud; Sneeuw|Snow|Verse sneeuw; Badjas|Bathrobe|Dressing gown; Pyjama|Pyjamas|Pajamas; Fleece|Fleece|Fleecetrui; Trui|Jumper|Sweater;
      Sokken|Socks|Pantoffels|Slippers; Puppy|Puppy|Hond|Dog; Haar|Hair; Babyhuid|Baby's skin|Huid|Skin; Zijde|Silk; Fluweel|Velvet; Kasjmier|Cashmere;
      Brood|Bread|Zacht broodje|Soft roll; Boter|Butter; Ijs|Ice cream; Pudding|Pudding|Vla|Custard; Banaan|Banana|Rijpe banaan; Avocado; Perzik|Peach|Perziken;
      Kiwi; Tofu; Gelatine|Jelly|Gelei|Jell-O; Mousse; Klei|Clay|Plasticine|Play-Doh|Kinetisch zand|Kinetic sand; Slijm|Slime; Spons|Sponge; Schuim|Foam|Schuimrubber;
      Zand|Sand|Strand|Beach; Mos|Moss; Gras|Grass; Chinchilla; Hamster; Lam|Lamb|Schaap|Sheep; Alpaca|Alpaca|Lama; Pluizenbol|Pompom|Pompon;
      Suikerspin|Candyfloss|Cotton candy; Stressbal|Stress ball; Airbag; Bubbeltjesplastic|Bubble wrap; Oorwarmers|Earmuffs; Zachte kaas|Soft cheese|Brie|Camembert` },

    { id: 'sharp', lvl: 1, nl: 'Noem iets dat scherp of puntig is', en: 'Name something sharp or pointy', a: `
      Mes|Knife|Messen|Knives; Schaar|Scissors; Naald|Needle|Naainaald|Sewing needle; Zwaard|Sword; Speld|Pin|Spelden|Pins|Punaise|Drawing pin|Thumbtack;
      Spijker|Nail|Spijkers|Nails; Cactus|Cactus|Cactusnaalden|Cactus spines; Roos|Rose|Doorn|Thorn|Doornen|Thorns; Potlood|Pencil|Geslepen potlood|Sharpened pencil;
      Tanden|Teeth|Tand|Tooth|Haaientanden|Shark teeth; Scheermes|Razor|Scheermesje|Razor blade; Glas|Broken glass|Glasscherf|Shard of glass|Scherven;
      Bijl|Axe; Zaag|Saw; Vork|Fork; Pijl|Arrow; Speer|Spear; Dolk|Dagger; Egel|Hedgehog|Stekels|Spines; Stekelvarken|Porcupine; Klauwen|Claws|Klauw|Claw;
      Nagels|Fingernails|Nagel|Fingernail; Hoorn|Horn|Hoorns|Horns|Neushoornhoorn|Rhino horn; Slagtanden|Tusks|Slagtand|Tusk; Bijensteek|Bee sting|Angel|Sting;
      Spuit|Syringe|Injectienaald; Prikkeldraad|Barbed wire; Schaats|Ice skate|Schaatsen|Skates; Kurkentrekker|Corkscrew; Passer|Compass|Pair of compasses;
      IJspegel|Icicle; Scalpel; Breinaald|Knitting needle|Breinaalden; Prikker|Cocktail stick|Tandenstoker|Toothpick; Barbecuespies|Skewer|Spies;
      Hooivork|Pitchfork; Zeis|Scythe; Machete; Katana; Bajonet|Bayonet; Harpoen|Harpoon; Vishaak|Fish hook|Haak|Hook; Top van een berg|Mountain peak|Bergtop;
      Kerktoren|Church spire|Torenspits|Spire; Eiffeltoren|Eiffel Tower; Hulst|Holly|Hulstblad|Holly leaf; Distel|Thistle; Brandnetel|Stinging nettle|Netel; Zee-egel|Sea urchin;
      Schelp|Sharp shell|Schelpen|Shells; Stalactiet|Stalactite|Druipsteen; Kristal|Crystal; Kaasschaaf|Cheese slicer; Dunschiller|Peeler|Aardappelschiller|Potato peeler` },

    { id: 'square', lvl: 2, nl: 'Noem iets dat vierkant is', en: 'Name something that is square', a: `
      Dobbelsteen|Die|Dice|Dobbelstenen; Doos|Box|Kartonnen doos|Cardboard box; Raam|Window; Tegel|Tile|Tegels|Tiles; Schaakbord|Chessboard|Dambord|Draughts board;
      Rubik's kubus|Rubik's Cube|Rubiks kubus; Post-it|Post-it|Memoblaadje|Sticky note; Pizzadoos|Pizza box; Kussen|Cushion|Sierkussen; Sandwich|Sandwich|Boterham|Toast|Tosti;
      Wafel|Waffle; Servet|Napkin|Servetje; Zakdoek|Handkerchief; Foto|Photo|Polaroid|Instagramfoto; Kaas|Cheese slice|Plakje kaas; Ijsblokje|Ice cube|Ijsblokjes;
      Lego|Lego|Legoblokje|Lego brick; Klok|Square clock|Wandklok; Schilderij|Painting|Kader|Picture frame; Tafel|Square table|Tafels;
      Kruiswoordpuzzel|Crossword|Sudoku; Qr-code|QR code; Microchip|Microchip|Chip; Diskette|Floppy disk; Cd-hoesje|CD case|Cd-doosje; Schaakveld|Square on a chessboard|Vakje;
      Ruitjespapier|Squared paper|Graph paper|Ruitjesschrift; Plein|Square|Stadsplein|Town square|Marktplein|Market square; Ijsblok|Block of ice;
      Hooibaal|Hay bale|Strobaal|Straw bale; Suikerklontje|Sugar cube|Klontje; Bouillonblokje|Stock cube|Bouillon cube; Chocoladeblokje|Chocolate square|Blokje chocolade|Chocolade;
      Brownie|Brownie|Brownies; Ravioli; Zeep|Bar of soap|Zeepje; Vloermat|Mat|Deurmat|Doormat; Tapijttegel|Carpet tile; Sjaal|Square scarf|Bandana; Vlag van Zwitserland|Swiss flag|Zwitserse vlag;
      Pixel|Pixel|Pixels; Minecraft|Minecraft|Minecraftblok; Tetrisblokje|Tetris block|Tetris; Kubus|Cube; Taartdoos|Cake box; Doos van een gsm|Phone box; Kartonnen verpakking|Carton|Melkpak|Milk carton` },

    { id: 'car-inside', lvl: 1, nl: 'Noem iets dat je in een auto vindt', en: 'Name something you find in a car', a: `
      Stuur|Steering wheel|Stuurwiel; Zetels|Seats|Stoel|Seat|Zitplaats; Gordel|Seat belt|Veiligheidsgordel; Radio|Radio|Autoradio|Car radio; Spiegel|Mirror|Achteruitkijkspiegel|Rear-view mirror;
      Pedalen|Pedals|Gaspedaal|Accelerator|Rem|Brake|Koppeling|Clutch; Versnellingspook|Gear stick|Gear lever|Pook; Handrem|Handbrake; Dashboard; Claxon|Horn|Toeter;
      Airbag|Airbag|Airbags; Navigatie|Sat nav|GPS|Gps; Kilometerteller|Speedometer|Snelheidsmeter; Ruitenwissers|Windscreen wipers|Wipers|Ruitenwisser; Handschoenenkastje|Glovebox|Glove compartment;
      Koffer|Boot|Trunk|Kofferbak; Reservewiel|Spare tyre|Spare tire|Reserveband; Gevarendriehoek|Warning triangle; Fluohesje|Hi-vis vest|Veiligheidshesje; Verbanddoos|First aid kit|EHBO-kit;
      Brandblusser|Fire extinguisher; Kinderstoeltje|Child seat|Autostoeltje|Car seat; Sleutel|Key|Autosleutel|Car key; Zonneklep|Sun visor; Bekerhouder|Cup holder;
      Gsm-houder|Phone holder; Oplader|Charger|Usb-lader|USB charger; Luchtverfrisser|Air freshener|Geurboompje|Little tree; Snoep|Sweets|Snoepjes; Kaart|Map|Wegenkaart|Road map;
      Zonnebril|Sunglasses; Paraplu|Umbrella; Ijskrabber|Ice scraper|Krabber; Parkeerschijf|Parking disc|Blauwe kaart; Papieren|Car documents|Boorddocumenten|Inschrijvingsbewijs|Registration;
      Rijbewijs|Driving licence; Kauwgom|Chewing gum; Flesje water|Bottle of water|Waterfles; Vuilniszakje|Bin bag|Afval|Rubbish; Hondenhaar|Dog hair|Hond|Dog;
      Krik|Jack|Autokrik|Car jack; Startkabels|Jump leads|Jumper cables; Asbak|Ashtray; Sigarettenaansteker|Cigarette lighter|12V-stopcontact; Raamhendel|Window winder|Raamknop|Window button;
      Hoofdsteun|Headrest; Armleuning|Armrest; Achterbank|Back seat; Kinderslot|Child lock; Dakraam|Sunroof|Zonnedak; Tankmeter|Fuel gauge|Benzinemeter; Toerenteller|Rev counter|Tachometer;
      Cruise control|Cruise control|Snelheidsbegrenzer; Achteruitrijcamera|Reversing camera|Parkeersensor|Parking sensor; Dashcam; Kofferbaknet|Cargo net; Hondenrek|Dog guard|Hondenbench` },

    { id: 'bike-parts', lvl: 2, nl: 'Noem een deel van een fiets', en: 'Name a part of a bicycle', a: `
      Wiel|Wheel|Wielen|Wheels; Zadel|Saddle|Seat; Stuur|Handlebars|Handlebar; Pedaal|Pedal|Pedalen|Pedals|Trapper; Ketting|Chain; Rem|Brake|Remmen|Brakes;
      Bel|Bell|Fietsbel; Band|Tyre|Tire|Banden|Fietsband; Licht|Light|Lamp|Fietslicht|Bike light|Koplamp|Headlight|Achterlicht|Rear light; Spaken|Spokes|Spaak|Spoke;
      Kader|Frame|Frame; Versnellingen|Gears|Versnelling|Gear; Bagagedrager|Pannier rack|Luggage rack|Rack; Spatbord|Mudguard|Fender|Spatborden; Fietsstandaard|Kickstand|Stand|Standaard;
      Reflectoren|Reflectors|Reflector|Kattenoog; Binnenband|Inner tube; Ventiel|Valve; Velg|Rim|Velgen; Naaf|Hub; Trapas|Bottom bracket; Crankarm|Crank|Cranks;
      Tandwiel|Sprocket|Kettingblad|Chainring|Cassette; Derailleur|Derailleur|Achterderailleur; Remkabel|Brake cable|Kabel|Cable; Remblokjes|Brake pads|Remblok;
      Schijfrem|Disc brake; Handvatten|Grips|Handvat|Grip; Zadelpen|Seatpost|Seat post; Voorvork|Fork|Vork; Balhoofd|Headset; Stuurpen|Stem;
      Kettingkast|Chain guard; Fietsslot|Bike lock|Slot|Lock; Fietstas|Pannier|Fietstassen|Saddlebag; Mandje|Basket|Fietsmand; Kinderzitje|Child seat|Fietsstoeltje;
      Dynamo; Batterij|Battery|Accu|E-bike battery; Motor|Motor|E-bike motor; Bidonhouder|Bottle cage|Bidon|Water bottle; Fietscomputer|Bike computer|Teller;
      Pomp|Pump|Fietspomp|Bike pump; Snelspanner|Quick release; Vering|Suspension|Voorvering; Steunwieltjes|Stabilisers|Training wheels|Zijwieltjes; Jasbeschermer|Skirt guard|Jassenbeschermer;
      Spaakreflector|Spoke reflector; Bandenlichter|Tyre lever; Kettingspanner|Chain tensioner; Stuurlint|Bar tape|Handlebar tape; Clickpedalen|Clipless pedals|Klikpedalen` },

    { id: 'pool', lvl: 2, nl: 'Noem iets dat je in een zwembad ziet', en: 'Name something you see at a swimming pool', a: `
      Water; Duikplank|Diving board|Springplank; Glijbaan|Water slide|Waterglijbaan; Redder|Lifeguard|Badmeester; Zwembroek|Swimming trunks|Badpak|Swimsuit|Bikini;
      Zwembandjes|Armbands|Water wings|Bandjes; Zwemband|Rubber ring|Swim ring|Opblaasband; Handdoek|Towel; Douche|Shower|Douches|Showers; Kleedhokje|Changing cubicle|Kleedkamer|Changing room;
      Kluisje|Locker|Lockers; Chloor|Chlorine; Zwembril|Goggles|Duikbril; Badmuts|Swimming cap|Swim cap; Teenslippers|Flip-flops|Slippers; Banen|Lanes|Zwembaan|Lane;
      Drijflijnen|Lane ropes|Lijnen; Trap|Ladder|Laddertje; Kinderbadje|Paddling pool|Kinderbad|Baby pool; Golfslagbad|Wave pool|Golven|Waves; Bubbelbad|Jacuzzi|Whirlpool|Hot tub;
      Sauna; Zwemplank|Kickboard|Float|Plankje; Pool noodle|Pool noodle|Zwemslang|Noodle; Kinderen|Children|Kids;
      Zwemles|Swimming lesson|Zwemleraar|Swimming teacher; Bal|Ball|Strandbal|Beach ball|Waterpolobal; Waterpolodoel|Water polo goal; Startblok|Starting block|Startblokken;
      Klok|Clock|Pace clock; Fluitje|Whistle; Bord "Niet lopen"|No running sign|Bordje|Sign; Reddingsboei|Lifebuoy|Reddingsring|Life ring; Pleisters|Plasters|Pleister|Plaster;
      Haar|Hair|Haren; Ligstoelen|Sun loungers|Ligstoel|Sun lounger; Parasol|Parasol|Parasols; Zonnecrème|Sun cream; Cafetaria|Café|Snackbar|Kiosk; Ijsjes|Ice creams|Ijs;
      Frietjes|Fries|Friet; Voetbad|Footbath|Voetenbad; Diepe gedeelte|Deep end|Diep; Ondiep gedeelte|Shallow end|Ondiep; Tegels|Tiles; Filter|Filter|Pomp|Pump;
      Duiken|Diving|Duiker|Diver; Bommetje|Cannonball|Bom; Synchroonzwemmen|Synchronised swimming|Artistic swimming; Aquagym|Aqua aerobics|Aquafit` },

    { id: 'camping', lvl: 1, nl: 'Noem iets dat je meeneemt om te kamperen', en: 'Name something you take camping', a: `
      Tent; Slaapzak|Sleeping bag; Luchtbed|Air mattress|Air bed|Matje|Sleeping mat|Slaapmat; Zaklamp|Torch|Flashlight|Hoofdlamp|Head torch; Kookvuurtje|Camping stove|Gasbrander|Gasvuurtje|Stove;
      Campingstoel|Camping chair|Klapstoel|Folding chair; Kussen|Pillow|Reiskussen; Lucifers|Matches|Aansteker|Lighter; Rugzak|Backpack|Rugtas; Water|Water|Waterfles|Water bottle|Jerrycan;
      Eten|Food|Blikvoer|Tinned food|Blikjes; Pannen|Pans|Pot|Pot|Kookpot|Billy can; Bestek|Cutlery|Bord|Plate|Borden; Zakmes|Pocket knife|Penknife|Zwitsers zakmes|Swiss Army knife;
      Muggenspray|Insect repellent|Muggenmiddel; Zonnecrème|Sun cream; Regenjas|Raincoat|Poncho; Wandelschoenen|Hiking boots; Kompas|Compass; Kaart|Map|Wandelkaart;
      Touw|Rope; Haringen|Tent pegs|Pegs|Tentharingen; Hamer|Mallet|Hamer voor haringen; Koelbox|Cool box|Cooler|Koeltas; Handdoek|Towel; Toiletpapier|Toilet paper|Wc-papier;
      Tandenborstel|Toothbrush; Kampvuur|Campfire|Brandhout|Firewood; Marshmallows|Marshmallows|Spekjes; Gitaar|Guitar; Kaartspel|Pack of cards|Kaarten|Cards; EHBO-kit|First aid kit|Pleisters|Plasters;
      Lantaarn|Lantern|Campinglamp|Camping lamp; Powerbank|Power bank; Batterijen|Batteries; Hangmat|Hammock; Tafel|Camping table|Campingtafel|Klaptafel; Grondzeil|Groundsheet|Zeil|Tarp;
      Waterfilter|Water filter; Ductape|Duct tape|Tape; Schep|Trowel|Schepje|Spade; Bijl|Axe|Hakbijl|Hatchet; Koffie|Coffee|Oploskoffie;
      Muts|Woolly hat|Beanie; Trui|Fleece|Warme trui; Vuilniszakken|Bin bags|Afvalzak; Wasknijpers|Clothes pegs; Waslijn|Washing line|Drooglijn; Verrekijker|Binoculars; Fototoestel|Camera;
      Caravan|Caravan|Camper|Camper van|Mobilhome|Motorhome; Fiets|Bike; Hond|Dog` },

    { id: 'airport', lvl: 2, nl: 'Noem iets dat je op een luchthaven ziet', en: 'Name something you see at an airport', a: `
      Vliegtuig|Plane|Aeroplane|Airplane|Vliegtuigen|Planes; Koffers|Suitcases|Koffer|Suitcase|Bagage|Luggage; Paspoort|Passport|Paspoorten|Passports; Piloot|Pilot|Piloten|Pilots;
      Stewardess|Flight attendant|Steward|Cabin crew; Douane|Customs|Douanier; Paspoortcontrole|Passport control|Grenscontrole|Border control; Veiligheidscontrole|Security|Security check|Scanner;
      Incheckbalie|Check-in desk|Check-in|Inchecken; Gate|Gate|Gates|Boarding gate; Taxfree-winkel|Duty-free shop|Duty free|Taxfree; Vertrekbord|Departures board|Bord met vluchten|Flight board;
      Bagageband|Baggage carousel|Baggage reclaim|Bagagecarrousel; Startbaan|Runway|Landingsbaan; Controletoren|Control tower|Verkeerstoren; Wachtrij|Queue|Rij|Line;
      Instapkaart|Boarding pass|Boardingpass; Bagagekar|Luggage trolley|Trolley|Karretje; Lopende band|Travelator|Moving walkway|Rolpad; Roltrap|Escalator; Lift|Lift|Elevator;
      Restaurant|Restaurant|Fastfood|Café|Coffeeshop; Starbucks; Toiletten|Toilets|Wc|WC; Wachtzaal|Departure lounge|Lounge|Wachtruimte; Stoelen|Seats|Banken|Benches;
      Reizigers|Travellers|Passengers|Passagiers; Politie|Police|Agenten|Police officers; Snuffelhond|Sniffer dog|Speurhond|Drugshond; Metaaldetector|Metal detector|Detectiepoortje;
      Röntgenscanner|X-ray scanner|Scanner voor handbagage; Bakjes|Trays|Bakje|Tray; Vloeistoffen in een zakje|Liquids bag|Plastic zakje; Klok|Clock|Klokken|Clocks;
      Wisselkantoor|Bureau de change|Currency exchange|Wissel; Geldautomaat|Cash machine|ATM; Autoverhuur|Car hire|Car rental|Huurauto; Taxi|Taxi|Taxi's; Shuttlebus|Shuttle bus|Bus; Trein|Train|Station;
      Parking|Car park|Parkeergarage|Parking lot; Brandweer|Airport fire service|Brandweerwagen; Vrachtvliegtuig|Cargo plane; Helikopter|Helicopter; Privéjet|Private jet|Jet;
      Tankwagen|Fuel truck|Kerosine|Jet fuel; Pushback|Pushback tug|Trekker; Slurf|Jet bridge|Air bridge|Aviobrug; Vliegtuigtrap|Airstairs|Trap; Gevonden voorwerpen|Lost property|Lost and found;
      Gebedsruimte|Prayer room; Vertraging|Delay|Vertraagd|Delayed; Afgelast|Cancelled|Annulering` },

    { id: 'buttons', lvl: 2, nl: 'Noem iets met knoppen', en: 'Name something with buttons', a: `
      Afstandsbediening|Remote control|Remote; Toetsenbord|Keyboard; Rekenmachine|Calculator; Lift|Lift|Elevator; Hemd|Shirt|Overhemd|Blouse; Jas|Coat|Jasje|Jacket;
      Telefoon|Telephone|Gsm|Phone|Mobiele telefoon; Controller|Controller|Gamecontroller|Joystick; Microgolf|Microwave|Magnetron; Wasmachine|Washing machine; Computermuis|Mouse|Muis;
      Deurbel|Doorbell|Bel; Geldautomaat|Cash machine|ATM; Auto|Car|Dashboard; Radio; Televisie|Television|Tv; Fototoestel|Camera; Wekker|Alarm clock; Horloge|Watch;
      Piano|Piano|Digitale piano; Accordeon|Accordion; Saxofoon|Saxophone|Klarinet|Clarinet|Dwarsfluit|Flute; Trompet|Trumpet|Trompet; Spelconsole|Games console|PlayStation;
      Arcadekast|Arcade machine; Flipperkast|Pinball machine|Flipper; Drankautomaat|Vending machine|Snoepautomaat|Snack machine; Kaartjesautomaat|Ticket machine; Parkeerautomaat|Parking meter;
      Verkeerslicht voor voetgangers|Pedestrian crossing button|Drukknop|Push button; Bus|Bus|Stopknop|Stop button; Trein|Train|Deurknop; Vaatwasser|Dishwasher;
      Koffiemachine|Coffee machine; Oven; Kookplaat|Hob|Inductieplaat; Haardroger|Hairdryer; Blender|Blender|Mixer; Speelgoed|Toys|Speelgoed met knoppen; Babyfoon|Baby monitor;
      Walkietalkie|Walkie-talkie; Typemachine|Typewriter; Kassa|Till|Cash register; Betaalterminal|Card machine|Pinautomaat; Alarmsysteem|Alarm panel|Alarm; Kluis|Safe|Codeslot|Combination lock;
      Noodknop|Panic button|Alarmknop|Emergency button; Rode knop|Big red button; Gameboy|Game Boy|Nintendo; Mp3-speler|MP3 player|iPod; Zaklamp|Torch|Flashlight; Ventilator|Fan;
      Vest|Cardigan|Gilet; Broek|Trousers|Jeans; Pyjama|Pyjamas; Dekbedovertrek|Duvet cover; Kussensloop|Pillowcase; Teddybeer|Teddy bear|Knuffel; Cockpit|Cockpit|Vliegtuigcockpit` },

    { id: 'inflatable', lvl: 2, nl: 'Noem iets dat je kan opblazen', en: 'Name something you can blow up (inflate)', a: `
      Ballon|Balloon|Ballonnen|Balloons; Luchtbed|Air bed|Air mattress|Luchtmatras; Zwemband|Rubber ring|Swim ring|Opblaasband; Zwembandjes|Armbands|Water wings;
      Strandbal|Beach ball; Fietsband|Bike tyre|Band|Tyre|Tire; Voetbal|Football|Bal|Ball|Basketbal|Basketball; Springkasteel|Bouncy castle|Luchtkasteel; Opblaasboot|Inflatable boat|Rubberboot|Dinghy;
      Opblaaszwembad|Paddling pool|Inflatable pool|Opblaasbaar zwembad; Kauwgombel|Bubblegum bubble|Kauwgom|Bubblegum; Zeepbel|Soap bubble|Bellenblaas|Bubbles;
      Luchtballon|Hot-air balloon; Autoband|Car tyre; Opblaasbare flamingo|Inflatable flamingo|Flamingo; Opblaaspop|Blow-up doll; Opblaasbare zetel|Inflatable chair|Opblaasstoel;
      Reddingsvest|Life jacket|Zwemvest; Airbag|Airbag; Nekkussen|Neck pillow|Reiskussen; Kussen|Pillow|Opblaaskussen; Opblaaskano|Inflatable kayak|Kano|Canoe;
      Supplank|Paddleboard|SUP|Stand-up paddleboard; Glijbaan|Inflatable slide|Waterglijbaan; Tent|Inflatable tent|Opblaastent; Wangen|Cheeks|Je wangen|Your cheeks;
      Kogelvis|Pufferfish|Egelvis|Porcupinefish; Kikker|Frog|Kwaakblaas|Vocal sac; Longen|Lungs; Bloeddrukmeter|Blood pressure cuff|Manchet; Condoom|Condom;
      Handschoen|Rubber glove|Latex handschoen; Zak|Paper bag|Papieren zak|Plastic zak; Ballondier|Balloon animal|Ballonfiguur; Zeppelin; Doedelzak|Bagpipes;
      Kerstman op het dak|Inflatable Santa|Opblaasbare kerstman; Opblaasbare dinosaurus|Inflatable dinosaur costume|Dinopak; Sumo-pak|Sumo suit; Bumperbal|Bubble football|Bubble ball;
      Zitbal|Exercise ball|Gymbal|Fitnessbal|Swiss ball` },

    { id: 'morning', lvl: 1, nl: "Noem iets dat je 's ochtends doet", en: 'Name something you do in the morning', a: `
      Opstaan|Get up|Wakker worden|Wake up; Tanden poetsen|Brush teeth|Tandenpoetsen|Brushing teeth; Douchen|Shower|Een douche nemen|Have a shower; Ontbijten|Have breakfast|Ontbijt|Breakfast;
      Aankleden|Get dressed|Kleren aandoen; Koffie drinken|Drink coffee|Koffie|Coffee; Haren kammen|Comb hair|Kammen|Haar borstelen|Brush hair; Gsm checken|Check phone|Op je gsm kijken|Gsm;
      Wekker uitzetten|Turn off alarm|Snooze|Snoozen|Snooze button; Plassen|Pee|Naar het toilet gaan|Go to the toilet|Wc; Gezicht wassen|Wash face|Wassen|Wash;
      Bed opmaken|Make the bed; Naar school gaan|Go to school|School; Naar het werk gaan|Go to work|Werken|Work; Boterhammen maken|Make sandwiches|Lunch maken|Make lunch;
      Ontbijt maken|Make breakfast; Thee drinken|Drink tea|Thee|Tea; Sporten|Exercise|Workout|Fitness|Gym; Joggen|Jogging|Lopen|Running|Go for a run; Hond uitlaten|Walk the dog;
      Nieuws kijken|Watch the news|Nieuws lezen|Read the news|Krant lezen|Read the newspaper; Make-up aanbrengen|Put on make-up|Make-up; Scheren|Shave; Deo aandoen|Put on deodorant|Deo;
      Ontbijtgranen eten|Eat cereal|Cornflakes; Fruit eten|Eat fruit; Stretchen|Stretch|Rekken; Mediteren|Meditate|Meditatie|Meditation; Yoga; Bidden|Pray;
      Radio luisteren|Listen to the radio; Muziek luisteren|Listen to music; Mails lezen|Check emails|E-mail; Agenda bekijken|Check diary|Planning maken; Boekentas maken|Pack school bag|Tas maken;
      Fietsen|Cycle|Fiets; Bus nemen|Catch the bus|Trein nemen|Catch the train; Kinderen wakker maken|Wake the kids; Huisdieren eten geven|Feed the pets|Kat voeren|Feed the cat;
      Gordijnen opendoen|Open the curtains; Ramen openzetten|Open the windows|Verluchten; Weer checken|Check the weather|Weerbericht; Vitamines nemen|Take vitamins|Medicijnen nemen|Take medicine;
      Lenzen indoen|Put in contact lenses|Lenzen; Geeuwen|Yawn; Uitslapen|Sleep in|Lang slapen; Te laat komen|Being late|Haasten|Rushing; Smoothie maken|Make a smoothie|Smoothie` },

    { id: 'wedding', lvl: 2, nl: 'Noem iets dat je op een trouwfeest ziet', en: 'Name something you see at a wedding', a: `
      Bruid|Bride; Bruidegom|Groom|Bridegroom; Trouwjurk|Wedding dress|Bruidsjurk; Trouwringen|Wedding rings|Ring|Ringen|Rings; Bruidstaart|Wedding cake|Taart|Cake;
      Bloemen|Flowers|Bruidsboeket|Bridal bouquet|Boeket; Kus|Kiss|Bruidskus; Dansen|Dancing|Openingsdans|First dance; Champagne|Champagne|Cava|Prosecco; Gasten|Guests|Familie|Family;
      Fotograaf|Photographer|Foto's|Photos; Kostuum|Suit|Smoking|Tuxedo; Sluier|Veil; Getuigen|Witnesses|Getuige|Witness|Best man|Bruidsmeisje|Bridesmaid; Priester|Priest|Pastoor;
      Kerk|Church; Gemeentehuis|Town hall|Stadhuis|Registry office; Speech|Speech|Toespraak|Speeches; DJ|DJ|Band|Live band|Muziek|Music; Diner|Wedding dinner|Feestmaal|Banquet;
      Cadeaus|Presents|Cadeau|Gifts|Envelop|Envelope; Rijst gooien|Throwing rice|Rijst|Rice|Confetti; Trouwauto|Wedding car|Limousine|Oldtimer; Bruidsmeisjes|Bridesmaids;
      Bloemenmeisje|Flower girl; Ringdrager|Ring bearer; Boeket gooien|Bouquet toss; Kousenband|Garter; Huwelijksbelofte|Vows|Ja-woord|"Ja, ik wil"|I do; Ceremoniemeester|Master of ceremonies|MC;
      Tafelschikking|Seating plan; Kaarten|Wedding invitations|Uitnodiging|Invitation; Gastenboek|Guestbook; Photobooth|Photo booth|Fotohokje; Ballonnen|Balloons;
      Vuurwerk|Fireworks; Sterretjes|Sparklers; Duiven|Doves|Witte duiven|White doves; Rozenblaadjes|Rose petals; Tranen|Tears|Huilen|Crying; Oom die te veel drinkt|Drunk uncle|Dronken gasten;
      Huwelijksreis|Honeymoon; Bruiloftstaart aansnijden|Cutting the cake; Ambtenaar|Registrar|Burgemeester|Mayor|Schepen; Trouwboekje|Marriage certificate|Huwelijksakte` },

    { id: 'festival', lvl: 2, nl: 'Noem iets dat je op een muziekfestival ziet', en: 'Name something you see at a music festival', a: `
      Podium|Stage|Hoofdpodium|Main stage; Muziek|Music; Bands|Bands|Band|Artiest|Artist|Artiesten; Mensen|People|Publiek|Crowd; Tent|Tent|Tenten|Tents; Camping|Campsite|Festivalcamping;
      Bier|Beer|Pintjes|Pint; Dixi|Portaloo|Portable toilet|Dixies|Wc|Toilets; Modder|Mud; Polsbandje|Wristband|Festivalbandje; Eetkraampjes|Food stalls|Foodtrucks|Food trucks;
      DJ|DJ|Dj's; Lichtshow|Light show|Lichten|Lights; Vuurwerk|Fireworks|Pyro|Pyrotechniek; Confetti|Confetti|Confettikanon|Confetti cannon; Rookmachine|Smoke machine|Rook|Smoke;
      Security|Security|Bewaking|Bewakers; Ehbo|First aid|EHBO-post|Rode Kruis|Red Cross; Muntjes|Tokens|Bonnetjes|Drink tokens; Merchandise|Merch|T-shirts|Festival T-shirt;
      Regenponcho|Rain poncho|Poncho; Laarzen|Wellies|Rubber boots|Regenlaarzen; Zonnebril|Sunglasses; Glitter|Glitter|Schmink|Face paint; Bloemenkrans|Flower crown;
      Moshpit|Mosh pit; Crowdsurfen|Crowd surfing|Crowdsurfer; Op de schouders|On someone's shoulders|Schouders; Vlaggen|Flags|Vlag|Flag; Totempaal|Totem|Festivaltotem;
      Grote schermen|Big screens|Scherm|Screen; Luidsprekers|Speakers|Boxen|Sound system; Microfoon|Microphone|Micro; Gitaar|Guitar; Drumstel|Drum kit|Drums; Zanger|Singer|Zangeres;
      Fotografen|Photographers; Cameraman|Cameraman|Camera's; Backstage; Vip-zone|VIP area|VIP; Reuzenrad|Ferris wheel; Hangmatten|Hammocks; Strobalen|Hay bales|Strobaal; Waterpunt|Water point|Watertappunt; Oplaadpunt|Charging station|Gsm opladen; Lockers|Lockers|Kluisjes;
      Pendelbus|Shuttle bus|Festivalbus; Fiets|Bike|Fietsenparking; Vergeten tent|Abandoned tent; Bubbels|Bubbles|Bellenblazer` },

    { id: 'university', lvl: 2, nl: 'Noem een studie die je aan de universiteit kan volgen', en: 'Name a subject you can study at university', a: `
      Geneeskunde|Medicine; Rechten|Law|Rechtsgeleerdheid; Psychologie|Psychology; Economie|Economics|Toegepaste economie|Applied economics; Handelsingenieur|Business engineering|Business Engineering;
      Ingenieur|Engineering|Burgerlijk ingenieur|Civil engineering|Ingenieurswetenschappen; Informatica|Computer science|Computerwetenschappen; Biologie|Biology; Chemie|Chemistry|Scheikunde;
      Fysica|Physics|Natuurkunde; Wiskunde|Mathematics|Maths|Math; Geschiedenis|History; Architectuur|Architecture; Farmacie|Pharmacy|Farmaceutische wetenschappen;
      Tandheelkunde|Dentistry; Diergeneeskunde|Veterinary medicine|Veterinary science; Bedrijfskunde|Business administration|Business; Communicatiewetenschappen|Communication studies|Communicatie;
      Taal- en letterkunde|Languages and literature|Letteren|Literature|Taalkunde; Filosofie|Philosophy|Wijsbegeerte; Sociologie|Sociology; Politicologie|Political science|Politieke wetenschappen;
      Criminologie|Criminology; Pedagogie|Education|Pedagogische wetenschappen|Onderwijskunde; Kunstgeschiedenis|Art history; Archeologie|Archaeology; Geografie|Geography|Aardrijkskunde;
      Geologie|Geology; Sterrenkunde|Astronomy|Astrofysica|Astrophysics; Biomedische wetenschappen|Biomedical sciences; Biotechnologie|Biotechnology; Bio-ingenieur|Bioscience engineering;
      Verpleegkunde|Nursing; Kinesitherapie|Physiotherapy|Kine|Fysiotherapie; Logopedie|Speech therapy; Voedingswetenschappen|Nutrition|Diëtiek|Dietetics; Lichamelijke opvoeding|Sports science|Sportwetenschappen;
      Journalistiek|Journalism; Marketing; Handelswetenschappen|Business studies|Handel; Accountancy|Accountancy|Accounting; Fiscaliteit|Taxation; Bestuurskunde|Public administration;
      Theologie|Theology|Godgeleerdheid; Muziek|Music|Musicologie|Musicology; Film|Film studies|Filmwetenschappen; Theaterwetenschap|Theatre studies; Vertalen|Translation|Vertaalkunde|Tolken|Interpreting;
      Oosterse talen|Oriental studies|Sinologie|Chinese studies|Japanologie; Antropologie|Anthropology; Statistiek|Statistics; Data science|Data science|Datawetenschap; Artificiële intelligentie|Artificial intelligence|AI;
      Elektrotechniek|Electrical engineering; Werktuigbouwkunde|Mechanical engineering; Lucht- en ruimtevaarttechniek|Aerospace engineering; Industrieel ontwerpen|Industrial design|Productontwikkeling;
      Toegepaste informatica|Applied computer science; Milieuwetenschappen|Environmental science; Gezondheidswetenschappen|Health sciences; Revalidatiewetenschappen|Rehabilitation sciences; Egyptologie|Egyptology` },

    { id: 'apps', lvl: 1, nl: 'Noem een app op je gsm', en: 'Name an app on your phone', a: `
      WhatsApp|WhatsApp|Whatsapp; Instagram|Instagram|Insta; TikTok|TikTok|Tiktok; Snapchat|Snapchat|Snap; YouTube|YouTube|Youtube; Spotify; Facebook;
      Google Maps|Google Maps|Maps; Netflix; Gmail|Gmail|Mail|E-mail; Camera|Camera|Camera-app; Rekenmachine|Calculator; Klok|Clock|Wekker|Alarm; Agenda|Calendar|Kalender;
      Foto's|Photos|Galerij|Gallery; Weer|Weather|Weer-app|Buienradar; Google|Google|Chrome|Safari|Browser; Messenger|Messenger|Facebook Messenger; Telegram; Discord;
      X|X|Twitter; Pinterest; BeReal; Reddit; Twitch; LinkedIn; Uber|Uber|Uber Eats; Deliveroo|Deliveroo|Takeaway|Just Eat; Bolt; Waze;
      Duolingo; ChatGPT|ChatGPT|Chat GPT; Claude; Shazam; SoundCloud; Apple Music; Deezer; Disney+|Disney Plus|Disney+; Prime Video|Amazon Prime|Prime Video; Streamz; VTM Go|VTM GO; VRT MAX|VRT Max;
      Bank-app|Banking app|Itsme|itsme|KBC|Belfius|ING; Payconiq; Tinder; Bumble; Strava; Fitbit|Fitbit|Gezondheid|Health; MyFitnessPal; Clash of Clans|Clash of Clans|Clash Royale;
      Candy Crush; Pokémon Go|Pokemon Go|Pokémon GO; Minecraft; Roblox; Fortnite; Subway Surfers; Among Us; Brawl Stars; Wordle; Notities|Notes|Notes-app; Herinneringen|Reminders;
      Zoom; Teams|Microsoft Teams; Outlook; Google Drive|Drive|Google Drive; Dropbox; Smartschool; Toledo|Toledo|Blackboard; Vinted; Marktplaats|2dehands|2ememain; Bol.com|Bol|Bol.com; Amazon;
      Booking.com|Booking|Booking.com; Airbnb; NMBS|SNCB|NS; De Lijn; Google Translate|Translate|Vertalen; Headspace; Flitsmeister; Signal; Threads; Canva` },

    { id: 'social-media', lvl: 2, nl: 'Noem een sociaal medium of chatapp', en: 'Name a social media platform or chat app', a: `
      Instagram|Instagram|Insta; TikTok|TikTok|Tiktok; Facebook; Snapchat|Snapchat|Snap; WhatsApp|WhatsApp|Whatsapp; YouTube|YouTube|Youtube; X|X|Twitter;
      Pinterest; LinkedIn; Reddit; Discord; Telegram; Twitch; BeReal; Messenger|Messenger|Facebook Messenger; Threads; Tumblr; Signal; WeChat; Viber;
      Skype; Tinder; Bumble; Quora; Mastodon; Bluesky; Vine; Myspace|MySpace|Myspace; Netlog; Hyves; Google+|Google Plus|Google+; Periscope; Clubhouse;
      Flickr; Weibo; Douyin; Kik; Line; KakaoTalk; VK|VK|VKontakte; Ask.fm|Ask.fm|Askfm; Musical.ly|Musical.ly|Musically; Friendster; Habbo|Habbo Hotel|Habbo;
      Steam|Steam; Strava; Goodreads; Letterboxd; Deviantart|DeviantArt|Deviantart; Behance; Dribbble; Medium; Substack; Patreon; OnlyFans; Kick; Rumble` },
  ]);

  B.addQuestions('sport', [
    { id: 'gym-exercises', lvl: 2, nl: 'Noem een oefening die je in de fitness doet', en: 'Name an exercise you do at the gym', a: `
      Squat|Squat|Squats|Kniebuiging; Bankdrukken|Bench press|Bench; Deadlift|Deadlift|Deadlifts|Doodtrekken; Push-ups|Push-ups|Opdrukken|Push-up|Pompen; Sit-ups|Sit-ups|Situps|Buikspieroefeningen|Crunches;
      Plank|Plank|Planken; Pull-ups|Pull-ups|Optrekken|Pullups|Chin-ups; Biceps curl|Bicep curl|Curls|Biceps curls; Lunges|Lunges|Uitvalspas|Lunge; Loopband|Treadmill|Lopen op de loopband;
      Fietsen|Cycling|Hometrainer|Exercise bike|Spinning; Roeien|Rowing|Roeitoestel|Rowing machine; Shoulder press|Shoulder press|Schouderdrukken|Overhead press|Military press;
      Lat pulldown|Lat pulldown|Latpulldown; Burpees|Burpees|Burpee; Leg press|Leg press|Beenpers; Dips|Dips|Dip; Jumping jacks|Jumping jacks|Spreidsprongen;
      Mountain climbers|Mountain climbers|Mountain climber; Touwtjespringen|Skipping|Jump rope|Springtouw; Crosstrainer|Cross trainer|Elliptical; Stepper|Stair climber|Trappenmachine;
      Kettlebell swing|Kettlebell swings|Kettlebell; Hip thrust|Hip thrusts|Hip thrust; Romanian deadlift|Romanian deadlift|RDL; Bulgarian split squat|Bulgarian split squat|Split squat;
      Leg extension|Leg extensions|Beenstrekker; Leg curl|Leg curls|Hamstring curl; Calf raises|Calf raises|Kuitheffen; Triceps pushdown|Tricep pushdown|Triceps extension|Tricep extension;
      Bent-over row|Barbell row|Roeien met halter|Row; Cable fly|Cable flyes|Flyes|Chest fly|Butterfly; Lateral raise|Lateral raises|Zijwaartse heffingen|Side raises;
      Front squat|Front squats; Hammer curl|Hammer curls; Face pull|Face pulls; Russian twist|Russian twists; Leg raises|Leg raises|Beenheffen|Hanging leg raise;
      Wall sit|Wall sit|Muurzit; Box jump|Box jumps; Battle ropes|Battle ropes|Touwen; Clean and jerk|Clean and jerk|Stoten; Snatch|Snatch|Trekken; Power clean|Power clean|Clean;
      Good morning|Good mornings; Farmer's walk|Farmer's walk|Farmer's carry; Sled push|Sled push|Prowler; Pec deck|Pec deck|Vlinder; Glute bridge|Glute bridge|Bruggetje|Bridge;
      Superman|Superman|Superman-oefening; Arnold press|Arnold press; Preacher curl|Preacher curls; Skull crushers|Skull crusher|Skullcrushers; Hack squat|Hack squat; Goblet squat|Goblet squat` },
  ]);

  B.addQuestions('life', [
    { id: 'gym', lvl: 1, nl: 'Noem iets dat je in een fitnesszaal vindt', en: 'Name something you find in a gym', a: `
      Halters|Dumbbells|Dumbbell|Halter; Loopband|Treadmill; Spiegel|Mirror|Spiegels|Mirrors; Gewichten|Weights|Gewicht; Fiets|Exercise bike|Hometrainer|Spinningfiets;
      Bankje|Bench|Fitnessbank|Weight bench; Barbell|Barbell|Lange halterstang|Halterstang; Mat|Mat|Fitnessmat|Yoga mat; Kleedkamer|Changing room|Locker room|Kleedkamers;
      Douches|Showers|Douche|Shower; Kluisjes|Lockers|Kluisje|Locker; Roeitoestel|Rowing machine|Roeimachine; Crosstrainer|Cross trainer|Elliptical; Personal trainer|Personal trainer|Trainer|Coach;
      Muziek|Music; Waterfles|Water bottle|Bidon|Shaker; Handdoek|Towel; Kettlebell|Kettlebell|Kettlebells; Squatrek|Squat rack|Power rack|Rek; Leg press|Leg press|Beenpers;
      Kabelmachine|Cable machine|Cable station|Kabels; Optrekstang|Pull-up bar|Optrekbar; Fitnessbal|Exercise ball|Gymbal|Swiss ball; Springtouw|Skipping rope|Jump rope;
      Weerstandsbanden|Resistance bands|Elastiek|Band; Medicijnbal|Medicine ball; Bokszak|Punching bag|Punchbag; Stepper|Stair climber|Trapmachine; Smith machine|Smith machine;
      Gewichtsschijven|Weight plates|Schijven|Plates; Magnesium|Chalk|Krijt; Fitnesshandschoenen|Gym gloves|Handschoenen; Lifting belt|Lifting belt|Riem|Gewichthefgordel; Weegschaal|Scales;
      Eiwitshake|Protein shake|Proteïne|Protein; Energiedrank|Energy drink|Preworkout|Pre-workout; Snackautomaat|Vending machine; Balie|Reception|Onthaal|Front desk;
      Ledenkaart|Membership card|Pasje|Badge; Groepsles|Group class|Spinning|Zumba|Bodypump; Sauna; Zwembad|Pool; Tv-schermen|TV screens|Tv; Airco|Air conditioning|Ventilator|Fans;
      Zweet|Sweat; Gymbros|Gym bros|Bodybuilders|Bodybuilder; Selfies in de spiegel|Mirror selfies|Selfie; Schoonmaakspray|Cleaning spray|Desinfectie|Disinfectant|Papier om af te vegen;
      Foamroller|Foam roller; TRX|TRX|Suspension trainer; Plyobox|Plyo box|Box; Battle ropes|Battle ropes|Touwen; Sled|Sled|Prowler; Dipstation|Dip station|Dip bars; Hyperextension bench|Hyperextension|Rugstrekker` },
  ]);

  B.addQuestions('science', [
    { id: 'sky', lvl: 1, nl: 'Noem iets dat je in de lucht kan zien', en: 'Name something you can see in the sky', a: `
      Zon|Sun; Maan|Moon; Wolken|Clouds|Wolk|Cloud; Sterren|Stars|Ster|Star; Vogels|Birds|Vogel|Bird; Vliegtuig|Plane|Aeroplane|Airplane; Regenboog|Rainbow;
      Bliksem|Lightning; Helikopter|Helicopter; Luchtballon|Hot-air balloon; Vlieger|Kite; Drone; Vallende ster|Shooting star|Meteoor|Meteor; Komeet|Comet;
      Satelliet|Satellite; Planeet|Planet|Venus|Mars|Jupiter; Noorderlicht|Northern lights|Aurora|Aurora borealis; Ufo|UFO; Raket|Rocket; Zeppelin|Airship|Zeppelin;
      Regen|Rain; Sneeuw|Snow; Hagel|Hail; Mist|Fog; Condensstrepen|Contrails|Vliegtuigstrepen|Vapour trails; Vuurwerk|Fireworks; Zonsondergang|Sunset; Zonsopgang|Sunrise;
      Melkweg|Milky Way; Sterrenbeeld|Constellation|Grote Beer|Big Dipper|Plough; Volle maan|Full moon; Halve maan|Half moon|Sikkel|Crescent moon; Zonsverduistering|Solar eclipse|Eclips|Eclipse;
      Maansverduistering|Lunar eclipse|Bloedmaan|Blood moon; ISS|ISS|Internationaal ruimtestation|International Space Station; Vleermuizen|Bats|Vleermuis|Bat; Insecten|Insects|Muggen|Mosquitoes;
      Parachutist|Parachutist|Parachute|Skydiver; Paraglider|Paraglider; Zweefvliegtuig|Glider; Straaljager|Fighter jet|Jet; Reclamevliegtuig|Banner plane; Ballon|Balloon; Bellen|Bubbles;
      Bladeren|Leaves|Blaadjes; Pluisjes|Dandelion seeds|Zaadjes; Rook|Smoke; Stof|Dust|Zand|Sand; Onweerswolk|Thundercloud|Cumulonimbus; Windhoos|Tornado|Wervelstorm;
      Halo|Halo|Kring rond de maan; Zonnehond|Sun dog|Bijzon; Lichtende nachtwolken|Noctilucent clouds; Starlink|Starlink|Satellietenrij; Zwermen spreeuwen|Starling murmuration|Spreeuwen|Starlings;
      Ooievaar|Stork; Arend|Eagle|Roofvogel|Bird of prey; Ganzen in V-vorm|Geese in V formation|Ganzen|Geese; Wolkenkrabber|Skyscraper|Toren; Kerstman met zijn slee|Santa's sleigh` },

    { id: 'space', lvl: 1, nl: 'Noem iets dat in de ruimte zit', en: 'Name something in space', a: `
      Planeet|Planet|Planeten|Planets; Ster|Star|Sterren|Stars; Zon|Sun; Maan|Moon; Aarde|Earth; Mars; Zwart gat|Black hole|Zwarte gaten; Komeet|Comet; Asteroïde|Asteroid|Planetoïde;
      Satelliet|Satellite; Astronaut|Astronaut|Ruimtevaarder|Kosmonaut|Cosmonaut; Ruimtestation|Space station|ISS|International Space Station; Raket|Rocket; Melkweg|Milky Way;
      Sterrenstelsel|Galaxy|Melkwegstelsel; Jupiter; Saturnus|Saturn|Ringen van Saturnus|Saturn's rings; Venus; Mercurius|Mercury; Uranus; Neptunus|Neptune; Pluto;
      Meteoriet|Meteorite|Meteoor|Meteor; Nevel|Nebula; Supernova; Ruimteafval|Space debris|Space junk; Ufo|UFO|Aliens|Alien|Buitenaards wezen|Extraterrestrial;
      Ruimteschip|Spaceship|Spacecraft|Ruimtevaartuig; Telescoop|Space telescope|Hubble|James Webb|James Webb Space Telescope; Sterrenbeeld|Constellation; Zonnestelsel|Solar System;
      Asteroïdengordel|Asteroid belt; Kuipergordel|Kuiper belt; Oortwolk|Oort cloud; Quasar; Pulsar; Neutronenster|Neutron star; Witte dwerg|White dwarf; Rode reus|Red giant;
      Dwergplaneet|Dwarf planet|Ceres|Eris; Exoplaneet|Exoplanet; Titan; Europa|Europa|Jupitermaan; Io; Ganymedes|Ganymede; Phobos; Deimos; Charon;
      Mars-rover|Mars rover|Curiosity|Perseverance; Voyager|Voyager|Voyager 1; Spoetnik|Sputnik; Apollo|Apollo|Maanlander|Lunar module; Spaceshuttle|Space Shuttle; Tesla Roadster|Starman;
      Laika; Vacuüm|Vacuum; Kosmische straling|Cosmic rays|Straling|Radiation; Donkere materie|Dark matter; Donkere energie|Dark energy; Zonnewind|Solar wind; Ruimtestof|Cosmic dust|Stof|Dust;
      Wormgat|Wormhole; Big Bang|Big Bang|Oerknal; Andromedanevel|Andromeda|Andromeda Galaxy|Andromedastelsel; Proxima Centauri|Proxima Centauri|Alpha Centauri; Poolster|Polaris|North Star; Sirius; Betelgeuze|Betelgeuse` },
  ]);

  B.addQuestions('history', [
    { id: 'inventions', lvl: 2, nl: 'Noem een belangrijke uitvinding', en: 'Name an important invention', a: `
      Wiel|Wheel; Gloeilamp|Light bulb|Lamp; Telefoon|Telephone|Phone; Internet; Computer; Auto|Car|Automobiel; Vliegtuig|Aeroplane|Airplane|Plane; Elektriciteit|Electricity;
      Boekdrukkunst|Printing press|Drukpers; Stoommachine|Steam engine; Smartphone|Smartphone|Gsm|Mobile phone; Televisie|Television|Tv; Radio; Vuur|Fire|Vuur maken;
      Penicilline|Penicillin|Antibiotica|Antibiotics; Vaccin|Vaccine|Vaccinatie|Vaccination; Trein|Train|Locomotief|Locomotive; Fiets|Bicycle|Bike; Kompas|Compass; Buskruit|Gunpowder;
      Papier|Paper; Schrift|Writing; Uurwerk|Clock|Klok|Mechanische klok; Bril|Glasses|Spectacles; Microscoop|Microscope; Telescoop|Telescope; Fotografie|Photography|Camera|Fototoestel;
      Film|Film|Cinema|Filmcamera; Koelkast|Refrigerator|Fridge; Wasmachine|Washing machine; Röntgenfoto|X-ray|Rontgen; Kernenergie|Nuclear power|Atoombom|Atomic bomb; Laser;
      Transistor|Transistor|Chip|Microchip; Raket|Rocket; Satelliet|Satellite; GPS|GPS|Gps; Zonnepaneel|Solar panel|Zonne-energie; Batterij|Battery; Motor|Engine|Verbrandingsmotor|Combustion engine;
      Telegraaf|Telegraph; Typemachine|Typewriter; Naaimachine|Sewing machine; Ploeg|Plough|Plow; Waterrad|Water wheel|Molen|Mill; Windmolen|Windmill; Aquaduct|Aqueduct;
      Beton|Concrete; Glas|Glass; Spijker|Nail; Thermometer; Barometer; Stethoscoop|Stethoscope; Anesthesie|Anaesthesia|Verdoving; Pacemaker; Insuline|Insulin;
      World Wide Web|World Wide Web|WWW|Het web; E-mail|Email|E-mail; Zoekmachine|Search engine|Google; Artificiële intelligentie|Artificial intelligence|AI|Kunstmatige intelligentie;
      Rits|Zip|Zipper|Ritssluiting; Velcro|Velcro|Klittenband; Plastic; Nylon; Post-it|Post-it note; Microgolfoven|Microwave oven|Magnetron; Airbag; Veiligheidsgordel|Seat belt; Lego; Rubik's kubus|Rubik's Cube` },
  ]);

  B.addQuestions('earth', [
    { id: 'disasters', lvl: 1, nl: 'Noem een natuurramp', en: 'Name a natural disaster', a: `
      Aardbeving|Earthquake; Tsunami|Tsunami|Vloedgolf|Tidal wave; Overstroming|Flood|Overstromingen|Floods; Orkaan|Hurricane; Vulkaanuitbarsting|Volcanic eruption|Uitbarsting|Eruption;
      Tornado|Tornado|Windhoos|Wervelwind; Bosbrand|Wildfire|Forest fire|Bosbranden; Droogte|Drought; Lawine|Avalanche; Storm|Storm|Stormen; Tyfoon|Typhoon; Cycloon|Cyclone;
      Modderstroom|Mudslide|Aardverschuiving|Landslide; Hittegolf|Heatwave; Sneeuwstorm|Blizzard; Hagelstorm|Hailstorm; Zandstorm|Sandstorm|Stofstorm|Dust storm;
      Onweer|Thunderstorm|Bliksem|Lightning; Meteorietinslag|Meteorite impact|Asteroïde-inslag|Asteroid strike; Pandemie|Pandemic|Epidemie|Epidemic; Hongersnood|Famine;
      Sprinkhanenplaag|Locust swarm|Plaag|Plague; Zinkgat|Sinkhole; IJsstorm|Ice storm|IJzel|Black ice; Koudegolf|Cold snap|Cold wave; Rotsval|Rockfall|Steenlawine;
      Dijkbreuk|Dyke breach|Dam break; Springvloed|Storm surge|Stormvloed; Waterhoos|Waterspout; Moesson|Monsoon|Moessonregen|Monsoon rains; Smog|Smog|Luchtvervuiling|Air pollution;
      Zonnestorm|Solar storm|Geomagnetische storm; Lahar; Pyroclastische stroom|Pyroclastic flow; Gletsjervloed|Glacial flood|Jökulhlaup; Woestijnvorming|Desertification;
      Bliksemsnelle overstroming|Flash flood|Flash flood; Derecho; Supercel|Supercell; Dierziekte|Animal disease outbreak|Vogelgriep|Bird flu` },
  ]);

  B.addQuestions('language', [
    { id: 'languages', lvl: 1, nl: 'Noem een taal', en: 'Name a language', a: `
      Engels|English; Frans|French; Duits|German; Spaans|Spanish; Nederlands|Dutch|Vlaams|Flemish; Italiaans|Italian; Chinees|Chinese|Mandarijn|Mandarin; Portugees|Portuguese;
      Russisch|Russian; Arabisch|Arabic; Japans|Japanese; Turks|Turkish; Grieks|Greek; Pools|Polish; Zweeds|Swedish; Hindi; Koreaans|Korean; Latijn|Latin;
      Noors|Norwegian; Deens|Danish; Fins|Finnish; Hongaars|Hungarian; Tsjechisch|Czech; Roemeens|Romanian; Oekraïens|Ukrainian; Hebreeuws|Hebrew; Perzisch|Persian|Farsi;
      Swahili; Afrikaans; Thais|Thai; Vietnamees|Vietnamese; Indonesisch|Indonesian|Bahasa; Bengaals|Bengali; Urdu; Punjabi; Tamil; Ests|Estonian; Lets|Latvian; Litouws|Lithuanian;
      Iers|Irish|Gaelic|Gaelisch; Welsh|Welsh|Wels; Schots-Gaelisch|Scottish Gaelic; Baskisch|Basque; Catalaans|Catalan; Galicisch|Galician; Bretons|Breton; Fries|Frisian|Westerlauwers Fries;
      Luxemburgs|Luxembourgish; IJslands|Icelandic; Albanees|Albanian; Kroatisch|Croatian; Servisch|Serbian; Bosnisch|Bosnian; Sloveens|Slovenian; Slowaaks|Slovak; Bulgaars|Bulgarian;
      Macedonisch|Macedonian; Maltees|Maltese; Armeens|Armenian; Georgisch|Georgian; Koerdisch|Kurdish; Pashto; Amhaars|Amharic; Somalisch|Somali; Yoruba; Zoeloe|Zulu; Xhosa;
      Hausa; Igbo; Tagalog|Tagalog|Filipino; Maleis|Malay; Mongools|Mongolian; Tibetaans|Tibetan; Nepalees|Nepali; Kazachs|Kazakh; Oezbeeks|Uzbek; Esperanto; Klingon; Elfs|Elvish|Quenya|Sindarin;
      Gebarentaal|Sign language|Vlaamse Gebarentaal; Sanskriet|Sanskrit; Oudgrieks|Ancient Greek; Jiddisch|Yiddish; Romani|Romani|Romanes; Quechua; Guaraní|Guarani; Maori|Māori|Maori; Hawaïaans|Hawaiian; Inuktitut; Navajo` },

    { id: 'hello', lvl: 2, nl: 'Noem een manier om "hallo" te zeggen in een andere taal', en: 'Name a way to say "hello" in another language', a: `
      Hello|Hello|Hi; Bonjour|Bonjour|Salut; Hola; Ciao; Hallo|Hallo|Guten Tag; Olá|Ola|Olá|Oi; Konnichiwa|Konnichiwa|Konichiwa; Namaste|Namaste|Namasté; Salaam|Salaam|Salam|As-salamu alaykum|Salaam aleikum;
      Ni hao|Ni hao|Nǐ hǎo|Nihao; Privet|Privet|Zdravstvuyte; Merhaba; Shalom; Aloha; Jambo|Jambo|Habari; Hej|Hej|Hei; Moi|Moi|Hoi|Hoi; Servus; Grüezi|Gruezi|Grüß Gott|Gruss Gott;
      Annyeong|Annyeonghaseyo|Annyeong haseyo; Sawasdee|Sawasdee|Sawadee|Sawatdee; Xin chào|Xin chao; Yassou|Yassas|Geia sou|Γεια; Dzień dobry|Dzien dobry|Cześć|Czesc; Ahoj|Ahoj|Dobrý den;
      Szia|Szia|Jó napot; Buna ziua|Bună ziua|Buna; Zdravo|Zdravo|Bok; Dobar dan; Halo|Halo|Selamat pagi; Kamusta|Kumusta|Kamusta; Mabuhay; Sain baina uu|Sain baina uu;
      Kia ora; G'day|G'day|G'day mate; Howdy|Howdy; Yo|Yo|Wazzup|Wassup|Hey; Sveiki|Sveiki|Labas; Tere; Terve|Terve; Dia dhuit|Dia duit; Shwmae|Shw mae|Helo;
      Kaixo; Bon dia|Bon dia; Moien; Përshëndetje|Pershendetje; Barev|Barev dzez; Gamarjoba; Sannu; Sawubona|Sawubona; Molo; Habari gani|Habari gani; Hujambo|Hujambo;
      Vanakkam; Sat Sri Akal|Sat sri akal; Adaab; Tashi delek; Ayubowan; Mingalaba; Sabaidee; Suostei|Sua s'dei|Chum reap suor; Bula; Talofa; Malo e lelei; Hallå` },
  ]);

  B.addQuestions('geo', [
    { id: 'any-country', lvl: 1, nl: 'Noem een land (eender welk land ter wereld)', en: 'Name a country (any country in the world)', a: `
      Frankrijk|France; Duitsland|Germany; België|Belgium; Nederland|Netherlands|Holland|The Netherlands; Spanje|Spain; Italië|Italy; Verenigde Staten|United States|USA|VS|Amerika|America|US;
      Engeland|England|Verenigd Koninkrijk|United Kingdom|UK|Groot-Brittannië|Great Britain; China; Japan; Brazilië|Brazil; Rusland|Russia; Canada; Australië|Australia; India;
      Portugal; Griekenland|Greece; Zwitserland|Switzerland; Oostenrijk|Austria; Zweden|Sweden; Noorwegen|Norway; Denemarken|Denmark; Mexico; Argentinië|Argentina; Egypte|Egypt;
      Turkije|Turkey|Türkiye; Marokko|Morocco; Polen|Poland; Ierland|Ireland; Luxemburg|Luxembourg; Finland; Zuid-Afrika|South Africa; Thailand; Zuid-Korea|South Korea|Korea;
      Kroatië|Croatia; Tsjechië|Czech Republic|Czechia; Hongarije|Hungary; IJsland|Iceland; Nieuw-Zeeland|New Zealand; Peru; Colombia; Chili|Chile; Cuba; Jamaica;
      Nigeria; Kenia|Kenya; Ghana; Senegal; Tunesië|Tunisia; Algerije|Algeria; Congo|Congo|DR Congo|Democratische Republiek Congo; Ethiopië|Ethiopia; Iran; Irak|Iraq; Israël|Israel;
      Saudi-Arabië|Saudi Arabia; Verenigde Arabische Emiraten|United Arab Emirates|UAE|VAE|Emiraten; Qatar; Pakistan; Afghanistan; Indonesië|Indonesia; Vietnam; Filipijnen|Philippines; Maleisië|Malaysia;
      Singapore; Noord-Korea|North Korea; Oekraïne|Ukraine; Roemenië|Romania; Bulgarije|Bulgaria; Servië|Serbia; Slovenië|Slovenia; Slowakije|Slovakia; Estland|Estonia; Letland|Latvia; Litouwen|Lithuania;
      Wit-Rusland|Belarus; Moldavië|Moldova; Albanië|Albania; Bosnië en Herzegovina|Bosnia and Herzegovina|Bosnië; Montenegro; Noord-Macedonië|North Macedonia|Macedonië; Kosovo; Cyprus; Malta;
      Monaco; Andorra; San Marino; Liechtenstein; Vaticaanstad|Vatican City|Vaticaan; Georgië|Georgia; Armenië|Armenia; Azerbeidzjan|Azerbaijan; Kazachstan|Kazakhstan; Oezbekistan|Uzbekistan;
      Mongolië|Mongolia; Nepal; Bhutan; Bangladesh; Sri Lanka; Myanmar|Myanmar|Birma|Burma; Cambodja|Cambodia; Laos; Taiwan; Libanon|Lebanon; Syrië|Syria; Jordanië|Jordan; Jemen|Yemen;
      Oman; Koeweit|Kuwait; Bahrein|Bahrain; Libië|Libya; Soedan|Sudan; Somalië|Somalia; Oeganda|Uganda; Tanzania; Rwanda; Burundi; Madagaskar|Madagascar; Mozambique; Angola;
      Zambia; Zimbabwe; Botswana; Namibië|Namibia; Kameroen|Cameroon; Ivoorkust|Ivory Coast|Côte d'Ivoire; Mali; Niger; Tsjaad|Chad; Burkina Faso; Guinee|Guinea; Sierra Leone; Liberia;
      Togo; Benin; Gabon; Eritrea; Djibouti; Mauritanië|Mauritania; Gambia|The Gambia; Kaapverdië|Cape Verde|Cabo Verde; Seychellen|Seychelles; Mauritius; Comoren|Comoros; Lesotho; Eswatini|Swaziland;
      Malawi; Zuid-Soedan|South Sudan; Equatoriaal-Guinee|Equatorial Guinea; Guinee-Bissau|Guinea-Bissau; Centraal-Afrikaanse Republiek|Central African Republic; São Tomé en Principe|Sao Tome and Principe;
      Venezuela; Ecuador; Bolivia; Paraguay; Uruguay; Guyana; Suriname; Panama; Costa Rica; Nicaragua; Honduras; El Salvador; Guatemala; Belize; Haïti|Haiti; Dominicaanse Republiek|Dominican Republic;
      Bahama's|Bahamas; Barbados; Trinidad en Tobago|Trinidad and Tobago; Grenada; Dominica; Saint Lucia; Saint Vincent en de Grenadines|Saint Vincent and the Grenadines; Antigua en Barbuda|Antigua and Barbuda;
      Saint Kitts en Nevis|Saint Kitts and Nevis; Papoea-Nieuw-Guinea|Papua New Guinea; Fiji; Samoa; Tonga; Vanuatu; Salomonseilanden|Solomon Islands; Kiribati; Tuvalu; Nauru; Palau;
      Marshalleilanden|Marshall Islands; Micronesië|Micronesia; Oost-Timor|East Timor|Timor-Leste; Brunei; Malediven|Maldives; Turkmenistan; Tadzjikistan|Tajikistan; Kirgizië|Kyrgyzstan` },

    { id: 'sights', lvl: 1, nl: 'Noem een bekende bezienswaardigheid of monument in de wereld', en: 'Name a famous landmark or monument in the world', a: `
      Eiffeltoren|Eiffel Tower; Vrijheidsbeeld|Statue of Liberty; Chinese Muur|Great Wall of China|Grote Muur; Piramides van Gizeh|Pyramids of Giza|Piramides|Pyramids; Colosseum;
      Big Ben; Taj Mahal; Scheve toren van Pisa|Leaning Tower of Pisa|Toren van Pisa; Sagrada Família|Sagrada Familia; Atomium; Manneken Pis; Stonehenge; Akropolis|Acropolis|Parthenon;
      Christus de Verlosser|Christ the Redeemer|Cristo Redentor; Machu Picchu; Sydney Opera House|Sydney Opera House|Opera van Sydney; Burj Khalifa; Golden Gate Bridge|Golden Gate|Golden Gate-brug;
      Brandenburger Tor|Brandenburg Gate|Brandenburger Poort; Louvre; Arc de Triomphe|Arc de Triomphe|Triomfboog; Notre-Dame|Notre-Dame|Notre Dame; Kremlin|Kremlin|Rode Plein|Red Square;
      Tower Bridge; London Eye; Buckingham Palace; Sixtijnse Kapel|Sistine Chapel; Sint-Pietersbasiliek|St Peter's Basilica|Vaticaan; Trevifontein|Trevi Fountain;
      Mount Rushmore; Empire State Building; Times Square; Grand Canyon; Niagarawatervallen|Niagara Falls|Niagara; Petra; Angkor Wat; Alhambra; Neuschwanstein|Neuschwanstein Castle;
      Grote Markt van Brussel|Grand Place|Grote Markt; Belfort van Brugge|Belfry of Bruges|Belfort; Paleis van Versailles|Palace of Versailles|Versailles; Mont Saint-Michel; Tower of London;
      Kölner Dom|Cologne Cathedral|Dom van Keulen; Hagia Sophia|Hagia Sophia|Aya Sofya; Blauwe Moskee|Blue Mosque; Kaaba; Klaagmuur|Western Wall|Wailing Wall; Sfinx|Great Sphinx|Sphinx;
      Paaseiland|Easter Island|Moai; Chichén Itzá|Chichen Itza; Verboden Stad|Forbidden City; Terracottaleger|Terracotta Army; Fuji|Mount Fuji|Fujiyama; Gouden Paviljoen|Kinkaku-ji|Golden Pavilion;
      Petronas Towers|Petronas Twin Towers; Marina Bay Sands; CN Tower; Space Needle; Hollywood Sign|Hollywood sign|Hollywood; Witte Huis|White House; Capitool|Capitol|US Capitol;
      Pantheon; Pont du Gard; Dom van Milaan|Milan Cathedral|Duomo; Rialtobrug|Rialto Bridge; Dogepaleis|Doge's Palace; San Marcoplein|St Mark's Square|Piazza San Marco; Karelsbrug|Charles Bridge;
      Kleine Zeemeermin|Little Mermaid; Rijksmuseum; Kinderdijk; Giant's Causeway; Cliffs of Moher;
      Uluru|Uluru|Ayers Rock; Victoriawatervallen|Victoria Falls; Kilimanjaro; Iguazú-watervallen|Iguazu Falls; Galápagoseilanden|Galapagos Islands; Sint-Basiliuskathedraal|St Basil's Cathedral;
      Tafelberg|Table Mountain; Abu Simbel; Borobudur; Potala-paleis|Potala Palace; Gateway of India; Burj al Arab; Sheikh Zayed-moskee|Sheikh Zayed Mosque` },

    { id: 'big-cities', lvl: 1, nl: 'Noem een grote stad in de wereld (geen hoofdstad nodig)', en: 'Name a big city anywhere in the world (it does not have to be a capital)', a: `
      New York|New York|New York City|NYC; Londen|London; Parijs|Paris; Tokio|Tokyo; Los Angeles|Los Angeles|LA; Berlijn|Berlin; Rome; Madrid; Barcelona; Amsterdam; Brussel|Brussels;
      Antwerpen|Antwerp; Moskou|Moscow; Peking|Beijing; Shanghai; Dubai; Sydney; Rio de Janeiro|Rio de Janeiro|Rio; Istanbul; Chicago; Mexico-Stad|Mexico City; Hongkong|Hong Kong;
      Singapore; Mumbai|Mumbai|Bombay; Delhi|Delhi|New Delhi; Cairo|Cairo|Kairo; São Paulo|Sao Paulo; Buenos Aires; Toronto; Bangkok; Seoel|Seoul; Lissabon|Lisbon; Wenen|Vienna;
      Praag|Prague; München|Munich; Milaan|Milan; Napels|Naples; Venetië|Venice; Florence; Lyon; Marseille; Hamburg; Keulen|Cologne; Frankfurt; Rotterdam; Gent|Ghent; Luik|Liège;
      Manchester; Liverpool; Birmingham; Edinburgh; Dublin; Kopenhagen|Copenhagen; Stockholm; Oslo; Helsinki; Warschau|Warsaw; Boedapest|Budapest; Athene|Athens; Sint-Petersburg|Saint Petersburg|St Petersburg;
      San Francisco; Las Vegas; Miami; Washington; Boston; Seattle; Houston; Dallas; Philadelphia; Atlanta; New Orleans; Montreal|Montreal|Montréal; Vancouver; Melbourne;
      Kaapstad|Cape Town; Johannesburg; Lagos; Nairobi; Casablanca; Marrakesh|Marrakech|Marrakesh; Tel Aviv; Jeruzalem|Jerusalem; Teheran|Tehran; Bagdad|Baghdad; Karachi; Lahore; Dhaka;
      Kolkata|Kolkata|Calcutta; Bangalore|Bengaluru|Bangalore; Chennai; Jakarta; Manilla|Manila; Ho Chi Minhstad|Ho Chi Minh City|Saigon; Hanoi; Kuala Lumpur; Osaka; Kyoto; Busan;
      Guangzhou; Shenzhen; Chongqing; Wuhan; Chengdu; Tianjin; Taipei; Lima; Bogota|Bogotá|Bogota; Santiago; Caracas; Havana|Havana|Havanna; Montevideo; Kinshasa; Addis Abeba|Addis Ababa;
      Riyad|Riyadh; Doha; Abu Dhabi; Kiev|Kyiv|Kiev; Minsk; Boekarest|Bucharest; Belgrado|Belgrade; Zagreb; Sevilla|Seville; Valencia; Porto; Zürich|Zurich; Genève|Geneva; Krakau|Krakow|Kraków` },
  ]);

  B.addQuestions('culture', [
    { id: 'painters', lvl: 2, nl: 'Noem een bekende schilder', en: 'Name a famous painter', a: `
      Vincent van Gogh|Vincent van Gogh|Van Gogh; Pablo Picasso|Pablo Picasso|Picasso; Leonardo da Vinci|Leonardo da Vinci|Da Vinci|Leonardo; Rembrandt|Rembrandt|Rembrandt van Rijn;
      Claude Monet|Claude Monet|Monet; Salvador Dalí|Salvador Dali|Dalí|Dali; Michelangelo; Frida Kahlo|Frida Kahlo|Frida; René Magritte|Rene Magritte|Magritte; Peter Paul Rubens|Peter Paul Rubens|Rubens;
      Johannes Vermeer|Johannes Vermeer|Vermeer; Andy Warhol|Andy Warhol|Warhol; Jan van Eyck|Jan van Eyck|Van Eyck; Pieter Bruegel|Pieter Bruegel|Bruegel|Brueghel; Edvard Munch|Edvard Munch|Munch;
      Gustav Klimt|Gustav Klimt|Klimt; Raphael|Raphael|Rafaël|Raffaello; Banksy; Piet Mondriaan|Piet Mondrian|Mondriaan|Mondrian; Jeroen Bosch|Hieronymus Bosch|Bosch;
      Paul Cézanne|Paul Cezanne|Cézanne|Cezanne; Pierre-Auguste Renoir|Renoir; Edgar Degas|Degas; Henri Matisse|Matisse; Paul Gauguin|Gauguin; Wassily Kandinsky|Kandinsky;
      Jackson Pollock|Pollock; Francisco Goya|Goya; Diego Velázquez|Velazquez|Velázquez; El Greco; Caravaggio; Sandro Botticelli|Botticelli; Titiaan|Titian; Albrecht Dürer|Albrecht Durer|Dürer;
      Joan Miró|Joan Miro|Miró|Miro; Marc Chagall|Chagall; Georges Seurat|Seurat; Henri de Toulouse-Lautrec|Toulouse-Lautrec; Édouard Manet|Edouard Manet|Manet; Camille Pissarro|Pissarro;
      William Turner|J.M.W. Turner|Turner; John Constable|Constable; Caspar David Friedrich|Friedrich; Roy Lichtenstein|Lichtenstein; Keith Haring|Haring; Jean-Michel Basquiat|Basquiat;
      David Hockney|Hockney; Mark Rothko|Rothko; Francis Bacon; Lucian Freud; Georgia O'Keeffe|O'Keeffe; Edward Hopper|Hopper; Anthony van Dyck|Van Dyck; Hans Memling|Memling;
      Rogier van der Weyden|Van der Weyden; Frans Hals|Hals; Jan Steen|Steen; Karel Appel|Appel; M.C. Escher|M. C. Escher|Escher; Paul Delvaux|Delvaux; Bob Ross; Yayoi Kusama|Kusama; Ai Weiwei` },

    { id: 'film-genres', lvl: 1, nl: 'Noem een filmgenre', en: 'Name a film genre', a: `
      Actie|Action|Actiefilm; Komedie|Comedy; Horror|Horror|Griezelfilm; Drama; Romantiek|Romance|Romantische komedie|Romcom|Romantic comedy; Thriller; Sciencefiction|Science fiction|Sci-fi|SF;
      Animatie|Animation|Tekenfilm|Cartoon; Fantasy; Avontuur|Adventure; Documentaire|Documentary; Misdaad|Crime|Misdaadfilm; Oorlogsfilm|War film|War; Western;
      Musical; Mysterie|Mystery; Superheldenfilm|Superhero film|Superhero; Familiefilm|Family film; Kinderfilm|Children's film; Detective|Detective film; Biografie|Biopic|Biography;
      Historische film|Historical film|Period drama|Kostuumdrama; Sportfilm|Sports film; Rampenfilm|Disaster film; Zombiefilm|Zombie film; Vampierfilm|Vampire film; Spionagefilm|Spy film;
      Heist|Heist film|Overvalfilm; Film noir|Film noir; Psychologische thriller|Psychological thriller; Slasher; Martial arts|Martial arts film|Kungfufilm; Anime; Stomme film|Silent film;
      Kerstfilm|Christmas film; Tienerfilm|Teen film|Teen movie; Coming-of-age; Mockumentary; Parodie|Parody|Spoof; Satire; Zwarte komedie|Black comedy|Dark comedy;
      Arthouse; Experimentele film|Experimental film; Kortfilm|Short film; Roadmovie|Road movie; Buddyfilm|Buddy film|Buddy cop; Neo-noir; Cyberpunk; Steampunk; Space opera;
      Monsterfilm|Monster film|Kaiju; Rechtbankdrama|Courtroom drama|Legal drama; Politieke thriller|Political thriller; Erotische film|Erotic film; Bollywood; Spaghettiwestern|Spaghetti western; Found footage` },

    { id: 'circus', lvl: 2, nl: 'Noem iets dat je in een circus ziet', en: 'Name something you see at a circus', a: `
      Clown|Clown|Clowns; Acrobaat|Acrobat|Acrobaten; Olifant|Elephant; Leeuw|Lion; Tent|Big top|Circustent|Circus tent; Jongleur|Juggler; Trapeze|Trapeze|Trapezeartiest|Trapeze artist;
      Koorddanser|Tightrope walker|Koorddansen|Tightrope; Goochelaar|Magician; Paard|Horse|Paarden|Horses; Tijger|Tiger; Popcorn; Suikerspin|Candyfloss|Cotton candy; Directeur|Ringmaster|Spreekstalmeester;
      Piste|Ring|Circus ring|Manege; Eenwieler|Unicycle; Vuurspuwer|Fire breather|Vuurvreter|Fire-eater; Messenwerper|Knife thrower; Steltlopers|Stilt walkers|Stelten|Stilts; Zeehond|Sea lion|Zeeleeuw;
      Aap|Monkey; Hond|Dog|Hondjes|Performing dogs; Kameel|Camel; Beer|Bear; Dompteur|Animal tamer|Leeuwentemmer|Lion tamer; Sterke man|Strongman; Slangenmens|Contortionist;
      Kanonskogelmens|Human cannonball|Kanon|Cannon; Motor in een bol|Globe of death|Kogel des doods; Trampoline; Luchtacrobatiek|Aerial silks|Doeken; Hoepels|Hoops|Hoelahoep|Hula hoop;
      Ballonnen|Balloons; Muziek|Music|Orkest|Band; Spotlights|Spotlights|Schijnwerpers; Tromgeroffel|Drumroll; Publiek|Audience|Toeschouwers; Kaartjes|Tickets; Rode neus|Red nose|Clownsneus;
      Grote schoenen|Big shoes|Clownsschoenen; Taart in het gezicht|Pie in the face; Fiets|Tiny bicycle|Klein fietsje; Vangnet|Safety net|Net; Ladder; Bal|Ball; Ringen|Rings|Vuurring|Ring of fire;
      Cirque du Soleil; Buikspreker|Ventriloquist; Mime|Mime artist|Mimespeler; Zwaardslikker|Sword swallower; Diabolo; Woonwagens|Caravans|Circuswagens; Zebra; Lama|Llama; Pony|Pony|Pony's` },

    { id: 'harry-potter', lvl: 2, nl: 'Noem een personage uit Harry Potter', en: 'Name a Harry Potter character', a: `
      Harry Potter|Harry Potter|Harry; Hermelien Griffel|Hermione Granger|Hermelien|Hermione; Ron Wemel|Ron Weasley|Ron; Perkamentus|Dumbledore|Albus Perkamentus|Albus Dumbledore;
      Voldemort|Voldemort|Heer Voldemort|Lord Voldemort|Tom Vilijn|Tom Riddle; Severus Sneep|Severus Snape|Sneep|Snape; Hagrid|Hagrid|Rubeus Hagrid; Draco Malfidus|Draco Malfoy|Draco|Malfidus|Malfoy;
      Sirius Zwarts|Sirius Black|Sirius; Dobby; Ginny Wemel|Ginny Weasley|Ginny; Marcel Lubbermans|Neville Longbottom|Neville|Marcel; Loena Leeflang|Luna Lovegood|Luna; Minerva Anderling|Minerva McGonagall|McGonagall|Anderling;
      Fred Wemel|Fred Weasley|Fred; George Wemel|George Weasley|George; Hedwig; Remus Lupos|Remus Lupin|Lupos|Lupin; Bellatrix van Detta|Bellatrix Lestrange|Bellatrix; Dolores Omber|Dolores Umbridge|Omber|Umbridge;
      Cedric Kannewasser|Cedric Diggory|Cedric; Cho Chang|Cho Chang|Cho; Lucius Malfidus|Lucius Malfoy|Lucius; Peter Pippeling|Peter Pettigrew|Wormstaart|Wormtail|Pippeling; Dirk Duffeling|Dudley Dursley|Dirk|Dudley;
      Herman Duffeling|Vernon Dursley|Oom Herman|Uncle Vernon; Petunia Duffeling|Petunia Dursley|Tante Petunia|Aunt Petunia; Gilderoy Smalhart|Gilderoy Lockhart|Lockhart|Smalhart; Firenze;
      Molly Wemel|Molly Weasley|Molly; Arthur Wemel|Arthur Weasley|Arthur; Percy Wemel|Percy Weasley|Percy; Charlie Wemel|Charlie Weasley|Charlie; Bill Wemel|Bill Weasley|Bill;
      Nymphadora Tops|Nymphadora Tonks|Tonks|Tops; Alastor Dolleman|Alastor Moody|Dwaaloog Dolleman|Mad-Eye Moody|Dolleman|Moody; Knijster|Kreacher; Scheurbek|Buckbeak; Fawkes|Fawkes|Felix;
      Argus Vilder|Argus Filch|Vilder|Filch; Mevrouw Norks|Mrs Norris; Quirinus Krinkel|Quirinus Quirrell|Krinkel|Quirrell; Viktor Kruml|Viktor Krum|Krum|Kruml; Fleur Delacour|Fleur Delacour|Fleur;
      Lily Potter|Lily Potter|Lily; James Potter|James Potter|James; Hagrids hond Muil|Fang|Muil; Pluisje|Fluffy; Aragog;
      Haast Onthoofde Henk|Nearly Headless Nick|Henk; Foppe|Peeves; Lee Jordan; Seamus Filister|Seamus Finnigan|Seamus; Daan Tomas|Dean Thomas|Dean;
      Parvati Patil; Padma Patil; Romilda Vane; Gellert Grindelwald|Grindelwald;
      Cornelis Droebel|Cornelius Fudge|Droebel|Fudge; Kingsley Romeo|Kingsley Shacklebolt|Kingsley; Albus Severus Potter|Albus Severus; Scorpius Malfidus|Scorpius Malfoy|Scorpius; Grawp; Winky; Nagini; Basilisk|Basilisk|De Basilisk` },
  ]);

  B.addQuestions('nature', [
    { id: 'fish-food', lvl: 2, nl: 'Noem een vis of zeevrucht die je kan eten', en: 'Name a fish or seafood you can eat', a: `
      Zalm|Salmon; Tonijn|Tuna; Kabeljauw|Cod; Garnalen|Prawns|Shrimp|Garnaal|Scampi|Gamba's; Mosselen|Mussels|Mossel; Forel|Trout; Haring|Herring|Maatjes|Maatjesharing;
      Makreel|Mackerel; Sardines|Sardines|Sardientjes|Sardine; Kreeft|Lobster; Krab|Crab; Oesters|Oysters|Oester; Inktvis|Squid|Calamares|Calamari; Octopus; Tong|Sole;
      Pangasius; Tilapia; Schol|Plaice; Heilbot|Halibut; Koolvis|Pollock|Coley; Wijting|Whiting; Schelvis|Haddock; Zeebaars|Sea bass|Bar|Zeewolf; Dorade|Sea bream|Zeebrasem;
      Paling|Eel|Aal; Ansjovis|Anchovies|Ansjovis; Karper|Carp; Snoek|Pike; Snoekbaars|Zander|Pike-perch; Tarbot|Turbot; Rog|Skate|Ray|Rog; Zwaardvis|Swordfish;
      Sint-jakobsschelp|Scallop|Coquilles Saint-Jacques|Jakobsschelpen; Kokkels|Cockles; Venusschelpen|Clams|Vongole; Langoustines|Langoustines|Noorse kreeft; Rivierkreeft|Crayfish;
      Surimi|Surimi|Krabsticks|Crab sticks; Kaviaar|Caviar; Zeeduivel|Monkfish|Lotte; Poon|Gurnard; Sprot|Sprats|Sprotjes; Spiering|Smelt;
      Meerval|Catfish; Baars|Perch; Steur|Sturgeon; Zee-egel|Sea urchin|Uni; Alikruiken|Winkles|Periwinkles; Wulken|Whelks;
      Sushi|Sushi|Sashimi; Fish and chips|Fish and chips|Vis met friet; Kibbeling; Lekkerbekje; Rolmops; Bokking|Kipper|Gerookte haring; Stokvis|Stockfish|Klipvis|Bacalhau|Salt cod` },

    { id: 'alcohol', lvl: 2, nl: 'Noem een drank met alcohol', en: 'Name an alcoholic drink', a: `
      Bier|Beer|Pintje|Pint|Pils|Lager; Wijn|Wine|Rode wijn|Red wine|Witte wijn|White wine; Wodka|Vodka; Whisky|Whisky|Whiskey; Champagne; Rum; Gin|Gin|Gin-tonic|Gin and tonic;
      Cava|Cava|Prosecco|Schuimwijn|Sparkling wine; Rosé|Rosé|Roséwijn; Tequila; Jenever|Genever|Jenevertje; Cocktail|Cocktail|Cocktails; Mojito; Sangria; Aperol Spritz|Aperol Spritz|Spritz|Aperol;
      Cider; Likeur|Liqueur; Baileys; Amaretto; Limoncello; Port|Port|Porto; Sherry; Martini; Cognac; Brandy; Calvados; Absint|Absinthe; Sake;
      Jägermeister|Jagermeister|Jager; Ouzo; Raki; Grappa; Sambuca; Pastis|Pastis|Ricard; Advocaat|Advocaat|Eierlikeur; Glühwein|Mulled wine; Kriek|Kriek|Kriekenbier; Trappist|Trappist|Trappistenbier;
      Duvel; Leffe; Stella Artois|Stella|Stella Artois; Jupiler; Heineken; Guinness; Corona; Witbier|Wheat beer|Hoegaarden; Geuze|Gueuze; IPA|IPA|India Pale Ale; Stout;
      Margarita; Piña colada|Pina colada; Cosmopolitan; Daiquiri; Caipirinha; Long Island iced tea|Long Island; Moscow mule; Bloody Mary; Negroni; Old fashioned; Sex on the Beach|Sex on the beach;
      Mimosa; Kir|Kir|Kir royal; Bourbon; Scotch; Mezcal; Pisco; Cachaça|Cachaca; Soju; Baijiu; Mede|Mead|Honingwijn; Palmwijn|Palm wine; Breezer|Bacardi Breezer|Alcopop; Hard seltzer` },

    { id: 'potato', lvl: 2, nl: 'Noem een gerecht met aardappelen', en: 'Name a potato dish', a: `
      Frietjes|Fries|Friet|Frieten|French fries; Puree|Mashed potato|Aardappelpuree|Mash; Gekookte aardappelen|Boiled potatoes; Gebakken aardappelen|Fried potatoes|Sautéed potatoes;
      Kroketten|Croquettes|Aardappelkroketten; Ovenaardappelen|Roast potatoes|Geroosterde aardappelen; Gepofte aardappel|Jacket potato|Baked potato|Aardappel in de schil; Stoemp; Chips|Crisps|Potato chips;
      Aardappelsalade|Potato salad; Gratin|Potato gratin|Gratin dauphinois|Aardappelgratin; Rösti|Rösti|Rosti; Hash browns|Hash browns|Hashbrowns; Wedges|Potato wedges|Aardappelpartjes;
      Aardappelsoep|Potato soup|Preisoep|Leek and potato soup; Stamppot|Stamppot; Hutspot; Shepherd's pie|Shepherd's pie|Cottage pie|Herderstaart; Gnocchi; Tortilla|Spanish omelette|Tortilla de patatas;
      Patatas bravas|Patatas bravas; Pommes duchesse|Duchess potatoes; Pommes Anna|Pommes Anna; Krielaardappeltjes|New potatoes|Krieltjes; Aardappelpannenkoek|Potato pancake|Latke|Reibekuchen;
      Kartoffelsalat; Tartiflette; Aligot; Raclette|Raclette met aardappelen; Poutine; Hasselback-aardappelen|Hasselback potatoes;
      Mosselen met frietjes|Mussels and fries|Moules-frites; Fish and chips|Fish and chips; Samosa|Samosa; Colcannon; Bubble and squeak; Patatje oorlog|Patatje oorlog; Aardappelcurry|Potato curry` },
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
