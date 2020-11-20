import React from 'react';
import { firebase, googleAuthProvider } from '../firebase/firebase';

function LoginPage () {
  return (
    <div>
      <button onClick={() => {
        firebase.auth().signInWithPopup(googleAuthProvider)
      }}
      >Login
      </button>
    </div>
  )
}

export default LoginPage;
