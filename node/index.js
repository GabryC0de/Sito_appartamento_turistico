const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5500', // front-end port
    credentials: true
}));

// const folderPath = './Immagini sito';
const folderPath = path.join(__dirname, '../Immagini sito');
console.log(folderPath);
app.get('/get-filenames', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading folder' });
    }
    res.json({ files  });
    // console.log(files);
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});