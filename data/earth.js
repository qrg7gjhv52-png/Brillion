/* ─────────────────────────────────────────────────────────────
   Brillion · aardrijkskunde
   Elk antwoord: NL|EN|andere namen. Volgorde = van vaak genoemd naar
   zeldzaam: de eerste 20% is Gewoon, de laatste 20% 1 in a Brillion.
   lvl = moeilijkheid (1 makkelijk · 2 gemiddeld · 3 moeilijk).
   (Vragen die de landentabel gebruiken, zoals "Noem een land waar de
   Rijn door stroomt", staan in countries.js.)
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('earth', [
    { id: 'continents', lvl: 1, nl: 'Noem een werelddeel (continent)', en: 'Name a continent', a: `
      Europa|Europe; Afrika|Africa; Azië|Asia; Amerika|America|de Amerika's|Americas; Noord-Amerika|North America;
      Zuid-Amerika|South America; Oceanië|Oceania|Australië|Australia|Australazië|Australasia; Antarctica|Antarctica|Antarctis|Zuidpoolgebied` },

    { id: 'oceans', lvl: 1, nl: 'Noem een oceaan', en: 'Name an ocean', a: `
      Atlantische Oceaan|Atlantic Ocean|Atlantische|Atlantic|Atlantic Oceaan; Stille Oceaan|Pacific Ocean|Grote Oceaan|Pacifische Oceaan|Pacific|Stille;
      Indische Oceaan|Indian Ocean|Indische; Noordelijke IJszee|Arctic Ocean|Arctische Oceaan|Noordpoolzee|IJszee|Arctische Zee;
      Zuidelijke Oceaan|Southern Ocean|Zuidelijke IJszee|Antarctische Oceaan` },

    { id: 'us-states', lvl: 1, nl: 'Noem een staat van de Verenigde Staten', en: 'Name a US state', a: `
      Californië|California|Californie; Texas; Florida; New York|New York|New York State; Hawaï|Hawaii|Hawai; Alaska; Nevada;
      Washington|Washington|Washington State; Arizona; Colorado; Illinois; Georgia|Georgia|Georgië; Michigan; Massachusetts;
      Ohio; Louisiana; Pennsylvania|Pennsylvania|Pennsylvanië; New Jersey; Virginia; Utah; Tennessee; North Carolina|North Carolina|Noord-Carolina;
      Oregon; Minnesota; Kentucky; Wisconsin; Missouri; Indiana; Alabama; South Carolina|South Carolina|Zuid-Carolina; Oklahoma;
      Kansas; Maryland; Connecticut; Mississippi; Iowa; Arkansas; Nebraska; Montana; Idaho; New Mexico|New Mexico|Nieuw-Mexico;
      Maine; West Virginia|West Virginia|West-Virginia; Wyoming; Vermont; New Hampshire; Rhode Island; Delaware;
      South Dakota|South Dakota|Zuid-Dakota; North Dakota|North Dakota|Noord-Dakota` },


    { id: 'german-states', lvl: 3, nl: 'Noem een deelstaat van Duitsland', en: 'Name a German state', a: `
      Beieren|Bavaria|Bayern; Berlijn|Berlin; Hamburg; Noordrijn-Westfalen|North Rhine-Westphalia|Nordrhein-Westfalen|NRW;
      Baden-Württemberg|Baden-Württemberg|Baden-Wurttemberg; Saksen|Saxony|Sachsen; Nedersaksen|Lower Saxony|Niedersachsen;
      Hessen|Hesse; Bremen; Rijnland-Palts|Rhineland-Palatinate|Rheinland-Pfalz; Brandenburg; Sleeswijk-Holstein|Schleswig-Holstein;
      Thüringen|Thuringia|Thuringen|Thüringer; Saarland; Saksen-Anhalt|Saxony-Anhalt|Sachsen-Anhalt;
      Mecklenburg-Voor-Pommeren|Mecklenburg-Western Pomerania|Mecklenburg-Vorpommern|Mecklenburg` },

    { id: 'dutch-provinces', lvl: 2, nl: 'Noem een provincie van Nederland', en: 'Name a province of the Netherlands', a: `
      Noord-Holland|North Holland; Zuid-Holland|South Holland; Limburg; Noord-Brabant|North Brabant|Brabant; Zeeland; Utrecht;
      Friesland|Friesland|Fryslân|Fryslan|Frisia; Groningen; Gelderland; Overijssel; Drenthe; Flevoland` },
    { id: 'be-provinces', lvl: 1, nl: 'Noem een Belgische provincie', en: 'Name a Belgian province', a: `
      Antwerpen|Antwerp|Anvers; Limburg|Limburg|Limbourg; Oost-Vlaanderen|East Flanders|Flandre-Orientale;
      West-Vlaanderen|West Flanders|Flandre-Occidentale; Vlaams-Brabant|Flemish Brabant|Brabant flamand; Luik|Liège|Liege;
      Henegouwen|Hainaut; Namen|Namur; Luxemburg|Luxembourg|Belgisch Luxemburg|Province of Luxembourg; Waals-Brabant|Walloon Brabant|Brabant wallon` },


    { id: 'australia-states', lvl: 3, nl: 'Noem een staat of territorium van Australië', en: 'Name an Australian state or territory', a: `
      Nieuw-Zuid-Wales|New South Wales|NSW; Victoria; Queensland; West-Australië|Western Australia; Tasmanië|Tasmania;
      Zuid-Australië|South Australia; Noordelijk Territorium|Northern Territory;
      Australisch Hoofdstedelijk Territorium|Australian Capital Territory|ACT|Canberra-territorium` },




    { id: 'deserts', lvl: 1, nl: 'Noem een woestijn', en: 'Name a desert', a: `
      Sahara; Gobi|Gobi|Gobiwoestijn; Kalahari|Kalahari|Kalahariwoestijn; Atacama|Atacama|Atacamawoestijn; Namib|Namib|Namibwoestijn;
      Arabische Woestijn|Arabian Desert; Mojave|Mojave|Mojavewoestijn|Mojave Desert; Sonora|Sonoran Desert|Sonorawoestijn;
      Antarctische woestijn|Antarctic Desert|Antarctica; Syrische Woestijn|Syrian Desert; Thar|Thar|Tharwoestijn|Grote Indische Woestijn;
      Taklamakan|Taklamakan|Taklimakan; Rub al-Khali|Rub' al Khali|Empty Quarter|Lege Kwartier|Rub al Khali; Negev; Sinaï|Sinai|Sinaïwoestijn;
      Chihuahua|Chihuahuan Desert|Chihuahuawoestijn; Great Basin|Great Basin Desert; Karakum|Karakum|Kara Kum|Karakoem;
      Kyzylkum|Kyzylkum|Kyzyl Kum|Kyzylkoem; Patagonische Woestijn|Patagonian Desert; Arctische woestijn|Arctic Desert;
      Grote Victoriawoestijn|Great Victoria Desert; Grote Zandwoestijn|Great Sandy Desert; Simpsonwoestijn|Simpson Desert;
      Gibsonwoestijn|Gibson Desert; Tanami|Tanami Desert; Libische Woestijn|Libyan Desert|Westelijke Woestijn|Western Desert;
      Nubische Woestijn|Nubian Desert; Danakil|Danakil|Danakilwoestijn; Ténéré|Tenere; Lut|Dasht-e Lut|Lutwoestijn;
      Dasht-e Kavir|Dasht-e Kavir|Kavir|Grote Zoutwoestijn; Ordos; Badain Jaran; Karoo; Painted Desert; Coloradowoestijn|Colorado Desert;
      Black Rock Desert; Sechura; Monte Desert; Registan; Cholistan; Death Valley` },

    { id: 'mountain-ranges', lvl: 1, nl: 'Noem een gebergte', en: 'Name a mountain range', a: `
      Alpen|Alps; Himalaya|Himalaya|Himalayas; Andes|Andes|Andesgebergte; Rocky Mountains|Rocky Mountains|Rockies|Rotsgebergte;
      Pyreneeën|Pyrenees|Pyreneeen; Oeral|Ural Mountains|Ural|Oeralgebergte; Ardennen|Ardennes; Karpaten|Carpathians|Carpathian Mountains;
      Kaukasus|Caucasus|Caucasus Mountains; Apennijnen|Apennines; Atlasgebergte|Atlas Mountains|Atlas; Appalachen|Appalachian Mountains|Appalachians;
      Dolomieten|Dolomites; Vogezen|Vosges; Jura; Zwarte Woud|Black Forest|Schwarzwald; Tatra|Tatra|Tatra Mountains|Hoge Tatra;
      Sierra Nevada; Karakoram; Hindoekoesj|Hindu Kush|Hindukush; Pamir; Tiensjan|Tian Shan|Tien Shan; Altaj|Altai;
      Balkangebergte|Balkan Mountains|Balkan; Dinarische Alpen|Dinaric Alps; Scandinavisch Hoogland|Scandinavian Mountains|Kjølen|Kjolen|Scandes;
      Drakensbergen|Drakensberg; Ruwenzori|Rwenzori|Rwenzori Mountains; Zagros; Elboers|Alborz|Elburz; Taurus|Taurus Mountains|Taurusgebergte;
      Pontisch Gebergte|Pontic Mountains; Great Dividing Range; Zuidelijke Alpen|Southern Alps; Sierra Madre; Cascade Range|Cascade Range|Cascades;
      Brooks Range; Alaska Range; Harz; Eifel; Rhodopen|Rhodope Mountains|Rhodopegebergte; Pindus|Pindus|Pindos;
      Cantabrisch Gebergte|Cantabrian Mountains; Sierra Morena; Centraal Massief|Massif Central; Grampians|Grampian Mountains;
      Ertsgebergte|Ore Mountains|Erzgebirge; Reuzengebergte|Giant Mountains|Krkonoše|Krkonose|Riesengebirge; Sudeten|Sudetes;
      Ethiopisch Hoogland|Ethiopian Highlands; Hoggar|Hoggar|Ahaggar; Tibesti; Westelijke Ghats|Western Ghats|Ghats;
      Oostelijke Ghats|Eastern Ghats; Kunlun; Qinling; Annamitisch Gebergte|Annamite Range; Transantarctisch Gebergte|Transantarctic Mountains;
      Ellsworthgebergte|Ellsworth Mountains; Hoogland van Guyana|Guiana Highlands; Brits-Columbiaans Kustgebergte|Coast Mountains;
      Olympic Mountains; Adirondacks|Adirondack Mountains; Ozark|Ozarks; Sierra Madre Occidental; Sierra Madre Oriental; Snowdonia|Eryri;
      Cairngorms; Massif des Écrins|Ecrins; Mont Blanc-massief|Mont Blanc Massif; Berner Alpen|Bernese Alps; Julische Alpen|Julian Alps;
      Hohe Tauern; Rila; Pirin; Kopet Dag; Hijaz|Hejaz; Al Hajar|Hajar Mountains` },

    { id: 'great-lakes', lvl: 2, nl: 'Noem een van de Grote Meren van Noord-Amerika', en: 'Name one of the Great Lakes of North America', a: `
      Michiganmeer|Lake Michigan|Michigan; Bovenmeer|Lake Superior|Superior|Superiormeer; Ontariomeer|Lake Ontario|Ontario;
      Eriemeer|Lake Erie|Erie; Huronmeer|Lake Huron|Huron` },

    { id: 'canary-islands', lvl: 2, nl: 'Noem een van de Canarische Eilanden', en: 'Name one of the Canary Islands', a: `
      Tenerife; Gran Canaria; Lanzarote; Fuerteventura; La Palma|La Palma|Palma; La Gomera|La Gomera|Gomera; El Hierro|El Hierro|Hierro;
      La Graciosa|La Graciosa|Graciosa` },

    { id: 'balearic-islands', lvl: 1, nl: 'Noem een van de Balearen (Spaanse eilanden in de Middellandse Zee)', en: 'Name one of the Balearic Islands', a: `
      Mallorca|Mallorca|Majorca; Ibiza|Ibiza|Eivissa; Menorca|Menorca|Minorca; Formentera; Cabrera` },

    { id: 'wadden-islands', lvl: 2, nl: 'Noem een Nederlands Waddeneiland', en: 'Name a Dutch Wadden Island', a: `
      Texel; Terschelling; Ameland; Vlieland; Schiermonnikoog; Rottumeroog; Griend; Rottumerplaat; Noorderhaaks; Simonszand` },

    { id: 'longest-rivers', lvl: 1, nl: 'Noem een van de 10 langste rivieren ter wereld', en: 'Name one of the 10 longest rivers in the world', a: `
      Nijl|Nile; Amazone|Amazon|Amazonas; Jangtsekiang|Yangtze|Jangtse|Chang Jiang|Yangtze Kiang; Mississippi|Mississippi|Mississippi-Missouri|Missouri;
      Gele Rivier|Yellow River|Huang He|Hwang Ho; Kongo|Congo|Congorivier|Kongostroom; Jenisej|Yenisei|Jenisei|Yenisey;
      Ob|Ob|Ob-Irtysj|Ob-Irtysh|Irtysj|Irtysh; Paraná|Parana|Rio Paraná; Amoer|Amur|Heilongjiang; Lena; Mekong` },

    { id: 'rivers-europe', lvl: 1, nl: 'Noem een rivier in Europa', en: 'Name a river in Europe', a: `
      Rijn|Rhine|Rhein; Donau|Danube|Donau; Seine; Theems|Thames; Maas|Meuse|Maas; Schelde|Scheldt|Escaut; Wolga|Volga; Loire; Rhône|Rhone;
      Elbe; Po; Tiber|Tiber|Tevere|Tiberis; Moezel|Moselle|Mosel; Main; Oder|Oder|Odra; Weichsel|Vistula|Wisła|Wisla; Dnjepr|Dnieper|Dnipro;
      Taag|Tagus|Tajo|Tejo; Ebro; Douro|Douro|Duero; Leie|Lys; IJssel|IJssel|Ijssel; Waal; Garonne; Dordogne; Guadalquivir; Saône|Saone;
      Marne; Somme; Oise; Inn; Isar; Neckar; Weser; Eems|Ems; Spree; Moldau|Vltava; Drau|Drava|Drau; Sava; Tisza|Tisza|Tisa|Theiss;
      Don; Dnjestr|Dniester|Nistru; Prut; Oeral|Ural River|Ural; Kama; Oka; Petsjora|Pechora; Noordelijke Dvina|Northern Dvina|Severnaja Dvina;
      Westelijke Dvina|Daugava|Western Dvina|Duna; Memel|Neman|Nemunas|Njemen; Shannon; Severn; Trent; Tyne; Clyde; Tay; Liffey; Arno;
      Adige|Adige|Etsch; Piave; Tagliamento; Guadiana; Júcar|Jucar; Segura; Miño|Minho|Mino; Mondego; Struma; Maritsa|Maritsa|Evros|Meriç;
      Vardar|Axios; Drin; Neretva; Mur|Mura; Ticino; Aare|Aar; Reuss; Limmat; Lek; Amstel; Dender; Dijle|Dyle; Demer; Nete; Ourthe; Sambre;
      Semois; Lesse; Vesdre; Roer|Rur; Vecht; Eider; Saale; Havel; Lahn; Ruhr; Lippe; Isère|Isere; Durance; Lot; Tarn; Allier; Cher; Vienne;
      Glomma; Göta älv|Gota alv|Göta; Torne|Tornio|Torne älv; Kemijoki; Dal; Klarälven|Klaralven; Narva; Volchov|Volkhov; Neva; Sukhona;
      Vjatka|Vyatka; Belaja|Belaya; Desna; Pripjat|Pripyat; Boeg|Bug; San; Warta; Noteć|Notec; Morava|March; Váh|Vah; Hron; Olt; Mureș|Mures;
      Siret; Iskar; Kupa; Una; Drina; Velika Morava; Ibar; Evrotas; Acheloos; Aliakmon` },

    { id: 'volcanoes', lvl: 1, nl: 'Noem een vulkaan', en: 'Name a volcano', a: `
      Vesuvius|Vesuvius|Vesuvio|Mount Vesuvius; Etna|Etna|Mount Etna; Fuji|Mount Fuji|Fujiyama|Fuji-san; Krakatau|Krakatoa; Mauna Loa; Stromboli; Kilimanjaro;
      Mount St. Helens|Mount St. Helens|St. Helens|Mount Saint Helens; Eyjafjallajökull|Eyjafjallajokull; Kilauea|Kīlauea;
      Teide|Teide|Pico del Teide; Popocatépetl|Popocatepetl|Popo; Pinatubo; Hekla; Mauna Kea; Yellowstone|Yellowstone|Yellowstone Caldera;
      Santorini|Santorini|Thera; Cotopaxi; Tambora; Merapi; Ararat; Elbroes|Elbrus; Nyiragongo; Erebus|Erebus|Mount Erebus; Chimborazo; Mount Rainier|Rainier;
      Vulcano; Pelée|Mont Pelée|Mount Pelee|Pelee; Taal; Mayon; Sakurajima; Aso; Ruapehu; Tongariro; Taranaki|Mount Egmont;
      Grímsvötn|Grimsvotn; Katla; Laki; Surtsey; Piton de la Fournaise; Nevado del Ruiz; Arenal; Masaya; Villarrica; Osorno; Paricutín|Paricutin;
      Iztaccíhuatl|Iztaccihuatl; Mount Hood|Hood; Mount Shasta|Shasta; Lassen Peak|Lassen; Damavand; Kameroenberg|Mount Cameroon;
      Ol Doinyo Lengai; Erta Ale; Mount Kenya|Mount Kenya|Mount Kenia|Kenia-berg; Ojos del Salado; Bromo; Rinjani; Agung; Semeru; Kelud; Sinabung;
      Anak Krakatau; Haleakalā|Haleakala; Hualālai|Hualalai; Unzen; Soufrière Hills|Soufriere Hills; Cumbre Vieja; Fagradalsfjall;
      Campi Flegrei|Phlegraean Fields|Flegreïsche Velden; Tolbachik; Kljoetsjevskaja Sopka|Klyuchevskaya Sopka|Kliuchevskoi; Bezymianny;
      Olympus Mons; Pico; Fogo; Karthala` },

    { id: 'largest-islands', lvl: 2, nl: 'Noem een van de 10 grootste eilanden ter wereld (Australië telt als werelddeel)', en: 'Name one of the 10 largest islands in the world (Australia counts as a continent)', a: `
      Groenland|Greenland; Madagaskar|Madagascar; Borneo|Borneo|Kalimantan; Nieuw-Guinea|New Guinea; Groot-Brittannië|Great Britain;
      Sumatra; Honshu|Honshu|Honshū; Baffineiland|Baffin Island|Baffin; Victoria-eiland|Victoria Island|Victoriaeiland;
      Ellesmere-eiland|Ellesmere Island|Ellesmere|Ellesmere-eiland` },

    { id: 'lakes-europe', lvl: 2, nl: 'Noem een meer in Europa', en: 'Name a lake in Europe', a: `
      Gardameer|Lake Garda|Lago di Garda|Garda; Comomeer|Lake Como|Lago di Como|Como; Meer van Genève|Lake Geneva|Lac Léman|Lac Leman|Léman|Genèvemeer;
      Bodenmeer|Lake Constance|Bodensee; Loch Ness; Lago Maggiore|Lago Maggiore|Lake Maggiore|Maggiore; IJsselmeer|IJsselmeer|Ijsselmeer;
      Balatonmeer|Lake Balaton|Balaton; Vierwoudstrekenmeer|Lake Lucerne|Vierwaldstättersee|Vierwaldstattersee; Meer van Zürich|Lake Zurich|Zürichsee|Zurichmeer;
      Ladogameer|Lake Ladoga|Ladoga; Onegameer|Lake Onega|Onega; Vänern|Vanern|Lake Vänern; Vättern|Vattern|Lake Vättern; Saimaa;
      Peipusmeer|Lake Peipus|Peipus; Ohridmeer|Lake Ohrid|Ohrid; Prespameer|Lake Prespa|Prespa; Loch Lomond; Lough Neagh;
      Markermeer; Meer van Bled|Lake Bled|Bled; Meer van Lugano|Lake Lugano|Lugano; Iseomeer|Lake Iseo|Iseo; Trasimeense Meer|Lake Trasimeno|Trasimeno;
      Bolsenameer|Lake Bolsena|Bolsena; Hallstätter See|Hallstatter See|Hallstatt; Königssee|Konigssee; Chiemsee; Starnberger See|Starnberg;
      Müritz|Muritz; Meer van Neuchâtel|Lake Neuchâtel|Lac de Neuchâtel|Neuchatel; Thunermeer|Lake Thun|Thunersee; Brienzermeer|Lake Brienz|Brienzersee;
      Mälaren|Malaren; Päijänne|Paijanne; Inarimeer|Lake Inari|Inari; Mjøsa|Mjosa; Ilmenmeer|Lake Ilmen|Ilmen; Skadarmeer|Lake Skadar|Skadar;
      Meer van Annecy|Lake Annecy|Annecy; Lac du Bourget|Bourget; Plitvicemeren|Plitvice Lakes|Plitvice; Wolfgangsee; Attersee; Traunsee;
      Neusiedlermeer|Lake Neusiedl|Neusiedler See; Lough Corrib; Lough Derg; Windermere; Loch Tay; Bohinjmeer|Lake Bohinj|Bohinj;
      Meer van Ioannina|Lake Pamvotis; Kopaïs; Albufera; Lago di Bracciano|Bracciano; Lago d'Orta|Orta; Wörthersee|Worthersee;
      Grevelingenmeer|Grevelingen; Veluwemeer; Lauwersmeer; Oostvaardersplassen; Sneekermeer; Loosdrechtse Plassen; Vinkeveense Plassen;
      Meer van Virelles; Meer van Bütgenbach|Butgenbach; Meer van Robertville; Lacs de l'Eau d'Heure|Eau d'Heure` },

    { id: 'seven-summits', lvl: 3, nl: 'Noem de hoogste berg van een werelddeel (de "Seven Summits")', en: 'Name the highest mountain of a continent (the "Seven Summits")', a: `
      Mount Everest|Mount Everest|Everest|Chomolungma|Sagarmatha; Kilimanjaro|Kilimanjaro|Kibo; Mont Blanc; Aconcagua;
      Denali|Denali|Mount McKinley|McKinley; Elbroes|Mount Elbrus|Elbrus; Vinson|Vinson Massif|Mount Vinson|Vinsonmassief;
      Puncak Jaya|Puncak Jaya|Carstensz Pyramid|Carstenszpiramide|Carstensz; Kosciuszko|Mount Kosciuszko|Mount Kosciusko|Kosciusko` },
]);
})(typeof window !== 'undefined' ? window : globalThis);
