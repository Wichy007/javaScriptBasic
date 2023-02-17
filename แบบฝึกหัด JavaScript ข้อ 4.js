function pullMiddleLetter(textInput){
    let middleLetter = ''
    let devineTextLenght = textInput.length/2
    if(textInput.length%2 === 0 ){
        for(i=devineTextLenght-1;i<=devineTextLenght;i++){
            let pull = textInput.charAt(i)
            middleLetter += pull  
        }
    }
    else{
        for(i=devineTextLenght-0.5;i<=devineTextLenght-0.5;i++){
            let pull = textInput.charAt(i)
            middleLetter += pull  
        }
    }
    console.log(middleLetter)
}

pullMiddleLetter('test')
pullMiddleLetter('testing')
pullMiddleLetter('middle')
pullMiddleLetter('a')
