const express = require('express')
const app = express()
require('express-async-errors')
require('dotenv').config()
const RouteMain = require('./routes/main')
app.use(express.json())
app.use(express.static('./public'))

const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')
//NOTE:****put this before notfound and errorhandler middleware**** 
app.use('/api/v2',RouteMain)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



const start = async()=>{
  try {
    const port = process.env.PORT || 3000
    app.listen(port,()=> console.log(`Server is listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start();