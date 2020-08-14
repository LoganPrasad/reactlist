import React, { useState, useEffect } from 'react'

import axios from '../../Utility/axios';
import '../../CSS/banner.css'
import MovieTrailer from './MovieTrailer';
const baseURL="https://image.tmdb.org/t/p/original/";

function Banner({fetchURL}) {
    const [banner, setBanner]=useState({});
    const [triggerTrailer, setTriggerTrailer]=useState(false);
  
   const  HandleClick=() =>
   {
    if(triggerTrailer)
    {
        setTriggerTrailer(false)
    }
    else{
        setTriggerTrailer(true)
    }
   }   

    useEffect(() => {
       
        async function fetchBanner()
        {
           // console.log(fetchURL);
            const request=await axios.get( fetchURL );
            var index=Math.floor(Math.random() * (19 - 0) + 0);
            
            console.log(request.data.results[index]);
            setBanner(request.data.results[index]);
            return request;

        }
        fetchBanner();
    }, [])
    return (
        <div>
            {banner?.id>0 &&
        <div className='banner' style={{
           
               backgroundSize:'cover',
               backgroundImage: `url("${baseURL}${banner.backdrop_path}")`,
               backgroundPosition:'center center',

            }}
            onClick={()=>HandleClick()}
            >
<div className='banner_content'>    
                <h1>
                    {banner?.title || banner?.name ||banner?.original_name}
                </h1>
                <div className='banner_overview'>
                    {banner?.overview}

                </div>
           </div>
           <div className='banner_trailer'>
           {triggerTrailer && <MovieTrailer movie={ banner } ></MovieTrailer>}
           </div>

        </div>
}
         
        </div>
        
    )
}


export default Banner

