// const express =require('express')
// const app = express()
// const path = require('path')

// app.use(express.static('./public/navbar-app'))

// app.get('/',(req,res)=>{
//     res.status(201).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

// app.get('/about',(req,res)=>{
//     res.send('about page')
// })
// app.all('*',(req,res)=>{
//     res.status(404).send('<h2>error</h2>')
// })


// const port=5000
// app.listen(port,()=>{
//     console.log(`listening on port ${port}`);
// })

const express =require('express')
const app =express()
const path=require('path')

app.use(express.static('./public/navbar-app'))

// app.get('/',(req,res)=>{
//     var num=0;
   
    
//     res.status(200).sendFile(path.resolve(__dirname,('./public/navbar-app/index.html')))
//     console.log(`user hit the home page ${num++}`);
// })
app.get('*',(req,res)=>{
    res.status(405).send(`<h3>oops it seems there is error in page </h3>`)
    console.log('hello you are there');

})

const port=5000
app.listen(port,()=>{
    console.log(`running on port ${port}`);
    
})