require('dotenv').config()

// load custom logger in globalThis
const { logger } = require('./services/utils')
globalThis.logger = logger

const app = require('./server/express_init')

app.listen(app.get('port'), () => {
  globalThis.logger(`##Running server in ${app.get('port')}`)
})
