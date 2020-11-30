// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let node = list.head;
    let fastNode = list.head;

    if(!node){
        return;
    }

    while(fastNode.next && fastNode.next.next){
        fastNode = fastNode.next.next;
        node = node.next;

        if(node === fastNode){
            return true;
        }
    }

    return false;
}

module.exports = circular;
