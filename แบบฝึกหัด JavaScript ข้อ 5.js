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

stringPowByPosition('abcd')