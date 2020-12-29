const showFormBtn = (btnNum) => {
    const threeDotButton = document.createElement("button");
    threeDotButton.setAttribute("id", "btn" + btnNum);
    threeDotButton.setAttribute("class", "iconify");
    threeDotButton.setAttribute("data-icon", "entypo-dots-three-horizontal");
    threeDotButton.setAttribute("data-inline", "false");
    return threeDotButton;
}

export { showFormBtn };