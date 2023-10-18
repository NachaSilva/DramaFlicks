export const GetMovies = ()=>{
    const apiKey = 'ce9a8ba9fbedd1b69dad102a695950c2'
    const options = {
        method: 'GET',
        // url: 'https://api.themoviedb.org/3/movie/popular',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTlhOGJhOWZiZWRkMWI2OWRhZDEwMmE2OTU5NTBjMiIsInN1YiI6IjY1MmQyZGQ1NjYxMWI0MDBhY2JhODk5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NehHrZTBhO6g9XMCQLjpzfiWnz5t0xlEXg4aBD_wreI',
            'accept': 'application/json'
        } 
    }
    return fetch('https://api.themoviedb.org/3/movie/latest', options);
}
