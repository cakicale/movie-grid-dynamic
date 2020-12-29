const showPicture = (picNum) => {
    const imgMovie = document.createElement("img");
    imgMovie.setAttribute("src", "images/" + picNum + ".jpg");
    return imgMovie;
}

export { showPicture };