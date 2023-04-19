// Select all input elements for varification
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("mobNumber");
const password1 = document.getElementById("pass1");
const password2 = document.getElementById("pass2");
const gender = document.registration;


// function for form varification
function formValidation() {
    // checking length of firstname
    if (fname == null || fname == "" ) {
       alert("First Name can not be blanck.");
       fname.focus();
       return false;
    }
    
    else if(fname.value.length < 2 || fname.value.length > 20){
    alert("First Name length should be more than 2 and less than 21 charaters");
        fname.focus();
       return false;
    }
 

    // checking length of lastname
    if (lname == null || lname == "") {
        alert("Last Name can not be blanck.");
        lname.focus();
        return false;
    }
    else if(lname.value.length < 2 || lname.value.length > 20){
        alert("First Name length should be more than 2 and less than 21 charaters");
        lname.focus();
        return false;
    }

    // checking email format
    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Please enter a valid email!");
        email.focus();
        return false;
    } 

    // checking phone number
    if (!mobNumber.value.match(/^[1-9][0-9]{9}$/)) {
        alert("Phone number must be 10 characters long number and first digit can't be 0!");
        mobNumber.focus();
        return false;
    }
     // checking password character pattern
     if (pass1.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
        alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 8 and 15 characters long.");
        pass1.focus();
        return false;
    }

    // checking gender
    if (gender.gender.value === "") {
       alert("Please select your gender ");
       return false;
    }

 return true;
}