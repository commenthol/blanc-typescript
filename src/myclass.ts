/**
 * This file demonstrates how to use istanbul coverage tool
 *
 * @module lib/myclass
 *
 * @copyright 2015 commenthol
 * @license MIT
 */

interface IOptions {
  array?: number[]
}

/**
 * A simple class which contains an internal array
 * @constructor
 * @param {Object} [options] - options
 * @return {MyClass}
 */
export default class MyClass {
  options: object
  array: number[]

  constructor (options: IOptions) {
    /* istanbul ignore next */ // ignore next statement (or block)
    /** @member {Object} */
    this.options = options || {}
    /** @member {Array} */
    this.array = options.array || [1, 2]
  }

  /**
 * length of internal array
 * @return {Number} - length of array
 */
  length () : number {
    return this.array.length
  }

  /**
   * push item to internal array
   * @param {Number} item
   * @return {Number} - item
   */
  push (item: number) : number {
    /* istanbul ignore else */ // tell istanbul that there is no need for a default `else`
    if (item) {
      this.array.push(item)
    }
    return item
  }

  /**
 * get the last item from the array
 * @return {Number} last item
 */
  last () : number {
    return this.array[this.length() - 1]
  }

  /**
   * multiply the last item on the array with `factor` and push it on the stack
   * @param {Number} [factor] - factor to multiply with. Default is 1
   * @return {Number} result of operation
   */
  mul (factor: number) : number {
    factor = factor || 1
    /* istanbul ignore if */ // ignore the following if block
    if (factor === 1) {
      factor = factor // eslint-disable-line
    }
    return this.push(this.last() * factor)
  }

  /**
   * add `sum` to the last item on the array and push it on the stack
   * @param {Number} [sum] - sum to add with. Default is 1
   * @return {Number} result of operation
   */
  add (sum: number) : number {
    sum = sum || 1
    // this code never executes
    if (0) { // eslint-disable-line
      sum += 0
    }
    if (1) return this.push(this.last() + sum) // eslint-disable-line
    // this code is never reached
    sum *= 12 - sum
    return sum
  }

  untested () : number {
    // this function has no test case
    return 1
  }
}
