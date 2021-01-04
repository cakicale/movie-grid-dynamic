const showForm = (formNum) => {
    const divForm = document.createElement("div");
    divForm.setAttribute("class", "form-popup");
    divForm.setAttribute("id", "myForm" + formNum);
    const pFormText1 = document.createElement("p");
    pFormText1.innerHTML = "Want to rate or add this item to a list?";
    pFormText1.style.fontWeight = 900;
    divForm.append(pFormText1);
    const a1 = document.createElement("a");
    a1.innerHTML = "Login";
    a1.setAttribute("href", "#");
    divForm.append(a1);
    const pFormText2 = document.createElement("p");
    pFormText2.innerHTML = "Not a member?";
    pFormText2.style.fontWeight = 900;
    divForm.append(pFormText2);
    const a2 = document.createElement("a");
    a2.innerHTML = "Sign up and join the community";
    a2.setAttribute("href", "#");
    divForm.append(a2);

    return divForm;
}

const openForm = (arg) => {
    var modal = document.getElementById(arg);
    if (modal.style.display == "block") {
        document.getElementById(arg).style.display = 'none';
    }
    else {
        document.getElementById(arg).style.display = 'block';
    }
};

export { showForm, openForm };