/* Create a function that accepts a string and a single character, 
and returns an integer of the count of occurrences the 2nd argument is found in the first one.*/
function strCount(str, letter){  
    //code here
    array1 = str.split("").filter(e => e === letter)
    console.log(array1.length)
  }
strCount('hello','l')
strCount('hello','o')
strCount('hello','z')


// Given a non-empty array of integers, return the result of multiplying the values together in order
function grow(x){
    return x.reduce((acc,c) => acc * c, 1)
}

console.log(grow([1,2,3]))
console.log(grow([4,1,1,1,4]))
console.log(grow([2,2,2,2,2,2]))


// Given an array of integers, return a new array with each value doubled.
function maps(x){
    return x.map(x => x*2)
  }

console.log(maps([1,2,3]))
console.log(maps([4,1,1,1,4]))
console.log(maps([2,2,2,2,2,2]))


// Let's play! You have to return which player won! In case of a draw return Draw!.
const rps = (p1, p2) => {
    return 
};