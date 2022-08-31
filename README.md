## What's this?

eslint configuration for some of my projects. You might not want to use this
(yet).

## Install

When using mocha :coffee: :

```sh
npm install --save-dev eslint-plugin-mocha eslint-plugin-budapestian eslint-plugin-import eslint-plugin-node eslint-plugin-security eslint-plugin-unicorn eslint-config-prettier eslint-plugin-eslint-comments eslint-config-moving-meadow
```

When using jest :black_joker: :

```sh
npm install --save-dev eslint-plugin-jest eslint-plugin-budapestian eslint-plugin-import eslint-plugin-node eslint-plugin-security eslint-plugin-unicorn eslint-config-prettier eslint-plugin-eslint-comments eslint-config-moving-meadow
```

When using `yarn` replace `npm install --save-dev` with `yarn add -D`

## Features

Will automatically detect whether your project uses `mocha` or `jest` and will
apply either the `eslint-plugin-mocha` or the `eslint-plugin-jest` rules (or both
of them if your project uses both of them :open_mouth:).

## Flare'n status section

[![lint and test](https://github.com/sverweij/eslint-config-moving-meadow/workflows/lint%20and%20test/badge.svg)](https://github.com/sverweij/eslint-config-moving-meadow/actions?query=workflow%3A%22lint+and+test%22)
[![npm stable version](https://img.shields.io/npm/v/eslint-config-moving-meadow.svg?logo=npm)](https://npmjs.com/package/eslint-config-moving-meadow)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
