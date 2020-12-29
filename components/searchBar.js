import { showSearchedMovies } from "../functions/search.js";
const showSearchBar = () => {
    const searchInput = document.createElement("input");
    searchInput.setAttribute("class", "search");
    searchInput.setAttribute("id", "searchBox");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search");
    searchInput.addEventListener('input', showSearchedMovies);
    return searchInput;
}

export { showSearchBar };