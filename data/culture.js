/* ─────────────────────────────────────────────────────────────
   Brillion · cultuur (klassiekers uit muziek, film, strips en schaken)
   Elk antwoord: NL|EN|andere namen. Volgorde = van vaak genoemd naar
   zeldzaam: de eerste 20% is Gewoon, de laatste 20% 1 in a Brillion.
   lvl = moeilijkheid (1 makkelijk · 2 gemiddeld · 3 moeilijk).
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('culture', [
    { id: 'eurovision', lvl: 2, nl: 'Noem een land dat het Eurovisiesongfestival won (t.e.m. 2025)', en: 'Name a country that has won the Eurovision Song Contest (up to 2025)', a: `
      Zweden|Sweden; Ierland|Ireland; Nederland|Netherlands|Holland; Oekraïne|Ukraine; Italië|Italy;
      Verenigd Koninkrijk|United Kingdom|VK|UK|Engeland|England; Frankrijk|France; Noorwegen|Norway; Denemarken|Denmark;
      Israël|Israel; Zwitserland|Switzerland; Oostenrijk|Austria; Duitsland|Germany; België|Belgium; Finland; Portugal;
      Griekenland|Greece; Luxemburg|Luxembourg; Spanje|Spain; Rusland|Russia; Servië|Serbia; Azerbeidzjan|Azerbaijan;
      Estland|Estonia; Letland|Latvia; Turkije|Turkey; Monaco; Joegoslavië|Yugoslavia` },
    { id: 'orchestra', lvl: 1, nl: 'Noem een instrument uit een symfonieorkest', en: 'Name an instrument found in a symphony orchestra', a: `
      Viool|Violin; Cello|Cello|Violoncel; Contrabas|Double bass|Contrabass; Dwarsfluit|Flute|Fluit; Trompet|Trumpet; Klarinet|Clarinet;
      Hobo|Oboe; Trombone|Trombone|Schuiftrompet; Hoorn|French horn|Horn|Waldhoorn; Pauken|Timpani|Pauk|Keteltrom; Harp;
      Altviool|Viola; Fagot|Bassoon; Tuba; Piano|Piano|Vleugel; Grote trom|Bass drum; Kleine trom|Snare drum|Trom; Bekkens|Cymbals|Cimbalen;
      Triangel|Triangle; Xylofoon|Xylophone; Piccolo|Piccolo|Piccolofluit; Klokkenspel|Glockenspiel; Buisklokken|Tubular bells|Klokken;
      Celesta; Orgel|Organ; Tamboerijn|Tambourine; Gong|Gong|Tamtam; Marimba; Vibrafoon|Vibraphone; Castagnetten|Castanets;
      Engelse hoorn|Cor anglais|English horn|Althobo; Basklarinet|Bass clarinet; Contrafagot|Contrabassoon; Bastrombone|Bass trombone;
      Saxofoon|Saxophone|Sax; Klavecimbel|Harpsichord; Es-klarinet|E-flat clarinet; Wagnertuba|Wagner tuba;
      Houtblok|Wood block|Woodblock; Zweep|Whip|Slapstick; Ratel|Ratchet; Windmachine|Wind machine; Crotales` },
    { id: 'strings', lvl: 1, nl: 'Noem een snaarinstrument', en: 'Name a string instrument', a: `
      Gitaar|Guitar; Viool|Violin; Cello; Harp; Basgitaar|Bass guitar|Bas; Contrabas|Double bass; Ukelele|Ukulele; Banjo;
      Mandoline|Mandolin; Elektrische gitaar|Electric guitar; Altviool|Viola; Piano; Luit|Lute; Sitar; Citer|Zither; Balalaika;
      Lier|Lyre; Klavecimbel|Harpsichord; Bouzouki; Akoestische gitaar|Acoustic guitar; Klassieke gitaar|Classical guitar|Spaanse gitaar;
      Twaalfsnarige gitaar|Twelve-string guitar|12-snarige gitaar; Hakkebord|Hammered dulcimer|Dulcimer; Draailier|Hurdy-gurdy;
      Koto; Shamisen; Erhu; Oud|Oud|Ud; Pipa; Guzheng; Charango; Cavaquinho; Kora; Santoor|Santoor|Santur; Veena|Veena|Vina;
      Sarod; Kantele; Rebab; Nyckelharpa; Steelgitaar|Pedal steel guitar|Pedal steel; Lap steel|Lap steel guitar; Autoharp;
      Theorbe|Theorbo; Cister|Cittern; Psalterium|Psaltery; Berimbau; Tres; Cuatro; Guitarrón|Guitarron;
      Viola da gamba|Viola da gamba|Gamba; Clavichord; Baglama|Baglama|Saz; Domra; Gusli; Tanpura; Esraj; Sarangi; Dombra;
      Komuz; Gayageum; Valiha; Ngoni; Bandura; Ektara; Dotara; Bajo sexto` },
    { id: 'wind', lvl: 1, nl: 'Noem een blaasinstrument', en: 'Name a wind instrument', a: `
      Fluit|Flute|Dwarsfluit; Trompet|Trumpet; Saxofoon|Saxophone|Sax; Klarinet|Clarinet; Blokfluit|Recorder;
      Trombone|Trombone|Schuiftrompet; Tuba; Hobo|Oboe; Hoorn|French horn|Horn|Waldhoorn; Doedelzak|Bagpipes|Bagpipe;
      Mondharmonica|Harmonica; Fagot|Bassoon; Panfluit|Pan flute|Panpipes; Piccolo; Didgeridoo; Melodica;
      Alpenhoorn|Alphorn|Alpine horn; Ocarina; Bugel|Flugelhorn; Kornet|Cornet; Sousafoon|Sousaphone; Eufonium|Euphonium; Kazoo;
      Vuvuzela; Engelse hoorn|Cor anglais|English horn; Tinwhistle|Tin whistle|Irish whistle|Penny whistle; Shakuhachi; Duduk;
      Sjofar|Shofar; Zurna; Bansuri; Basklarinet|Bass clarinet; Contrafagot|Contrabassoon; Altsaxofoon|Alto saxophone|Altsax;
      Tenorsaxofoon|Tenor saxophone|Tenorsax; Baritonsaxofoon|Baritone saxophone|Baritonsax; Sopraansaxofoon|Soprano saxophone|Sopraansax;
      Bariton|Baritone horn; Natuurhoorn|Natural horn; Jachthoorn|Hunting horn|Posthoorn|Post horn; Schalmei|Shawm; Kromhoorn|Crumhorn;
      Serpent; Ofikleïde|Ophicleide; Zink|Cornett; Uilleann pipes; Bombarde; Ney|Ney|Nay; Quena; Siku; Xun; Hichiriki; Sho; Suona;
      Sheng; Hulusi; Khene|Khene|Khaen; Launeddas; Aulos; Fife; Schelphoorn|Conch|Conch shell` },
    { id: 'genres', lvl: 1, nl: 'Noem een muziekgenre', en: 'Name a music genre', a: `
      Pop; Rock; Hiphop|Hip hop|Hip-hop; Rap; Jazz; Klassiek|Classical|Klassieke muziek|Classical music; Techno; House;
      R&B|R&B|Rhythm and blues|RnB; Metal|Metal|Heavy metal; Reggae; Blues; Country; Dance; EDM|EDM|Electronic dance music;
      Elektronische muziek|Electronic music|Electronic|Elektro|Electro; Punk|Punk|Punkrock; Soul; Funk; Disco; Reggaeton;
      K-pop|K-pop|Kpop; Indie|Indie|Indierock|Indie rock; Folk; Hardstyle; Drum and bass|Drum and bass|Drum & bass|DnB; Dubstep;
      Trap; Gospel; Opera; Latin; Salsa; Schlager; Rock-'n-roll|Rock and roll|Rock 'n' roll|Rock n roll; Grunge;
      Alternatieve rock|Alternative rock|Alternative; Hardrock|Hard rock; Trance; Ska; Afrobeats|Afrobeats|Afrobeat; Drill; Grime;
      Lo-fi|Lo-fi|Lofi; Ambient; Deep house; Tech house; Hardcore; Gabber; Jumpstyle; New beat; Levenslied; Kleinkunst;
      Smartlap; Chanson; Flamenco; Tango; Samba; Bossa nova; Cumbia; Bachata; Merengue; Mariachi; Ranchera; Corrido; Zouk;
      Kizomba; Kompa; Dancehall; Dub; Rocksteady; Calypso; Soca; Amapiano; Highlife; Juju; Mbalax; Gnawa; Raï|Rai; Qawwali;
      Bhangra; Bollywood|Bollywood|Filmi; J-pop|J-pop|Jpop; Mandopop|Mandopop|C-pop; Cantopop; City pop; Enka; Fado; Rebetiko;
      Klezmer; Polka; Volksmuziek|Folk music; Bluegrass; Americana; Rockabilly; Doo-wop|Doo wop; Motown; Swing; Bebop; Big band;
      Ragtime; Dixieland; Jazzfusion|Jazz fusion|Fusion; Acid jazz; Neo-soul; Synthpop|Synth-pop; New wave; Postpunk|Post-punk;
      Shoegaze; Emo; Screamo; Poppunk|Pop punk; Metalcore; Deathcore; Death metal; Black metal; Thrash metal; Doom metal;
      Power metal; Nu metal; Glamrock|Glam rock; Glam metal; Progressieve rock|Progressive rock|Prog rock|Prog;
      Psychedelische rock|Psychedelic rock|Psychedelic; Krautrock; Stoner rock; Garagerock|Garage rock; Surfrock|Surf rock|Surf;
      Britpop; Madchester; Triphop|Trip hop|Trip-hop; Breakbeat; Jungle; UK garage|UK garage|Garage; 2-step; Hyperpop; Phonk;
      Vaporwave; Chillwave; Synthwave|Synthwave|Retrowave; Industrial; EBM; Electroclash; Minimal techno|Minimal techno|Minimal;
      Acid house; Hard techno; Happy hardcore; Eurodance; Italo disco; Hi-NRG; Big beat; Downtempo; Chillout; Lounge;
      Easy listening; New age; Musical|Musical|Musicals; Filmmuziek|Film score|Soundtrack; Barok|Baroque|Barokmuziek;
      Gregoriaans|Gregorian chant|Gregoriaanse muziek; Minimal music|Minimal music|Minimalisme; Avant-garde; Noise;
      Experimentele muziek|Experimental music|Experimental; Wereldmuziek|World music; A capella|A cappella; Barbershop; Spirituals;
      Christelijke muziek|Christian music|CCM; Worship; Carnavalsmuziek|Carnival music; Après-ski|Apres-ski; Tropical house;
      Future bass; Moombahton; Baile funk|Baile funk|Funk carioca; Kuduro; Gqom; Afro house; Progressive house; Electro house;
      Big room; Bass house; Frenchcore; Uptempo; Speedcore; Breakcore; IDM; Glitch; Chiptune; Bedroom pop; Dream pop; Indiepop|Indie pop;
      Art pop; Electropop; Dance-pop; Teen pop; Bubblegum pop; Power pop; Soft rock; Yacht rock; Arena rock|Arena rock|AOR;
      Southern rock; Bluesrock|Blues rock; Folkrock|Folk rock; Country rock; Alt-country; Outlaw country; Honky-tonk; Western swing;
      Zydeco; Cajun; Tejano|Tejano|Tex-Mex; Norteño|Norteno; Latin pop; Latin trap; Dembow; MPB; Forró|Forro; Axé|Axe; Sertanejo;
      Pagode; Choro; Tropicália|Tropicalia; Son cubano|Son cubano|Son; Rumba; Mambo; Cha-cha-cha; Bolero; Habanera; Morna; Semba;
      Kwaito; Taarab; Benga; Soukous; Ndombolo; Congolese rumba|Congolese rumba|Rumba congolaise; Afropop` },
    { id: 'composers', lvl: 2, nl: 'Noem een componist van klassieke muziek', en: 'Name a classical music composer', a: `
      Wolfgang Amadeus Mozart|Wolfgang Amadeus Mozart|Mozart; Ludwig van Beethoven|Ludwig van Beethoven|Beethoven;
      Johann Sebastian Bach|Johann Sebastian Bach|Bach; Antonio Vivaldi|Antonio Vivaldi|Vivaldi;
      Pjotr Iljitsj Tsjaikovski|Pyotr Ilyich Tchaikovsky|Tsjaikovski|Tchaikovsky; Frédéric Chopin|Frederic Chopin|Chopin;
      Joseph Haydn|Joseph Haydn|Haydn; Johann Strauss II|Johann Strauss II|Strauss|Johann Strauss; Richard Wagner|Richard Wagner|Wagner;
      Georg Friedrich Händel|George Frideric Handel|Händel|Handel|Haendel; Franz Schubert|Franz Schubert|Schubert;
      Johannes Brahms|Johannes Brahms|Brahms; Giuseppe Verdi|Giuseppe Verdi|Verdi; Claude Debussy|Claude Debussy|Debussy;
      Antonín Dvořák|Antonin Dvorak|Dvorak; Edvard Grieg|Edvard Grieg|Grieg; Franz Liszt|Franz Liszt|Liszt; Gustav Mahler|Gustav Mahler|Mahler;
      Felix Mendelssohn|Felix Mendelssohn|Mendelssohn; Giacomo Puccini|Giacomo Puccini|Puccini;
      Sergej Rachmaninov|Sergei Rachmaninoff|Rachmaninov|Rachmaninoff; Maurice Ravel|Maurice Ravel|Ravel;
      Robert Schumann|Robert Schumann|Schumann; Igor Stravinsky|Igor Stravinsky|Stravinsky|Strawinsky; Erik Satie|Erik Satie|Satie;
      Camille Saint-Saëns|Camille Saint-Saens|Saint-Saëns; Gioachino Rossini|Gioachino Rossini|Rossini; Georges Bizet|Georges Bizet|Bizet;
      Sergej Prokofjev|Sergei Prokofiev|Prokofjev|Prokofiev; Dmitri Sjostakovitsj|Dmitri Shostakovich|Sjostakovitsj|Shostakovich;
      Gabriel Fauré|Gabriel Faure|Fauré; Hector Berlioz|Hector Berlioz|Berlioz; Anton Bruckner|Anton Bruckner|Bruckner;
      Jean Sibelius|Jean Sibelius|Sibelius; Nikolaj Rimski-Korsakov|Nikolai Rimsky-Korsakov|Rimski-Korsakov|Rimsky-Korsakov;
      Modest Moessorgski|Modest Mussorgsky|Moessorgski|Mussorgsky; Richard Strauss; Gustav Holst|Gustav Holst|Holst;
      Edward Elgar|Edward Elgar|Elgar; George Gershwin|George Gershwin|Gershwin; Leonard Bernstein|Leonard Bernstein|Bernstein;
      Philip Glass|Philip Glass|Glass; Ennio Morricone|Ennio Morricone|Morricone; Hans Zimmer|Hans Zimmer|Zimmer; John Williams;
      Arvo Pärt|Arvo Part|Pärt; Henry Purcell|Henry Purcell|Purcell; Claudio Monteverdi|Claudio Monteverdi|Monteverdi;
      Jean-Philippe Rameau|Jean-Philippe Rameau|Rameau; Jean-Baptiste Lully|Jean-Baptiste Lully|Lully; François Couperin|Francois Couperin|Couperin;
      Georg Philipp Telemann|Georg Philipp Telemann|Telemann; Domenico Scarlatti|Domenico Scarlatti|Scarlatti; Alessandro Scarlatti;
      Arcangelo Corelli|Arcangelo Corelli|Corelli; Tomaso Albinoni|Tomaso Albinoni|Albinoni; Johann Pachelbel|Johann Pachelbel|Pachelbel;
      Giovanni Pierluigi da Palestrina|Giovanni Pierluigi da Palestrina|Palestrina; Josquin des Prez|Josquin des Prez|Josquin;
      Hildegard von Bingen|Hildegard von Bingen|Hildegard van Bingen|Hildegard; Christoph Willibald Gluck|Christoph Willibald Gluck|Gluck;
      Carl Philipp Emanuel Bach|Carl Philipp Emanuel Bach|C.P.E. Bach; Luigi Boccherini|Luigi Boccherini|Boccherini;
      Antonio Salieri|Antonio Salieri|Salieri; Niccolò Paganini|Niccolo Paganini|Paganini; Gaetano Donizetti|Gaetano Donizetti|Donizetti;
      Vincenzo Bellini|Vincenzo Bellini|Bellini; Carl Maria von Weber|Carl Maria von Weber|Weber; César Franck|Cesar Franck|Franck;
      Eugène Ysaÿe|Eugene Ysaye|Ysaÿe; Henri Vieuxtemps|Henri Vieuxtemps|Vieuxtemps; Peter Benoit|Peter Benoit|Benoit;
      Orlandus Lassus|Orlande de Lassus|Lassus; Guillaume Dufay|Guillaume Dufay|Dufay; Johannes Ockeghem|Johannes Ockeghem|Ockeghem;
      Wim Mertens; Léo Delibes|Leo Delibes|Delibes; Jules Massenet|Jules Massenet|Massenet; Charles Gounod|Charles Gounod|Gounod;
      Jacques Offenbach|Jacques Offenbach|Offenbach; Paul Dukas|Paul Dukas|Dukas; Francis Poulenc|Francis Poulenc|Poulenc;
      Olivier Messiaen|Olivier Messiaen|Messiaen; Pierre Boulez|Pierre Boulez|Boulez; Karlheinz Stockhausen|Karlheinz Stockhausen|Stockhausen;
      John Cage|John Cage|Cage; Steve Reich|Steve Reich|Reich; Arnold Schönberg|Arnold Schoenberg|Schönberg|Schoenberg;
      Alban Berg|Alban Berg|Berg; Anton Webern|Anton Webern|Webern; Béla Bartók|Bela Bartok|Bartók|Bartok;
      Zoltán Kodály|Zoltan Kodaly|Kodály; Leoš Janáček|Leos Janacek|Janáček; Bedřich Smetana|Bedrich Smetana|Smetana;
      Aleksandr Borodin|Alexander Borodin|Borodin; Michail Glinka|Mikhail Glinka|Glinka; Aleksandr Skrjabin|Alexander Scriabin|Skrjabin|Scriabin;
      Isaac Albéniz|Isaac Albeniz|Albéniz; Manuel de Falla|Manuel de Falla|De Falla; Enrique Granados|Enrique Granados|Granados;
      Joaquín Rodrigo|Joaquin Rodrigo|Rodrigo; Heitor Villa-Lobos|Heitor Villa-Lobos|Villa-Lobos; Astor Piazzolla|Astor Piazzolla|Piazzolla;
      Carl Orff|Carl Orff|Orff; Paul Hindemith|Paul Hindemith|Hindemith; Kurt Weill|Kurt Weill|Weill; Benjamin Britten|Benjamin Britten|Britten;
      Ralph Vaughan Williams|Ralph Vaughan Williams|Vaughan Williams; Samuel Barber|Samuel Barber|Barber; Aaron Copland|Aaron Copland|Copland;
      Charles Ives|Charles Ives|Ives; Ludovico Einaudi|Ludovico Einaudi|Einaudi; Max Richter|Max Richter|Richter; Yann Tiersen|Yann Tiersen|Tiersen;
      Michael Nyman|Michael Nyman|Nyman; Ólafur Arnalds|Olafur Arnalds|Arnalds; Joe Hisaishi|Joe Hisaishi|Hisaishi; Clara Schumann;
      Fanny Mendelssohn|Fanny Mendelssohn|Fanny Hensel; Ottorino Respighi|Ottorino Respighi|Respighi; Pietro Mascagni|Pietro Mascagni|Mascagni;
      Ruggero Leoncavallo|Ruggero Leoncavallo|Leoncavallo; Engelbert Humperdinck|Engelbert Humperdinck|Humperdinck; Max Bruch|Max Bruch|Bruch;
      Johann Strauss I|Johann Strauss I|Johann Strauss senior; Franz von Suppé|Franz von Suppe|Suppé; Carl Nielsen|Carl Nielsen|Nielsen;
      Jan Pieterszoon Sweelinck|Jan Pieterszoon Sweelinck|Sweelinck; Louis Andriessen|Louis Andriessen|Andriessen` },
    { id: 'dance', lvl: 1, nl: 'Noem een dansstijl', en: 'Name a dance style', a: `
      Salsa; Tango; Ballet; Breakdance|Breakdance|Breaking|Breakdancen; Hiphopdans|Hip-hop dance|Hiphop|Hip hop; Wals|Waltz; Flamenco;
      Samba; Cha-cha-cha|Cha-cha-cha|Cha-cha; Rumba; Tapdans|Tap dance|Tap|Tapdansen; Jazzdans|Jazz dance; Moderne dans|Modern dance;
      Hedendaagse dans|Contemporary dance|Contemporary; Bachata; Merengue; Kizomba; Zumba; Twerk|Twerking|Twerken;
      Buikdans|Belly dance|Buikdansen; Linedance|Line dance|Linedancen; Disco; Swing; Lindy hop|Lindy hop|Lindyhop; Charleston; Jive;
      Quickstep; Foxtrot; Weense wals|Viennese waltz; Paso doble|Paso doble|Pasodoble; Polka; Ierse dans|Irish dance|Irish dancing;
      Square dance; Volksdans|Folk dance; Cancan|Can-can|Cancan; Bolero; Mambo; Dancehall; Voguing|Voguing|Vogue; Krump; Popping;
      Locking; House dance|House dance|House; Shuffle|Shuffle|Shuffelen; Jumpstyle; Tecktonik|Tecktonik|Electro dance; Capoeira;
      Haka; Sirtaki; Kathak; Bharatanatyam; Bollywooddans|Bollywood dance|Bollywood; Cumbia; Forró|Forro; Axé|Axe; Kuduro;
      Afrodance|Afro dance|Afrobeats dance; Waacking; Tutting; Stepping|Stepping|Step; Klompendansen|Clog dancing|Clogging;
      Morrisdans|Morris dance; Lambada; Mazurka; Polonaise; Menuet|Minuet; Gavotte; Quadrille; Hora; Hopak|Hopak|Kozakkendans;
      Limbo; Hula; Macarena; Paaldansen|Pole dance|Paaldans; Acrodans|Acro dance; Boogie-woogie|Boogie-woogie|Boogie woogie;
      Rock-'n-roll|Rock and roll dance|Rock 'n' roll; West Coast Swing; Balboa; Shag; Hustle; Kompa; Zouk; Semba; Milonga; Sardana;
      Jota; Fandango; Sevillanas; Tarantella; Saltarello; Schuhplattler; Ländler|Landler; Csárdás|Csardas; Garba; Dandiya; Odissi;
      Kuchipudi; Kathakali; Butoh; Leeuwendans|Lion dance; Drakendans|Dragon dance; Sabar; Gumbootdans|Gumboot dance; Pantsula;
      Azonto; Ndombolo; Coupé-décalé|Coupe-decale; Ori Tahiti|Ori Tahiti|Tahitiaanse dans; Stijldansen|Ballroom dance|Ballroom;
      Latin|Latin dance|Latijns-Amerikaans dansen` },
    { id: 'bond', lvl: 2, nl: 'Noem een officiële James Bond-film', en: 'Name an official James Bond film', a: `
      Skyfall; Casino Royale; Goldfinger; No Time to Die; Spectre; GoldenEye|GoldenEye|Golden Eye; Dr. No|Dr. No|Doctor No;
      Quantum of Solace; Die Another Day; Tomorrow Never Dies; The World Is Not Enough; From Russia with Love; Thunderball;
      Live and Let Die; You Only Live Twice; Moonraker; The Spy Who Loved Me; Octopussy; A View to a Kill;
      Licence to Kill|Licence to Kill|License to Kill; The Man with the Golden Gun; Diamonds Are Forever; For Your Eyes Only;
      The Living Daylights; On Her Majesty's Secret Service|On Her Majesty's Secret Service|OHMSS` },
    { id: 'best-picture', lvl: 3, nl: 'Noem een film die de Oscar voor Beste Film won (uitreikingen 2001-2025)', en: 'Name a film that won the Oscar for Best Picture (ceremonies 2001–2025)', a: `
      Oppenheimer; Parasite; The Lord of the Rings: The Return of the King|The Lord of the Rings: The Return of the King|Return of the King|Lord of the Rings;
      Gladiator; Slumdog Millionaire; The Departed;
      Everything Everywhere All at Once|Everything Everywhere All at Once|Everything Everywhere; A Beautiful Mind; The King's Speech;
      Green Book; Argo; 12 Years a Slave|12 Years a Slave|Twelve Years a Slave; Birdman; The Shape of Water; Moonlight; Anora; Chicago;
      Million Dollar Baby; No Country for Old Men; The Artist; Spotlight; CODA; Nomadland; Crash; The Hurt Locker` },
    { id: 'star-wars', lvl: 2, nl: 'Noem een Star Wars-film die in de bioscoop uitkwam', en: 'Name a Star Wars film released in cinemas', a: `
      A New Hope|A New Hope|Star Wars|Episode IV|Star Wars Episode IV; The Empire Strikes Back|The Empire Strikes Back|Empire Strikes Back|Episode V;
      Return of the Jedi|Return of the Jedi|Episode VI; The Phantom Menace|The Phantom Menace|Phantom Menace|Episode I;
      Attack of the Clones|Attack of the Clones|Episode II; Revenge of the Sith|Revenge of the Sith|Episode III;
      The Force Awakens|The Force Awakens|Force Awakens|Episode VII; The Last Jedi|The Last Jedi|Last Jedi|Episode VIII;
      The Rise of Skywalker|The Rise of Skywalker|Rise of Skywalker|Episode IX; Rogue One|Rogue One|Rogue One: A Star Wars Story;
      Solo|Solo|Solo: A Star Wars Story; The Mandalorian & Grogu|The Mandalorian & Grogu|The Mandalorian and Grogu;
      The Clone Wars|The Clone Wars|Clone Wars|Star Wars: The Clone Wars` },
    { id: 'disney', lvl: 1, nl: 'Noem een tekenfilm van Walt Disney Animation Studios (dus geen Pixar)', en: 'Name a Walt Disney Animation Studios film (so not Pixar)', a: `
      De Leeuwenkoning|The Lion King|Lion King; Frozen; Aladdin; Sneeuwwitje en de zeven dwergen|Snow White and the Seven Dwarfs|Sneeuwwitje|Snow White;
      De Kleine Zeemeermin|The Little Mermaid|Little Mermaid; Belle en het Beest|Beauty and the Beast; Assepoester|Cinderella;
      Rapunzel|Tangled; Vaiana|Moana; Mulan; Zootropolis|Zootopia; Frozen II|Frozen II|Frozen 2; Bambi; Dumbo; Pinokkio|Pinocchio;
      Doornroosje|Sleeping Beauty; Peter Pan; Jungle Boek|The Jungle Book|Het Jungle Boek|Jungle Book; Pocahontas;
      Lilo & Stitch|Lilo & Stitch|Lilo en Stitch; Tarzan; Hercules; Encanto; Big Hero 6; Wreck-It Ralph;
      101 Dalmatiërs|One Hundred and One Dalmatians|101 Dalmatians; Alice in Wonderland; De Aristokatten|The Aristocats|Aristokatten|Aristocats;
      Robin Hood; Lady en de Vagebond|Lady and the Tramp; Fantasia; De Prinses en de Kikker|The Princess and the Frog|Prinses en de kikker;
      De Klokkenluider van de Notre Dame|The Hunchback of Notre Dame|De klokkenluider|Hunchback; Keizer Kuzco|The Emperor's New Groove|Kuzco;
      Vaiana 2|Moana 2; Zootropolis 2|Zootopia 2; Raya en de Laatste Draak|Raya and the Last Dragon|Raya; Wish;
      Ralph Breaks the Internet|Ralph Breaks the Internet|Wreck-It Ralph 2; Bolt; Atlantis: De Verzonken Stad|Atlantis: The Lost Empire|Atlantis;
      Brother Bear|Brother Bear|Broeder Beer; Merlijn de Tovenaar|The Sword in the Stone|Merlijn; Frank en Frey|The Fox and the Hound;
      De Reddertjes|The Rescuers|Reddertjes; De Reddertjes in Kangoeroeland|The Rescuers Down Under; Chicken Little;
      Meet the Robinsons|Meet the Robinsons|De Robinsons; Piratenplaneet|Treasure Planet; Strange World;
      Basil de Speurneus|The Great Mouse Detective|Basil; Oliver & Co.|Oliver & Company|Oliver en Co; Taran en de Toverketel|The Black Cauldron;
      Winnie de Poeh|Winnie the Pooh; De Avonturen van Winnie de Poeh|The Many Adventures of Winnie the Pooh; Dinosaur|Dinosaur|Dinosaurus;
      Paniek op de Prairie|Home on the Range; Fantasia 2000; Saludos Amigos; De Drie Caballeros|The Three Caballeros;
      Make Mine Music; Fun and Fancy Free; Melody Time; De Avonturen van Ichabod en Meneer Pad|The Adventures of Ichabod and Mr. Toad|Ichabod` },
    { id: 'car-brands', lvl: 1, nl: 'Noem een automerk', en: 'Name a car brand', a: `
      Volkswagen|Volkswagen|VW; BMW; Mercedes-Benz|Mercedes-Benz|Mercedes; Audi; Toyota; Ford; Tesla; Ferrari; Porsche; Peugeot; Renault;
      Opel; Lamborghini; Fiat; Volvo; Citroën|Citroen; Honda; Nissan; Kia; Hyundai; Škoda|Skoda; Seat; Mazda; Jaguar; Land Rover;
      Range Rover; Mini; Bugatti; Maserati; Alfa Romeo; Aston Martin; Bentley; Rolls-Royce|Rolls-Royce|Rolls Royce; McLaren; Dacia;
      Suzuki; Mitsubishi; Subaru; Lexus; Jeep; Chevrolet|Chevrolet|Chevy; Cadillac; Dodge; Smart; Lotus; Chrysler; Lancia; Cupra;
      Polestar; BYD; MG; DS|DS|DS Automobiles; Alpine; Lynk & Co|Lynk & Co|Lynk and Co; Genesis; Infiniti; Acura; Lincoln; Buick; GMC;
      Ram; Hummer; Pontiac; Saab; Rover; Daewoo; Lada; Trabant; Wartburg; Daihatsu; Isuzu; SsangYong|SsangYong|Ssangyong|KGM; Tata;
      Mahindra; Maruti Suzuki|Maruti Suzuki|Maruti; Proton; Perodua; Geely; Chery; Great Wall|Great Wall|Great Wall Motors|GWM; Haval;
      Nio; Xpeng; Li Auto; Zeekr; Leapmotor; Ora; Hongqi; Wuling; Aiways; Seres; Omoda; Jaecoo; Xiaomi; Lucid; Rivian; Fisker;
      Koenigsegg; Pagani; Rimac; Spyker; Donkervoort; DAF; Minerva; Imperia; FN; Gillet; Excelsior; Hispano-Suiza|Hispano Suiza;
      Delahaye; Panhard; Simca; Talbot; Matra; Facel Vega; Venturi; Ligier; Aixam; Microcar; Morgan; Caterham; TVR; Ariel; Noble;
      Ginetta; Vauxhall; Austin; Morris; Triumph; Sunbeam; Hillman; Riley; Wolseley; Jensen; Bristol; DeLorean|DeLorean|De Lorean;
      Studebaker; Packard; Oldsmobile; Plymouth; Mercury; Saturn; AMC; Nash; Hudson; Tucker; Cord; Duesenberg; Auburn; Pierce-Arrow;
      Shelby; SSC; Hennessey; Saleen; Karma; Faraday Future; Lordstown; Canoo; Borgward; NSU; DKW; Horch; Wanderer; Maybach; Artega;
      Wiesmann; Apollo|Apollo|Gumpert; Melkus; Iso; Bizzarrini; De Tomaso; Autobianchi; Innocenti; Abarth; Dallara; Zenvo; Tatra;
      Praga; Aro; Zastava; Yugo; Moskvitsj|Moskvich; GAZ|GAZ|Volga; UAZ; ZIL; Hindustan|Hindustan Motors|Hindustan Ambassador; Datsun;
      Scion; Mitsuoka; Holden; JAC; Dongfeng; FAW; SAIC; Roewe; Maxus; Changan; Baojun; Ineos|Ineos|Ineos Grenadier; VinFast; Togg;
      Iran Khodro; Saipa; Bufori; Pininfarina|Automobili Pininfarina; Alpina; Brabus; Ruf; Mansory; Polski Fiat; FSO; Avtovaz|AvtoVAZ` },
    { id: 'board-games', lvl: 1, nl: 'Noem een bordspel', en: 'Name a board game', a: `
      Monopoly; Schaken|Chess; Dammen|Draughts|Checkers; Mens erger je niet|Ludo|Mens-erger-je-niet; Scrabble; Risk|Risk|Risico;
      Cluedo|Cluedo|Clue; Stratego; Ganzenbord|Game of the Goose; De Kolonisten van Catan|Catan|Kolonisten van Catan|Settlers of Catan;
      Trivial Pursuit; Wie is het?|Guess Who?|Wie is het; Vier op een rij|Connect Four|Connect 4; Zeeslag|Battleship; Rummikub;
      Pictionary; Carcassonne; Ticket to Ride|Ticket to Ride|Les Aventuriers du Rail; Pandemic; Backgammon|Backgammon|Triktrak; Go;
      Mahjong|Mahjong|Mahjongg; Othello|Othello|Reversi; Mastermind; Operatie|Operation; Levensweg|The Game of Life|Game of Life;
      Halma|Halma|Chinees dambord|Chinese checkers; Mancala|Mancala|Bao|Oware; Azul; 7 Wonders; Dixit; Codenames; Splendor;
      Hotel; 30 Seconds; Party & Co|Party en Co; Qwirkle; Agricola; Puerto Rico; Terraforming Mars; Gloomhaven; Wingspan;
      Scythe; Twilight Struggle; Hoogspanning|Power Grid; El Grande; Tikal; Small World; King of Tokyo; Machi Koro; Patchwork;
      Cascadia; Everdell; Root; Spirit Island; Brass; Concordia; Great Western Trail; Viticulture; Lords of Waterdeep;
      Arkham Horror; Betrayal at House on the Hill; Mysterium; Just One; Keezen; Pim Pam Pet; Blokus; Quarto; Quoridor; Abalone;
      Hive; Santorini; Onitama; Tsuro; Kingdomino; Takenoko; Camel Up; Istanbul; Five Tribes; Alhambra; Dead of Winter; Zombicide;
      Descent; HeroQuest; Diplomacy; Axis & Allies|Axis and Allies; Twilight Imperium; Eclipse; Through the Ages; Le Havre; Caylus;
      Stone Age; Ra; Modern Art; Acquire; Cranium; Boggle; Yahtzee|Yahtzee|Yathzee; Triominos; Sorry!|Sorry; Parcheesi; Pachisi;
      Kerplunk|Kerplunk|Ker-Plunk; Jenga; Twister; Sagrada; Lost Ruins of Arnak|Lost Ruins of Arnak|Arnak;
      Ark Nova; Dune: Imperium|Dune: Imperium|Dune Imperium; Heat; Clank!|Clank; Flamme Rouge; Kingsburg; Tzolk'in|Tzolkin; Gaia Project;
      Mage Knight; Robinson Crusoe; Too Many Bones; Nemesis; Cthulhu Wars` },
    { id: 'card-games', lvl: 1, nl: 'Noem een kaartspel', en: 'Name a card game', a: `
      Poker; Blackjack|Blackjack|Eenentwintigen|21; Pesten; Patience|Solitaire; UNO|Uno; Bridge; Klaverjassen|Klaverjas;
      Hartenjagen|Hearts|Harten; Rummy; Canasta; Whist|Whist|Wiezen; Manillen|Manille; Kingen|King; Boerenbridge;
      Eenendertigen|31|Eenendertig; Pandoeren; Rikken; Toepen; Bonken; Jokeren; President|President|Keizer; Oorlogje|War|Oorlog;
      Liegen|Cheat|Bluffen|Ik twijfel|I doubt it; Kwartet|Happy Families|Kwartetten; Go Fish|Go Fish|Vissen; Crazy Eights; Mau-mau;
      Speed; Spit; Gin rummy; Cribbage; Euchre; Piquet; Belote|Belote|Belotte; Tarot|Tarot|Franse tarot; Skat; Schafkopf; Doppelkopf;
      Jass|Jass|Jassen; Briscola; Scopa; Tressette; Mus; Brisca; Chinchón|Chinchon; Durak; Tute; Baccarat|Baccarat|Baccara;
      Texas Hold'em|Texas Hold'em|Texas Holdem|Hold'em; Magic: The Gathering|Magic: The Gathering|Magic|MTG;
      Pokémon TCG|Pokemon TCG|Pokémonkaarten|Pokemon kaarten|Pokémon Trading Card Game; Yu-Gi-Oh!|Yu-Gi-Oh|Yugioh; Hearthstone;
      Exploding Kittens; Dobble|Dobble|Spot It; Skip-Bo|Skip-Bo|Skipbo; Phase 10; Set; Halli Galli; Hanabi; Love Letter; The Mind;
      Coup; Bang!|Bang; Sushi Go!|Sushi Go; Dominion; Gwent; Pinochle; Spades; Bezique; Zevenen|Sevens|Fan Tan; Snap; Slapjack;
      Egyptian Ratscrew; Bohnanza|Bohnanza|Boonanza; Citadels|Citadels|Machiavelli; Saboteur; Wizard; Ligretto;
      6 nimmt!|6 nimmt|Take 5|Hornochsen; Fluxx; Munchkin; Cards Against Humanity; Uno Flip; Spider Solitaire|Spider Solitaire|Spider;
      FreeCell|Freecell; Klondike` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
