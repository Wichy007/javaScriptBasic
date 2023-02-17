
// function finalSum(Input){
//     let stringInput = Input.toString();
//     let result = 1
//     while (stringInput.length > 1){
//         result = 1
//         for (i=0;i<stringInput.length;i++) {
//             let letterNumber = stringInput.charAt(i)
//             let number = parseInt(letterNumber)
//             result *= number
//         }
//     stringInput = result.toString()
//     }
// console.log(result)
// }




// function finalSum(num) {
//     let numString = num.toString();   
//     let baseVal = 1;   
//     while (numString.length > 1) {
//         numString.split("").forEach((element) => {baseVal *= element;});
//         numString = baseVal.toString();     
//         baseVal = 1;   
//     }   
//     console.log(parseInt(numString, 10));
// }

// finalSum(39)
// finalSum(999)
// finalSum(4)


const persistence = (x) => (x.toString().length === 1 
? x : persistence(x.toString().split('').reduce((acc, a) => acc * a, 1)));

console.log(persistence(39))

