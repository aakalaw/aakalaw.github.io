import React from 'react';
import { signInWithGoogle } from '../../firebase';

const Login = () => {
  const handleSignInClick = () => {
    signInWithGoogle()
      .then((result) => {
        /*
        eslint no-alert: 0
        */
        if (result.user.email === process.env.REACT_APP_MY_EMAIL) {
          alert('Success login.');
        } else {
          throw new Error('Unauthorized access');
        }
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        alert('Unauthorized access. Please sign in with the authorized email.');
      });
  };

  return (
    <div className="dashboard">
      <button type="button" onClick={handleSignInClick}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
