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
    this.head = new _Node(item,this.head)
  }
  insertLast(item) {
    if(this.head === null){
      this.insertFirst(item)
    }
    //find the end
    //creat the new node
    let tempNode = this.head
    while(tempNode.next !== null){
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item,null)
  }
}

function main() {
  let ll = new LinkedList();
}