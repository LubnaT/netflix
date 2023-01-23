import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Navbar2() {
  return (
    <div className=" bg-black fixed top-0 w-full z-10">
        <div className="flex w-full mx-[60px] justify-between items-center">
         <div className='flex'>
             <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
               className='h-14 w-40'/>
         </div>
         <div className='flex text-white text-base space-x-4'>
            <div>TV Shows</div>
            <div>Movies</div>
            <div>Recently Added</div>
            <div>MyList</div>
         </div>
         <div>
            <SearchIcon/>
             
         </div>

        </div>

    </div>
  )
}

export default Navbar2