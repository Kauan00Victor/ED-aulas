var num = 0;

num = num + 2;
num = num = 3;
num = num / 2;

num ++;
num --;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num % 3;

console.log('num:' + num)
console.log('num == 1:' + (num == 1));
console.log('num === 1:' + (num === 1));
console.log('num != 1:' + (num != 1));
console.log('num > 1:' + (num > 1));
console.log('num < 1:' + (num < 1));
console.log('num >= 1:' + (num >= 1));
console.log('num < 1:' + (num <= 1));
console.log('true && false: ' + (true && false));
console.log('true || false: ' + (true || false));
console.log('!true: ' + (!true));


console.log('5 & 1: ', (5 & 1));
console.log('5 | 1: ', (5 | 1));
console.log('~5: ', (~5));
console.log('5 ^ 1: ', (5 ^ 1));
console.log('5 << 1: ', (5 << 1));
console.log('5 >> 1: ', (5 >> 1));

var num = 0;

console.log('typeof num: ', typeof num);
console.log('typeof Texto String: ', typeof 'Texto String');
console.log('typeof true: ', typeof true);
console.log('typeof [1,2,3]: ', typeof[1,2,3]);
console.log('typeof {name: Pedro}: ', typeof {name: "Pedro"});

function testTruesthy(val){
    return val ? console.log('true') : console.log('false');
}

testTruesthy(true);
testTruesthy(false);
testTruesthy(new Boolean(false));
testTruesthy('');
testTruesthy('Bom dia!');
testTruesthy(new String(''));
testTruesthy(1);
testTruesthy(-1);
testTruesthy(NaN);
testTruesthy(new Number (NaN));

var obj = {name: 'João'};

testTruesthy(obj);
testTruesthy(obj.name);
testTruesthy(obj.age);

console.log('Joaquim' === true);
console.log('Maria' === 'Maria');

var person1 = {name: 'Pedro'};
var person2 = {name: 'Pedro'};

console.log(person1 === person2);