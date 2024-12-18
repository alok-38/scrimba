var targetIndices = function (nums, target) {
    // Sort the array
    nums.sort((a, b) => a - b);
    // Array to store the target index
    let indices = [];
    // loop through the sorted array
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === target) {
            indices.push(index)
        }
    }
    return indices;
};

let nums = [5, 1, 3, 5, 3, 1, 5];
let target = 5;

console.log(targetIndices(nums, target));
