const http = require('http');
const path = require('path');
const fs = require('fs');
const serveStatic = require('serve-static');

const port = process.env.PORT || 3333;

// Serve static files from the dist directory
const staticServer = serveStatic(path.join(__dirname, 'dist'), {
  index: ['index.html']
});

// Create HTTP server
const server = http.createServer((req, res) => {
  console.log('Request URL:', req.url);

  staticServer(req, res, () => {
    res.statusCode = 404;
    res.end('Not Found');
  });
});

server.listen(port, () => {
  console.log(`Sanity Studio server listening on port ${port}`);
});
