const express = require('express');
const path = require('path');
const propertiesRouter = require('./api/properties');
const servicesRouter = require('./api/services');
const testimonialsRouter = require('./api/testimonials');
const aboutUsRouter = require('./api/about-us');
const contactUsRouter = require('./api/contact-us');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api/properties', propertiesRouter);
app.use('/api/services', servicesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/about-us', aboutUsRouter);
app.use('/api/contact-us', contactUsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
