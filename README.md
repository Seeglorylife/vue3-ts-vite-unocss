# Vue 3 + TypeScript + Vite + Unocss

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur + [Unocss Plugin](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) 
+ [WindiCSS IntelliSense Plugin](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.

## Unocss Introduction

- [UnoCSS](https://unocss.nodejs.cn/) is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.
- uno.config.ts has add some config, eg: predispose presetWind(tailwindcss) and some transformers

## Project Start

```bash
# install node_modules
pnpm install

# start project
npm run dev
```

## Project Build

> Development environment build command

```bash
npm run build:dev
```

> Test environment build command

```bash
npm run build:test
```

> Product environment build command

```bash
npm run build:prod

