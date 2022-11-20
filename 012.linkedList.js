let head = {
    value: "",
    next: null,
}

let tail = head;

function append(value) {
    let newNode = {
        value: value,
        next: null,
    }
    tail.next = newNode;
    tail = newNode;
}

head.value = 50;

append(100);
append(150);
append(200);
console.log(head);

