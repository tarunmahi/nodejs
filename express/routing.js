// const express = require('express')
// const app =express()
// const {products,people} = require('./data')
// // app.use(express.static('./public/navbar-app'))
// app.get('/',(req,res)=>{
//     // res.json([{name:'tarun'},{name:'jithendra'}])
//     // res.json(products)
//     res.send(`<h1> home page </h1> <a href='/api/products'> products page </a>`)
// })
// app.get('/api/products' ,(req,res)=>{
//     const newproduct = products.map((product)=>{
//         const {id,name,price} =product;
//         return {id,name,price}
//     })
//     res.send(newproduct);    
    
// })
// app.get('/api/products/:productID',(req,res)=>{
//     // const prod = products.find((product)=>product.id===1);
//     // res.json(prod)
//     // console.log(req);
//     // console.log(req.params);
//     const {productID} = req.params;

//     const prod = products.find((product)=> product.id===Number(productID))
//     res.json(prod)
    
    
// })


// app.listen(5000,()=>{
//     console.log(`listening on port 5000`);
    
// })
const express =require('express')
const app = express()
const {people,products} = require('./data')

app.get('/',(req,res)=>{
    // res.status(200).send('<h4>Home page</h4>')
    res.send(`<h2>there</h2> <a href='/api/products'> products page</a>`)
    const names = products.map((product)=>{
        const {id,name,price} = product;
        return {id,name,price}
    })
    res.json(names)
})
app.get('/api/products/:product_ID',(req,res)=>{ 
    const {product_ID} = req.params;
    const names = people.find((product)=>product.id==Number(product_ID))
    if(!names){
        res.status(404).send('oops request page is not found ')
    }
    return  res.status(200).json(names)
    
})
app.listen(5000,()=>{
    console.log(`port is runnning on port 5000`);
    
})