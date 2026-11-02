/* Brillion · muziek
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam. */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('music', [
    { id: 'eurovision', nl: 'Noem een land dat het Eurovisiesongfestival won (t.e.m. 2025)', en: 'Name a country that has won the Eurovision Song Contest (up to 2025)', a: `
      Zweden|Sweden; Ierland|Ireland; Nederland|Netherlands|Holland; Oekraïne|Ukraine; Italië|Italy;
      Verenigd Koninkrijk|United Kingdom|VK|UK|Engeland|England; Frankrijk|France; Noorwegen|Norway; Denemarken|Denmark;
      Israël|Israel; Zwitserland|Switzerland; Oostenrijk|Austria; Duitsland|Germany; België|Belgium; Finland; Portugal;
      Griekenland|Greece; Luxemburg|Luxembourg; Spanje|Spain; Rusland|Russia; Servië|Serbia; Azerbeidzjan|Azerbaijan;
      Estland|Estonia; Letland|Latvia; Turkije|Turkey; Monaco; Joegoslavië|Yugoslavia` },
    { id: 'orchestra', nl: 'Noem een instrument uit een symfonieorkest', en: 'Name an instrument found in a symphony orchestra', a: `
      Viool|Violin; Cello|Cello|Violoncel; Contrabas|Double bass|Contrabass; Dwarsfluit|Flute|Fluit; Trompet|Trumpet; Klarinet|Clarinet;
      Hobo|Oboe; Trombone|Trombone|Schuiftrompet; Hoorn|French horn|Horn|Waldhoorn; Pauken|Timpani|Pauk|Keteltrom; Harp;
      Altviool|Viola; Fagot|Bassoon; Tuba; Piano|Piano|Vleugel; Grote trom|Bass drum; Kleine trom|Snare drum|Trom; Bekkens|Cymbals|Cimbalen;
      Triangel|Triangle; Xylofoon|Xylophone; Piccolo|Piccolo|Piccolofluit; Klokkenspel|Glockenspiel; Buisklokken|Tubular bells|Klokken;
      Celesta; Orgel|Organ; Tamboerijn|Tambourine; Gong|Gong|Tamtam; Marimba; Vibrafoon|Vibraphone; Castagnetten|Castanets;
      Engelse hoorn|Cor anglais|English horn|Althobo; Basklarinet|Bass clarinet; Contrafagot|Contrabassoon; Bastrombone|Bass trombone;
      Saxofoon|Saxophone|Sax; Klavecimbel|Harpsichord; Es-klarinet|E-flat clarinet; Wagnertuba|Wagner tuba;
      Houtblok|Wood block|Woodblock; Zweep|Whip|Slapstick; Ratel|Ratchet; Windmachine|Wind machine; Crotales` },
    { id: 'strings', nl: 'Noem een snaarinstrument', en: 'Name a string instrument', a: `
      Gitaar|Guitar; Viool|Violin; Cello; Harp; Basgitaar|Bass guitar|Bas; Contrabas|Double bass; Ukelele|Ukulele; Banjo;
      Mandoline|Mandolin; Elektrische gitaar|Electric guitar; Altviool|Viola; Piano; Luit|Lute; Sitar; Citer|Zither; Balalaika;
      Lier|Lyre; Klavecimbel|Harpsichord; Bouzouki; Akoestische gitaar|Acoustic guitar; Klassieke gitaar|Classical guitar|Spaanse gitaar;
      Twaalfsnarige gitaar|Twelve-string guitar|12-snarige gitaar; Hakkebord|Hammered dulcimer|Dulcimer; Draailier|Hurdy-gurdy;
      Koto; Shamisen; Erhu; Oud|Oud|Ud; Pipa; Guzheng; Charango; Cavaquinho; Kora; Santoor|Santoor|Santur; Veena|Veena|Vina;
      Sarod; Kantele; Rebab; Nyckelharpa; Steelgitaar|Pedal steel guitar|Pedal steel; Lap steel|Lap steel guitar; Autoharp;
      Theorbe|Theorbo; Cister|Cittern; Psalterium|Psaltery; Berimbau; Tres; Cuatro; Guitarrón|Guitarron;
      Viola da gamba|Viola da gamba|Gamba; Clavichord; Baglama|Baglama|Saz; Domra; Gusli; Tanpura; Esraj; Sarangi; Dombra;
      Komuz; Gayageum; Valiha; Ngoni; Bandura; Ektara; Dotara; Bajo sexto` },
    { id: 'wind', nl: 'Noem een blaasinstrument', en: 'Name a wind instrument', a: `
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
    { id: 'taylor-swift', nl: 'Noem een studioalbum van Taylor Swift', en: 'Name a Taylor Swift studio album', a: `
      1989; Midnights; Folklore; Red; Lover; Reputation; Fearless;
      The Tortured Poets Department|The Tortured Poets Department|Tortured Poets Department|TTPD; Evermore;
      The Life of a Showgirl|The Life of a Showgirl|Life of a Showgirl; Speak Now; Taylor Swift|Taylor Swift|Debut` },
    { id: 'beatles', nl: 'Noem een studioalbum van The Beatles', en: 'Name a studio album by The Beatles', a: `
      Abbey Road; Sgt. Pepper's Lonely Hearts Club Band|Sgt. Pepper's Lonely Hearts Club Band|Sgt Pepper|Sgt. Pepper; Let It Be;
      Revolver; Het Witte Album|The White Album|White Album|The Beatles; Help!|Help!|Help; Rubber Soul; A Hard Day's Night;
      Yellow Submarine; Magical Mystery Tour; Please Please Me; With the Beatles; Beatles for Sale` },
    { id: 'genres', nl: 'Noem een muziekgenre', en: 'Name a music genre', a: `
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
    { id: 'composers', nl: 'Noem een componist van klassieke muziek', en: 'Name a classical music composer', a: `
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
    { id: 'dance', nl: 'Noem een dansstijl', en: 'Name a dance style', a: `
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
    { id: 'be-festivals', nl: 'Noem een muziekfestival in België', en: 'Name a music festival in Belgium', a: `
      Tomorrowland; Rock Werchter|Rock Werchter|Werchter; Pukkelpop; Graspop Metal Meeting|Graspop Metal Meeting|Graspop;
      Dour Festival|Dour Festival|Dour; Lokerse Feesten|Lokerse Feesten|Lokeren; Gentse Feesten; Les Ardentes|Les Ardentes|Ardentes;
      Couleur Café|Couleur Cafe; Suikerrock; Cactusfestival|Cactus Festival|Cactus; Laundry Day;
      Extrema Outdoor Belgium|Extrema Outdoor|Extrema; Paradise City; Reggae Geel|Reggae Geel|Reggae Festival Geel;
      Folk Dranouter|Dranouter Festival|Dranouter; Sfinks|Sfinks Mixed|Sfinks Festival; Crammerock; Rock Herk; Rock Zottegem;
      Fire is Gold; WECANDANCE|We Can Dance; Brussels Summer Festival|Brussels Summer Festival|BSF; Jazz Middelheim|Jazz Middelheim|Middelheim;
      Gent Jazz|Gent Jazz|Gent Jazz Festival; Esperanzah!|Esperanzah|Esperanzah; Ronquières Festival|Ronquieres Festival|Ronquières;
      Boomtown|Boomtown|Boomtown Festival; Leffingeleuren; Polé Polé|Pole Pole; Feest in het Park; Bear Rock; Nandrin Festival|Nandrin Festival|Nandrin;
      TW Classic; Werchter Boutique; Groezrock; Alcatraz|Alcatraz|Alcatraz Metal Festival; Ieperfest|Ieperfest|Ieper Hardcore Fest;
      Rampage|Rampage|Rampage Open Air; Summer Festival|Antwerp Summer Festival; Afro-Latino Festival|Afro-Latino Festival|Afro Latino;
      Mano Mundo; Fiesta Europa; Antilliaanse Feesten; Fête de la Musique|Fete de la Musique; Marktrock; Rock Ternat; Bucolique;
      Jazz à Liège|Jazz a Liege; Brosella; Inc'Rock|Incrock; Rock Olmen; Dunk! Festival|Dunk Festival|Dunk; Hear Hear; Linkerwoofer` },
    { id: 'grammy-aoty', nl: 'Noem een artiest die de Grammy voor Album van het Jaar won (uitreikingen 2000-2025)', en: 'Name an artist who won the Grammy for Album of the Year (ceremonies 2000–2025)', a: `
      Taylor Swift|Taylor Swift|Swift; Adele; Billie Eilish|Billie Eilish|Billie; Beyoncé|Beyonce; Bruno Mars; Harry Styles; Daft Punk;
      U2; Ray Charles; Norah Jones; OutKast; Santana|Santana|Carlos Santana; Mumford & Sons|Mumford & Sons|Mumford and Sons; Beck;
      Kacey Musgraves; Jon Batiste; Arcade Fire; The Chicks|The Chicks|Dixie Chicks|Chicks; Robert Plant; Alison Krauss;
      Herbie Hancock|Herbie Hancock|Hancock; Steely Dan; O Brother, Where Art Thou?|O Brother, Where Art Thou?|O Brother` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
