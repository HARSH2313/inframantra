const express = require('express');
const { getTestimonials } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const testimonials = await getTestimonials();
    res.status(200).json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
