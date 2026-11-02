# 🏔️ Brillion

Het dagelijkse quizspel waarin je **hoger klimt naarmate je antwoord zeldzamer is**.
In het Nederlands én het Engels (taalknop rechtsboven).

## Zo werkt het

| Onderdeel | Hoe |
|---|---|
| Ronde | 8 vragen, 20 seconden per vraag, 1 antwoord per vraag |
| Klassen | Gewoon → Ongewoon → Zeldzaam → Episch → **1 in a Brillion**. Elke klasse is 20% van de lijst (van vaak genoemd naar zeldzaam) en laat je +250 / +500 / +750 / +1.000 / +1.250 m klimmen |
| Moeilijkheid | elke vraag is makkelijk, gemiddeld of moeilijk. Bij **Onbeperkt** kies je zelf; de **dagelijkse beklimming** wordt moeilijker naarmate je hoger klimt (vraag 1–4 makkelijk, 5–7 gemiddeld, 8 moeilijk); **Per categorie** gaat ook van makkelijk naar moeilijk |
| Einde | je hoogte in meter + de berg die je haalde (Kemmelberg … Mount Everest op 8.849 m: haal je met vooral Episch en 1 in a Brillion) |
| Nakijken | tikfout, klankfout of maar een deel van de naam? → **Bedoelde je…?** en jij kiest (de klok loopt door). Engels ↔ Nederlands wordt vertaald |
| Klimmen | de berg vult het hele scherm en de camera klimt live mee: bos → alpenweide → rotsen → gletsjer → eeuwige sneeuw → death zone, door de wolken, langs bordjes van echte bergen. Hoe zeldzamer je antwoord, hoe langer de klim (Legendarisch = slow-motion) |
| Fout antwoord | de klimmer glijdt uit, 0 punten + knop **Meld het** als je denkt dat het toch klopt |
| Einde | vlag planten op je top, daarna zoomt de camera uit over de hele berg met je route en je 8 stops |
| Modi | Dagelijkse beklimming (1 poging, met archief), Onbeperkt, Per categorie |
| Extra | reeks (streak), records, geschiedenis, 20 badges, delen als emoji-blokjes |

De dagelijkse beklimming is voor iedereen dezelfde. Een vraag komt pas na **26 dagen** terug.
In Onbeperkt zie je altijd eerst vragen die je nog nooit zag: per niveau zijn er 80 vragen, dus
10 rondes zonder herhaling.

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

Controleer daarna alles met:

```bash
node brillion/tools/validate.mjs
```

Dat toont het aantal vragen per categorie en per niveau, zoekt dubbele namen,
controleert de dagelijkse mix en test het nakijken.

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
├── data/                 ← 283 vragen in 9 categorieën (algemene kennis + open alledaagse vragen)
├── sw.js + manifest      ← werkt als app en offline
├── icons/                ← app-icoontjes
└── tools/                ← validate · make-icons · build-artifact
```

`tools/build-artifact.mjs` maakt één los bestand voor de online speel-link op claude.ai.
