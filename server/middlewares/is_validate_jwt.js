const { ErrorValidate } = require('../../services/error-codes')

const isJWT = require('validator').default.isJWT

/**
 * The function validates a JSON Web Token (JWT) received as a parameter in a request.
 * @param {Request} rq - The `rq` parameter represents the request object, which contains information about the
 * incoming HTTP request.
 * @param {Response} rs - The "rs" parameter is the response object. It is used to send the response back to the
 * client.
 * @param {Function} next - The `next` parameter is a callback function that is used to pass control to the next
 * middleware function in the request-response cycle. It is typically used to move to the next
 * middleware function after the current middleware function has completed its task.
 * @returns either an error response object or calling the next middleware function.
 */
function checkVJWTData (rq, rs, next) {
  const { params } = rq

  if (!params.jwt) {
    return rs.send({ success: false, error: ErrorValidate.jwtnosend })
  }

  if (!isJWT(params.jwt)) {
    return rs.send({ success: false, error: ErrorValidate.jwtinvalid })
  }
  return next()
}

module.exports = checkVJWTData
