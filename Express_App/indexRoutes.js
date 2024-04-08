const express = require( 'express' );

const app=express();
//import root file here

// /user/routes
const userRouter = require('./user/routes')

app.use('/user', userRouter)

app.listen(3000, ()=>{
console.log("App listening")
})