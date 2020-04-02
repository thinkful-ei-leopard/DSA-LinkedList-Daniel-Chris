/* eslint-disable no-console */
class _Node {
  constructor(value = null, next = null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst(item){
    this.head = new _Node(item,this.head);
  }
  insertLast(item) {
    if(this.head === null){
      this.insertFirst(item);
    }
    let tempNode = this.head;
    while(tempNode.next !== null){
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item,null);
  }
  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }
    if(this.head.value === key) {
      this.head = new _Node(item,this.head)
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !==key)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = new _Node(item, currNode);
  }
  insertAfter(item, key) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let nextNode = this.head;
    while ((currNode !== null) && (currNode.value !== key)) {
      currNode = nextNode;
      nextNode = nextNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    currNode.next = new _Node(item, nextNode);
  }
  insertAt(item, position){
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let nextNode = this.head;
    for(let i = 1; i < position; i++) {
      currNode = nextNode;
      nextNode = nextNode.next;
    }
    if(currNode === null) {
      console.log('Invalid position')
      return;
    }

    currNode.next = new _Node(item, nextNode)
  }
  remove(item){
    if (!this.head) {
      return null;
    }
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !==item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  find(item){
    let currNode = this.head;
    if(!this.head) {
      return null;
    }
    while (currNode.value !== item){
      if(currNode.next === null){
        return null;
      } else {
        currNode = currNode.next;
      }
    }

    return currNode;
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Starbuck')
  SLL.insertFirst('Husker')
  SLL.insertFirst('Helo')
  SLL.insertFirst('Boomer')
  SLL.insertFirst('Apollo')
  SLL.insertLast('Tauhida')
  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('Kat', 3)
  SLL.remove('Tauhida')
  SLL.remove('squirrel')
  console.dir(SLL)
  return SLL;
}

main();

// module.exports = {
//   main,
//   LinkedList,
// }