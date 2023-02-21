/*ลองเล่นๆ
var str = ''
for(i=1;i<=5;i++){
    str = ''
    for(j=1;j<=10;j++){
        str += j + ''
    }
    console.log(str)
}*/

/*let i=1
while(i<10){
    i++
    console.log(i)
    
}*/

let a = 99
let b = (a<99) ? 'yes':'no' /*ternary operater if else แบบลดรูป*/
console.log(b)
if(a<99){
    console.log('yes')
} 
else{
    console.log('no')       
}

/*จำลองโปรแกรมถอนเงินอย่างง่าย*/
/*let withdraw = 12
let balance = 10000
let check = typeof(withdraw)

if(check != 'number'){
    console.log('กรุณาใส่เฉพาะตัวเลข')
}
else if(withdraw<=balance){
    console.log('ดำเนินการพอนเงินจำนวน',withdraw)
    balance-=withdraw
    console.log('ยอดเงินคงเหลือ',balance)
}
else{
    console.log('ไม่สามารถถอนเงินได้เนื่องจากจำนวนเงินคงเหลือไม่เพียงพอ')
}*/

let status = 1; //0=ปิดไฟ 1=เปิดไฟ
let light;
if(status==0){
    light='ปิดไฟ';
}
else if(status==1){
    light='เปิดไฟ'
}
else{
    light='ไม่พบข้อมูล'
}
console.log(light)

switch(status){
    case 0 : console.log('ปิดไฟ'); break /*ที่ต้องใส่ semi colon เพราะเขียนคำสั่งมากกว่าหนึ่งคำสั่งในบรรทัดเดียวกันต้องใส่ใว้เพื่อบอกโปรแกรมว่าจบคำสั่งใหนตรงใหน*/
    case 1 : console.log('เปิดไฟ'); break
    default : console.log('ไม่พบข้อมูล'); break
}

/*โปรแกรมคำนวณเลขคู่เลขคี่*/

let x = 23

if(x%2==0){
    console.log('เลขคู่')
}
else{
    console.log('เลขคี่')
}

/*โปรแกรมเปรียบเทียบตัวเลข*/

let k = 20
let y = 50

if(k>y){
    console.log('k มีค่ามากกว่า')
}
else{
    console.log('y มีค่ามากกว่า')
}

var output = ''

for(i=1;i<=3;i++){
    output = ''
    output += 'hello wolrd'+i
    console.log(output)
}

console.log(typeof(i))

let l = 12

if(!l){
    console.log('a is null')
}
else{
    console.log('a is not null')
}