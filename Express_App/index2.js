const express = require( 'express' );

const app=express();
app.use(express.json());


// app.use(express.static( 'public'));

app.use('/',(req,res,next)=>{
    console.log("I am middleware");
    next();
});

app.use('/user',(req,res,next)=>{
    console.log("I am user middleware");
    next();
});
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("post my app");
})
app.get('/',(req,res)=>{
res.send("My App")
});

app.listen(3000, ()=>{
console.log("App listening")
})