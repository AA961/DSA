let arr = [1, 5, 2, 52, 23, 2]
let val = 22
let index = null

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == val) {
        index = i
        break
    }
}
if (index) {
    console.log(`${val} is in arr`)
} else {
    console.log(`${val} is not in arr`)
}


// we can do samething using indexOf() method arr.indexOf(23)

// using indexof
let condition = null
if (arr.includes(val)) {
    console.log(`${val} is in arr`)
} else {
    console.log(`${val} is not in arr`)
}
