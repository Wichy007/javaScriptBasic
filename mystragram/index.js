function appendImage(keyword,index){
    /*สร้าง elementลูก เพื่อเตรียมไปเพิ่มใน Elementแม่ ต่อไป*/
    let imageElement = document.createElement('img')
    imageElement.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`

    let appendImage = document.querySelector('#gallery')
    appendImage.appendChild(imageElement)
}
function showPic(){
    document.querySelector('#gallery').innerHTML = ""
    let keyword = document.querySelector('#input').value
    if (keyword === ""){
        alert("please input keyword")
    }
    else{
        for(i=1;i<=9;i++){
            appendImage(keyword,i)
        }
    }
}
let input = document.querySelector('#input')
input.addEventListener('change',showPic)    


