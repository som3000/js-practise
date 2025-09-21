const savana = "L   Z   L  Z   L"
const zebra = 'Z'
const lion = 'L'
let currentPlace = 0
let checkingPlace = currentPlace
const lengthOfSavana = savana.length
let lionPosition = 0
let zebraPosition = 0
let numZebra = 0
let numLion = 0
let currentLetter
for (;currentPlace <= lengthOfSavana ; currentPlace ++ ) {
    currentLetter = savana[currentPlace]
    if (currentLetter === lion){
        lionPosition = currentPlace
        numLion ++
        console.log("the position of" , numLion , "lion is" , lionPosition );
        

    }
    if (currentLetter === zebra){
        zebraPosition = currentPlace
        numZebra ++
        console.log("the postion of" , numZebra , "zebra is" , zebraPosition );
    } 
}
