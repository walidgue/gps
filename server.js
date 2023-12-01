const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/collect-location', (req, res) => {
  const { lat, lon } = req.body;
  // Process and store the location data as needed
  console.log('Received location:', { latitude: lat, longitude: lon });
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on :${PORT}`);
});
