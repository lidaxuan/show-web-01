const fs = require('fs') //这是属于node中的包，专门用来读取文件中的内容
    //根据传递过来的文件名称读取文件内容
function fromJonsFile(fileName) {
    //req:表示接收浏览器发送过来的数据（request）
    //res:表示将数据返回给浏览器（response）
    return (req, res) => {
        const data = fs.readFileSync(`mock/data/${fileName}.json`).toString();
        const jsonData = JSON.parse(data)
        return res.json(jsonData)
    }
}
const proxy = {
    'GET /api/getSwape': fromJosnFile('Swape')
}
module.exports = proxy;