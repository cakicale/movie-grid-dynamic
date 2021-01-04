import { showMovieCard } from "./components/movieCard.js";
import { openForm } from "./components/form.js";
import { fetchMoviesJSON } from "./services/fetchData.js";
import { searchBar } from "./components/searchBar.js";
import { removeAllChildNodes } from "./utils/removeChild.js";

export { showData };

let last; //last clicked form button
//form listener
document.addEventListener('click', function (event) {
    let id = event.target.id;
    let thenum = id.replace(/^\D+/g, '');
    let arg = "myForm" + thenum;

    if (!id.includes('btn')) {
        //closeForm();
        if (last != undefined) {
            document.getElementById(last).style.display = 'none';
            last = undefined;
        }
    }
    else {//closest
        if (last != undefined) {
            document.getElementById(last).style.display = 'none';
        }
        openForm(arg);
        last = arg;
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
