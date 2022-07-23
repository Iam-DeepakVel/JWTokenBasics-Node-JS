const badRequest = require('./bad-request')
const unAuthenticatedError = require('./unauthenticated')
const CustomAPIError = require('./custom-error')


module.exports ={
   badRequest,
   unAuthenticatedError,
   CustomAPIError
}