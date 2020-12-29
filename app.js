import { showMovieCard } from "./components/movieCard.js";
import { closeForm, openForm } from "./components/form.js";
import { fetchMoviesJSON } from "./services/fetchData.js";
import { showSearchBar } from "./components/searchBar.js";
import { showSearchedMovies } from "./utils/search.js";

//form listener
document.addEventListener('click', function (event) {
    let id = event.target.id;
    var thenum = id.replace(/^\D+/g, '');

    if (!id.includes('btn')) {
        closeForm();
    }
    else {//closest
        openForm('myForm' + thenum);
    }
});

//functions
const showData = async () => {
    const searchBar = document.querySelector("#navigation");
    searchBar.append(showSearchBar(showSearchedMovies));

    const container = document.querySelector("#container");
    const data = await fetchMoviesJSON();
    for (let prop in data) {
        container.append(showMovieCard(prop, data));
    };
};




showData();
