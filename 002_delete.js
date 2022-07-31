let arr = [3, 53, 2, 5, 2, 3]
// let pos = 2
// for (let i = arr.length - 1; i >= 0; i--) {
//     arr[i + 1] = arr[i]
// }
// arr.length = arr.length - 1
let posiiton = 1
for (let i = posiiton; i <= arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}
arr.length = arr.length - 1
console.log(arr)

