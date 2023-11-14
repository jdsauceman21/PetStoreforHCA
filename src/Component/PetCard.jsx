import { Link } from "react-router-dom";

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
        <img src={posterUrl} className="card-img-top" alt={pet.name} />
        <div className="card-body">
          {/* <h5 className="card-title">{pet.category}</h5> */}
          <h5 className="card-title">{pet.name}</h5>
          <h5 className="card-title">{pet.status}</h5>
          <Link to={detailsUrl} className="btn btn-primary">
            Pet details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
