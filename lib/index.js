/**
 * Async glob module.
 * @module aglob
 */

'use strict'

const aglob = require('./aglob')

let lib = aglob.bind(this)

Object.assign(lib, aglob, {
  aglob
})

module.exports = lib
