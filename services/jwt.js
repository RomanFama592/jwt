// eslint-disable-next-line no-unused-vars
const { SignJWT, jwtVerify, JWTVerifyOptions } = require('jose')

if (!process.env.SECRETWORD || typeof process.env.SECRETWORD !== 'string') {
  throw Error('variable de entorno "SECRETWORD" no existe')
}

const secretWord = new TextEncoder().encode(process.env.SECRETWORD)

/**
 * The function `createJWT` asynchronously creates a JSON Web Token (JWT) using the provided payload
 * and a secret word.
 * @param {object} payload - The payload parameter is an object that contains the data you want to include in
 * the JWT (JSON Web Token). This data can be any information you want to securely transmit, such as
 * user details or authorization claims.
 * @returns {string | null} the result of the JWT creation process. If the process is successful, it will return the
 * signed JWT. If there is an error, it will return null.
 */
function createJWT (payload) {
  let result

  try {
    result = new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .sign(secretWord)
  } catch (err) {
    globalThis.logger('C-err => ', err)
    result = null
  }

  return result
}

/**
 * The function `verifyJWT` is an asynchronous function that verifies a JSON Web Token (JWT) using a
 * secret word and optional options, and returns the result or null if an error occurs.
 * @param {string} jwt - The `jwt` parameter is the JSON Web Token that needs to be verified.
 * @param {JWTVerifyOptions } options - The `options` parameter is an optional object that can be passed to the `jwtVerify`
 * function. It can contain various options for verifying the JWT, such as the algorithm used for
 * signing the token, the issuer, the audience, etc. By passing `options` as `undefined` if it
 * @returns {object|null} the result of the JWT verification. If the verification is successful, the result will be
 * the decoded JWT. If the verification fails, the result will be null.
 */
function verifyJWT (jwt, options) {
  let result

  try {
    result = jwtVerify(jwt, secretWord, options || undefined)
  } catch (err) {
    globalThis.logger('V-err => ', err)
    result = null
  }

  return result
}

module.exports = { createJWT, verifyJWT }
