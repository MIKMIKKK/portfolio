# portfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Déploiement sur GitHub Pages

Ce dépôt est configuré pour être déployé sur GitHub Pages sous le nom de dépôt `portfolio`.

- Le champ `base` de Vite est réglé à `/portfolio/` dans `vite.config.js` pour que les assets soient servis correctement.
- Un workflow GitHub Actions (`.github/workflows/deploy.yml`) build et déploie automatiquement la branche `main` sur Pages lorsque vous poussez.

Pour déployer localement :

```sh
# build
npm run build

# puis servir le dossier dist avec un serveur static (par ex. `npx serve dist`)
```

Poussez simplement sur `main` et l'action GitHub se chargera du reste.
