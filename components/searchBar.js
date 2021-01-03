const searchBar = (method) => {
    const searchInput = document.createElement("input");
    searchInput.setAttribute("class", "search");
    searchInput.setAttribute("id", "searchBox");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search");
    searchInput.addEventListener('input', method);
    return searchInput;
}

export { searchBar };