/* Brillion · business & merken
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam.
   (De G20-vraag staat in countries.js, omdat ze de landentabel gebruikt.) */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('business', [
    { id: 'car-brands', nl: 'Noem een automerk', en: 'Name a car brand', a: `
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
    { id: 'fast-food', nl: 'Noem een fastfoodketen', en: 'Name a fast food chain', a: `
      McDonald's|McDonald's|McDonalds|Mac|McDo; Burger King|Burger King|BK; KFC|KFC|Kentucky Fried Chicken; Quick; Subway;
      Domino's|Domino's|Dominos|Domino's Pizza; Pizza Hut; Five Guys; Starbucks; Taco Bell; Wendy's|Wendy's|Wendys; Popeyes;
      Dunkin'|Dunkin'|Dunkin Donuts|Dunkin; Chick-fil-A|Chick-fil-A|Chick fil A; Shake Shack; Papa John's|Papa John's|Papa Johns; Panos; Exki;
      Le Pain Quotidien; Lunch Garden; Bavet; Pitaya; Manhattn's|Manhattn's|Manhattns|Manhattn's Burgers; Ellis Gourmet Burger|Ellis Gourmet Burger|Ellis;
      Balls & Glory|Balls & Glory|Balls and Glory; Febo; Smullers; Kwalitaria; New York Pizza; Wagamama; Nando's|Nando's|Nandos;
      Pret A Manger|Pret A Manger|Pret; Itsu; Tim Hortons; Krispy Kreme; Baskin-Robbins|Baskin-Robbins|Baskin Robbins; Dairy Queen;
      Arby's|Arby's|Arbys; Jack in the Box; Carl's Jr.|Carl's Jr.|Carls Jr; Hardee's|Hardee's|Hardees; Sonic; In-N-Out|In-N-Out|In-N-Out Burger|In n Out;
      Whataburger; Culver's|Culver's|Culvers; Raising Cane's|Raising Cane's|Raising Canes; Bojangles; White Castle; Del Taco; Chipotle;
      Panda Express; Little Caesars; Jollibee; Wingstop; Jimmy John's; Zaxby's; Church's Chicken|Church's Chicken|Church's; Long John Silver's;
      Firehouse Subs; Jersey Mike's; Panera Bread|Panera Bread|Panera; Steak 'n Shake|Steak 'n Shake|Steak n Shake; Checkers; A&W;
      El Pollo Loco; Mos Burger; Lotteria; Yoshinoya; Sukiya; CoCo Ichibanya|CoCo Ichibanya|CoCo Curry House; Greggs; Leon; Max Burgers|Max Burgers|Max;
      Hesburger; Telepizza; Paul; Délifrance|Delifrance; Brioche Dorée|Brioche Doree; O'Tacos|O'Tacos|OTacos; Big Fernand; Vapiano; Dodo Pizza;
      Wimpy; Pollo Campero; Bonchon; Costa Coffee|Costa Coffee|Costa; Nathan's Famous|Nathan's Famous|Nathan's; Qdoba; Moe's; Taco John's;
      Krystal; Freddy's; Cinnabon; Auntie Anne's; Kotipizza; Pizza Express; Burger Brothers; Sbarro; Fatburger; Johnny Rockets` },
    { id: 'social-media', nl: 'Noem een sociaal netwerk of sociale-media-app', en: 'Name a social network or social media app', a: `
      Instagram|Instagram|Insta; TikTok; Facebook|Facebook|FB; Snapchat|Snapchat|Snap; YouTube; X|X|Twitter; WhatsApp; LinkedIn; Pinterest;
      Reddit; Twitch; Discord; Threads; Telegram; BeReal; Tumblr; Messenger|Messenger|Facebook Messenger; Bluesky; WeChat; Mastodon;
      Netlog; Hyves; Myspace|Myspace|MySpace; Vine; Google+|Google+|Google Plus; Clubhouse; Periscope; Douyin; Kuaishou; Weibo|Weibo|Sina Weibo;
      VK|VK|VKontakte; Line; KakaoTalk|KakaoTalk|Kakao; Signal; Flickr; Quora; Tinder; Bumble; Hinge; Strava; Goodreads; Letterboxd;
      Behance; Dribbble; DeviantArt; SoundCloud; Vimeo; Dailymotion; Patreon; OnlyFans; Truth Social; Parler; Gab; Ello; Path;
      Friendster; Orkut; Bebo; Habbo|Habbo|Habbo Hotel; Xanga; LiveJournal; Badoo; Hi5; Tagged; Tuenti; StudiVZ; Nextdoor; Yubo;
      Lemon8; Substack; Medium; Kik; Viber; Skype; Ask.fm|Ask.fm|ASKfm; Formspring; Yik Yak; Whisper; Houseparty; Musical.ly|Musical.ly|Musically;
      Dubsmash; Triller; Poparazzi; NGL; Tellonym; Jodel; Sarahah` },
    { id: 'phones', nl: 'Noem een merk van smartphones of gsm’s', en: 'Name a smartphone or mobile phone brand', a: `
      Apple|Apple|iPhone; Samsung; Huawei; Xiaomi; Google|Google|Pixel|Google Pixel; OnePlus; Oppo; Nokia; Motorola|Motorola|Moto;
      Sony|Sony|Sony Xperia|Xperia; Vivo; Realme; Honor; Nothing|Nothing|Nothing Phone; Fairphone; LG; HTC; BlackBerry; Asus|Asus|ROG Phone;
      Lenovo; ZTE; Alcatel; TCL; Poco; Redmi; Tecno; Infinix; Itel; Meizu; iQOO; Doro; Wiko; CAT|CAT|Cat phones; Ulefone; Doogee;
      Oukitel; Blackview; Siemens; Ericsson; Sony Ericsson; Palm; Kyocera; Sharp; Micromax; Lava; Gionee; Coolpad; Essential;
      Razer|Razer|Razer Phone; Vertu; Light Phone|Light Phone|Light; Punkt; Microsoft Lumia|Microsoft Lumia|Lumia|Microsoft;
      Amazon Fire Phone|Amazon Fire Phone|Fire Phone|Amazon; BQ; Energizer; Crosscall; Gigaset; Emporia; Teracube; Hammer; Philips; Sagem;
      BenQ; Panasonic; Toshiba; NEC; Fujitsu; YotaPhone|YotaPhone|Yota; Shiftphone|Shiftphone|Shift; Volla; Murena` },
    { id: 'supermarkets', nl: 'Noem een supermarktketen die (ooit) winkels in België had', en: 'Name a supermarket chain that has (or had) stores in Belgium', a: `
      Colruyt; Delhaize|Delhaize|AD Delhaize|Proxy Delhaize; Carrefour|Carrefour|Carrefour Market|Carrefour Express; Aldi; Lidl;
      Albert Heijn|Albert Heijn|AH; Jumbo; Okay|Okay|OKay; Spar|Spar|Eurospar; Intermarché|Intermarche; Match; Smatch; Cora; Louis Delhaize;
      Bio-Planet|Bio-Planet|Bioplanet; Makro; Prik & Tik|Prik & Tik|Prik en Tik; Alvo; Shop & Go|Shop & Go|Shop and Go; GB|GB|Super GB;
      Unic; Nopri; Sarma; Priba; Profi; Champion; Renmans; Comarkt; Mestdagh; Battard; Grand Bazar|Grand Bazar|GB Grand Bazar` },
    { id: 'currencies', nl: 'Noem een munteenheid (van nu of vroeger)', en: 'Name a currency (current or former)', a: `
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
    { id: 'musk', nl: 'Noem een bedrijf dat Elon Musk (mee) oprichtte of leidde', en: 'Name a company Elon Musk founded, co-founded or ran', a: `
      Tesla; SpaceX; X|X|Twitter|X Corp; Neuralink; The Boring Company|The Boring Company|Boring Company; xAI|xAI|X.AI; OpenAI; PayPal;
      Starlink; Zip2; X.com; SolarCity` },
    { id: 'stock-exchanges', nl: 'Noem een aandelenbeurs', en: 'Name a stock exchange', a: `
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
      London Metal Exchange|London Metal Exchange|LME; Beurs van Antwerpen|Antwerp Exchange|Antwerpse Beurs|Antwerp bourse` },
    { id: 'luxury', nl: 'Noem een luxemerk (mode, juwelen of horloges)', en: 'Name a luxury brand (fashion, jewellery or watches)', a: `
      Gucci; Louis Vuitton|Louis Vuitton|LV; Chanel; Prada; Dior|Dior|Christian Dior; Hermès|Hermes; Versace; Rolex; Armani|Armani|Giorgio Armani;
      Dolce & Gabbana|Dolce & Gabbana|Dolce and Gabbana|D&G; Balenciaga; Burberry; Cartier; Saint Laurent|Saint Laurent|Yves Saint Laurent|YSL;
      Givenchy; Fendi; Valentino; Bottega Veneta; Moncler; Off-White; Tiffany & Co.|Tiffany & Co.|Tiffany; Ralph Lauren|Ralph Lauren|Polo Ralph Lauren;
      Hugo Boss|Hugo Boss|Boss; Celine; Loewe; Balmain; Tom Ford; Michael Kors; Calvin Klein; Tommy Hilfiger; Lacoste; Miu Miu;
      Alexander McQueen|Alexander McQueen|McQueen; Stella McCartney; Vivienne Westwood; Jimmy Choo; Christian Louboutin|Christian Louboutin|Louboutin;
      Manolo Blahnik; Salvatore Ferragamo|Salvatore Ferragamo|Ferragamo; Bulgari|Bulgari|Bvlgari; Patek Philippe; Audemars Piguet; Omega;
      TAG Heuer; Breitling; Montblanc; Coach; Kate Spade; Marc Jacobs; Delvaux; Dries Van Noten; Ann Demeulemeester;
      Maison Margiela|Maison Margiela|Margiela|Martin Margiela; Raf Simons; Natan; Max Mara; Missoni; Etro; Brunello Cucinelli; Loro Piana;
      Zegna|Zegna|Ermenegildo Zegna; Kenzo; Lanvin; Chloé|Chloe; Jacquemus; Isabel Marant; Rick Owens; Comme des Garçons|Comme des Garcons;
      Issey Miyake; Yohji Yamamoto; Thom Browne; Palm Angels; Amiri; Fear of God; Acne Studios; A.P.C.|APC; Ganni; Supreme; Stone Island;
      Canada Goose; Vetements; Jil Sander; Helmut Lang; Dsquared2|Dsquared2|Dsquared; Philipp Plein; Moschino; Roberto Cavalli;
      Emilio Pucci|Emilio Pucci|Pucci; Tod's|Tods; Golden Goose; Berluti; Brioni; Kiton; Chopard; Van Cleef & Arpels; Boucheron; Graff;
      Harry Winston; De Beers; Swarovski; Piaget; Jaeger-LeCoultre; Vacheron Constantin; IWC|IWC|IWC Schaffhausen; Panerai; Hublot;
      Richard Mille; Breguet; Longines; Tudor; Goyard; Moynat; Fabergé|Faberge; Mikimoto; Pomellato; Damiani; Buccellati` },
    { id: 'magnificent-seven', nl: "Noem een bedrijf uit de 'Magnificent Seven' van de Amerikaanse beurs", en: "Name a company in the US stock market's 'Magnificent Seven'", a: `
      Apple; Google|Alphabet|Google (Alphabet); Amazon; Microsoft; Meta|Meta|Facebook|Meta Platforms; Tesla; Nvidia|Nvidia|NVIDIA` },
    { id: 'banks', nl: 'Noem een bank die (ooit) actief was in België', en: 'Name a bank that operates (or operated) in Belgium', a: `
      KBC; BNP Paribas Fortis|BNP Paribas Fortis|BNP|Fortis|BNP Paribas; ING|ING|ING België; Belfius; Argenta; Crelan; AXA Bank|AXA Bank|AXA;
      Beobank; Keytrade|Keytrade|Keytrade Bank; vdk bank|vdk bank|VDK; Triodos; CBC|CBC|CBC Banque; Hello bank!|Hello bank|Hellobank; Fintro;
      bpost bank|bpost bank|Bpost|Bank van De Post; Deutsche Bank; Nagelmackers; Degroof Petercam|Degroof Petercam|Degroof|Petercam;
      Bank Delen|Bank Delen|Delen; Bank J. Van Breda|Bank J. Van Breda|Van Breda; Puilaetco; Europabank; CPH|CPH|CPH Bank; MeDirect; Aion;
      Revolut; N26; bunq; Santander; Rabobank; Record Bank; Generale Bank|Generale Bank|Générale de Banque; Kredietbank; Cera|Cera|Cera Bank;
      BBL|BBL|Bank Brussel Lambert; ASLK|ASLK|CGER; Gemeentekrediet|Gemeentekrediet|Crédit Communal; Dexia; Citibank; ABN AMRO; Centea;
      Anhyp; Bacob; Optima Bank|Optima Bank|Optima; Landbouwkrediet; Paribas; HSBC` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
