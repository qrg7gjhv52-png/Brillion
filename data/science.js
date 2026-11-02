/* ─────────────────────────────────────────────────────────────
   Brillion · wetenschap & lichaam (de bestaande vragen)
   Elk antwoord: NL|EN|andere namen. Volgorde = van vaak genoemd naar
   zeldzaam: de eerste 20% is Gewoon, de laatste 20% 1 in a Brillion.
   lvl = moeilijkheid (1 makkelijk · 2 gemiddeld · 3 moeilijk).
   Nieuwe vragen over wetenschap & het lichaam staan in body.js.
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('science', [
    { id: 'elements', lvl: 1, nl: 'Noem een scheikundig element', en: 'Name a chemical element', a: `
      Zuurstof|Oxygen|O; Waterstof|Hydrogen|H; Koolstof|Carbon|C; Stikstof|Nitrogen|N; IJzer|Iron|Fe; Goud|Gold|Au; Zilver|Silver|Ag;
      Koper|Copper|Cu; Helium|Helium|He; Natrium|Sodium|Na; Calcium|Calcium|Ca; Lood|Lead|Pb; Aluminium|Aluminium|Aluminum|Al;
      Uranium|Uranium|U; Kwik|Mercury|Hg; Zink|Zinc|Zn; Chloor|Chlorine|Cl; Kalium|Potassium|K; Magnesium|Magnesium|Mg;
      Zwavel|Sulfur|Sulphur|S; Fosfor|Phosphorus|P; Silicium|Silicon|Si; Neon|Neon|Ne; Tin|Tin|Sn; Platina|Platinum|Pt;
      Titanium|Titanium|Titaan|Ti; Plutonium|Plutonium|Pu; Lithium|Lithium|Li; Fluor|Fluorine|F; Argon|Argon|Ar; Nikkel|Nickel|Ni;
      Jodium|Iodine|I; Radium|Radium|Ra; Chroom|Chromium|Cr; Kobalt|Cobalt|Co; Wolfraam|Tungsten|W|Wolfram; Mangaan|Manganese|Mn;
      Broom|Bromine|Br; Barium|Barium|Ba; Krypton|Krypton|Kr; Xenon|Xenon|Xe; Radon|Radon|Rn; Arseen|Arsenic|As;
      Borium|Boron|B|Boor; Beryllium|Beryllium|Be; Cesium|Caesium|Cesium|Cs; Strontium|Strontium|Sr; Polonium|Polonium|Po;
      Neodymium|Neodymium|Nd; Iridium|Iridium|Ir; Osmium|Osmium|Os; Palladium|Palladium|Pd; Rhodium|Rhodium|Rh;
      Germanium|Germanium|Ge; Gallium|Gallium|Ga; Antimoon|Antimony|Sb; Bismut|Bismuth|Bi; Cadmium|Cadmium|Cd;
      Selenium|Selenium|Se|Seleen; Telluur|Tellurium|Te; Vanadium|Vanadium|V; Molybdeen|Molybdenum|Mo; Zirkonium|Zirconium|Zr;
      Thorium|Thorium|Th; Francium|Francium|Fr; Einsteinium|Einsteinium|Es; Curium|Curium|Cm; Americium|Americium|Am;
      Nobelium|Nobelium|No; Mendelevium|Mendelevium|Md; Rubidium|Rubidium|Rb; Indium|Indium|In; Tantaal|Tantalum|Ta;
      Niobium|Niobium|Nb; Scandium|Scandium|Sc; Yttrium|Yttrium|Y; Lanthaan|Lanthanum|La; Cerium|Cerium|Ce; Europium|Europium|Eu;
      Gadolinium|Gadolinium|Gd; Samarium|Samarium|Sm; Praseodymium|Praseodymium|Pr; Promethium|Promethium|Pm; Terbium|Terbium|Tb;
      Dysprosium|Dysprosium|Dy; Holmium|Holmium|Ho; Erbium|Erbium|Er; Thulium|Thulium|Tm; Ytterbium|Ytterbium|Yb;
      Lutetium|Lutetium|Lu; Hafnium|Hafnium|Hf; Renium|Rhenium|Re; Ruthenium|Ruthenium|Ru; Technetium|Technetium|Tc;
      Thallium|Thallium|Tl; Astaat|Astatine|At; Actinium|Actinium|Ac; Protactinium|Protactinium|Pa; Neptunium|Neptunium|Np;
      Berkelium|Berkelium|Bk; Californium|Californium|Cf; Fermium|Fermium|Fm; Lawrencium|Lawrencium|Lr;
      Rutherfordium|Rutherfordium|Rf; Dubnium|Dubnium|Db; Seaborgium|Seaborgium|Sg; Bohrium|Bohrium|Bh; Hassium|Hassium|Hs;
      Meitnerium|Meitnerium|Mt; Darmstadtium|Darmstadtium|Ds; Roentgenium|Roentgenium|Rg; Copernicium|Copernicium|Cn;
      Nihonium|Nihonium|Nh; Flerovium|Flerovium|Fl; Moscovium|Moscovium|Mc; Livermorium|Livermorium|Lv; Tennessine|Tennessine|Ts;
      Oganesson|Oganesson|Og` },
    { id: 'one-letter', lvl: 3, nl: 'Noem een element waarvan het symbool uit één letter bestaat', en: 'Name an element whose symbol is a single letter', a: `
      Waterstof|Hydrogen|H; Zuurstof|Oxygen|O; Koolstof|Carbon|C; Stikstof|Nitrogen|N; Kalium|Potassium|K; Uranium|Uranium|U;
      Zwavel|Sulfur|Sulphur|S; Fosfor|Phosphorus|P; Fluor|Fluorine|F; Jodium|Iodine|I; Wolfraam|Tungsten|W|Wolfram;
      Borium|Boron|B|Boor; Vanadium|Vanadium|V; Yttrium|Yttrium|Y` },
    { id: 'gases', lvl: 3, nl: 'Noem een element dat bij kamertemperatuur een gas is', en: 'Name an element that is a gas at room temperature', a: `
      Zuurstof|Oxygen|O; Waterstof|Hydrogen|H; Stikstof|Nitrogen|N; Helium|Helium|He; Neon|Neon|Ne; Argon|Argon|Ar;
      Chloor|Chlorine|Cl; Fluor|Fluorine|F; Krypton|Krypton|Kr; Xenon|Xenon|Xe; Radon|Radon|Rn` },
    { id: 'planets', lvl: 1, nl: 'Noem een planeet of dwergplaneet in ons zonnestelsel', en: 'Name a planet or dwarf planet in our solar system', a: `
      Mars; Jupiter; Saturnus|Saturn; Aarde|Earth; Venus; Mercurius|Mercury; Neptunus|Neptune; Uranus; Pluto; Ceres; Eris;
      Makemake; Haumea` },
    { id: 'bones', lvl: 2, nl: 'Noem een bot in het menselijk lichaam', en: 'Name a bone in the human body', a: `
      Dijbeen|Femur|Thigh bone|Dijbot; Schedel|Skull|Cranium; Rib|Rib|Ribben|Ribs; Scheenbeen|Tibia|Shinbone|Shin bone;
      Sleutelbeen|Clavicle|Collarbone; Wervel|Vertebra|Wervels|Vertebrae; Bekken|Pelvis|Heupbeen|Hip bone; Knieschijf|Patella|Kneecap;
      Onderkaak|Mandible|Kaak|Jaw|Jawbone|Kaakbeen; Schouderblad|Scapula|Shoulder blade; Borstbeen|Sternum|Breastbone;
      Opperarmbeen|Humerus; Ellepijp|Ulna; Spaakbeen|Radius; Kuitbeen|Fibula; Stuitje|Coccyx|Tailbone|Staartbeen; Heiligbeen|Sacrum;
      Hielbeen|Calcaneus|Heel bone; Vingerkootje|Phalanx|Phalanges|Kootje|Vingerkootjes; Teenkootje|Toe bone|Teenkootjes;
      Stijgbeugel|Stapes|Stirrup; Hamer|Malleus|Hammer|Hamertje; Aambeeld|Incus|Anvil; Bovenkaak|Maxilla|Upper jaw;
      Jukbeen|Zygomatic bone|Cheekbone; Neusbeen|Nasal bone; Voorhoofdsbeen|Frontal bone; Achterhoofdsbeen|Occipital bone;
      Wandbeen|Parietal bone; Slaapbeen|Temporal bone; Wiggenbeen|Sphenoid|Sphenoid bone; Zeefbeen|Ethmoid|Ethmoid bone;
      Traanbeen|Lacrimal bone; Ploegschaarbeen|Vomer; Gehemeltebeen|Palatine bone; Tongbeen|Hyoid|Hyoid bone; Atlas; Draaier|Axis;
      Middenhandsbeentje|Metacarpal|Metacarpals|Middenhandsbeen; Middenvoetsbeentje|Metatarsal|Metatarsals|Middenvoetsbeen;
      Handwortelbeentje|Carpal|Carpals|Handwortelbeen; Voetwortelbeentje|Tarsal|Tarsals|Voetwortelbeen; Sprongbeen|Talus|Ankle bone;
      Scheepvormig been|Scaphoid|Navicular; Maanvormig been|Lunate; Driehoekig been|Triquetrum; Erwtvormig been|Pisiform;
      Groot veelhoekig been|Trapezium; Klein veelhoekig been|Trapezoid; Kopvormig been|Capitate; Haakvormig been|Hamate;
      Teerlingbeen|Cuboid; Wigvormig been|Cuneiform; Darmbeen|Ilium; Zitbeen|Ischium; Schaambeen|Pubis|Pubic bone;
      Onderste neusschelp|Inferior nasal concha; Sesambeentje|Sesamoid bone|Sesamoid` },
    { id: 'organs', lvl: 1, nl: 'Noem een orgaan in het menselijk lichaam', en: 'Name an organ of the human body', a: `
      Hart|Heart; Long|Lung|Longen|Lungs; Lever|Liver; Nier|Kidney|Nieren|Kidneys; Hersenen|Brain|Brein; Maag|Stomach; Huid|Skin;
      Darm|Intestine|Darmen|Intestines; Dunne darm|Small intestine; Dikke darm|Large intestine|Colon; Milt|Spleen;
      Alvleesklier|Pancreas; Galblaas|Gallbladder; Blaas|Bladder|Urineblaas; Schildklier|Thyroid|Thyroid gland; Baarmoeder|Uterus|Womb;
      Oog|Eye|Ogen|Eyes; Tong|Tongue; Slokdarm|Oesophagus|Esophagus; Blindedarm|Appendix; Eierstok|Ovary|Eierstokken|Ovaries;
      Testikel|Testicle|Testis|Zaadbal|Teelbal|Testikels; Prostaat|Prostate; Bijnier|Adrenal gland|Bijnieren; Luchtpijp|Trachea|Windpipe;
      Strottenhoofd|Larynx|Voice box; Oor|Ear|Oren|Ears; Neus|Nose; Ruggenmerg|Spinal cord; Thymus|Thymus|Zwezerik;
      Hypofyse|Pituitary gland|Pituitary; Pijnappelklier|Pineal gland; Endeldarm|Rectum; Twaalfvingerige darm|Duodenum;
      Bijschildklier|Parathyroid gland|Parathyroid; Lymfeklier|Lymph node|Lymfeklieren; Penis; Vagina; Eileider|Fallopian tube|Eileiders;
      Urineleider|Ureter; Plasbuis|Urethra; Bijbal|Epididymis; Zaadblaasje|Seminal vesicle; Placenta|Placenta|Moederkoek;
      Middenrif|Diaphragm; Mesenterium|Mesentery|Darmscheil; Interstitium; Hersenstam|Brainstem; Kleine hersenen|Cerebellum;
      Speekselklier|Salivary gland|Speekselklieren; Traanklier|Lacrimal gland; Amandel|Tonsil|Amandelen|Tonsils;
      Keel|Throat|Farynx|Pharynx; Mond|Mouth; Tand|Tooth|Tanden|Teeth; Borstklier|Mammary gland|Borst|Breast` },
    { id: 'dinosaurs', lvl: 2, nl: 'Noem een dinosaurus', en: 'Name a dinosaur', a: `
      Tyrannosaurus rex|Tyrannosaurus rex|T. rex|T-rex|Tyrannosaurus; Triceratops; Velociraptor|Velociraptor|Raptor; Stegosaurus;
      Brachiosaurus; Diplodocus; Brontosaurus; Spinosaurus; Ankylosaurus; Iguanodon; Parasaurolophus; Allosaurus; Apatosaurus;
      Pachycephalosaurus; Dilophosaurus; Carnotaurus; Gallimimus; Compsognathus; Archaeopteryx; Giganotosaurus; Argentinosaurus;
      Oviraptor; Deinonychus; Therizinosaurus; Baryonyx; Microraptor; Protoceratops; Styracosaurus; Corythosaurus; Edmontosaurus;
      Maiasaura; Hadrosaurus; Psittacosaurus; Coelophysis; Plateosaurus; Megalosaurus; Utahraptor; Troodon; Dracorex; Stygimoloch;
      Suchomimus; Ceratosaurus; Acrocanthosaurus; Albertosaurus; Daspletosaurus; Tarbosaurus; Yutyrannus; Dryptosaurus;
      Herrerasaurus; Eoraptor; Mamenchisaurus; Camarasaurus; Supersaurus; Sauroposeidon; Dreadnoughtus; Patagotitan; Amargasaurus;
      Nigersaurus; Saltasaurus; Titanosaurus; Kentrosaurus; Huayangosaurus; Scelidosaurus; Euoplocephalus; Nodosaurus; Edmontonia;
      Sauropelta; Minmi; Gastonia; Borealopelta; Lambeosaurus; Shantungosaurus; Saurolophus; Tsintaosaurus; Ouranosaurus;
      Muttaburrasaurus; Leaellynasaura; Hypsilophodon; Heterodontosaurus; Lesothosaurus; Thescelosaurus; Tenontosaurus;
      Pentaceratops; Chasmosaurus; Centrosaurus; Pachyrhinosaurus; Einiosaurus; Torosaurus; Zuniceratops; Leptoceratops;
      Microceratus; Stegoceras; Homalocephale; Prenocephale; Majungasaurus; Abelisaurus; Rugops; Masiakasaurus; Cryolophosaurus;
      Monolophosaurus; Guanlong; Sinosauropteryx; Caudipteryx; Citipati; Gigantoraptor; Avimimus; Ornithomimus; Struthiomimus;
      Dromiceiomimus; Deinocheirus; Mononykus; Alvarezsaurus; Sinornithosaurus; Anchiornis; Dakotaraptor; Austroraptor;
      Buitreraptor; Pyroraptor; Unenlagia; Saurornitholestes; Dromaeosaurus; Bambiraptor; Rahonavis; Concavenator; Neovenator;
      Carcharodontosaurus; Mapusaurus; Tyrannotitan; Sinraptor; Torvosaurus; Eustreptospondylus; Afrovenator; Irritator; Oxalaia;
      Ichthyovenator; Halszkaraptor; Kosmoceratops; Regaliceratops; Sinoceratops; Nasutoceratops; Zuul; Scutellosaurus;
      Tuojiangosaurus; Gigantspinosaurus; Wuerhosaurus; Miragaia; Dacentrurus; Lexovisaurus; Pelecanimimus; Nothronychus;
      Segnosaurus; Erlikosaurus; Falcarius; Beipiaosaurus; Alxasaurus; Kileskus; Proceratosaurus; Dilong; Raptorex; Qianzhousaurus;
      Alioramus; Nanuqsaurus; Lythronax; Teratophoneus; Bistahieversor; Gorgosaurus; Appalachiosaurus; Eotyrannus; Juratyrant;
      Stokesosaurus; Coelurus; Ornitholestes; Tanycolagreus; Juravenator; Scipionyx; Atlasaurus; Vulcanodon;
      Massospondylus; Melanorosaurus; Riojasaurus; Lufengosaurus; Anchisaurus; Thecodontosaurus; Europasaurus; Ampelosaurus;
      Rapetosaurus; Isisaurus; Puertasaurus; Futalognkosaurus; Spinophorosaurus; Bajadasaurus; Brachytrachelopan` },
    { id: 'si-units', lvl: 3, nl: 'Noem een SI-eenheid (basiseenheid of afgeleide eenheid)', en: 'Name an SI unit (base or derived)', a: `
      Meter|Metre|Meter|m; Kilogram|Kilogram|kg; Seconde|Second|s; Ampère|Ampere|A; Kelvin|Kelvin|K; Newton|Newton|N; Joule|Joule|J;
      Watt|Watt|W; Volt|Volt|V; Mol|Mole|Mol; Candela|Candela|cd; Pascal|Pascal|Pa; Hertz|Hertz|Hz; Ohm; Coulomb|Coulomb|C;
      Graad Celsius|Degree Celsius|Celsius; Tesla|Tesla|T; Farad|Farad|F; Weber|Weber|Wb; Henry|Henry|H; Siemens;
      Lumen|Lumen|lm; Lux|Lux|lx; Becquerel|Becquerel|Bq; Gray|Gray|Gy; Sievert|Sievert|Sv; Radiaal|Radian|rad; Steradiaal|Steradian|sr;
      Katal|Katal|kat` },
    { id: 'zodiac', lvl: 1, nl: 'Noem een sterrenbeeld van de dierenriem', en: 'Name a sign of the zodiac', a: `
      Leeuw|Leo; Schorpioen|Scorpio|Scorpion; Ram|Aries; Stier|Taurus; Tweelingen|Gemini|Tweeling; Kreeft|Cancer; Maagd|Virgo;
      Weegschaal|Libra; Boogschutter|Sagittarius; Steenbok|Capricorn|Capricornus; Waterman|Aquarius; Vissen|Pisces|Vis;
      Slangendrager|Ophiuchus` },
    { id: 'constellations', lvl: 3, nl: 'Noem een sterrenbeeld (één van de 88 officiële)', en: 'Name a constellation (one of the official 88)', a: `
      Grote Beer|Ursa Major|Great Bear|Big Dipper|Steelpan; Orion; Kleine Beer|Ursa Minor|Little Bear|Little Dipper; Cassiopeia;
      Zuiderkruis|Crux|Southern Cross; Leeuw|Leo; Schorpioen|Scorpius|Scorpio; Tweelingen|Gemini; Stier|Taurus; Ram|Aries;
      Kreeft|Cancer; Maagd|Virgo; Weegschaal|Libra; Boogschutter|Sagittarius; Steenbok|Capricornus|Capricorn; Waterman|Aquarius;
      Vissen|Pisces; Zwaan|Cygnus|Swan; Andromeda; Pegasus; Perseus; Draak|Draco|Dragon; Lier|Lyra|Lyre; Arend|Aquila|Eagle;
      Grote Hond|Canis Major|Great Dog; Kleine Hond|Canis Minor|Little Dog; Hercules; Ossenhoeder|Boötes|Bootes|Herdsman;
      Voerman|Auriga|Charioteer; Cepheus|Cepheus|Kepheus; Slangendrager|Ophiuchus|Serpent Bearer; Slang|Serpens|Serpent;
      Noorderkroon|Corona Borealis|Northern Crown; Zuiderkroon|Corona Australis|Southern Crown; Centaur|Centaurus;
      Waterslang|Hydra; Eenhoorn|Monoceros|Unicorn; Haas|Lepus|Hare; Duif|Columba|Dove; Walvis|Cetus|Whale; Eridanus;
      Dolfijn|Delphinus|Dolphin; Pijl|Sagitta|Arrow; Vosje|Vulpecula|Fox; Veulen|Equuleus|Klein Paard; Hagedis|Lacerta|Lizard;
      Driehoek|Triangulum|Triangle; Giraffe|Camelopardalis; Lynx; Kleine Leeuw|Leo Minor; Jachthonden|Canes Venatici|Hunting Dogs;
      Hoofdhaar|Coma Berenices|Haar van Berenice|Berenice's Hair; Beker|Crater|Cup; Raaf|Corvus|Crow; Wolf|Lupus; Altaar|Ara|Altar;
      Zuiderdriehoek|Triangulum Australe|Southern Triangle; Schild|Scutum|Shield; Zuidervis|Piscis Austrinus|Southern Fish;
      Kraanvogel|Grus|Crane; Feniks|Phoenix; Toekan|Tucana|Toucan; Kleine Waterslang|Hydrus; Goudvis|Dorado|Swordfish;
      Vliegende Vis|Volans|Flying Fish; Kameleon|Chamaeleon|Chameleon; Paradijsvogel|Apus|Bird of Paradise; Pauw|Pavo|Peacock;
      Indiaan|Indus; Octant|Octans; Tafelberg|Mensa|Table Mountain; Net|Reticulum; Schilder|Pictor|Painter|Schildersezel;
      Kiel|Carina|Keel; Zeilen|Vela|Sails|Zeil; Achtersteven|Puppis|Stern; Kompas|Pyxis|Compass; Luchtpomp|Antlia|Air Pump;
      Sextant|Sextans; Vlieg|Musca|Fly; Passer|Circinus|Compasses; Winkelhaak|Norma; Telescoop|Telescopium|Telescope;
      Microscoop|Microscopium|Microscope; Beeldhouwer|Sculptor; Oven|Fornax|Furnace; Graveerstift|Caelum|Chisel;
      Slingeruurwerk|Horologium|Clock` },
    { id: 'programming', lvl: 2, nl: 'Noem een programmeertaal', en: 'Name a programming language', a: `
      Python; JavaScript|JavaScript|JS; Java; C++|C++|Cpp; C; C#|C#|C sharp; PHP; TypeScript|TypeScript|TS; Swift; Ruby; Go|Go|Golang;
      Rust; Kotlin; SQL; R; Scratch; MATLAB|MATLAB|Matlab; Visual Basic|Visual Basic|VB|VB.NET|VBA; Assembly|Assembly|Assembler|Assembleertaal;
      Perl; Dart; Scala; Lua; Objective-C|Objective-C|ObjC; Haskell; Pascal; Fortran; COBOL|COBOL|Cobol; Julia; Bash|Bash|Shell;
      PowerShell; Delphi; Lisp; Prolog; Elixir; Erlang; Clojure; F#|F#|F sharp; Groovy; Solidity; Zig; Ada; Scheme; Smalltalk;
      OCaml; BASIC|BASIC|Basic; Logo; VHDL; Verilog; Racket; Crystal; Nim; Elm; ABAP; SAS; Apex; Hack; D|D|Dlang; Mojo; Gleam;
      Carbon; Haxe; APL; Forth; Simula; ALGOL|ALGOL|Algol; PL/I|PL/I|PL1; Modula-2; Oberon; Eiffel; Tcl; Awk|AWK; CoffeeScript;
      PureScript; Reason|ReasonML; Idris; Agda; Coq|Rocq; Lean; Raku|Perl 6; Wolfram Language|Wolfram Language|Mathematica|Wolfram;
      LabVIEW; Brainfuck; Whitespace; LOLCODE; Befunge; Malbolge; Q#|Q#|Q sharp; GDScript; Processing; Arduino; CUDA; OpenCL;
      GLSL; HLSL; Pony; Odin; Vala; Hare; Fortress; Chapel; Dylan; Rexx; Lustre; Ballerina; Red; Rebol` },
    { id: 'clouds', lvl: 3, nl: 'Noem een soort wolk', en: 'Name a type of cloud', a: `
      Cumulus|Cumulus|Stapelwolk; Cirrus|Cirrus|Vederwolk|Veerwolk; Stratus|Stratus|Laagwolk; Cumulonimbus|Cumulonimbus|Onweerswolk|Buienwolk|Thundercloud;
      Nimbostratus|Nimbostratus|Regenwolk|Rain cloud; Altocumulus|Altocumulus|Schapenwolkjes|Schaapjeswolk; Stratocumulus; Altostratus;
      Cirrostratus; Cirrocumulus; Lenticularis|Lenticular cloud|Lenswolk|Lensvormige wolk; Mammatus|Mammatus|Mammatuswolken;
      Mist|Fog|Nevel; Kelvin-Helmholtzwolk|Kelvin-Helmholtz cloud|Kelvin-Helmholtz; Lichtende nachtwolken|Noctilucent clouds|Noctilucent;
      Parelmoerwolken|Nacreous clouds|Parelmoerwolk|Polar stratospheric clouds; Plankwolk|Shelf cloud|Boogwolk|Arcus;
      Muurwolk|Wall cloud; Rolwolk|Roll cloud|Volutus; Pileus|Pileus|Kapwolk|Cap cloud; Vlagwolk|Banner cloud|Banierwolk;
      Condensstreep|Contrail|Vliegtuigstreep|Condensatiestreep; Castellanus; Floccus; Fractus; Humilis; Mediocris;
      Congestus|Cumulus congestus; Calvus; Capillatus; Incus|Incus|Aambeeldwolk|Anvil cloud; Velum; Virga|Virga|Valstrepen;
      Asperitas|Asperitas|Undulatus asperatus; Fluctus; Cavum|Fallstreak hole|Gatwolk|Hole punch cloud;
      Pyrocumulus|Pyrocumulus|Vuurwolk|Flammagenitus; Homogenitus; Cauda|Tail cloud; Murus; Tuba|Tuba|Trechterwolk|Funnel cloud;
      Uncinus; Spissatus; Nebulosus; Undulatus; Radiatus; Lacunosus; Duplicatus; Translucidus; Opacus; Perlucidus;
      Praecipitatio; Silvagenitus; Orografische wolk|Orographic cloud; Föhnmuur|Foehn wall|Föhnwolk` },
    { id: 'primes', lvl: 2, nl: 'Noem een priemgetal kleiner dan 100', en: 'Name a prime number below 100', a: `
      7|7|zeven|seven; 3|3|drie|three; 5|5|vijf|five; 2|2|twee|two; 11|11|elf|eleven; 13|13|dertien|thirteen;
      17|17|zeventien|seventeen; 19|19|negentien|nineteen; 23; 29; 31; 37; 41; 43; 47; 53; 59; 61; 67; 71; 73; 79; 83; 89; 97` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
