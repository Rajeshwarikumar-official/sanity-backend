const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

console.log('Current directory:', __dirname);
fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
  } else {
    console.log('Directory contents:', files);
  }
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for all routes
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  
  console.log('Attempting to serve:', indexPath);
  
  fs.access(indexPath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Error: index.html not found');
      return res.status(404).send('index.html not found. Make sure the build process completed successfully.');
    }
    res.sendFile(indexPath);
  });
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(Sanity Studio server listening on port ${port});
});
