/* ─────────────────────────────────────────────────────────────
   Brillion · letterspel
   Vragen zoals "Noem een land dat begint met een B" of "Noem een
   dier van 3 letters". De lijsten komen uit de andere vragen (alle
   landen, dieren, fruit, beroepen …), aangevuld met een paar extra
   lijsten hieronder. De letterregel geldt voor wat je typt.

   SPECS: [lijst, regel, waarde, moeilijkheid]
     regel: starts = begint met · contains = met … in de naam ·
            len = aantal letters · double = met een dubbele letter
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;

  /* ── Extra lijsten ───────────────────────────────────────── */
  const EXTRA_ANIMALS = B.parseAnswers(`
    Hond|Dog; Kat|Cat|Poes; Paard|Horse; Koe|Cow; Muis|Mouse; Konijn|Rabbit; Aap|Monkey|Ape; Leeuw|Lion; Olifant|Elephant; Beer|Bear;
    Tijger|Tiger; Wolf; Vos|Fox; Varken|Pig; Schaap|Sheep; Geit|Goat; Kip|Chicken; Eend|Duck; Uil|Owl; Vis|Fish; Slang|Snake; Kikker|Frog;
    Hert|Deer; Haas|Hare; Eekhoorn|Squirrel; Egel|Hedgehog; Rat; Hamster; Cavia|Guinea pig; Goudvis|Goldfish; Panda|Giant panda|Reuzenpanda;
    IJsbeer|Polar bear; Koala; Kangoeroe|Kangaroo; Giraf|Giraffe; Zebra; Krokodil|Crocodile; Haai|Shark; Walvis|Whale; Dolfijn|Dolphin;
    Pinguïn|Penguin; Papegaai|Parrot; Arend|Eagle|Adelaar; Mol|Mole; Das|Badger; Otter; Bever|Beaver; Vleermuis|Bat; Wezel|Weasel;
    Hermelijn|Stoat|Ermine; Marter|Marten|Steenmarter|Boommarter; Lynx|Lynx|Los; Eland|Moose|Elk; Rendier|Reindeer; Bizon|Bison|Wisent;
    Everzwijn|Wild boar|Wild zwijn|Zwijn; Ree|Roe deer; Damhert|Fallow deer; Edelhert|Red deer; Muskusrat|Muskrat; Woelmuis|Vole;
    Spitsmuis|Shrew; Bosmuis|Wood mouse; Pad|Toad; Salamander; Slak|Snail; Naaktslak|Slug; Regenworm|Earthworm|Worm; Spin|Spider;
    Schorpioen|Scorpion; Duizendpoot|Centipede; Miljoenpoot|Millipede; Pissebed|Woodlouse; Teek|Tick; Mijt|Mite; Bloedzuiger|Leech;
    Orang-oetan|Orangutan; Gibbon; Wasbeer|Raccoon; Stinkdier|Skunk; Luiaard|Sloth; Miereneter|Anteater; Gordeldier|Armadillo; Tapir;
    Lama|Llama; Alpaca; Vicuña|Vicuna; Kameel|Camel; Dromedaris|Dromedary; Yak; Gems|Chamois; Steenbok|Ibex; Moeflon|Mouflon;
    Muskusos|Musk ox; Karper|Carp; Snoek|Pike; Baars|Perch; Forel|Trout; Brasem|Bream; Voorn|Roach; Zeelt|Tench; Meerval|Catfish|Wels;
    Steur|Sturgeon; Guppy; Piranha; Koi|Koi|Koikarper; Axolotl; Vogelbekdier|Platypus; Mierenegel|Echidna; Capibara|Capybara;
    Chinchilla; Gerbil|Gerbil|Woestijnrat; Degoe|Degu; Fret|Ferret; Neusbeer|Coati; Rode panda|Red panda|Kleine panda; Kinkajoe|Kinkajou;
    Spookdiertje|Tarsier; Lori|Loris; Poema|Puma|Cougar|Bergleeuw; Jaguar; Ocelot; Panter|Panther|Zwarte panter; Sneeuwluipaard|Snow leopard;
    Veelvraat|Wolverine; Ezel|Donkey; Muildier|Mule|Muilezel; Pony; Zwaan|Swan; Gans|Goose; Mus|Sparrow; Merel|Blackbird; Duif|Pigeon;
    Mier|Ant; Bij|Bee; Vlieg|Fly; Mug|Mosquito; Vlinder|Butterfly; Kever|Beetle; Rups|Caterpillar; Krab|Crab; Kreeft|Lobster; Garnaal|Shrimp|Prawn;
    Oester|Oyster; Mossel|Mussel; Inktvis|Octopus|Octopus; Kwal|Jellyfish; Zeester|Starfish; Zeehond|Seal; Walrus; Orka|Orca|Killer whale;
    Neushoorn|Rhinoceros|Rhino; Nijlpaard|Hippopotamus|Hippo; Gorilla; Chimpansee|Chimpanzee; Hyena; Cheeta|Cheetah; Luipaard|Leopard;
    Struisvogel|Ostrich; Emoe|Emu; Kiwi; Flamingo; Pelikaan|Pelican; Ooievaar|Stork; Reiger|Heron; Specht|Woodpecker; Kraai|Crow; Raaf|Raven;
    Ekster|Magpie; Meeuw|Gull|Seagull; Kalkoen|Turkey; Pauw|Peacock; Schildpad|Turtle|Tortoise; Hagedis|Lizard; Kameleon|Chameleon; Leguaan|Iguana;
    Gnoe|Wildebeest|Gnu; Okapi; Mangoest|Mongoose; Stokstaartje|Meerkat; Lemur; Bonobo; Mandril|Mandrill; Baviaan|Baboon; Gestreepte hyena|Striped hyena;
    Wombat; Wallaby; Buidelrat|Opossum|Possum; Tasmaanse duivel|Tasmanian devil; Dingo; Jakhals|Jackal; Coyote|Coyote|Prairiewolf;
    Vogelspin|Tarantula; Weduwespin|Black widow|Zwarte weduwe; Kruisspin|Garden spider; Hooiwagen|Harvestman|Daddy long-legs;
    Zeekomkommer|Sea cucumber; Zee-egel|Sea urchin; Zeepaardje|Seahorse; Rog|Ray; Paling|Eel|Aal; Zalm|Salmon; Tonijn|Tuna; Haring|Herring;
    Kabeljauw|Cod; Sardine|Sardine; Makreel|Mackerel; Ansjovis|Anchovy; Schol|Plaice; Tong|Sole; Zwaardvis|Swordfish; Barracuda; Murene|Moray eel;
    Clownvis|Clownfish; Kogelvis|Pufferfish; Maanvis|Sunfish; Narwal|Narwhal; Beluga; Bultrug|Humpback whale; Potvis|Sperm whale;
    Bruinvis|Porpoise; Zeekoe|Manatee; Zeeleeuw|Sea lion; Zeeotter|Sea otter; Keizerspinguïn|Emperor penguin;
    Vuurvlieg|Firefly; Libel|Dragonfly; Wesp|Wasp; Hommel|Bumblebee; Hoornaar|Hornet; Sprinkhaan|Grasshopper; Krekel|Cricket;
    Kakkerlak|Cockroach; Termiet|Termite; Mot|Moth; Vlo|Flea; Luis|Louse; Lieveheersbeestje|Ladybird|Ladybug; Oorwurm|Earwig;
    Bidsprinkhaan|Praying mantis; Wandelende tak|Stick insect; Zilvervisje|Silverfish; Mesttor|Dor beetle|Tor`);

  const COLOURS = B.parseAnswers(`
    Rood|Red; Blauw|Blue; Geel|Yellow; Groen|Green; Zwart|Black; Wit|White; Oranje|Orange; Paars|Purple; Roze|Pink; Bruin|Brown;
    Grijs|Grey|Gray; Beige; Turquoise|Turquoise|Turkoois; Goud|Gold|Goudkleurig; Zilver|Silver|Zilverkleurig; Lila|Lilac; Violet; Indigo;
    Bordeaux|Burgundy|Bordeauxrood; Magenta; Cyaan|Cyan; Oker|Ochre|Okergeel; Kaki|Khaki; Crème|Cream|Creme; Ivoor|Ivory|Ivoorwit;
    Zalmroze|Salmon|Zalm; Koraal|Coral|Koraalrood; Mintgroen|Mint|Mint green; Olijfgroen|Olive|Olijf; Marineblauw|Navy|Navy blue|Marine;
    Hemelsblauw|Sky blue; Babyblauw|Baby blue; Lichtblauw|Light blue; Donkerblauw|Dark blue; Kobaltblauw|Cobalt blue|Kobalt;
    Koningsblauw|Royal blue; Ultramarijn|Ultramarine; Azuur|Azure|Azuurblauw; Petrol|Teal|Petrolblauw; Smaragdgroen|Emerald|Emerald green;
    Jadegroen|Jade; Limoengroen|Lime|Limoen; Appelgroen|Apple green; Flessengroen|Bottle green; Legergroen|Army green;
    Scharlaken|Scarlet|Scharlakenrood; Karmijn|Carmine|Karmijnrood; Vermiljoen|Vermilion; Kersenrood|Cherry red; Robijnrood|Ruby red|Robijn;
    Wijnrood|Wine red; Roestbruin|Rust|Roest; Terracotta; Kastanjebruin|Chestnut|Kastanje; Chocoladebruin|Chocolate brown;
    Mahonie|Mahogany; Sepia; Taupe; Antraciet|Anthracite|Charcoal; Zandkleur|Sand|Zandkleurig; Champagne; Perzik|Peach|Perzikkleur;
    Abrikoos|Apricot; Mosterdgeel|Mustard|Mosterd; Citroengeel|Lemon yellow|Citroen; Kanariegeel|Canary yellow; Fuchsia; Lavendel|Lavender;
    Pruim|Plum; Aubergine; Mauve; Oudroze|Dusty pink|Old rose; Framboos|Raspberry; Albast|Alabaster; Parelmoer|Mother of pearl|Parel|Pearl;
    Brons|Bronze; Koper|Copper; Platina|Platinum; Messing|Brass; Magnolia; Vanille|Vanilla; Bruinrood|Maroon|Kastanjerood; Koffie|Coffee`);

  /* ── Lijsten samenstellen ────────────────────────────────── */
  // Antwoorden van een paar vragen samenvoegen (zonder dubbels), afwisselend op bekendheid
  function merge(...sources) {
    const items = [];
    sources.forEach(list => list.forEach((names, i) => items.push({ names, pos: (i + 0.5) / list.length })));
    items.sort((a, b) => a.pos - b.pos);
    const seenKeys = new Set(), out = [];
    items.forEach(({ names }) => {
      const keys = names.map(n => B.normalize(n)).filter(Boolean);
      if (!keys.length || keys.some(k => seenKeys.has(k))) return;
      keys.forEach(k => seenKeys.add(k));
      out.push(names);
    });
    return out;
  }
  const fromQ = id => (B.byId[id] ? B.byId[id].answers.map(e => e.names) : []);
  const qs = (...ids) => merge(...ids.map(fromQ));
  const capitals = () => B.COUNTRIES
    .flatMap(c => c.caps.map(cap => ({ fame: cap.fame, rank: c.rank, names: cap.names })))
    .sort((a, b) => b.fame - a.fame || a.rank - b.rank)
    .map(c => c.names);

  /* Lijst: [Nederlands, voornaamwoord (die/dat), Engels, hoe je de lijst maakt] */
  const BASES = {
    countries:   ['een land', 'dat', 'a country', () => B.COUNTRIES.map(c => c.names)],
    capitals:    ['een hoofdstad', 'die', 'a capital city', capitals],
    animals:     ['een dier', 'dat', 'an animal', () => merge(EXTRA_ANIMALS, fromQ('nature-farm-animals'), fromQ('nature-african-animals'), fromQ('nature-birds'),
                   fromQ('nature-sea-animals'), fromQ('nature-insects'), fromQ('nature-reptiles'), fromQ('nature-felines'), fromQ('nature-sea-mammals'),
                   fromQ('nature-raptors'), fromQ('nature-flightless'), fromQ('nature-marsupials'), fromQ('nature-sharks'), fromQ('nature-hibernation'))],
    birds:       ['een vogel', 'die', 'a bird', () => qs('nature-birds', 'nature-raptors', 'nature-flightless')],
    fruit:       ['een fruitsoort', 'die', 'a fruit', () => qs('nature-fruit')],
    vegetables:  ['een groente', 'die', 'a vegetable', () => qs('nature-vegetables')],
    jobs:        ['een beroep', 'dat', 'a job', () => qs('life-jobs')],
    body:        ['een lichaamsdeel', 'dat', 'a part of the body', () => qs('life-body', 'science-organs', 'science-bones')],
    instruments: ['een muziekinstrument', 'dat', 'a musical instrument', () => qs('culture-instruments-all', 'culture-orchestra', 'culture-strings', 'culture-wind')],
    sports:      ['een sport', 'die', 'a sport', () => qs('sport-ball-sports', 'sport-olympic-sports', 'sport-combat', 'sport-water-sports', 'sport-winter-sports', 'sport-racket-sports')],
    elements:    ['een scheikundig element', 'dat', 'a chemical element', () => qs('science-elements')],
    clothing:    ['een kledingstuk', 'dat', 'a piece of clothing', () => qs('life-clothing')],
    kitchen:     ['een keukengerei', 'dat', 'a kitchen utensil', () => qs('life-kitchen')],
    transport:   ['een vervoermiddel', 'dat', 'a means of transport', () => qs('life-transport')],
    tools:       ['een stuk gereedschap', 'dat', 'a tool', () => qs('life-tools')],
    furniture:   ['een meubelstuk', 'dat', 'a piece of furniture', () => qs('life-furniture')],
    usstates:    ['een staat van de VS', 'die', 'a US state', () => qs('earth-us-states')],
    flowers:     ['een bloem', 'die', 'a flower', () => qs('nature-flowers')],
    trees:       ['een boomsoort', 'die', 'a type of tree', () => qs('nature-trees')],
    colours:     ['een kleur', 'die', 'a colour', () => COLOURS],
    desserts:    ['een dessert', 'dat', 'a dessert', () => qs('nature-desserts')],
    sauces:      ['een saus', 'die', 'a sauce', () => qs('nature-sauces')],
    cheeses:     ['een kaassoort', 'die', 'a type of cheese', () => qs('nature-cheese')],
    herbs:       ['een kruid of specerij', 'dat', 'a herb or spice', () => qs('nature-herbs')],
    hobbies:     ['een hobby', 'die', 'a hobby', () => qs('life-hobbies')],
    dinosaurs:   ['een dinosaurus', 'die', 'a dinosaur', () => qs('science-dinosaurs')],
    cartoons:    ['een tekenfilmfiguur', 'die', 'a cartoon character', () => qs('culture-cartoons')],
    superheroes: ['een superheld', 'die', 'a superhero', () => qs('culture-superheroes')],
    creatures:   ['een fabeldier of fantasiewezen', 'dat', 'a mythical creature', () => qs('culture-fantasy-creatures')],
    rivers:      ['een rivier in Europa', 'die', 'a river in Europe', () => qs('earth-rivers-europe')],
    emotions:    ['een gevoel', 'dat', 'a feeling', () => qs('life-emotions')],
    dogs:        ['een hondenras', 'dat', 'a dog breed', () => qs('nature-dogs')],
    pasta:       ['een pastasoort', 'die', 'a type of pasta', () => qs('nature-pasta')]
  };
  B.LETTER_BASES = BASES;

  /* ── De vraagtekst ───────────────────────────────────────── */
  const vowelSound = x => 'aefhilmnorsx'.includes(x);
  function texts(base, type, v) {
    const [nl, pron, en] = BASES[base];
    const X = String(v).toUpperCase();
    switch (type) {
      case 'starts': return [`Noem ${nl} ${pron} begint met een ${X}`, `Name ${en} that starts with ${X}`];
      case 'contains': return [`Noem ${nl} met een ${X} in de naam`, `Name ${en} with ${vowelSound(v) ? 'an' : 'a'} ${X} in its name`];
      case 'ends': return [`Noem ${nl} ${pron} eindigt op een ${X}`, `Name ${en} that ends in ${X}`];
      case 'len': return [`Noem ${nl} van ${v} letters`, `Name ${en} with ${v} letters`];
      default: return [`Noem ${nl} met een dubbele letter (zoals aa, ee of oo)`, `Name ${en} with a double letter (like ee or oo)`];
    }
  }

  /* ── De vragen ───────────────────────────────────────────── */
  // BEGIN SPECS (gemaakt door tools/pick-letters.mjs)
  const SPECS = [
    ['animals', 'starts', 'w', 1],
    ['capitals', 'len', 6, 1],
    ['sports', 'starts', 's', 1],
    ['rivers', 'len', 5, 1],
    ['tools', 'starts', 's', 1],
    ['countries', 'len', 6, 1],
    ['body', 'len', 4, 1],
    ['dinosaurs', 'starts', 'a', 1],
    ['colours', 'len', 5, 1],
    ['dogs', 'starts', 'b', 1],
    ['fruit', 'double', null, 1],
    ['birds', 'double', null, 1],
    ['sauces', 'starts', 'b', 1],
    ['clothing', 'len', 6, 1],
    ['instruments', 'len', 5, 1],
    ['cartoons', 'contains', 'y', 1],
    ['desserts', 'starts', 'c', 1],
    ['superheroes', 'starts', 'b', 1],
    ['furniture', 'starts', 's', 1],
    ['herbs', 'starts', 'p', 1],
    ['elements', 'len', 6, 1],
    ['jobs', 'starts', 'p', 1],
    ['cheeses', 'starts', 'c', 2],
    ['vegetables', 'starts', 'b', 2],
    ['kitchen', 'starts', 's', 1],
    ['creatures', 'len', 5, 1],
    ['transport', 'starts', 's', 1],
    ['flowers', 'starts', 'l', 2],
    ['usstates', 'starts', 'm', 1],
    ['pasta', 'starts', 't', 2],
    ['hobbies', 'starts', 's', 2],
    ['trees', 'contains', 'k', 1],
    ['animals', 'starts', 's', 1],
    ['countries', 'len', 5, 1],
    ['capitals', 'starts', 'b', 1],
    ['jobs', 'starts', 'b', 2],
    ['animals', 'len', 4, 1],
    ['sports', 'starts', 'b', 1],
    ['body', 'starts', 'h', 1],
    ['countries', 'starts', 'b', 2],
    ['instruments', 'starts', 't', 1],
    ['fruit', 'starts', 'p', 1],
    ['animals', 'len', 5, 1],
    ['birds', 'len', 4, 1],
    ['vegetables', 'starts', 'c', 1],
    ['elements', 'starts', 'c', 2],
    ['capitals', 'starts', 'l', 1],
    ['clothing', 'starts', 's', 1],
    ['dogs', 'starts', 'p', 2],
    ['countries', 'starts', 's', 2],
    ['jobs', 'len', 6, 1],
    ['flowers', 'double', null, 1],
    ['transport', 'len', 5, 1],
    ['colours', 'len', 6, 2],
    ['kitchen', 'contains', 'f', 3],
    ['animals', 'len', 6, 1],
    ['sports', 'starts', 'k', 1],
    ['cartoons', 'starts', 's', 1],
    ['cheeses', 'starts', 'm', 2],
    ['hobbies', 'double', null, 1],
    ['body', 'starts', 's', 1],
    ['animals', 'starts', 'k', 1],
    ['dinosaurs', 'starts', 's', 1],
    ['rivers', 'len', 4, 1],
    ['capitals', 'starts', 'm', 2],
    ['superheroes', 'starts', 's', 2],
    ['countries', 'starts', 'c', 2],
    ['sauces', 'starts', 'c', 2],
    ['usstates', 'starts', 'n', 2],
    ['creatures', 'len', 6, 2],
    ['tools', 'contains', 'k', 2],
    ['desserts', 'contains', 'f', 2],
    ['fruit', 'len', 6, 1],
    ['instruments', 'double', null, 1],
    ['jobs', 'contains', 'k', 1],
    ['animals', 'contains', 'w', 1],
    ['sports', 'len', 6, 1],
    ['birds', 'contains', 'w', 1],
    ['herbs', 'len', 6, 1],
    ['vegetables', 'starts', 's', 2],
    ['elements', 'starts', 'n', 3],
    ['trees', 'len', 5, 2],
    ['furniture', 'double', null, 2],
    ['countries', 'starts', 'i', 1],
    ['capitals', 'contains', 'k', 1],
    ['body', 'len', 5, 1],
    ['animals', 'contains', 'k', 1],
    ['dogs', 'contains', 'k', 1],
    ['clothing', 'len', 5, 1],
    ['countries', 'starts', 'm', 3],
    ['flowers', 'starts', 'p', 2],
    ['jobs', 'starts', 'a', 3],
    ['colours', 'starts', 'm', 3],
    ['transport', 'double', null, 1],
    ['animals', 'starts', 'm', 1],
    ['sports', 'starts', 't', 1],
    ['fruit', 'len', 5, 1],
    ['instruments', 'starts', 'b', 2],
    ['capitals', 'starts', 'a', 2],
    ['cartoons', 'starts', 'p', 1],
    ['cheeses', 'starts', 'r', 2],
    ['hobbies', 'len', 6, 2],
    ['countries', 'starts', 'a', 2],
    ['animals', 'starts', 'h', 1],
    ['birds', 'starts', 'p', 1],
    ['vegetables', 'starts', 'p', 2],
    ['elements', 'starts', 't', 3],
    ['body', 'starts', 'b', 2],
    ['jobs', 'starts', 's', 3],
    ['animals', 'len', 3, 1],
    ['sports', 'contains', 'w', 1],
    ['dinosaurs', 'contains', 'y', 1],
    ['rivers', 'starts', 'm', 1],
    ['capitals', 'starts', 'p', 2],
    ['sauces', 'starts', 's', 2],
    ['countries', 'starts', 'g', 3],
    ['pasta', 'starts', 'c', 2],
    ['superheroes', 'starts', 'h', 3],
    ['creatures', 'starts', 'k', 3],
    ['usstates', 'contains', 'w', 2],
    ['instruments', 'starts', 'c', 2],
    ['fruit', 'starts', 'm', 2],
    ['animals', 'starts', 'b', 1],
    ['clothing', 'starts', 't', 2],
    ['dogs', 'starts', 'c', 2],
    ['countries', 'starts', 'n', 2],
    ['flowers', 'len', 5, 2],
    ['jobs', 'starts', 'm', 3],
    ['colours', 'double', null, 2],
    ['transport', 'contains', 'k', 2],
    ['body', 'starts', 'a', 3],
    ['capitals', 'len', 5, 1],
    ['animals', 'starts', 'g', 1],
    ['birds', 'starts', 's', 2],
    ['sports', 'starts', 'i', 3],
    ['herbs', 'double', null, 1],
    ['vegetables', 'len', 6, 2],
    ['elements', 'starts', 'r', 3],
    ['furniture', 'contains', 'f', 1],
    ['countries', 'starts', 'p', 2],
    ['cartoons', 'contains', 'k', 1],
    ['cheeses', 'starts', 'b', 2],
    ['hobbies', 'contains', 'k', 2],
    ['animals', 'starts', 'p', 1],
    ['jobs', 'contains', 'w', 3],
    ['capitals', 'starts', 's', 2],
    ['instruments', 'starts', 's', 3],
    ['fruit', 'starts', 'b', 3],
    ['countries', 'contains', 'k', 1],
    ['body', 'starts', 't', 3],
    ['animals', 'starts', 'c', 1],
    ['sports', 'starts', 'p', 3],
    ['animals', 'starts', 'l', 1],
    ['dinosaurs', 'starts', 't', 2],
    ['rivers', 'starts', 's', 2],
    ['sauces', 'starts', 't', 2],
    ['birds', 'starts', 'b', 2],
    ['capitals', 'starts', 'c', 2],
    ['clothing', 'starts', 'b', 2],
    ['dogs', 'starts', 's', 2],
    ['superheroes', 'contains', 'k', 2],
    ['flowers', 'starts', 's', 3],
    ['creatures', 'contains', 'k', 2],
    ['countries', 'starts', 't', 3],
    ['vegetables', 'starts', 'r', 3],
    ['elements', 'double', null, 2],
    ['animals', 'contains', 'v', 1],
    ['sports', 'starts', 'w', 2],
    ['body', 'starts', 'm', 3],
    ['countries', 'starts', 'l', 3],
    ['instruments', 'starts', 'd', 2],
    ['fruit', 'starts', 'c', 3],
    ['capitals', 'starts', 't', 3],
    ['animals', 'starts', 'o', 1],
    ['cartoons', 'starts', 'b', 2],
    ['cheeses', 'starts', 'p', 2],
    ['hobbies', 'starts', 'b', 3],
    ['countries', 'starts', 'e', 3],
    ['animals', 'starts', 'e', 1],
    ['birds', 'starts', 'm', 3],
    ['sports', 'contains', 'y', 2],
    ['herbs', 'starts', 's', 3],
    ['vegetables', 'contains', 'k', 2],
    ['capitals', 'starts', 'd', 3],
    ['body', 'starts', 'p', 3],
    ['clothing', 'contains', 'k', 1],
    ['dogs', 'len', 6, 2],
    ['flowers', 'starts', 'b', 3],
    ['countries', 'contains', 'z', 2],
    ['animals', 'starts', 'd', 1],
    ['instruments', 'contains', 'k', 1],
    ['fruit', 'starts', 's', 3],
    ['animals', 'starts', 'a', 2],
    ['dinosaurs', 'starts', 'c', 2],
    ['rivers', 'starts', 't', 2],
    ['pasta', 'starts', 's', 3],
    ['sauces', 'starts', 'a', 2],
    ['capitals', 'contains', 'w', 2],
    ['superheroes', 'contains', 'w', 2],
    ['sports', 'starts', 'r', 3],
    ['creatures', 'double', null, 1],
    ['countries', 'contains', 'v', 3],
    ['body', 'contains', 'v', 2],
    ['animals', 'starts', 't', 1],
    ['birds', 'starts', 'g', 3],
    ['vegetables', 'contains', 'w', 3],
    ['countries', 'contains', 'w', 3],
    ['cartoons', 'starts', 'm', 2],
    ['cheeses', 'starts', 's', 3],
    ['hobbies', 'contains', 'w', 2],
    ['capitals', 'starts', 'k', 3],
    ['instruments', 'starts', 'g', 3],
    ['fruit', 'len', 4, 2],
    ['animals', 'contains', 'f', 1],
    ['clothing', 'len', 4, 2],
    ['dogs', 'starts', 'a', 3],
    ['flowers', 'starts', 'g', 3],
    ['countries', 'len', 4, 3],
    ['animals', 'starts', 'r', 1],
    ['body', 'len', 6, 3],
    ['capitals', 'len', 4, 3],
    ['countries', 'double', null, 3],
    ['animals', 'starts', 'f', 1],
    ['birds', 'len', 6, 2],
    ['sports', 'len', 5, 3],
    ['instruments', 'len', 4, 2],
    ['fruit', 'starts', 'l', 3],
    ['dinosaurs', 'starts', 'd', 1],
    ['animals', 'contains', 'z', 1],
    ['rivers', 'starts', 'd', 2],
    ['capitals', 'starts', 'n', 3],
    ['superheroes', 'starts', 'm', 3],
    ['sauces', 'double', null, 2],
    ['body', 'contains', 'k', 2],
    ['cartoons', 'len', 5, 2],
    ['cheeses', 'contains', 'z', 2],
    ['animals', 'contains', 'y', 1],
    ['sports', 'contains', 'v', 3],
    ['dogs', 'starts', 'm', 3],
    ['flowers', 'len', 6, 3],
    ['clothing', 'double', null, 2],
    ['capitals', 'double', null, 3],
    ['animals', 'starts', 'n', 3],
    ['birds', 'starts', 'r', 3],
    ['instruments', 'starts', 'h', 2],
    ['fruit', 'contains', 'k', 2],
    ['body', 'contains', 'f', 3],
    ['sports', 'contains', 'j', 3],
    ['capitals', 'contains', 'j', 3],
    ['desserts', 'starts', 'p', 1]
  ];
  // END SPECS

  const cache = {};
  B.LETTER_SPECS = SPECS;
  B.letterQuestion = (base, type, v) => {
    const [nl, en] = texts(base, type, v);
    if (!cache[base]) cache[base] = BASES[base][3]();
    return { id: `${base}-${type}${v == null ? '' : '-' + v}`, base, rule: { type, v }, nl, en, a: cache[base] };
  };
  B.addQuestions('letters', SPECS.map(([base, type, v, lvl]) => Object.assign(B.letterQuestion(base, type, v), { lvl })));
})(typeof window !== 'undefined' ? window : globalThis);
