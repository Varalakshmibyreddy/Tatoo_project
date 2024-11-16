const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const loginrouter = require('./routers/loginroute')

const app = express()
const port = process.env.port || 5500
dotenv.config()
mongoose.connect(process.env.mongodb)
.then(()=>{
    console.log ('mongodb connected')
}).catch((error)=>{
    console.log (`mongodb connected error ${error}`)
})
app.use('/login',loginrouter)
app.listen(port,(req,res)=>{
    console.log("server connected successfully")
})



