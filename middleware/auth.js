const { unAuthenticatedError } = require("../errors")
const jwt = require('jsonwebtoken')

const AuthenticationChecker = async(req,res,next)=>{
   
    const authToken = req.headers.authorization
    if(!authToken || !authToken.startsWith('Bearer')){
      throw new unAuthenticatedError(`You does not have Authorization to access data!`)
    }
     const Tok = authToken.split(' ')[1] 
    //verify token and return payload (i.e username,id,createdat ,expire at)
    try {
    const requiredToken = jwt.verify(Tok,process.env.JWT_SECRET)
    const {username} = requiredToken
    req.user = username
    next()
   } catch (error) {
    throw new unAuthenticatedError(`UnAuthorized Request`)
   }
}

module.exports = AuthenticationChecker