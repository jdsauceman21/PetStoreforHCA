import { Link } from "react-router-dom";




const PetCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const detailsUrl = `/movies/${movie.id}`;
    const noImg = "../no-image.png";
    const posterUrlNull = `https://image.tmdb.org/t/p/w500/null`;
  
    return (
      <div className="col-md-4 col-12 my-4 p-2">
        <div className="card">
          <img
            src={posterUrl !== posterUrlNull ? posterUrl : noImg}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailsUrl} className="btn btn-primary">
              Pet details
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default PetCard;