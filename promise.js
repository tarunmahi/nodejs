const {readFile,writeFile} =require('fs')

const gettext=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,result)=>{
            if(err){
                console.log(err);
                return;
                
            }else{
                console.log(result);
                
            }
        })
    })
}

const start = async()=>{
    try {
       const first = await gettext('./folder/first.txt')
       console.log(first);
       
    } catch (error) {
        console.log(error);
        
    }
    }
    // start();