const express= require('express')
const cors = require('cors')
const connect=require('./connectDB/connect')
const usersRoute = require('./routes/usersRoute')
const app= express()
const error =require('./Midllewares/errorMidllewares')
const booksRoute=require('./routes/booksRoute')



//passing body data 
app.use(express.json())


app.use(cors())


//Routes
//usersRoute
app.use('/api/users' , usersRoute)
//booksRoute
app.use('/api/books', booksRoute)

//error midlleware
app.use(error.errorMidellwareHandler)





const port= process.env.PORT||4000
connect()


app.listen(port,err=>{
    err?console.log('OOPS', err): console.log(`serveur is up and running on port ${port}`)
})