import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './Component/NavBar';
import List from './Component/List';
import withListLoading from './Component/withListLoading';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';

function App() {

  const [searchResults, setsearchResults] = useState([]);
  const [ searchText, setSearchText] = useState('');
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    pets: null,
  });
  
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://petstore.swagger.io/v2/pet/findByStatus?status=available`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((pets) => {
        setAppState({ loading: false, pets: pets });
      });
  }, [setAppState]);
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
      </Routes>
    </div>
  );
}
export default App;
