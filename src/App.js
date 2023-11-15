import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Component/NavBar';
import Home from './Component/Home';
import SearchView from './Component/SearchView';
import LoginPage from './Component/LoginPage';

function App() {
  const [searchText, setSearchText] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setLoggedIn(userLoggedIn);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('userLoggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem('userLoggedIn', 'false');
  };

  return (
    <div>
      <Navbar
        loggedIn={loggedIn}
        searchText={searchText}
        setSearchText={setSearchText}
        onLogout={handleLogout}
      />
      <Routes>
        <Route
          path="/Home"
          element={loggedIn ? <Home /> : <Navigate to="/LoginPage" />}
        />
        <Route
          path="/LoginPage"
          element={
            <LoginPage
              onLogin={handleLogin}
              isLoggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/search"
          element={
            loggedIn ? (
              <SearchView keyword={searchText} />
            ) : (
              <Navigate to="/LoginPage" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
