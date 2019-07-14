require('./cluster-utils')(() => {
  const cero = require('0http')
  const {
    router,
    server
  } = cero()

  router.on('GET', '/hi', (req, res) => {
    res.end('Hello World!')
  })

  server.listen(3000)
})

// wrk -t8 -c20 -d30s http://127.0.0.1:3000/hi
// Requests/sec: 106864.40
