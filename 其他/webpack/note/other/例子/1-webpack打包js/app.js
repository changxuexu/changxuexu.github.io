import sum from './sum'
var minus = require('./minus')

let a = sum(1, 2)

let b = minus(2, 1)

require(['./mult'], function (mult) {
  let c = mult(2, 3)
  console.log("c=" + c)
})

console.log("a=" + a)

console.log("b=" + b)

