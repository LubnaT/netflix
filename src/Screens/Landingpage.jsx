import React from 'react'
import Landingpagebody from '../Components/Landingpagebody'
import Navbar from '../Components/Navbar'

function Landingpage({Cred ,SCred ,handle}) {
   
  return (
    <div  className='banner object-cover bg-no-repeat w-full h-full '>
    
        <Navbar/>
        <Landingpagebody Cred={Cred} SCred={SCred} handle={handle}/>

    </div>
  )
}

export default Landingpage