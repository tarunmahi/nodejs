// 

const express =require('express')
const app =express()

const {people,products} =require('./data')

app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query);
    const {namee,id} =req.query;
    console.log(req.query);
    
    let sortednames = [...people]
    if(namee){
        sortednames=sortednames.filter((names)=>{
            return names.name===namee
        })
    }
    if(id){
        let id_n = Number(id);
        sortednames=sortednames.filter((names)=>{
            return names.id===id_n
        })
    }

    res.json(sortednames)
})

app.listen(5000,()=>{
    console.log(`listening on port 5000`);
    
})