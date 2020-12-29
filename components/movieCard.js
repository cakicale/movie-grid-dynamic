import { showFormBtn } from "./formBtn.js";
import { showForm } from "./form.js";
import { showPicture } from "./picture.js";
import { showMovieInfo } from "./movieInfo.js";
import { fetchMoviesJSON } from "../fetchData.js";


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

export { showData };