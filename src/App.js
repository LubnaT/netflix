
import './App.css';

import { useState } from 'react'
import Landingpage from './Screens/Landingpage';
import Loginpage from './Screens/Loginpage';

function App() {
  const [show,setshow] = useState(true)
  return (
    <div className="App">
     {show ? <Landingpage/> : <Loginpage/>}
    </div>
  );
}

export default App;
