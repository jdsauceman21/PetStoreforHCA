import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import PetCard from "./PetCard";

const AvailablePets = () => {
  const api = "https://petstore.swagger.io/v2/pet/findByStatus?status=available";
  const [availablePets, setAvailablePets] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        // Check if data is an array before filtering
        if (Array.isArray(data)) {
          const filteredPets = data.filter((pet) => pet.photoUrls && pet.photoUrls.length > 0);
          setAvailablePets(filteredPets);
        } else {
          setError("Invalid data format");
        }
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoader(false);
      });
  }, []);

  if (loader) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {availablePets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
      </div>
    </div>
  );
};

AvailablePets.propTypes = {
  availablePets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      photoUrls: PropTypes.arrayOf(PropTypes.string),
      // Add other properties as needed
    })
  ).isRequired,
};

export default AvailablePets;
