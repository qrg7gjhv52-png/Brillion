# 🏔️ Brillion

Het dagelijkse quizspel waarin je **hoger klimt naarmate je antwoord zeldzamer is**.
In het Nederlands én het Engels (taalknop rechtsboven).

## Zo werkt het

| Onderdeel | Hoe |
|---|---|
| Ronde | 8 vragen, 20 seconden per vraag, 1 antwoord per vraag |
| Punten | 1 tot 100 per antwoord: hoe zeldzamer, hoe meer |
| Niveaus | Gewoon → Ongewoon → Zeldzaam → Episch → Legendarisch |
| Eindscore | punten + de berg die je haalde (Kemmelberg … Mount Everest bij 720 punten) |
| Nakijken | tikfout, klankfout of maar een deel van de naam? → **Bedoelde je…?** en jij kiest (de klok loopt door). Engels ↔ Nederlands wordt vertaald |
| Klimmen | de berg vult het hele scherm en de camera klimt live mee: bos → alpenweide → rotsen → gletsjer → eeuwige sneeuw → death zone, door de wolken, langs bordjes van echte bergen. Hoe zeldzamer je antwoord, hoe langer de klim (Legendarisch = slow-motion) |
| Fout antwoord | de klimmer glijdt uit, 0 punten + knop **Meld het** als je denkt dat het toch klopt |
| Einde | vlag planten op je top, daarna zoomt de camera uit over de hele berg met je route en je 8 stops |
| Modi | Dagelijkse beklimming (1 poging, met archief), Onbeperkt, Per categorie |
| Extra | reeks (streak), records, geschiedenis, 20 badges, delen als emoji-blokjes |

De dagelijkse beklimming is voor iedereen dezelfde. Een vraag komt pas na **19 dagen** terug.
In Onbeperkt zie je altijd eerst vragen die je nog nooit zag.

## Spelen en op je gsm zetten (als app)

1. Open **https://qrg7gjhv52-png.github.io/Brillion/** (de repo *Brillion*, via GitHub Pages).
2. Kies op je gsm **Zet op beginscherm** (iPhone: Deel-knop → *Zet op beginscherm*).
   Daarna werkt Brillion ook zonder internet.

## Vragen toevoegen

Elke categorie heeft een eigen bestand in `data/`. Een vraag ziet er zo uit:

```js
{ id: 'planets', nl: 'Noem een planeet', en: 'Name a planet', a: `
  Mars; Jupiter; Saturnus|Saturn; Aarde|Earth; ... ; Uranus` }
```

- Antwoorden staan **van vaak gegeven naar zeldzaam**. De plaats in de lijst bepaalt de punten.
- `NL|EN|andere namen`: eerst de Nederlandse naam, dan de Engelse, dan alternatieven.
  Is de Engelse naam hetzelfde? Laat ze weg (`Mars`) of laat het vak leeg (`Spätzle||Spaetzle`).
- Antwoorden scheid je met `;`.

Controleer daarna alles met:

```bash
node brillion/tools/validate.mjs
```

Dat toont het aantal vragen, zoekt dubbele namen en test het nakijken.

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
├── data/                 ← 153 vragen in 12 categorieën
├── sw.js + manifest      ← werkt als app en offline
├── icons/                ← app-icoontjes
└── tools/                ← validate · make-icons · build-artifact
```

`tools/build-artifact.mjs` maakt één los bestand voor de online speel-link op claude.ai.
