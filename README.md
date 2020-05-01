# reading-time-calculator

[![npm version](https://badge.fury.io/js/reading-time-calculator.svg)](https://www.npmjs.com/package/reading-time-calculator)

[Medium]'s like reading time estimation.

`reading-time-calculator` helps you estimate how long an article will take to read. It works ONLY with `markdown`.

[medium]: https://medium.com

## Installation

```sh
npm install reading-time-calculator
```

## Usage

```sh
reading-time-calculator -s {PATH/FILE_NAME.md}
```

## Result

Printed on the console:

```js
{ text: '4 min read', minutes: 3.585, time: 215100, words: 717 }
```