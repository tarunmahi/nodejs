const {readFile,writeFile} = require('fs')

const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilepromise=util.promisify(writeFile)

const start = async()=>{
    const first = await readFilePromise('./folder/first.txt','utf8')
    const second =await readFilePromise('./folder/temps/second.txt','utf8')
    console.log(second);
    
    console.log(first);
    await writeFilepromise('./folder/temps/third.text',`wow this is great ${first}`)
}
start()