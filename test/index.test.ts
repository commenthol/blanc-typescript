/**
 * @copyright 2015 commenthol
 * @license MIT
 */

'use strict'

import assert from 'assert'
import my, { MyClass } from '../src'

describe('what you like to test', function () {
  describe('in detail', function () {
    this.timeout(3500) // mocha usually exits a test at 2000ms with an assertion.
    // If your tests run longer set `this.timeout(msecs)`
    it('runs synchronously', function () {
      assert.equal(my.sync(), 'sync')
    })
    it('runs asynchronously', function (done) {
      my.async(function (err, str) {
        assert.strictEqual(err, null)
        assert.equal(str, 'async')
        done()
      })
    })
    it.skip('skips this test for the moment', function () {
      assert(my.todo, 'todo')
    })
  })
})

describe.skip('if you need to skip a number of tests', function () {
  it('is skipped', function () {
    assert.ok(false)
  })
  it('is skipped as well', function () {
    assert.ok(false)
  })
})

describe('exclusive tests', function () {
  // Add `.only` to test only one test (can be added to `describe` as well)
  it/* .only */('is the "only" test executed', function () {
    assert.ok(true)
  })
})

describe('tests with setup and teardown', function () {
  var cls

  before(function () { // executed only once per `describe`
    cls = new MyClass({ array: [1] })
  })
  beforeEach(function () { // before each `it`
    cls.mul(4)
  })
  afterEach(function () { // after each `it`
    cls.add(2)
  })
  it('#1', function () {
    assert.deepEqual(cls.array, [1, 4])
  })
  it('#2', function () {
    assert.deepEqual(cls.array, [1, 4, 6, 24])
  })
  it('#3', function () {
    assert.deepEqual(cls.array, [1, 4, 6, 24, 26, 104])
  })
})
