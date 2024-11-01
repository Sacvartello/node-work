const fs = require('fs/promises')

const promise = fs.readFile('./file.txt', 'utf-8')
promise.then(data=>{
    const strArr = data.split('\n').filter(el =>el)
    // console.log(strArr.length);
    const randomIndex = Math.round(Math.random()*strArr.length)
    console.log(strArr[randomIndex]);
})