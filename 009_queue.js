let queue = [];
let currentSize = queue.length;
let maxSize = 5

function enqueue(value) {
    if (currentSize < maxSize) {
        if (queue.length == 0) {
            queue[0] = value;
        } else {
            for (let i = currentSize; i >= 0; i--) {
                queue[i + 1] = queue[i];
            }
            queue[0] = value;
        }
        currentSize++;
        queue.length = currentSize;
    } else {
        console.log("Queue is full");
    }
}

function dequeue() {
    for (let i = 0; i < queue.length; i++) {
        queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
}

function displayQueue() {
    console.log(queue);
}

enqueue(10);
enqueue(77);
enqueue(99);
enqueue(91);

dequeue();
displayQueue();