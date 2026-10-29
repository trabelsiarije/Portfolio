# Arije Trabelsi — Portfolio

Static personal portfolio (HTML + CSS + vanilla JS). Light, editorial, bilingual (FR / EN).

## Structure

```
portfolio/
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  ├─ translations.js   ← all FR / EN strings live here
│  └─ main.js
└─ assets/
   ├─ cv/
   │  ├─ CV_Arije_Trabelsi_FR.pdf   ← add
   │  └─ CV_Arije_Trabelsi_EN.pdf   ← add
   └─ certificates/
      ├─ intro-python.pdf
      ├─ intermediate-python.pdf
      ├─ data-manipulation-pandas.pdf
      ├─ intro-relational-databases.pdf
      ├─ intermediate-sql.pdf
      └─ intro-oracle-sql.pdf
```

## Editing content

- **Text (FR + EN)**: `js/translations.js` — every user-facing string.
- **Skills list**: `SKILLS` constant at the bottom of `translations.js`.
- **Projects**: `PROJECTS` constant (categories, tools, GitHub link) + `projects.items.*` for the title/description per language.
- **Certificates**: `CERTIFICATES` constant + `certificates.items.*`.

## Local preview

Open `index.html` in a browser, or run a tiny static server from the folder:

```
python -m http.server 8000
# then open http://localhost:8000
```
