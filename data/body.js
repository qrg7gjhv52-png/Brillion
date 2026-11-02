/* ─────────────────────────────────────────────────────────────
   Brillion · wetenschap & het lichaam (nieuwe vragen)
   Elk antwoord: NL|EN|andere namen. Volgorde = van vaak genoemd naar
   zeldzaam: de eerste 20% is Gewoon, de laatste 20% 1 in a Brillion.
   lvl = moeilijkheid (1 makkelijk · 2 gemiddeld · 3 moeilijk).
   ───────────────────────────────────────────────────────────── */
'use strict';
(function (global) {
  const B = global.Brillion;
  B.addQuestions('science', [
    /* ── Het menselijk lichaam ── */
    { id: 'senses', lvl: 1, nl: 'Noem een zintuig', en: 'Name a sense', a: `
      Zicht|Sight|Zien|Gezichtsvermogen|Ogen|Vision; Gehoor|Hearing|Horen|Oren; Smaak|Taste|Proeven; Reuk|Smell|Ruiken|Neus;
      Tast|Touch|Voelen|Tastzin|Gevoel; Evenwicht|Balance|Evenwichtszin|Evenwichtsorgaan; Temperatuurzin|Temperature|Thermoceptie|Warmte en koude;
      Pijn|Pain|Pijnzin|Nociceptie; Proprioceptie|Proprioception|Lichaamsbesef|Houdingszin; Interoceptie|Interoception` },

    { id: 'teeth', lvl: 1, nl: 'Noem een soort tand of kies', en: 'Name a type of tooth', a: `
      Snijtand|Incisor|Snijtanden; Hoektand|Canine|Oogtand|Hoektanden; Kies|Molar|Grote kies|Molaar|Kiezen; Verstandskies|Wisdom tooth|Verstandskiezen;
      Melktand|Milk tooth|Baby tooth|Melktanden; Kleine kies|Premolar|Premolaar|Valse kies` },

    { id: 'organ-systems', lvl: 2, nl: 'Noem een stelsel (orgaansysteem) van het menselijk lichaam', en: 'Name an organ system of the human body', a: `
      Spijsverteringsstelsel|Digestive system|Spijsvertering|Spijsverteringskanaal; Bloedsomloop|Circulatory system|Hart- en vaatstelsel|Bloedvatenstelsel|Bloedsomloopstelsel;
      Zenuwstelsel|Nervous system; Ademhalingsstelsel|Respiratory system|Ademhaling; Skelet|Skeletal system|Beenderstelsel|Geraamte|Skeletstelsel;
      Spierstelsel|Muscular system|Spieren; Afweersysteem|Immune system|Immuunsysteem|Afweer; Hormoonstelsel|Endocrine system|Endocrien stelsel|Hormonen;
      Voortplantingsstelsel|Reproductive system|Voortplanting; Uitscheidingsstelsel|Excretory system|Urinewegstelsel|Urinary system|Nieren en blaas;
      Huid|Integumentary system|Huidstelsel|Bekleding; Lymfestelsel|Lymphatic system|Lymfatisch stelsel` },

    { id: 'digestion', lvl: 1, nl: 'Noem een orgaan of deel van het spijsverteringsstelsel', en: 'Name an organ or part of the digestive system', a: `
      Maag|Stomach; Dunne darm|Small intestine; Dikke darm|Large intestine|Colon; Mond|Mouth|Mondholte; Slokdarm|Oesophagus|Esophagus;
      Lever|Liver; Endeldarm|Rectum; Anus|Anus|Aars; Alvleesklier|Pancreas; Galblaas|Gallbladder; Tanden|Teeth|Tand; Tong|Tongue;
      Speekselklier|Salivary gland|Speekselklieren; Blindedarm|Appendix|Wormvormig aanhangsel; Twaalfvingerige darm|Duodenum;
      Keelholte|Pharynx|Keel|Throat; Nuchtere darm|Jejunum; Kronkeldarm|Ileum; Caecum|Caecum|Cecum` },

    { id: 'eye', lvl: 1, nl: 'Noem een deel van het oog', en: 'Name a part of the eye', a: `
      Pupil; Iris|Iris|Regenboogvlies; Lens|Lens|Ooglens; Netvlies|Retina; Hoornvlies|Cornea; Oogzenuw|Optic nerve; Ooglid|Eyelid|Oogleden;
      Wimpers|Eyelashes|Wimper|Oogharen; Oogwit|Sclera|Harde oogrok; Glasvocht|Vitreous humour|Glasachtig lichaam; Traanklier|Lacrimal gland;
      Kegeltjes|Cones|Kegels; Staafjes|Rods; Gele vlek|Macula|Macula lutea; Blinde vlek|Blind spot; Vaatvlies|Choroid;
      Straalvormig lichaam|Ciliary body|Corpus ciliare; Kamerwater|Aqueous humour; Bindvlies|Conjunctiva; Fovea|Fovea|Centrale groeve;
      Oogspieren|Eye muscles|Oogspier; Voorste oogkamer|Anterior chamber; Traankanaal|Tear duct` },

    { id: 'heart', lvl: 3, nl: 'Noem een deel van het hart', en: 'Name a part of the heart', a: `
      Linkerkamer|Left ventricle; Rechterkamer|Right ventricle; Linkerboezem|Left atrium|Linkervoorkamer; Rechterboezem|Right atrium|Rechtervoorkamer;
      Hartklep|Heart valve|Kleppen|Hartkleppen; Aorta; Hartspier|Myocardium|Myocard; Mitralisklep|Mitral valve|Tweeslippige klep|Bicuspidalisklep;
      Tricuspidalisklep|Tricuspid valve|Drieslippige klep; Aortaklep|Aortic valve; Pulmonalisklep|Pulmonary valve|Longslagaderklep;
      Kransslagader|Coronary artery|Kransslagaders; Longslagader|Pulmonary artery; Longader|Pulmonary vein|Longaders;
      Holle ader|Vena cava|Bovenste holle ader|Onderste holle ader; Tussenschot|Septum|Hartseptum; Sinusknoop|Sinoatrial node|SA-knoop;
      AV-knoop|Atrioventricular node|Atrioventriculaire knoop; Hartzakje|Pericardium; Bundel van His|Bundle of His; Purkinjevezels|Purkinje fibres|Purkinje fibers;
      Endocard|Endocardium; Peesdraden|Chordae tendineae; Papillairspieren|Papillary muscles` },

    { id: 'brain', lvl: 3, nl: 'Noem een deel van de hersenen', en: 'Name a part of the brain', a: `
      Grote hersenen|Cerebrum; Kleine hersenen|Cerebellum; Hersenstam|Brainstem|Brain stem; Hypothalamus; Hersenschors|Cerebral cortex|Cortex|Schors;
      Hippocampus; Hypofyse|Pituitary gland|Pituitary|Hersenaanhangsel; Amygdala|Amygdala|Amandelkern; Thalamus; Hersenbalk|Corpus callosum;
      Voorhoofdskwab|Frontal lobe|Frontale kwab; Slaapkwab|Temporal lobe|Temporale kwab; Wandbeenkwab|Parietal lobe|Pariëtale kwab|Parietale kwab;
      Achterhoofdskwab|Occipital lobe|Occipitale kwab; Prefrontale cortex|Prefrontal cortex; Verlengde merg|Medulla oblongata|Medulla;
      Pons|Pons|Brug van Varol; Middenhersenen|Midbrain|Mesencephalon; Pijnappelklier|Pineal gland|Epifyse;
      Basale ganglia|Basal ganglia|Basale kernen; Limbisch systeem|Limbic system; Hersenkamers|Ventricles|Ventrikels;
      Hersenvliezen|Meninges|Hersenvlies; Gebied van Broca|Broca's area|Broca; Gebied van Wernicke|Wernicke's area|Wernicke;
      Insula|Insula|Eiland van Reil; Striatum; Substantia nigra; Motorische schors|Motor cortex; Visuele schors|Visual cortex;
      Grijze stof|Grey matter|Gray matter; Witte stof|White matter; Neuronen|Neurons|Zenuwcellen` },

    { id: 'glands', lvl: 3, nl: 'Noem een klier in het menselijk lichaam', en: 'Name a gland in the human body', a: `
      Schildklier|Thyroid|Thyroid gland; Zweetklier|Sweat gland|Zweetklieren; Speekselklier|Salivary gland|Speekselklieren; Alvleesklier|Pancreas;
      Hypofyse|Pituitary gland|Pituitary|Hersenaanhangsel; Bijnier|Adrenal gland|Bijnieren; Traanklier|Lacrimal gland|Traanklieren;
      Lymfeklier|Lymph node|Lymfeklieren|Lymfeknoop; Prostaat|Prostate; Teelbal|Testis|Testicle|Zaadbal|Testikel; Eierstok|Ovary|Eierstokken;
      Lever|Liver; Talgklier|Sebaceous gland|Talgklieren; Melkklier|Mammary gland|Borstklier; Thymus|Thymus|Zwezerik;
      Pijnappelklier|Pineal gland|Epifyse; Bijschildklier|Parathyroid gland|Bijschildklieren; Hypothalamus;
      Klier van Bartholin|Bartholin's gland; Klier van Cowper|Bulbourethral gland|Cowper's gland; Maagklieren|Gastric glands` },

    { id: 'blood', lvl: 2, nl: 'Noem iets waaruit bloed bestaat', en: 'Name something blood is made of', a: `
      Rode bloedcellen|Red blood cells|Erytrocyten|Erythrocytes|Rode bloedlichaampjes; Witte bloedcellen|White blood cells|Leukocyten|Leukocytes|Witte bloedlichaampjes;
      Bloedplaatjes|Platelets|Trombocyten|Thrombocytes; Bloedplasma|Plasma|Blood plasma; Water; Hemoglobine|Haemoglobin|Hemoglobin;
      Antistoffen|Antibodies|Antilichamen; Lymfocyten|Lymphocytes; Zuurstof|Oxygen; Suiker|Glucose|Bloedsuiker; Eiwitten|Proteins|Albumine|Albumin;
      Fibrinogeen|Fibrinogen|Stollingsfactoren|Clotting factors; Neutrofielen|Neutrophils; Monocyten|Monocytes; Hormonen|Hormones;
      Zouten|Salts|Elektrolyten|Electrolytes; IJzer|Iron; Eosinofielen|Eosinophils; Basofielen|Basophils; Serum` },

    { id: 'hormones', lvl: 2, nl: 'Noem een hormoon', en: 'Name a hormone', a: `
      Insuline|Insulin; Adrenaline|Adrenaline|Epinefrine|Epinephrine; Testosteron|Testosterone; Oestrogeen|Oestrogen|Estrogen|Oestradiol|Estradiol;
      Melatonine|Melatonin; Cortisol; Dopamine; Serotonine|Serotonin; Groeihormoon|Growth hormone|HGH|Somatotropine; Oxytocine|Oxytocin;
      Endorfine|Endorphin|Endorfines; Progesteron|Progesterone; Thyroxine|Thyroxine|T4|Schildklierhormoon; Glucagon; Noradrenaline|Noradrenaline|Norepinefrine|Norepinephrine;
      Leptine|Leptin; Ghreline|Ghrelin|Hongerhormoon; Aldosteron|Aldosterone; EPO|Erytropoëtine|Erythropoietin|Erytropoietine;
      Prolactine|Prolactin; FSH|Follikelstimulerend hormoon|Follicle-stimulating hormone; LH|Luteïniserend hormoon|Luteinizing hormone;
      Vasopressine|Vasopressin|ADH|Antidiuretisch hormoon; hCG|Zwangerschapshormoon; Calcitonine|Calcitonin; Parathormoon|Parathyroid hormone|PTH;
      Gastrine|Gastrin; Secretine|Secretin; Cholecystokinine|Cholecystokinin|CCK; Renine|Renin; Trijoodthyronine|Triiodothyronine|T3;
      TSH|Thyroïdstimulerend hormoon; ACTH|Adrenocorticotroop hormoon; Somatostatine|Somatostatin; Inhibine|Inhibin; Relaxine|Relaxin` },

    { id: 'virus-diseases', lvl: 1, nl: 'Noem een ziekte die door een virus komt', en: 'Name a disease caused by a virus', a: `
      Griep|Flu|Influenza; COVID-19|COVID-19|Covid|Corona|Coronavirus|COVID; Verkoudheid|Common cold|Verkoudheid; Mazelen|Measles;
      Waterpokken|Chickenpox|Varicella; Aids|AIDS|HIV|Hiv; Bof|Mumps; Polio|Polio|Kinderverlamming; Rodehond|Rubella|German measles;
      Ebola; Hondsdolheid|Rabies; Hepatitis|Hepatitis|Hepatitis A|Hepatitis B|Hepatitis C|Leverontsteking; Herpes|Herpes|Koortslip|Cold sore;
      Gordelroos|Shingles|Herpes zoster; Pokken|Smallpox|Variola; Dengue|Dengue|Knokkelkoorts; Gele koorts|Yellow fever; Zika;
      Ziekte van Pfeiffer|Mononucleosis|Klierkoorts|Mono|Kissing disease; Wratten|Warts|Wrat; HPV|HPV|Humaan papillomavirus;
      RSV; Buikgriep|Stomach flu|Norovirus|Rotavirus; SARS; MERS; Vogelgriep|Bird flu|Avian influenza; Mexicaanse griep|Swine flu|Varkensgriep;
      Apenpokken|Mpox|Monkeypox; Westnijlkoorts|West Nile fever|Westnijlvirus; Chikungunya; Lassakoorts|Lassa fever; Marburgkoorts|Marburg virus disease|Marburg;
      Vijfde ziekte|Fifth disease; Zesde ziekte|Roseola; Hand-, voet- en mondziekte|Hand, foot and mouth disease;
      Tekenencefalitis|Tick-borne encephalitis|TBE; Japanse encefalitis|Japanese encephalitis; Hantavirus|Hantavirus infection` },

    { id: 'bacteria-diseases', lvl: 2, nl: 'Noem een ziekte die door een bacterie komt', en: 'Name a disease caused by bacteria', a: `
      Tuberculose|Tuberculosis|TBC|TB; Pest|Plague|Zwarte Dood|Black Death|Builenpest; Cholera; Salmonella|Salmonella|Salmonellose|Salmonellosis;
      Tetanus|Tetanus|Klem; Kinkhoest|Whooping cough|Pertussis; Syfilis|Syphilis; Lepra|Leprosy|Melaatsheid; Ziekte van Lyme|Lyme disease|Lyme;
      Gonorroe|Gonorrhoea|Gonorrhea|Druiper; Chlamydia; Difterie|Diphtheria; Tyfus|Typhoid|Buiktyfus|Typhoid fever; Roodvonk|Scarlet fever;
      Longontsteking|Pneumonia; Legionella|Legionnaires' disease|Veteranenziekte|Legionellose; Hersenvliesontsteking|Meningitis;
      Blaasontsteking|Cystitis|Urineweginfectie|Urinary tract infection; Listeria|Listeria|Listeriose; Botulisme|Botulism;
      Miltvuur|Anthrax; Keelontsteking|Strep throat|Angina; Krentenbaard|Impetigo; Vlektyfus|Typhus|Epidemische vlektyfus;
      Q-koorts|Q fever; Leptospirose|Leptospirosis|Ziekte van Weil; Brucellose|Brucellosis; Tularemie|Tularemia|Hazenpest;
      Kattenkrabziekte|Cat-scratch disease; MRSA|MRSA-infectie; Maagzweer|Stomach ulcer|Helicobacter; Tandbederf|Tooth decay|Cariës|Caries` },

    { id: 'medical-specialties', lvl: 2, nl: 'Noem een medisch specialisme (een vak van artsen)', en: 'Name a medical specialty', a: `
      Cardiologie|Cardiology; Chirurgie|Surgery; Kindergeneeskunde|Pediatrics|Paediatrics|Pediatrie; Neurologie|Neurology; Psychiatrie|Psychiatry;
      Dermatologie|Dermatology; Oncologie|Oncology; Gynaecologie|Gynaecology|Gynecology; Orthopedie|Orthopaedics|Orthopedics;
      Radiologie|Radiology; Oogheelkunde|Ophthalmology|Oftalmologie; Neus-keel-oorheelkunde|ENT|Otolaryngology|NKO|KNO|Keel-, neus- en oorheelkunde;
      Huisartsgeneeskunde|General practice|Huisarts|Family medicine; Anesthesiologie|Anaesthesiology|Anesthesiology|Anesthesie; Urologie|Urology;
      Geriatrie|Geriatrics|Ouderengeneeskunde; Spoedgeneeskunde|Emergency medicine|Urgentiegeneeskunde; Inwendige geneeskunde|Internal medicine|Interne geneeskunde;
      Endocrinologie|Endocrinology; Gastro-enterologie|Gastroenterology|Gastro-enterologie|Maag-darm-leverziekten; Longziekten|Pulmonology|Pneumologie;
      Nefrologie|Nephrology; Reumatologie|Rheumatology; Hematologie|Haematology|Hematology; Neurochirurgie|Neurosurgery; Plastische chirurgie|Plastic surgery;
      Verloskunde|Obstetrics; Tandheelkunde|Dentistry; Sportgeneeskunde|Sports medicine; Pathologie|Pathology; Infectiologie|Infectious diseases;
      Immunologie|Immunology; Allergologie|Allergology; Nucleaire geneeskunde|Nuclear medicine; Neonatologie|Neonatology;
      Fysische geneeskunde|Physical medicine and rehabilitation|Revalidatiegeneeskunde; Forensische geneeskunde|Forensic medicine|Gerechtelijke geneeskunde;
      Arbeidsgeneeskunde|Occupational medicine; Klinische biologie|Clinical biology; Klinische genetica|Clinical genetics|Genetica; Tropische geneeskunde|Tropical medicine;
      Kaakchirurgie|Oral and maxillofacial surgery|Mond-, kaak- en aangezichtschirurgie; Vaatchirurgie|Vascular surgery; Thoraxchirurgie|Thoracic surgery;
      Andrologie|Andrology; Palliatieve geneeskunde|Palliative medicine` },

    { id: 'vitamins', lvl: 1, nl: 'Noem een vitamine', en: 'Name a vitamin', a: `
      Vitamine C|Vitamin C|C|Ascorbinezuur|Ascorbic acid; Vitamine D|Vitamin D|D|D3|Vitamine D3|Calciferol|Cholecalciferol; Vitamine A|Vitamin A|A|Retinol;
      Vitamine B12|Vitamin B12|B12|Cobalamine|Cobalamin; Vitamine B|Vitamin B|B|B-vitamines|B-complex; Vitamine E|Vitamin E|E|Tocoferol|Tocopherol;
      Vitamine K|Vitamin K|K|Fyllochinon|Phylloquinone; Vitamine B6|Vitamin B6|B6|Pyridoxine; Vitamine B1|Vitamin B1|B1|Thiamine;
      Vitamine B2|Vitamin B2|B2|Riboflavine|Riboflavin; Vitamine B11|Vitamin B9|B11|B9|Vitamine B9|Foliumzuur|Folic acid|Folaat|Folate;
      Vitamine B3|Vitamin B3|B3|Niacine|Niacin|Vitamine PP; Vitamine B5|Vitamin B5|B5|Pantotheenzuur|Pantothenic acid;
      Vitamine B8|Vitamin B7|B8|B7|Vitamine B7|Biotine|Biotin|Vitamine H` },

    /* ── Natuurkunde, scheikunde en de aarde ── */
    { id: 'rainbow', lvl: 1, nl: 'Noem een kleur van de regenboog', en: 'Name a colour of the rainbow', a: `
      Rood|Red; Blauw|Blue; Geel|Yellow; Groen|Green; Oranje|Orange; Paars|Violet|Violet|Purple; Indigo` },

    { id: 'states-of-matter', lvl: 1, nl: 'Noem een aggregatietoestand (vorm waarin stof voorkomt)', en: 'Name a state of matter', a: `
      Vast|Solid|Vaste stof; Vloeibaar|Liquid|Vloeistof; Gas|Gas|Gasvormig; Plasma; Bose-Einsteincondensaat|Bose-Einstein condensate|BEC|Bose-Einstein-condensaat;
      Supervloeibaar|Superfluid|Supervloeistof; Fermionisch condensaat|Fermionic condensate` },

    { id: 'energy-sources', lvl: 1, nl: 'Noem een energiebron', en: 'Name a source of energy', a: `
      Zonne-energie|Solar energy|Zon|Zonnepanelen|Zonnekracht|Sun; Windenergie|Wind energy|Wind|Windmolens|Windkracht; Kernenergie|Nuclear energy|Kernkracht|Kerncentrale|Kernsplijting|Nuclear;
      Waterkracht|Hydropower|Waterkrachtcentrale|Hydro-energie|Water; Steenkool|Coal|Kolen; Aardgas|Natural gas|Gas; Aardolie|Oil|Olie|Petroleum|Stookolie;
      Biomassa|Biomass|Hout|Wood; Aardwarmte|Geothermal energy|Geothermie|Geothermische energie; Getijdenenergie|Tidal energy|Getijden|Getijdencentrale;
      Waterstof|Hydrogen; Golfenergie|Wave energy|Golven; Biogas; Biobrandstof|Biofuel|Bio-ethanol|Biodiesel; Kernfusie|Nuclear fusion|Fusie|Fusion;
      Turf|Peat; Osmose-energie|Osmotic power|Blauwe energie|Blue energy` },

    { id: 'time-units', lvl: 1, nl: 'Noem een eenheid van tijd', en: 'Name a unit of time', a: `
      Seconde|Second|Seconden; Minuut|Minute|Minuten; Uur|Hour|Uren; Dag|Day|Dagen; Week|Week|Weken; Jaar|Year|Jaren; Maand|Month|Maanden;
      Eeuw|Century|Eeuwen; Decennium|Decade|Decennia; Millennium|Millennium|Millennia|Millenium; Milliseconde|Millisecond; Kwartier|Quarter of an hour;
      Microseconde|Microsecond; Nanoseconde|Nanosecond; Etmaal|Etmaal|24 uur; Kwartaal|Quarter|Trimester; Semester; Schrikkeljaar|Leap year;
      Lustrum; Picoseconde|Picosecond; Femtoseconde|Femtosecond; Planck-tijd|Planck time|Plancktijd; Veertiendaagse|Fortnight|Twee weken` },

    { id: 'length-units', lvl: 1, nl: 'Noem een eenheid van lengte of afstand', en: 'Name a unit of length or distance', a: `
      Meter|Metre|Meter; Kilometer|Kilometre|Kilometer|km; Centimeter|Centimetre|Centimeter|cm; Millimeter|Millimetre|Millimeter|mm;
      Mijl|Mile|Mijlen; Inch|Inch|Duim; Voet|Foot|Feet; Decimeter|Decimetre|Decimeter|dm; Yard; Lichtjaar|Light-year|Light year|Lichtjaren;
      Nanometer|Nanometre|Nanometer|nm; Micrometer|Micrometre|Micron|Micrometer; Zeemijl|Nautical mile; Parsec;
      Astronomische eenheid|Astronomical unit|AE|AU; Hectometer|Hectometre|Hectometer; Decameter|Decametre|Decameter; Ångström|Angstrom|Ångström;
      Picometer|Picometre|Picometer; Femtometer|Femtometre|Fermi; El|Ell|Ellen; Roede|Rod; Furlong; Vadem|Fathom; Kabellengte|Cable length|Cable;
      Span|Span|Spanne; Planck-lengte|Planck length|Plancklengte; Megaparsec; Kilolichtjaar` },

    { id: 'mass-units', lvl: 1, nl: 'Noem een eenheid van massa of gewicht', en: 'Name a unit of mass or weight', a: `
      Kilogram|Kilogram|Kilo|kg; Gram|Gram|g; Ton|Tonne|Ton|Metric ton; Milligram|Milligram|mg; Pond|Pound|lb|Pound (lb); Ons|Ons (100 g)|Hectogram;
      Ounce|Ounce|oz; Karaat|Carat; Microgram|Microgram|mcg; Stone; Decagram|Decagram|dag; Centigram|Centigram|cg; Decigram|Decigram|dg;
      Dalton|Dalton|Atomaire massa-eenheid|Atomic mass unit|amu|u; Grain; Zonnemassa|Solar mass; Quintal|Centenaar|Centner|Kwintaal; Megaton|Megatonne|Kiloton` },

    { id: 'energy-units', lvl: 3, nl: 'Noem een eenheid van energie (let op: watt is vermogen, geen energie)', en: 'Name a unit of energy (careful: the watt is power, not energy)', a: `
      Joule|Joule|J; Calorie|Calorie|Kilocalorie|kcal|Calorieën|cal; Kilowattuur|Kilowatt-hour|kWh|Kilowatt hour; Kilojoule|Kilojoule|kJ;
      Elektronvolt|Electronvolt|Electron volt|eV; Megajoule|MJ; Wattuur|Watt-hour|Wh; Wattseconde|Watt-second; BTU|British thermal unit;
      Erg; Gigajoule|GJ; Megawattuur|Megawatt-hour|MWh; Therm; Ton TNT|Ton of TNT|Kiloton TNT|Megaton TNT|TNT-equivalent; Voetpond|Foot-pound;
      Hartree; Rydberg; Toe|Ton olie-equivalent|Tonne of oil equivalent` },

    { id: 'units-named-after-scientists', lvl: 3, nl: 'Noem een wetenschapper naar wie een meeteenheid genoemd is (bv. Newton)', en: 'Name a scientist after whom a unit is named (e.g. Newton)', a: `
      Isaac Newton|Isaac Newton|Newton; James Watt|James Watt|Watt; Anders Celsius|Anders Celsius|Celsius; Alessandro Volta|Alessandro Volta|Volta;
      Lord Kelvin|Lord Kelvin|Kelvin|William Thomson; André-Marie Ampère|André-Marie Ampère|Ampère|Ampere|Andre-Marie Ampere;
      James Prescott Joule|James Prescott Joule|Joule|James Joule; Georg Ohm|Georg Ohm|Ohm|Georg Simon Ohm; Blaise Pascal|Blaise Pascal|Pascal;
      Heinrich Hertz|Heinrich Hertz|Hertz; Nikola Tesla|Nikola Tesla|Tesla; Daniel Gabriel Fahrenheit|Daniel Gabriel Fahrenheit|Fahrenheit;
      Charles-Augustin de Coulomb|Charles-Augustin de Coulomb|Coulomb; Michael Faraday|Michael Faraday|Faraday; Marie Curie|Marie Curie|Curie|Pierre Curie;
      Wilhelm Röntgen|Wilhelm Röntgen|Röntgen|Roentgen|Rontgen; Henri Becquerel|Henri Becquerel|Becquerel; Rolf Sievert|Rolf Sievert|Sievert;
      Louis Harold Gray|Louis Harold Gray|Gray; Carl Friedrich Gauss|Carl Friedrich Gauss|Gauss|Gauß; Wilhelm Weber|Wilhelm Weber|Weber;
      Joseph Henry|Joseph Henry|Henry; Werner von Siemens|Werner von Siemens|Siemens; Anders Ångström|Anders Ångström|Ångström|Angstrom;
      Alexander Graham Bell|Alexander Graham Bell|Graham Bell|Bell; James Clerk Maxwell|James Clerk Maxwell|Maxwell; John Dalton|John Dalton|Dalton;
      Evangelista Torricelli|Evangelista Torricelli|Torricelli; Hans Christian Ørsted|Hans Christian Ørsted|Hans Christian Oersted|Ørsted|Oersted;
      Enrico Fermi|Enrico Fermi|Fermi; Peter Debye|Peter Debye|Debye; René-Antoine Ferchault de Réaumur|Réaumur|Reaumur;
      William Rankine|William Rankine|Rankine; Jean-Léonard-Marie Poiseuille|Poiseuille; George Gabriel Stokes|George Gabriel Stokes|Stokes;
      William Gilbert|William Gilbert|Gilbert; Johann Heinrich Lambert|Johann Heinrich Lambert|Lambert; Ole Rømer|Ole Rømer|Ole Roemer|Rømer|Romer;
      Max Planck|Max Planck|Planck; Amedeo Avogadro|Amedeo Avogadro|Avogadro; Hendrik Lorentz|Hendrik Lorentz|Lorentz; Charles Richter|Charles Richter|Richter` },

    { id: 'noble-gases', lvl: 2, nl: 'Noem een edelgas', en: 'Name a noble gas', a: `
      Helium; Neon; Argon; Krypton; Xenon; Radon; Oganesson` },

    { id: 'alkali-metals', lvl: 3, nl: 'Noem een alkalimetaal', en: 'Name an alkali metal', a: `
      Natrium|Sodium; Kalium|Potassium; Lithium; Cesium|Caesium|Cesium; Rubidium; Francium` },

    { id: 'halogens', lvl: 3, nl: 'Noem een halogeen', en: 'Name a halogen', a: `
      Chloor|Chlorine; Fluor|Fluorine; Jood|Iodine|Jodium; Broom|Bromine; Astaat|Astatine; Tenness|Tennessine` },

    { id: 'elements-named-after-people', lvl: 3, nl: 'Noem een scheikundig element dat naar een persoon genoemd is', en: 'Name a chemical element named after a person', a: `
      Einsteinium; Curium; Nobelium; Mendelevium; Fermium; Copernicium; Rutherfordium; Bohrium; Meitnerium; Roentgenium|Roentgenium|Röntgenium;
      Seaborgium; Lawrencium; Gadolinium; Oganesson; Flerovium; Samarium` },

    { id: 'carbon', lvl: 3, nl: 'Noem een vorm waarin koolstof voorkomt (bv. diamant)', en: 'Name a form in which carbon occurs (e.g. diamond)', a: `
      Diamant|Diamond; Grafiet|Graphite; Steenkool|Coal; Grafeen|Graphene; Houtskool|Charcoal; Roet|Soot; Fullereen|Fullerene|Buckyball|Buckminsterfullereen|Buckminsterfullerene;
      Koolstofnanobuis|Carbon nanotube|Nanobuis|Nanobuisjes; Amorfe koolstof|Amorphous carbon; Lonsdaleïet|Lonsdaleite|Lonsdaleiet; Glaskoolstof|Glassy carbon;
      Carbyn|Carbyne; Aerografiet|Aerographite; Actieve kool|Activated carbon|Actief kool; Cokes|Coke; Koolstofvezel|Carbon fibre|Carbon fiber` },

    { id: 'air', lvl: 1, nl: 'Noem een gas dat in de lucht (de atmosfeer van de aarde) zit', en: "Name a gas found in the air (Earth's atmosphere)", a: `
      Zuurstof|Oxygen|O2; Stikstof|Nitrogen|N2; Koolstofdioxide|Carbon dioxide|CO2|Koolzuurgas|Kooldioxide; Argon; Waterdamp|Water vapour|Water vapor|Waterdamp;
      Ozon|Ozone; Methaan|Methane; Helium; Neon; Waterstof|Hydrogen; Krypton; Xenon; Distikstofoxide|Nitrous oxide|Lachgas|N2O;
      Koolstofmonoxide|Carbon monoxide|CO|Koolmonoxide; Stikstofdioxide|Nitrogen dioxide|NO2; Zwaveldioxide|Sulfur dioxide|Sulphur dioxide|SO2; Radon; Ammoniak|Ammonia` },

    { id: 'atmosphere', lvl: 2, nl: 'Noem een laag van de atmosfeer', en: 'Name a layer of the atmosphere', a: `
      Ozonlaag|Ozone layer; Troposfeer|Troposphere; Stratosfeer|Stratosphere; Mesosfeer|Mesosphere; Thermosfeer|Thermosphere; Exosfeer|Exosphere;
      Ionosfeer|Ionosphere; Magnetosfeer|Magnetosphere; Tropopauze|Tropopause; Stratopauze|Stratopause; Mesopauze|Mesopause; Homosfeer|Homosphere;
      Heterosfeer|Heterosphere` },

    { id: 'earth-layers', lvl: 1, nl: 'Noem een laag van de aarde (van binnen naar buiten)', en: 'Name a layer of the Earth (from inside to outside)', a: `
      Aardkorst|Crust|Korst; Kern|Core|Aardkern; Mantel|Mantle|Aardmantel; Binnenkern|Inner core; Buitenkern|Outer core; Lithosfeer|Lithosphere;
      Asthenosfeer|Asthenosphere; Moho|Moho|Mohorovičić-discontinuïteit|Mohorovicic discontinuity; Bovenmantel|Upper mantle; Ondermantel|Lower mantle;
      Oceanische korst|Oceanic crust; Continentale korst|Continental crust` },

    { id: 'rocks', lvl: 1, nl: 'Noem een soort gesteente', en: 'Name a type of rock', a: `
      Graniet|Granite; Marmer|Marble; Kalksteen|Limestone; Zandsteen|Sandstone; Basalt; Leisteen|Slate; Lava|Lava|Lavasteen; Obsidiaan|Obsidian;
      Puimsteen|Pumice; Krijt|Chalk; Vuursteen|Flint; Steenkool|Coal; Hardsteen|Bluestone|Blauwe steen|Belgisch hardsteen; Gneis|Gneiss;
      Kwartsiet|Quartzite; Tufsteen|Tuff|Tuf; Schalie|Shale; Klei|Clay|Kleisteen|Claystone; Conglomeraat|Conglomerate; Dolomiet|Dolomite;
      Mergel|Marl; Travertijn|Travertine; Andesiet|Andesite; Dioriet|Diorite; Gabbro; Rhyoliet|Rhyolite; Porfier|Porphyry; Breccie|Breccia;
      Mica-schist|Schist|Glimmerschist|Schist; Speksteen|Soapstone|Zeepsteen; Serpentiniet|Serpentinite; Peridotiet|Peridotite; Grauwacke|Greywacke;
      Arkose; Siltsteen|Siltstone; Tufa; Evaporiet|Evaporite|Steenzout|Rock salt; Gips|Gypsum; Fyliet|Phyllite; Migmatiet|Migmatite` },

    { id: 'em-spectrum', lvl: 2, nl: 'Noem een soort elektromagnetische straling', en: 'Name a type of electromagnetic radiation', a: `
      Zichtbaar licht|Visible light|Licht|Light; Röntgenstraling|X-rays|X-ray|Röntgen|Rontgenstraling|X-straling; Ultraviolet|Ultraviolet|UV|Uv-straling|Ultraviolette straling;
      Infrarood|Infrared|IR|Warmtestraling|Infraroodstraling; Gammastraling|Gamma rays|Gamma|Gammastralen; Radiogolven|Radio waves|Radio|Radiostraling;
      Microgolven|Microwaves|Microgolf|Microgolfstraling; Terahertzstraling|Terahertz radiation|Terahertz` },

    { id: 'measuring-tools', lvl: 1, nl: 'Noem een meetinstrument', en: 'Name a measuring instrument', a: `
      Thermometer; Weegschaal|Scales|Scale|Balans|Weegtoestel; Liniaal|Ruler|Lat|Meetlat; Meetlint|Tape measure|Rolmeter|Lintmeter; Barometer;
      Klok|Clock|Horloge|Watch|Uurwerk; Stopwatch|Stopwatch|Chronometer; Snelheidsmeter|Speedometer; Kompas|Compass; Voltmeter;
      Ampèremeter|Ammeter|Amperemeter; Multimeter; Bloeddrukmeter|Blood pressure monitor|Sphygmomanometer; Hygrometer|Hygrometer|Vochtigheidsmeter;
      Anemometer|Anemometer|Windmeter; Seismograaf|Seismograph|Seismometer; Geigerteller|Geiger counter; Schuifmaat|Calliper|Caliper|Vernier;
      Gradenboog|Protractor|Hoekmeter; Waterpas|Spirit level; Regenmeter|Rain gauge|Pluviometer; Decibelmeter|Sound level meter;
      Lichtmeter|Light meter|Luxmeter; pH-meter|pH meter|Ph-meter; Manometer|Pressure gauge|Drukmeter; Kilometerteller|Odometer;
      Stappenteller|Pedometer; Hoogtemeter|Altimeter; Micrometer|Micrometer screw gauge; Hartslagmeter|Heart rate monitor; Glucosemeter|Glucose meter;
      Spectrometer; Calorimeter|Calorimeter|Kalorimeter; Sextant; Theodoliet|Theodolite; Ademtest|Breathalyser|Alcoholmeter; Dieptemeter|Depth gauge;
      Maatbeker|Measuring cup|Maatcilinder|Measuring cylinder; Pipet|Pipette; Buret|Burette` },

    { id: 'quadrilaterals', lvl: 1, nl: 'Noem een vierhoek', en: 'Name a quadrilateral', a: `
      Vierkant|Square; Rechthoek|Rectangle; Ruit|Rhombus|Rhomb; Trapezium|Trapezium|Trapezoid; Parallellogram|Parallelogram; Vlieger|Kite|Deltoïde|Deltoid` },

    { id: 'platonic-solids', lvl: 3, nl: 'Noem een regelmatig veelvlak (een Platonisch lichaam)', en: 'Name a regular polyhedron (a Platonic solid)', a: `
      Kubus|Cube|Hexaëder|Hexahedron|Zesvlak; Tetraëder|Tetrahedron|Viervlak|Tetraeder; Octaëder|Octahedron|Achtvlak|Octaeder;
      Dodecaëder|Dodecahedron|Twaalfvlak|Dodecaeder; Icosaëder|Icosahedron|Twintigvlak|Icosaeder` },

    { id: 'geological-time', lvl: 3, nl: 'Noem een geologisch tijdperk (bv. het Jura)', en: 'Name a geological period or era (e.g. the Jurassic)', a: `
      Jura|Jurassic; Krijt|Cretaceous; Trias|Triassic; IJstijd|Ice Age|Pleistoceen|Pleistocene; Carboon|Carboniferous; Cambrium|Cambrian;
      Perm|Permian; Devoon|Devonian; Precambrium|Precambrian; Holoceen|Holocene; Siluur|Silurian; Ordovicium|Ordovician; Paleozoïcum|Paleozoic|Palaeozoic;
      Mesozoïcum|Mesozoic; Cenozoïcum|Cenozoic|Kenozoïcum|Kaenozoïcum; Tertiair|Tertiary; Kwartair|Quaternary; Paleogeen|Paleogene; Neogeen|Neogene;
      Ediacarium|Ediacaran; Eoceen|Eocene; Mioceen|Miocene; Plioceen|Pliocene; Oligoceen|Oligocene; Paleoceen|Paleocene; Antropoceen|Anthropocene;
      Archaïcum|Archean|Archeïcum; Proterozoïcum|Proterozoic; Hadeïcum|Hadean` },

    { id: 'plant-parts', lvl: 1, nl: 'Noem een deel van een plant', en: 'Name a part of a plant', a: `
      Wortel|Root|Wortels; Stengel|Stem|Steel; Blad|Leaf|Bladeren|Blaadje; Bloem|Flower; Bloemblad|Petal|Kroonblad|Bloemblaadje; Zaad|Seed|Zaadje;
      Vrucht|Fruit; Doorn|Thorn|Stekel; Knop|Bud; Stuifmeel|Pollen; Stamper|Pistil; Meeldraad|Stamen|Meeldraden; Tak|Branch; Stam|Trunk;
      Schors|Bark; Kelkblad|Sepal|Kelk; Nerf|Vein|Bladnerf; Bladsteel|Petiole; Huidmondje|Stoma|Huidmondjes; Vruchtbeginsel|Ovary;
      Stempel|Stigma; Stijl|Style; Helmknop|Anther; Nectarklier|Nectary|Honingklier; Wortelhaar|Root hair|Wortelharen; Knol|Tuber;
      Bol|Bulb|Bloembol; Rank|Tendril; Xyleem|Xylem|Houtvaten; Floëem|Phloem|Bastvaten|Floeem; Bladgroen|Chlorophyll|Chlorofyl;
      Bladgroenkorrel|Chloroplast|Chloroplasten; Cambium; Wortelstok|Rhizome; Uitloper|Runner|Stolon; Kiem|Embryo|Kiemplant` },

    { id: 'space-agencies', lvl: 2, nl: 'Noem een ruimtevaartagentschap van een land of groep landen (zoals NASA)', en: 'Name a space agency of a country or group of countries (like NASA)', a: `
      NASA; ESA|European Space Agency|Europees Ruimteagentschap|Europese Ruimtevaartorganisatie; Roscosmos; JAXA; ISRO|Indian Space Research Organisation;
      CNSA|China National Space Administration|Chinees ruimtevaartagentschap; CSA|Canadian Space Agency; CNES; DLR; ASI|Agenzia Spaziale Italiana;
      UK Space Agency|UK Space Agency|UKSA; KASA|Korea AeroSpace Administration|KARI; Israel Space Agency|ISA; UAE Space Agency|MBRSC;
      Belspo|BELSPO; Australian Space Agency|ASA; AEB|Brazilian Space Agency|Agência Espacial Brasileira; NSO|Netherlands Space Office; SUPARCO;
      Iranian Space Agency; CONAE; SANSA; Turkish Space Agency|TUA; Saudi Space Agency` },

    { id: 'nobel-prizes', lvl: 1, nl: 'Noem een categorie van de Nobelprijs', en: 'Name a Nobel Prize category', a: `
      Vrede|Peace|Nobelprijs voor de Vrede|Vredesprijs|Nobel Peace Prize; Literatuur|Literature; Natuurkunde|Physics|Fysica;
      Scheikunde|Chemistry|Chemie; Geneeskunde|Medicine|Fysiologie of Geneeskunde|Physiology or Medicine|Fysiologie; Economie|Economics|Economische wetenschappen` },

    { id: 'particles', lvl: 3, nl: 'Noem een elementair deeltje (dus geen proton of neutron, want die bestaan uit quarks)', en: 'Name an elementary particle (so not a proton or neutron: those are made of quarks)', a: `
      Elektron|Electron; Foton|Photon; Quark|Quark|Quarks; Neutrino|Neutrino|Neutrino's; Higgsboson|Higgs boson|Higgs|Higgsdeeltje|Higgs-deeltje;
      Gluon; Muon; Positron; Up-quark|Up quark|Up; Down-quark|Down quark|Down; Tau|Tau|Tauon|Tau lepton; W-boson|W boson; Z-boson|Z boson;
      Top-quark|Top quark|Top; Bottom-quark|Bottom quark|Bottom|Beauty; Charm-quark|Charm quark|Charm; Strange-quark|Strange quark|Strange;
      Elektronneutrino|Electron neutrino; Muonneutrino|Muon neutrino; Tauneutrino|Tau neutrino; Graviton; Antiquark; Lepton|Lepton|Leptonen; Boson|Boson|Bosonen` },

    { id: 'primary-colours', lvl: 1, nl: 'Noem een primaire kleur (van verf, van licht of van drukwerk)', en: 'Name a primary colour (of paint, of light or of printing)', a: `
      Rood|Red; Blauw|Blue; Geel|Yellow; Groen|Green; Magenta; Cyaan|Cyan|Cyan` },

    { id: 'greenhouse-gases', lvl: 2, nl: 'Noem een broeikasgas', en: 'Name a greenhouse gas', a: `
      Koolstofdioxide|Carbon dioxide|CO2|Kooldioxide|Koolzuurgas; Methaan|Methane|CH4; Waterdamp|Water vapour|Water vapor;
      Lachgas|Nitrous oxide|Distikstofoxide|N2O; Ozon|Ozone; Cfk's|CFCs|Chloorfluorkoolwaterstoffen|Freon|CFK;
      Hfk's|HFCs|Fluorkoolwaterstoffen|HFK; Zwavelhexafluoride|Sulfur hexafluoride|SF6; Stikstoftrifluoride|Nitrogen trifluoride|NF3;
      Pfk's|PFCs|Perfluorkoolwaterstoffen|PFK` },

    { id: 'ear', lvl: 2, nl: 'Noem een deel van het oor', en: 'Name a part of the ear', a: `
      Trommelvlies|Eardrum|Tympanic membrane; Oorschelp|Pinna|Auricle|Outer ear; Gehoorgang|Ear canal|Auditory canal; Slakkenhuis|Cochlea;
      Hamer|Malleus|Hammer; Aambeeld|Incus|Anvil; Stijgbeugel|Stapes|Stirrup; Oorlel|Earlobe; Evenwichtsorgaan|Vestibular system|Evenwichtsorgaan;
      Middenoor|Middle ear; Binnenoor|Inner ear; Buis van Eustachius|Eustachian tube; Gehoorzenuw|Auditory nerve|Cochlear nerve;
      Halfcirkelvormige kanalen|Semicircular canals; Gehoorbeentjes|Ossicles; Uitwendig oor|External ear; Ovaal venster|Oval window;
      Rond venster|Round window; Haarcellen|Hair cells; Labyrint|Labyrinth; Oorsmeerklieren|Ceruminous glands` },

    { id: 'period-2', lvl: 3, nl: 'Noem een element uit de tweede rij (periode 2) van het periodiek systeem', en: 'Name an element in the second row (period 2) of the periodic table', a: `
      Zuurstof|Oxygen|O; Koolstof|Carbon|C; Stikstof|Nitrogen|N; Lithium|Lithium|Li; Neon|Neon|Ne; Fluor|Fluorine|F; Boor|Boron|B; Beryllium|Beryllium|Be` }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
