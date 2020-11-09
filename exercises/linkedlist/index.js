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
        
        let node = this.head;

        while(node.next){
            node = node.next;
        }

        return node;
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

        let node = this.head;

        if(this.head.next === null){
            this.head = null;
            return;
        }

        while(true){
            if(node.next.next == null){
                node.next = null;
                return node;
            }
            node = node.next;
        }
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

        let node = this.head;
        let pointer = this.head.next; 
        let counter = 1;

        if(index === 0){
            this.head = this.head.next;
        }

        while(pointer){
            if(index == counter){
                node.next = pointer.next;
                return;
            }
            counter++;
            node = pointer;
            pointer = pointer.next;
        }
    }
}

module.exports = { Node, LinkedList };
