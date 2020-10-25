const API_KEY = "cdedb88226b744b3186fd789284a0f80";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-us`,
    fetchTvshows: `/discover/tv?api_key=${API_KEY}&languages=en-us`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-us`,
    fetchActionTvAnime: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,

}

export default request;