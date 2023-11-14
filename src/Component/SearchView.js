import Hero from "./Hero";
import PetCard from "./PetCard";

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for: ${keyword}`;
  const resHtml = searchResults.map((pet, i) => (
    <PetCard pet={pet} key={i} />
  ));
  
    if (searchResults.length > 0 && keyword !== "") {
      return (
        <>
                  
          <Hero text={title} />
          {resHtml && (
            <div className="container">
              <div className="row">{resHtml}</div>
            </div>
          )}
        </>
      );
    } else if (keyword === "") {
  
      return <div className="d-flex container justify-content-center align-items-center min-vh-100">
                <h1>Enter pet</h1>
            </div>;
    } else {
      return <div className="d-flex container justify-content-center align-items-center min-vh-100">
                <h1>Not found!!</h1>
             </div>;
    }
  };
  
  export default SearchView;