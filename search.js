import { fetchMoviesJSON } from "./fetchData.js";   
//selectors
const selectTitle = document.getElementsByTagName("h2");



const showSearchedMovies = async (event) => {
    const data = await fetchMoviesJSON();
    for (let prop in data) {
        if (!data[prop].title.toLowerCase().includes(event.target.value.toLowerCase())) {
            selectTitle[prop].parentElement.parentElement.style.display = "none";
        }
        else {
            selectTitle[prop].parentElement.parentElement.style.display = "block";
        }
    }
}


export { showSearchedMovies };