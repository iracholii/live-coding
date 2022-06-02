import React from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';

// state
// isLoggedIn: boolean
// isProcessing: boolean

// algo
// 1. show login by default ++
// 2. after login click show spinner for 2 seconds ++
// 3. hide spinner and show logout ++
// 4. after logout click show login ++

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    // input: obj
    // output: undefined
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;

    if (isProcessing) {
      return <Spinner />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }

    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
