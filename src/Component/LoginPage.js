import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ onLogin, isLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      await login(username, password);
      onLogin();
    } catch (error) {
      console.error('Error during login:', error);
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        onLogout();
      })
      .catch((error) => {
        console.error('Error during logout:', error);
        setError('An error occurred during logout');
      });
  };

  const onLogout = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      const loginEndpoint = '/user/login';
      fetch(loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          if (response.ok) {
            resolve();
          } else {
            reject(new Error('Invalid username or password'));
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const logout = () => {
    return new Promise((resolve, reject) => {
      
      resolve();
      
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        {isLoggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </label>
            <br />
            <button onClick={handleLogin} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <p>
              Don't have an account?{' '}
              <Link to="/CreateAccount">Create one</Link>
            </p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
