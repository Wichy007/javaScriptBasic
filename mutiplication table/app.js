let inputValue = ''
let anwser = ''
let showDisplay = ''

function recieveData(){
    anwser=''
    document.querySelector('#display').innerText = ''
    inputValue = document.querySelector('#inputarea').value
    for(i=1;i<=12;i++){
        if(i<=9){
            anwser += inputValue + '*' + i + ' = ' + inputValue*i + '\n'
        }
        else{
            anwser += inputValue + '*' + i + '  = ' + inputValue*i + '\n'
        }
    }
    document.querySelector('#display').innerText = anwser   
}
function clearData(){
    document.querySelector('#inputarea').value = ''
    document.querySelector('#display').innerText = ''
}


