const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cache = require('apicache').middleware

const routesJWT = require('./routes/v1/jwt')
const jsonHandler = require('./middlewares/json_handler_error')
const app = express()

// sets
app.set('port', process.env.PORT || 10000)

// middleware
app.use(cors())
app.use(morgan('dev', { stream: { write: globalThis.logger } }))
app.use(express.json())
app.use(jsonHandler)
app.use(cache('10 minutes'))

// routes
app.get('/isalive', (rq, rs) => {
  return rs.status(200).send('OK')
})

app.use('/v1', routesJWT)

module.exports = app
