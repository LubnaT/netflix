import React from 'react'

function Navbar() {
  return (
    <div className=' bg-black  fixed h-[100px] w-full z-10'>
         <div className=' max-w-[100rem] mx-auto flex justify-between py-4 items-center'>
        <div className=' text-white font-bold text-4xl '>
            NETFLIX
        </div>
        <div className=' flex text-white'>
            <p>Movies</p>

        </div>

    </div>

    </div>
  )
}

export default Navbar