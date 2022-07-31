let data = [3,532,5,2,3,4]

let newEl = 76

for(let i = data.length-1;i>=0;i--){
    data[i+1] = data[i]
    if(i == 0){
        data[i] = 76
    }
}
console.error(data)

data.splice(2,0,3)
console.log(data)