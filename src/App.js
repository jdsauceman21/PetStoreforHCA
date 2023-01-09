import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import withListLoading from './withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    pets: null,
  });
  
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=pending&status=sold`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((pets) => {
        setAppState({ loading: false, pets: pets });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Pet Store</h1>
      </div>
      <div className='pet-container'>
        <ListLoading isLoading={appState.loading} pets={appState.pets} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Jarrett Sauceman
        </div>
      </footer>
    </div>
  );
}
export default App;
