// document.write("Hello, World!");

// console.log("Boa noite Turma!");

// alert("Vamos aprender Estrutura de Dados?");

var num = 1;
num = 3;
var price = 1.5;
var myName = "Regiano Alves"
var trueValue = true;
var nullVar = null;
var und;

console.log("num: " + num)
console.log("Meu Nome: " + myName)
console.log("trueValue: " + trueValue)
console.log("price: " + price)
console.log("nullVar: " + nullVar)
console.log("und: " + und)

var myVariable = "global";
myOtherVariable = "global";

function myFunction(){
    var myVariable = "local";
    return myVariable;
}

function myOtherVariable(){
    myOtherVariable = "local";
    return myOtherVariable;
}

console.log("myVariable: " + myVariable)
console.log(myFunction())
console.log("myOtherVariable: " + myOtherVariable)
console.log("")
console.log("")