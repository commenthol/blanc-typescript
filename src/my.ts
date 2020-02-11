/**
 * @module lib/my
 * @copyright 2015 commenthol
 * @license MIT
 */

interface ICallback {
  (err: Error, data: any): any
}

/**
 * a synchronous function
 * @memberof module:lib/my
 */
export function sync (): string {
  const sy = 'sy'
  const nc = 'nc'
  return sy + nc
}

/**
 * An asynchronous function
 * @memberof module:lib/my
 * @param {Function} callback - Type: `function({Error}, {String})`
 * @param {Number} [msecs] - milliseconds it takes to call `callback`
 */
export function async (callback: ICallback, msecs?: number) {
  setTimeout(function () {
    callback && callback(null, 'async')
  }, msecs || 10)
}
