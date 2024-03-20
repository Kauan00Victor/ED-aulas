var numbers = [0,1,2,3,4,5,6,7,8,9]

numbers[numbers.length] = 10
numbers[numbers.length] = 11

console.log("Lista de números: " + numbers)


const averageTempJan = 31;
const averageTempFeb = 30.1;
const averageTempMar = 28.5;
const averageTempAbr = 27.8;
const averageTempMay = 25.6;


const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 30.1;
averageTemp[2] = 28.5;
averageTemp[3] = 27.8;
averageTemp[4] = 25.6;

console.log("Conteudo do array: ", averageTemp);
console.log("Média de temperatura de março: ", averageTemp[2]);
console.log("Média de temperatura de janeiro: ", averageTemp[0]);

let daysOfWeek1 = new Array();

daysOfWeek1 = new Array();

daysOfWeek1 = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday");

let daysOfWeek2 = [];

let daysOfWeek3 = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday"];

console.log(daysOfWeek3.length);

let daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday"];

for  (let i=0 ; i < daysOfWeek.length ; i++) {
    console.log(daysOfWeek[i]);
};

const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci [i - 2];
}

console.log(fibonacci.join(''));

for (let i = 0; i < fibonacci.length; i ++) {
    console.log(fibonacci[i]);
}

let numbers1 = [0,1,2,3,4,5,6,7,8,9];

numbers[numbers1.length] = 10;

console.log(numbers1);

let numbers2 = [0,1,2,3,4,5,6,7,8,9];


numbers[numbers2.length] = 10;

numbers.push(11);
numbers.push(12,13);

console.log(numbers2);

console.log(numbers2.join(','));

let numbers3 = [0,1,2,3,4,5,6,7,8,9];

numbers[numbers3.length] = 10;

numbers.push(11);
numbers.push(12,13);


function insertFirstPosition(value) {
    for(let i = numbers3.length; i>=0; i --){
        numbers3[i] = numbers3[i - 1];
    }
    numbers3[0] = value
};

insertFirstPosition(-1);

console.log(numbers.join(','));

let numbers4 = [0,1,2,3,4,5,6,7,8,9];

numbers4.unshift(-1);
numbers4.unshift(-2);
numbers4.unshift(-4, -3);

console.log(numbers4.join('-'));

let numbers5 = [0,1,2,3,4,5,6,7,8,9];

numbers5.unshift(-1)
numbers5.unshift(-2)
numbers5.unshift(-4, -3);

numbers5.pop();

console.log(numbers5.join(', '));

numbers5.pop();
console.log(numbers5.join(', '));

let numbers6 = [0,1,2,3,4,5,6,7,8,9];

for (var i=0; i < numbers6.length; i ++){
    numbers6[i] = numbers6[i+1];
}

console.log(numbers6);

let numbers7 = [0,1,2,3,4,5,6,7,8,9];

Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for(var i = 0; i < myArray.length; i ++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}

Array.prototype.removeFirstPosition = function(){
    for (var i=0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}

numbers7 = numbers7.removeFirstPosition();

console.log(numbers7);

let numbers8 = [0,1,2,3,4,5,6,7,8,9];

numbers8.shift();

console.log("O tamanho do array agora é: " + numbers8.length)
console.log(numbers8.join(','));

numbers8.shift();
console.log("O tamanho do array agora é: " + numbers8.length);
console.log(numbers8.join(','));

let numbers9 = [0,1,2,3,4,5,6,7,8,9];

numbers9.splice(5, 3);

console.log(numbers9.join(','));

let numbers10 = [0,1,2,3,4,5,6,7,8,9];

numbers10.splice(5,3);

console.log(numbers10.join(','));

numbers10.splice(5, 0, 5, 6, 7);

console.log(numbers10.join(', '));

var averageTempDay1 = [36.5, 28, 30, 25, 18, 40];
var averageTempDay2 = [19, 22.5, 29, 31, 23.5, 32.5];

var averageTempDay0 = [];
averageTemp[0] = [36.5, 28, 30, 25, 18, 40];
averageTemp[1] = [19, 22.5, 29, 31, 23.5, 32.5];

console.log(averageTemp[1][5]);

var averageTempDay3 = [36.5, 28, 30, 25, 18, 40];
var averageTempDay4 = [19, 22.5, 29, 31, 23.5, 32.5];

var averageTemp1 = [];
averageTemp1[0] = averageTempDay1;
averageTemp1[1] = averageTempDay2;

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++){
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

printMatrix(averageTemp1);

var averageTempDay5 = [36.5, 28, 30, 25, 18, 40];
var averageTempDay6 = [19, 22.5, 29, 31, 23.5, 32.5];

var averageTemp2 = [];
averageTemp2[0] = averageTempDay1;
averageTemp2[1] = averageTempDay2;

function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++){
        for (let j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

console.table(averageTemp2);



const matrix3x3x3 = [];

for (var i = 0; i<3 ; i++){
    matrix3x3x3[i] = [];
    for (var j = 0; j < 3; j ++){
        matrix3x3x3[i] [j] = [];
        for (var z = 0; z < 3; z++) {
            matrix3x3x3[i] [j] [z] = i + j + z;
        }
    }
}
console.table(matrix3x3x3);

const zero = 0;
const positiveNumbers = [1,2,3];
const negativeNumbers = [-3, -2, -1];
let numbers11 = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers11.join(', '));


function isEven(x) {
    console.log(x);
    return (x % 2 === 0 ) ? true : false;
}

let numbers12 = [1,2,3,4,5,6,7,8,9];

numbers12.every(isEven)

numbers12.some(isEven)

let numbers13 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

numbers13.forEach( x => console.log(x % 2 === 0));

function isEven1 (x) {
    return (x % 2 === 0) ? true : false;
}

let numbers14 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const myMap = numbers14.map(isEven1);

console.log(myMap);

const evenNumbers = numbers14.filter(isEven1);

console.log(evenNumbers);

console.log (numbers14.reduce((previous, current) => previous + current));

for(const n of numbers14) {
    console.log(n % 2 === 0 ? n + "é par" : n + "é impar");
}

let interator = numbers14[Symbol.iterator]();
console.log(interator.next().value); // 1
console.log(interator.next().value); // 2
console.log(interator.next().value); // 3
console.log(interator.next().value); // 4
console.log(interator.next().value); // 5
console.log(interator.next().value); // 6

let interator1 = numbers14[Symbol.iterator]();

for (const n of interator1){
    console.log(n);
}

let aEntries = numbers14.entries();
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);

let aEntries1 = numbers14.entries();

for(const n of aEntries1) {
    console.log(n);
}

const  aKeys = numbers14.keys();
console.log(aKeys.next());
console.log(aKeys.next());
console.log(aKeys.next());

const aValues = numbers14.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());

let numbers15 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

numbers15.reverse();
console.log('Array numbers com reverse: ' +  numbers15.join(', '));

numbers15.sort();
console.log('Array numbers com sort: ' + numbers15.join(', '));

function compare(a,b) {
    if (a < b ) {
        return -1;
    }
    if ( a > b) {
        return 1;
    }
    return 0;
}
numbers15.sort(compare);
console.log('Array nnumbers executando a funcção compare: ' + numbers15.join(', '));

let names = ['Maria', 'Angelina', 'Luiza', 'Kelly', 'Rafaela', 'Marcela', 'Beatriz']

console.log(names.sort().join(', '));

console.log('O indice do primeiro elemento 10 é: ' + numbers15.indexOf(10));
console.log('O indice do elemento 100 que não existe no array é: ' + numbers15.indexOf(100));

numbers15.push(10)

console.log('Mostrando novamente o array numbers15 com mais um elemento adicionado: ');
console.log(numbers15.join(', '));

console.log('')
console.log('')

