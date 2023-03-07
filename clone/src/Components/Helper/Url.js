const Api_key =  "1089b7a47020430e8c094af915793a17";

const request = {
    fetchTrending:`/trending/all/week?api_key=${Api_key}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchAnimationMovies:`/discover/movie?api_key=${Api_key}&with_genres=16`,
};

export default request;
