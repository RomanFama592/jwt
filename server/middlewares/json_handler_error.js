const { ErrorRequest } = require('../../services/error-codes')

/**
 * The function is a JSON error handler that checks for a specific type of error and sends a response
 * with an error message if the error is found.
 * @param err - The `err` parameter is the error object that is passed to the function. It is used to
 * check if the error is a SyntaxError and if it has a status of 400.
 * @param {Request} rq - The parameter "rq" is the request object, which contains information about the incoming
 * HTTP request. It includes details such as the request method, headers, URL, and body.
 * @param {Response} rs - The parameter "rs" is the response object. It is used to send the response back to the
 * client.
 * @param {Function} next - The `next` parameter is a callback function that is used to pass control to the next
 * middleware function in the request-response cycle. It is typically used when there are multiple
 * middleware functions that need to be executed in a specific order.
 * @returns If the condition `err instanceof SyntaxError && err.status === 400 && "body" in err` is
 * true, then the function will return `rs.status(400).send({success: false, error:
 * ErrorRequest.bodyinvalid})`. Otherwise, it will call the `next()` function.
 */
function jsonHandler (err, rq, rs, next) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return rs.status(400).send({ success: false, error: ErrorRequest.bodyinvalid }) // Bad request
  }
  return next()
}

module.exports = jsonHandler
