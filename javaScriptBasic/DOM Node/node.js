/*let textAll =document.querySelectorAll('p')
const massage = textAll[0].innerText
console.log(massage)*/

/* การเพิ่มnodeลูก
let count = 1
function addItem(){
    let Menu = document.getElementById('menu') /*node แม่*/
    /*Menu.setAttribute('type','square')
    const item = document.createElement('li')
    item.innerText = "Item "+ count
    count++
    /*function Appendchild เป็นการนำnodeลูกไปต่อกับ nodeแม่*/
    
    /*Menu.appendChild(item)
}*/

/*การลบ node ลูก
let menu = document.getElementById('menu')
let item = document.getElementById('item3')

menu.removeChild(item)*/

/*การแทนที่ node ลูก
let menu = document.getElementById('menu')
let itemB = document.getElementById('item2')
let newItem = document.createElement('li')
newItem.innerText = 'X'

menu.replaceChild(newItem,itemB)
*/

/* การเพิ่มและลดคลาส คล้ายกับ setattribut แต่ยืดหยุ่นกว่า*/
/*let box = document.querySelector('#box')

function addStyle(){
    box.classList.add('dark')
}
function removeStyle(){
    box.classList.remove('dark')
}
function toggleStyle(){
    box.classList.toggle('dark')
    let containBox = box.classList.contains('dark')
    console.log(containBox)
    if (containBox){
        box.style.color = 'yellow'
    }
    else{
        box.style.color = 'red'
    }
}*/



