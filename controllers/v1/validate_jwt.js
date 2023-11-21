const { ErrorValidate } = require('../../services/error-codes')
const { verifyJWT } = require('../../services/jwt')

/**
 * The function validates a JSON Web Token (JWT) and sends a response indicating whether the validation
 * was successful or not.
 * @param {Request} rq - The parameter `rq` is an object representing the request made to the server. It
 * typically contains information such as the request method, headers, query parameters, and request
 * body.
 * @param {Response} rs - The parameter "rs" is the response object. It is used to send the response back to the
 * client.
 * @returns a response object with either a success or error message, depending on the outcome of the
 * JWT verification. If the JWT is successfully verified, the response object will have a success
 * property set to true and a jwt property containing the verified JWT object. If the JWT is not valid
 * or fails verification, the response object will have a success property set to false and an error
 * property containing an error
 */
async function validateJWT (rq, rs) {
  const { params } = rq

  const jwtObject = await verifyJWT(params.jwt)

  if (!jwtObject) {
    return rs.send({ success: false, error: ErrorValidate.jwtnotauth })
  }

  rs.send({ success: true, jwt: jwtObject })
}

module.exports = validateJWT
