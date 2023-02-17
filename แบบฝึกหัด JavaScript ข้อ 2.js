/*สร้างฟังก์ชันสร้างผลรวมของตัวเลขที่อินพุทเข้าไปตำแหน่งต่อตำแหน่งโดยแต่ละตำแหน่งให้เอามายกกำลังกับตำแหน่งของตัวเองแล้วค่อยเอาไปบวกกัน*/
function addAllNumber(input){
    let result = 0
    let stringInput = input.toString()
    for (i=0;i<stringInput.length;i++) {
        let letterNumber = stringInput.charAt(i)
        let number = parseInt(letterNumber)
        result += number**(i+1)
    }
    console.log(result)
}

addAllNumber(89)
addAllNumber(123)
addAllNumber(65)
addAllNumber(321)