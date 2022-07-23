const express = require('express')
const { login, dashboard } = require('../controllers/main')
const router = express.Router()
const AuthenticationChecker = require('../middleware/auth')


router.route('/login').post(login)
router.route('/dashboard').get(AuthenticationChecker,dashboard)


module.exports = router