import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PetCard = ({ pet }) => {
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const posterUrl =
    pet.photoUrls &&
    pet.photoUrls.length > 0 &&
    isValidUrl(pet.photoUrls[0])
      ? pet.photoUrls[0]
      : "https://petstore.swagger.io/pet/placeholder"; // Replace with your default image URL

  const detailsUrl = `/pet/${pet.id}`;

  return (
    <div className="col-md-4 col-12 my-4 p-2">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={pet.name || "Pet Image"}
        />
        <div className="card-body">
          <h5 className="card-title">{pet.name}</h5>
          <Link to={detailsUrl} className="btn btn-primary">
            Pet details
          </Link>
        </div>
      </div>
    </div>
  );
};

PetCard.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // other properties
  }).isRequired,
};

export default PetCard;
