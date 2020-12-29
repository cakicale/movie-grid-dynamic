import { showRating } from "./rating.js";

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

export { showMovieInfo };