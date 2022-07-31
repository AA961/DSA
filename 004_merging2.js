let arrA = [1, 3, 5, 7, 9]
let arrB = [0, 2, 4, 6, 8, 10]
let arrC = [11, 12, 13, 14, 15]

let arrD = []

let i = 0
let j = 0
let k = 0

while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
        arrD[k] = arrA[i]
        i++
    } else {
        arrD[k] = arrB[j]
        j++
    }
    k++
}
while (i < arrA.length) {
    arrD[k] = arrA[i]
    k++
    i++
}
console.log(arrD)