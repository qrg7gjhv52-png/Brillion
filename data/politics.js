/* ─────────────────────────────────────────────────────────────
   Brillion · geschiedenis & politiek (nieuwe vragen)
   Elk antwoord: NL|EN|andere namen. Volgorde = van vaak genoemd naar
   zeldzaam: de eerste 20% is Gewoon, de laatste 20% 1 in a Brillion.
   lvl = moeilijkheid (1 makkelijk · 2 gemiddeld · 3 moeilijk).
   (Vragen met landen, zoals de G7 of de Sovjet-Unie, staan in countries.js.)
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('history', [
    { id: 'uk-prime-ministers', lvl: 2, nl: 'Noem een Britse premier sinds 1945', en: 'Name a British Prime Minister since 1945', a: `
      Winston Churchill|Winston Churchill|Churchill; Margaret Thatcher|Margaret Thatcher|Thatcher; Tony Blair|Tony Blair|Blair;
      Boris Johnson|Boris Johnson|Boris|Johnson; Theresa May|Theresa May|May; David Cameron|David Cameron|Cameron;
      Rishi Sunak|Rishi Sunak|Sunak; Keir Starmer|Keir Starmer|Starmer; Liz Truss|Liz Truss|Truss; Gordon Brown|Gordon Brown|Brown;
      John Major|John Major|Major; Harold Wilson|Harold Wilson|Wilson; Clement Attlee|Clement Attlee|Attlee;
      Edward Heath|Edward Heath|Ted Heath|Heath; Anthony Eden|Anthony Eden|Eden; Harold Macmillan|Harold Macmillan|Macmillan;
      James Callaghan|James Callaghan|Jim Callaghan|Callaghan; Alec Douglas-Home|Alec Douglas-Home|Douglas-Home|Alec Douglas Home` },

    { id: 'german-chancellors', lvl: 3, nl: 'Noem een bondskanselier van Duitsland (sinds 1949)', en: 'Name a Chancellor of Germany (since 1949)', a: `
      Angela Merkel|Angela Merkel|Merkel; Olaf Scholz|Olaf Scholz|Scholz; Helmut Kohl|Helmut Kohl|Kohl; Konrad Adenauer|Konrad Adenauer|Adenauer;
      Friedrich Merz|Friedrich Merz|Merz; Gerhard Schröder|Gerhard Schröder|Schröder|Gerhard Schroder|Schroder|Schroeder;
      Willy Brandt|Willy Brandt|Brandt; Helmut Schmidt|Helmut Schmidt|Schmidt; Ludwig Erhard|Ludwig Erhard|Erhard;
      Kurt Georg Kiesinger|Kurt Georg Kiesinger|Kiesinger` },

    { id: 'french-presidents', lvl: 2, nl: 'Noem een president van Frankrijk sinds 1959 (de Vijfde Republiek)', en: 'Name a President of France since 1959 (the Fifth Republic)', a: `
      Emmanuel Macron|Emmanuel Macron|Macron; Charles de Gaulle|Charles de Gaulle|De Gaulle; Nicolas Sarkozy|Nicolas Sarkozy|Sarkozy;
      Jacques Chirac|Jacques Chirac|Chirac; François Hollande|François Hollande|Francois Hollande|Hollande;
      François Mitterrand|François Mitterrand|Francois Mitterrand|Mitterrand; Georges Pompidou|Georges Pompidou|Pompidou;
      Valéry Giscard d'Estaing|Valéry Giscard d'Estaing|Valery Giscard d'Estaing|Giscard d'Estaing|Giscard; Alain Poher|Alain Poher|Poher` },

    { id: 'us-vice-presidents', lvl: 3, nl: 'Noem een vicepresident van de Verenigde Staten sinds 1960', en: 'Name a Vice President of the United States since 1960', a: `
      Kamala Harris|Kamala Harris|Harris; Joe Biden|Joe Biden|Biden; Mike Pence|Mike Pence|Pence; JD Vance|JD Vance|J. D. Vance|J.D. Vance|Vance;
      Dick Cheney|Dick Cheney|Cheney; Al Gore|Al Gore|Gore; Richard Nixon|Richard Nixon|Nixon; George H. W. Bush|George H. W. Bush|George Bush|Bush|George H.W. Bush;
      Lyndon B. Johnson|Lyndon B. Johnson|Lyndon Johnson|LBJ|Johnson; Dan Quayle|Dan Quayle|Quayle; Gerald Ford|Gerald Ford|Ford;
      Walter Mondale|Walter Mondale|Mondale; Nelson Rockefeller|Nelson Rockefeller|Rockefeller; Spiro Agnew|Spiro Agnew|Agnew;
      Hubert Humphrey|Hubert Humphrey|Humphrey` },

    { id: 'un-secretaries', lvl: 3, nl: 'Noem een secretaris-generaal van de Verenigde Naties', en: 'Name a Secretary-General of the United Nations', a: `
      Kofi Annan|Kofi Annan|Annan; António Guterres|António Guterres|Antonio Guterres|Guterres; Ban Ki-moon|Ban Ki-moon|Ban Ki moon|Ban;
      Boutros Boutros-Ghali|Boutros Boutros-Ghali|Boutros-Ghali|Boutros Ghali; Kurt Waldheim|Kurt Waldheim|Waldheim;
      Dag Hammarskjöld|Dag Hammarskjöld|Dag Hammarskjold|Hammarskjöld|Hammarskjold; Javier Pérez de Cuéllar|Javier Pérez de Cuéllar|Javier Perez de Cuellar|Pérez de Cuéllar|Perez de Cuellar;
      U Thant|U Thant|Thant; Trygve Lie|Trygve Lie|Lie` },

    { id: 'ec-presidents', lvl: 3, nl: 'Noem een voorzitter van de Europese Commissie', en: 'Name a President of the European Commission', a: `
      Ursula von der Leyen|Ursula von der Leyen|Von der Leyen; Jean-Claude Juncker|Jean-Claude Juncker|Juncker; José Manuel Barroso|José Manuel Barroso|Jose Manuel Barroso|Barroso;
      Jacques Delors|Jacques Delors|Delors; Romano Prodi|Romano Prodi|Prodi; Jacques Santer|Jacques Santer|Santer; Walter Hallstein|Walter Hallstein|Hallstein;
      Roy Jenkins|Roy Jenkins|Jenkins; Gaston Thorn|Gaston Thorn|Thorn; Jean Rey|Jean Rey|Rey; Sicco Mansholt|Sicco Mansholt|Mansholt;
      François-Xavier Ortoli|François-Xavier Ortoli|Francois-Xavier Ortoli|Ortoli; Franco Maria Malfatti|Franco Maria Malfatti|Malfatti;
      Manuel Marín|Manuel Marín|Manuel Marin|Marín|Marin` },

    { id: 'soviet-russian-leaders', lvl: 2, nl: 'Noem een leider van de Sovjet-Unie of van Rusland (sinds 1917)', en: 'Name a leader of the Soviet Union or of Russia (since 1917)', a: `
      Vladimir Poetin|Vladimir Putin|Poetin|Putin|Vladimir Poutine; Jozef Stalin|Joseph Stalin|Stalin|Josef Stalin; Vladimir Lenin|Vladimir Lenin|Lenin;
      Michail Gorbatsjov|Mikhail Gorbachev|Gorbatsjov|Gorbachev|Michail Gorbachev; Boris Jeltsin|Boris Yeltsin|Jeltsin|Yeltsin;
      Nikita Chroesjtsjov|Nikita Khrushchev|Chroesjtsjov|Khrushchev|Kroesjtsjov|Chroestsjov; Leonid Brezjnev|Leonid Brezhnev|Brezjnev|Brezhnev;
      Dmitri Medvedev|Dmitry Medvedev|Medvedev|Dmitri Medvedev; Joeri Andropov|Yuri Andropov|Andropov; Konstantin Tsjernenko|Konstantin Chernenko|Tsjernenko|Chernenko;
      Georgi Malenkov|Georgy Malenkov|Malenkov; Aleksandr Kerenski|Alexander Kerensky|Kerenski|Kerensky` },

    { id: 'chinese-leaders', lvl: 3, nl: 'Noem een leider van de Volksrepubliek China', en: "Name a leader of the People's Republic of China", a: `
      Mao Zedong|Mao Zedong|Mao|Mao Tse-tung|Mao Tsetung; Xi Jinping|Xi Jinping|Xi; Deng Xiaoping|Deng Xiaoping|Deng;
      Jiang Zemin|Jiang Zemin|Jiang; Hu Jintao|Hu Jintao|Hu; Hua Guofeng|Hua Guofeng|Hua` },

    { id: 'dutch-monarchs', lvl: 3, nl: 'Noem een koning of koningin van Nederland (sinds 1815)', en: 'Name a King or Queen of the Netherlands (since 1815)', a: `
      Willem-Alexander|Willem-Alexander|Willem Alexander|Koning Willem-Alexander; Beatrix|Beatrix|Koningin Beatrix; Juliana|Juliana|Koningin Juliana;
      Wilhelmina|Wilhelmina|Koningin Wilhelmina; Willem I|William I|Koning Willem I; Willem III|William III|Koning Willem III; Willem II|William II|Koning Willem II` },

    { id: 'british-monarchs', lvl: 2, nl: 'Noem een Britse koning of koningin sinds 1800', en: 'Name a British King or Queen since 1800', a: `
      Elizabeth II|Elizabeth II|Elizabeth|Elisabeth II|Elisabeth|Queen Elizabeth|Koningin Elizabeth; Charles III|Charles III|Charles|Karel III|Koning Charles;
      Victoria|Victoria|Queen Victoria|Koningin Victoria; George VI|George VI|Georg VI; Edward VIII|Edward VIII|Eduard VIII;
      George V|George V|Georg V; Edward VII|Edward VII|Eduard VII; George III|George III|Georg III; George IV|George IV|Georg IV;
      William IV|William IV|Willem IV` },

    { id: 'us-banknotes', lvl: 3, nl: 'Noem een Amerikaanse president die op een dollarbiljet staat (biljetten die nu nog gemaakt worden)', en: 'Name a US President who appears on a dollar bill (notes still printed today)', a: `
      George Washington|George Washington|Washington; Abraham Lincoln|Abraham Lincoln|Lincoln; Andrew Jackson|Andrew Jackson|Jackson;
      Ulysses S. Grant|Ulysses S. Grant|Grant|Ulysses Grant; Thomas Jefferson|Thomas Jefferson|Jefferson` },

    { id: 'confederate-states', lvl: 3, nl: 'Noem een staat die in de Amerikaanse Burgeroorlog bij de Confederatie (het Zuiden) hoorde', en: 'Name a state that belonged to the Confederacy (the South) in the American Civil War', a: `
      Texas; Virginia; Georgia|Georgia|Georgië; Alabama; South Carolina|South Carolina|Zuid-Carolina; Mississippi; Louisiana; Tennessee;
      North Carolina|North Carolina|Noord-Carolina; Florida; Arkansas; Kentucky; Missouri` },

    { id: 'thirteen-colonies', lvl: 3, nl: 'Noem een van de 13 kolonies die in 1776 de onafhankelijkheid van de VS uitriepen', en: 'Name one of the 13 colonies that declared US independence in 1776', a: `
      Virginia; Massachusetts; New York; Pennsylvania|Pennsylvania|Pennsylvanië; Georgia|Georgia|Georgië; New Jersey;
      North Carolina|North Carolina|Noord-Carolina; South Carolina|South Carolina|Zuid-Carolina; Maryland; Connecticut;
      New Hampshire; Rhode Island; Delaware` },

    { id: 'roman-kings', lvl: 3, nl: 'Noem een van de zeven koningen van het oude Rome', en: 'Name one of the seven kings of ancient Rome', a: `
      Romulus; Tarquinius Superbus|Tarquinius Superbus|Tarquin the Proud|Tarquinius de Hoogmoedige|Superbus; Numa Pompilius|Numa Pompilius|Numa;
      Servius Tullius|Servius Tullius|Servius; Tarquinius Priscus|Tarquinius Priscus|Tarquin the Elder|Priscus;
      Tullus Hostilius|Tullus Hostilius|Tullus; Ancus Marcius|Ancus Marcius|Ancus` },

    { id: 'chinese-dynasties', lvl: 3, nl: 'Noem een Chinese keizersdynastie', en: 'Name a Chinese imperial dynasty', a: `
      Ming|Ming|Mingdynastie; Qing|Qing|Ch'ing|Mantsjoe-dynastie|Manchu|Qingdynastie; Han|Han|Handynastie; Tang|Tang|Tangdynastie;
      Song|Song|Sung|Songdynastie; Qin|Qin|Ch'in|Qindynastie; Yuan|Yuan|Mongoolse dynastie|Yuandynastie; Zhou|Zhou|Chou|Zhoudynastie;
      Shang|Shang|Shangdynastie; Sui|Sui|Suidynastie; Xia|Xia|Xiadynastie; Jin|Jin|Jindynastie; Liao; Westelijke Xia|Western Xia|Xi Xia;
      Noordelijke Wei|Northern Wei|Wei` },

    { id: 'eu-institutions', lvl: 3, nl: 'Noem een officiële instelling van de Europese Unie', en: 'Name an official institution of the European Union', a: `
      Europees Parlement|European Parliament|Parlement; Europese Commissie|European Commission|Commissie;
      Europese Centrale Bank|European Central Bank|ECB; Europese Raad|European Council;
      Raad van de Europese Unie|Council of the European Union|Raad van de EU|Raad van Ministers|Ministerraad|Council of the EU;
      Hof van Justitie van de Europese Unie|Court of Justice of the European Union|Europees Hof van Justitie|Hof van Justitie|European Court of Justice|CJEU|HvJ;
      Europese Rekenkamer|European Court of Auditors|Rekenkamer` },

    { id: 'un-bodies', lvl: 3, nl: 'Noem een orgaan of organisatie van de Verenigde Naties (bv. UNICEF)', en: 'Name a body or organisation of the United Nations (e.g. UNICEF)', a: `
      UNICEF; Wereldgezondheidsorganisatie|World Health Organization|WHO|Wereldgezondheidsorganisatie; UNESCO; Veiligheidsraad|Security Council|VN-Veiligheidsraad;
      Algemene Vergadering|General Assembly|VN-Algemene Vergadering; UNHCR|UNHCR|VN-Vluchtelingenorganisatie|Vluchtelingenorganisatie;
      Wereldvoedselprogramma|World Food Programme|WFP; Internationaal Gerechtshof|International Court of Justice|ICJ;
      Internationaal Monetair Fonds|International Monetary Fund|IMF; Wereldbank|World Bank; FAO|FAO|Voedsel- en Landbouworganisatie|Food and Agriculture Organization;
      Internationale Arbeidsorganisatie|International Labour Organization|ILO|IAO; UNDP|UNDP|VN-Ontwikkelingsprogramma;
      UNEP|UNEP|VN-Milieuprogramma|UN Environment Programme; Internationaal Atoomenergieagentschap|International Atomic Energy Agency|IAEA|IAEA;
      UNAIDS; UNFPA; UN Women|UN Women|VN-Vrouwen; UNRWA; UN-Habitat|UN-Habitat|UN Habitat; OCHA; UNCTAD;
      Economische en Sociale Raad|Economic and Social Council|ECOSOC; Secretariaat|Secretariat|VN-Secretariaat; Trustschapsraad|Trusteeship Council;
      Wereldpostunie|Universal Postal Union|UPU; Internationale Telecommunicatie-unie|International Telecommunication Union|ITU;
      Wereld Meteorologische Organisatie|World Meteorological Organization|WMO; Internationale Burgerluchtvaartorganisatie|International Civil Aviation Organization|ICAO;
      Internationale Maritieme Organisatie|International Maritime Organization|IMO; Wereldorganisatie voor de Intellectuele Eigendom|World Intellectual Property Organization|WIPO;
      IFAD|IFAD|Internationaal Fonds voor Landbouwontwikkeling; UNIDO; Wereldtoerismeorganisatie|UN Tourism|UNWTO|World Tourism Organization;
      UNODC; Mensenrechtenraad|Human Rights Council|VN-Mensenrechtenraad; UNU|Universiteit van de Verenigde Naties|United Nations University` },

    { id: 'ancient-civilisations', lvl: 1, nl: 'Noem een volk of beschaving uit de oudheid (bv. de Egyptenaren)', en: 'Name a people or civilisation of the ancient world (e.g. the Egyptians)', a: `
      Romeinen|Romans|Rome|Romeinse Rijk|Roman Empire; Grieken|Greeks|Oude Grieken|Ancient Greece|Griekenland; Egyptenaren|Egyptians|Oude Egypte|Ancient Egypt|Egypte;
      Maya's|Maya|Mayas|Maya-beschaving; Azteken|Aztecs; Inca's|Incas|Inca; Perzen|Persians|Perzische Rijk|Persian Empire;
      Mesopotamiërs|Mesopotamians|Mesopotamië|Mesopotamia; Babyloniërs|Babylonians|Babylon|Babylonië; Sumeriërs|Sumerians|Sumer;
      Feniciërs|Phoenicians|Fenicië; Kelten|Celts; Germanen|Germanic peoples|Germanen; Etrusken|Etruscans; Assyriërs|Assyrians|Assyrië;
      Carthagers|Carthaginians|Carthago|Carthage; Hettieten|Hittites; Minoërs|Minoans|Minoïsche beschaving; Myceners|Mycenaeans|Myceense beschaving;
      Indusbeschaving|Indus Valley Civilisation|Harappa|Harappabeschaving; Oude Chinezen|Ancient Chinese|Shang|Oude China; Olmeken|Olmecs;
      Akkadiërs|Akkadians|Akkad; Hebreeërs|Hebrews|Israëlieten|Israelites; Scythen|Scythians; Parthen|Parthians; Nubiërs|Nubians|Koesj|Kush|Kushites;
      Aksum|Aksumites|Axum; Macedoniërs|Macedonians|Macedonië; Spartanen|Spartans|Sparta; Atheners|Athenians|Athene; Gallen|Gauls|Galliërs;
      Thraciërs|Thracians; Illyriërs|Illyrians; Iberiërs|Iberians; Lydiërs|Lydians; Meden|Medes; Elamieten|Elamites; Amorieten|Amorites;
      Kanaänieten|Canaanites; Filistijnen|Philistines; Nabateeërs|Nabataeans; Teotihuacan; Zapoteken|Zapotecs; Moche; Nazca; Chavín|Chavin;
      Hunnen|Huns; Goten|Goths; Vandalen|Vandals; Daciërs|Dacians; Sabijnen|Sabines; Samnieten|Samnites; Dravidiërs; Maurya's|Maurya Empire|Mauryarijk` },

    { id: 'explorers', lvl: 1, nl: 'Noem een ontdekkingsreiziger', en: 'Name an explorer', a: `
      Christoffel Columbus|Christopher Columbus|Columbus|Colombus|Cristoforo Colombo; Marco Polo; Vasco da Gama|Vasco da Gama|Da Gama;
      Ferdinand Magellaan|Ferdinand Magellan|Magellaan|Magellan|Magalhães; James Cook|James Cook|Kapitein Cook|Captain Cook|Cook;
      Roald Amundsen|Roald Amundsen|Amundsen; Abel Tasman|Abel Tasman|Tasman|Abel Janszoon Tasman; Amerigo Vespucci|Amerigo Vespucci|Vespucci;
      Bartolomeu Dias|Bartolomeu Dias|Bartolomeus Diaz|Dias|Diaz; Hernán Cortés|Hernán Cortés|Hernan Cortes|Cortés|Cortes|Cortez;
      Francisco Pizarro|Francisco Pizarro|Pizarro; Ernest Shackleton|Ernest Shackleton|Shackleton; Robert Falcon Scott|Robert Falcon Scott|Robert Scott|Scott;
      David Livingstone|David Livingstone|Livingstone; Henry Morton Stanley|Henry Morton Stanley|Stanley; Willem Barentsz|Willem Barentsz|Willem Barents|Barentsz|Barents;
      Leif Erikson|Leif Erikson|Leif Eriksson|Leif Ericson|Leif; Erik de Rode|Erik the Red|Erik Thorvaldsson; Edmund Hillary|Edmund Hillary|Hillary;
      Tenzing Norgay|Tenzing Norgay|Tenzing|Sherpa Tenzing; Neil Armstrong|Neil Armstrong|Armstrong; Jacques Cartier|Jacques Cartier|Cartier;
      Henry Hudson|Henry Hudson|Hudson; Francis Drake|Francis Drake|Drake; John Cabot|John Cabot|Giovanni Caboto|Cabot; Ibn Battuta|Ibn Battuta|Ibn Batoeta;
      Zheng He; Pedro Álvares Cabral|Pedro Álvares Cabral|Pedro Alvares Cabral|Cabral; Vasco Núñez de Balboa|Vasco Núñez de Balboa|Vasco Nunez de Balboa|Balboa;
      Juan Ponce de León|Juan Ponce de León|Ponce de León|Ponce de Leon; Hernando de Soto|Hernando de Soto|De Soto; Samuel de Champlain|Samuel de Champlain|Champlain;
      Francisco de Orellana|Francisco de Orellana|Orellana; Lewis en Clark|Lewis and Clark|Meriwether Lewis|William Clark; Vitus Bering|Vitus Bering|Bering;
      Alexander von Humboldt|Alexander von Humboldt|Humboldt; Fridtjof Nansen|Fridtjof Nansen|Nansen; Robert Peary|Robert Peary|Peary; Matthew Henson|Matthew Henson|Henson;
      Adrien de Gerlache|Adrien de Gerlache|De Gerlache; Jacob Roggeveen|Jacob Roggeveen|Roggeveen; Cornelis de Houtman|Cornelis de Houtman|De Houtman|Houtman;
      Olivier van Noort|Olivier van Noort|Van Noort; Dirk Hartog|Dirk Hartog|Hartog; Willem Janszoon|Willem Janszoon; Jan Huygen van Linschoten|Linschoten;
      Hendrik de Zeevaarder|Henry the Navigator|Infante Dom Henrique; Thor Heyerdahl|Thor Heyerdahl|Heyerdahl; Jacques Cousteau|Jacques Cousteau|Cousteau;
      John Franklin|John Franklin|Franklin; Douglas Mawson|Douglas Mawson|Mawson; Richard Byrd|Richard Byrd|Byrd; Mungo Park|Mungo Park;
      Richard Francis Burton|Richard Francis Burton|Richard Burton; John Hanning Speke|John Hanning Speke|Speke; Samuel Baker|Samuel Baker;
      Sven Hedin|Sven Hedin|Hedin; Gertrude Bell|Gertrude Bell; Isabella Bird|Isabella Bird; Ida Pfeiffer|Ida Pfeiffer; Mary Kingsley|Mary Kingsley;
      Alexandra David-Néel|Alexandra David-Neel|David-Néel; Nikolaj Prsjevalski|Nikolai Przhevalsky|Prsjevalski|Przhevalsky; Xuanzang; Pytheas;
      Hanno de Zeevaarder|Hanno the Navigator|Hanno; Bartholomew Gosnold|Gosnold` },

    { id: 'royal-houses', lvl: 3, nl: 'Noem een vorstenhuis (dynastie) dat nu regeert in Europa', en: 'Name a royal house (dynasty) that reigns in Europe today', a: `
      Windsor|Windsor|Huis Windsor|House of Windsor; Oranje-Nassau|Orange-Nassau|Huis Oranje-Nassau|Oranje; Bourbon|Bourbon|Huis Bourbon|Borbón|Bourbon-Anjou;
      Saksen-Coburg|Saxe-Coburg|Saksen-Coburg-Gotha|Saxe-Coburg and Gotha|Huis België|House of Belgium; Grimaldi|Grimaldi|Huis Grimaldi;
      Bernadotte|Bernadotte|Huis Bernadotte; Glücksburg|Glücksburg|Glucksburg|Sleeswijk-Holstein-Sonderburg-Glücksburg|Schleswig-Holstein-Sonderburg-Glücksburg|Huis Glücksburg|Monpezat;
      Liechtenstein|Liechtenstein|Huis Liechtenstein|House of Liechtenstein; Nassau-Weilburg|Nassau-Weilburg|Luxemburg-Nassau|Bourbon-Parma|Huis Nassau-Weilburg` },

    { id: 'us-historic-capitals', lvl: 3, nl: 'Noem een stad waar het Amerikaanse Congres ooit zetelde als hoofdstad (sinds 1774)', en: 'Name a city that served as the seat of the US Congress (since 1774)', a: `
      Washington|Washington|Washington D.C.|Washington DC; Philadelphia; New York|New York|New York City; Baltimore; Princeton; Annapolis;
      Trenton; Lancaster; York` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
