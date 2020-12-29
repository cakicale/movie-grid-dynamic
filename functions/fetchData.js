// function fetchMovies() {
//     fetch("./movies.json")
//         .then(function (resp) {
//             return resp.json();
//         })
//         .then(function (data) {
//             return data;
//         });
// }
const fetchMoviesJSON = async () => {
    const response = await fetch('/movies.json');
    const movies = await response.json();
    return movies;
}

export { fetchMoviesJSON };