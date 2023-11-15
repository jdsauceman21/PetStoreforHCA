import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import AvailablePets from './AvailablePets';

const Home = () => {
  const [petImage, setPetImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch pet data
    fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setPetImage(data[0].photoUrls[0]);
        } else {
          setError('No available pets found.');
        }
      })
      .catch(error => {
        console.error('Error fetching pet data:', error);
        setError('Error fetching pet data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <Hero text="Welcome to the Pet Store" backdrop={petImage} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <AvailablePets />}
    </>
  );
};

export default Home;
