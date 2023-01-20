import React from 'react'

function Landingpagebody() {
  return (
    <div>
             <div className=""> 
            <div className=" mx-[200px] h-[700px]">
            <h1 className=" block pt-[180px] text-center text-white font-semibold text-5xl ">Unlimited movies, TV shows and more.</h1>
                <h2 className="font-medium mt-[25px] ml-[60px] mr-[80px] pt[10px] block text-center text-white text-2xl ">Watch Anywhere. Cancel Anytime.</h2>
            <form>
                <h3 className="font-medium mt-[30px] mx-[150px] pt[10px] block text-center text-white text-xl">Ready to Watch? Enter your Email to create or restart your membership</h3>
           
                <div className=" relative mt-[30px] mx-[100px] flex-row flex">
                    
                <input type="email" name="email" className=" text-black text-[16px] cursor-text h-[48px] w-[650px] pt-[10px] pr-[10px] pl-[10px] border-1 border-solid border-[#8c8c8c] box-border block" />         
                 <label className="text-[#8c8c8c] text-sm font-normal pl-[20px] absolute top-[20px] text-left hover:translate-y-[-50%] hover: transition-[font] hover: duration-[0.1s] hover: ease-in-out ">Email Address</label>    
                <div className="justify-center items-center flex">
                    <button id="submit" type="submit" name="submit" onClick="open()" className="bg-red-600 text-center text-2xl font-semibold text-white  w-[200px] h-[48px] pb-2">Get Started <span className="text-3xl font-semibold text-white "> ></span></button>
                  
                </div>
                
                </div>
            </form>
            </div>

        </div>
    </div>
  )
}

export default Landingpagebody