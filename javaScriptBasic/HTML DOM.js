let a = document.querySelector('p')
let b = document.getElementById('demo')
let getClassBox = document.querySelector('.box')
let getClassLorem = document.querySelector('.lorem')



function displayText(){
    b.innerText = "สอนจาวาสคริปต์เบื้องต้น" /*มีผลกับข้อความ*/
    b.innerHTML = "<strong>สอนjavascript เบื้องต้น</strong>"
     /*มีผลกับพื้นที่ใน HTML*/
     
}

function changeToLight(){
    getClassBox.setAttribute('class','light')
}
function changeToDark(){
    getClassBox.setAttribute('class','dark')
}

/*c.style.color ="red"
c.style.backgroundColor = "yellow"
c.style.display = "inline"
*/
// c.setAttribute('class','article')

console.log(a)
console.log(b)
// console.log(c)

