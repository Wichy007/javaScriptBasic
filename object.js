var member = 'yes'
let product = {
    name : 'เมาส์',
    price : 1500,
    color : 'black',
    catagory : 'computer',
    size : 'M',
    /*การสร้างฟังก์ชันใน ออบเจคต์เรียกว่าเมธอด*/
    displayProduct:function(){
        return "ชื่อสินค้า =" + this.name + " ราคา = " + this.price + " หมวดหมู่ = " + this.catagory /*เปลี่ยนจากชื่อออบเจกต์เป็น this ดพราะอยู่ในออบเจกต์อยู่แล้ว*/
    },
    discount:function(memberLevel){
        if(member=='yes' && memberLevel=="gold"){
            return this.price - (this.price*15/100)
        }
        else if(member=='yes' && memberLevel=='silver'){
            return this.price - (this.price*10/100)
        }
        else{
            return this.price
        }
    }
}

console.log(product.discount('gold'))
document.write(product.displayProduct())
console.log('ชื่อสินค่า = ',product.name)

/*confirm('แน่ใจหรือไม่')
alert('ระวัง')
console.warn('waaaaa')
console.error('fail')*/