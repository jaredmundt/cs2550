function divideArray(nums) {
    even_nums = [];
    odd_nums = [];
    for (let i in nums) {
        if (nums[i] % 2 == 0){
            even_nums.push(nums[i]);
        }
        else {
            odd_nums.push(nums[i]);
        }
    }

    even_nums.sort((a,b) => a - b);
    odd_nums.sort((a,b) => a - b);
    
    console.log("Even numbers:");
    if (even_nums.length == 0) {
        console.log("None");
    }
    else {
        for (let i in even_nums) {
            console.log(even_nums[i]);
        }
    }
    
    console.log("Odd numbers:");
    if (odd_nums.length == 0) {
        console.log("None");
    }
    else {
        for (let i in odd_nums) {
            console.log(odd_nums[i]);
        }
    }
}

