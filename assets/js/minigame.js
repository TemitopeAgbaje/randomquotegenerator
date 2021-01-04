
let form =document.getElementById("form");

form.addEventListener('submit',checkGuess);

function checkGuess(e){
    e.preventDefault()
function third() {
    var str = document.getElementById("third").value;
    var res = str.charAt(2)
    document.getElementById("third").value = res;
    return res;
  }
var thirdLetter=third();


function random(){
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var rLetters = letters[Math.floor(Math.random()*letters.length)];
    document.getElementById("user").value=rLetters;
    return rLetters;
}
var gen = random();

if (thirdLetter==gen){
    document.getElementById("btn").innerHTML ="YOU GOT IT!"
}else{
    document.getElementById("btn").innerHTML="TRY AGAIN"
}
}


