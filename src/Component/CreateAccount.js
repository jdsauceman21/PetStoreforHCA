import React, { useState } from 'react';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Simulated create account endpoint (replace this with your actual API endpoint)
  const createAccountEndpoint = '/user/create';

  const handleCreateAccount = async () => {
    try {
      setLoading(true);

      // Add validation logic here if needed (e.g., check if passwords match)

      const response = await fetch(createAccountEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Account created successfully, you might want to redirect the user to the login page
        console.log('Account created successfully!');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to create account');
      }
    } catch (error) {
      console.error('Error during account creation:', error);
      setError('An error occurred during account creation');
    } finally {
      setLoading(false);
    }
  };

  return (
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
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCreateAccount} disabled={loading}>
        {loading ? 'Creating Account...' : 'Create Account'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateAccount;
