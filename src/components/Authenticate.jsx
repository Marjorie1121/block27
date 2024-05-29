// src/components/Authenticate.jsx
import React, { useState } from 'react';

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Authentication failed');
      }

      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Authenticate</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
};

export default Authenticate;

