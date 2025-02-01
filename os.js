const os =require('os')
const inf = os.userInfo()
// console.log(os.uptime());
 const trend={
    name : os.type(),
    release:os.release(),
    freemem:os.freemem(),
    totamem:os.totalmem(),
 }

 console.log(trend);
 