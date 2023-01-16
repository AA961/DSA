class Stack {
    constructor() {
        this.data = new Array();
        this.currentSize = this.data.length;
    }

    #push(item) {
        this.data[this.currentSize] = item;
        this.currentSize++;
    }

    #pop() {
        let lastRemoved = this.data[this.currentSize - 1];
        this.currentSize--;
        this.data.length = this.currentSize;
        return lastRemoved;
    }

    reverseString(str) {
        for (let i = 0; i < str.length; i++) {
            this.#push(str[i]);
        }
        for (let i = 0; i < str.length; i++) {
            str[i] = this.#pop();
        }
        return str.join('');
    }
}

let data = new Stack();
let str = "reverseStringUsingStack";
str = str.split('');
// let result = data.reverseString(str);

console.log(str);