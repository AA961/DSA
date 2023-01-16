// write a programme that check maximum occurance of character in string 

let str = "kjfdsjifewhfihfeyqwryuce";
let obj = {};
let maxChar = "";


for (let i = 0; i < str.length; i++) {

    
    if (!obj[str[i]]) {
        obj[str[i]] = 0;
    }

    obj[str[i]]++;
}

console.log(obj);