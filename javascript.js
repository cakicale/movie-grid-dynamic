//selectors
const selectTitle = document.getElementsByTagName("h2");
const selectDesc = document.getElementsByClassName("overview");
const selectRating = document.getElementsByClassName("procenat");

const selectInput = document.getElementById("searchBox");

//functions
const openForm = (arg) => {
    var modal = document.getElementById(arg);
    if (modal.style.display == "block") {
        document.getElementById(arg).style.display = 'none';
    }
    else {
        closeForm();
        document.getElementById(arg).style.display = 'block';
    }
};

const closeForm = () => {
    var form = document.getElementsByClassName("form-popup");
    for (var i = 0; i < 12; i++) {
        form[i].style.display = "none";
    }
};

//fetching data

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

//function used with fetch

const showData = async () => {
    const data = await fetchMoviesJSON();
    for (let prop in data) {
        selectTitle[prop].innerHTML = data[prop].title;
        selectDesc[prop].innerHTML = data[prop].description;
        selectRating[prop].innerHTML = data[prop].rating;
    };
};

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
//listeners
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

selectInput.addEventListener('input', showSearchedMovies);

//calling functions
showData();