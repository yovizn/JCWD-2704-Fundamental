const nambahinValue = (input: number) => {
    const arr = [1, 2, 3, 4, 5];
    const push = arr.push();

    return push;
};

const newMap = new Map<string, string>();

newMap.set('name', 'koco');
newMap.set('name', 'Loco');

console.log(newMap);

class Nodes {
    elements: number;
    next: Nodes | null;

    constructor(input: number) {
        this.elements = input;
        this.next = null;
    }
}

class LinkedList {
    head: Nodes | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(elements: number) {
        const node = new Nodes(elements);
        let current: Nodes;

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size += 1;
    }
}

const linkes = new LinkedList();
linkes.add(1);
linkes.add(2);
linkes.add(3);
linkes.add(4);
linkes.add(5);

console.log(linkes);
