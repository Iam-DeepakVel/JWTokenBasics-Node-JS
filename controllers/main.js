const jwt = require('jsonwebtoken');
const { badRequest } = require('../errors');
const {StatusCodes} = require('http-status-codes')

//POST REQUEST AND RESPOND WILL PROVIDE TOKEN TO FRONTEND
const login = async(req,res)=>{
 
 const {username,password}= req.body;
 if(!username || !password){
   throw new badRequest('Please enter username and password')
 } 
 
 const id = new Date().getDate() 
 const token = jwt.sign({username,id},process.env.JWT_SECRET,{expiresIn:"10d"})

  res.status(StatusCodes.OK).json({msg:`User created`,token})
}


//GET REQUEST WITH TOKEN IN HEADERS OF REQUEST
const dashboard = async(req,res)=>{
  const luckyNumber = Math.floor(Math.random()*100)
  res.status(StatusCodes.OK).json({msg:`Hello ${req.user}`,secret:`Your lucky number ${luckyNumber}`})
}

module.exports = {
  login,
  dashboard
}