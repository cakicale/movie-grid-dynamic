//selectors
var selectTitle = document.getElementsByTagName("h2");
var selectDesc = document.getElementsByClassName("overview");
var selectRating = document.getElementsByClassName("procenat");

const selectInput = document.getElementById("searchBox");



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

selectInput.addEventListener('input', updateSearch);




//functions
var openForm = (arg) => {
    var modal = document.getElementById(arg);
    if (modal.style.display == "block") {
        document.getElementById(arg).style.display = 'none';
    }
    else {
        closeForm();
        document.getElementById(arg).style.display = 'block';
    }
};

var closeForm = () => {
    var form = document.getElementsByClassName("form-popup");
    for (var i = 0; i < 12; i++) {
        form[i].style.display = "none";
    }
};

//fetching data

function fetchMovies(...args) {
    fetch("./movies.json")
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            if (args.length > 1) {
                args[0](...args.slice(1, args.length), data);
            }
            else {
                args[0](data);
            }

        });
}
//function used in fetch

let showData = (data) => {
    for (let prop in data) {
        selectTitle[prop].innerHTML = data[prop].title;
        selectDesc[prop].innerHTML = data[prop].description;
        selectRating[prop].innerHTML = data[prop].rating;
    };
};

let showMovies = (event, data) => {
    for (let prop in data) {
        if (!data[prop].title.toLowerCase().includes(event.target.value.toLowerCase())) {
            selectTitle[prop].parentElement.parentElement.style.display = "none";
        }
        else {
            selectTitle[prop].parentElement.parentElement.style.display = "block";
        };
    }
}
function updateSearch(event) {
    fetchMovies(showMovies, event);
};
//calling functions
fetchMovies(showData);