function runningSum(nums) {
    // Array to store the running sum
    let result = [];
    // Variable to store the cummulative sum
    let sum = 0;
    // Loop through the input array
    for (let index = 0; index < nums.length; index++) {
        sum += nums[index];
        result.push(sum);
    }
    return result;
}

// usage
const numbers = [1, 2, 3, 4];
console.log(runningSum(numbers));
