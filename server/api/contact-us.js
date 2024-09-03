const express = require('express');
const { submitContactUs } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const contactData = req.body;
    const responseMessage = await submitContactUs(contactData);
    res.status(200).send(responseMessage);
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
