import { useState } from "react";
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import './App.css'
import app from './firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new  GoogleAuthProvider();

function App() {

  const [user, setUser] = useState(null);
const handleGoogleSignIn = () => {
  signInWithPopup (auth, googleProvider)
  .then(result => {
    const loggedUser = result.user
    console.log(loggedUser)
    setUser(loggedUser)
  })
  .catch(error => {
    console.log(error)
  })
}

  return (
    <>

      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google sign In</button>
      {user &&
      <div>
        <h4>User: {user.displayName}</h4>
      </div>
      }
    </>
  )
}

export default App