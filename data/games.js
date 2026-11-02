/* Brillion · games & strips
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam. */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('games', [
    { id: 'pokemon', nl: 'Noem een Pokémon van de eerste generatie (nummer 1 t/m 151)', en: 'Name a first-generation Pokémon (number 1 to 151)', a: `
      Pikachu; Charizard; Bulbasaur; Squirtle; Charmander; Mewtwo; Mew; Eevee; Snorlax; Jigglypuff; Gengar; Psyduck; Meowth;
      Magikarp; Gyarados; Blastoise; Venusaur; Dragonite; Lapras; Ditto; Geodude; Onix; Machamp; Charmeleon; Raichu; Vaporeon;
      Jolteon; Flareon; Ivysaur; Wartortle; Caterpie; Butterfree; Pidgey; Rattata; Zubat; Golbat; Ekans; Arbok; Sandshrew; Vulpix;
      Ninetales; Growlithe; Arcanine; Abra; Kadabra; Alakazam; Machop; Tentacool; Ponyta; Rapidash; Slowpoke; Magnemite; Diglett;
      Dugtrio; Oddish; Bellsprout; Cubone; Marowak; Hitmonlee; Hitmonchan; Koffing; Chansey; Kangaskhan; Horsea; Goldeen; Staryu;
      Starmie; Mr. Mime|Mr. Mime|Mr Mime|Meneer Mime; Scyther; Jynx; Electabuzz; Magmar; Pinsir; Tauros; Aerodactyl; Articuno;
      Zapdos; Moltres; Dratini; Dragonair; Clefairy; Clefable; Pidgeotto; Pidgeot; Raticate; Spearow; Fearow; Weedle; Kakuna;
      Beedrill; Metapod; Haunter; Gastly; Golem; Graveler; Machoke; Poliwag; Poliwhirl; Poliwrath;
      Nidoran♀|Nidoran♀|Nidoran|Nidoran f|Nidoran vrouwtje; Nidorina; Nidoqueen; Nidoran♂|Nidoran♂|Nidoran m|Nidoran mannetje;
      Nidorino; Nidoking; Wigglytuff; Paras; Parasect; Venonat; Venomoth; Mankey; Primeape; Golduck; Persian; Sandslash;
      Tentacruel; Slowbro; Magneton; Farfetch'd|Farfetch'd|Farfetchd; Doduo; Dodrio; Seel; Dewgong; Grimer; Muk; Shellder;
      Cloyster; Drowzee; Hypno; Krabby; Kingler; Voltorb; Electrode; Exeggcute; Exeggutor; Lickitung; Weezing; Rhyhorn; Rhydon;
      Tangela; Seadra; Seaking; Omanyte; Omastar; Kabuto; Kabutops; Porygon; Weepinbell; Victreebel; Gloom; Vileplume` },
    { id: 'pokemon-types', nl: 'Noem een Pokémon-type', en: 'Name a Pokémon type', a: `
      Vuur|Fire; Water; Gras|Grass|Plant; Elektrisch|Electric|Elektriciteit; Psychisch|Psychic; Vliegend|Flying; Normaal|Normal;
      Geest|Ghost; Draak|Dragon; IJs|Ice; Vechten|Fighting|Vechter; Gif|Poison; Grond|Ground|Aarde; Gesteente|Rock|Steen|Rots;
      Insect|Bug|Kever; Duister|Dark|Duisternis; Staal|Steel|Metaal; Fee|Fairy|Elfje` },
    { id: 'mario', nl: 'Noem een personage uit de Super Mario-spellen', en: 'Name a character from the Super Mario games', a: `
      Mario; Luigi; Princess Peach|Princess Peach|Peach|Prinses Peach; Bowser; Yoshi; Toad; Princess Daisy|Princess Daisy|Daisy|Prinses Daisy;
      Wario; Waluigi; Donkey Kong|Donkey Kong|DK; Rosalina|Rosalina|Rosetta; Bowser Jr.|Bowser Jr.|Bowser Junior;
      Koopa Troopa|Koopa Troopa|Koopa; Goomba; Boo; Shy Guy; Birdo; Toadette; Diddy Kong; King Boo; Lakitu; Kamek; Bullet Bill;
      Piranha Plant|Piranha Plant|Piranha-plant; Dry Bones; Chain Chomp; Bob-omb|Bob-omb|Bobomb; Hammer Bro|Hammer Bro|Hammer Bros;
      Pauline; Captain Toad; Petey Piranha; Wiggler; Blooper; Cheep Cheep; Thwomp; Magikoopa; Monty Mole; Buzzy Beetle; Spiny; Pokey;
      Boom Boom; Pom Pom; Nabbit; Cappy; Professor E. Gadd|Professor E. Gadd|E. Gadd; Toadsworth; Baby Mario; Baby Luigi; Baby Peach;
      Baby Daisy; Baby Rosalina; Funky Kong; Dixie Kong; Cranky Kong; Candy Kong; King K. Rool|King K. Rool|K. Rool;
      Larry Koopa|Larry Koopa|Larry; Morton Koopa Jr.|Morton Koopa Jr.|Morton; Wendy O. Koopa|Wendy O. Koopa|Wendy;
      Iggy Koopa|Iggy Koopa|Iggy; Roy Koopa|Roy Koopa|Roy; Lemmy Koopa|Lemmy Koopa|Lemmy; Ludwig von Koopa|Ludwig von Koopa|Ludwig;
      Luma; Lubba; Spike; Fuzzy; Ninji; Sledge Bro; Dry Bowser; Tatanga; Wart; Geno; Mallow; Fawful; Dimentio; Count Bleck;
      Captain Syrup|Captain Syrup|Kapitein Syrup; Paratroopa|Paratroopa|Koopa Paratroopa` },
    { id: 'minecraft', nl: 'Noem een mob (wezen) uit Minecraft', en: 'Name a mob from Minecraft', a: `
      Creeper; Zombie; Enderman; Skeleton|Skeleton|Skelet; Spider|Spider|Spin; Villager|Villager|Dorpeling;
      Ender Dragon|Ender Dragon|Enderdraak|Enderdragon; Wither; Cow|Cow|Koe; Pig|Pig|Varken; Sheep|Sheep|Schaap; Chicken|Chicken|Kip;
      Iron Golem|Iron Golem|IJzergolem|IJzeren golem; Wolf; Cat|Cat|Kat; Horse|Horse|Paard; Ghast; Blaze; Slime; Witch|Witch|Heks;
      Piglin; Warden; Axolotl; Bee|Bee|Bij; Fox|Fox|Vos; Panda; Polar Bear|Polar Bear|IJsbeer; Llama|Llama|Lama;
      Parrot|Parrot|Papegaai; Dolphin|Dolphin|Dolfijn; Turtle|Turtle|Schildpad; Squid|Squid|Inktvis; Glow Squid|Glow Squid|Gloei-inktvis;
      Rabbit|Rabbit|Konijn; Goat|Goat|Geit; Frog|Frog|Kikker; Allay; Camel|Camel|Kameel; Sniffer; Armadillo|Armadillo|Gordeldier;
      Snow Golem|Snow Golem|Sneeuwgolem|Sneeuwpop; Magma Cube|Magma Cube|Magmakubus;
      Zombified Piglin|Zombified Piglin|Zombie Pigman|Zombie Piglin; Wither Skeleton|Wither Skeleton|Witherskelet;
      Pillager|Pillager|Plunderaar; Vindicator; Evoker; Ravager; Vex; Phantom|Phantom|Fantoom; Drowned|Drowned|Verdronkene; Husk;
      Stray; Guardian|Guardian|Bewaker; Elder Guardian|Elder Guardian|Oudere bewaker; Shulker; Silverfish|Silverfish|Zilvervisje;
      Endermite; Cave Spider|Cave Spider|Grotspin; Zombie Villager|Zombie Villager|Zombiedorpeling;
      Wandering Trader|Wandering Trader|Rondtrekkende handelaar; Hoglin; Zoglin; Strider; Piglin Brute;
      Mooshroom|Mooshroom|Paddenstoelkoe; Ocelot; Donkey|Donkey|Ezel; Mule|Mule|Muilezel; Skeleton Horse|Skeleton Horse|Skeletpaard;
      Zombie Horse|Zombie Horse|Zombiepaard; Bat|Bat|Vleermuis; Cod|Cod|Kabeljauw; Salmon|Salmon|Zalm; Pufferfish|Pufferfish|Kogelvis;
      Tropical Fish|Tropical Fish|Tropische vis; Tadpole|Tadpole|Kikkervisje; Trader Llama; Breeze; Bogged; Creaking; Happy Ghast;
      Copper Golem|Copper Golem|Koperen golem|Kopergolem; Giant|Giant|Reus; Illusioner; Killer Bunny; Nautilus; Zombie Nautilus;
      Camel Husk; Parched` },
    { id: 'consoles', nl: 'Noem een spelconsole van Nintendo, Sony, Microsoft of Sega', en: 'Name a games console made by Nintendo, Sony, Microsoft or Sega', a: `
      PlayStation 5|PlayStation 5|PS5; Nintendo Switch|Nintendo Switch|Switch; PlayStation 4|PlayStation 4|PS4; Xbox Series X;
      Wii|Wii|Nintendo Wii; PlayStation|PlayStation|PS1|PSX|PlayStation 1|PS One; PlayStation 2|PlayStation 2|PS2;
      PlayStation 3|PlayStation 3|PS3; Xbox 360; Xbox One; Xbox; Nintendo DS|Nintendo DS|DS; Game Boy|Game Boy|Gameboy;
      Nintendo Switch 2|Nintendo Switch 2|Switch 2; Nintendo 64|Nintendo 64|N64; NES|NES|Nintendo Entertainment System;
      Super Nintendo|Super Nintendo|SNES|Super NES; GameCube|GameCube|Nintendo GameCube; Wii U; Nintendo 3DS|Nintendo 3DS|3DS;
      PSP|PSP|PlayStation Portable; Game Boy Advance|Game Boy Advance|GBA; Game Boy Color|Game Boy Color|GBC; Xbox Series S;
      PS Vita|PS Vita|PlayStation Vita|Vita; Sega Mega Drive|Sega Mega Drive|Mega Drive|Sega Genesis|Genesis;
      Sega Dreamcast|Sega Dreamcast|Dreamcast; Sega Saturn|Sega Saturn|Saturn; Sega Master System|Sega Master System|Master System;
      Sega Game Gear|Sega Game Gear|Game Gear; Nintendo Switch Lite|Nintendo Switch Lite|Switch Lite;
      Nintendo Switch OLED|Nintendo Switch OLED|Switch OLED; PlayStation 5 Pro|PlayStation 5 Pro|PS5 Pro;
      PlayStation 4 Pro|PlayStation 4 Pro|PS4 Pro; Xbox One X; Xbox One S; Nintendo 2DS|Nintendo 2DS|2DS;
      New Nintendo 3DS|New Nintendo 3DS|New 3DS; Nintendo DS Lite|Nintendo DS Lite|DS Lite; Nintendo DSi|Nintendo DSi|DSi;
      Game Boy Pocket; Game Boy Micro; Game Boy Advance SP|Game Boy Advance SP|GBA SP; Virtual Boy;
      Game & Watch|Game & Watch|Game and Watch; Famicom|Famicom|Family Computer; Super Famicom; Mega-CD|Mega-CD|Sega CD|Mega CD;
      Sega 32X|Sega 32X|32X; Sega Nomad|Sega Nomad|Nomad; SG-1000|SG-1000|SG1000; Sega Pico|Sega Pico|Pico;
      Pokémon Mini|Pokemon Mini; Nintendo 64DD|Nintendo 64DD|64DD; Color TV-Game; PlayStation Portal|PlayStation Portal|PS Portal;
      PocketStation; NES Classic Mini|NES Classic Mini|NES Classic; SNES Classic Mini|SNES Classic Mini|SNES Classic;
      PlayStation Classic; Mega Drive Mini|Mega Drive Mini|Genesis Mini` },
    { id: 'gta', nl: 'Noem een spel uit de Grand Theft Auto-reeks', en: 'Name a game in the Grand Theft Auto series', a: `
      GTA V|Grand Theft Auto V|GTA 5; GTA San Andreas|Grand Theft Auto: San Andreas|San Andreas; GTA Vice City|Grand Theft Auto: Vice City|Vice City;
      GTA IV|Grand Theft Auto IV|GTA 4; GTA VI|Grand Theft Auto VI|GTA 6; GTA III|Grand Theft Auto III|GTA 3;
      GTA Online|Grand Theft Auto Online; GTA|Grand Theft Auto|GTA 1; GTA 2|Grand Theft Auto 2|GTA II;
      GTA Liberty City Stories|Grand Theft Auto: Liberty City Stories|Liberty City Stories;
      GTA Vice City Stories|Grand Theft Auto: Vice City Stories|Vice City Stories;
      GTA Chinatown Wars|Grand Theft Auto: Chinatown Wars|Chinatown Wars;
      GTA The Lost and Damned|Grand Theft Auto: The Lost and Damned|The Lost and Damned;
      GTA The Ballad of Gay Tony|Grand Theft Auto: The Ballad of Gay Tony|The Ballad of Gay Tony;
      GTA Advance|Grand Theft Auto Advance; GTA London 1969|Grand Theft Auto: London 1969|London 1969;
      GTA London 1961|Grand Theft Auto: London 1961|London 1961; GTA The Trilogy|Grand Theft Auto: The Trilogy|The Trilogy|Definitive Edition` },
    { id: 'tintin-albums', nl: 'Noem een album van Kuifje', en: 'Name a Tintin album', a: `
      Kuifje in Afrika|Tintin in the Congo|Kuifje in Congo; Kuifje in Tibet|Tintin in Tibet; Raket naar de maan|Destination Moon;
      Mannen op de maan|Explorers on the Moon; De Zwarte Rotsen|The Black Island|Zwarte rotsen;
      Het geheim van de Eenhoorn|The Secret of the Unicorn|Geheim van de Eenhoorn; De schat van Scharlaken Rackham|Red Rackham's Treasure;
      Kuifje in Amerika|Tintin in America; De sigaren van de farao|Cigars of the Pharaoh; De Blauwe Lotus|The Blue Lotus|Blauwe lotus;
      De krab met de gulden scharen|The Crab with the Golden Claws; Kuifje in het land van de Sovjets|Tintin in the Land of the Soviets|Land van de Sovjets;
      De 7 kristallen bollen|The Seven Crystal Balls|De zeven kristallen bollen; De Zonnetempel|Prisoners of the Sun;
      Het zwarte goud|Land of Black Gold; De geheimzinnige ster|The Shooting Star; De scepter van Ottokar|King Ottokar's Sceptre;
      Het gebroken oor|The Broken Ear; De zaak Zonnebloem|The Calculus Affair; Cokes in voorraad|The Red Sea Sharks;
      De juwelen van Bianca Castafiore|The Castafiore Emerald; Vlucht 714 naar Sydney|Flight 714 to Sydney|Vlucht 714;
      Kuifje en de Picaro's|Tintin and the Picaros|Picaros; Kuifje en de Alfa-kunst|Tintin and Alph-Art|Alfa-kunst|Alph-Art` },
    { id: 'tintin-characters', nl: 'Noem een personage uit Kuifje', en: 'Name a character from Tintin', a: `
      Kuifje|Tintin; Bobbie|Snowy|Milou; Kapitein Haddock|Captain Haddock|Haddock;
      Professor Zonnebloem|Professor Calculus|Zonnebloem|Calculus|Tournesol; Jansen en Janssen|Thomson and Thompson|Jansen|Janssen|Dupond et Dupont;
      Bianca Castafiore|Bianca Castafiore|Castafiore; Nestor; Rastapopoulos; Tsjang|Chang|Tchang; Generaal Alcazar|General Alcazar|Alcazar;
      Serafijn Lampion|Seraphin Lampion|Lampion; Abdallah|Abdullah; Allan|Allan Thompson; Oliveira da Figueira; Dr. Müller|Dr. Müller|Muller|Müller;
      Kolonel Sponsz|Colonel Sponsz|Sponsz; Irma; Igor Wagner|Igor Wagner|Wagner; Peggy Alcazar|Peggy Alcazar|Peggy;
      Generaal Tapioca|General Tapioca|Tapioca; Ben Kalish Ezab|Emir Ben Kalish Ezab|Emir; Zorrino; Laszlo Carreidas|Laszlo Carreidas|Carreidas;
      Ridgewell; Kapitein Chester|Captain Chester|Chester; Professor Bergamotte|Professor Bergamotte|Bergamotte; Mik Ezdanitoff|Mik Kanrokitoff|Ezdanitoff;
      Sakharine|Ivan Ivanovitch Sakharine; Ridder Frans van Haddock|Sir Francis Haddock|Francis Haddock; Scharlaken Rackham|Red Rackham|Rackham;
      Dawson; Frank Wolff|Frank Wolff|Wolff; Baxter; Mitsuhirato; Koning Muskar|King Muskar|Muskar; Kolonel Boris|Colonel Boris|Boris|Jorgen;
      Professor Calys|Professor Phostle|Calys; Professor Tarragon|Professor Tarragon|Tarragon; Rascar Capac; Huascar; Ramón Bada|Ramon Bada|Bada;
      Alonso Pérez|Alonso Perez|Perez; Rodrigo Tortilla|Rodrigo Tortilla|Tortilla; Piotr Szut|Piotr Skut|Szut|Skut; Cartoffoli|Arturo Benedetto Giovanni Giuseppe Pietro Archangelo Alfredo Cartoffoli di Milano` },
    { id: 'board-games', nl: 'Noem een bordspel', en: 'Name a board game', a: `
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
    { id: 'game-companies', nl: 'Noem een bedrijf dat videogames maakt of uitgeeft', en: 'Name a company that makes or publishes video games', a: `
      Nintendo; Sony|Sony|PlayStation Studios|Sony Interactive Entertainment; Microsoft|Microsoft|Xbox Game Studios|Xbox; Ubisoft; EA|Electronic Arts|EA Sports;
      Activision; Rockstar Games|Rockstar Games|Rockstar; Epic Games|Epic Games|Epic; Blizzard|Blizzard Entertainment; Valve;
      Bethesda; Riot Games|Riot Games|Riot; Mojang; Square Enix; Capcom; Sega; Bandai Namco; Konami; CD Projekt|CD Projekt|CD Projekt Red;
      FromSoftware|FromSoftware|From Software; Naughty Dog; Insomniac Games|Insomniac Games|Insomniac; Bungie; Supercell; King;
      Rovio; Niantic; Tencent; NetEase; HoYoverse|HoYoverse|miHoYo; Krafton; Nexon; Game Freak; Larian Studios|Larian Studios|Larian;
      2K|2K|2K Games; Take-Two Interactive|Take-Two Interactive|Take-Two; Gearbox; Firaxis; Paradox Interactive|Paradox Interactive|Paradox;
      id Software; Treyarch; Infinity Ward; BioWare; DICE|DICE|EA DICE; Respawn Entertainment|Respawn Entertainment|Respawn;
      Remedy Entertainment|Remedy Entertainment|Remedy; Guerrilla Games|Guerrilla Games|Guerrilla; Rare; Playground Games;
      Media Molecule; Rocksteady; Codemasters; Frontier Developments|Frontier Developments|Frontier; Creative Assembly; Team17;
      Hello Games; Supergiant Games|Supergiant Games|Supergiant; Team Cherry; ConcernedApe; Re-Logic; Innersloth; Psyonix;
      Bohemia Interactive; 4A Games; GSC Game World; Crytek; Atari; THQ|THQ|THQ Nordic; HAL Laboratory; Intelligent Systems;
      Retro Studios; Monolith Soft; Atlus; Koei Tecmo; Level-5; PlatinumGames|PlatinumGames|Platinum Games; Arc System Works; SNK;
      Taito; Hudson Soft; Namco; Squaresoft|Square|Squaresoft; Enix; Midway; Westwood Studios; Interplay; Obsidian Entertainment|Obsidian;
      inXile; Double Fine; Telltale Games|Telltale; Quantic Dream; Dontnod; Arkane Studios|Arkane; MachineGames; ZeniMax;
      Sucker Punch; Santa Monica Studio; Bend Studio; Polyphony Digital; Kojima Productions; 343 Industries; Turn 10;
      Ninja Theory; The Coalition; Housemarque; Sumo Digital; Ubisoft Montpellier; Kylotonn; Nacon; Focus Entertainment;
      Embracer Group|Embracer; Behaviour Interactive; Eidos; Io Interactive|IO Interactive|IOI; Avalanche Studios;
      Starbreeze; Mojang Studios; Roblox Corporation|Roblox; Unity; Zynga; Gameloft; Kabam; Moon Studios; Thatgamecompany;
      Annapurna Interactive; Devolver Digital|Devolver; Raw Fury; Team Ninja; Grasshopper Manufacture; Spike Chunsoft; Falcom` },
    { id: 'chess-champions', nl: 'Noem een wereldkampioen schaken (open toernooi, t.e.m. 2025)', en: 'Name a world chess champion (open title, up to 2025)', a: `
      Magnus Carlsen|Magnus Carlsen|Carlsen; Garri Kasparov|Garry Kasparov|Kasparov; Bobby Fischer|Bobby Fischer|Fischer;
      Anatoli Karpov|Anatoly Karpov|Karpov; Viswanathan Anand|Viswanathan Anand|Anand|Vishy Anand; Gukesh Dommaraju|Gukesh D|Gukesh|D. Gukesh;
      Ding Liren|Ding Liren|Ding; Vladimir Kramnik|Vladimir Kramnik|Kramnik; Michail Tal|Mikhail Tal|Tal; Boris Spasski|Boris Spassky|Spasski|Spassky;
      Max Euwe|Max Euwe|Euwe; José Raúl Capablanca|Jose Raul Capablanca|Capablanca; Emanuel Lasker|Emanuel Lasker|Lasker;
      Aleksandr Aljechin|Alexander Alekhine|Aljechin|Alekhine; Michail Botvinnik|Mikhail Botvinnik|Botvinnik;
      Tigran Petrosjan|Tigran Petrosian|Petrosjan|Petrosian; Vasili Smyslov|Vasily Smyslov|Smyslov; Wilhelm Steinitz|Wilhelm Steinitz|Steinitz;
      Veselin Topalov|Veselin Topalov|Topalov; Roeslan Ponomarjov|Ruslan Ponomariov|Ponomarjov|Ponomariov;
      Aleksandr Chalifman|Alexander Khalifman|Khalifman|Chalifman; Roestam Kasimdzjanov|Rustam Kasimdzhanov|Kasimdzhanov|Kasimdzjanov` },
    { id: 'card-games', nl: 'Noem een kaartspel', en: 'Name a card game', a: `
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
