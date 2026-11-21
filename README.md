# Wordwise

A vocabulary trainer for **Hebrew, French, Spanish, Polish and Italian** ↔ English.
A clean rewrite of my original *wordGame*.

## Features
- **1,000 words per language**: one shared English list in 26 topics, with sense notes
  ("light (not heavy)", "orange (fruit)") so meanings never get mixed up.
- **Three modes**: multiple choice, typing, and a 60-second sprint with streak multipliers.
- **Smart review**: spaced repetition (Leitner boxes). Words you miss come back sooner, both
  later in the same session and in future sessions.
- **Fair answer checking**: answers are compared by their text, not their position in a list.
  Words with two meanings accept either one. Typing ignores articles (le/la/el/il…), allows
  missing accents unless *Strict accents* is on, accepts small typos, and for Hebrew also
  accepts a typed transliteration.
- **Pronunciation** through the browser's built-in voices, plus optional Hebrew transliteration.
- Progress, streaks and best scores are **saved on the device** (localStorage). No account, works offline.
- Light and dark mode. Keyboard shortcuts: `1`–`4` to answer, `Enter` to continue, `Esc` to end.

## Run it
It's plain HTML/CSS/JS with no build step. Because it uses ES modules, serve it over HTTP
instead of opening the file directly:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

To publish on **GitHub Pages**, go to Settings → Pages and deploy from the `main` branch, root folder.

## Project layout
```
index.html          screens (home, topics, play, results, settings)
css/style.css       styles
js/app.js           UI and game flow
js/srs.js           spaced repetition and session building
js/check.js         answer normalising and typing check
js/speech.js        text-to-speech
js/store.js         saving to localStorage
js/words.js         parses the word lists
js/data/part1.js    word list, topics 1–13
js/data/part2.js    word list, topics 14–26
tools/              validation scripts (node tools/validate.mjs, node tools/check.test.mjs)
```

## Editing the word list
Each line in `js/data/*.js` is:

```
english (optional sense note)|pos|hebrew:transliteration|french|spanish|polish|italian
```

Use `/` for accepted alternatives; the first one is the main answer. After editing, run
`node tools/validate.mjs` to check every word has all five languages and to list words
that share a spelling.
