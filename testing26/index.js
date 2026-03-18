const express = require('express');
const app = express();
const path = require('path');

// Serve static files from testing26 folder
app.use(express.static(path.join(__dirname, 'testing26')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'testing26', 'index.html'));
});

// Other page
app.get('/lol', (req, res) => {
  res.sendFile(path.join(__dirname, 'testing26', 'lol.html'));
});

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'testing26', '404.html'));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});