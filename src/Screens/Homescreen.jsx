import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import Navbar from '../Components/Navbar';
import Navbar2 from '../Components/Navbar2';

function Homescreen() {
  return (
         <div className=" bg-[url('https://dobienews.scuc.txed.net/wp-content/uploads/2017/05/20161201_stranger_things_node-1.jpg')] 
         bg-no-repeat bg-cover bg-center w-full "
    >
      <div className="h-[450px] bg-gradient-to-t from-black bg-gradient-to-r from-black  ">
        <Navbar2/>
        <div className=" text-white  px-10 pt-10">
          <div className="flex">
             <img
               className="h-10 w-10 "
               src="https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
              />
             <a className="mt-2 ">S E R I E S</a>
           </div>
            <a className="text-5xl font-black font-serif ">Stranger Things</a>
        </div>
        <div className="mt-2 font-bold space-x-2 ">
          <a href={''} className="bg-white px-5 py-1 ml-12 ">
             {" "}
             <PlayArrowIcon />
             Play
          </a>
          <button className="bg-gray-500 text-white px-5 py-1">
             <AddIcon /> My List
          </button>
        </div>
        <div className="text-white ml-12 mt-4 text-xl">
         
        </div>

        <div className="mt-12 px-8 font-bold py-4">
          <a className="text-white text-xl">Top Pics For You</a>
        </div>
      </div>
    </div>
   
  )
}

export default Homescreen
