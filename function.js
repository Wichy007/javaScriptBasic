function a(){
    console.log('hellow wolrd')
}

a()

function tranfer(){
    alert('tranfer complete')
}

function getIP(){
    return "127.0.0.1"
}
getIP() /*ไม่แสดงผลอะไรเพราะไม่มีตัวแปรมารับค่าจึงไม่ได้แสดงผลเพระาในฟังก์ชันก็ไม่มีคำสั่งให้แสดงผล*/
let x = getIP()
console.log(x)


let y

function plusNumber(a,b){
    y=a+b
    return y
}
plusNumber(12,35)
console.log(y)