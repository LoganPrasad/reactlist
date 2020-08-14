const ApiKey="0e72dbb537fd73115806139d5129ae45";

const requests={
fetchTrending:`/trending/all/day?api_key=${ApiKey}&language=en-US`,
fetchNetflixOriginal:`/discover/tv?api_key=${ApiKey}&with_network=213`,
fetchActionMovies:`/discover/movie?api_key=${ApiKey}&with_genres=28`,
fetchHorrorMovies:`/discover/movie?api_key=${ApiKey}&with_genres=27`,
fetchComedyMovies:`/discover/movie?api_key=${ApiKey}&with_genres=35`,
fetchRomanceMovies:`/discover/movie?api_key=${ApiKey}&with_genres=10749`,
fetchDocumentries:`/discover/movie?api_key=${ApiKey}&with_genres=99`,
fetchTopRatedMovies:`/movie/top_rated?api_key=${ApiKey}&language=en-US`


}

export default requests;