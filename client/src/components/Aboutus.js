import React, { useEffect, useState } from 'react';
import { fetchAboutUs } from '../api';

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState({});

  useEffect(() => {
    const loadAboutUs = async () => {
      const data = await fetchAboutUs();
      setAboutUs(data);
    };
    loadAboutUs();
  }, []);

  return (
    <div>
      <h2>About Us</h2>
      <p>{aboutUs.description}</p>
    </div>
  );
};

export default AboutUs;
