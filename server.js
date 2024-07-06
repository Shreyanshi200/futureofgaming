
const express = require('express');
const app = express();
const port = 5000;

// CORS middleware to allow requests from your React app
const cors = require('cors');
app.use(cors());

// Sample data
const settingsData = {
  region: "europe - de",
  punkbuster: "on",
  fairfight: "on",
  password: "off",
  preset: "normal",
};

const advancedData = {
  minimap: "on",
  onlySquadLeaderSpawn: "off",
  vehicles: "on",
  teamBalance: "on",
  minimapSpotting: "on",
  hud:"on",
  Pvehiclecam:"on",
  regenerativehealth:"on",
  killcam:"on",
  friendlyfire:"off",
  dspotting:"on",
  enemynametags:"on",
};

const rulesData = {
  tickets: 400,
  vehicleSpawnDelay: 25,
  bulletDamage: 100,
  kickAfterTeamKills: 5,
  playerHealth: 100,
  playerrespawn:100,
  kickafteridle:300,
  banafterkicks:3,

};

// Endpoints
app.get('/api/settings', (req, res) => {
  res.json(settingsData);
});

app.get('/api/advanced', (req, res) => {
  res.json(advancedData);
});

app.get('/api/rules', (req, res) => {
  res.json(rulesData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
