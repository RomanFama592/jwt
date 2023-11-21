const ErrorRequest = Object.freeze({
  errorbase: 1000,
  bodyinvalid: 1001
})

const ErrorValidate = Object.freeze({
  errorbase: 2000,
  jwtnosend: 2001,
  jwtinvalid: 2002,
  jwtnotauth: 2003
})

const ErrorCreate = Object.freeze({
  errorbase: 3000,
  payloadnosend: 3001,
  payloadinvalid: 3002,
  jwtincreate: 3003
})

module.exports = {
  ErrorRequest,
  ErrorCreate,
  ErrorValidate
}
