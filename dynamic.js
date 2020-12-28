import { fetchMoviesJSON } from "./fetchData.js";

const showFormBtn = (btnNum) => {
    const threeDotButton = document.createElement("button");
    threeDotButton.setAttribute("id", "btn" + btnNum);
    threeDotButton.setAttribute("class", "iconify");
    threeDotButton.setAttribute("data-icon", "entypo-dots-three-horizontal");
    threeDotButton.setAttribute("data-inline", "false");
    return threeDotButton;
}
const showForm = (formNum) => {
    const divForm = document.createElement("div");
    divForm.setAttribute("class", "form-popup");
    divForm.setAttribute("id", "myForm" + formNum);
    const pFormText1 = document.createElement("p");
    pFormText1.innerHTML = "Want to rate or add this item to a list?";
    pFormText1.style.fontWeight = 900;
    divForm.append(pFormText1);
    const a1 = document.createElement("a");
    a1.innerHTML = "Login";
    a1.setAttribute("href", "#");
    divForm.append(a1);
    const pFormText2 = document.createElement("p");
    pFormText2.innerHTML = "Not a member?";
    pFormText2.style.fontWeight = 900;
    divForm.append(pFormText2);
    const a2 = document.createElement("a");
    a2.innerHTML = "Sign up and join the community";
    a2.setAttribute("href", "#");
    divForm.append(a2);

    return divForm;
}
const showPicture = (picNum) => {
    const imgMovie = document.createElement("img");
    imgMovie.setAttribute("src", "slike/" + picNum + ".jpg");
    return imgMovie;
}
const showMovieInfo = (title, description, date, rating) => {
    const divMovieText = document.createElement("div");
    divMovieText.setAttribute("class", "text");
    //rating
    const movieRating = showRating(rating);
    divMovieText.append(movieRating[0]);
    divMovieText.append(movieRating[1]);
    //title
    const movieTitle = document.createElement("h2");
    divMovieText.append(movieTitle);
    movieTitle.innerHTML = title;
    const aTitle = document.createElement("a");
    aTitle.setAttribute("href", "#");
    movieTitle.append(aTitle);
    //date
    const pDate = document.createElement("p");
    pDate.setAttribute("class", "date");
    divMovieText.append(pDate);
    pDate.innerHTML = date;
    //description
    const pOverview = document.createElement("p");
    pOverview.setAttribute("class", "overview");
    divMovieText.append(pOverview);
    pOverview.innerHTML = description;



    return divMovieText;
}
const showRating = (rating) => {
    const span1 = document.createElement("span");
    span1.setAttribute("class", "dot");
    //divMovieText.append(span1);
    const span2 = document.createElement("span");
    span2.setAttribute("class", "inner-circle");
    //divMovieText.append(span2);
    const spanPercentNumber = document.createElement("span");
    spanPercentNumber.setAttribute("class", "procenat");
    span2.append(spanPercentNumber);
    spanPercentNumber.innerHTML = rating;
    const spanPercentSign = document.createElement("span");
    spanPercentSign.setAttribute("class", "percent");
    span2.append(spanPercentSign);
    return [span1, span2];
}
const showData = async () => {

    const container = document.querySelector("#container");
    const data = await fetchMoviesJSON();
    for (let prop in data) {
        //html elements
        const divItem = document.createElement("div");
        divItem.setAttribute("class", "item1");
        container.append(divItem);
        //form
        divItem.append(showFormBtn(prop));
        divItem.append(showForm(prop));
        //movie pic
        divItem.append(showPicture(prop));
        //movie text
        divItem.append(showMovieInfo(data[prop].title, data[prop].description, data[prop].date, data[prop].rating));
    };
};

export {
    showData,
    showRating,
    showPicture,
    showMovieInfo,
    showForm,
    showFormBtn
};