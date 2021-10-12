const fs = require('fs')

/*fs.readFile('./resource/content.txt', (err, data)=>{
    if (err) throw err
    console.log(data.toString())
})*/

// Promise 形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./resource/content.txt', (err,data)=>{
        // 如果出错
        if (err) reject(err)
        // 如果成功
        resolve(data)
    })
})

// 调用 then
p.then(value => {
    console.log(value.toString())
}, reason => {
    console.log(reason)
})
