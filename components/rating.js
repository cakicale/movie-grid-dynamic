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

export { showRating };