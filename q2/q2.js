function twoSum(nums, target) {
    const numMap = {}; 

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; 
        const complement = target - num; 

       
        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }

        
        numMap[num] = i;
    }
}

