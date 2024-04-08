const express = require( 'express' );

const app=express();

app.use(express.json());

let users= [
{"Id":1, "Name":"Alice"}, //0
{"Id":2, "Name":"Bob"}, //1 {"Id":2, "Name":"Bob1"}
{"Id":3, "Name":"Bob"}, //2
{"Id":4, "Name":"Bob"}, //3
]

app.get('/user', (req,res)=>{
res.json(users)
});

app.post('/user', (req, res)=>{
let user = req.body;
users.push(user);
res.status(201).json(user)
});

app.put( '/user/:id', (req, res)=> {
let id = parseInt(req.params.id); //2
let updateUser = req.body;
let userIndex= users.findIndex(user=>user.Id==id) //1
users[userIndex] = {...users[userIndex], ...updateUser}
res.json(users[userIndex]) ;

});

app.listen(3000, ()=>{
console.log("App listening")
})


//You need to add Get by id , delete aois