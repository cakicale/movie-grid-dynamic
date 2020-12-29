import { showFormBtn } from "./formBtn.js";
import { showForm } from "./form.js";
import { showPicture } from "./picture.js";
import { showMovieInfo } from "./movieInfo.js";

const showMovieCard = (prop, data) => {
    //form
    const divItem = document.createElement("div");
    divItem.setAttribute("class", "item1");
    divItem.append(showFormBtn(prop));
    divItem.append(showForm(prop));
    //movie pic
    divItem.append(showPicture(prop));
    //movie text
    divItem.append(showMovieInfo(data[prop].title, data[prop].description, data[prop].date, data[prop].rating));
    return divItem;
};

export { showMovieCard };