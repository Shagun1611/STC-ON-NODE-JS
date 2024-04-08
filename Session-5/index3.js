const express = require( 'express');
const fs = require('fs');

const app = express();
app.use(express.json());

const FILE_PATH='./users.json';

const readJsonFromFile = ()=>{
const usersData = fs.readFileSync(FILE_PATH);
return JSON.parse(usersData);
}

const WriteJsonToFile=(users)=>{
fs.writeFileSync(FILE_PATH,JSON.stringify(users, null, 2));
}

//get all users
app.get('/user', (req, res)=>{
let users = readJsonFromFile();
res.json(users);
})


//create user
app.post('/user', (req,res) => {
let newUser = req.body; //{ "Id":3, "Name":"user3" }
let users = readJsonFromFile(); //[ { "Id": 1, "Name": "Alice" }, { "Id": 2, "Name": "Alice" }]
users.push(newUser); //[ { "Id": 1, "Name": "Alice" }, { "Id": 2, "Name": "Alice" }, {"Id":3, "Name":"user3" }]
WriteJsonToFile(users);
res.status(201).json(newUser);

});
app.get('/user/:id', (req, res)=>{
    let id=parseInt(req.params.id);
    let users = readJsonFromFile();
    let user=users.find(user=>user.ID==id)
    res.json(users);
    })
    
app.put('/user/:id', (req, res)=>{
        let id=parseInt(req.params.id);
        let updateUser=req.body;
        let users = readJsonFromFile();
        let userIndex=users.findIndex(user=>user.ID==id);
        users[userIndex]={...users[userIndex], ...updateUser}
        WriteJsonToFile(users);
        res.send("user updated");
        })
        

app.listen(3000 ,() => console.log("server is running on port 3000"))