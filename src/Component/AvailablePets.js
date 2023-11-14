import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import PetCard from "./PetCard";

const AvailablePets = () => {
  const api = "https://petstore.swagger.io/v2/pet/findByStatus?status=available";
  const [availablePets, setAvailablePets] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setAvailablePets(data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  }, []);

  if (loader) {
    return <Loader />;
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

export default AvailablePets;
