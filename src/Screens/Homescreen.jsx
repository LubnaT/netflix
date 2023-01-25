import React from 'react'
import Row from '../Components/Row';
import Navbar2 from '../Components/Navbar2';
import requests from '../Requests'
import React, { useEffect, useState } from "react";
import axios from '../axios'
import Homescreenbody from '../Components/Homescreenbody';

function Homescreen() {

  const [movies, setMovies] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      await axios.get(requestss.fetchNetflixOriginals)
      .then(response => {
        setMovies(response.data.results[Math.floor(Math.random() * (response.data.results.length -1))])
      }).catch(err => console.log(err))
      
    }

    fetchData() ;
  },[])

  function truncate(description , n){
    return description?.length > n ? description.substr(0,n) +" . . ." : description ;

  }

  console.log(movies)
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
