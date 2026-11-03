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



    { id: 'soviet-russian-leaders', lvl: 2, nl: 'Noem een leider van de Sovjet-Unie of van Rusland (sinds 1917)', en: 'Name a leader of the Soviet Union or of Russia (since 1917)', a: `
      Vladimir Poetin|Vladimir Putin|Poetin|Putin|Vladimir Poutine; Jozef Stalin|Joseph Stalin|Stalin|Josef Stalin; Vladimir Lenin|Vladimir Lenin|Lenin;
      Michail Gorbatsjov|Mikhail Gorbachev|Gorbatsjov|Gorbachev|Michail Gorbachev; Boris Jeltsin|Boris Yeltsin|Jeltsin|Yeltsin;
      Nikita Chroesjtsjov|Nikita Khrushchev|Chroesjtsjov|Khrushchev|Kroesjtsjov|Chroestsjov; Leonid Brezjnev|Leonid Brezhnev|Brezjnev|Brezhnev;
      Dmitri Medvedev|Dmitry Medvedev|Medvedev|Dmitri Medvedev; Joeri Andropov|Yuri Andropov|Andropov; Konstantin Tsjernenko|Konstantin Chernenko|Tsjernenko|Chernenko;
      Georgi Malenkov|Georgy Malenkov|Malenkov; Aleksandr Kerenski|Alexander Kerensky|Kerenski|Kerensky` },


    { id: 'dutch-monarchs', lvl: 3, nl: 'Noem een koning of koningin van Nederland (sinds 1815)', en: 'Name a King or Queen of the Netherlands (since 1815)', a: `
      Willem-Alexander|Willem-Alexander|Willem Alexander|Koning Willem-Alexander; Beatrix|Beatrix|Koningin Beatrix; Juliana|Juliana|Koningin Juliana;
      Wilhelmina|Wilhelmina|Koningin Wilhelmina; Willem I|William I|Koning Willem I; Willem III|William III|Koning Willem III; Willem II|William II|Koning Willem II` },

    { id: 'british-monarchs', lvl: 2, nl: 'Noem een Britse koning of koningin sinds 1800', en: 'Name a British King or Queen since 1800', a: `
      Elizabeth II|Elizabeth II|Elizabeth|Elisabeth II|Elisabeth|Queen Elizabeth|Koningin Elizabeth; Charles III|Charles III|Charles|Karel III|Koning Charles;
      Victoria|Victoria|Queen Victoria|Koningin Victoria; George VI|George VI|Georg VI; Edward VIII|Edward VIII|Eduard VIII;
      George V|George V|Georg V; Edward VII|Edward VII|Eduard VII; George III|George III|Georg III; George IV|George IV|Georg IV;
      William IV|William IV|Willem IV` },








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

]);
})(typeof window !== 'undefined' ? window : globalThis);
