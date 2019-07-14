require('./cluster-utils')(() => {
  const service = require('restana')({
    disableResponseEvent: true
  })
  service.get('/hi', (req, res) => res.end('Hello World!'))
  service.start(3000)
})

// wrk -t8 -c20 -d30s http://127.0.0.1:3000/hi
// Requests/sec: 102778.23
