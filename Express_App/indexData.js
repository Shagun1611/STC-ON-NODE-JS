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


//You need to add Get by id , delete by id

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.Id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send("User not found");
    }
});



app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.Id === id);
    if (index !== -1) {
        users.splice(index, 1);
        res.send("User deleted successfully");
    } else {
        res.status(404).send("User not found");
    }
});


app.listen(3000, ()=>{
console.log("App listening")
})

