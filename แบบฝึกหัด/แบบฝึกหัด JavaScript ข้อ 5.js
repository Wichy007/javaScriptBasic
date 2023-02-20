function stringPowByPosition(Text){
    let powLetter = ''
    let result = ''
    for (i=0;i<=Text.length;i++){
        let letter = Text[i]
        result += powLetter + '-'
        powLetter = ''
        for (j=-1;j<i;j++){
            powLetter += letter  
        }
    }
    console.log(result.substring(0,result.length-1))
}

stringPowByPosition('1234545231378545378413547534134537867984234153463413134564375346384234768546843575384537534745384121467468742346387856343')