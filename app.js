/*ท้ายคำสั่งจะมี ; หรือไม่มีก็ได้*/
document.write("<h1>JavaScript"+ /*ภาษานี้ไม่สามารถเขียนคำหรือประโยคคนละบรรทัดได้เว้นแต่จะใช้เงื่อนไขบางอย่างดังแสดง*/
                "Basic</h1>")
document.write("<p>welcome</p>")

// alert("สวัสดีครับ")
console.log(`hello 
            javascript`) /*เขียนหลายบรรทัดแบบนี้ก็ได้*/
console.error("เจอไวรัส")
console.warn("ระวังข้อ" /*เขียนหลายบรรทัดแบบนี้ก็ได้*/
,"ผิดพลาด")

let name;
name = "Naravit"

console.log(typeof(name)) /*ฟังชันก์ typeof ใว้เช็คชนิดข้อมูลได้*/
var age = 20

document.write("ชื่อ", name,"อายุ",age)
document.write("<br>")
name ="vit" /*ตัวแปรสามารถเปลี่ยนแปลงค่าได้ และสามารถกำหนดค่าในบรรทัดใดก็ได้*/
document.write("ชื่อ", name,"อายุ",age)
/*หากไม่อยากให้ตัวแปรเปลี่ยนแปลงค่าให้ใช้ฟังก์ชัน const โดยต้องกำหนดค่าทันทีในบรรทัดเดียวกัน*/