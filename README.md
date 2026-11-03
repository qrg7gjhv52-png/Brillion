# 🏔️ Brillion

Het dagelijkse quizspel waarin je **hoger klimt naarmate je antwoord zeldzamer is**.
In het Nederlands én het Engels (taalknop rechtsboven).

## Zo werkt het

| Onderdeel | Hoe |
|---|---|
| Ronde | 8 vragen, 20 seconden per vraag. Staat je antwoord niet in de lijst? Dan kan je het niet doorgeven (zoals bij Krillion): het vak schudt en je probeert opnieuw tot de tijd op is |
| Klassen | Gewoon → Ongewoon → Zeldzaam → Episch → **1 in a Brillion**. De 50 bekendste antwoorden worden in 5 even grote klassen verdeeld (van vaak genoemd naar zeldzaam); alles daarna is meteen 1 in a Brillion. Een klasse laat je +250 / +500 / +750 / +1.000 / +1.250 m klimmen |
| Moeilijkheid | elke vraag is makkelijk, gemiddeld of moeilijk. Bij **Onbeperkt** kies je zelf; de **dagelijkse beklimming** wordt moeilijker naarmate je hoger klimt (vraag 1–4 makkelijk, 5–7 gemiddeld, 8 moeilijk); **Per categorie** gaat ook van makkelijk naar moeilijk |
| Einde | je hoogte in meter + de berg die je haalde (Kemmelberg … Mount Everest op 8.849 m: haal je met vooral Episch en 1 in a Brillion) |
| Letterspel | 155 vragen zoals *Noem een dier dat begint met een B* of *Noem een land met een Z in de naam*. Het tegeltje naast de vraag toont de letter. Een goed antwoord dat niet bij de letter past, telt niet (“Past niet”) |
| Nakijken | tikfout, klankfout, het begin van de naam (*Kopenh*), meervoud of verkleinwoord (*peren*, *tomaatjes*)? → **Bedoelde je…?** of meteen goed. Engels ↔ Nederlands wordt vertaald |
| Klimmen | de berg vult het hele scherm en de camera klimt live mee: bos → alpenweide → rotsen → gletsjer → eeuwige sneeuw → death zone, door de wolken, langs bordjes van echte bergen. Hoe zeldzamer je antwoord, hoe langer de klim (Legendarisch = slow-motion) |
| Tijd op | de klimmer glijdt uit en je ziet een paar goede antwoorden. Klopt je antwoord volgens jou toch? **Meld het** |
| Einde | vlag planten op je top, daarna zoomt de camera uit over de hele berg met je route en je 8 stops |
| Modi | Dagelijkse beklimming (1 poging, met archief), Onbeperkt, Per categorie |
| Extra | reeks (streak), records, geschiedenis, 20 badges, delen als emoji-blokjes |

De dagelijkse beklimming is voor iedereen dezelfde en staat een jaar vooruit vast in
`data/schedule.js`. Een vraag komt pas na **26 dagen** terug.
In Onbeperkt zie je altijd eerst vragen die je nog nooit zag: per niveau zijn er minstens 150 vragen,
dus 18 rondes zonder herhaling.

**Nooit dubbel:** in één ronde komt een vraag nooit twee keer. Ook twee vragen die te veel op
elkaar lijken (de helft of meer van de antwoorden is hetzelfde, bv. *Noem een land in Europa* en
*Noem een land dat aan Duitsland grenst*) of twee letterspellen met dezelfde lijst komen nooit
samen in één ronde.

## Spelen en op je gsm zetten (als app)

1. Open **https://qrg7gjhv52-png.github.io/Brillion/** (de repo *Brillion*, via GitHub Pages).
2. Kies op je gsm **Zet op beginscherm** (iPhone: Deel-knop → *Zet op beginscherm*).
   Daarna werkt Brillion ook zonder internet.

## Vragen toevoegen

Elke categorie heeft een eigen bestand in `data/`. Een vraag ziet er zo uit:

```js
{ id: 'planets', lvl: 1, nl: 'Noem een planeet', en: 'Name a planet', a: `
  Mars; Jupiter; Saturnus|Saturn; Aarde|Earth; ... ; Uranus` }
```

- `lvl` is de moeilijkheid: `1` makkelijk, `2` gemiddeld, `3` moeilijk.
- Antwoorden staan **van vaak gegeven naar zeldzaam**. De plaats in de lijst bepaalt de klasse:
  de eerste 20% is Gewoon, de laatste 20% is 1 in a Brillion.
- `NL|EN|andere namen`: eerst de Nederlandse naam, dan de Engelse, dan alternatieven.
  Is de Engelse naam hetzelfde? Laat ze weg (`Mars`) of laat het vak leeg (`Spätzle||Spaetzle`).
- Antwoorden scheid je met `;`.

Maak daarna de dagplanning opnieuw en controleer alles:

```bash
node brillion/tools/make-schedule.mjs   # dagen t/m morgen blijven hetzelfde
node brillion/tools/validate.mjs
```

De controle toont het aantal vragen per categorie en per niveau, zoekt dubbele namen,
controleert de dagelijkse mix, zoekt rondes met (bijna) dezelfde vragen en test het nakijken.

### Letterspel-vragen

Letterspellen staan in `data/letters.js`. Ze gebruiken lijsten die al bestaan (landen, dieren,
fruit …). Een regel ziet er zo uit: `['animals', 'starts', 'b', 1]` = *Noem een dier dat begint
met een B*, makkelijk. Soorten regels: `starts` (begint met), `contains` (met een … in de naam),
`ends` (eindigt op), `len` (aantal letters) en `double` (dubbele letter, zoals aa of oo).

`node brillion/tools/pick-letters.mjs` zoekt zelf de leukste combinaties (genoeg bekende
antwoorden, maar niet te makkelijk) en kiest het niveau.

## Bestanden

```
brillion/
├── index.html            ← de pagina
├── css/style.css         ← vormgeving (sneeuw & ijs, licht + donker)
├── js/
│   ├── i18n.js           ← alle teksten in NL en EN
│   ├── core.js           ← nakijken, punten, bergen, dagplanning
│   ├── store.js          ← statistieken, badges, meldingen
│   ├── audio.js          ← geluidjes, voetstappen, ijsbijl en wind
│   ├── fx.js             ← de klimwereld (berg, camera, weer) en de sneeuw-confetti
│   └── app.js            ← de schermen en het spelverloop
├── data/                 ← 484 vragen in 10 categorieën (algemene kennis, ±150 alledaagse open vragen, 155 letterspellen)
│   └── schedule.js       ← vaste dagplanning (gemaakt door make-schedule)
├── sw.js + manifest      ← werkt als app en offline
├── icons/                ← app-icoontjes
└── tools/                ← validate · make-schedule · pick-letters · make-icons · build-artifact
```

`tools/build-artifact.mjs` maakt één los bestand voor de online speel-link op claude.ai.
