import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import  { useEffect, useState } from "react";

function Navbar() {

  const [show ,setShow] = useState(false) ;

    function transition(){
        if(window.scrollY > 250){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll" , transition);
        return ()=>window.removeEventListener("scroll" ,transition) ;
    },[])

  return (
    <div className={` ${show ? " bg-black ":" bbg-gradient-to-r from-black to-black via-transparent "} fixed top-0  w-full  z-10 `}>
         <div className="flex w-full mx-[60px] justify-between py-4 items-center">
        <div className='flex'>
            <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            className='h-24 w-40'/>
        </div>
        
        <div class="flex space-x-8 mr-[120px] items-center " > 
        <div className=' p-1 max-w-max rounded-md border border-1 border-solid border-zinc-100'>
          <LanguageIcon className='text-white'/>
        <select class=" bg-transparent text-sm text-white">
            <option class="font-bold text-sm bg-black text-white">English</option>
            <option class="font-bold  text-sm bg-black text-white">Hindi</option>
           </select>
           

        </div>
          
            
            <div className=''>
            <button class="py-2 px-4 rounded-md  text-sm bg-red-600 text-white">Sign In</button>
            </div>
            
         </div>
    </div>
        </div>

  )
}

export default Navbar