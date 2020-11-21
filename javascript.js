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

document.addEventListener('click', function(event) {
    let id = event.target.id;
    var thenum = id.replace( /^\D+/g, '');
    
    if (!id.includes('btn')) {
        closeForm();
    }
    else {
        openForm('myForm'+thenum);
    }
    
  })


  

