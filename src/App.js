
import './App.css';

import { useState } from 'react'
import Landingpage from './Screens/Landingpage';
import Loginpage from './Screens/Loginpage';
import Homescreen from './Screens/Homescreen';

function App() {
  const [show,setshow] = useState(true)
  return (
    <div className="App">
     {show ? <Homescreen/> : <Loginpage/>}
    </div>
  );
}

export default App;
