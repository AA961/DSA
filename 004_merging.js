let arrA = [1, 3, 5, 7, 9]
let arrB = [0, 2, 4, 6, 8]

let arrC = []
for (let i = 0; i <= arrA.length - 1; i++) {
    arrC[i] = arrA[i]
}
for (let i = 0; i <= arrB.length - 1; i++) {
    arrC[arrA.length + i] = arrB[i]
}
// arrC.sort()
console.log(arrC)

// using shortCut
let array3 = [...arrA,...arrB]
console.log(array3)