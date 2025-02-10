const express = require('express')
const app =express()
const {products,people} = require('./data')
// app.use(express.static('./public/navbar-app'))
app.get('/',(req,res)=>{
    // res.json([{name:'tarun'},{name:'jithendra'}])
    // res.json(products)
    res.send(`<h1> home page </h1> <a href='/api/products'> products page </a>`)
})
app.get('/api/products' ,(req,res)=>{
    const newproduct = products.map((product)=>{
        const {id,name,price} =product;
        return {id,name,price}
    })
    res.send(newproduct);    
    
})
app.get('/api/products/:productID',(req,res)=>{
    // const prod = products.find((product)=>product.id===1);
    // res.json(prod)
    // console.log(req);
    // console.log(req.params);
    const {productID} = req.params;

    const prod = products.find((product)=> product.id===Number(productID))
    res.json(prod)
    
    
})


app.listen(5000,()=>{
    console.log(`listening on port 5000`);
    
})
