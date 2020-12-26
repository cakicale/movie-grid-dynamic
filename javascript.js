//selectors
//movie info selectors
const selectTitle = document.getElementsByTagName("h2");
const selectDesc = document.getElementsByClassName("overview");
const selectRating = document.getElementsByClassName("procenat");
const selectDate = document.getElementsByClassName("date");

const selectInput = document.getElementById("searchBox");//search

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

//dynamic html
const showFormBtn = (prop) => {
    let threeDotButton = document.createElement("button");
    threeDotButton.setAttribute("id", "btn" + prop);
    threeDotButton.setAttribute("class", "iconify");
    threeDotButton.setAttribute("data-icon", "entypo-dots-three-horizontal");
    threeDotButton.setAttribute("data-inline", "false");
    return threeDotButton;
}
const showForm = (prop) => {
    let divForm = document.createElement("div");
    divForm.setAttribute("class", "form-popup");
    divForm.setAttribute("id", "myForm" + prop);


    let pFormText1 = document.createElement("p");
    pFormText1.innerHTML = "Want to rate or add this item to a list?";
    pFormText1.style.fontWeight = 900;
    divForm.append(pFormText1);

    let a1 = document.createElement("a");
    a1.innerHTML = "Login";
    a1.setAttribute("href", "#");
    divForm.append(a1);

    let pFormText2 = document.createElement("p");
    pFormText2.innerHTML = "Not a member?";
    pFormText2.style.fontWeight = 900;
    divForm.append(pFormText2);

    let a2 = document.createElement("a");
    a2.innerHTML = "Sign up and join the community";
    a2.setAttribute("href", "#");
    divForm.append(a2);

    return divForm;
}
const showPicture = (prop) => {
    let imgMovie = document.createElement("img");
    imgMovie.setAttribute("src", "slike/" + prop + ".jpg");
    return imgMovie;
}
const showMovieInfo = () => {
    let divMovieText = document.createElement("div");
    divMovieText.setAttribute("class", "text");

    //provera rating-a
    const rating = showRating();
    divMovieText.append(rating[0]);
    divMovieText.append(rating[1]);
    ///
    let movieTitle = document.createElement("h2");
    divMovieText.append(movieTitle);
    let aTitle = document.createElement("a");
    aTitle.setAttribute("href", "#");
    movieTitle.append(aTitle);
    let pDate = document.createElement("p");
    pDate.setAttribute("class", "date");
    divMovieText.append(pDate);
    let pOverview = document.createElement("p");
    pOverview.setAttribute("class", "overview");
    divMovieText.append(pOverview);


    return divMovieText;
}
const showRating = () => {
    let span1 = document.createElement("span");
    span1.setAttribute("class", "dot");
    //divMovieText.append(span1);
    let span2 = document.createElement("span");
    span2.setAttribute("class", "inner-circle");
    //divMovieText.append(span2);
    let spanPercentNumber = document.createElement("span");
    spanPercentNumber.setAttribute("class", "procenat");
    span2.append(spanPercentNumber);
    let spanPercentSign = document.createElement("span");
    spanPercentSign.setAttribute("class", "percent");
    span2.append(spanPercentSign);
    return [span1, span2];
}
const showData = async () => {

    let container = document.querySelector("#container");
    const data = await fetchMoviesJSON();
    for (let prop in data) {
        //html elements
        let divItem = document.createElement("div");
        divItem.setAttribute("class", "item1");
        container.append(divItem);
        //form
        divItem.append(showFormBtn(prop));

        divItem.append(showForm(prop));

        //movie
        divItem.append(showPicture(prop));
        //movie text
        divItem.append(showMovieInfo());
        //data
        selectTitle[prop].innerHTML = data[prop].title;
        selectDesc[prop].innerHTML = data[prop].description;
        selectRating[prop].innerHTML = data[prop].rating;
        selectDate[prop].innerHTML = data[prop].date;
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

