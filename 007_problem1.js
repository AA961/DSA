// Find an Even value from an array. Make double of every element and find array length manually

let data = [3, 33, 42, 4, 5, 234, 4, 2, 34, 5, 32];
let totalEvens = 0;
let length = 0;

for (let i = 0; i < data.length; i++) {
    length++;
    if (data[i] % 2 === 0) {
        totalEvens++;
        let double = data[i] * 2;
        data.slice(0, i);
        data[i] = double;
    }
}

console.log(totalEvens);
console.log(data);