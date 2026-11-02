/* Brillion · geschiedenis
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam.
   (NAVO en EU-uitbreiding staan in countries.js.) */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('history', [
    { id: 'us-presidents', nl: 'Noem een president van de Verenigde Staten', en: 'Name a President of the United States', a: `
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
    { id: 'roman-emperors', nl: 'Noem een Romeinse keizer (van Augustus tot 476)', en: 'Name a Roman emperor (from Augustus to 476)', a: `
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
    { id: 'wonders', nl: 'Noem een wereldwonder (uit de oudheid of een van de nieuwe zeven)', en: 'Name a wonder of the world (ancient, or one of the New Seven)', a: `
      Chinese Muur|Great Wall of China|Great Wall; Piramides van Gizeh|Pyramids of Giza|Piramide van Cheops|Great Pyramid of Giza|Piramides|Pyramids|Grote Piramide;
      Machu Picchu; Colosseum|Colosseum|Coliseum; Taj Mahal; Christus de Verlosser|Christ the Redeemer|Cristo Redentor|Christusbeeld; Petra;
      Chichén Itzá|Chichen Itza; Hangende tuinen van Babylon|Hanging Gardens of Babylon|Hangende tuinen; Kolossus van Rhodos|Colossus of Rhodes|Kolos van Rhodos;
      Vuurtoren van Alexandrië|Lighthouse of Alexandria|Pharos van Alexandrië|Pharos; Tempel van Artemis|Temple of Artemis|Artemision;
      Zeusbeeld van Olympia|Statue of Zeus at Olympia|Beeld van Zeus|Zeusbeeld; Mausoleum van Halicarnassus|Mausoleum at Halicarnassus|Mausoleum` },
    { id: 'popes', nl: 'Noem een paus sinds 1900', en: 'Name a pope since 1900', a: `
      Franciscus|Francis|Paus Franciscus|Pope Francis; Johannes Paulus II|John Paul II|Johannes Paulus; Benedictus XVI|Benedict XVI|Benedictus;
      Leo XIV|Leo XIV|Leo|Prevost; Johannes XXIII|John XXIII|Johannes; Paulus VI|Paul VI|Paulus; Johannes Paulus I|John Paul I;
      Pius XII|Pius XII|Pius; Pius XI; Pius X; Benedictus XV|Benedict XV; Leo XIII` },
    { id: 'greek-gods', nl: 'Noem een Griekse god of godin (Romeinse namen tellen niet)', en: "Name a Greek god or goddess (Roman names don't count)", a: `
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
    { id: 'egyptian-gods', nl: 'Noem een god of godin uit het oude Egypte', en: 'Name a god or goddess of ancient Egypt', a: `
      Ra|Ra|Re; Osiris; Isis; Anubis; Horus; Seth|Set; Thoth|Thoth|Thot|Djehuti; Amon|Amun|Amon-Ra|Amun-Ra; Bastet|Bastet|Bast; Sobek;
      Hathor; Ptah; Aton|Aten; Nut; Geb; Sjoe|Shu; Tefnut; Nephthys; Maat|Ma'at; Sekhmet|Sekhmet|Sachmet; Chnoem|Khnum; Chonsoe|Khonsu; Montu;
      Min; Mut; Neith; Taweret|Taweret|Taueret; Bes; Apophis|Apophis|Apep; Atum|Atum|Atoem; Amaunet; Hapi; Heket|Heqet; Meretseger; Nekhbet;
      Wadjet; Serket|Selket; Imhotep; Aker; Ammit|Ammut; Anuket|Anukis; Satet|Satis; Seshat; Sopdu; Wepwawet; Chepri|Khepri; Renenutet;
      Mafdet; Meskhenet; Hu; Sia; Heh|Huh; Nun; Shezmu; Mehen; Babi; Resjef|Reshep|Resheph; Serapis; Harpocrates|Harpokrates; Iah|Aah;
      Kebechet; Qetesh; Menhit; Pakhet; Tatenen` },
    { id: 'norse-gods', nl: 'Noem een god of godin uit de Noordse mythologie', en: 'Name a god or goddess from Norse mythology', a: `
      Odin|Odin|Wodan|Wotan|Woden; Thor|Thor|Donar; Loki; Freya|Freyja|Freya; Frigg|Frigg|Frigga; Baldr|Baldur|Balder; Tyr|Tyr|Týr;
      Heimdall|Heimdall|Heimdallr; Freyr|Frey|Freyr; Njord|Njörðr|Njord; Idun|Iðunn|Idunn|Iduna; Bragi; Hel|Hel|Hela; Skadi|Skaði;
      Sif; Vidar|Víðarr; Vali|Váli; Ullr|Ullr|Ull; Forseti; Hodr|Höðr|Hod; Hermod|Hermóðr; Eir; Sigyn; Gefjon|Gefjun|Gefion; Nanna;
      Saga; Var; Vor|Vör; Syn; Hlin; Snotra; Gna; Fulla; Lofn; Sjofn|Sjöfn; Mimir|Mímir; Aegir|Ægir; Ran|Rán; Kvasir; Hoenir|Hœnir;
      Jord|Jörð|Fjörgyn; Sol|Sól|Sunna; Mani|Máni; Nott|Nótt; Dagr; Ymir; Surtr|Surt` },
    { id: 'philosophers', nl: 'Noem een filosoof uit de Griekse of Romeinse oudheid', en: 'Name a philosopher from ancient Greece or Rome', a: `
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
    { id: 'moonwalkers', nl: 'Noem een astronaut die op de maan liep', en: 'Name an astronaut who walked on the Moon', a: `
      Neil Armstrong|Neil Armstrong|Armstrong; Buzz Aldrin|Buzz Aldrin|Aldrin|Edwin Aldrin; Alan Shepard|Alan Shepard|Shepard;
      Pete Conrad|Pete Conrad|Conrad|Charles Conrad; Eugene Cernan|Gene Cernan|Cernan; Alan Bean|Alan Bean|Bean; Edgar Mitchell|Edgar Mitchell|Mitchell;
      David Scott|David Scott|Scott|Dave Scott; James Irwin|James Irwin|Jim Irwin|Irwin; John Young|John Young|Young;
      Charles Duke|Charles Duke|Charlie Duke|Duke; Harrison Schmitt|Harrison Schmitt|Jack Schmitt|Schmitt` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
