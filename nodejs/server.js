// import packages

const http = require("http");
// port
const port = 3000;
// server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.writeHead("Content-Type", "text/plain");
  res.end("Hello World\n");
});
//listen
server.listen(port, () => {
  console.log(`Server running at XXXXXXXXXXXXXXXX:${port}/`);
});
