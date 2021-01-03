// function fetchMovies() {
//     fetch("./movies.json")
//         .then(function (resp) {
//             return resp.json();
//         })
//         .then(function (data) {
//             return data;
//         });
// }
const fetchMoviesJSON = async (searchQuery) => {
    const response = await fetch('/movies.json');
    const movies = await response.json();
    if (searchQuery === undefined || searchQuery.target.value === "") {
        return movies;
    }
    else {
        return movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.target.value.toLowerCase()));
    }
}

export { fetchMoviesJSON };