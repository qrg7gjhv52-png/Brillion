/* Brillion · sport
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam. */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('sport', [
    { id: 'world-cup', nl: 'Noem een land dat het WK voetbal voor mannen won', en: "Name a country that has won the men's FIFA World Cup", a: `
      Brazilië|Brazil; Duitsland|Germany|West-Duitsland|West Germany; Argentinië|Argentina; Frankrijk|France;
      Italië|Italy; Spanje|Spain; Engeland|England; Uruguay` },
    { id: 'euros', nl: 'Noem een land dat het EK voetbal voor mannen won', en: "Name a country that has won the men's European Championship", a: `
      Spanje|Spain; Duitsland|Germany|West-Duitsland|West Germany; Frankrijk|France; Italië|Italy; Portugal;
      Nederland|Netherlands|Holland; Griekenland|Greece; Denemarken|Denmark; Tsjechoslowakije|Czechoslovakia;
      Sovjet-Unie|Soviet Union|USSR|Sovjetunie` },
    { id: 'champions-league', nl: 'Noem een club die de Europacup I of Champions League won (t.e.m. 2025)', en: 'Name a club that won the European Cup or Champions League (up to 2025)', a: `
      Real Madrid; FC Barcelona|FC Barcelona|Barcelona|Barça; Bayern München|Bayern Munich|Bayern|FC Bayern;
      Liverpool|Liverpool|Liverpool FC; AC Milan|AC Milan|Milan; Manchester United|Manchester United|Man United|Man Utd;
      Ajax|Ajax|Ajax Amsterdam; Juventus|Juventus|Juve; Inter|Inter Milan|Internazionale|Inter Milaan; Chelsea;
      Manchester City|Manchester City|Man City; Paris Saint-Germain|Paris Saint-Germain|PSG; FC Porto|FC Porto|Porto;
      Benfica|Benfica|SL Benfica; Borussia Dortmund|Borussia Dortmund|Dortmund|BVB; PSV|PSV|PSV Eindhoven; Feyenoord;
      Celtic|Celtic|Celtic Glasgow; Olympique Marseille|Olympique de Marseille|Marseille|OM; Nottingham Forest; Aston Villa;
      Hamburger SV|Hamburger SV|Hamburg|HSV; Steaua Boekarest|Steaua Bucharest|Steaua|FCSB; Rode Ster Belgrado|Red Star Belgrade|Crvena Zvezda|Rode Ster` },
    { id: 'olympic-sports', nl: 'Noem een sport of discipline van de Olympische Zomerspelen van Parijs 2024', en: 'Name a sport or discipline at the Paris 2024 Summer Olympics', a: `
      Atletiek|Athletics; Zwemmen|Swimming; Voetbal|Football|Soccer; Basketbal|Basketball; Tennis; Wielrennen|Cycling;
      Turnen|Artistic gymnastics|Gymnastiek|Gymnastics|Artistieke gymnastiek; Judo; Boksen|Boxing; Volleybal|Volleyball;
      Hockey|Hockey|Field hockey|Veldhockey; Handbal|Handball; Roeien|Rowing; Zeilen|Sailing;
      Paardensport|Equestrian|Paardrijden|Ruitersport; Schermen|Fencing; Tafeltennis|Table tennis|Pingpong; Badminton; Golf;
      Gewichtheffen|Weightlifting; Worstelen|Wrestling; Beachvolleybal|Beach volleyball; Taekwondo; Boogschieten|Archery;
      Schieten|Shooting|Schietsport; Triatlon|Triathlon; Kanovaren|Canoeing|Kano|Kajak|Kayaking|Kajakken;
      Waterpolo|Water polo; Schoonspringen|Diving; Skateboarden|Skateboarding|Skateboard; Surfen|Surfing;
      Breakdance|Breaking|Breakdancen; Sportklimmen|Sport climbing|Klimmen|Climbing; Rugby|Rugby sevens|Rugby 7;
      BMX; Mountainbike|Mountain biking|Mountainbiken; Baanwielrennen|Track cycling; Wegwielrennen|Road cycling;
      Marathon; 3x3 basketbal|3x3 basketball; Ritmische gymnastiek|Rhythmic gymnastics; Trampolinespringen|Trampoline|Trampoline gymnastics;
      Moderne vijfkamp|Modern pentathlon; Kunstzwemmen|Artistic swimming|Synchroonzwemmen|Synchronised swimming;
      Openwaterzwemmen|Marathon swimming|Open water swimming|Marathonzwemmen; Dressuur|Dressage; Springconcours|Show jumping|Jumping;
      Eventing|Eventing|Military|Samengestelde wedstrijd; Kanoslalom|Canoe slalom; Grieks-Romeins worstelen|Greco-Roman wrestling;
      Vrije stijl worstelen|Freestyle wrestling; BMX freestyle; Snelwandelen|Race walking` },
    { id: 'f1-champions', nl: 'Noem een Formule 1-wereldkampioen (t.e.m. 2025)', en: 'Name a Formula 1 world champion (up to 2025)', a: `
      Max Verstappen|Max Verstappen|Verstappen; Lewis Hamilton|Lewis Hamilton|Hamilton; Michael Schumacher|Michael Schumacher|Schumacher;
      Ayrton Senna|Ayrton Senna|Senna; Fernando Alonso|Fernando Alonso|Alonso; Sebastian Vettel|Sebastian Vettel|Vettel;
      Niki Lauda|Niki Lauda|Lauda; Alain Prost|Alain Prost|Prost; Lando Norris|Lando Norris|Norris;
      Kimi Räikkönen|Kimi Räikkönen|Räikkönen; Nico Rosberg|Nico Rosberg|Rosberg; Jenson Button|Jenson Button|Button;
      Mika Häkkinen|Mika Häkkinen|Häkkinen; Nigel Mansell|Nigel Mansell|Mansell; Juan Manuel Fangio|Juan Manuel Fangio|Fangio;
      James Hunt|James Hunt|Hunt; Damon Hill|Damon Hill|Hill; Jacques Villeneuve|Jacques Villeneuve|Villeneuve;
      Jackie Stewart|Jackie Stewart|Stewart; Nelson Piquet|Nelson Piquet|Piquet; Emerson Fittipaldi|Emerson Fittipaldi|Fittipaldi;
      Jim Clark|Jim Clark|Clark; Graham Hill; Keke Rosberg; Mario Andretti|Mario Andretti|Andretti; Jack Brabham|Jack Brabham|Brabham;
      Alberto Ascari|Alberto Ascari|Ascari; Jochen Rindt|Jochen Rindt|Rindt; Alan Jones; Jody Scheckter|Jody Scheckter|Scheckter;
      John Surtees|John Surtees|Surtees; Denny Hulme|Denny Hulme|Hulme; Phil Hill; Mike Hawthorn|Mike Hawthorn|Hawthorn;
      Giuseppe Farina|Giuseppe Farina|Nino Farina|Farina` },
    { id: 'grand-slam', nl: 'Noem een man die tussen 2000 en 2025 een Grand Slam won in het enkelspel (tennis)', en: "Name a man who won a Grand Slam singles title (tennis) between 2000 and 2025", a: `
      Roger Federer|Roger Federer|Federer; Rafael Nadal|Rafael Nadal|Nadal|Rafa Nadal|Rafa; Novak Djokovic|Novak Djokovic|Djokovic|Đoković;
      Carlos Alcaraz|Carlos Alcaraz|Alcaraz; Jannik Sinner|Jannik Sinner|Sinner; Andy Murray|Andy Murray|Murray;
      Stan Wawrinka|Stan Wawrinka|Wawrinka|Stanislas Wawrinka; Daniil Medvedev|Daniil Medvedev|Medvedev; Dominic Thiem|Dominic Thiem|Thiem;
      Andre Agassi|Andre Agassi|Agassi; Pete Sampras|Pete Sampras|Sampras; Juan Martín del Potro|Juan Martin del Potro|Del Potro;
      Marin Čilić|Marin Cilic|Cilic; Andy Roddick|Andy Roddick|Roddick; Lleyton Hewitt|Lleyton Hewitt|Hewitt; Marat Safin|Marat Safin|Safin;
      Gustavo Kuerten|Gustavo Kuerten|Kuerten|Guga; Juan Carlos Ferrero|Juan Carlos Ferrero|Ferrero; Goran Ivanišević|Goran Ivanisevic|Ivanisevic;
      Thomas Johansson|Thomas Johansson|Johansson; Albert Costa|Albert Costa|Costa; Gastón Gaudio|Gaston Gaudio|Gaudio` },
    { id: 'nba', nl: 'Noem een team uit de NBA', en: 'Name an NBA team', a: `
      Los Angeles Lakers|LA Lakers|Lakers; Chicago Bulls|Chicago Bulls|Bulls; Golden State Warriors|Golden State Warriors|Warriors;
      Boston Celtics|Boston Celtics|Celtics; Miami Heat|Miami Heat|Heat; New York Knicks|New York Knicks|Knicks;
      Brooklyn Nets|Brooklyn Nets|Nets; Houston Rockets|Houston Rockets|Rockets; San Antonio Spurs|San Antonio Spurs|Spurs;
      Cleveland Cavaliers|Cleveland Cavaliers|Cavaliers|Cavs; Toronto Raptors|Toronto Raptors|Raptors;
      Philadelphia 76ers|Philadelphia 76ers|76ers|Sixers; Dallas Mavericks|Dallas Mavericks|Mavericks|Mavs;
      Los Angeles Clippers|LA Clippers|Clippers; Milwaukee Bucks|Milwaukee Bucks|Bucks; Phoenix Suns|Phoenix Suns|Suns;
      Denver Nuggets|Denver Nuggets|Nuggets; Oklahoma City Thunder|Oklahoma City Thunder|Thunder|OKC; Orlando Magic|Orlando Magic|Magic;
      Atlanta Hawks|Atlanta Hawks|Hawks; Detroit Pistons|Detroit Pistons|Pistons; Utah Jazz|Utah Jazz|Jazz;
      Portland Trail Blazers|Portland Trail Blazers|Trail Blazers|Blazers; Sacramento Kings|Sacramento Kings|Kings;
      Memphis Grizzlies|Memphis Grizzlies|Grizzlies; Minnesota Timberwolves|Minnesota Timberwolves|Timberwolves|Wolves;
      Indiana Pacers|Indiana Pacers|Pacers; New Orleans Pelicans|New Orleans Pelicans|Pelicans; Charlotte Hornets|Charlotte Hornets|Hornets;
      Washington Wizards|Washington Wizards|Wizards` },
    { id: 'tour-de-france', nl: 'Noem een renner die officieel de Tour de France won (1990-2025)', en: 'Name a rider who officially won the Tour de France (1990–2025)', a: `
      Tadej Pogačar|Tadej Pogacar|Pogacar|Pogačar; Jonas Vingegaard|Jonas Vingegaard|Vingegaard; Chris Froome|Chris Froome|Froome;
      Miguel Indurain|Miguel Indurain|Indurain; Alberto Contador|Alberto Contador|Contador; Bradley Wiggins|Bradley Wiggins|Wiggins;
      Marco Pantani|Marco Pantani|Pantani; Jan Ullrich|Jan Ullrich|Ullrich; Vincenzo Nibali|Vincenzo Nibali|Nibali;
      Geraint Thomas|Geraint Thomas|Thomas; Egan Bernal|Egan Bernal|Bernal; Cadel Evans|Cadel Evans|Evans;
      Greg LeMond|Greg LeMond|LeMond; Bjarne Riis|Bjarne Riis|Riis; Andy Schleck|Andy Schleck|Schleck;
      Carlos Sastre|Carlos Sastre|Sastre; Óscar Pereiro|Oscar Pereiro|Pereiro` },
    { id: 'ball-sports', nl: 'Noem een sport die je met een bal speelt', en: 'Name a sport played with a ball', a: `
      Voetbal|Football|Soccer; Basketbal|Basketball; Tennis; Volleybal|Volleyball; Handbal|Handball; Golf; Rugby;
      Honkbal|Baseball; Hockey|Field hockey|Veldhockey; Tafeltennis|Table tennis|Pingpong; American football|American football|Amerikaans voetbal;
      Cricket; Waterpolo|Water polo; Padel|Padel|Padeltennis; Squash; Bowling; Biljart|Billiards|Pool|Snooker|Poolbiljart;
      Beachvolleybal|Beach volleyball; Korfbal|Korfball; Petanque|Pétanque|Jeu de boules|Boules; Softbal|Softball;
      Futsal|Futsal|Zaalvoetbal; Lacrosse; Kegelen|Skittles|Ninepins; Trefbal|Dodgeball; Polo; Netbal|Netball;
      Australian football|Australian rules football|Aussie rules; Gaelic football; Hurling; Pickleball; Beachsoccer|Beach soccer;
      Racquetball; Floorball|Floorball|Unihockey; Kickball; Rounders; Croquet|Croquet|Krokket; Boccia; Goalbal|Goalball;
      Sepak takraw; Teqball; Voetvolley|Footvolley; Bossaball; Tchoukball; Kinball|Kin-Ball; Fietsbal|Cycle ball|Radball;
      Slamball; Rolhockey|Roller hockey|Rink hockey; Bandy; Pelota|Basque pelota|Jai alai; Kaatsen|Frisian handball;
      Krulbol|Krulbollen; Balle pelote|Balle pelote|Kaatsbal` },
    { id: 'combat', nl: 'Noem een vechtsport', en: 'Name a combat sport or martial art', a: `
      Judo; Karate; Boksen|Boxing; Taekwondo; Kickboksen|Kickboxing; MMA|Mixed martial arts; Worstelen|Wrestling;
      Kungfu|Kung fu|Kung-fu; Muay thai|Muay Thai|Thaiboksen|Thai boxing; Jiujitsu|Jiu-jitsu|Ju-jitsu|Jujutsu;
      Braziliaans jiujitsu|Brazilian jiu-jitsu|BJJ; Sumo|Sumo|Sumoworstelen; Aikido; Krav maga|Krav Maga; Capoeira;
      Schermen|Fencing; Kendo; Wing chun|Wing Chun; Tai chi|Tai chi|Taiji; Sambo; Savate|Savate|Frans boksen|French boxing;
      Hapkido; Wushu; Jeet kune do|Jeet Kune Do; Kyokushin|Kyokushin karate; Pencak silat|Pencak silat|Silat;
      Kali|Eskrima|Arnis; Systema; Sanda|Sanshou; Lethwei; Pankration; Glima; Vovinam; Tang soo do|Tang Soo Do;
      Shootboxing|Shoot boxing; Catch wrestling; Luta livre; Kempo|Kenpo; Ninjutsu; Bartitsu; Kudo; Kalaripayattu;
      Shorinji kempo; Iaido; Kyudo; Naginata; Bokator; Bajiquan; Grieks-Romeins worstelen|Greco-Roman wrestling;
      Kurash; Kajukenbo; Taekkyon` },
    { id: 'decathlon', nl: 'Noem een onderdeel van de tienkamp (atletiek)', en: 'Name an event of the decathlon (athletics)', a: `
      100 meter|100 metres|100m|100 m sprint; Verspringen|Long jump; Hoogspringen|High jump;
      Polsstokspringen|Pole vault|Polsstokhoogspringen; Kogelstoten|Shot put; Speerwerpen|Javelin|Javelin throw;
      Discuswerpen|Discus|Discus throw; 400 meter|400 metres|400m; 110 meter horden|110 metres hurdles|110m horden|Horden|Hurdles;
      1500 meter|1500 metres|1500m` },
    { id: 'olympic-hosts', nl: 'Noem een land dat ooit de Olympische Zomerspelen organiseerde', en: 'Name a country that has hosted the Summer Olympics', a: `
      Verenigde Staten|United States|VS|USA|Amerika|America; Griekenland|Greece; Frankrijk|France;
      Verenigd Koninkrijk|United Kingdom|VK|UK|Engeland|England|Groot-Brittannië|Great Britain; China; Japan; Australië|Australia;
      Spanje|Spain; Brazilië|Brazil; Duitsland|Germany|West-Duitsland|West Germany; Italië|Italy; België|Belgium;
      Nederland|Netherlands|Holland; Rusland|Russia|Sovjet-Unie|Soviet Union|USSR; Canada; Mexico; Zuid-Korea|South Korea|Korea;
      Zweden|Sweden; Finland` },
    { id: 'ballon-dor', nl: "Noem een winnaar van de Gouden Bal (Ballon d'Or) tussen 1990 en 2025", en: "Name a Ballon d'Or winner between 1990 and 2025", a: `
      Lionel Messi|Lionel Messi|Messi; Cristiano Ronaldo|Cristiano Ronaldo|Ronaldo|CR7; Zinedine Zidane|Zinedine Zidane|Zidane;
      Ronaldinho; Kaká|Kaka; Luka Modrić|Luka Modric|Modric; Karim Benzema|Karim Benzema|Benzema;
      Ronaldo Nazário|Ronaldo Nazario|R9|Ronaldo Nazário de Lima|Il Fenomeno; Rodri; Ousmane Dembélé|Ousmane Dembele|Dembele;
      Marco van Basten|Marco van Basten|Van Basten; Andrij Sjevtsjenko|Andriy Shevchenko|Shevchenko|Sjevtsjenko;
      Luís Figo|Luis Figo|Figo; Michael Owen|Michael Owen|Owen; Fabio Cannavaro|Fabio Cannavaro|Cannavaro; Rivaldo;
      George Weah|George Weah|Weah; Roberto Baggio|Roberto Baggio|Baggio; Pavel Nedvěd|Pavel Nedved|Nedved;
      Lothar Matthäus|Lothar Matthaus|Matthäus; Hristo Stoitsjkov|Hristo Stoichkov|Stoichkov|Stoitsjkov;
      Jean-Pierre Papin|Jean-Pierre Papin|Papin; Matthias Sammer|Matthias Sammer|Sammer` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
