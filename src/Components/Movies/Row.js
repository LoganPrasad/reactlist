import React , { useState , useEffect } from 'react'
import axios from '../../Utility/axios'
import '../../CSS/row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseURL="https://image.tmdb.org/t/p/original/";


function Row({title, fetchURL, largeImage }) {


const [movies, setMovies] = useState( [] );
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

const HandleClick=(movie)=>{
    if(trailerURL)
    {
        setTrailerURL("");
        
    }
    else
    {
        movieTrailer(movie?.title ||movie?.name || "").then((url)=>{
            
            const URLParams=new URLSearchParams(new URL(url).search);
            console.log(URLParams);
            setTrailerURL(URLParams.get('v'));


        }).catch(error=>console.log(error));
    }
}

useEffect(() => {
    async function fetchdata(){
        
        const request=await axios.get( fetchURL );
        setMovies(request.data.results);
        console.log(request.data.results)
       return request;
    }
    fetchdata();
}, [fetchURL])
    return (
        <div>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map( movie=>(
                    <img  
                    key={movie.id}
                    className={`row_poster ${largeImage && 'row_poster_large'}`} 
                    src={`${ baseURL }${
                        largeImage? movie.poster_path:movie.backdrop_path
                    }`} alt={movie.Name} 
                    onClick={()=>HandleClick(movie)}
                    ></img>
                )


                )}
            </div>
          {trailerURL && <YouTube videoId={ trailerURL } opts={opts}></YouTube>}
        </div>
    )
}

Row.propTypes = {

}

export default Row


 