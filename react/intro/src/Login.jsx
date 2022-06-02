import React from 'react';

// input: props obj (onLogin: callback)
// output: jsx
const Login = ({ onLogin }) => (
  <button onClick={onLogin} className="login btn">
    Login
  </button>
);

export default Login;
