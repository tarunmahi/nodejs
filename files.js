// const {readFileSync ,writeFileSync} = require('fs')

const { readFile ,writeFile } = require("fs");

// const data = readFileSync('./folder/first.txt','ascii')
// console.log(data);
// writeFileSync(
//     './folder/example.txt',
//     `so this is how it goes ${data} okay`
// )

 //asynchronus type structure -- 
readFile('./folder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./folder/temps/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./folder/main1.txt',`the matter is ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
                
            }
            console.log(result);
            
        })
    })
})

