
// const fs = require('fs'); 

// const data = fs.readFile("hello.txt", 'utf-8', function(err, result){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result);
//     }
// });



// const data = fs.readFile("hello.txt", 'utf-8',callmeAfterData )

// function  callmeAfterData(err, result){ 
//     if(err){ 
//         console.log(err) 
//     } else { 
//         console.log(result) 
//     } 
// }



// const add = require('./add');

// console.log(add.Add(4,5));

// const http = require('http');

// http.createServer(function(req,res){
//     res.writeHead(200, {'content-type':'text-plain'})
//     res.write("hello world");
//     res.end();
// }).listen(3030);


const http=require('http');
const url=require('url');

http.createServer(function(req,res){
    let parsedUrl = url.parse(req.url,true);
    // console.log(parsedUrl.query.age);
    res.writeHead(200, {'content-type':'text-plain'})
    res.write("hello "+ parsedUrl.path);
    res.end();
}).listen(3030);


// const http=require('http');
// const fs= require('fs');

// http.createServer((req,res)=>{
//     res.writeHead(200, {'content-type':'text-plain'})
//     fs.readFile('hello.txt','utf-8' , (err,data)=> {
//         if(err){
//             res.write("error ");
//             res.end();
//         }else{
//             res.write(data);
//             res.end();
//         }
//     })
// }).listen(3030);