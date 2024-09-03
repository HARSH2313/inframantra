import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../api';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadProperties = async () => {
      const data = await fetchProperties();
      setProperties(data);
    };
    loadProperties();
  }, []);

  return (
    <div>
      <h2>Properties in Gurgaon</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Properties;
