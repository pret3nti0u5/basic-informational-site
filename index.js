const http = require('http');
const fs = require('fs');

http
  .createServer(function (req, res) {
    const filename = req.url.substr(1);
    fs.readFile(
      filename === '' ? 'index.html' : filename,
      function (err, data) {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end('<h1 style="text-align: center">404 Not Found</h1>');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      }
    );
  })
  .listen(process.env.PORT || 8080);
