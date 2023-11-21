const router = require('express').Router()
const cors = require('cors')
const createJWT = require('../../../controllers/v1/create_jwt')
const validateJWT = require('../../../controllers/v1/validate_jwt')
const checkCJWTData = require('../../middlewares/is_create_jwt')
const checkVJWTData = require('../../middlewares/is_validate_jwt')

router.get('/validate/:jwt', checkVJWTData, validateJWT)

const optionsCors = {
  origin: '*' // require('../../whitelist')
}

router.post('/create', cors(optionsCors), checkCJWTData, createJWT)

module.exports = router
