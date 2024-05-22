class Stack {

    constructor( ){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        return this.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    clear(){
        this.items = [];
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }

}

const stack = new Stack();


console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

console.log(stack.peek());

stack.push(11);

console.log(stack.size());

console.log(stack.isEmpty());

stack.push(15);

stack.print();

stack.pop();
stack.pop();
stack.print();

var pilha = new Stack ();
console.log(pilha.isEmpty());
pilha.push(5);
pilha.print()
pilha.push(8)
pilha.print()
pilha.push(11)
pilha.print()
pilha.push(15)
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()

console.log(pilha.isEmpty());

function decimalToBinary(decNumber){
    var restStack = new Stack(),
    rest,
    binaryString = '';

    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2);

        restStack.push(rest);

        decNumber = Math.floor(decNumber / 2);
    }
    while(!restStack.isEmpty()) {
        binaryString += restStack.pop().toString();
    }
    return binaryString;
}

console.log(decimalToBinary(10))
console.log(decimalToBinary(25))
console.log(decimalToBinary(233))
console.log(decimalToBinary(1000))


function baseConverter(decNumber, base){
    var restStack = new Stack();
    rest,
    baseSting = '',
    digits = '0123456789ABCDEFHIJKLMNOPQRSTUVWXYZ';
    if (!(base >= 2 && base <= 36)){
        return '';
    }
    while(decNumber > 0){
        rest = Math.floor(decNumber % base);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / base);
    }
    while(!restStack.isEmpty()){
        baseSting += digits[restStack.pop()];
    }
    return baseSting;
}

console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))
console.log(baseConverter(100345, 35))
