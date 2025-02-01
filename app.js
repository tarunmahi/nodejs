const lo = require('lodash')
const item=[1,[2,[3,[8],4,5]]]

const newitem=lo.flattenDeep(item);
console.log(newitem);
