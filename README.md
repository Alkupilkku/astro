# Astro-blogiprojekti

Ensimmäinen Astro-projektini. Tein sen harjoittellessani Astro-frameworkin
perusteita tutoriaalin avulla, ja jatkoin sitten tutoriaalin päälle omilla
lisäyksillä.

Sivu on julkaistu Netlifyssa:
https://brilliant-dragon-86dce4.netlify.app/

## Mitä sivulla on

- Etusivu ja "About Me" -sivu, jotka käyttävät yhteistä layoutia
- Header- ja Footer-komponentit, jotka näkyvät jokaisella sivulla
- Blogi-postaukset markdown-tiedostoina
- RSS-syöte (`/rss.xml`), joka hakee postaukset automaattisesti
- Mobiiliystävällinen hampurilaisvalikko

## Teknologiat

- Astro (sivujen rakentamiseen)
- Markdown (blogipostaukset)
- @astrojs/rss (RSS-syötteen generointiin)
- Netlify (julkaisuun)

## Mitä opin

- Miten Astron komponenttirakenne toimii (layoutit, propsit, `Astro.props`)
- Miten frontmatterissä voi määritellä dataa ja logiikkaa, jota templatessa
  käyttää (esim. `skills.map(...)`, ehdollinen renderöinti `{happy && ...}`)
- Miten `define:vars` vie muuttujia CSS:ään
- Miten Astro eroaa Reactista: sivut renderöidään staattisesti buildissa,
  joten interaktiivisuus (valikon toggle) tehdään erillisellä scriptillä

## Rajoitteet ja jatkokehitysideoita

- Sivusto on täysin staattinen, joten esim. kommentit tai hakutoiminto
  vaatisivat erillisen backendin tai kolmannen palvelun
- Menu-skripti on toistaiseksi vain aria-expanded-togglaus; animaatiot
  voisi lisätä
- Postauksia voisi lajitella tageilla

## Ajaminen paikallisesti

```bash
npm install
npm run dev
