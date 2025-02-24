const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

const { getCoordinates, getWeather } = require("./main");

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
    res.json({ files });
    // console.log(files);
  });
});


app.get('/weather-request', async (req, res) => {
  let city = "Riva del Garda";

  let coords = await getCoordinates(city);
  if (!coords) return res.status(404).json({ error: 'City not found.' });

  const weather = await getWeather(coords.lat, coords.lon);
  if (!weather) return res.status(500).json({ error: 'Weather data unavailable.' });

  res.json({
    city,
    coordinates: coords,
    weather
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});