const showPicture = (picNum) => {
    const imgMovie = document.createElement("img");
    imgMovie.setAttribute("src", "slike/" + picNum + ".jpg");
    return imgMovie;
}

export { showPicture };