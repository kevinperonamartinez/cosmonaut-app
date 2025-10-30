const express = require('express');
const router = express.Router();
const axios = require('axios');

const NASA_API_KEY = process.env.NASA_API_KEY;


router.get('/news', async (req, res) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=5`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});


router.get('/event-of-the-day', async (req, res) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching event' });
  }
});


router.get('/missions', async (req, res) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/launches/latest');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching missions' });
  }
});

module.exports = router;
