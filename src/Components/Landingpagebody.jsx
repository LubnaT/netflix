import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Loginpage from '../Screens/Loginpage';
import Homescreen from '../Screens/Homescreen';

function Landingpagebody() {
  const [login,setlogin] = useState("")
  return (
    <div>
             <div className="bg-black/10 overflow-x-hidden overflow-y-hidden"> 
            <div className="mx-[200px] h-[700px] ">
            <h1 className="block pt-[250px] text-center text-white font-semibold text-5xl mx-36">Unlimited movies, TV shows and more.</h1>
                <h2 className=" mt-[25px] ml-[60px] mr-[80px] pt[10px] block text-center text-white text-2xl ">Watch Anywhere. Cancel Anytime.</h2>
            <form>
                <h3 className=" mt-[30px] mx-[150px] pt[10px] block text-center text-white text-xl">Ready to Watch? Enter your Email to create or restart your membership</h3>
           
                <div className=" relative mt-[30px] mx-20 flex border-1 border-solid border-black">
                  <div className='w-[400px] mx-[70px]'>
                   <input type="email" name="email" className="text-black text-[16px] cursor-text h-[48px] w-[470px] pt-[10px] px-[10px] border-1 border-solid border-[#8c8c8c]  block" />         
                   <label className="text-[#8c8c8c] left-20 text-sm font-normal absolute top-[15px] text-left hover:translate-y-[-50%] hover: transition-[font] hover: duration-[0.1s] hover: ease-in-out ">Email Address</label> 
                  </div>
                <div className="justify-center items-center flex border-l-2 border-solid border-black/60">
                    <button onClick={()=>setlogin(<Loginpage/>) } id="submit" type="submit" name="submit"  
                      className="bg-red-700 text-center text-2xl font-semibold text-white  w-[200px] h-[48px] pb-2">Get Started 
                     <span className="text-xl font-semibold text-white ">
                       <ArrowForwardIosIcon/> 
                       </span>
                    </button>
                </div>
                </div>
            </form>
            </div>

        </div>
    </div>
  )
}

export default Landingpagebody