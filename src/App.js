import React, { useEffect, useState } from 'react';
import Navbar from './Component/NavBar';
import Home from './Component/Home';
import SearchView from './Component/SearchView';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=available`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
      </Routes>
    </div>
  );
}

export default App;
