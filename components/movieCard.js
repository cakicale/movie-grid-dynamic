import { showFormBtn } from "./formBtn.js";
import { showForm } from "./form.js";
import { showPicture } from "./picture.js";
import { showMovieInfo } from "./movieInfo.js";

const showMovieCard = (prop, movie) => {
    const divItem = document.createElement("div");
    divItem.setAttribute("class", "item1");
    //form
    divItem.append(showFormBtn(prop));
    divItem.append(showForm(prop));
    //movie pic
    divItem.append(showPicture(movie.title));
    //movie text
    divItem.append(showMovieInfo(movie.title, movie.description, movie.date, movie.rating));

    return divItem;
};

export { showMovieCard };