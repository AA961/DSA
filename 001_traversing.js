let arr = [1, 3, 5, 7, 3, 2, 5, 2]

// printing array
for(let i = 0;i<arr.length;i++){
    // console.log(arr[i])
}

// Inserting value in array at specific posiiton
let newEl = 64
let position = 3

for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
        arr[i + 1] = arr[i]
        if(i == position){
            arr[i] = newEl
        }
    }
}
// we can do same thing using splice method eg data.splice(position,delete,newItem)
console.warn(arr)