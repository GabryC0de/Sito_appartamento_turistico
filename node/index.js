const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..')));

const { getCoordinates, getWeather } = require("./weatherAPI");

// const folderPath = './Immagini sito';
const folderPath = path.join(__dirname, '../Immagini sito');

app.get('/get-filenames', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading folder' });
    }
    res.json({ files });
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
    weather: weather.instant,
    forecast: weather.next_1_hours
  });
});

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});