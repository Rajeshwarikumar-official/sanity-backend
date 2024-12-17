const sanityStudio = require('sanity');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3333;

// Serve the static Sanity Studio build
const staticServer = require('serve-static')(path.join(__dirname, 'dist'), {
  index: ['index.html']
});

const http = require('http');
const server = http.createServer((req, res) => {
  staticServer(req, res, () => {
    res.statusCode = 404;
    res.end('Not Found');
  });
});

server.listen(port, () => {
  console.log(`Sanity Studio server listening on port ${port}`);
});
