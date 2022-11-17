function checkPalindrome(s) {
    let startPoint = 0;
    let endPoint = s.length - 1;
    let isPalindrome = true;
    while (startPoint < endPoint) {
        if (s[startPoint] != s[endPoint]) {
            isPalindrome = false;
            break;
        }
        startPoint++;
        endPoint--;
    }
    return isPalindrome;
}

let result = checkPalindrome("level");

console.log(result);