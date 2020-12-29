const showPicture = (picNum) => {
    const imgMovie = document.createElement("img");
    imgMovie.setAttribute("src", "pictures/" + picNum + ".jpg");
    return imgMovie;
}

export { showPicture };