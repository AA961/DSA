class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class Tree {
    constructor() {
        this.root = null;
    }

    createTree(value) {
        let node = new Node(value);

        if (this.root == null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (root.value > node.value) {
            if (root.left == null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right == null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

}

let binrayTree = new Tree();

binrayTree.createTree(14)
binrayTree.createTree(15)
binrayTree.createTree(4)
binrayTree.createTree(9)
binrayTree.createTree(7)
binrayTree.createTree(18)
binrayTree.createTree(3)
binrayTree.createTree(5)
binrayTree.createTree(16)
binrayTree.createTree(4)
binrayTree.createTree(20)
binrayTree.createTree(17)
binrayTree.createTree(9)
binrayTree.createTree(14)
binrayTree.createTree(5)


console.warn(binrayTree)