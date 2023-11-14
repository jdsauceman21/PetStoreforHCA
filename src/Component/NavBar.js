import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  const updateSearchText = (e) => {
    navigate('/search');
    setSearchText(e.target.value.trim());
  };

  const searchBtn = (e) => {
    e.preventDefault();
    navigate("/search");
    setSearchText(e.target.value.trim());
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pet Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="filler.htmlnavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cat">
                Pet
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="filler"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/filler.htmlav">
                    Available
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/filler.html">
                    Pending
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/filler.html">
                    Sold
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                aria-disabled="true"
                to="/filler.html"
              >
                Coming Soon
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={searchBtn}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
