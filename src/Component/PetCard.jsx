import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
  // Assuming Swagger Petstore provides a 'photoUrls' property
  const posterUrl = pet.photoUrls && pet.photoUrls.length > 0
    ? pet.photoUrls[0]
    : "https://https://petstore.swagger.io/#/";

  const detailsUrl = `/pet/${pet.id}`;

  return (
    <div className="col-md-4 col-12 my-4 p-2">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={pet.name}
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

export default PetCard;
