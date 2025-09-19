let count = 0
let needed = 9
let currentNum = 2
let divCheck  // divisibilty to be checked
let isPrime 
let remainder;

while (count <needed){
  divCheck = 2
  isPrime = 1
    while ( divCheck < currentNum ) {
        remainder = currentNum % divCheck 
          if (remainder === 0){
            isPrime = 0
            break
          } 
            divCheck++ 
    } 
    if (isPrime === 1) {
        count++
        console.log(currentNum);
        
    } 
    currentNum++
}         // don't know why the last number is printed twice
