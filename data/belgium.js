/* Brillion · België
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam. */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('belgium', [
    { id: 'provinces', nl: 'Noem een Belgische provincie', en: 'Name a Belgian province', a: `
      Antwerpen|Antwerp|Anvers; Limburg|Limburg|Limbourg; Oost-Vlaanderen|East Flanders|Flandre-Orientale;
      West-Vlaanderen|West Flanders|Flandre-Occidentale; Vlaams-Brabant|Flemish Brabant|Brabant flamand; Luik|Liège|Liege;
      Henegouwen|Hainaut; Namen|Namur; Luxemburg|Luxembourg|Belgisch Luxemburg|Province of Luxembourg; Waals-Brabant|Walloon Brabant|Brabant wallon` },
    { id: 'kings', nl: 'Noem een koning der Belgen', en: 'Name a King of the Belgians', a: `
      Filip|Philippe|Philip|Filip I; Boudewijn|Baudouin|Boudewijn I; Albert II|Albert II|Albert; Leopold II|Leopold II|Léopold II|Leopold;
      Albert I|Albert I|Koning-Ridder|Knight King; Leopold I|Leopold I|Léopold I; Leopold III|Leopold III|Léopold III` },
    { id: 'fry-sauces', nl: 'Noem een sausje dat je in een Belgische frituur kan bestellen', en: 'Name a sauce you can order at a Belgian fry shop', a: `
      Mayonaise|Mayonnaise|Mayo; Ketchup|Ketchup|Tomatenketchup; Curryketchup|Curry ketchup|Curry; Samurai|Samurai|Samouraï;
      Andalouse|Andalouse|Andaluse; Tartaar|Tartare|Tartaarsaus|Tartar sauce; Cocktailsaus|Cocktail sauce|Cocktail; Joppiesaus|Joppie|Joppie sauce;
      Bicky|Bicky saus|Bicky dressing; Stoofvleessaus|Stew sauce|Stoofvlees|Stoverijsaus; Pickles|Piccalilly|Piccalilli;
      Bearnaise|Béarnaise; Americain|Américaine|Americaine; Pepersaus|Pepper sauce|Peper; Barbecuesaus|Barbecue sauce|BBQ|Barbecue;
      Looksaus|Garlic sauce|Knoflooksaus; Aioli|Aïoli; Mammoet|Mammoet|Mammouth; Hannibal; Brasil|Brasil|Braziliaanse saus;
      Hawaï|Hawaii|Hawaïsaus; Zigeunersaus|Gipsy sauce|Zigeuner|Paprikasaus; Algerienne|Algérienne|Algerian sauce;
      Provençaalse saus|Provençale sauce|Provencaalse saus; Mosterd|Mustard; Satésaus|Satay sauce|Pindasaus|Peanut sauce|Saté;
      Chilisaus|Chili sauce|Sweet chili|Zoete chilisaus; Champignonsaus|Mushroom sauce; Goulashsaus|Goulash sauce;
      Mexicaanse saus|Mexican sauce|Mexicano; Dragonsaus|Tarragon sauce; Mosterdmayonaise|Mustard mayonnaise|Mosterd-mayo; Ravigote;
      Tzatziki; Harissa|Harissasaus; Oriëntaalse saus|Oriental sauce|Oriental; Pitasaus|Pita sauce; Griekse saus|Greek sauce|Grecque;
      Bourguignonnesaus|Bourguignonne sauce|Bourguignonne; Hollandaise|Hollandaisesaus; Remoulade|Remouladesaus; Duivelssaus|Devil sauce|Diablo` },
    { id: 'dishes', nl: 'Noem een typisch Belgisch gerecht of lekkernij', en: 'Name a typical Belgian dish or treat', a: `
      Frieten|Fries|Belgische frieten|Belgian fries|Frites|Friet; Stoofvlees|Flemish beef stew|Stoverij|Carbonnade flamande|Karbonaden;
      Mosselen met friet|Moules-frites|Mussels and fries|Mosselen|Mussels; Wafels|Belgian waffles|Wafel|Waffle; Luikse wafel|Liège waffle|Liege waffle;
      Brusselse wafel|Brussels waffle; Waterzooi; Pralines|Pralines|Belgische pralines|Belgian chocolates; Speculoos|Speculoos|Speculaas;
      Stoemp; Vol-au-vent|Vol-au-vent|Koninginnenhapje|Bouchée à la reine;
      Witloof met ham en kaassaus|Chicory au gratin|Witloofrolletjes|Chicons au gratin; Balletjes in tomatensaus|Meatballs in tomato sauce|Ballekes;
      Luikse balletjes|Boulets à la liégeoise|Boulets liégeois|Luikse ballen; Garnaalkroketten|Shrimp croquettes|Garnaalkroket;
      Tomaat-garnaal|Tomate crevette|Tomaat met garnalen; Paling in 't groen|Eel in green sauce|Paling in het groen|Anguilles au vert;
      Konijn met pruimen|Rabbit with prunes; Steak-friet|Steak frites|Steak met frieten; Filet americain|Steak tartare|Préparé|Filet américain;
      Croque monsieur|Croque monsieur|Croque; Smoutebollen|Beignets|Smoutebol; Rijsttaart|Rice tart|Tarte au riz; Mattentaart;
      Cramique|Cramique|Kramiek; Craquelin; Mastel; Antwerpse handjes|Antwerp hands|Handjes; Lacquemant|Lacquemants; Couque de Dinant;
      Pain à la grecque|Pain a la grecque; Kletskoppen|Kletskop|Lace cookies; Cuberdons|Cuberdon|Neuzekes|Gentse neuzen;
      Bloedpens|Black pudding|Beuling|Boudin noir; Witte pens|White pudding|Boudin blanc; Hutsepot; Ardense ham|Ardennes ham|Jambon d'Ardenne;
      Tarte al djote|Tarte al djote|Tarte al d'jote; Flamiche; Konijn in geuze|Rabbit in gueuze|Lapin à la gueuze; Choesels;
      Kip met appelmoes|Chicken with applesauce; Vogelnestje|Vogelnestjes|Scotch egg; Blinde vinken|Oiseaux sans tête|Oiseaux sans tete;
      Kipkap|Head cheese|Kip-kap|Hoofdkaas|Tête pressée; Spekendik; Limburgse vlaai|Vlaai|Limburg flan; Sabayon|Zabaglione;
      Dame blanche; Café liégeois|Cafe liegeois; Chocolademousse|Chocolate mousse|Mousse au chocolat; Pistolets|Pistolet;
      Frikandel; Bickyburger|Bicky burger; Viandel|Viandelle; Berenpoot; Lucifer; Mitraillette; Babelutten|Babelutte;
      Peperkoek|Gingerbread|Ontbijtkoek|Pain d'épices; Appelbollen|Apple dumplings; Pannenkoeken|Pancakes|Crêpes|Pannenkoek;
      Gentse stoverij|Ghent stew; Cougnou|Cougnou|Kerstbrood|Cougnolle; Lukken|Lukken|Nieuwjaarswafeltjes|Galettes` },
    { id: 'red-devils-2018', nl: 'Noem een speler uit de WK-selectie van de Rode Duivels in 2018 (ze werden derde)', en: "Name a player from Belgium's 2018 World Cup squad (they finished third)", a: `
      Eden Hazard|Eden Hazard|Hazard; Kevin De Bruyne|Kevin De Bruyne|De Bruyne|KDB; Romelu Lukaku|Romelu Lukaku|Lukaku;
      Thibaut Courtois|Thibaut Courtois|Courtois; Vincent Kompany|Vincent Kompany|Kompany; Dries Mertens|Dries Mertens|Mertens;
      Jan Vertonghen|Jan Vertonghen|Vertonghen; Toby Alderweireld|Toby Alderweireld|Alderweireld; Axel Witsel|Axel Witsel|Witsel;
      Marouane Fellaini|Marouane Fellaini|Fellaini; Yannick Carrasco|Yannick Carrasco|Carrasco; Thomas Meunier|Thomas Meunier|Meunier;
      Michy Batshuayi|Michy Batshuayi|Batshuayi; Youri Tielemans|Youri Tielemans|Tielemans; Thorgan Hazard|Thorgan Hazard|Thorgan;
      Nacer Chadli|Nacer Chadli|Chadli; Adnan Januzaj|Adnan Januzaj|Januzaj; Mousa Dembélé|Mousa Dembele|Dembélé;
      Thomas Vermaelen|Thomas Vermaelen|Vermaelen; Dedryck Boyata|Dedryck Boyata|Boyata; Leander Dendoncker|Leander Dendoncker|Dendoncker;
      Simon Mignolet|Simon Mignolet|Mignolet; Koen Casteels|Koen Casteels|Casteels` },
    { id: 'champions', nl: 'Noem een club die ooit landskampioen voetbal werd in België (t.e.m. 2025)', en: 'Name a club that has won the Belgian football league title (up to 2025)', a: `
      RSC Anderlecht|RSC Anderlecht|Anderlecht; Club Brugge|Club Brugge|Club Bruges|Brugge; Standard Luik|Standard Liège|Standard|Standard Liege;
      KRC Genk|KRC Genk|Racing Genk|Genk; Union Sint-Gillis|Royale Union Saint-Gilloise|Union|Union SG|USG;
      Royal Antwerp|Royal Antwerp FC|Antwerp|Antwerpen|RAFC; KAA Gent|KAA Gent|Gent|AA Gent|La Gantoise; KV Mechelen|KV Mechelen|Mechelen|Malinwa;
      Cercle Brugge|Cercle Brugge|Cercle; Lierse|Lierse SK|Lier; Beerschot; SK Beveren|SK Beveren|Beveren; RWD Molenbeek|RWD Molenbeek|Molenbeek|RWDM;
      RFC Luik|RFC Liège|FC Luik|RFC Liege; Daring Brussel|Daring Club Brussels|Daring; Racing Club Brussel|Racing Club de Bruxelles|Racing Club Brussels` },
    { id: 'prime-ministers', nl: 'Noem een Belgische eerste minister sinds 1945', en: 'Name a Belgian prime minister since 1945', a: `
      Bart De Wever|Bart De Wever|De Wever; Alexander De Croo|Alexander De Croo|De Croo; Charles Michel|Charles Michel|Michel;
      Elio Di Rupo|Elio Di Rupo|Di Rupo; Guy Verhofstadt|Guy Verhofstadt|Verhofstadt; Yves Leterme|Yves Leterme|Leterme;
      Herman Van Rompuy|Herman Van Rompuy|Van Rompuy; Jean-Luc Dehaene|Jean-Luc Dehaene|Dehaene; Wilfried Martens|Wilfried Martens|Martens;
      Sophie Wilmès|Sophie Wilmes|Wilmès; Leo Tindemans|Leo Tindemans|Tindemans; Paul-Henri Spaak|Paul-Henri Spaak|Spaak;
      Gaston Eyskens|Gaston Eyskens|Eyskens; Mark Eyskens; Achille Van Acker|Achille Van Acker|Van Acker;
      Paul Vanden Boeynants|Paul Vanden Boeynants|Vanden Boeynants|VDB; Edmond Leburton|Edmond Leburton|Leburton;
      Théo Lefèvre|Theo Lefevre|Lefèvre; Pierre Harmel|Pierre Harmel|Harmel; Camille Huysmans|Camille Huysmans|Huysmans;
      Jean Duvieusart|Jean Duvieusart|Duvieusart; Joseph Pholien|Joseph Pholien|Pholien; Jean Van Houtte|Jean Van Houtte|Van Houtte` },
    { id: 'coast', nl: 'Noem een badplaats aan de Belgische kust', en: 'Name a seaside resort on the Belgian coast', a: `
      Oostende|Ostend|Ostende; Knokke|Knokke|Knokke-Heist; Blankenberge; De Panne|De Panne|La Panne; De Haan|De Haan|Le Coq;
      Nieuwpoort|Nieuwpoort|Nieuport; Middelkerke; Koksijde|Koksijde|Coxyde; Zeebrugge; Bredene; Wenduine; Oostduinkerke; Westende; Heist;
      Sint-Idesbald|Saint-Idesbald; Duinbergen; Het Zoute|Het Zoute|Le Zoute|Zoute; Mariakerke; Raversijde; Lombardsijde; Vosseslag;
      Albertstrand; Nieuwpoort-Bad; Koksijde-Bad` },
    { id: 'rivers', nl: 'Noem een rivier in België', en: 'Name a river in Belgium', a: `
      Schelde|Scheldt|Escaut; Maas|Meuse; Leie|Lys; Dender|Dendre; IJzer|Yser; Demer; Dijle|Dyle; Nete|Nete|Grote Nete|Kleine Nete; Rupel;
      Zenne|Senne; Durme; Samber|Sambre; Ourthe; Semois; Lesse; Amblève|Ambleve|Amel; Vesdre|Vesdre|Vesder; Gete|Gette|Grote Gete|Kleine Gete;
      Mark; Zwalm; Haine|Haine|Hene; Jeker|Geer|Jaar; Herk; Velp; Lasne|Lasne|Laan; IJse|Ijse; Dommel; Warche; Salm; Viroin;
      Eau d'Heure; Hoyoux; Méhaigne|Mehaigne; Orneau; Thyle; Molignée|Molignee; Bocq; Sûre|Sauer|Sure; Our; Roer|Rur; Mandel; Kale;
      Lieve; Moervaart; Wamme; Lomme; Houille` },
    { id: 'comics', nl: 'Noem een strip of stripfiguur van een Belgische tekenaar', en: 'Name a comic or comic character by a Belgian artist', a: `
      Kuifje|Tintin; De Smurfen|The Smurfs|Smurfen|Smurf; Suske en Wiske|Spike and Suzy|Suske|Wiske|Bob et Bobette; Lucky Luke;
      Robbedoes|Spirou; Guust Flater|Gaston Lagaffe|Gaston|Guust; Jommeke; Nero|De Avonturen van Nero; De Kiekeboes|Kiekeboe|Marcel Kiekeboe;
      Bessy; Urbanus; De Rode Ridder|The Red Knight|Rode Ridder; Blake en Mortimer|Blake and Mortimer|Blake & Mortimer; Kwabbernoot|Fantasio;
      Marsupilami; Cowboy Henk; Piet Pienter en Bert Bibber|Piet Pienter en Bert Bibber|Piet Pienter|Bert Bibber;
      Bollie en Billie|Billy and Buddy|Boule et Bill|Boule en Bill; Jerom; Lambik; Yoko Tsuno; Largo Winch; XIII; Thorgal;
      De Blauwbloezen|The Bluecoats|Les Tuniques Bleues|Blauwbloezen; Johan en Pirrewiet|Johan and Peewit|Johan et Pirlouit; Dommel|Cubitus;
      Ric Roland|Ric Hochet; Natasja|Natacha; Steven Sterk|Benny Breakiron|Benoît Brisefer; Clifton; Chlorophylle|Chlorofyl;
      Gil Jordaan|Gil Jourdan; Tif en Tondu|Tif et Tondu; Bakelandt; F.C. De Kampioenen|FC De Kampioenen|Kampioenen;
      Samson en Gert|Samson & Gert; Kramikske; Sammy; Agent 212; Cédric|Cedric; Pierre Tombal; Kid Paddle; Game Over;
      De Kat|Le Chat; Aria; Bernard Prins|Bernard Prince; Comanche; Jeremiah; Bob Morane; Bruno Brazil; Biebel; Het eiland Amoras|Amoras;
      Tante Sidonia|Aunt Sidonia|Sidonia; Professor Barabas|Professor Barabas|Barabas; Krimson; Schanulleke; Kapitein Haddock|Captain Haddock|Haddock;
      Bobbie|Snowy|Milou; Jansen en Janssen|Thomson and Thompson|Dupond et Dupont; Gargamel; Azraël|Azrael; Smurfin|Smurfette;
      Brilsmurf|Brainy Smurf; Grote Smurf|Papa Smurf; Fanny Kiekeboe|Fanny; Filiberke; Flip; Annemieke en Rozemieke|Annemieke|Rozemieke;
      Professor Gobelijn|Gobelijn; Petoetje; Adhemar; Jolly Jumper; Rataplan|Rantanplan; De Daltons|The Daltons|Daltons|Joe Dalton|Averell Dalton` },
    { id: 'cycling', nl: 'Noem een profwielerwedstrijd die in België wordt gereden', en: 'Name a professional cycling race held in Belgium', a: `
      Ronde van Vlaanderen|Tour of Flanders|De Ronde|Vlaanderens Mooiste; Luik-Bastenaken-Luik|Liège-Bastogne-Liège|Liege-Bastogne-Liege|La Doyenne;
      Gent-Wevelgem; Omloop Het Nieuwsblad|Omloop Het Nieuwsblad|Omloop; E3 Saxo Classic|E3 Saxo Classic|E3 Harelbeke|E3 Prijs Vlaanderen|E3;
      Dwars door Vlaanderen|Across Flanders; Waalse Pijl|La Flèche Wallonne|Fleche Wallonne|Flèche Wallonne; Kuurne-Brussel-Kuurne|Kuurne-Brussels-Kuurne|Kuurne;
      Scheldeprijs; Brabantse Pijl|Brabantse Pijl|La Flèche Brabançonne; Ronde van België|Tour of Belgium|Baloise Belgium Tour;
      Renewi Tour|Renewi Tour|Benelux Tour|BinckBank Tour|Eneco Tour; Classic Brugge-De Panne|Classic Brugge-De Panne|Driedaagse De Panne|Brugge-De Panne;
      Nokere Koerse; Le Samyn|Le Samyn|GP Le Samyn; Omloop van het Houtland; Druivenkoers Overijse|Druivenkoers Overijse|Druivenkoers;
      Primus Classic; Binche-Chimay-Binche; Grand Prix de Wallonie|Grand Prix de Wallonie|GP Wallonie|Grote Prijs van Wallonië;
      Dwars door het Hageland; Schaal Sels; Memorial Rik Van Steenbergen; Grote Prijs Jean-Pierre Monseré|GP Monseré|GP Monsere;
      Handzame Classic; Grote Prijs Marcel Kint; Ronde van Limburg|Tour of Limburg; Antwerp Port Epic; Elfstedenronde|Elfstedenronde Brugge;
      Heistse Pijl; Kampioenschap van Vlaanderen|Kampioenschap van Vlaanderen|Koolskamp; Gooikse Pijl; Grote Prijs Briek Schotte|GP Briek Schotte;
      Ronde van Wallonië|Tour de Wallonie; Omloop Mandel-Leie-Schelde; Belgisch kampioenschap|Belgian Championship|BK wielrennen|BK;
      Koppenbergcross; Jaarmarktcross Niel; Azencross; Duinencross Koksijde|Duinencross; Scheldecross; Zilvermeercross; Superprestige;
      X2O Trofee|X2O Badkamers Trofee|X2O` },
    { id: 'chocolate', nl: 'Noem een Belgisch chocolademerk of chocolatier', en: 'Name a Belgian chocolate brand or chocolatier', a: `
      Côte d'Or|Cote d'Or; Neuhaus; Leonidas; Godiva; Callebaut|Callebaut|Barry Callebaut; Galler; Guylian; Pierre Marcolini|Pierre Marcolini|Marcolini;
      Jacques; Meurisse; Mary|Mary|Chocolaterie Mary; Wittamer; Corné Port-Royal|Corne Port-Royal|Corné; Daskalidès|Daskalides; Duc d'O;
      Libeert; Belvas; Benoît Nihant|Benoit Nihant|Nihant; Dumon; The Chocolate Line|The Chocolate Line|Chocolate Line|Dominique Persoone;
      Laurent Gerbaud|Laurent Gerbaud|Gerbaud; Frederic Blondeel|Frederic Blondeel|Blondeel; Zaabär|Zaabar; Jean-Philippe Darcis|Jean-Philippe Darcis|Darcis;
      Burie|Chocolatier Burie; Kim's Chocolates|Kims Chocolates; Cachet; Dolfin; Café-Tasse|Cafe-Tasse; Planète Chocolat|Planete Chocolat;
      Belcolade; Manon` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
