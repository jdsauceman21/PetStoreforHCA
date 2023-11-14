import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

const PetView = () => {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState({});

  useEffect(() => {
    const petUrl = `https://petstore.swagger.io/v2/pet/${id}`;

    fetch(petUrl)
      .then((res) => res.json())
      .then((data) => {
        setPetDetails(data);
        console.log(data);
      });
  }, [id]);

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
          </div>
        </div>
      </div>
    </>
  );
};

export default PetView;
