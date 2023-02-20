function findCoupleAddEqualTarget(nums, target){
    let array = [];
    for(let i = 0; i < nums.length; i++){
        let x = nums[i]
        let y = ''
        for(let j = 0; j < nums.length; j++){
            y = nums[j]
            if(i === j ){continue;}
            if(x + y === target){
                array.push((nums.indexOf(x)),(nums.indexOf(y)))
                console.log(array)
                break;
            }
        }
        if(x + y === target){break;}
    }
}

findCoupleAddEqualTarget([3,2,4],6)
findCoupleAddEqualTarget([2,7,11,15],9)