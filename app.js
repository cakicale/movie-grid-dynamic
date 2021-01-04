import { showMovieCard } from "./components/movieCard.js";
import { closeForm, openForm } from "./components/form.js";
import { fetchMoviesJSON } from "./services/fetchData.js";
import { searchBar } from "./components/searchBar.js";
import { removeAllChildNodes } from "./utils/removeChild.js";

export { showData };
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

const showSearchBar = () => {
    const navigation = document.querySelector("#navigation");
    navigation.append(searchBar(showData));
}
//functions
const showData = async (searchedMovie) => {
    const container = document.querySelector("#container");
    const data = await fetchMoviesJSON(searchedMovie);
    removeAllChildNodes(container);
    for (let prop in data) {
        container.append(showMovieCard(data[prop]));
    }

};



showSearchBar();
showData();
