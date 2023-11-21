const { ErrorCreate } = require('../../services/error-codes')
const serviceJWT = require('../../services/jwt')

/**
 * The function creates a JSON Web Token (JWT) using the payload provided in the request body and sends
 * the JWT string in the response.
 * @param {Request} rq - The parameter "rq" is the request object, which contains information about the incoming
 * request such as headers, body, and query parameters.
 * @param {Response} rs - The parameter "rs" is the response object. It is used to send the response back to the
 * client.
 * @returns a response object with either a success or error message and a JWT string.
 */
async function createJWT (rq, rs) {
  const { body } = rq

  const jwtString = await serviceJWT.createJWT(body.payload)

  if (!jwtString) {
    return rs.send({ success: false, error: ErrorCreate.jwtincreate })
  }

  rs.send({ success: true, jwt: jwtString })
}

module.exports = createJWT
