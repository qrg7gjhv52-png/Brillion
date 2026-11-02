/* Brillion · film & tv
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam. */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('film', [
    { id: 'pixar', nl: 'Noem een langspeelfilm van Pixar', en: 'Name a Pixar feature film', a: `
      Toy Story; Finding Nemo|Finding Nemo|Nemo; Cars; Monsters en Co.|Monsters, Inc.|Monsters Inc|Monsters & Co;
      De Incredibles|The Incredibles|Incredibles; Ratatouille; Up; WALL-E|WALL-E|Wall E; Coco; Binnenstebuiten|Inside Out;
      Toy Story 2; Toy Story 3; Toy Story 4; Finding Dory|Finding Dory|Dory; Monsters University; Cars 2; Cars 3;
      Merida de Dappere|Brave|Merida; Binnenstebuiten 2|Inside Out 2; Incredibles 2|Incredibles 2|De Incredibles 2; Soul; Luca;
      Red|Turning Red; Een luizenleven|A Bug's Life; Onward; Lightyear; Elementair|Elemental; De Goede Dinosaurus|The Good Dinosaur;
      Elio; Toy Story 5; Hoppers` },
    { id: 'mcu', nl: 'Noem een film uit het Marvel Cinematic Universe', en: 'Name a film from the Marvel Cinematic Universe', a: `
      Avengers: Endgame|Avengers: Endgame|Endgame; Iron Man; Avengers: Infinity War|Avengers: Infinity War|Infinity War;
      The Avengers|The Avengers|Avengers; Black Panther; Spider-Man: No Way Home|Spider-Man: No Way Home|No Way Home;
      Guardians of the Galaxy; Thor; Captain America: Civil War|Captain America: Civil War|Civil War; Doctor Strange;
      Captain America: The First Avenger|Captain America: The First Avenger|The First Avenger|Captain America;
      Thor: Ragnarok|Thor: Ragnarok|Ragnarok; Spider-Man: Homecoming|Spider-Man: Homecoming|Homecoming;
      Deadpool & Wolverine|Deadpool & Wolverine|Deadpool and Wolverine; Captain Marvel; Ant-Man; Black Widow; Iron Man 2; Iron Man 3;
      Avengers: Age of Ultron|Avengers: Age of Ultron|Age of Ultron;
      Captain America: The Winter Soldier|Captain America: The Winter Soldier|The Winter Soldier|Winter Soldier;
      Guardians of the Galaxy Vol. 2|Guardians of the Galaxy Vol. 2|Guardians of the Galaxy 2;
      Guardians of the Galaxy Vol. 3|Guardians of the Galaxy Vol. 3|Guardians of the Galaxy 3;
      Spider-Man: Far From Home|Spider-Man: Far From Home|Far From Home; Thor: The Dark World|Thor: The Dark World|The Dark World;
      Thor: Love and Thunder|Thor: Love and Thunder|Love and Thunder;
      Black Panther: Wakanda Forever|Black Panther: Wakanda Forever|Wakanda Forever|Black Panther 2;
      Doctor Strange in the Multiverse of Madness|Doctor Strange in the Multiverse of Madness|Multiverse of Madness|Doctor Strange 2;
      Shang-Chi and the Legend of the Ten Rings|Shang-Chi and the Legend of the Ten Rings|Shang-Chi; Eternals;
      Ant-Man and the Wasp|Ant-Man and the Wasp|Ant-Man 2; Ant-Man and the Wasp: Quantumania|Ant-Man and the Wasp: Quantumania|Quantumania|Ant-Man 3;
      The Incredible Hulk|The Incredible Hulk|Incredible Hulk|Hulk; The Marvels;
      Captain America: Brave New World|Captain America: Brave New World|Brave New World|Captain America 4; Thunderbolts*|Thunderbolts*|Thunderbolts;
      The Fantastic Four: First Steps|The Fantastic Four: First Steps|Fantastic Four|First Steps|Fantastic 4;
      Spider-Man: Brand New Day|Spider-Man: Brand New Day|Brand New Day|Spider-Man 4` },
    { id: 'bond', nl: 'Noem een officiële James Bond-film', en: 'Name an official James Bond film', a: `
      Skyfall; Casino Royale; Goldfinger; No Time to Die; Spectre; GoldenEye|GoldenEye|Golden Eye; Dr. No|Dr. No|Doctor No;
      Quantum of Solace; Die Another Day; Tomorrow Never Dies; The World Is Not Enough; From Russia with Love; Thunderball;
      Live and Let Die; You Only Live Twice; Moonraker; The Spy Who Loved Me; Octopussy; A View to a Kill;
      Licence to Kill|Licence to Kill|License to Kill; The Man with the Golden Gun; Diamonds Are Forever; For Your Eyes Only;
      The Living Daylights; On Her Majesty's Secret Service|On Her Majesty's Secret Service|OHMSS` },
    { id: 'hp-spells', nl: 'Noem een spreuk uit Harry Potter', en: 'Name a spell from Harry Potter', a: `
      Expelliarmus; Wingardium Leviosa; Expecto Patronum; Avada Kedavra; Lumos; Alohomora; Accio; Crucio; Imperio; Obliviate;
      Stupefy|Stupefy|Paralitis; Sectumsempra; Riddikulus|Riddikulus|Ridiculus; Petrificus Totalus; Nox; Levicorpus; Protego; Reparo;
      Incendio; Morsmordre; Aguamenti; Episkey; Rictusempra; Tarantallegra; Serpensortia; Finite Incantatem|Finite Incantatem|Finite;
      Muffliato; Legilimens; Confundo; Diffindo; Engorgio; Reducio; Reducto; Impedimenta; Silencio; Sonorus; Quietus; Liberacorpus;
      Langlock; Orchideous; Avis; Oppugno; Densaugeo; Furnunculus; Locomotor Mortis; Locomotor; Mobiliarbus; Mobilicorpus;
      Wijs me|Point Me; Portus; Prior Incantato|Prior Incantato|Priori Incantatem; Rennervate|Rennervate|Enervate; Scourgify; Tergeo;
      Deletrius; Specialis Revelio; Anapneo; Colloportus; Expulso; Glisseo; Homenum Revelio; Piertotum Locomotor; Salvio Hexia;
      Cave Inimicum; Protego Totalum; Protego Maxima; Repello Muggletum; Fianto Duri; Geminio; Descendo; Duro; Relashio; Waddiwasi;
      Arresto Momentum; Ascendio; Bombarda; Bombarda Maxima; Brackium Emendo; Capacious Extremis; Defodio; Deprimo; Ferula;
      Flagrate; Herbivicus; Immobulus; Incarcerous; Lumos Maxima; Lumos Solem; Meteolojinx Recanto; Obscuro; Pack;
      Peskipiksi Pesternomi; Vulnera Sanentur; Oculus Reparo; Dissendium; Alarte Ascendare; Lacarnum Inflamari; Ventus` },
    { id: 'best-picture', nl: 'Noem een film die de Oscar voor Beste Film won (uitreikingen 2001-2025)', en: 'Name a film that won the Oscar for Best Picture (ceremonies 2001–2025)', a: `
      Oppenheimer; Parasite; The Lord of the Rings: The Return of the King|The Lord of the Rings: The Return of the King|Return of the King|Lord of the Rings;
      Gladiator; Slumdog Millionaire; The Departed;
      Everything Everywhere All at Once|Everything Everywhere All at Once|Everything Everywhere; A Beautiful Mind; The King's Speech;
      Green Book; Argo; 12 Years a Slave|12 Years a Slave|Twelve Years a Slave; Birdman; The Shape of Water; Moonlight; Anora; Chicago;
      Million Dollar Baby; No Country for Old Men; The Artist; Spotlight; CODA; Nomadland; Crash; The Hurt Locker` },
    { id: 'nolan', nl: 'Noem een film van regisseur Christopher Nolan', en: 'Name a film directed by Christopher Nolan', a: `
      Inception; Interstellar; The Dark Knight; Oppenheimer; Tenet; Dunkirk; Batman Begins; The Prestige; Memento;
      The Dark Knight Rises; The Odyssey; Insomnia; Following` },
    { id: 'star-wars', nl: 'Noem een Star Wars-film die in de bioscoop uitkwam', en: 'Name a Star Wars film released in cinemas', a: `
      A New Hope|A New Hope|Star Wars|Episode IV|Star Wars Episode IV; The Empire Strikes Back|The Empire Strikes Back|Empire Strikes Back|Episode V;
      Return of the Jedi|Return of the Jedi|Episode VI; The Phantom Menace|The Phantom Menace|Phantom Menace|Episode I;
      Attack of the Clones|Attack of the Clones|Episode II; Revenge of the Sith|Revenge of the Sith|Episode III;
      The Force Awakens|The Force Awakens|Force Awakens|Episode VII; The Last Jedi|The Last Jedi|Last Jedi|Episode VIII;
      The Rise of Skywalker|The Rise of Skywalker|Rise of Skywalker|Episode IX; Rogue One|Rogue One|Rogue One: A Star Wars Story;
      Solo|Solo|Solo: A Star Wars Story; The Mandalorian & Grogu|The Mandalorian & Grogu|The Mandalorian and Grogu;
      The Clone Wars|The Clone Wars|Clone Wars|Star Wars: The Clone Wars` },
    { id: 'batman', nl: 'Noem een acteur die Batman speelde in een bioscoopfilm (geen animatie)', en: 'Name an actor who played Batman in a live-action film', a: `
      Christian Bale|Christian Bale|Bale; Robert Pattinson|Robert Pattinson|Pattinson; Ben Affleck|Ben Affleck|Affleck;
      Michael Keaton|Michael Keaton|Keaton; George Clooney|George Clooney|Clooney; Val Kilmer|Val Kilmer|Kilmer;
      Adam West|Adam West|West; Lewis Wilson|Lewis Wilson|Wilson; Robert Lowery|Robert Lowery|Lowery` },
    { id: 'disney', nl: 'Noem een tekenfilm van Walt Disney Animation Studios (dus geen Pixar)', en: 'Name a Walt Disney Animation Studios film (so not Pixar)', a: `
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
    { id: 'ghibli', nl: 'Noem een film van Studio Ghibli', en: 'Name a Studio Ghibli film', a: `
      Spirited Away|Spirited Away|Chihiro|Chihiro's reis naar het toverland; My Neighbor Totoro|My Neighbor Totoro|Totoro|Mijn buurman Totoro;
      Howl's Moving Castle|Howl's Moving Castle|Het wonderlijke kasteel van Howl|Howl; Princess Mononoke|Princess Mononoke|Prinses Mononoke|Mononoke;
      Kiki's Delivery Service|Kiki's Delivery Service|Kiki; Ponyo; The Boy and the Heron|The Boy and the Heron|De jongen en de reiger;
      Grave of the Fireflies|Grave of the Fireflies|Het graf van de vuurvliegjes; Castle in the Sky|Castle in the Sky|Laputa;
      Nausicaä of the Valley of the Wind|Nausicaa of the Valley of the Wind|Nausicaä; The Wind Rises|The Wind Rises|De wind steekt op;
      Arrietty|Arrietty|The Secret World of Arrietty; Porco Rosso; Whisper of the Heart; The Cat Returns;
      The Tale of the Princess Kaguya|The Tale of the Princess Kaguya|Princess Kaguya|Kaguya; When Marnie Was There|When Marnie Was There|Marnie;
      Tales from Earthsea|Tales from Earthsea|Earthsea; From Up on Poppy Hill|From Up on Poppy Hill|Poppy Hill; Pom Poko; Only Yesterday;
      My Neighbors the Yamadas|My Neighbors the Yamadas|Yamadas; Ocean Waves; Earwig and the Witch|Earwig and the Witch|Earwig;
      The Red Turtle|The Red Turtle|De rode schildpad` },
    { id: 'dicaprio', nl: 'Noem een film met Leonardo DiCaprio', en: 'Name a film starring Leonardo DiCaprio', a: `
      Titanic; Inception; The Wolf of Wall Street|The Wolf of Wall Street|Wolf of Wall Street; The Revenant; Catch Me If You Can;
      Shutter Island; The Great Gatsby|The Great Gatsby|Great Gatsby; Django Unchained|Django Unchained|Django;
      Once Upon a Time in Hollywood; The Departed; Romeo + Juliet|Romeo + Juliet|Romeo and Juliet|Romeo en Julia; Don't Look Up;
      Killers of the Flower Moon; Blood Diamond; The Aviator; Gangs of New York; One Battle After Another; The Beach;
      What's Eating Gilbert Grape|What's Eating Gilbert Grape|Gilbert Grape; The Man in the Iron Mask; Revolutionary Road; Body of Lies;
      J. Edgar; The Basketball Diaries; This Boy's Life; Marvin's Room; The Quick and the Dead; Total Eclipse; Celebrity;
      Critters 3; Don's Plum; Before the Flood; The 11th Hour` },
    { id: 'animated-oscar', nl: 'Noem een winnaar van de Oscar voor Beste Animatiefilm (uitreikingen 2002-2025)', en: 'Name a winner of the Oscar for Best Animated Feature (ceremonies 2002–2025)', a: `
      Frozen; Shrek; Finding Nemo|Finding Nemo|Nemo; Toy Story 3; Coco; Up; Ratatouille; Binnenstebuiten|Inside Out;
      De Incredibles|The Incredibles|Incredibles; Zootropolis|Zootopia; WALL-E|WALL-E|Wall E; Encanto;
      Spirited Away|Spirited Away|Chihiro; Toy Story 4; Big Hero 6; Soul; Merida de Dappere|Brave|Merida;
      Spider-Man: Into the Spider-Verse|Spider-Man: Into the Spider-Verse|Into the Spider-Verse|Spider-Verse; Happy Feet; Rango;
      Wallace & Gromit: The Curse of the Were-Rabbit|Wallace & Gromit: The Curse of the Were-Rabbit|Wallace & Gromit|Wallace and Gromit;
      The Boy and the Heron|The Boy and the Heron|De jongen en de reiger;
      Guillermo del Toro's Pinocchio|Guillermo del Toro's Pinocchio|Pinocchio; Flow` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
