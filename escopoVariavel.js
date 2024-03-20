var myVariable = "global";
myOtherVariable = "global";

function myFunction(){
    var myVariable = "local";
    return myVariable;
}

function myOtherFunction(){
    myOtherVariable = "local";
    return myOtherVariable;
}


console.log('myVariable: ' + myVariable);
console.log(myFunction()) ;//2;
console.log('myOtherVariable: ' + myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);


