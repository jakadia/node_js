const http = require('http');
const today = require('./today');

var aestTime = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello, World! The date today is ${today.getDate()} and my name is ${today.getName()}`);
}

const port = 3000;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);