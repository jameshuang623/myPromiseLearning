/**
 * util.promisify 方法
 */
// 引入 util 模块
const util = require('util')
// 引入 fs 模块
const fs = require('fs')
// 返回一个新的函数
let myReadFile = util.promisify(fs.readFile)

myReadFile('./resource/content.txt').then(value=>{
    console.log(value.toString());
})
