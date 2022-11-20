class Queue {
    constructor(size) {
        this.maxSize = size;
        this.data = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;
    }

    enQueue(value) {
        if (this.currentSize != this.maxSize) {
            if (this.rear == this.maxSize - 1) {
                this.rear = 0;
            } else {
                this.rear++;
            }
            this.data[this.rear] = value;
            this.currentSize++;
            if (this.front == -1) {
                this.front = this.rear;
            }
        }
    }

    deQueue() {
        if (this.data.length == 0) {
            this.front = -1;
            this.rear = -1;
            console.log("Queue is empty")
        } else {
            this.data[this.front] = null;
            if (this.front == this.maxSize - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.currentSize--;
        }
    }
}

let queue = new Queue(3);
queue.enQueue(10);
queue.enQueue(70);
queue.deQueue();
queue.enQueue(90);
// queue.enQueue(100);
// queue.enQueue(101);
console.log(queue)