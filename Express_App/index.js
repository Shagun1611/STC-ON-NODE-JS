const express = require('express');

const app=express();

app.use(express.static('public'));

app.get('/user',(req,res)=>{
    res.send("hello guys");
})
app.get('/user/:id',(req,res)=>{
    res.send("hello guys");
})

app.post('/user',(req,res)=>{
    res.send("hello users posted!!");
})
// delete and put
app.delete('/user/:id',(req,res)=>{
    console.log(req.params.id)
    res.send('user '+req.params.id+" deleted");
    });
    app.put('/user/:id',(req,res)=>{
        console.log(req.params.id)
    res.send('user '+req.params.id+" updated");
    });


app.listen(5000,()=>{
    console.log("Server created!!");
})

// 1) GET https://localhost/user/:id/mark