const http = require('http')
const name='tarun'
const server =http.createServer((req,res)=>{
    if(req.url==='/about'){
        res.end(`
            <h2> This is the about page you are looking for </h2>            
            `)
    }
    else if(req.url==='/info'){
        res.end(`
            <h1>this is info page ${name}</h1>
            `)
    }
    else{
        res.end(`
            <h1>oops the requested page is not found `);
    }
res.write("welcome to our page ");
res.end();
})

server.listen(5000);