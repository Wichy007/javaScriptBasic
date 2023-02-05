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