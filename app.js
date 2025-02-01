const {readFileSync ,writeFileSync} = require('fs')

const data = readFileSync('./folder/first.txt','ascii')
console.log(data);
writeFileSync(
    './folder/example.txt',
    `so this is how it goes ${data} okay`
)