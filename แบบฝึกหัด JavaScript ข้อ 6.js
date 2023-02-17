// function removeDuplicateInArray(array1, array2) {
//     let array3 = array1.concat(array2).sort((a,b) => {return a-b})
//     checkDuplicate(array3)
// }

// removeDuplicateInArray([1,2,3],[100,2,1,10])
// removeDuplicateInArray([1,9,8,205,146],[2,6,1,146,3000,8,4])


// function checkDuplicate(x){ // x is string or array
//     let array = []
//     let a = ''
//     let u = ''
//     for (let i = 0; i <= x.length-1; i++) { //ดึงค่าที่จะเอามาเปรียบเทียบตัวแรก
//         let y = x[i]
//         for (let j = 0; j <=x.length-1 ; j++) { // ดึงค่าที่จะเปรียบเทียบตัวที่สอง
//             a = ''
//             let z = x[j]
//             if (i === x.length - 1) {
//                 for (let k = 0; k <=x.length-2 ; k++) { //ใช้สำหรับดึงค่าที่จัเปรียบเทียบตัวสุดท้าย ต้องมาใช้ลูปนี้หากไม่ใช้จะโดนขเามในการเช็คตำแหน่งอินเด็กซ์ที่ใช้ป้องกันการเช็คตัวเองและจบรอบไป
//                     u = ''
//                     let b = x[k]
//                     if (b === y) {
//                         break;
//                     }
//                     else {
//                         u = y
//                     }     
//                 }
//                 if (u === '') {
//                     continue; 
//                     }
//                     else {
//                     array.push(u)
//                     break;
//                     }
//             }
//             else if (i === j) {
//                 continue;        
//             }
//             else if (z === y) {
//                 break;
//             }
//             else {
//                 a = y
//             }
//         }
//         if (a === '') {
//         continue; 
//         }
//         else {
//             array.push(a)
//         }
//     }
//     console.log(array)
// }



// function removeDuplicateInArray(array1,array2){
//     let array3 = array1.filter((e) => !array2.includes(e))
//     let array4 = array2.filter((f) => !array1.includes(f))
//     let array5 = array3.concat(array4).sort((a,b) => a-b)
//     console.log(array5)
// }

removeDuplicateInArray([1,2,3],[100,2,1,10])

