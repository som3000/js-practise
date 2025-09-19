const num = 8
let current = 1
let factorial = 1
while (current <= num){
    factorial = factorial * current
    current = current + 1
}
console.log("The factorial of" , num , "is" , factorial);
