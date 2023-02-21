paidChange(100, 35)

function paidChange(payment, price){
    let outputData = {}
    let change = payment - price
        if (change/1000 > 0){
            outputData[1000]= Math.floor(change / 1000) + ' ใบ'
            change -= Math.floor(change / 1000)*1000
        }
        if(change / 500 > 0){
            outputData[500] = Math.floor(change / 500) + ' ใบ'
            change -= Math.floor(change / 500)*500
        }
        if (change / 100 > 0){
            outputData[100] = Math.floor(change / 100) + ' ใบ'
            change -= Math.floor(change / 100)*100
        }
        if (change / 50 > 0){
            outputData[50] = Math.floor(change / 50) + ' ใบ'
            change -= Math.floor(change / 50)*50
        }
        if (change / 20 > 0){
            outputData[20] = Math.floor(change / 20) + ' ใบ'
            change -= Math.floor(change / 20)*20
        }
        if (change / 10 > 0){
            outputData[10] = Math.floor(change / 10) + ' ใบ'
            change -= Math.floor(change / 10)*10
        }
        if (change / 5 > 0){
            outputData[5] = Math.floor(change / 5) + ' ใบ'
            change -= Math.floor(change / 5)*5
        }
        if (change / 2 > 0){
            outputData[2] = Math.floor(change / 2) + ' ใบ'
            change -= Math.floor(change / 2)*2
        }
        if( change / 1 > 0){
            outputData[1] = Math.floor(change / 1) + 'ใบ'
            change -= Math.floor(change / 1)*1
        }
        console.log(outputData)
}



