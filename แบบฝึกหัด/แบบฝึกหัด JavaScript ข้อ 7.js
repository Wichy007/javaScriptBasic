// rearrangeOnlyOdd([7,1])
// rearrangeOnlyOdd([5,8,6,3,4])
rearrangeOnlyOdd([9,8,7,6,5,4,3,2,1,0,4,5,9,4,6,5,4,8,9,6,1,3,1,5,6,7,8,6,4,1,3,5,7,5,4,2,3,16,4,5,231,63,37,63,1,3,1,2,5,7,8,46,4,2,31,6,46,76,4,34,3,13,16,4769])


function rearrangeOnlyOdd(array){
    let indextObject = {}
    let sortArray = []
    let indexArray = []
    array.forEach((e,i) => indextObject[i] = e);
    for (let i = 0; i <array.length; i++) {
        if (indextObject[i]%2 !== 0){
            indexArray.push(i)
            sortArray.push(indextObject[i])
        }
    }
    sortArray.sort((a,b) => a-b)
    for (let j = 0; j < indexArray.length; j++) {
        indextObject[indexArray[j]] = sortArray.shift()
    }
    for (let k=0; k <array.length; k++) {
        sortArray.push(indextObject[k]) 
    }
    console.log(sortArray)
}