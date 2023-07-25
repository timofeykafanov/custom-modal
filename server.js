const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const contentType = getContentType(ext);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

function getContentType(ext) {
  switch (ext) {
    case '.js':
      return 'text/javascript';
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    default:
      return 'text/plain';
  }
}

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// const express = require('express');
// const axios = require('axios');

// const app = express();
// const PORT = 3000;
// const API_KEY = '366009434e4f01a56075e7f2954f65c2d65c3a29';

// app.get('/deals', async (req, res) => {
//   try {
//     const response = await axios.get('https://api.pipedrive.com/v1/deals', {
//       params: {
//         api_token: API_KEY,
//         // Другие параметры запроса, если необходимо
//       },
//     });

//     res.json(response.data);
//   } catch (error) {
//     console.error('Error fetching data from Pipedrive API:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
