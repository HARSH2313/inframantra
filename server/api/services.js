const express = require('express');
const { getServices } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const services = await getServices();
    res.status(200).json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
