import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import AvailablePets from './AvailablePets';

const Home = () => {
  const [petImage, setPetImage] = useState(null);

  useEffect(() => {
    // Fetch pet data
    fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
      .then(response => response.json())
      .then(data => {
        // Set the pet image URL from the response
        if (data.length > 0) {
          setPetImage(data[0].photoUrls[0]);
        }
      });
  }, []);  // Empty dependency array to run the effect only once

  return (
    <>
      <Hero text="Welcome to the Pet Store" backdrop={petImage} />
      <AvailablePets />
    </>
  );
};

export default Home;
