const express = require('express');
const { getProperties } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const properties = await getProperties();
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
