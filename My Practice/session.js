//**********session-2***************8 */

// read file
// const fs=require('fs');
// const data=fs.readFile("hello.txt",'utf-8',function(err,result){
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(result);
//     }
// })

// const add=require('./add');
// console.log(add.ADD(4,5));  


/***********************sesssion-3********************* */

const http=require('http');
const fs=require('fs');
const url=require('url');

const server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-tyep':'text-plain'});
    fs.readFile('First.html','utf-8',function(err,data){
        if(err)
        {
            res.write(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
        
    })
})

