import React from 'react'
import Row from '../Components/Row';
import Navbar2 from '../Components/Navbar2';
import requests from '../Request'
import  { useEffect } from "react";
import axios from '../axios'
import Homescreenbody from '../Components/Homescreenbody';

function Homescreen() {

  useEffect(()=>{
    async function ft(){
      await axios.get("/movie/297762/videos?api_key=a93b322b42e053f2037296980a90a436&language=en-US")  //doubt
      .then(res=>console.log(res)).catch(er => console.log(er))
    }

    ft() ;
  },[])

  return (
    
       <div>
          <Navbar2/>
          <Homescreenbody/>
          <div className=' max-w-[100rem] mx-auto py-12 relative overflow-y-hidden'>
           <Row title={"Netflix Orignals"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}  />
           <Row title={"Trending"} fetchUrl={requests.fetchTrending}  />
           <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
           <Row title={"Action"} fetchUrl={requests.fetchActionMovies} />
           <Row title={"Romance"} fetchUrl={requests.fetchRomanceMovies} />
           <Row title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
           <Row title={"Documentries"} fetchUrl={requests.fetchDocumentaries} />
           <Row title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
             {/* <Row title={"Sci-Fi"} fetchUrl={requests.} /> */}
            <div className=' h-40 bg-green-400' />
          </div>
       </div>

   
  )
}

export default Homescreen
