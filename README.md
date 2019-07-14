# es4x-vs-nodejs-benchmarks
Performance Benchmarks es4x vs 0http vs restana vs express  
- Discussion details:
https://twitter.com/pml0pes/status/1150348604378427392


## Basic GET /hi -> "Hello World!" test
We run the tests using:
> wrk -t8 -c20 -d30s http://127.0.0.1:3000/hi

### Test Machine 1 (MacBook Pro (15-inch, 2016), CPU 2,7 GHz Intel Core i7, 16 GB 2133 MHz LPDDR3  )
> In this benchmark we are running the wrk and the services in the same machine. 

- Node.js raw HTTP server (no routing): Requests/sec: **108039.54**
- Node.js 0http: Requests/sec: 106864.40
- Node.js restana: Requests/sec: 102778.23
- Node.js express: Requests/sec:  91447.53
- Vertx ES4X (no routing): Requests/sec:  96748.54

#### Comment on ES4X runtime
*ES4X is using graaljs in interpreted mode! Add the JVMCI compiler module in order to run in optimal mode!*

#### (no routing)
The `no routing` flag means requests routing is not being used. More on Vertx ES4X will follow.

## Resources
- Node.js https://nodejs.org/en/
- Vertx https://vertx.io/
- restana Framework https://www.npmjs.com/package/restana
- 0http Framework https://www.npmjs.com/package/0http
- express Framework https://expressjs.com/
- ES4X https://reactiverse.io/es4x/
- wrk2 https://github.com/giltene/wrk2
