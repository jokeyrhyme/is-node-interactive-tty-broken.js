# is-node-interactive-tty-broken

does my Node.js suffer from https://github.com/nodejs/node/issues/5384 ?

[![Build Status](https://travis-ci.org/jokeyrhyme/is-node-interactive-tty-broken.svg?branch=master)](https://travis-ci.org/jokeyrhyme/is-node-interactive-tty-broken)

## Usage

```js
const { isBroken, isFixed } = require('is-node-interactive-tty-broken')

// no parameters provided, will check `process`
isBroken(); // => true or false

// can provide parameters if desired
const version = process.version;
const platform = process.platform;
isBroken(version, platform);
```
