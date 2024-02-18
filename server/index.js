const express = require('express')
const { indexRouter } = require('./router/indexRouter')

const app = express()

app.use('/',indexRouter)

app.listen(1000,()=>{
    console.log('listening')
})
