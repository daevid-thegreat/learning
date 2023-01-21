const http = require('http')

// Create Server Object
const port = 5000
const address = new URL('http://localhost:5000')
http.createServer((req, res) => {
    // Write response
    res.write('Hello Word.... Sorry I meant Hello World')
    res.end()
}).listen(port, () => console.log('Server running at', address.href))
