import React from 'react'
import Landingpagebody from '../Components/Landingpagebody'
import Navbar from '../Components/Navbar'

function Landingpage() {
   
  return (
    <div  className='banner object-cover bg-no-repeat w-screen h-screen '>
    
        <Navbar/>
        <Landingpagebody/>

    </div>
  )
}

export default Landingpage