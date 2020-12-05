//selectors
var selectTitle = document.getElementsByTagName("h2");
var selectDesc = document.getElementsByClassName("overview");
var selectRating = document.getElementsByClassName("procenat");

//fetching data
fetch("./movies.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        showData(data);
    });

//function used in fetch
let showData = function(data) {
    for(let prop in data){
        selectTitle[prop].innerHTML = data[prop].title;
        selectDesc[prop].innerHTML = data[prop].description;
        selectRating[prop].innerHTML = data[prop].rating;
    };
}



//functions
var openForm = (arg)=>{
    var modal=document.getElementById(arg);
    if(modal.style.display=="block"){
        document.getElementById(arg).style.display = 'none';
    }
    else {
        closeForm();
        document.getElementById(arg).style.display = 'block';
    }
            
};

var closeForm = () => {
    var form =document.getElementsByClassName("form-popup");
    for(var i=0;i<12;i++){
        form[i].style.display="none";
    }
}

//listeners
document.addEventListener('click', function(event) {
    let id = event.target.id;
    var thenum = id.replace( /^\D+/g, '');
    
    if (!id.includes('btn')) {
        closeForm();
    }
    else {//closest
        openForm('myForm'+thenum);
    }
    
  })


  

