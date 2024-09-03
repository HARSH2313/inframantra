const express = require('express');
const { getAboutUs } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const aboutUs = await getAboutUs();
    res.status(200).json(aboutUs);
  } catch (error) {
    console.error('Error fetching about us:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
