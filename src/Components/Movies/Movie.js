import React from 'react'
import Row from './Row';
import requests from '../../Utility/requests';
import Banner from './Banner';


function Movie(props) {
    return (
        <div>
             <div className='app_banner'>
    <Banner title="" fetchURL={requests.fetchTrending}></Banner>
    </div>
    <div className='app_content'>
    <Row title="Netflix Original" fetchURL={requests.fetchNetflixOriginal} largeImage></Row>
     <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
     <Row title="Top Rated" fetchURL={requests.fetchTopRatedMovies}></Row>
     <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
     <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
     <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
     <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
     <Row title="Documentaries" fetchURL={requests.fetchDocumentries}></Row>

</div>

        </div>
    )
}





export default Movie

