class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty (){
        return this.size==0
    }

    getSize(){
        return this.size
    }

  
    prepend(value) {
        const node = new Node(value);
        if (!this.isEmpty()) {
          node.next = this.head;
        }
        
        this.head = node;
        this.size++;
      }
      
   
    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

    arrayToList(arr) {
        arr.forEach(value => this.append(value));
    }

    insert(value,index){
        if(index<0 || index>this.size){
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            const node= new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }


     middleNode() {
        let slow = this.head;
        let fast = this.head;
      
        while (fast !== null && fast.next !== null) {
          slow = slow.next;
          fast = fast.next.next;
        }
      
        return slow;
      }
      search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0;
        let curr=this.head
        while(curr){
            if(curr.value==value){
                return i
            }
            curr=curr.next
            i++;
        }
        return -1
      }
      
  removeDuplicates() {
    let curr = this.head;

    while (curr && curr.next) {
      if (curr.value === curr.next.value) {
        curr.next = curr.next.next;
        this.size--;
      } else {
        curr = curr.next;
      }
    }
  }
    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let curr=this.head
            let listValues= ''
            while(curr){
                listValues+= `${curr.value} `
                curr=curr.next
            }
            console.log(listValues);
        }
    }
}

const list =  new LinkedList()

const array = [1, 2, 3, 4, 5];
list.arrayToList(array);
list.print();

console.log("List is empty:",list.isEmpty())
console.log("List size:",list.getSize());
list.print()

list.insert(10,0)
list.print()

list.insert(20,0)
list.print()

list.insert(20,1)
list.print()

list.insert(40,2)
list.print()

list.removeDuplicates()
list.print()

console.log(list.search(30));


const middle = list.middleNode();
console.log("Middle node:", middle.value);



