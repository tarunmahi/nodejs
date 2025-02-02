// const Eventemitter = require('events')
// const customemitter = new Eventemitter();


// customemitter.on('response',(name,age)=>{
//     console.log(`so the name is ${name} and his age is ${age}`);
// })

// customemitter.emit('response','tarun',40);

const http = require('http')

const server  = http.createServer()

server.on('request',(req,res)=>{
    res.end('home page')
})

server.listen(5000);