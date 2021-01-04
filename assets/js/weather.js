 var link = "https://api.openweathermap.org/data/2.5/weather?q=Lagos,ikorodu&appid=c9e5dded9c44f7dfd3e90c28beaa10c6"
//document.getElementById("city").innerHTML= link;
//console.log("link");
var request = new XMLHttpRequest();
request.open('GET',link,true);
request.onload = function(){
    var obj = JSON.parse(this.response);
    console.log(obj);
    document.getElementById("temp").innerHTML = obj.main.temp;
}
request.send();
