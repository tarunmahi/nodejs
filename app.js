const http = require('http')
const {readFile, readFileSync} =require('fs')

const file1 = readFileSync('./node-express-course/02-express-tutorial/navbar-app/index.html')
const file2 = readFileSync('./node-express-course/02-express-tutorial/navbar-app/styles.css')

const file3 = readFileSync('./node-express-course/02-express-tutorial/navbar-app/logo.svg')

const file4 = readFileSync('./node-express-course/02-express-tutorial/navbar-app/browser-app.js')


const server =http.createServer((req,res)=>{
    console.log(req.url);
    const url = req.url
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end(file1)
        return
    }
    if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.end(file2)
        return
    }
    if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.end(file3)
        return
    }
    if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.end(file4)
        return
    }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.end('<h1>error in page </h1>')
        return
    }
    
    
})

server.listen(5000)
console.log('listening on port 5000');
