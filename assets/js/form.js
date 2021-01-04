/*var myForm = document.forms.myForm;
console.log(myForm);

var name=myForm.name.value
console.log(name);*/

var myForm=document.forms.myForm;
var message = document.getElementById("message");
myForm.onsubmit = function(){
    if(myForm.name.value == ""){message.innerHTML = "please enter your name";
    return false;}else{
        message.innerHTML = ""
        return true;
    }
}

var email = document.getElementById("email");
myForm.onsubmit = function(){
    if (myForm.email.value==""){
        alert("invalid email");
    }else{
        return true
    }
}