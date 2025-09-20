const savana = "L         Z"
const zebra = 'Z'
const lion = 'L'
let currentPlace = 0
let checkingPlace = currentPlace
const lengthOfSavana = savana.length
let distanceBetweenThem = 0 
let zebraFound = false

while (currentPlace <= lengthOfSavana) {
   
    if (savana[currentPlace] === lion) {
        checkingPlace ++
        zebraFound = false
       
        while (!zebraFound) {
            if (savana[checkingPlace] === zebra){
                distanceBetweenThem = checkingPlace - currentPlace
                break
            } else {
                checkingPlace ++

            }
        }
    }
    currentPlace ++
} 
console.log('spaces between Lion and Zebra =' , distanceBetweenThem - 1);
