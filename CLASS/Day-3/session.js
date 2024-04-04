// const http=require('http');
// const fs=require('fs');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text-html'})
//     fs.readFile('FirstHtml.html','utf-8',(err,data)=>{
//         if(err){
//             res.write("error");
//             res.end();
//         }
//         else{
//             res.write(data);
//             res.end();
//         }
//     })
// }).listen(4000);

// const http=require('http');
// const url=require('url');
// const helloModule=require('./sayHello');
// http.createServer(function(req,res){
//     let parsedUrl=url.parse(req.url,true);
//     res.writeHead(200,{'Content-type':'text-plain'});
//     res.write(helloModule.sayHello(parsedUrl.query.name));
//     res.end();
// }).listen(4000);

const http=require('http');
const routes=require('./sessionRoutes')
http.createServer(function(req,res){
routes.handleRequest(req,res);
}).listen(4000);