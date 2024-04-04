function handleRequest(req,res){
    const{url,method}=req;
    console.log(url);
    if(url =='/' && method =='GET'){
        res.writeHead(200,{'Content-type':'text=plain'});
        res.write("success");
        res.end();

    }
    else if(url =='/user' && method =='GET'){
        res.writeHead(200,{'Content-type':'text=plain'});
        res.write("User");
        res.end();

    }
    else
    {
        res.writeHead(404,{'Content-type':'text=plain'});
        res.write("error");
        res.end();
        
    }
}
module.exports={handleRequest}