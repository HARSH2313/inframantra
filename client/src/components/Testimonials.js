import React, { useEffect, useState } from 'react';
import { fetchTestimonials } from '../api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const loadTestimonials = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data);
    };
    loadTestimonials();
  }, []);

  return (
    <div>
      <h2>Testimonials</h2>
      <ul>
        {testimonials.map((test) => (
          <li key={test.name}>
            <strong>{test.name} ({test.rating} stars):</strong> {test.testimonial}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
