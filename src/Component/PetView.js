import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

const PetView = () => {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching pet details for ID:", id);
    const petUrl = `https://petstore.swagger.io/v2/pet/${id}`;

    fetch(petUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch pet details for ID ${id}`);
        }
        return res.json();
      })
      .then((data) => {
        setPetDetails(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!petDetails) {
    return <div>Loading...</div>;
  }

  const posterPath = petDetails.photoUrls && petDetails.photoUrls.length > 0
    ? petDetails.photoUrls[0]
    : "https://placekitten.com/500/300"; // Provide a default image URL

  return (
    <>
      <Hero text={petDetails.name} backdrop={posterPath} />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <img src={posterPath} alt={petDetails.name} />
          </div>
          <div className="col-md-9">
            <strong>Name</strong>
            <h2>{petDetails.name}</h2>
            <strong>Category</strong>
            <p>{petDetails.category && petDetails.category.name}</p>
            <strong>Tags</strong>
            <ul>
              {petDetails.tags && petDetails.tags.map((tag) => (
                <li key={tag.id}>{tag.name}</li>
              ))}
            </ul>
            <strong>Status</strong>
            <p>{petDetails.status}</p>
            {/* Add additional details as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PetView;
