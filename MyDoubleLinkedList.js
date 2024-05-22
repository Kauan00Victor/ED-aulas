function MyDoubleLinkedList() {
  (length = 0), (head = null), (tail = null);

  let Node = function (element) {
    this.prev = null;
    this.element = element;
    this.next = null;
  };

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        previous = this.getElementAt(position - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
    } else {
      return false;
    }
  };
  this.getElementAt = function (element) {
    if (position >= 0 && position <= this.size()) {
      for (let i = 0; i < position && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return null;
  };

  this.size = function(){
    return length;
  }

  this.append = function(element){
    const node = new Node(element);
    let current = null;
    if (head === null){
        head = node;
        tail = node;
    } else{
        current = head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
        tail = node;
    }
    length++;
  };

};
