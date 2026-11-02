/* ─────────────────────────────────────────────────────────────
   Brillion · landen en aardrijkskunde
   Eén tabel met alle 197 landen voedt veel vragen tegelijk.
   Volgorde = hoe bekend een land is (bekendst eerst). Daaruit
   volgt de klasse: de eerste 20% is Gewoon, de laatste 20% 1 in a Brillion.

   Regel:  NL|EN|alternatieve namen # kenmerken @ hoofdstad(en)
   Kenmerken: eu as af na sa oc = werelddeel · L = geen kust
     I = eilandstaat · E = EU-lid · € = euro · M = vorst als staatshoofd
     S = Spaans officieel · K = links rijden · P = 100+ miljoen inwoners
     G = G20 · N = NAVO
   Hoofdstad: bekendheid (1-5) + NL|EN|alternatieven, meerdere met " / "
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;

  const TABLE = `
Frankrijk|France|Frankryk # eu E € N G @ 5 Parijs|Paris
Duitsland|Germany|Deutschland|West-Duitsland|BRD # eu E € N G @ 5 Berlijn|Berlin
Nederland|Netherlands|Holland|The Netherlands|Nederlanden # eu E € M N @ 5 Amsterdam
Spanje|Spain|España # eu E € M S N @ 5 Madrid
Italië|Italy|Italia # eu E € N G @ 5 Rome|Rome|Roma
België|Belgium|Belgique|Belgien # eu E € M N @ 5 Brussel|Brussels|Bruxelles
Verenigde Staten|United States|VS|USA|US|Amerika|America|Verenigde Staten van Amerika|United States of America # na N G P @ 4 Washington|Washington D.C.|Washington DC
Verenigd Koninkrijk|United Kingdom|VK|UK|Groot-Brittannië|Great Britain|Engeland|England|Brittannië|Britain|Schotland|Scotland|Wales|Noord-Ierland|Northern Ireland # eu I M K N G @ 5 Londen|London
China|China|Volksrepubliek China|Peoples Republic of China # as G P @ 4 Peking|Beijing
Japan # as I M K G P @ 4 Tokio|Tokyo
Rusland|Russia|Russische Federatie|Russian Federation # eu as G P @ 5 Moskou|Moscow|Moskva
Brazilië|Brazil|Brasil # sa G P @ 2 Brasília|Brasilia
Portugal # eu E € N @ 4 Lissabon|Lisbon|Lisboa
Griekenland|Greece|Hellas # eu E € N @ 4 Athene|Athens|Athina
Zwitserland|Switzerland|Schweiz|Suisse # eu L @ 2 Bern|Bern|Berne
Oostenrijk|Austria|Österreich # eu L E € @ 4 Wenen|Vienna|Wien
Canada # na M N G @ 2 Ottawa
Mexico|Mexico|México # na S G P @ 3 Mexico-Stad|Mexico City|Mexico|Ciudad de Mexico
Australië|Australia # oc I M K G @ 2 Canberra
India # as K G P @ 3 New Delhi|New Delhi|Delhi|Nieuw-Delhi
Egypte|Egypt # af P @ 4 Caïro|Cairo|Kairo
Turkije|Turkey|Türkiye # eu as N G @ 3 Ankara
Zweden|Sweden # eu E M N @ 4 Stockholm
Noorwegen|Norway # eu M N @ 4 Oslo
Denemarken|Denmark # eu E M N @ 4 Kopenhagen|Copenhagen|København
Polen|Poland # eu E N @ 4 Warschau|Warsaw|Warszawa
Ierland|Ireland|Eire|Republiek Ierland|Republic of Ireland # eu I E € K @ 4 Dublin
Luxemburg|Luxembourg # eu L E € M N @ 4 Luxemburg|Luxembourg|Luxemburg-Stad|Luxembourg City
Congo|DR Congo|Democratische Republiek Congo|Democratic Republic of the Congo|DRC|Congo-Kinshasa|Zaïre|Zaire|Belgisch Congo # af P @ 3 Kinshasa|Kinshasa|Leopoldstad
Argentinië|Argentina # sa S G @ 3 Buenos Aires
Zuid-Afrika|South Africa # af K G @ 2 Pretoria / 2 Kaapstad|Cape Town / 1 Bloemfontein
Marokko|Morocco|Maroc # af M @ 2 Rabat
Finland|Finland|Suomi # eu E € N @ 3 Helsinki
Oekraïne|Ukraine # eu @ 4 Kiev|Kyiv|Kiew
Tsjechië|Czechia|Czech Republic|Tsjechische Republiek # eu L E N @ 4 Praag|Prague|Praha
Hongarije|Hungary # eu L E N @ 4 Boedapest|Budapest
Kroatië|Croatia|Hrvatska # eu E € N @ 3 Zagreb
IJsland|Iceland # eu I N @ 3 Reykjavik|Reykjavik|Reykjavík
Thailand # as M K @ 3 Bangkok
Zuid-Korea|South Korea|Korea|Republiek Korea|Republic of Korea # as G @ 3 Seoel|Seoul
Noord-Korea|North Korea # as @ 2 Pyongyang|Pyongyang|Pjongjang
Indonesië|Indonesia # as I K G P @ 3 Jakarta|Jakarta|Djakarta / 1 Nusantara
Vietnam|Vietnam|Viet Nam # as P @ 2 Hanoi
Israël|Israel # as @ 2 Jeruzalem|Jerusalem
Iran|Iran|Perzië|Persia # as @ 3 Teheran|Tehran
Irak|Iraq # as @ 3 Bagdad|Baghdad
Afghanistan # as L @ 2 Kabul
Pakistan # as K P @ 1 Islamabad
Saoedi-Arabië|Saudi Arabia|Saudi-Arabië # as M G @ 2 Riyad|Riyadh|Riad
Verenigde Arabische Emiraten|United Arab Emirates|VAE|UAE|Emiraten|Emirates|Arabische Emiraten # as M @ 2 Abu Dhabi
Kenia|Kenya # af K @ 3 Nairobi
Nigeria # af P @ 1 Abuja
Chili|Chile # sa S @ 2 Santiago|Santiago|Santiago de Chile
Peru # sa S @ 2 Lima
Colombia|Colombia|Columbia # sa S @ 2 Bogota|Bogotá
Venezuela # sa S @ 2 Caracas
Cuba # na I S @ 3 Havana|Havana|Havanna|La Habana
Jamaica # na I M K @ 1 Kingston
Roemenië|Romania # eu E N @ 3 Boekarest|Bucharest|București
Bulgarije|Bulgaria # eu E € N @ 3 Sofia
Servië|Serbia # eu L @ 3 Belgrado|Belgrade|Beograd
Slowakije|Slovakia # eu L E € N @ 3 Bratislava
Slovenië|Slovenia # eu E € N @ 2 Ljubljana
Monaco # eu € M @ 3 Monaco
Malta # eu I E € K @ 2 Valletta|Valletta|Valetta
Cyprus # eu as I E € K @ 2 Nicosia|Nicosia|Lefkosia
Tunesië|Tunisia # af @ 3 Tunis
Algerije|Algeria # af @ 2 Algiers|Algiers|Alger|Algier
Libië|Libya # af @ 2 Tripoli
Ethiopië|Ethiopia # af L P @ 2 Addis Abeba|Addis Ababa
Ghana # af @ 2 Accra
Senegal # af @ 2 Dakar
Kameroen|Cameroon # af @ 1 Yaoundé|Yaounde
Rwanda # af L @ 2 Kigali
Filipijnen|Philippines # as I P @ 2 Manilla|Manila
Maleisië|Malaysia # as M K @ 2 Kuala Lumpur / 1 Putrajaya
Singapore|Singapore|Singapur # as I K @ 3 Singapore
Nieuw-Zeeland|New Zealand # oc I M K @ 2 Wellington
Bolivia # sa L S @ 1 Sucre / 2 La Paz
Ecuador # sa S @ 2 Quito
Uruguay # sa S @ 2 Montevideo
Paraguay # sa L S @ 1 Asunción|Asuncion
Syrië|Syria # as @ 2 Damascus|Damascus|Damaskus
Libanon|Lebanon # as @ 2 Beiroet|Beirut
Jordanië|Jordan # as M @ 2 Amman
Qatar|Qatar|Katar # as M @ 2 Doha
Koeweit|Kuwait # as M @ 1 Koeweit-Stad|Kuwait City|Koeweit|Kuwait
Nepal # as L K @ 2 Kathmandu|Kathmandu|Katmandu
Bangladesh # as K P @ 1 Dhaka|Dhaka|Dacca
Sri Lanka|Sri Lanka|Ceylon # as I K @ 1 Sri Jayewardenepura Kotte|Sri Jayawardenepura Kotte|Kotte / 2 Colombo
Mongolië|Mongolia # as L @ 1 Ulaanbaatar|Ulaanbaatar|Ulan Bator|Oelan Bator
Kazachstan|Kazakhstan # eu as L @ 1 Astana|Astana|Nur-Sultan|Noer-Soeltan
Georgië|Georgia # eu as @ 2 Tbilisi|Tbilisi|Tiflis
Armenië|Armenia # eu as L @ 1 Jerevan|Yerevan
Azerbeidzjan|Azerbaijan|Azerbaidzjan # eu as L @ 1 Bakoe|Baku
Wit-Rusland|Belarus|Wit Rusland # eu L @ 2 Minsk
Litouwen|Lithuania # eu E € N @ 2 Vilnius
Letland|Latvia # eu E € N @ 2 Riga
Estland|Estonia # eu E € N @ 2 Tallinn|Tallinn|Tallin
Albanië|Albania # eu N @ 2 Tirana|Tirana|Tirane
Bosnië en Herzegovina|Bosnia and Herzegovina|Bosnië|Bosnia|Bosnië-Herzegovina|Bosnia-Herzegovina # eu @ 2 Sarajevo
Montenegro # eu € N @ 1 Podgorica
Noord-Macedonië|North Macedonia|Macedonië|Macedonia # eu L N @ 1 Skopje
Kosovo # eu L € @ 1 Pristina|Pristina|Prishtina|Priština
Moldavië|Moldova|Moldavie # eu L @ 1 Chisinau|Chișinău|Kisjinev
Liechtenstein # eu L M @ 1 Vaduz
Andorra # eu L € M @ 1 Andorra la Vella
San Marino # eu L € @ 2 San Marino
Vaticaanstad|Vatican City|Vaticaan|Vatican|Heilige Stoel|Holy See # eu L € M @ 2 Vaticaanstad|Vatican City|Vaticaan|Vatican
Haïti|Haiti # na I @ 1 Port-au-Prince
Dominicaanse Republiek|Dominican Republic # na I S @ 1 Santo Domingo
Costa Rica # na S @ 1 San José|San Jose
Panama # na S @ 1 Panama-Stad|Panama City|Panama
Guatemala # na S @ 1 Guatemala-Stad|Guatemala City|Guatemala
Honduras # na S @ 1 Tegucigalpa
El Salvador|El Salvador|Salvador # na S @ 1 San Salvador
Nicaragua # na S @ 1 Managua
Suriname # sa K @ 2 Paramaribo
Guyana # sa K @ 1 Georgetown
Madagaskar|Madagascar # af I @ 1 Antananarivo|Antananarivo|Tananarive
Tanzania # af K @ 1 Dodoma
Oeganda|Uganda # af L K @ 2 Kampala
Burundi # af L @ 1 Gitega
Somalië|Somalia # af @ 1 Mogadishu|Mogadishu|Mogadisjoe
Soedan|Sudan # af @ 1 Khartoem|Khartoum
Zuid-Soedan|South Sudan # af L @ 1 Juba
Mali # af L @ 1 Bamako
Niger # af L @ 1 Niamey
Tsjaad|Chad # af L @ 1 N'Djamena|N'Djamena|Ndjamena
Ivoorkust|Ivory Coast|Côte d'Ivoire # af @ 1 Yamoussoukro
Angola # af @ 1 Luanda
Mozambique # af K @ 1 Maputo
Zimbabwe # af L K @ 1 Harare
Zambia # af L K @ 1 Lusaka
Namibië|Namibia # af K @ 1 Windhoek
Botswana # af L K @ 1 Gaborone
Taiwan # as I @ 2 Taipei|Taipei|Taipeh
Myanmar|Myanmar|Birma|Burma # as @ 1 Naypyidaw|Naypyidaw|Nay Pyi Taw
Cambodja|Cambodia # as M @ 1 Phnom Penh
Laos # as L @ 1 Vientiane
Oezbekistan|Uzbekistan # as L @ 1 Tasjkent|Tashkent
Turkmenistan # as L @ 1 Asjchabad|Ashgabat
Kirgizië|Kyrgyzstan|Kirgizstan|Kirgistan # as L @ 1 Bisjkek|Bishkek
Tadzjikistan|Tajikistan # as L @ 1 Doesjanbe|Dushanbe
Jemen|Yemen # as @ 1 Sanaa|Sanaa|Sana'a
Oman # as M @ 1 Muscat|Muscat|Masqat
Bahrein|Bahrain # as I M @ 1 Manama
Bhutan # as L M K @ 1 Thimphu
Maldiven|Maldives # as I K @ 1 Malé|Male
Brunei # as M K @ 1 Bandar Seri Begawan
Oost-Timor|Timor-Leste|East Timor # as I K @ 1 Dili
Papoea-Nieuw-Guinea|Papua New Guinea|PNG # oc I M K @ 1 Port Moresby
Fiji|Fiji|Fidji # oc I K @ 1 Suva
Bahama's|Bahamas # na I M K @ 1 Nassau
Barbados # na I K @ 1 Bridgetown
Trinidad en Tobago|Trinidad and Tobago|Trinidad # na I K @ 1 Port of Spain|Port of Spain|Port-of-Spain
Belize # na M @ 1 Belmopan
Burkina Faso # af L @ 1 Ouagadougou
Benin # af @ 1 Porto-Novo
Togo # af @ 1 Lomé|Lome
Guinee|Guinea # af @ 1 Conakry
Sierra Leone # af @ 1 Freetown
Liberia # af @ 1 Monrovia
Gambia # af @ 1 Banjul
Mauritanië|Mauritania # af @ 1 Nouakchott
Eritrea # af @ 1 Asmara
Djibouti # af @ 1 Djibouti|Djibouti|Djibouti-Stad|Djibouti City
Congo-Brazzaville|Republic of the Congo|Republiek Congo|Congo Brazzaville # af @ 1 Brazzaville
Gabon # af @ 1 Libreville
Centraal-Afrikaanse Republiek|Central African Republic|CAR # af L @ 1 Bangui
Equatoriaal-Guinea|Equatorial Guinea # af S @ 1 Malabo / 1 Ciudad de la Paz
Malawi # af L K @ 1 Lilongwe
Lesotho # af L M K @ 1 Maseru
Eswatini|Eswatini|Swaziland # af L M K @ 1 Mbabane / 1 Lobamba
Mauritius # af I K @ 1 Port Louis
Seychellen|Seychelles # af I K @ 1 Victoria
Kaapverdië|Cape Verde|Cabo Verde # af I @ 1 Praia
Comoren|Comoros # af I @ 1 Moroni
Guinee-Bissau|Guinea-Bissau # af @ 1 Bissau
São Tomé en Principe|São Tomé and Príncipe|Sao Tome # af I @ 1 São Tomé|Sao Tome
Palestina|Palestine|Palestijnse gebieden # as @ 1 Ramallah / 1 Oost-Jeruzalem|East Jerusalem
Samoa # oc I K @ 1 Apia
Tonga # oc I M K @ 1 Nuku'alofa
Vanuatu # oc I @ 1 Port Vila|Port Vila|Port-Vila
Salomonseilanden|Solomon Islands|Salomoneilanden # oc I M K @ 1 Honiara
Grenada # na I M K @ 1 Saint George's|Saint George's|St. George's
Saint Lucia|Saint Lucia|Sint-Lucia # na I M K @ 1 Castries
Saint Vincent en de Grenadines|Saint Vincent and the Grenadines|Saint Vincent # na I M K @ 1 Kingstown
Saint Kitts en Nevis|Saint Kitts and Nevis|Saint Kitts # na I M K @ 1 Basseterre
Antigua en Barbuda|Antigua and Barbuda|Antigua # na I M K @ 1 Saint John's|Saint John's|St. John's
Dominica # na I K @ 1 Roseau
Kiribati # oc I K @ 1 Zuid-Tarawa|South Tarawa|Tarawa
Micronesia|Micronesia|Federale Staten van Micronesia # oc I @ 1 Palikir
Marshalleilanden|Marshall Islands # oc I @ 1 Majuro
Palau # oc I @ 1 Ngerulmud
Nauru # oc I K @ 1 Yaren
Tuvalu # oc I M K @ 1 Funafuti`;

  /* Tabel inlezen */
  const COUNTRIES = TABLE.trim().split('\n').map((line, rank) => {
    const [left, capsPart] = line.split(' @ ');
    const [namesPart, flagsPart] = left.split(' # ');
    const caps = capsPart.split(' / ').map(c => {
      const m = c.trim().match(/^(\d)\s+(.*)$/);
      return { fame: Number(m[1]), names: m[2].split('|').map(s => s.trim()) };
    });
    return { names: namesPart.split('|').map(s => s.trim()), flags: new Set(flagsPart.trim().split(/\s+/)), caps, rank };
  });
  B.COUNTRIES = COUNTRIES;

  const where = (...flags) => COUNTRIES.filter(c => flags.some(f => c.flags.has(f))).map(c => c.names);
  const capitals = (...flags) => COUNTRIES
    .filter(c => flags.some(f => c.flags.has(f)))
    .flatMap(c => c.caps.map(cap => ({ fame: cap.fame, rank: c.rank, names: cap.names })))
    .sort((a, b) => b.fame - a.fame || a.rank - b.rank)
    .map(c => c.names);
  /* Een land opzoeken op zijn Nederlandse naam (voor eigen lijstjes) */
  const byNl = {};
  COUNTRIES.forEach(c => (byNl[c.names[0]] = c.names));
  const pick = list => list.map(n => {
    if (!byNl[n]) throw new Error('Onbekend land: ' + n);
    return byNl[n];
  });
  B.countryNames = pick;

  B.addQuestions('geo', [
    { id: 'africa', lvl: 1, nl: 'Noem een land in Afrika', en: 'Name a country in Africa', a: where('af') },
    { id: 'asia', lvl: 1, nl: 'Noem een land in Azië', en: 'Name a country in Asia', a: where('as') },
    { id: 'europe', lvl: 1, nl: 'Noem een land in Europa', en: 'Name a country in Europe', a: where('eu') },
    { id: 'south-america', lvl: 1, nl: 'Noem een land in Zuid-Amerika', en: 'Name a country in South America', a: where('sa') },
    { id: 'north-america', lvl: 2, nl: 'Noem een land in Noord- of Midden-Amerika (de Caraïben tellen mee)', en: 'Name a country in North or Central America (the Caribbean counts)', a: where('na') },
    { id: 'oceania', lvl: 3, nl: 'Noem een land in Oceanië', en: 'Name a country in Oceania', a: where('oc') },
    { id: 'landlocked', lvl: 3, nl: 'Noem een land zonder kust', en: 'Name a landlocked country', a: where('L') },
    { id: 'island', lvl: 2, nl: 'Noem een eilandstaat', en: 'Name an island country', a: where('I') },
    { id: 'eu', lvl: 1, nl: 'Noem een lidstaat van de Europese Unie', en: 'Name a member state of the European Union', a: where('E') },
    { id: 'euro', lvl: 2, nl: 'Noem een land dat de euro als munt gebruikt', en: 'Name a country that uses the euro', a: where('€') },
    { id: 'monarchy', lvl: 3, nl: 'Noem een land met een koning, koningin of andere vorst als staatshoofd', en: 'Name a country with a king, queen or other monarch as head of state', a: where('M') },
    { id: 'spanish', lvl: 1, nl: 'Noem een land waar Spaans een officiële taal is', en: 'Name a country where Spanish is an official language', a: where('S') },
    { id: 'left', lvl: 3, nl: 'Noem een land waar men links rijdt', en: 'Name a country that drives on the left', a: where('K') },
    { id: 'big', lvl: 2, nl: 'Noem een land met meer dan 100 miljoen inwoners', en: 'Name a country with more than 100 million inhabitants', a: where('P') },
    { id: 'capital-europe', lvl: 1, nl: 'Noem de hoofdstad van een Europees land', en: 'Name the capital of a European country', a: capitals('eu') },
    { id: 'capital-africa', lvl: 3, nl: 'Noem de hoofdstad van een Afrikaans land', en: 'Name the capital of an African country', a: capitals('af') },
    { id: 'capital-asia', lvl: 2, nl: 'Noem de hoofdstad van een Aziatisch land', en: 'Name the capital of an Asian country', a: capitals('as') },
    { id: 'capital-americas', lvl: 2, nl: 'Noem de hoofdstad van een land in Noord-, Midden- of Zuid-Amerika', en: 'Name the capital of a country in North, Central or South America', a: capitals('na', 'sa') },
    { id: 'france-borders', lvl: 1, nl: 'Noem een land dat een landsgrens heeft met Frankrijk (overzeese gebieden tellen mee)', en: 'Name a country that shares a land border with France (overseas territories count)',
      a: pick(['België', 'Spanje', 'Duitsland', 'Italië', 'Zwitserland', 'Luxemburg', 'Monaco', 'Andorra', 'Brazilië', 'Suriname', 'Nederland']) },
    { id: 'russia-borders', lvl: 3, nl: 'Noem een land dat over land aan Rusland grenst', en: 'Name a country that shares a land border with Russia',
      a: pick(['Oekraïne', 'China', 'Wit-Rusland', 'Finland', 'Kazachstan', 'Mongolië', 'Georgië', 'Noorwegen', 'Estland', 'Letland', 'Polen', 'Litouwen', 'Azerbeidzjan', 'Noord-Korea']) },
    { id: 'currencies', lvl: 1, nl: 'Noem een munteenheid (van nu of vroeger)', en: 'Name a currency (current or former)', a: `
      Euro; Dollar|Dollar|US dollar|Amerikaanse dollar|USD; Pond|Pound|Pound sterling|Britse pond|Sterling|GBP; Yen|Yen|Japanse yen|JPY;
      Belgische frank|Belgian franc|Frank|Franc|BEF; Yuan|Yuan|Renminbi|RMB|CNY; Roebel|Ruble|Rouble; Roepie|Rupee; Gulden|Guilder|Nederlandse gulden;
      Duitse mark|Deutsche Mark|Mark|D-Mark|DM; Peseta; Lire|Italian lira|Italiaanse lire; Zwitserse frank|Swiss franc|CHF;
      Kroon|Crown|Krone|Krona; Peso; Real|Brazilian real|Braziliaanse real; Won|South Korean won; Bitcoin; Dinar; Dirham;
      Turkse lira|Turkish lira|Lira; Zloty|Zloty|Złoty; Forint; Rand; Sjekel|Shekel|Israeli shekel|New shekel; Baht; Ringgit; Rupiah; Dong;
      Riyal|Riyal|Saudi riyal; Rial|Rial|Iranian rial; Canadese dollar|Canadian dollar; Australische dollar|Australian dollar;
      Nieuw-Zeelandse dollar|New Zealand dollar; Hongkongse dollar|Hong Kong dollar; Singaporese dollar|Singapore dollar;
      Mexicaanse peso|Mexican peso; Argentijnse peso|Argentine peso; Zweedse kroon|Swedish krona; Noorse kroon|Norwegian krone;
      Deense kroon|Danish krone; Tsjechische kroon|Czech koruna|Koruna; IJslandse kroon|Icelandic krona; Franse frank|French franc; Escudo;
      Drachme|Drachma; Schilling|Austrian schilling|Oostenrijkse schilling; Ierse pond|Irish pound|Punt; Markka|Finnish markka|Finse mark;
      Luxemburgse frank|Luxembourg franc; Lev|Bulgarian lev; Leu|Romanian leu|Lei; Kuna; Hryvnja|Hryvnia|Grivna; Lari; Dram; Manat; Tenge;
      Som; Somoni; Tugrik|Tugrik|Tögrög; Kyat; Kip; Riel; Taka; Rufiyaa; Afghani; Pula; Kwacha; Metical; Kwanza; Cedi; Birr; Nakfa;
      Ouguiya; Dalasi; Leone; CFA-frank|CFA franc|Franc CFA; Ariary; Dobra; Lilangeni; Loti; Naira; Shilling|Kenyan shilling|Keniaanse shilling;
      Colón|Colon; Córdoba|Cordoba; Lempira; Quetzal; Balboa; Bolívar|Bolivar; Sol|Sol|Peruvian sol; Guaraní|Guarani; Boliviano; Gourde;
      Arubaanse florin|Aruban florin|Florin; Caribische gulden|Caribbean guilder|Antilliaanse gulden|Netherlands Antillean guilder;
      Surinaamse dollar|Surinamese dollar; Vatu; Kina; Tala; Pa'anga|Paanga; Denar; Lek; Convertibele mark|Convertible mark|BAM; Pataca;
      Ngultrum; Sucre; Austral; Cruzeiro; Inti; ECU|ECU|Ecu|European Currency Unit; Sestertie|Sestertius; Denarius; Dukaat|Ducat;
      Daalder|Thaler|Taler; Ether|Ether|Ethereum` },
    { id: 'capital-oceania', lvl: 3, nl: 'Noem de hoofdstad van een land in Oceanië', en: 'Name the capital of a country in Oceania', a: capitals('oc') },
    { id: 'germany-borders', lvl: 1, nl: 'Noem een land dat aan Duitsland grenst', en: 'Name a country that borders Germany',
      a: pick(['Nederland', 'België', 'Frankrijk', 'Oostenrijk', 'Zwitserland', 'Polen', 'Denemarken', 'Tsjechië', 'Luxemburg']) },
    { id: 'spain-borders', lvl: 1, nl: 'Noem een land dat een landsgrens heeft met Spanje (Ceuta, Melilla en Gibraltar tellen mee)', en: 'Name a country that shares a land border with Spain (Ceuta, Melilla and Gibraltar count)',
      a: pick(['Portugal', 'Frankrijk', 'Andorra', 'Marokko', 'Verenigd Koninkrijk']) },
    { id: 'austria-borders', lvl: 1, nl: 'Noem een land dat aan Oostenrijk grenst', en: 'Name a country that borders Austria',
      a: pick(['Duitsland', 'Zwitserland', 'Italië', 'Hongarije', 'Tsjechië', 'Slovenië', 'Slowakije', 'Liechtenstein']) },
    { id: 'brazil-borders', lvl: 2, nl: 'Noem een land dat aan Brazilië grenst (overzeese gebieden tellen mee)', en: 'Name a country that borders Brazil (overseas territories count)',
      a: pick(['Argentinië', 'Uruguay', 'Paraguay', 'Bolivia', 'Peru', 'Colombia', 'Venezuela', 'Guyana', 'Suriname', 'Frankrijk']) },
    { id: 'china-borders', lvl: 3, nl: 'Noem een land dat over land aan China grenst', en: 'Name a country that shares a land border with China',
      a: pick(['Rusland', 'India', 'Mongolië', 'Noord-Korea', 'Vietnam', 'Kazachstan', 'Pakistan', 'Nepal', 'Afghanistan', 'Myanmar', 'Laos', 'Bhutan', 'Kirgizië', 'Tadzjikistan']) },
    { id: 'south-africa-borders', lvl: 3, nl: 'Noem een land dat aan Zuid-Afrika grenst', en: 'Name a country that borders South Africa',
      a: pick(['Namibië', 'Botswana', 'Zimbabwe', 'Mozambique', 'Lesotho', 'Eswatini']) },
    { id: 'india-borders', lvl: 3, nl: 'Noem een land dat aan India grenst', en: 'Name a country that borders India',
      a: pick(['Pakistan', 'China', 'Nepal', 'Bangladesh', 'Bhutan', 'Myanmar', 'Afghanistan']) },
    { id: 'mediterranean', lvl: 1, nl: 'Noem een land dat aan de Middellandse Zee ligt', en: 'Name a country on the Mediterranean Sea',
      a: pick(['Italië', 'Spanje', 'Griekenland', 'Frankrijk', 'Turkije', 'Egypte', 'Kroatië', 'Malta', 'Cyprus', 'Marokko', 'Tunesië', 'Israël', 'Libanon', 'Algerije', 'Libië', 'Monaco', 'Albanië', 'Montenegro', 'Syrië', 'Slovenië', 'Bosnië en Herzegovina', 'Palestina']) },
    { id: 'baltic', lvl: 1, nl: 'Noem een land dat aan de Oostzee ligt', en: 'Name a country on the Baltic Sea',
      a: pick(['Zweden', 'Finland', 'Duitsland', 'Polen', 'Denemarken', 'Rusland', 'Estland', 'Letland', 'Litouwen']) },
    { id: 'black-sea', lvl: 2, nl: 'Noem een land dat aan de Zwarte Zee ligt', en: 'Name a country on the Black Sea',
      a: pick(['Turkije', 'Oekraïne', 'Rusland', 'Roemenië', 'Bulgarije', 'Georgië']) },
    { id: 'caspian', lvl: 3, nl: 'Noem een land dat aan de Kaspische Zee ligt', en: 'Name a country on the Caspian Sea',
      a: pick(['Rusland', 'Iran', 'Kazachstan', 'Azerbeidzjan', 'Turkmenistan']) },
    { id: 'equator', lvl: 3, nl: 'Noem een land waar de evenaar door loopt (over land of door de territoriale wateren)', en: 'Name a country the equator passes through (over land or through its waters)',
      a: pick(['Ecuador', 'Brazilië', 'Colombia', 'Kenia', 'Indonesië', 'Oeganda', 'Congo', 'Gabon', 'Somalië', 'Congo-Brazzaville', 'São Tomé en Principe', 'Kiribati', 'Maldiven']) },
    { id: 'french', lvl: 2, nl: 'Noem een land waar Frans een officiële taal is', en: 'Name a country where French is an official language',
      a: pick(['Frankrijk', 'België', 'Zwitserland', 'Canada', 'Luxemburg', 'Monaco', 'Haïti', 'Senegal', 'Ivoorkust', 'Kameroen', 'Congo', 'Madagaskar', 'Rwanda', 'Mali', 'Burkina Faso', 'Niger', 'Guinee', 'Tsjaad', 'Benin', 'Togo', 'Burundi', 'Congo-Brazzaville', 'Gabon', 'Centraal-Afrikaanse Republiek', 'Djibouti', 'Seychellen', 'Vanuatu', 'Comoren', 'Equatoriaal-Guinea']) },
    { id: 'portuguese', lvl: 2, nl: 'Noem een land waar Portugees een officiële taal is', en: 'Name a country where Portuguese is an official language',
      a: pick(['Portugal', 'Brazilië', 'Angola', 'Mozambique', 'Kaapverdië', 'Guinee-Bissau', 'Oost-Timor', 'São Tomé en Principe', 'Equatoriaal-Guinea']) },
    { id: 'german', lvl: 1, nl: 'Noem een land waar Duits een officiële taal is', en: 'Name a country where German is an official language',
      a: pick(['Duitsland', 'Oostenrijk', 'Zwitserland', 'Liechtenstein', 'Luxemburg', 'België']) },
    { id: 'largest', lvl: 1, nl: 'Noem een van de 10 grootste landen ter wereld (in oppervlakte)', en: 'Name one of the 10 largest countries in the world (by area)',
      a: pick(['Rusland', 'Canada', 'Verenigde Staten', 'China', 'Brazilië', 'Australië', 'India', 'Argentinië', 'Kazachstan', 'Algerije']) },
    { id: 'microstates', lvl: 1, nl: 'Noem een dwergstaat (heel klein land) in Europa', en: 'Name a microstate (very small country) in Europe',
      a: pick(['Vaticaanstad', 'Monaco', 'Luxemburg', 'Liechtenstein', 'San Marino', 'Andorra', 'Malta']) },
    { id: 'nordic', lvl: 1, nl: 'Noem een Scandinavisch of Noords land', en: 'Name a Scandinavian or Nordic country',
      a: pick(['Zweden', 'Noorwegen', 'Denemarken', 'Finland', 'IJsland']) },
    { id: 'central-america', lvl: 2, nl: 'Noem een land in Centraal-Amerika (van Guatemala tot Panama)', en: 'Name a country in Central America (from Guatemala to Panama)',
      a: pick(['Costa Rica', 'Panama', 'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua', 'Belize']) },
    { id: 'italy-borders', lvl: 2, nl: 'Noem een land dat aan Italië grenst', en: 'Name a country that borders Italy',
      a: pick(['Frankrijk', 'Zwitserland', 'Oostenrijk', 'Slovenië', 'San Marino', 'Vaticaanstad']) },
    { id: 'poland-borders', lvl: 2, nl: 'Noem een land dat aan Polen grenst', en: 'Name a country that borders Poland',
      a: pick(['Duitsland', 'Tsjechië', 'Oekraïne', 'Slowakije', 'Wit-Rusland', 'Litouwen', 'Rusland']) },
    { id: 'argentina-borders', lvl: 2, nl: 'Noem een land dat aan Argentinië grenst', en: 'Name a country that borders Argentina',
      a: pick(['Chili', 'Brazilië', 'Uruguay', 'Bolivia', 'Paraguay']) },
    { id: 'turkey-borders', lvl: 3, nl: 'Noem een land dat aan Turkije grenst', en: 'Name a country that borders Turkey',
      a: pick(['Griekenland', 'Bulgarije', 'Syrië', 'Irak', 'Iran', 'Georgië', 'Armenië', 'Azerbeidzjan']) },
    { id: 'iran-borders', lvl: 3, nl: 'Noem een land dat aan Iran grenst (over land)', en: 'Name a country that borders Iran (by land)',
      a: pick(['Irak', 'Turkije', 'Afghanistan', 'Pakistan', 'Turkmenistan', 'Armenië', 'Azerbeidzjan']) }
  ]);

  /* Vragen uit andere categorieën die ook deze tabel gebruiken */
  B.addQuestions('earth', [
    { id: 'danube', lvl: 2, nl: 'Noem een land waar de Donau door of langs stroomt', en: 'Name a country the Danube flows through or along',
      a: pick(['Oostenrijk', 'Duitsland', 'Hongarije', 'Roemenië', 'Servië', 'Slowakije', 'Bulgarije', 'Kroatië', 'Oekraïne', 'Moldavië']) },
    { id: 'seas', lvl: 2, nl: 'Noem een zee (geen oceaan)', en: 'Name a sea (not an ocean)', a: `
      Noordzee|North Sea; Middellandse Zee|Mediterranean Sea|Mediterranean|Middellandse; Zwarte Zee|Black Sea; Rode Zee|Red Sea;
      Oostzee|Baltic Sea|Baltische Zee|Baltic; Dode Zee|Dead Sea; Kaspische Zee|Caspian Sea; Caraïbische Zee|Caribbean Sea|Caribische Zee|Caribbean;
      Waddenzee|Wadden Sea; Adriatische Zee|Adriatic Sea|Adriatic; Egeïsche Zee|Aegean Sea|Aegean; Ierse Zee|Irish Sea; Noorse Zee|Norwegian Sea;
      Arabische Zee|Arabian Sea; Zuid-Chinese Zee|South China Sea; Japanse Zee|Sea of Japan|Zee van Japan; Barentszzee|Barents Sea|Barentszee;
      Tyrreense Zee|Tyrrhenian Sea|Tyrrheense Zee; Ionische Zee|Ionian Sea; Ligurische Zee|Ligurian Sea; Keltische Zee|Celtic Sea; Witte Zee|White Sea;
      Beringzee|Bering Sea; Oost-Chinese Zee|East China Sea; Gele Zee|Yellow Sea; Koraalzee|Coral Sea; Tasmanzee|Tasman Sea; Sargassozee|Sargasso Sea;
      Zuiderzee|Zuiderzee|Zuider Zee; Groenlandzee|Greenland Sea|Groenlandse Zee; Labradorzee|Labrador Sea; Zee van Azov|Sea of Azov|Azovse Zee;
      Marmarazee|Sea of Marmara|Zee van Marmara; Andamanse Zee|Andaman Sea; Javazee|Java Sea; Filipijnenzee|Philippine Sea|Filipijnse Zee;
      Zee van Ochotsk|Sea of Okhotsk|Ochotskzee; Aralmeer|Aral Sea|Aralzee; Zee van Galilea|Sea of Galilee|Meer van Tiberias|Meer van Galilea;
      Karazee|Kara Sea; Laptevzee|Laptev Sea; Oost-Siberische Zee|East Siberian Sea; Tsjoektsjenzee|Chukchi Sea; Beaufortzee|Beaufort Sea;
      Weddellzee|Weddell Sea; Rosszee|Ross Sea; Amundsenzee|Amundsen Sea; Bellingshausenzee|Bellingshausen Sea; Scotiazee|Scotia Sea;
      Balearenzee|Balearic Sea|Balearische Zee; Alboránzee|Alboran Sea; Zee van Kreta|Sea of Crete|Kretenzische Zee; Levantijnse Zee|Levantine Sea;
      Thracische Zee|Thracian Sea; Myrtoïsche Zee|Myrtoan Sea; Zee van Sardinië|Sea of Sardinia; Sulusee|Sulu Sea|Suluzee; Celebeszee|Celebes Sea;
      Bandazee|Banda Sea; Molukse Zee|Molucca Sea|Molukkenzee; Floreszee|Flores Sea; Timorzee|Timor Sea; Arafurazee|Arafura Sea;
      Salomonzee|Solomon Sea; Bismarckzee|Bismarck Sea; Halmaherazee|Halmahera Sea; Seramzee|Seram Sea|Ceramzee; Savuzee|Savu Sea; Balizee|Bali Sea;
      Lakshadweepzee|Laccadive Sea|Lakkadivenzee; Japanse Binnenzee|Seto Inland Sea|Seto-binnenzee; Petsjorazee|Pechora Sea; Lincolnzee|Lincoln Sea;
      Wandelzee|Wandel Sea; Irmingerzee|Irminger Sea; Zee der Hebriden|Sea of the Hebrides|Hebridenzee; Saltonzee|Salton Sea; Bothnische Golf|Gulf of Bothnia|Botnische Golf;
      Kattegat; Skagerrak` },
    { id: 'eight-thousanders', lvl: 3, nl: 'Noem een berg die hoger is dan 8.000 meter', en: 'Name a mountain higher than 8,000 metres', a: `
      Mount Everest|Mount Everest|Everest|Chomolungma|Sagarmatha; K2|K2|Godwin-Austen|Chogori; Kangchenjunga|Kangchenjunga|Kanchenjunga;
      Lhotse; Makalu; Annapurna|Annapurna|Annapurna I; Cho Oyu; Nanga Parbat; Dhaulagiri|Dhaulagiri|Dhaulagiri I; Manaslu;
      Broad Peak; Gasherbrum I|Gasherbrum I|Hidden Peak; Gasherbrum II; Shishapangma|Shishapangma|Xixabangma` },
    { id: 'alps', lvl: 3, nl: 'Noem een berg in de Alpen', en: 'Name a mountain in the Alps', a: `
      Mont Blanc; Matterhorn|Matterhorn|Cervin|Cervino; Eiger; Jungfrau; Zugspitze; Mönch|Monch; Großglockner|Grossglockner|Glockner;
      Monte Rosa|Monte Rosa|Dufourspitze; Titlis; Pilatus; Rigi; Säntis|Santis; Dom; Weisshorn; Gran Paradiso; Piz Bernina|Piz Bernina|Bernina;
      Ortler; Wildspitze; Dachstein; Triglav; Marmolada; Drei Zinnen|Tre Cime di Lavaredo|Tre Cime; Watzmann; Großvenediger|Grossvenediger;
      Grandes Jorasses; Aiguille du Midi; Aiguille Verte; Dent Blanche; Barre des Écrins|Barre des Ecrins|Écrins; La Meije|La Meije|Meije;
      Monte Viso|Monviso|Monte Viso; Piz Palü|Piz Palu; Piz Buin; Lyskamm; Dent d'Hérens|Dent d'Herens; Breithorn; Allalinhorn; Alphubel;
      Nadelhorn; Täschhorn|Taschhorn; Lenzspitze; Finsteraarhorn; Aletschhorn; Schreckhorn; Wetterhorn; Bietschhorn; Grand Combin;
      Mont Dolent; Mont Blanc du Tacul; Mont Maudit; Dôme du Goûter|Dome du Gouter; Aiguille du Goûter|Aiguille du Gouter; Les Droites;
      Dent du Géant|Dent du Geant; Mont Cenis; Piz Badile; Glärnisch|Glarnisch; Tödi|Todi; Dammastock; Sustenhorn; Oberalpstock; Piz Kesch;
      Hochkönig|Hochkonig; Großes Wiesbachhorn|Grosses Wiesbachhorn|Wiesbachhorn; Ankogel; Parseierspitze; Similaun; Weißkugel|Weisskugel;
      Hochalmspitze; Kitzsteinhorn; Hahnenkamm; Hoher Dachstein; Grigna; Monte Baldo; Cima Tosa; Civetta; Pelmo; Sassolungo|Langkofel;
      Piz Boè|Piz Boe; Sella; Rosengarten|Catinaccio; Mont Pourri; Grande Casse; Dent de Morcles; Les Diablerets|Diablerets; Wildstrubel;
      Balmhorn; Blüemlisalp|Bluemlisalp; Schilthorn; Niesen; Stockhorn; Brienzer Rothorn; Mythen|Grosser Mythen; Uri Rotstock` },
    { id: 'rhine', lvl: 1, nl: 'Noem een land waar de Rijn door of langs stroomt', en: 'Name a country the Rhine flows through or along',
      a: pick(['Duitsland', 'Nederland', 'Zwitserland', 'Frankrijk', 'Oostenrijk', 'Liechtenstein']) },
    { id: 'alps-countries', lvl: 1, nl: 'Noem een land waar een deel van de Alpen ligt', en: 'Name a country that has part of the Alps',
      a: pick(['Zwitserland', 'Oostenrijk', 'Frankrijk', 'Italië', 'Duitsland', 'Slovenië', 'Liechtenstein', 'Monaco']) },
    { id: 'himalaya', lvl: 2, nl: 'Noem een land waar een deel van de Himalaya ligt', en: 'Name a country that has part of the Himalayas',
      a: pick(['Nepal', 'India', 'China', 'Bhutan', 'Pakistan']) },
    { id: 'andes', lvl: 2, nl: 'Noem een land waar het Andesgebergte door loopt', en: 'Name a country the Andes run through',
      a: pick(['Chili', 'Peru', 'Argentinië', 'Bolivia', 'Ecuador', 'Colombia', 'Venezuela']) },
    { id: 'amazon', lvl: 3, nl: 'Noem een land waar een deel van het Amazoneregenwoud ligt (overzeese gebieden tellen mee)', en: 'Name a country that has part of the Amazon rainforest (overseas territories count)',
      a: pick(['Brazilië', 'Peru', 'Colombia', 'Bolivia', 'Venezuela', 'Ecuador', 'Guyana', 'Suriname', 'Frankrijk']) },
    { id: 'sahara', lvl: 3, nl: 'Noem een land waar een deel van de Sahara ligt', en: 'Name a country that has part of the Sahara',
      a: pick(['Egypte', 'Marokko', 'Algerije', 'Libië', 'Tunesië', 'Mali', 'Niger', 'Tsjaad', 'Soedan', 'Mauritanië', 'Eritrea']).concat([['Westelijke Sahara', 'Western Sahara']]) },
    { id: 'north-sea', lvl: 1, nl: 'Noem een land dat aan de Noordzee ligt', en: 'Name a country on the North Sea',
      a: pick(['Nederland', 'België', 'Verenigd Koninkrijk', 'Duitsland', 'Frankrijk', 'Denemarken', 'Noorwegen']) },
    { id: 'adriatic', lvl: 2, nl: 'Noem een land dat aan de Adriatische Zee ligt', en: 'Name a country on the Adriatic Sea',
      a: pick(['Italië', 'Kroatië', 'Albanië', 'Montenegro', 'Slovenië', 'Bosnië en Herzegovina']) },
    { id: 'red-sea', lvl: 3, nl: 'Noem een land dat aan de Rode Zee ligt (de Golf van Akaba telt mee)', en: 'Name a country on the Red Sea (the Gulf of Aqaba counts)',
      a: pick(['Egypte', 'Saoedi-Arabië', 'Soedan', 'Jemen', 'Eritrea', 'Israël', 'Jordanië', 'Djibouti']) }
  ]);
  B.addQuestions('history', [
    { id: 'nato', lvl: 2, nl: 'Noem een lidstaat van de NAVO', en: 'Name a member state of NATO', a: where('N') },
    { id: 'eu-since-2004', lvl: 3, nl: 'Noem een land dat in 2004 of later lid werd van de EU', en: 'Name a country that joined the EU in 2004 or later',
      a: pick(['Polen', 'Tsjechië', 'Hongarije', 'Kroatië', 'Roemenië', 'Bulgarije', 'Malta', 'Cyprus', 'Slowakije', 'Slovenië', 'Estland', 'Letland', 'Litouwen']) },
    { id: 'g20', lvl: 3, nl: 'Noem een lid van de G20', en: 'Name a member of the G20',
      a: where('G').concat([['Europese Unie', 'European Union', 'EU'], ['Afrikaanse Unie', 'African Union', 'AU']]) },
    { id: 'nuclear', lvl: 1, nl: 'Noem een land dat kernwapens heeft', en: 'Name a country that has nuclear weapons',
      a: pick(['Verenigde Staten', 'Rusland', 'China', 'Noord-Korea', 'Frankrijk', 'Verenigd Koninkrijk', 'India', 'Pakistan', 'Israël']) },
    { id: 'un-p5', lvl: 2, nl: 'Noem een permanent lid van de VN-Veiligheidsraad', en: 'Name a permanent member of the UN Security Council',
      a: pick(['Verenigde Staten', 'Rusland', 'China', 'Verenigd Koninkrijk', 'Frankrijk']) },
    { id: 'g7', lvl: 2, nl: 'Noem een land van de G7', en: 'Name a country in the G7',
      a: pick(['Verenigde Staten', 'Duitsland', 'Japan', 'Verenigd Koninkrijk', 'Frankrijk', 'Italië', 'Canada']).concat([['Europese Unie', 'European Union', 'EU']]) },
    { id: 'eec-founders', lvl: 2, nl: 'Noem een land dat in 1957 de EEG (de voorloper van de EU) mee oprichtte', en: 'Name a country that founded the EEC (the forerunner of the EU) in 1957',
      a: pick(['Frankrijk', 'Duitsland', 'Italië', 'België', 'Nederland', 'Luxemburg']) },
    { id: 'eu-monarchies', lvl: 2, nl: 'Noem een EU-land met een koning, koningin of groothertog', en: 'Name an EU country with a king, queen or grand duke',
      a: pick(['België', 'Nederland', 'Spanje', 'Zweden', 'Denemarken', 'Luxemburg']) },
    { id: 'ussr', lvl: 2, nl: 'Noem een land dat vroeger deel was van de Sovjet-Unie', en: 'Name a country that used to be part of the Soviet Union',
      a: pick(['Rusland', 'Oekraïne', 'Wit-Rusland', 'Kazachstan', 'Georgië', 'Estland', 'Letland', 'Litouwen', 'Armenië', 'Azerbeidzjan', 'Oezbekistan', 'Moldavië', 'Turkmenistan', 'Kirgizië', 'Tadzjikistan']) },
    { id: 'yugoslavia', lvl: 3, nl: 'Noem een land dat ontstond toen Joegoslavië uit elkaar viel', en: 'Name a country that emerged when Yugoslavia broke up',
      a: pick(['Kroatië', 'Servië', 'Slovenië', 'Bosnië en Herzegovina', 'Montenegro', 'Noord-Macedonië', 'Kosovo']) },
    { id: 'nato-founders', lvl: 3, nl: 'Noem een land dat in 1949 de NAVO mee oprichtte', en: 'Name a country that founded NATO in 1949',
      a: pick(['Verenigde Staten', 'Verenigd Koninkrijk', 'Frankrijk', 'Canada', 'België', 'Nederland', 'Italië', 'Noorwegen', 'Denemarken', 'Luxemburg', 'Portugal', 'IJsland']) },
    { id: 'euro-1999', lvl: 3, nl: 'Noem een van de 11 landen die in 1999 de euro invoerden', en: 'Name one of the 11 countries that introduced the euro in 1999',
      a: pick(['Duitsland', 'Frankrijk', 'Italië', 'Spanje', 'Nederland', 'België', 'Oostenrijk', 'Portugal', 'Ierland', 'Finland', 'Luxemburg']) },
    { id: 'arab-league', lvl: 3, nl: 'Noem een lid van de Arabische Liga', en: 'Name a member of the Arab League',
      a: pick(['Saoedi-Arabië', 'Egypte', 'Marokko', 'Verenigde Arabische Emiraten', 'Irak', 'Syrië', 'Jordanië', 'Libanon', 'Qatar', 'Koeweit', 'Tunesië', 'Algerije', 'Libië', 'Oman', 'Bahrein', 'Jemen', 'Soedan', 'Palestina', 'Somalië', 'Mauritanië', 'Djibouti', 'Comoren']) }
  ]);
  B.addQuestions('sport', [
    { id: 'winter-hosts', lvl: 2, nl: 'Noem een land dat ooit de Olympische Winterspelen organiseerde (t.e.m. 2026)', en: 'Name a country that has hosted the Winter Olympics (up to 2026)',
      a: pick(['Frankrijk', 'Italië', 'Verenigde Staten', 'Zwitserland', 'Noorwegen', 'Oostenrijk', 'Duitsland', 'Canada', 'Japan', 'Rusland', 'Zuid-Korea', 'China']).concat([['Joegoslavië', 'Yugoslavia', 'Bosnië en Herzegovina', 'Bosnia and Herzegovina', 'Bosnië', 'Sarajevo']]) }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
