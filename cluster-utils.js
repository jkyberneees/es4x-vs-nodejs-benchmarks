module.exports = code => {
  const cluster = require('cluster')
  const numCPUs = Math.max(require('os').cpus().length / 2, 1)

  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`)

    for (let i = 0; i < numCPUs; i++) {
      console.log(`Forking process number ${i}...`)
      cluster.fork()
    }
  } else {
    console.log(`Worker ${process.pid} started...`)

    code()
  }
}
