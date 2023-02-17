let string = "Hi! Hi!"
let removeSuccess = ""
let letter = ""

/*remove เครื่องหมายตกใจออกทุกตัว
for(i=0;i<string.length;i++){
    letter = string.charAt(i)
    if(letter === '!'){
        continue
    }
    else{
        removeSuccess += letter
    }
}
console.log(removeSuccess)*/

/*remove เครื่องหมายตกใจออกเฉพาะตัวสุดท้าย*/
for(i=0;i<string.length;i++){
    letter = string.charAt(i)
    if(letter === '!' && i === (string.length - 1)){
        continue
    }
    else{
        removeSuccess += letter
    }
}
console.log(removeSuccess)

    

