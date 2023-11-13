import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const PetView = () => {
    const {id} = useParams();
    console.log(id);
    const [PetDetails, setPetDetails] = useState({});

    useEffect(() => {
        const PetUrl = 'https://petstore.swagger.io/v2/swagger.json';

        fetch(PetUrl)
        .then((res) => res.json())
        .then((data) => {
            setPetDetails(data);
            console.log(data);
        });
    }, [id]);
    const posterPath = `https://image.tmdb.org/t/p/w500/${PetDetails.poster_path}`;
    const backdropUrl =`https://image.tmdb.org/t/p/original/${PetDetails.backdrop_path}`  
    return (
      <>
        <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <img src={posterPath} alt="" srcset="" />
            </div>
            <div className="col-md-9">
              <strong>Name</strong>
              <h2>{PetDetails.petid}</h2>
              <h3>{PetDetails.tagline}</h3>
              <strong>Overview</strong>
              <p>{PetDetails.overview}</p>
              <strong>Release date</strong>
              <p>{PetDetails.release_date}</p>
              <strong>Status</strong>
              <p>{PetDetails.status}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default PetView;