/* Brillion · natuur
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam. */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('nature', [
    { id: 'dogs', nl: 'Noem een hondenras', en: 'Name a dog breed', a: `
      Labrador|Labrador Retriever; Golden retriever|Golden Retriever|Golden; Duitse herder|German Shepherd|Herdershond|Alsatian; Chihuahua;
      Husky|Siberian Husky|Siberische husky; Bulldog|Bulldog|Engelse bulldog|English Bulldog; Franse bulldog|French Bulldog|Frenchie;
      Poedel|Poodle; Teckel|Dachshund|Worsthond|Tekkel; Mopshond|Pug|Mops; Beagle; Border collie|Border Collie; Rottweiler;
      Dalmatiër|Dalmatian|Dalmatier; Jack Russell|Jack Russell Terrier; Yorkshire terriër|Yorkshire Terrier|Yorkie|Yorkshire;
      Pitbull|Pit Bull|American Pit Bull Terrier|Pitbullterriër; Dobermann|Dobermann|Doberman|Dobermannpinscher; Boxer;
      Sint-Bernard|St. Bernard|Saint Bernard|Sint-Bernardshond; Duitse dog|Great Dane|Deense dog; Shih tzu|Shih Tzu;
      Mechelse herder|Malinois|Belgian Malinois|Mechelaar; Cocker spaniël|Cocker Spaniel|Cocker; Maltezer|Maltese; Bichon frisé|Bichon Frise|Bichon;
      Akita|Akita Inu; Shiba inu|Shiba Inu|Shiba; Chow chow|Chow Chow; Corgi|Welsh Corgi|Pembroke Welsh Corgi; Collie|Rough Collie|Lassie;
      Berner sennenhond|Bernese Mountain Dog|Berner; Newfoundlander|Newfoundland; Samojeed|Samoyed; Alaskan malamute|Alaskan Malamute|Malamute;
      Shar-pei|Shar Pei|Sharpei; Basset|Basset Hound|Basset hound; Bloedhond|Bloodhound|Sint-Hubertushond; Greyhound|Greyhound|Engelse windhond;
      Whippet; Afghaanse windhond|Afghan Hound; Weimaraner; Vizsla|Hungarian Vizsla; Bullterriër|Bull Terrier;
      Staffordshire bullterriër|Staffordshire Bull Terrier|Staffy|Stafford; American Staffordshire terriër|American Staffordshire Terrier|Amstaff;
      Cane corso|Cane Corso; Mastiff|English Mastiff; Napolitaanse mastiff|Neapolitan Mastiff|Mastino Napoletano;
      Bordeauxdog|Dogue de Bordeaux|French Mastiff|Bordeaux dog; Leonberger; Pyrenese berghond|Great Pyrenees|Pyrenean Mountain Dog|Patou;
      Grote Zwitserse sennenhond|Greater Swiss Mountain Dog; Appenzeller sennenhond|Appenzeller Sennenhund|Appenzeller;
      Entlebucher sennenhond|Entlebucher Mountain Dog|Entlebucher; Australische herder|Australian Shepherd|Aussie;
      Shetland sheepdog|Shetland Sheepdog|Sheltie; Oude Engelse herder|Old English Sheepdog|Bobtail;
      Bouvier des Flandres|Bouvier des Flandres|Vlaamse koehond|Bouvier; Groenendaeler|Groenendael|Belgian Sheepdog;
      Tervuerense herder|Tervuren|Belgian Tervuren|Tervurense herder; Laekense herder|Laekenois|Belgian Laekenois; Schipperke;
      Brusselse griffon|Brussels Griffon|Griffon bruxellois; Belgische griffon|Belgian Griffon; Petit brabançon|Petit Brabancon;
      Kooikerhondje; Stabyhoun; Wetterhoun; Drentsche patrijshond|Drentsche Patrijshond; Saarlooswolfhond|Saarloos Wolfdog;
      Hollandse herder|Dutch Shepherd; Keeshond|Keeshond|Wolfskeeshond; Hollandse smoushond|Dutch Smoushond|Smoushond; Markiesje;
      Pekingees|Pekingese; Lhasa apso|Lhasa Apso; Tibetaanse terriër|Tibetan Terrier; Tibetaanse mastiff|Tibetan Mastiff;
      Tibetaanse spaniël|Tibetan Spaniel; Japanse spaniël|Japanese Chin; Chinese naakthond|Chinese Crested;
      Papillon|Papillon|Vlinderhondje; Pommeriaan|Pomeranian|Dwergkees|Pommer; Dwergpinscher|Miniature Pinscher|Min Pin;
      Pinscher|German Pinscher|Duitse pinscher; Schnauzer|Schnauzer|Middenslag schnauzer; Dwergschnauzer|Miniature Schnauzer;
      Reuzenschnauzer|Giant Schnauzer; Affenpinscher; West Highland white terriër|West Highland White Terrier|Westie;
      Schotse terriër|Scottish Terrier|Scottie; Cairn terriër|Cairn Terrier; Airedale terriër|Airedale Terrier|Airedale;
      Foxterriër|Fox Terrier|Foxterrier; Border terriër|Border Terrier; Bedlington terriër|Bedlington Terrier; Ierse wolfshond|Irish Wolfhound;
      Ierse setter|Irish Setter|Rode setter; Engelse setter|English Setter; Gordon setter|Gordon Setter; Pointer|English Pointer;
      Duitse staande|German Shorthaired Pointer|Duitse staande korthaar|Duitse staande draadhaar; Springer spaniël|English Springer Spaniel|Springer;
      Cavalier King Charles|Cavalier King Charles Spaniel|Cavalier; King Charles spaniël|King Charles Spaniel;
      Épagneul breton|Brittany|Bretonse spaniël|Brittany Spaniel; Flatcoated retriever|Flat-Coated Retriever|Flatcoat;
      Chesapeake Bay retriever|Chesapeake Bay Retriever; Nova Scotia duck tolling retriever|Nova Scotia Duck Tolling Retriever|Toller;
      Portugese waterhond|Portuguese Water Dog; Spaanse waterhond|Spanish Water Dog; Lagotto romagnolo|Lagotto Romagnolo; Barbet;
      Havanezer|Havanese|Bichon havanais; Coton de Tuléar|Coton de Tulear; Bolognezer|Bolognese; Löwchen|Lowchen|Leeuwhondje;
      Italiaans windhondje|Italian Greyhound; Saluki; Sloughi; Azawakh; Barzoi|Borzoi|Russische windhond; Basenji;
      Rhodesian ridgeback|Rhodesian Ridgeback|Ridgeback; Faraohond|Pharaoh Hound; Podenco ibicenco|Ibizan Hound;
      Xoloitzcuintle|Xoloitzcuintli|Xolo|Mexicaanse naakthond; Peruaanse naakthond|Peruvian Hairless Dog; Shikoku; Kai ken; Kishu;
      Hokkaido|Hokkaido dog; Jindo|Korean Jindo; Tosa|Tosa Inu; Amerikaanse akita|American Akita; Kangal; Anatolische herder|Anatolian Shepherd;
      Kaukasische herder|Caucasian Shepherd|Ovcharka; Centraal-Aziatische herder|Central Asian Shepherd|Alabai; Komondor; Puli; Pumi; Mudi; Kuvasz;
      Tatrahond|Tatra Shepherd Dog|Podhalaanse herder; Bergamasco|Bergamasco Shepherd|Bergamasker herder; Maremmano|Maremma Sheepdog;
      Briard; Beauceron; Picardische herder|Berger Picard; Pyrenese herder|Pyrenean Shepherd; Catalaanse herder|Catalan Sheepdog|Gos d'Atura;
      Bouvier des Ardennes|Bouvier des Ardennes|Ardense koehond; Schapendoes; Australische cattle dog|Australian Cattle Dog|Blue Heeler|Heeler;
      Kelpie|Australian Kelpie; Zweedse vallhund|Swedish Vallhund; Noorse elandhond|Norwegian Elkhound; Finse spits|Finnish Spitz;
      Finse lappenhond|Finnish Lapphund|Lapphund; IJslandse hond|Icelandic Sheepdog; Duitse spits|German Spitz|Spitz; Japanse spits|Japanese Spitz;
      Eurasier; Amerikaanse eskimohond|American Eskimo Dog; Labradoodle; Goldendoodle; Cockapoo|Cockapoo|Cockerpoo; Maltipoo; Pomsky;
      Puggle; Cavapoo; Bernedoodle; Wolfhond|Wolfdog|Tsjechoslowaakse wolfhond|Czechoslovakian Wolfdog` },
    { id: 'cats', nl: 'Noem een kattenras', en: 'Name a cat breed', a: `
      Pers|Persian|Perzische kat; Siamees|Siamese|Siamese kat; Maine coon|Maine Coon; Brits korthaar|British Shorthair; Sfinx|Sphynx|Naaktkat;
      Ragdoll; Bengaal|Bengal|Bengaalse kat; Noorse boskat|Norwegian Forest Cat; Scottish fold|Scottish Fold; Heilige Birmaan|Birman|Birmaan;
      Abessijn|Abyssinian; Russisch blauw|Russian Blue; Savannah; Siberische kat|Siberian|Siberian cat; Devon rex|Devon Rex; Cornish rex|Cornish Rex;
      Exotische korthaar|Exotic Shorthair|Exotic; Turkse angora|Turkish Angora|Angora; Turkse van|Turkish Van; Burmees|Burmese;
      Europese korthaar|European Shorthair; Amerikaanse korthaar|American Shorthair; Oriëntaal|Oriental Shorthair|Oriental; Ragamuffin;
      Manx; Egyptische mau|Egyptian Mau; Bombay; Chartreux|Chartreux|Karthuizer; Korat; Somali; Ocicat; Balinees|Balinese; Javaan|Javanese;
      Himalayan|Himalayan|Himalaya|Colourpoint; Toyger; Singapura; Tonkinees|Tonkinese; LaPerm; Selkirk rex|Selkirk Rex;
      American curl|American Curl; Japanse stompstaart|Japanese Bobtail; Amerikaanse bobtail|American Bobtail; Pixie-bob|Pixiebob;
      Chausie; Lykoi; Munchkin; Nebelung; Snowshoe; Havana|Havana Brown; Burmilla; Bambino; Peterbald; Donskoy|Donskoy|Don Sphynx;
      Kurilian bobtail|Kurilian Bobtail; Sokoke; Cymric; Khao manee|Khao Manee; Thai|Thai cat; Mekong bobtail|Mekong Bobtail; Ojos azules;
      Serengeti; Highlander; York chocolate; Australian mist; Duitse rex|German Rex; Ural rex; Minskin; Napoleon|Minuet` },
    { id: 'felines', nl: 'Noem een katachtige (wild of tam)', en: 'Name a member of the cat family (wild or domestic)', a: `
      Leeuw|Lion; Tijger|Tiger; Luipaard|Leopard; Jaguar; Cheeta|Cheetah|Jachtluipaard; Poema|Puma|Cougar|Mountain lion|Bergleeuw;
      Lynx|Lynx|Los; Sneeuwluipaard|Snow leopard|Sneeuwpanter; Panter|Panther|Zwarte panter|Black panther; Huiskat|Domestic cat|Kat|Cat|Poes;
      Ocelot; Serval; Caracal|Caracal|Woestijnlynx; Nevelpanter|Clouded leopard; Wilde kat|Wildcat|Wildkat|Europese wilde kat; Rode lynx|Bobcat;
      Iberische lynx|Iberian lynx|Pardellynx; Canadese lynx|Canada lynx; Manoel|Pallas's cat|Manul|Pallaskat; Zandkat|Sand cat|Woestijnkat;
      Margay|Margay|Langstaartkat; Jaguarundi|Jaguarundi|Wezelkat; Viskat|Fishing cat|Visvangende kat; Afrikaanse goudkat|African golden cat|Goudkat;
      Aziatische goudkat|Asian golden cat|Temmincks kat; Marmerkat|Marbled cat; Bengaalse tijgerkat|Leopard cat|Luipaardkat;
      Roestkat|Rusty-spotted cat; Zwartvoetkat|Black-footed cat; Rietkat|Jungle cat|Moeraslynx; Andeskat|Andean mountain cat;
      Pampaskat|Pampas cat; Geoffroy's kat|Geoffroy's cat|Geoffroykat; Kodkod|Kodkod|Guigna; Oncilla|Oncilla|Kleine tijgerkat;
      Borneose goudkat|Bay cat|Borneo bay cat; Platkopkat|Flat-headed cat; Chinese bergkat|Chinese mountain cat|Gobikat;
      Amoerpanter|Amur leopard; Siberische tijger|Siberian tiger|Amoertijger|Amur tiger; Bengaalse tijger|Bengal tiger; Witte tijger|White tiger;
      Liger; Tijgon|Tigon; Sabeltandtijger|Smilodon|Sabre-toothed cat|Sabeltandkat; Holenleeuw|Cave lion; Aziatische leeuw|Asiatic lion;
      Berberleeuw|Barbary lion` },
    { id: 'sea-mammals', nl: 'Noem een zoogdier dat in de zee leeft', en: 'Name a mammal that lives in the sea', a: `
      Dolfijn|Dolphin; Walvis|Whale; Zeehond|Seal|Rob; Orka|Orca|Killer whale|Zwaardwalvis; Zeeleeuw|Sea lion; Walrus;
      Bultrug|Humpback whale|Bultrugwalvis; Blauwe vinvis|Blue whale|Blauwe walvis; Potvis|Sperm whale; Narwal|Narwhal;
      Beluga|Beluga|Witte dolfijn|White whale; Bruinvis|Harbour porpoise|Porpoise; Tuimelaar|Bottlenose dolphin; Zeekoe|Manatee|Lamantijn;
      Doejong|Dugong; Zeeotter|Sea otter; IJsbeer|Polar bear; Zeeolifant|Elephant seal; Grijze zeehond|Grey seal|Grijze rob;
      Gewone zeehond|Harbour seal|Common seal; Pelsrob|Fur seal; Monniksrob|Monk seal; Klapmuts|Hooded seal; Zadelrob|Harp seal;
      Baardrob|Bearded seal; Ringelrob|Ringed seal; Luipaardrob|Leopard seal|Zeeluipaard; Weddellzeehond|Weddell seal; Krabbeneter|Crabeater seal;
      Noordkaper|North Atlantic right whale|Right whale; Groenlandse walvis|Bowhead whale; Grijze walvis|Gray whale|Grey whale;
      Gewone vinvis|Fin whale|Vinvis; Dwergvinvis|Minke whale; Noordse vinvis|Sei whale; Brydevinvis|Bryde's whale; Griend|Pilot whale|Grienden;
      Butskop|Northern bottlenose whale; Spitssnuitdolfijn|Beaked whale; Dwergpotvis|Pygmy sperm whale; Witflankdolfijn|Atlantic white-sided dolphin;
      Witsnuitdolfijn|White-beaked dolphin; Gewone dolfijn|Common dolphin; Gestreepte dolfijn|Striped dolphin; Grijze dolfijn|Risso's dolphin;
      Spinnerdolfijn|Spinner dolphin; Vaquita|Vaquita|Californische bruinvis; Dalls bruinvis|Dall's porpoise; Hectordolfijn|Hector's dolphin;
      Stellers zeekoe|Steller's sea cow; Stellers zeeleeuw|Steller sea lion; Californische zeeleeuw|California sea lion;
      Galápagoszeeleeuw|Galapagos sea lion` },
    { id: 'flightless', nl: 'Noem een vogel die niet kan vliegen', en: 'Name a bird that cannot fly', a: `
      Pinguïn|Penguin|Pinguin; Struisvogel|Ostrich; Emoe|Emu; Kiwi; Dodo; Kasuaris|Cassowary; Nandoe|Rhea|Nandu; Kakapo;
      Keizerspinguïn|Emperor penguin; Koningspinguïn|King penguin; Takahe; Weka; Moa; Reuzenalk|Great auk; Olifantsvogel|Elephant bird;
      Galápagosaalscholver|Flightless cormorant|Galapagos cormorant; Booteend|Steamer duck; Adeliepinguïn|Adélie penguin|Adelie penguin;
      Ezelspinguïn|Gentoo penguin; Humboldtpinguïn|Humboldt penguin; Magelhaenpinguïn|Magellanic penguin;
      Zwartvoetpinguïn|African penguin|Brilpinguïn|Jackass penguin; Galápagospinguïn|Galapagos penguin;
      Dwergpinguïn|Little penguin|Blue penguin|Fairy penguin; Geeloogpinguïn|Yellow-eyed penguin; Rotspinguïn|Rockhopper penguin;
      Macaronipinguïn|Macaroni penguin; Kinbandpinguïn|Chinstrap penguin; Aucklandtaling|Auckland teal; Campbelltaling|Campbell teal;
      Inaccessible-ral|Inaccessible Island rail; Schrikvogel|Terror bird|Phorusrhacos; Rodriguessolitaire|Rodrigues solitaire|Solitaire` },
    { id: 'marsupials', nl: 'Noem een buideldier (of een ander dier met een buidel)', en: 'Name a marsupial (or another animal with a pouch)', a: `
      Kangoeroe|Kangaroo; Koala; Wombat; Wallaby; Opossum|Opossum|Buidelrat; Tasmaanse duivel|Tasmanian devil; Quokka;
      Suikereekhoorn|Sugar glider|Suikerbuideleekhoorn; Buidelwolf|Thylacine|Tasmaanse tijger|Tasmanian tiger; Koeskoes|Cuscus;
      Possum|Possum|Koesoe|Brushtail possum; Bandicoot|Bandicoot|Buideldas; Numbat|Numbat|Buidelmiereneter; Buidelmarter|Quoll|Kwol;
      Boomkangoeroe|Tree-kangaroo; Pademelon; Potoroe|Potoroo|Ratkangoeroe|Rat-kangaroo; Bilby|Bilby|Konijnbuideldas; Wallaroe|Wallaroo;
      Buidelmol|Marsupial mole; Dunnart; Breedvoetbuidelmuis|Antechinus; Honingbuideldier|Honey possum; Rode reuzenkangoeroe|Red kangaroo;
      Oostelijke grijze reuzenkangoeroe|Eastern grey kangaroo; Buidelmuis|Marsupial mouse; Monito del monte; Zeepaardje|Seahorse;
      Mierenegel|Echidna; Vederstaartbuidelmuis|Feathertail glider; Kowari; Kultarr; Mulgara; Planigale; Phascogale|Phascogale|Tuan;
      Bettong; Rotswallaby|Rock-wallaby; Diprotodon; Buidelleeuw|Marsupial lion|Thylacoleo; Waterbuidelrat|Water opossum|Yapok` },
    { id: 'trees', nl: 'Noem een boomsoort', en: 'Name a type of tree', a: `
      Eik|Oak; Den|Pine|Dennenboom; Berk|Birch; Beuk|Beech; Spar|Spruce|Fijnspar|Sparrenboom; Wilg|Willow; Treurwilg|Weeping willow;
      Esdoorn|Maple; Kastanje|Chestnut|Tamme kastanje; Paardenkastanje|Horse chestnut; Populier|Poplar; Linde|Lime tree|Linden|Basswood;
      Appelboom|Apple tree; Palmboom|Palm tree|Palm; Kerselaar|Cherry tree|Kersenboom; Es|Ash; Iep|Elm|Olm; Lork|Larch|Lariks; Ceder|Cedar;
      Taxus|Yew|Venijnboom; Hulst|Holly; Plataan|Plane tree|Plane; Magnolia; Olijfboom|Olive tree; Baobab|Baobab|Apenbroodboom;
      Sequoia|Redwood|Mammoetboom|Giant sequoia; Eucalyptus|Eucalyptus|Gum tree; Notelaar|Walnut tree|Walnotenboom|Noteboom;
      Hazelaar|Hazel; Els|Alder; Haagbeuk|Hornbeam; Lijsterbes|Rowan|Mountain ash; Vlier|Elder; Meidoorn|Hawthorn; Sleedoorn|Blackthorn;
      Acacia|Acacia; Robinia|Black locust|Valse acacia; Ginkgo|Ginkgo|Japanse notenboom; Kurkeik|Cork oak; Steeneik|Holm oak;
      Zomereik|English oak|Pedunculate oak; Wintereik|Sessile oak; Amerikaanse eik|Red oak|Rode eik; Grove den|Scots pine;
      Zwarte den|Black pine|Oostenrijkse den; Parasolden|Stone pine|Umbrella pine; Zilverspar|Silver fir|Fir; Nordmannspar|Nordmann fir|Kerstboom;
      Douglasspar|Douglas fir; Blauwspar|Blue spruce|Colorado spruce; Hemlockspar|Hemlock|Tsuga; Cipres|Cypress; Moerascipres|Bald cypress|Swamp cypress;
      Watercipres|Dawn redwood|Metasequoia; Jeneverbes|Juniper; Thuja|Thuja|Levensboom|Arborvitae; Apenboom|Monkey puzzle|Araucaria|Slangenden;
      Kauri; Mahonie|Mahogany; Teak|Teak|Djati; Ebbenhout|Ebony; Balsa; Rubberboom|Rubber tree; Kapokboom|Kapok|Ceiba; Mangrove;
      Banyan|Banyan|Waringin; Vijgenboom|Fig tree; Jacaranda; Flamboyant|Flame tree|Royal poinciana; Japanse kers|Japanese cherry|Sakura;
      Perelaar|Pear tree|Perenboom; Pruimelaar|Plum tree|Pruimenboom; Perzikboom|Peach tree; Citroenboom|Lemon tree;
      Sinaasappelboom|Orange tree|Appelsienboom; Amandelboom|Almond tree; Mangoboom|Mango tree; Kokospalm|Coconut palm; Dadelpalm|Date palm;
      Drakenbloedboom|Dragon tree|Dragon's blood tree; Joshua tree|Joshua tree|Joshuaboom; Ratelpopulier|Aspen|Esp; Tulpenboom|Tulip tree;
      Amberboom|Sweetgum|Liquidambar; Trompetboom|Catalpa|Indian bean tree; Hemelboom|Tree of heaven|Ailanthus; Moerbeiboom|Mulberry tree;
      Judasboom|Judas tree; Gouden regen|Laburnum|Golden chain; Kornoelje|Dogwood; Toverhazelaar|Witch hazel; Valse christusdoorn|Honey locust|Gleditsia;
      Paulownia|Empress tree|Keizersboom; Vleugelnoot|Wingnut|Pterocarya; Japanse esdoorn|Japanese maple; Suikeresdoorn|Sugar maple;
      Bodhiboom|Bodhi tree|Sacred fig; Neem|Neem|Nimboom; Sandelhout|Sandalwood; Kaneelboom|Cinnamon tree; Cacaoboom|Cacao tree;
      Laurier|Bay laurel|Laurierboom; Johannesbroodboom|Carob tree; Hickory` },
    { id: 'chinese-zodiac', nl: 'Noem een dier uit de Chinese dierenriem', en: 'Name an animal of the Chinese zodiac', a: `
      Draak|Dragon; Tijger|Tiger; Rat|Rat; Slang|Snake; Paard|Horse; Aap|Monkey; Konijn|Rabbit|Haas|Hare; Os|Ox|Rund|Buffel;
      Hond|Dog; Varken|Pig|Zwijn|Everzwijn|Boar; Haan|Rooster|Kip|Chicken; Geit|Goat|Schaap|Sheep|Ram` },
    { id: 'flowers', nl: 'Noem een bloem', en: 'Name a flower', a: `
      Roos|Rose; Tulp|Tulip; Zonnebloem|Sunflower; Madeliefje|Daisy; Orchidee|Orchid; Lelie|Lily; Margriet|Marguerite|Ox-eye daisy;
      Narcis|Daffodil|Narcissus|Paasbloem; Klaproos|Poppy|Papaver; Lavendel|Lavender; Paardenbloem|Dandelion; Viooltje|Pansy|Violet|Viool;
      Hyacint|Hyacinth; Chrysant|Chrysanthemum; Anjer|Carnation; Gerbera; Pioen|Peony|Pioenroos; Iris|Iris|Lis; Sneeuwklokje|Snowdrop;
      Krokus|Crocus; Dahlia; Hortensia|Hydrangea; Lotus|Lotus|Lotusbloem; Jasmijn|Jasmine; Vergeet-mij-nietje|Forget-me-not|Vergeet-me-nietje;
      Korenbloem|Cornflower; Edelweiss|Edelweiss|Edelweiß; Gentiaan|Gentian; Alpenroos|Alpenrose|Alpine rose; Magnolia;
      Kersenbloesem|Cherry blossom|Sakura; Lelietje-van-dalen|Lily of the valley; Vlijtig liesje|Impatiens|Busy Lizzie;
      Geranium|Geranium|Pelargonium; Begonia; Petunia; Fresia|Freesia; Gladiool|Gladiolus|Gladiolen; Amaryllis; Cyclaam|Cyclamen;
      Primula|Primrose|Sleutelbloem; Klaver|Clover; Boterbloem|Buttercup; Akelei|Columbine|Aquilegia; Vingerhoedskruid|Foxglove|Digitalis;
      Ridderspoor|Delphinium|Larkspur; Lupine|Lupin|Lupine; Azalea; Rododendron|Rhododendron; Camelia|Camellia; Gardenia; Hibiscus;
      Bougainvillea; Strelitzia|Bird of paradise|Paradijsvogelbloem; Calla|Calla lily|Aronskelk; Anemoon|Anemone; Ranonkel|Ranunculus;
      Leeuwenbek|Snapdragon; Goudsbloem|Marigold|Calendula; Afrikaantje|Tagetes|French marigold; Zinnia; Cosmos|Cosmos|Cosmea; Aster;
      Klokje|Bellflower|Campanula; Stokroos|Hollyhock; Zonnehoed|Echinacea|Coneflower; Kamille|Chamomile; Duizendblad|Yarrow;
      Heide|Heather|Erica|Struikheide; Brem|Broom; Blauwe regen|Wisteria|Blauweregen; Clematis; Kamperfoelie|Honeysuckle;
      Passiebloem|Passion flower; Oost-Indische kers|Nasturtium; Lathyrus|Sweet pea|Pronkerwt; Lobelia; Verbena|Verbena|IJzerhard;
      Salvia; Waterlelie|Water lily; Sering|Lilac|Seringen; Forsythia|Forsythia|Chinees klokje; Kerstster|Poinsettia; Anthurium|Flamingoplant;
      Bromelia|Bromeliad; Protea; Blauwe druifjes|Grape hyacinth|Muscari; Sneeuwroem|Glory-of-the-snow|Chionodoxa;
      Kievitsbloem|Snake's head fritillary|Fritillary; Keizerskroon|Crown imperial; Sierui|Ornamental onion|Allium; Fuchsia; Lantana;
      Gazania; Portulak|Portulaca|Moss rose; IJsbloem|Ice plant; Daglelie|Daylily|Hemerocallis; Agapanthus|African lily|Kaapse lelie;
      Alstroemeria|Peruvian lily|Incalelie; Lisianthus|Eustoma; Gipskruid|Baby's breath|Gypsophila; Lamsoor|Sea lavender|Statice;
      Strobloem|Strawflower; Distel|Thistle; Bosanemoon|Wood anemone; Pinksterbloem|Cuckooflower; Dotterbloem|Marsh marigold;
      Wilde hyacint|Bluebell|Boshyacint; Speenkruid|Lesser celandine; Fluitenkruid|Cow parsley; Kaasjeskruid|Mallow; Smeerwortel|Comfrey;
      Teunisbloem|Evening primrose; Vlas|Flax; Saffraankrokus|Saffron crocus; Rafflesia; Titanenaronskelk|Titan arum|Corpse flower|Reuzenaronskelk;
      Vlinderorchidee|Moth orchid|Phalaenopsis; Vanda; Cymbidium; Venusschoentje|Lady's slipper orchid; Bijenorchis|Bee orchid` },
    { id: 'raptors', nl: 'Noem een roofvogel', en: 'Name a bird of prey', a: `
      Adelaar|Eagle|Arend; Valk|Falcon; Uil|Owl; Havik|Hawk|Goshawk; Buizerd|Buzzard; Gier|Vulture; Condor|Condor|Andescondor|Andean condor;
      Slechtvalk|Peregrine falcon|Peregrine; Steenarend|Golden eagle; Zeearend|White-tailed eagle|Sea eagle; Amerikaanse zeearend|Bald eagle|Witkopzeearend;
      Torenvalk|Kestrel; Sperwer|Sparrowhawk; Kerkuil|Barn owl; Oehoe|Eagle owl|Eagle-owl; Visarend|Osprey; Rode wouw|Red kite|Wouw|Kite;
      Zwarte wouw|Black kite; Bosuil|Tawny owl; Sneeuwuil|Snowy owl; Ransuil|Long-eared owl; Steenuil|Little owl; Velduil|Short-eared owl;
      Bruine kiekendief|Marsh harrier|Kiekendief|Harrier; Blauwe kiekendief|Hen harrier; Grauwe kiekendief|Montagu's harrier;
      Wespendief|Honey buzzard; Boomvalk|Hobby; Smelleken|Merlin; Giervalk|Gyrfalcon; Lammergier|Bearded vulture|Baardgier|Lammergeier;
      Vale gier|Griffon vulture; Monniksgier|Cinereous vulture; Aasgier|Egyptian vulture; Californische condor|California condor;
      Secretarisvogel|Secretary bird; Harpij|Harpy eagle|Harpijarend; Kroonarend|Crowned eagle; Slangenarend|Short-toed snake eagle;
      Keizerarend|Imperial eagle|Eastern imperial eagle; Dwergarend|Booted eagle; Havikarend|Bonelli's eagle; Ruigpootbuizerd|Rough-legged buzzard;
      Arendbuizerd|Long-legged buzzard; Roodstaartbuizerd|Red-tailed hawk; Woestijnbuizerd|Harris's hawk|Harris hawk; Caracara;
      Filipijnse arend|Philippine eagle; Wigstaartarend|Wedge-tailed eagle; Sperweruil|Northern hawk-owl; Laplanduil|Great grey owl;
      Oeraluil|Ural owl; Dwerguil|Pygmy owl; Ruigpootuil|Boreal owl|Tengmalm's owl; Dwergooruil|Scops owl; Koningsgier|King vulture;
      Kalkoengier|Turkey vulture; Lannervalk|Lanner falcon; Sakervalk|Saker falcon; Roodpootvalk|Red-footed falcon;
      Kleine torenvalk|Lesser kestrel; Eleonora's valk|Eleonora's falcon; Bateleur|Bateleur|Goochelaar` },
    { id: 'sharks', nl: 'Noem een haaiensoort', en: 'Name a species of shark', a: `
      Witte haai|Great white shark|Great white|Mensenhaai|White shark; Hamerhaai|Hammerhead shark|Hammerhead; Tijgerhaai|Tiger shark;
      Walvishaai|Whale shark; Reuzenhaai|Basking shark; Makohaai|Shortfin mako|Mako|Mako shark; Blauwe haai|Blue shark; Stierhaai|Bull shark;
      Verpleegsterhaai|Nurse shark; Zwartpunthaai|Blacktip shark|Zwartpuntrifhaai|Blacktip reef shark; Witpuntrifhaai|Whitetip reef shark|Witpunthaai;
      Oceanische witpunthaai|Oceanic whitetip shark|Oceanic whitetip; Citroenhaai|Lemon shark; Voshaai|Thresher shark|Thresher;
      Zandtijgerhaai|Sand tiger shark|Grey nurse shark; Haringhaai|Porbeagle; Hondshaai|Small-spotted catshark|Kathaai|Catshark;
      Doornhaai|Spiny dogfish|Spurdog; Groenlandse haai|Greenland shark; Koboldhaai|Goblin shark; Kraaghaai|Frilled shark;
      Grootbekhaai|Megamouth shark|Megamouth; Zeskieuwshaai|Bluntnose sixgill shark|Sixgill shark; Zee-engel|Angel shark|Engelhaai;
      Zaaghaai|Sawshark; Wobbegong; Luipaardhaai|Leopard shark; Zebrahaai|Zebra shark; Bamboehaai|Bamboo shark; Epaulettehaai|Epaulette shark;
      Sigaarhaai|Cookiecutter shark; Lantaarnhaai|Lanternshark; Zijdehaai|Silky shark; Grijze rifhaai|Grey reef shark;
      Caribische rifhaai|Caribbean reef shark; Galapagoshaai|Galapagos shark; Zandbankhaai|Sandbar shark; Bronshaai|Copper shark|Bronze whaler;
      Gladde haai|Smooth-hound; Hoornhaai|Horn shark|Port Jackson shark; Zwelhaai|Swell shark; Gangeshaai|Ganges shark; Megalodon;
      Pyjamahaai|Pyjama shark; Dwerglantaarnhaai|Dwarf lanternshark; Slaaphaai|Sleeper shark` },
    { id: 'gems', nl: 'Noem een edelsteen of halfedelsteen', en: 'Name a gemstone (precious or semi-precious)', a: `
      Diamant|Diamond|Briljant|Brilliant; Robijn|Ruby; Smaragd|Emerald; Saffier|Sapphire; Amethist|Amethyst; Parel|Pearl; Topaas|Topaz;
      Opaal|Opal; Jade; Granaat|Garnet; Aquamarijn|Aquamarine; Turkoois|Turquoise; Onyx; Barnsteen|Amber; Citrien|Citrine;
      Peridoot|Peridot|Olivijn; Toermalijn|Tourmaline; Tanzaniet|Tanzanite; Maansteen|Moonstone; Lapis lazuli|Lapis lazuli|Lapis;
      Bergkristal|Rock crystal|Kwarts|Quartz; Rozenkwarts|Rose quartz; Agaat|Agate; Jaspis|Jasper; Koraal|Coral; Obsidiaan|Obsidian;
      Malachiet|Malachite; Tijgeroog|Tiger's eye|Tigers eye; Hematiet|Hematite; Morganiet|Morganite; Alexandriet|Alexandrite; Spinel;
      Zirkoon|Zircon; Labradoriet|Labradorite; Ioliet|Iolite|Cordieriet; Kunziet|Kunzite; Heliodoor|Heliodor; Beril|Beryl;
      Chrysoberil|Chrysoberyl|Katoog|Cat's eye; Chrysopraas|Chrysoprase; Carneool|Carnelian|Cornalijn; Sardonyx; Bloedsteen|Bloodstone|Heliotroop;
      Git|Jet; Ammoliet|Ammolite; Benitoiet|Benitoite; Painiet|Painite; Taaffeiet|Taaffeite; Demantoïd|Demantoid; Tsavoriet|Tsavorite;
      Spessartien|Spessartine; Pyroop|Pyrope; Almandien|Almandine; Rhodoliet|Rhodolite; Paraiba|Paraiba tourmaline; Aventurijn|Aventurine;
      Fluoriet|Fluorite; Sodaliet|Sodalite; Rhodochrosiet|Rhodochrosite; Larimar; Prehniet|Prehnite; Apatiet|Apatite; Titaniet|Sphene|Sfeen;
      Andalusiet|Andalusite; Diopsied|Diopside; Moissaniet|Moissanite; Zoisiet|Zoisite; Charoiet|Charoite; Grandidieriet|Grandidierite;
      Musgraviet|Musgravite; Rode beril|Red beryl|Bixbiet; Jadeïet|Jadeite; Nefriet|Nephrite` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
