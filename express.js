require('./cluster-utils')(() => {
  const service = require('express')()
  service.get('/hi', (req, res) => res.end('Hello World!'))
  service.listen(3000)
})

// wrk -t8 -c20 -d30s http://127.0.0.1:3000/hi
// Requests/sec:  91447.53
