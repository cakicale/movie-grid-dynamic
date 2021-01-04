const showPicture = (picID) => {
    const imgMovie = document.createElement("img");

    imgMovie.setAttribute("src", "images/" + picID + ".jpg");
    return imgMovie;
}

export { showPicture };