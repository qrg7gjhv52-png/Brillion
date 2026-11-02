/* ─────────────────────────────────────────────────────────────
   Brillion · geschiedenis & politiek (de bestaande vragen)
   Elk antwoord: NL|EN|andere namen. Volgorde = van vaak genoemd naar
   zeldzaam: de eerste 20% is Gewoon, de laatste 20% 1 in a Brillion.
   lvl = moeilijkheid (1 makkelijk · 2 gemiddeld · 3 moeilijk).
   Nieuwe vragen over geschiedenis & politiek staan in politics.js.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('history', [
    { id: 'us-presidents', lvl: 2, nl: 'Noem een president van de Verenigde Staten', en: 'Name a President of the United States', a: `
      Donald Trump|Donald Trump|Trump; Barack Obama|Barack Obama|Obama; Joe Biden|Joe Biden|Biden; Abraham Lincoln|Abraham Lincoln|Lincoln;
      John F. Kennedy|John F. Kennedy|JFK|Kennedy|John Kennedy; George Washington|George Washington|Washington;
      George W. Bush|George W. Bush|Bush|George Bush|Bush junior; Bill Clinton|Bill Clinton|Clinton; Ronald Reagan|Ronald Reagan|Reagan;
      Franklin D. Roosevelt|Franklin D. Roosevelt|FDR|Franklin Roosevelt|Roosevelt; Theodore Roosevelt|Theodore Roosevelt|Teddy Roosevelt;
      George H. W. Bush|George H. W. Bush|Bush senior|George H.W. Bush; Richard Nixon|Richard Nixon|Nixon; Thomas Jefferson|Thomas Jefferson|Jefferson;
      Jimmy Carter|Jimmy Carter|Carter; Dwight D. Eisenhower|Dwight D. Eisenhower|Eisenhower|Ike; Harry S. Truman|Harry S. Truman|Truman;
      Gerald Ford|Gerald Ford|Ford; Lyndon B. Johnson|Lyndon B. Johnson|LBJ|Lyndon Johnson|Johnson; John Adams|John Adams|Adams;
      Ulysses S. Grant|Ulysses S. Grant|Grant; Andrew Jackson|Andrew Jackson|Jackson; James Madison|James Madison|Madison;
      James Monroe|James Monroe|Monroe; Woodrow Wilson|Woodrow Wilson|Wilson; John Quincy Adams; Herbert Hoover|Herbert Hoover|Hoover;
      Calvin Coolidge|Calvin Coolidge|Coolidge; Warren G. Harding|Warren G. Harding|Harding; William McKinley|William McKinley|McKinley;
      William Howard Taft|William Howard Taft|Taft; Grover Cleveland|Grover Cleveland|Cleveland; Andrew Johnson; James K. Polk|James K. Polk|Polk;
      Martin Van Buren|Martin Van Buren|Van Buren; William Henry Harrison|William Henry Harrison|Harrison; Benjamin Harrison;
      John Tyler|John Tyler|Tyler; Zachary Taylor|Zachary Taylor|Taylor; Millard Fillmore|Millard Fillmore|Fillmore;
      Franklin Pierce|Franklin Pierce|Pierce; James Buchanan|James Buchanan|Buchanan; Rutherford B. Hayes|Rutherford B. Hayes|Hayes;
      James A. Garfield|James A. Garfield|Garfield; Chester A. Arthur|Chester A. Arthur|Chester Arthur|Arthur` },
    { id: 'roman-emperors', lvl: 3, nl: 'Noem een Romeinse keizer (van Augustus tot 476)', en: 'Name a Roman emperor (from Augustus to 476)', a: `
      Augustus|Augustus|Octavianus|Octavian; Nero; Caligula; Marcus Aurelius; Constantijn de Grote|Constantine the Great|Constantijn|Constantine|Constantijn I;
      Hadrianus|Hadrian; Trajanus|Trajan; Claudius; Tiberius; Commodus; Vespasianus|Vespasian; Titus; Diocletianus|Diocletian;
      Domitianus|Domitian; Caracalla; Septimius Severus|Septimius Severus|Severus; Romulus Augustulus; Theodosius I|Theodosius the Great|Theodosius de Grote|Theodosius;
      Julianus|Julian|Julianus Apostata|Julian the Apostate; Antoninus Pius|Antoninus Pius|Antoninus; Nerva; Galba; Otho; Vitellius;
      Elagabalus|Elagabalus|Heliogabalus; Lucius Verus|Lucius Verus|Verus; Pertinax; Didius Julianus; Geta; Macrinus; Severus Alexander|Alexander Severus;
      Maximinus Thrax|Maximinus Thrax|Maximinus; Gordianus I|Gordian I; Gordianus II|Gordian II; Pupienus; Balbinus; Gordianus III|Gordian III;
      Philippus Arabs|Philip the Arab; Decius|Trajan Decius|Trajanus Decius; Trebonianus Gallus; Aemilianus|Aemilian; Valerianus|Valerian;
      Gallienus; Claudius Gothicus|Claudius II|Claudius II Gothicus; Quintillus; Aurelianus|Aurelian; Tacitus; Florianus|Florian; Probus;
      Carus; Carinus; Numerianus|Numerian; Maximianus|Maximian; Constantius Chlorus|Constantius I|Constantius Chlorus; Galerius;
      Severus II|Flavius Severus; Maxentius; Licinius; Maximinus Daia|Maximinus II|Maximinus Daza; Constantijn II|Constantine II; Constans;
      Constantius II; Jovianus|Jovian; Valentinianus I|Valentinian I|Valentinianus; Valens; Gratianus|Gratian; Valentinianus II|Valentinian II;
      Honorius; Arcadius; Theodosius II; Constantius III; Valentinianus III|Valentinian III; Petronius Maximus; Avitus; Majorianus|Majorian;
      Libius Severus|Severus III; Anthemius; Olybrius; Glycerius; Julius Nepos|Julius Nepos|Nepos` },
    { id: 'wonders', lvl: 2, nl: 'Noem een wereldwonder (uit de oudheid of een van de nieuwe zeven)', en: 'Name a wonder of the world (ancient, or one of the New Seven)', a: `
      Chinese Muur|Great Wall of China|Great Wall; Piramides van Gizeh|Pyramids of Giza|Piramide van Cheops|Great Pyramid of Giza|Piramides|Pyramids|Grote Piramide;
      Machu Picchu; Colosseum|Colosseum|Coliseum; Taj Mahal; Christus de Verlosser|Christ the Redeemer|Cristo Redentor|Christusbeeld; Petra;
      Chichén Itzá|Chichen Itza; Hangende tuinen van Babylon|Hanging Gardens of Babylon|Hangende tuinen; Kolossus van Rhodos|Colossus of Rhodes|Kolos van Rhodos;
      Vuurtoren van Alexandrië|Lighthouse of Alexandria|Pharos van Alexandrië|Pharos; Tempel van Artemis|Temple of Artemis|Artemision;
      Zeusbeeld van Olympia|Statue of Zeus at Olympia|Beeld van Zeus|Zeusbeeld; Mausoleum van Halicarnassus|Mausoleum at Halicarnassus|Mausoleum` },
    { id: 'popes', lvl: 3, nl: 'Noem een paus sinds 1900', en: 'Name a pope since 1900', a: `
      Franciscus|Francis|Paus Franciscus|Pope Francis; Johannes Paulus II|John Paul II|Johannes Paulus; Benedictus XVI|Benedict XVI|Benedictus;
      Leo XIV|Leo XIV|Leo|Prevost; Johannes XXIII|John XXIII|Johannes; Paulus VI|Paul VI|Paulus; Johannes Paulus I|John Paul I;
      Pius XII|Pius XII|Pius; Pius XI; Pius X; Benedictus XV|Benedict XV; Leo XIII` },
    { id: 'greek-gods', lvl: 2, nl: 'Noem een Griekse god of godin (Romeinse namen tellen niet)', en: "Name a Greek god or goddess (Roman names don't count)", a: `
      Zeus; Poseidon; Hades; Athena|Athena|Athene|Pallas Athena; Apollo|Apollo|Apollon; Aphrodite|Aphrodite|Afrodite; Hermes; Ares; Hera; Artemis;
      Dionysos|Dionysus; Hephaistos|Hephaestus|Hefaistos; Demeter; Persephone|Persephone|Persefone; Eros; Hestia; Kronos|Cronus|Cronos;
      Gaia|Gaia|Gaea; Nike; Pan; Helios; Selene; Eos; Hekate|Hecate; Nemesis; Hypnos; Thanatos; Morpheus; Iris; Hebe; Tyche;
      Asklepios|Asclepius; Prometheus; Atlas; Rhea|Rhea|Rheia; Ouranos|Uranus; Okeanos|Oceanus; Tethys; Themis; Mnemosyne; Hyperion;
      Iapetos|Iapetus; Koios|Coeus; Kreios|Crius; Phoibe|Phoebe; Theia; Epimetheus; Chaos; Nyx; Erebos|Erebus; Tartaros|Tartarus;
      Aither|Aether; Hemera; Pontos|Pontus; Nereus; Triton; Proteus; Amphitrite; Thetis; Boreas; Zephyros|Zephyrus; Notos|Notus;
      Euros|Eurus; Aiolos|Aeolus; Priapos|Priapus; Hymenaios|Hymenaeus|Hymen; Harmonia; Phobos; Deimos; Enyo; Bia; Kratos; Zelos; Styx;
      Leto; Metis; Dione; Maia; Eris; Peitho; Ananke; Chronos; Eileithyia; Hygieia; Panakeia|Panacea; Ploutos|Plutus; Kairos; Momos|Momus;
      Phanes; Kalliope|Calliope; Kleio|Clio; Erato; Euterpe; Melpomene; Polyhymnia; Terpsichore; Thalia; Urania; Klotho|Clotho;
      Lachesis; Atropos; Aglaia|Aglaea; Euphrosyne; Herakles|Heracles; Psyche` },
    { id: 'egyptian-gods', lvl: 3, nl: 'Noem een god of godin uit het oude Egypte', en: 'Name a god or goddess of ancient Egypt', a: `
      Ra|Ra|Re; Osiris; Isis; Anubis; Horus; Seth|Set; Thoth|Thoth|Thot|Djehuti; Amon|Amun|Amon-Ra|Amun-Ra; Bastet|Bastet|Bast; Sobek;
      Hathor; Ptah; Aton|Aten; Nut; Geb; Sjoe|Shu; Tefnut; Nephthys; Maat|Ma'at; Sekhmet|Sekhmet|Sachmet; Chnoem|Khnum; Chonsoe|Khonsu; Montu;
      Min; Mut; Neith; Taweret|Taweret|Taueret; Bes; Apophis|Apophis|Apep; Atum|Atum|Atoem; Amaunet; Hapi; Heket|Heqet; Meretseger; Nekhbet;
      Wadjet; Serket|Selket; Imhotep; Aker; Ammit|Ammut; Anuket|Anukis; Satet|Satis; Seshat; Sopdu; Wepwawet; Chepri|Khepri; Renenutet;
      Mafdet; Meskhenet; Hu; Sia; Heh|Huh; Nun; Shezmu; Mehen; Babi; Resjef|Reshep|Resheph; Serapis; Harpocrates|Harpokrates; Iah|Aah;
      Kebechet; Qetesh; Menhit; Pakhet; Tatenen` },
    { id: 'norse-gods', lvl: 3, nl: 'Noem een god of godin uit de Noordse mythologie', en: 'Name a god or goddess from Norse mythology', a: `
      Odin|Odin|Wodan|Wotan|Woden; Thor|Thor|Donar; Loki; Freya|Freyja|Freya; Frigg|Frigg|Frigga; Baldr|Baldur|Balder; Tyr|Tyr|Týr;
      Heimdall|Heimdall|Heimdallr; Freyr|Frey|Freyr; Njord|Njörðr|Njord; Idun|Iðunn|Idunn|Iduna; Bragi; Hel|Hel|Hela; Skadi|Skaði;
      Sif; Vidar|Víðarr; Vali|Váli; Ullr|Ullr|Ull; Forseti; Hodr|Höðr|Hod; Hermod|Hermóðr; Eir; Sigyn; Gefjon|Gefjun|Gefion; Nanna;
      Saga; Var; Vor|Vör; Syn; Hlin; Snotra; Gna; Fulla; Lofn; Sjofn|Sjöfn; Mimir|Mímir; Aegir|Ægir; Ran|Rán; Kvasir; Hoenir|Hœnir;
      Jord|Jörð|Fjörgyn; Sol|Sól|Sunna; Mani|Máni; Nott|Nótt; Dagr; Ymir; Surtr|Surt` },
    { id: 'philosophers', lvl: 3, nl: 'Noem een filosoof uit de Griekse of Romeinse oudheid', en: 'Name a philosopher from ancient Greece or Rome', a: `
      Socrates|Socrates|Sokrates; Plato|Plato|Platoon|Platon; Aristoteles|Aristotle; Pythagoras; Diogenes; Epicurus|Epicurus|Epikouros;
      Heraclitus|Heraclitus|Herakleitos; Democritus|Democritus|Demokritos; Thales|Thales|Thales van Milete; Seneca; Marcus Aurelius;
      Zeno van Citium|Zeno of Citium|Zeno; Zeno van Elea|Zeno of Elea; Parmenides; Epictetus|Epictetus|Epiktetos; Cicero; Plotinus|Plotinus|Plotinos;
      Anaximander; Anaximenes; Empedocles|Empedocles|Empedokles; Anaxagoras; Protagoras; Gorgias; Hypatia; Lucretius; Pyrrho|Pyrrho|Pyrrhon;
      Antisthenes; Aristippus|Aristippus|Aristippos; Chrysippus|Chrysippus|Chrysippos; Cleanthes|Cleanthes|Kleanthes; Xenophanes;
      Leucippus|Leucippus|Leukippos; Theophrastus|Theophrastus|Theophrastos; Thrasymachus; Porphyrius|Porphyry; Proclus|Proclus|Proklos;
      Boethius; Augustinus|Augustine|Augustinus van Hippo; Plutarchus|Plutarch; Xenophon; Iamblichus; Posidonius; Panaetius; Carneades;
      Arcesilaus; Philo van Alexandrië|Philo of Alexandria|Philo; Sextus Empiricus; Diogenes Laërtius|Diogenes Laertius; Crates|Crates of Thebes;
      Hipparchia; Euclides van Megara|Euclid of Megara; Speusippus; Xenocrates; Hippias; Prodicus; Antiphon; Critias; Archytas; Philolaus;
      Alcmaeon; Melissus; Musonius Rufus; Philodemus; Lucianus|Lucian; Galenus|Galen` },
    { id: 'moonwalkers', lvl: 3, nl: 'Noem een astronaut die op de maan liep', en: 'Name an astronaut who walked on the Moon', a: `
      Neil Armstrong|Neil Armstrong|Armstrong; Buzz Aldrin|Buzz Aldrin|Aldrin|Edwin Aldrin; Alan Shepard|Alan Shepard|Shepard;
      Pete Conrad|Pete Conrad|Conrad|Charles Conrad; Eugene Cernan|Gene Cernan|Cernan; Alan Bean|Alan Bean|Bean; Edgar Mitchell|Edgar Mitchell|Mitchell;
      David Scott|David Scott|Scott|Dave Scott; James Irwin|James Irwin|Jim Irwin|Irwin; John Young|John Young|Young;
      Charles Duke|Charles Duke|Charlie Duke|Duke; Harrison Schmitt|Harrison Schmitt|Jack Schmitt|Schmitt` },
    { id: 'kings', lvl: 2, nl: 'Noem een koning der Belgen', en: 'Name a King of the Belgians', a: `
      Filip|Philippe|Philip|Filip I; Boudewijn|Baudouin|Boudewijn I; Albert II|Albert II|Albert; Leopold II|Leopold II|Léopold II|Leopold;
      Albert I|Albert I|Koning-Ridder|Knight King; Leopold I|Leopold I|Léopold I; Leopold III|Leopold III|Léopold III` },
    { id: 'stock-exchanges', lvl: 3, nl: 'Noem een aandelenbeurs', en: 'Name a stock exchange', a: `
      New York Stock Exchange|New York Stock Exchange|NYSE|Wall Street|Beurs van New York; Nasdaq|Nasdaq|NASDAQ;
      Euronext Brussel|Euronext Brussels|Beurs van Brussel|Brussels Stock Exchange|Euronext|BEL20; London Stock Exchange|London Stock Exchange|LSE|Beurs van Londen;
      Euronext Amsterdam|Euronext Amsterdam|Beurs van Amsterdam|AEX; Euronext Parijs|Euronext Paris|Beurs van Parijs|Paris Bourse|CAC 40;
      Frankfurter Wertpapierbörse|Frankfurt Stock Exchange|Beurs van Frankfurt|Deutsche Börse|DAX; Tokyo Stock Exchange|Tokyo Stock Exchange|Beurs van Tokio|Nikkei;
      Shanghai Stock Exchange|Shanghai Stock Exchange|Beurs van Shanghai; Hong Kong Stock Exchange|Hong Kong Stock Exchange|HKEX|Beurs van Hongkong|Hang Seng;
      Shenzhen Stock Exchange; Bombay Stock Exchange|Bombay Stock Exchange|BSE|Beurs van Mumbai; National Stock Exchange of India|National Stock Exchange of India|NSE;
      Toronto Stock Exchange|Toronto Stock Exchange|TSX; Australian Securities Exchange|Australian Securities Exchange|ASX; SIX Swiss Exchange|SIX Swiss Exchange|Beurs van Zürich;
      Nasdaq Stockholm|Nasdaq Stockholm|Beurs van Stockholm; Nasdaq Copenhagen|Nasdaq Copenhagen|Beurs van Kopenhagen; Nasdaq Helsinki|Nasdaq Helsinki|Beurs van Helsinki;
      Euronext Oslo|Oslo Stock Exchange|Oslo Børs|Beurs van Oslo; Bolsa de Madrid|Madrid Stock Exchange|Beurs van Madrid|BME;
      Borsa Italiana|Borsa Italiana|Euronext Milan|Beurs van Milaan; Euronext Lissabon|Euronext Lisbon|Beurs van Lissabon;
      Euronext Dublin|Euronext Dublin|Irish Stock Exchange|Beurs van Dublin; Wiener Börse|Vienna Stock Exchange|Beurs van Wenen;
      Beurs van Warschau|Warsaw Stock Exchange|GPW; Beurs van Praag|Prague Stock Exchange; Beurs van Boedapest|Budapest Stock Exchange;
      Beurs van Athene|Athens Stock Exchange; Borsa Istanbul|Borsa Istanbul|Beurs van Istanbul; Moscow Exchange|Moscow Exchange|MOEX|Beurs van Moskou;
      Tel Aviv Stock Exchange|Tel Aviv Stock Exchange|TASE; B3|B3|Bovespa|Beurs van São Paulo; Bolsa Mexicana|Mexican Stock Exchange|BMV|Beurs van Mexico;
      Bolsa de Santiago|Santiago Stock Exchange; Bolsa de Buenos Aires|Buenos Aires Stock Exchange|BYMA; Bolsa de Lima|Lima Stock Exchange|BVL;
      Johannesburg Stock Exchange|Johannesburg Stock Exchange|JSE|Beurs van Johannesburg; Egyptian Exchange|Egyptian Exchange|EGX;
      Nigerian Exchange|Nigerian Exchange|NGX|Nigerian Stock Exchange; Nairobi Securities Exchange; Bourse de Casablanca|Casablanca Stock Exchange;
      Tadawul|Saudi Exchange|Tadawul; Dubai Financial Market|Dubai Financial Market|DFM; Abu Dhabi Securities Exchange|Abu Dhabi Securities Exchange|ADX;
      Qatar Stock Exchange; Korea Exchange|Korea Exchange|KRX|KOSPI; Taiwan Stock Exchange|Taiwan Stock Exchange|TWSE; Singapore Exchange|Singapore Exchange|SGX;
      Bursa Malaysia; Stock Exchange of Thailand|Stock Exchange of Thailand|SET; Philippine Stock Exchange|Philippine Stock Exchange|PSE;
      Indonesia Stock Exchange|Indonesia Stock Exchange|IDX; Ho Chi Minh Stock Exchange|Ho Chi Minh Stock Exchange|HOSE; Pakistan Stock Exchange|Pakistan Stock Exchange|PSX;
      Chicago Mercantile Exchange|Chicago Mercantile Exchange|CME; Cboe|Cboe|Chicago Board Options Exchange; Chicago Board of Trade|Chicago Board of Trade|CBOT;
      London Metal Exchange|London Metal Exchange|LME; Beurs van Antwerpen|Antwerp Exchange|Antwerpse Beurs|Antwerp bourse` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
