import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then(function (result) {
      console.log('successfully login')
    }).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);

      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}
