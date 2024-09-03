const API_URL = '/api';

export const fetchProperties = async () => {
  const response = await fetch(`${API_URL}/properties`);
  return response.json();
};

export const fetchServices = async () => {
  const response = await fetch(`${API_URL}/services`);
  return response.json();
};

export const fetchTestimonials = async () => {
  const response = await fetch(`${API_URL}/testimonials`);
  return response.json();
};

export const fetchAboutUs = async () => {
  const response = await fetch(`${API_URL}/about-us`);
  return response.json();
};

export const submitContactUs = async (contactData) => {
  const response = await fetch(`${API_URL}/contact-us`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactData),
  });
  return response.text();
};
