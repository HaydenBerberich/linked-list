class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export default class LinkedList {
  constructor() {
    this.root = null;
  }

  append(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let currNode = this.root;

    while (currNode.nextNode) {
      currNode = currNode.nextNode;
    }

    currNode.nextNode = node;
  }

  toString() {
    let string = "";
    let currNode = this.root;

    if (!currNode) return;

    while (currNode) {
      string += `( ${currNode.value} ) -> `;
      currNode = currNode.nextNode;
    }

    string += "null";

    return string;
  }

  prepend(value) {
    const node = new Node(value);
    node.nextNode = this.root;
    this.root = node;
  }

  size() {
    let size = 0;
    let currNode = this.root;

    if (!currNode) return size;
    else size++;

    while (currNode.nextNode) {
      size++;
      currNode = currNode.nextNode;
    }

    return size;
  }

  head() {
    if (!this.root) return;
    return this.root.value;
  }

  tail() {
    let currNode = this.root;

    if (!currNode) return;

    while (currNode.nextNode) currNode = currNode.nextNode;

    return currNode.value;
  }

  at(index) {
    let currNode = this.root;

    if (!currNode || index >= this.size()) return;

    for (let i = 0; i < index; i++) {
      currNode = currNode.nextNode;
    }

    return currNode.value;
  }

  pop() {
    const head = this.root;

    if (!head) return;

    this.root = head.nextNode;

    return head.value;
  }

  contains(value) {
    let currNode = this.root;

    if (!currNode) return false;

    while (currNode) {
      if (currNode.value === value) return true;
      currNode = currNode.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let currNode = this.root;

    if (!currNode) return -1;

    let i = 0;

    while (currNode) {
      if (currNode.value === value) return i;
      currNode = currNode.nextNode;
      i++;
    }

    return -1;
  }

  insertAt(index, ...values) {
    let start = this.root;

    if (index < 0 || index >= this.size() || !start)
      throw new RangeError("Index out of range");

    if (values.length <= 0) throw new Error("Missing values");

    for (let i = 0; i < index - 1; i++) {
      start = start.nextNode;
    }
    const end = start.nextNode;

    let newList = new Node(values.shift());
    start.nextNode = newList;

    values.forEach((value) => {
      const node = new Node(value);
      newList.nextNode = node;
      newList = newList.nextNode;
    });

    newList.nextNode = end;
  }

  removeAt(index) {
    let currNode = this.root;

    if (index < 0 || index >= this.size() || !currNode)
      throw new RangeError("Index out of range");

    for (let i = 0; i < index - 1; i++) currNode = currNode.nextNode;

    currNode.nextNode = currNode.nextNode.nextNode;
  }
}
