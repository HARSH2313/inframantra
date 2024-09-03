const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const connectDb = async () => {
  await client.connect();
};

const disconnectDb = async () => {
  await client.end();
};

const getProperties = async () => {
  await connectDb();
  const result = await client.query('SELECT * FROM properties WHERE location = $1', ['Gurgaon']);
  await disconnectDb();
  return result.rows;
};

// Define similar functions for other models
const getServices = async () => {
  return ['Site Visit', 'Consultancy', 'Seamless Assistance', 'Resale Services'];
};

const getTestimonials = async () => {
  return [
    { name: 'Alice', rating: 5, testimonial: 'Great service!' },
    { name: 'Bob', rating: 4, testimonial: 'Very helpful.' },
  ];
};

const getAboutUs = async () => {
  return { description: 'We are a leading property consultancy firm.' };
};

const submitContactUs = async (contactData) => {
  return 'Contact form submitted successfully';
};

module.exports = {
  getProperties,
  getServices,
  getTestimonials,
  getAboutUs,
  submitContactUs,
};
