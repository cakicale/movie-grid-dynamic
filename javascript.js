var openForm = (arg)=>{
    var modal=document.getElementById(arg);
    if(modal.style.display=="block"){
        document.getElementById(arg).style.display = 'none';
    }
    else {
        for(var i=1;i<13;i++){
            document.getElementById("myForm"+i).style.display="none";
        }
        document.getElementById(arg).style.display = 'block';
    }
            
};


document.addEventListener('click', function(event) {
    let id = event.target.id;
    var thenum = id.replace( /^\D+/g, '');
    
    if (!id.includes('btn')) {
        for(var i=1;i<13;i++){
            document.getElementById("myForm"+i).style.display="none";
        }
    }
    else {
        openForm('myForm'+thenum);
    }
    
  })


  

