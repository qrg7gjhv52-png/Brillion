/* Brillion · taal
   Elk antwoord: NL|EN|alternatieve namen. Volgorde = van vaak gegeven naar zeldzaam. */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('language', [
    { id: 'eu-languages', nl: 'Noem een officiële taal van de Europese Unie', en: 'Name an official language of the European Union', a: `
      Engels|English; Frans|French; Duits|German; Nederlands|Dutch|Vlaams|Flemish; Spaans|Spanish; Italiaans|Italian; Portugees|Portuguese;
      Pools|Polish; Grieks|Greek; Zweeds|Swedish; Deens|Danish; Fins|Finnish; Hongaars|Hungarian; Tsjechisch|Czech; Roemeens|Romanian;
      Bulgaars|Bulgarian; Kroatisch|Croatian; Slowaaks|Slovak; Sloveens|Slovenian|Slovene; Ests|Estonian; Lets|Latvian; Litouws|Lithuanian;
      Iers|Irish|Gaelic|Iers-Gaelisch|Irish Gaelic; Maltees|Maltese` },
    { id: 'greek-letters', nl: 'Noem een letter van het Griekse alfabet', en: 'Name a letter of the Greek alphabet', a: `
      Alfa|Alpha; Bèta|Beta; Gamma; Delta; Pi; Omega; Sigma; Lambda; Epsilon; Thèta|Theta; Mu|Mu|My; Omikron|Omicron; Phi|Phi|Fi; Psi;
      Tau; Rho|Rho|Ro; Zèta|Zeta; Èta|Eta; Kappa; Jota|Iota; Chi|Chi|Khi; Xi|Xi|Ksi; Nu|Nu|Ny; Ypsilon|Upsilon|Ipsilon` },
    { id: 'nato-alphabet', nl: 'Noem een woord uit het NAVO-spellingsalfabet', en: 'Name a word from the NATO phonetic alphabet', a: `
      Alfa|Alpha; Bravo; Charlie; Delta; Echo; Foxtrot; Zulu; Tango; Romeo; Oscar; Hotel; Golf; Victor; Sierra; Kilo; Lima; Mike;
      Papa; India; Juliett|Juliett|Juliet; November; Whiskey|Whiskey|Whisky; Yankee; X-ray|X-ray|Xray; Quebec; Uniform` },
    { id: 'romance', nl: 'Noem een Romaanse taal (een taal die uit het Latijn ontstond)', en: 'Name a Romance language (descended from Latin)', a: `
      Spaans|Spanish; Frans|French; Italiaans|Italian; Portugees|Portuguese; Roemeens|Romanian; Catalaans|Catalan; Galicisch|Galician;
      Occitaans|Occitan|Provençaals|Provencal; Waals|Walloon; Sardijns|Sardinian|Sardisch; Corsicaans|Corsican; Reto-Romaans|Romansh|Retoromaans;
      Ladinisch|Ladin; Friulisch|Friulian; Picardisch|Picard; Moldavisch|Moldovan; Aromaans|Aromanian; Asturisch|Asturian; Aragonees|Aragonese;
      Leonees|Leonese; Extremeens|Extremaduran; Mirandees|Mirandese; Ladino|Ladino|Judeo-Spaans|Judaeo-Spanish; Napolitaans|Neapolitan;
      Siciliaans|Sicilian; Venetiaans|Venetian; Lombardisch|Lombard; Piëmontees|Piedmontese; Ligurisch|Ligurian; Emiliaans|Emilian;
      Romagnools|Romagnol; Dalmatisch|Dalmatian; Istro-Roemeens|Istro-Romanian; Megleno-Roemeens|Megleno-Romanian;
      Arpitaans|Arpitan|Franco-Provençaals|Franco-Provencal; Gallo; Lorreins|Lorrain; Champenois; Bourguignon|Burgundian; Normandisch|Norman;
      Jèrriais|Jerriais; Guernésiais|Guernesiais; Mozarabisch|Mozarabic; Haïtiaans Creools|Haitian Creole; Papiaments|Papiamento;
      Kaapverdisch Creools|Cape Verdean Creole; Chavacano` },
    { id: 'dutch-official', nl: 'Noem een land waar Nederlands een officiële taal is', en: 'Name a country where Dutch is an official language', a: `
      Nederland|Netherlands|Holland; België|Belgium; Suriname; Aruba; Curaçao|Curacao; Sint Maarten|Sint Maarten|Sint-Maarten` },
    { id: 'scripts', nl: 'Noem een schrift of alfabet', en: 'Name a writing system or alphabet', a: `
      Latijns alfabet|Latin alphabet|Latijns|Latin|Romeins alfabet; Grieks alfabet|Greek alphabet|Grieks|Greek; Cyrillisch|Cyrillic|Cyrillisch alfabet;
      Arabisch schrift|Arabic script|Arabisch|Arabic; Hebreeuws alfabet|Hebrew alphabet|Hebreeuws|Hebrew;
      Chinese karakters|Chinese characters|Hanzi|Chinees schrift|Chinees|Chinese; Hiragana; Katakana; Kanji; Hangul|Hangul|Hangeul|Koreaans schrift;
      Hiërogliefen|Egyptian hieroglyphs|Hieroglyphs|Hierogliefen; Spijkerschrift|Cuneiform; Braille|Braille|Brailleschrift;
      Runen|Runes|Futhark|Runenschrift; Devanagari; Thais schrift|Thai script|Thai; Armeens alfabet|Armenian alphabet|Armeens|Armenian;
      Georgisch alfabet|Georgian alphabet|Georgisch|Georgian|Mkhedruli; Ge'ez|Ge'ez|Ethiopisch schrift|Ethiopic; Tamil; Bengaals schrift|Bengali script|Bengali|Bangla;
      Gujarati; Gurmukhi; Kannada; Malayalam; Telugu; Odia|Odia|Oriya; Sinhala|Sinhala|Singalees; Tibetaans schrift|Tibetan script|Tibetaans;
      Mongools schrift|Mongolian script; Birmaans schrift|Burmese script|Myanmar script; Khmer; Lao|Lao script|Laotiaans; Ogham;
      Lineair A|Linear A; Lineair B|Linear B; Brahmi; Kharoshthi; Fenicisch alfabet|Phoenician alphabet|Fenicisch|Phoenician; Aramees|Aramaic;
      Syrisch|Syriac; Thaana; N'Ko|NKo; Tifinagh; Vai; Cherokee|Cherokee syllabary; Canadese syllabische schriften|Canadian Aboriginal syllabics;
      Gotisch alfabet|Gothic alphabet; Glagolitisch|Glagolitic; Koptisch|Coptic; Etruskisch alfabet|Etruscan alphabet; Mayaschrift|Maya script|Maya glyphs;
      Rongorongo; Javaans schrift|Javanese script; Balinees schrift|Balinese script; Baybayin; Ol Chiki; Stenografie|Shorthand|Steno;
      Bopomofo|Bopomofo|Zhuyin; Pinyin; Hiëratisch|Hieratic; Demotisch|Demotic` },
    { id: 'punctuation', nl: 'Noem een leesteken', en: 'Name a punctuation mark', a: `
      Punt|Full stop|Period; Komma|Comma; Vraagteken|Question mark; Uitroepteken|Exclamation mark|Exclamation point; Dubbele punt|Colon;
      Puntkomma|Semicolon; Aanhalingstekens|Quotation marks|Quotes|Aanhalingsteken; Apostrof|Apostrophe|Weglatingsteken;
      Haakjes|Brackets|Parentheses|Ronde haakjes; Koppelteken|Hyphen|Streepje; Gedachtestreepje|Dash|Em dash|En dash;
      Beletselteken|Ellipsis|Drie puntjes; Schuine streep|Slash|Forward slash; Vierkante haken|Square brackets; Accolades|Curly brackets|Braces;
      Sterretje|Asterisk; Interrobang; Omgekeerd vraagteken|Inverted question mark; Omgekeerd uitroepteken|Inverted exclamation mark;
      Guillemets|Guillemets|Franse aanhalingstekens; Backslash|Backslash|Omgekeerde schuine streep; Alineateken|Pilcrow|Paragraph mark;
      Paragraafteken|Section sign; Verticale streep|Vertical bar|Pipe` },
    { id: 'india', nl: 'Noem een taal die in de grondwet van India erkend wordt', en: 'Name a language recognised in the Constitution of India', a: `
      Hindi; Engels|English; Bengaals|Bengali|Bangla; Tamil; Urdu; Punjabi|Punjabi|Pandjabi; Telugu; Marathi; Gujarati; Sanskriet|Sanskrit;
      Kannada; Malayalam; Odia|Odia|Oriya; Nepalees|Nepali; Kasjmiri|Kashmiri; Assamees|Assamese; Sindhi; Konkani; Maithili;
      Manipuri|Manipuri|Meitei; Santali; Bodo; Dogri` },
    { id: 'germanic', nl: 'Noem een Germaanse taal', en: 'Name a Germanic language', a: `
      Engels|English; Duits|German; Nederlands|Dutch; Zweeds|Swedish; Deens|Danish; Noors|Norwegian; IJslands|Icelandic; Afrikaans;
      Fries|Frisian|West-Fries|West Frisian; Luxemburgs|Luxembourgish|Letzeburgs; Jiddisch|Yiddish; Faeröers|Faroese; Schots|Scots;
      Zwitserduits|Swiss German; Nedersaksisch|Low German|Low Saxon|Platduits|Plattdeutsch; Limburgs|Limburgish; Vlaams|Flemish;
      Gotisch|Gothic; Oudnoors|Old Norse; Oudengels|Old English|Angelsaksisch|Anglo-Saxon; Plautdietsch;
      Pennsylvania-Duits|Pennsylvania Dutch|Pennsylvania German; Alemannisch|Alemannic; Beiers|Bavarian; Elfdaals|Elfdalian; Norn;
      Krimgotisch|Crimean Gothic; Langobardisch|Lombardic; Zeeuws|Zeelandic; West-Vlaams|West Flemish; Brabants|Brabantian; Gronings|Groningen dialect;
      Twents|Twents dialect; Saterfries|Saterland Frisian; Noord-Fries|North Frisian; Bokmål|Bokmal; Nynorsk; Kölsch|Kolsch|Keuls; Hunsrik;
      Cimbrisch|Cimbrian; Wymysorys; Oudsaksisch|Old Saxon; Oudhoogduits|Old High German; Middelnederlands|Middle Dutch; Middelengels|Middle English` },
    { id: 'slavic', nl: 'Noem een Slavische taal', en: 'Name a Slavic language', a: `
      Russisch|Russian; Pools|Polish; Oekraïens|Ukrainian; Tsjechisch|Czech; Servisch|Serbian; Kroatisch|Croatian; Bulgaars|Bulgarian;
      Slowaaks|Slovak; Sloveens|Slovenian|Slovene; Bosnisch|Bosnian; Macedonisch|Macedonian; Wit-Russisch|Belarusian|Belarussisch;
      Montenegrijns|Montenegrin; Servo-Kroatisch|Serbo-Croatian; Sorbisch|Sorbian|Opper-Sorbisch|Upper Sorbian|Neder-Sorbisch|Lower Sorbian|Wendisch;
      Kasjoebisch|Kashubian; Roetheens|Rusyn|Ruthenian; Silezisch|Silesian; Oudkerkslavisch|Old Church Slavonic|Kerkslavisch|Church Slavonic;
      Polabisch|Polabian; Pomoraans|Pomeranian; Slovincisch|Slovincian` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
