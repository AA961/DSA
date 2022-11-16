let data = [3, 10, 11, 15, 19, 30]

let startPoint = 0;
let endPoint = data.length - 1;
let find = 10;
let position = undefined;


function findUsingRecursive(data, s, e) {
    let midPoint = Math.floor((s + e) / 2);

    if (data[midPoint] === find) {
        position = midPoint;
        return;
    } else if (data[midPoint] < find) {
        findUsingRecursive(data, midPoint + 1, e);
    } else {
        findUsingRecursive(data, s, midPoint - 1);
    }
}

findUsingRecursive(data, startPoint, endPoint);

console.log(position);