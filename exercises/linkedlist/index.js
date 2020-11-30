// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
    }


    insertFirst(data){
        let node = new Node(data, this.head);
        this.head = node;
    }

    size(){
        let counter = 0;
        let node = this.head;

        while(node){
            counter++
            node = node.next
        }

        return counter
    }

    getFirst(){
        return this.head
    }

    getLast(){
        if(this.head == null){
            return null
        }
        
        return this.getAt(this.size() - 1);
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }

        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }

        
        if(this.head.next === null){
            this.head = null;
            return;
        }
        
        let node = this.getAt(this.size() - 2);
        let lastNode = node.next;
        node.next = null;

        return lastNode;
        
    }

    insertLast(data){
        let last = this.getLast();

        if(last){
            last.next = new Node(data);
        }else {
            this.head = new Node(data);
        }
    }

    getAt(index){
        if(!this.head || index > this.size()){
            return null;
        }

        let node = this.head;
        let counter = 0;

        while(true){
            if(counter == index){
                return node;
            }
            counter++;
            node = node.next;
        }

    }

    removeAt(index){
        if(!this.head || index > this.size()){
            return;
        }
        
        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1);

        if(!previous || !previous.next){
            return;
        }
        
        previous.next = previous.next.next;

        
    }


    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data, null);
            return;
        }

        if(index >= this.size() ){
            this.insertLast(data);
            return;
        }

        if(index == 0){
            this.head = new Node(data, this.head);
            return;
        }

        let previous = this.getAt(index - 1) || this.getLast(data);
        let node = new Node(data, previous.next);
        previous.next = node;
    }
    
    forEach(fn){
        let node = this.head;
        let counter = 0;

        while(node){
            fn(node, counter);  // recursive function for callback loop
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;

        while(node){
            yield node;   // callback node for loop
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
