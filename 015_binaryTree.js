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
        if (this.search(node.value, root)) {
            console.log(`${node.value} is already in the tree`);
            return;
        }
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

    preOrder(root) {
        // document.write("Pre Order")
        if (root) {
            document.write(root.value + ',  ');
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    };

    inOrder(root) {
        // document.write("In Order")
        if (root) {
            this.inOrder(root.left);
            document.write(root.value + ',  ');
            this.preOrder(root.right);
        }
    };

    postOrder(root) {
        // document.write("Post Order")
        if (root) {
            this.preOrder(root.left);
            this.preOrder(root.right);
            document.write(root.value + ',  ');
        }
    };

    search(value, root) {
        if (root) {
            if (root.value === value) {
                return true;
            } else if (root.value < value) {
                return this.search(value, root.right);
            } else if (root.value > value) {
                return this.search(value, root.left);
            }
        } else {
            return false;
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


// console.log(binrayTree)
// console.log(binrayTree.search(14, binrayTree.root));
// binrayTree.preOrder(binrayTree.root);
// binrayTree.inOrder(binrayTree.root);
binrayTree.postOrder(binrayTree.root);