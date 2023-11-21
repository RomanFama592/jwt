const { ErrorCreate } = require('../../services/error-codes')

/**
 * The function vdata_createJWT checks if the payload exists and is of type object, and if not, it
 * sends an error response.
 * @param {Request} rq - The parameter "rq" is the request object, which contains information about the incoming
 * request such as headers, query parameters, and request body.
 * @param {Response} rs - The parameter "rs" is the response object. It is used to send the response back to the
 * client.
 * @param {Function} next - The `next` parameter is a callback function that is used to pass control to the next
 * middleware function in the request-response cycle. It is typically used in Express.js applications
 * to move to the next middleware function or route handler.
 * @returns In this code snippet, if the condition `!body["payload"]` is true, the function will return
 * `rs.send({ success: false, error: ErrorCreate.payloadnosend })`. If the condition `typeof
 * body["payload"] !== "object"` is true, the function will return `rs.send({ success: false, error:
 * ErrorCreate.payloadinvalid })`. If none of these conditions
 */
function checkCJWTData (rq, rs, next) {
  const { body } = rq

  if (!body.payload) {
    return rs.send({ success: false, error: ErrorCreate.payloadnosend })
  }

  if (typeof body.payload !== 'object') {
    return rs.send({ success: false, error: ErrorCreate.payloadinvalid })
  }

  next()
}

module.exports = checkCJWTData
