class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  size() {
    return this.count - this.lowestCount;
  }
  isEmpty() {
    return this.size() === 0;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    this.lowestCount++;
    return result;
  }
  peek() {
    if ((this, this.isEmpty())) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

const file = new Queue();
console.log(file.isEmpty());

file.enqueue("Jhon
");
file.enqueue("B");
file.enqueue("C");

