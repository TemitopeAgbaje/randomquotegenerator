/*function myFunction(){
    alert("Hello!")
  }
document.write(myFunction())*/

/*var y = 5;
console.log(y)
var myFunc = function(){
    var x = 4;
    console.log(x);
}
console.log(myFunc());*/

/*var arr=[1,3,5,7]
console.log(arr.length);
for(i=0; i <arr.length ;i++){
  console.log(arr[i]);
}*/

/*var student = {
  name: "Tope",
  age: 12,
  address: "Lagos",
  likes: "sleeping"
};
for(i in student){
  console.log(i +":"+student[i]);
}*/

//constructor function
var fullModel = function(name,year,color){
  this.name=name;
  this.year= year;
  this.color=color;
  this.model=function(name,year){
    console.log(this.name + " "  + this.year);
  }
  this.carModel = function(){
    console.log(this.name + " is a very good car" + " especially " + this.color + "color")
  }

}
//("Ford","2020","black");
//console.log(this.name+" " + this.year)
var model1 = new fullModel("Ford","2018","black");
var model2 = new fullModel("Toyota Camry","2017","blue");
let model3 = new fullModel("kia","2020","grey");
let model4 = new fullModel("Volvo","2016","red");
model1.model();
model4.carModel();
