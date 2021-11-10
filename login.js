document.getElementById("email");
document.getElementById("error");
    function validation(){
    let regexp=/^([A-Za-z0-9\.-]+)\@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if (regexp.test(email.value)){
        error.innerText="valid";
        error.style.color="green";
        return true;
        }
       else {
            error.innerText="invalid";
            error.style.color="red";
            return false;
            }
        }
    