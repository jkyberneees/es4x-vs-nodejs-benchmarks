/* global vertx */
vertx
  .createHttpServer()
  .requestHandler(function (req) {
    req.response().end('Hello World!')
  })
  .listen(3000)

//  wrk -t8 -c20 -d30s http://127.0.0.1:3000/hi
//  Requests/sec:  96748.54
