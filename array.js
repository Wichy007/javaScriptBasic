// let num1=1,num2=2,num3=3,num4=4,num5=5; หลายข้อมูลหลายตัวแปรสร้าง array ดีกว่า

/*วิธีสร้าง array แบบที่ 1
let number = Array(100,'200',300,400.99,500,600,true);//สมาชิกใน array สามมารถมีความต่างของประเภทข้อมูลได้
console.log(number)
console.log('ตัวแรก =',number[0])*/

/*วิธีสร้าง array แบบที่2*/
let colors = ["แดง","เขียว","ชมพู","ขาว"]
console.log(colors[0])
colors[1]="เหลือง" /*วิฑีเปลี่ยนแปลงค่าใน array*/
console.log(colors)

let count=colors.length /*ใว้นับจำนวนสมาชิกในอาเรย์*/
console.log(count)

let result = colors.sort() /* เรียงลำดับในอาเรย์จากน้อยไปมาก และเรียบแบบนั้นตลอดไปนับจากนี้*/
console.log(result)
console.log(colors)

colors.push('ม่วง') /*เพิม่สมาชิกต่อท้าย*/
console.log(colors)
count = colors.length

console.log(typeof(colors[0]))


/*การเข้าถึงสมาชิกในอาเรย์โดยใช้ for loop*/
let str = ''
for(i=0;i<count;i++){
    str += colors[i] + '\n'  /*blackslach n เท่ากับขึ้นบรรทัดใหม่*/
}
console.log(str)