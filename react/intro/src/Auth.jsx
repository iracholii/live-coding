import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

// state
// isLoggedIn: boolean
// isProcessing: boolean

class Auth extends React.Component {
  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
    );
  }
}

export default Auth;
