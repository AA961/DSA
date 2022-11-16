let data = [3, 10, 11, 15, 19, 30]

let startPoint = 0;
let endPoint = data.length - 1;
let find = 30;
let position = undefined;

while (startPoint <= endPoint) {
    let midPoint = Math.floor((startPoint + endPoint) / 2);

    if (data[midPoint] === find) {
        position = midPoint;
        break
    } else if (data[midPoint] < find) {
        startPoint = midPoint + 1;
    } else {
        endPoint = midPoint - 1;
    }
}

console.log(position)