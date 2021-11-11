const http = require('http');
const today = require('./today_1');
const test1 = require('./test1');

var aestTime = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello, World! The date today is ${today.getDate()} and the joke is ${test1.Joke()}`);
}

const port = 3000;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);