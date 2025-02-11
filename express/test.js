const express =require('express')
const app = express()


app.get('/',(req,res)=>{
    res.status(200).send('<h4>Home page</h4>')
})
app.listen(5000,()=>{
    console.log(`port is runnning on port 5000`);
    
})