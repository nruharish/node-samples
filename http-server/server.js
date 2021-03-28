const http = require('http');
const fs = require('fs');
const serveDir = 'serve';

const server = http.createServer((req, res) => {
  console.log(`method: ${req.method}`);
  console.log(`method: ${req.url}`);

  if (req.url === '/') {
    res.statusCode = 200;
    res.write('Live server');
    res.end();
  } else {
    fs.readFile('./' + serveDir + '/' + req.url, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.write('404 not found');
        res.end();
      } else {
        res.statusCode = 200;
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000);
