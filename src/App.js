
import './App.css';

import { useState } from 'react'
import Landingpage from './Screens/Landingpage';
import { Route, Routes } from "react-router-dom";
import Loginpage from './Screens/Loginpage';
import Homescreen from './Screens/Homescreen';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase'
import WatchMovie from "./Screens/WatchMovie";



function App() {
  const auth = getAuth(app);



  const schema = {email : "" , pass : ""} ;
  const [ cred  ,setCred ] = useState(schema) ;
  const [user ,setUser] = useState(true) ;


  const createUser = async () => {
    await createUserWithEmailAndPassword(auth, cred.email, cred.pass)
    .then(userCredential => {
      const u = userCredential.user;
      setUser(u)
    })
    .catch(error => {
      setUser(null)
    });
  }



  const loginUser = async () => {
    await signInWithEmailAndPassword(auth, cred.email, cred.pass)
    .then(userCredential => {
      const u = userCredential.user;
      setUser(u)
    })
    .catch(error => {
      setUser(null)
    });
  }

  
  return (
    <div className="App bg-black">
        <Routes>
          <Route path="/watch/:movieid/:auth" element={<WatchMovie />} />
          <Route path="/" element={ user ? <Homescreen /> : <Landingpage handle={{createUser ,loginUser}} Cred={cred} SCred={setCred} /> } />
          <Route path="/login" element={<Loginpage Cred={setCred} />} />
        </Routes>
    </div>
  );
}

export default App;
