// src/App.jsx
import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  );
};

export default App;

     
