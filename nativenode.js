require('./cluster-utils')(() => {
  const http = require('http')
  const server = http.createServer()
  server.on('request', (req, res) => {
    setImmediate(() => res.end('Hello World!'))
  })

  server.listen(3000)
})

// wrk -t8 -c20 -d30s http://127.0.0.1:3000/hi
// Requests/sec: 108039.54
