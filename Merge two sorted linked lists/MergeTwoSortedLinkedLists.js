

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep) {
    while (node != null) {
        console.log(node.data);

        node = node.next;

        if (node != null) {
            console.log(sep);
        }
    }
}

function mergeLists(head1, head2) {
    let llist3 = new SinglyLinkedList();
    while(head1 != null && head2!=null){
        if(head1.data < head2.data){
            llist3.insertNode(head1.data);
            head1 = head1.next;
        }
        else{
            llist3.insertNode(head2.data);
            head2 = head2.next;
        }
    }
    if(head1 == null){
        while(head2!=null){
            llist3.insertNode(head2.data);
            head2.next;
            head2 = head2.next;
        }
    }
    else{
        while(head1!=null){
            llist3.insertNode(head1.data);
            head1.next;
            head1 = head1.next;
        }
    }
    return llist3;
}

function main() {
    let llist1 = new SinglyLinkedList();
    llist1.insertNode(1);
    llist1.insertNode(2);
    llist1.insertNode(3);
    let llist2 = new SinglyLinkedList();
    llist2.insertNode(3);
    llist2.insertNode(4);
    let llist3 = mergeLists(llist1.head, llist2.head);
    printSinglyLinkedList(llist3.head, " ");
}
main();