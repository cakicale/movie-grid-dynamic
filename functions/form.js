const openForm = (arg) => {
    var modal = document.getElementById(arg);
    if (modal.style.display == "block") {
        document.getElementById(arg).style.display = 'none';
    }
    else {
        closeForm();
        document.getElementById(arg).style.display = 'block';
    }
};

const closeForm = () => {
    var form = document.getElementsByClassName("form-popup");
    for (var i = 0; i < 12; i++) {
        form[i].style.display = "none";
    }
};

export { openForm, closeForm };