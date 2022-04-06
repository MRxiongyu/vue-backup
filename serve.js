const http = require('http')

const app = http.createServer((req, res) => {
    if (req.url === '/api/users') {
        const users = [
            {
                name: 'xiongyu',
                id: 1
            },
            {
                name: 'xiongyu2',
                id: 2
            },
            {
                name: 'xiongyu6',
                id: 3
            }
        ]
        res.setHeader('Access-Control-Allow-Origin', '*')
       return  res.end(JSON.stringify(users))
    }
    return  res.end('NOT FOUND')
})

app.listen(3000, () => {
    console.log('服务器启动在http://localhost:3000')
})
