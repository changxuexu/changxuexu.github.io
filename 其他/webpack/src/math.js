// es6 module规范 
// 引用import sum from './sum'
export const sum = (a,b) => {
  return a + b
}

export const min = (a,b) => {
  return a - b
}

/* 
// cmd
// 引用
// require(['./math'], function (add) {
//   let sumRes = add(10, 20)
//   console.log('sumRes=', sumRes);
// })

define(function (require, factory) {
  'use strict';
  return function (a, b) {
    return a + b
  }
})
*/

/* 
//common.js
// 引用
// var sum = require('./math')
// const sumRes = sum(10, 20)
// console.log('sumRes=', sumRes);
module.exports = function (a, b) {
  return a + b
} 
*/