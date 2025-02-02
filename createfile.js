const {writeFile, writeFileSync} = require('fs')

for(let i=0;i<10000;i++){
    writeFileSync('./folder/third.txt',`Hello mr and your number is ${i} \n`,{flag:'a'})
}
