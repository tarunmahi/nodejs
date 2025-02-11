const express=require('express')
const app =express()
const logger = require('./logger')

app.use('/about',logger)

app.get('/',(req,res)=>{
    res.send(`<h3>Home page </h3>`)
})
app.get('/about',(req,res)=>{
    res.send(`<h3>about  page </h3>`)
})
app.get('/about/page',(req,res)=>{
    res.send(`<h3>page  page </h3>`)
})

app.listen(5000,()=>{
    console.log(`app listening on port 5000`);
    
}) 