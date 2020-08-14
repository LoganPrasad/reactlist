import React , { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function MovieTrailer({movie}) {
    const [trailerURL, setTrailerURL] = useState("");
    const opts={
        height:"390",
        width:"100%",
        playerVars:
        {
            // https://developers.google.com/youtube/player_parameters
            autoplay:1,
    
        },
    }
    
    
     useEffect(() => {

        async function fetTrailer()
        {
        movieTrailer(movie?.title ||movie?.name || "").then((url)=>{
                
            const URLParams=new URLSearchParams(new URL(url).search);
            console.log(URLParams);
            setTrailerURL(URLParams.get('v'));
            return URLParams;

        }).catch(error=>console.log(error));
        }
        fetTrailer();
     }, [movie])  
 
    
    
    
    
    return (
        <div>
            {trailerURL && <YouTube videoId={ trailerURL } opts={opts}></YouTube>}
        </div>
    )
}



export default MovieTrailer

        