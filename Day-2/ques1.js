//Develop a Node.js application that listens on port 2020. 
//It should accept an "Age" parameter as part of the query string. 
//The application should respond with "You are major" or "You are minor" based on the age provided in the query parameter.


const http=require('http');

const url=require('url');

const Server=http.createServer(function(req,res){

    const parsedUrl=url.parse(req.url,true);

    const age=parseInt(parsedUrl.query.age);
    if (!isNaN(age)) {
        
        if (age >= 18) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('You are major');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('You are minor');
        }
    } else {
      
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid age ');
    }

});
Server.listen(2020,()=>console.log("Server Started!!!"));
