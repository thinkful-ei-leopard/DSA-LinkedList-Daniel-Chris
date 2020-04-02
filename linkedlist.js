/* eslint-disable no-console */
class _Node {
  constructor(value = null, next = null){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.length = 0;
    this.head = null;
  }
  insertFirst(item){
    this.head = new _Node(item,this.head);
    this.length++;
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
    this.length++
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
    this.length++;
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
    this.length++;
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

    currNode.next = new _Node(item, nextNode);
    this.length++;
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
    this.length--;
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

function setSLL() {
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
  return SLL;
}

function size(ll) {
  console.log(ll.length);
}

function display(ll){
  console.log(ll)
}

function isEmpty(ll) {
  if (ll.head === null) {
    console.log('True')
  }
  console.log('false')
}

function findPrevious(ll, key){
  if(!ll.head) {
    return console.log('List is Empty')
  }
  let currNode = ll.head;
  let previousNode = ll.head;
  while ((currNode !== null) && (currNode.value !==key)) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  return console.log(previousNode)
}

function findLast(ll) {
  if(!ll.head) {
    return console.log('List is empty')
  }
  let currNode = ll.head;
  let nextNode = ll.head;
  let size = ll.length;
  for(let i = 0; i < size; i++) {
    currNode = nextNode;
    nextNode = nextNode.next;
  }
  return console.log(currNode);
}

function main(){
  let SLL = setSLL()
  display(SLL)
  size(SLL)
  isEmpty(SLL)
  findPrevious(SLL, "Kat")
  findLast(SLL)
  reverse(SLL)
}

main();

// module.exports = {
//   main,
//   LinkedList,
// }

// 4. Mystery Program 
// Complexity: O(n^2)
// It's a filter for duplicates. Loops through whole list, checking for adjacent values that match, then links around the redundant nodes.insertAt

//5. Reverse a list

function reverse(ll) {
  if (!ll.head) {
    return console.log('list is empty')
  }
  let prevNode = null
  let nextNode = null
  let currentNode = ll.head

  while(currentNode != null){
    nextNode = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode
    currentNode = nextNode
  }

  ll.head = prevNode
  console.log(ll)
}