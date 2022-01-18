//Alert thrown when user clicks on page title "Marina Ignatjeva photography"
var myTitle = document.getElementById("clickable");
myTitle.onclick = function () {
    alert("Hello! If you want to contact me please fill form in the bottom");
}

//getElementById is too long
function $(id) {return document.getElementById(id);}

//Validation function
function validate(event){
    var msg =""; //accumulator where errors are collected
    //t1 should not be empty
    if ($("name").value=="") {
        //it is empty – registers a problem and adds extra CSS class
        msg+="A field 'Name' should not be empty\n";
        $("name").className="invalid";
    } else {
        $("name").className=""; //everything fine
    }
    if ($("email").value=="") {
        //it is empty – registers a problem and adds extra CSS class
        msg+="A field 'Email' should not be empty\n";
        $("email").className="invalid";
    } else {
        $("email").className=""; //everything fine
    }
    if ($("tel").value=="" || $("tel").value!="[0-9]{6,12}") {
        //it is empty – registers a problem and adds extra CSS class
        msg+="A field 'Phone' should not be empty\n";
        $("tel").className="invalid";
    } else {
        $("tel").className=""; //everything fine
    }

    $("vldSummary").innerHTML=msg; //shows all error messages
    //even if a single value is in the msg array
    if (msg.length>0) {
        event.preventDefault();
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByTagName("form")[0].addEventListener("submit", validate);
});	