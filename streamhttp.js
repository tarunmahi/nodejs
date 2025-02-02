const http = require('http')
const{readFileSync, createReadStream} =require('fs')
const server = http.createServer((req,res)=>{
    const data = createReadStream('./folder/third.txt','utf8')
    data.on('data',()=>{
        data.pipe(res)
    })
})

server.listen(5000);
console.log('node is listening on port 5000');
