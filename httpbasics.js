const http = require('http')
const {} =require('fs');
const { log } = require('console');

const server =http.createServer((req,res)=>{
    var url = req.url
    if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end('<h2> this is home page </h2>')

    }
    else if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end('<h1>Home page</h1>')

    }
    else{
        res.writeHead(400,{'content-type':'text/html'});
        res.end('<h1>OOOPS!!!!!!!!!! page not found</h1>')
    }

})

const port = 4000
server.listen(port);
console.log(`port is listening on ${port}`);
