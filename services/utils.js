const fs = require('fs/promises')
const debug = process.env.DEBUG.toLocaleLowerCase() === 'true'

/**
 * Logs the output to the console and appends it to a log file.
 *
 * @param {...*} output - The output to be logged.
 * @returns {undefined} This function does not have a specific return value.
 */
function logger (...output) {
  if (debug) console.log(...output)
  fs.appendFile('log.txt', String(`${Date()}: `) + String(...output) + '\n', { encoding: 'utf-8' })
}

module.exports = { logger }
