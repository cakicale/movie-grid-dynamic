const showPicture = (picName) => {
    const imgMovie = document.createElement("img");

    imgMovie.setAttribute("src", "images/" + picName.replace(":", "") + ".jpg");
    return imgMovie;
}

export { showPicture };