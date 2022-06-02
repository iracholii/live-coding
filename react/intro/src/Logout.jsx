import React from 'react';

// input: props obj (onLogout: callback)
// output: jsx
const Logout = ({ onLogout }) => (
  <button onClick={onLogout} className="logout btn">
    Logout
  </button>
);

export default Logout;
