import Header from './components/Header';
import LoginPage from './components/LoginPage';

import { firebase } from './firebase/firebase';

function App () {
  const title = 'What is happening ???'
  return (
    <div className='App'>
      <Header title={title} />
      <LoginPage />
    </div>
  );
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
})

export default App;
