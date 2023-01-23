import React from 'react'
import Navbar from '../Components/Navbar'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Loginpage() {
  return (
    <div className="bg-black/60 ">
      <div className='bg-black'>
        <Navbar />
        </div>
    
      <div className="bg-gradient-to-t from-black via-transparent to-black h-screen">
        
       
        <div className='bg-black/60 h-auto w-[28rem] mx-auto mb-0 px-12 py-12 space-y-8 rounded-lg'>
       <p className='text-white font-bold text-2xl'>Sign IN</p>
       <input  name="email"  type='email' placeholder='Email or Phone Number' className='text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]'/>
       <input name="pass" type='password' placeholder='Password' className='text-slate-400 font-semibold bg-zinc-700 px-4 py-2 rounded-md w-[22rem]'/>
        <div className='flex flex-col space-y-2 text-gray-600'>
          <button  className='text-white bg-red-600 px-4 py-3 rounded-md w-[22rem] font-bold'>Sign In</button>
          <div className='flex justify-between text-xs text-slate-300'>
              <p><CheckBoxIcon/> Remember Me </p>
              <p>Need Help</p>
          </div>
          </div>
           
           <div className='text-slate-500 space-y-2 pt-4 font-semibold'>
              <p> "Already have an account ? " <button  className="text-white hover:underline cursor-pointer"></button></p>
              <p>This page is protected by Google <br/>reCaptche to ensure you are not a bot.<br/><span className='text-blue-800'>Learn More</span></p>
           </div>
     </div>
       
         
        </div>
      </div>
 
  )
}

export default Loginpage