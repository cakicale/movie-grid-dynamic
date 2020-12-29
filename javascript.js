import { showMovieCard } from "./components/movieCard.js";
import { showSearchedMovies } from "./search.js";
import { closeForm, openForm } from "./form.js";
import { fetchMoviesJSON } from "./fetchData.js";
//selectors
const selectInput = document.getElementById("searchBox");

//listeners
//search listener
selectInput.addEventListener('input', showSearchedMovies);
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
    const container = document.querySelector("#container");
    const data = await fetchMoviesJSON();
    for (let prop in data) {
        container.append(showMovieCard(prop, data));
    };
};





showData();
