/**
 * Test case for aglob.
 * Runs with mocha.
 */
'use strict'

const aglob = require('../lib/aglob.js')
const assert = require('assert')

describe('aglob', function () {
  this.timeout(3000)

  it('Expand glob filename pattern.', async () => {
    let filenames = await aglob(`${__dirname}/**/*.js`)
    assert.ok(filenames)
  })

  it('Expand invalid.', async () => {
    let caught
    try {
      await aglob('__not_existing')
    } catch (e) {
      caught = e
    }
    assert.ifError(caught)
  })

  it('Expand sync.', () => {
    const filenames = aglob.sync([
      `${__dirname}/*.*`
    ], {})
    assert.ok(filenames.length > 0)
  })
})

/* global describe, before, after, it */
