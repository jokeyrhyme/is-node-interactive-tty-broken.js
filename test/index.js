const assert = require('assert')

const { isBroken, isFixed } = require('../index.js')

assert.equal(typeof isBroken(), 'boolean')
assert.equal(typeof isFixed(), 'boolean')

assert.notEqual(isBroken(), isFixed())

// force Windows tests

assert.equal(typeof isBroken(null, 'win32'), 'boolean')
assert.equal(typeof isFixed(null, 'win32'), 'boolean')

assert.notEqual(isBroken(null, 'win32'), isFixed(null, 'win32'))
