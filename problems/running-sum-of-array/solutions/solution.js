/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const output = [];
    let running_tally = 0;
    for (let i = 0; i < nums.length; i++) {
        running_tally += nums[i]
        output.push(running_tally)
    }
    return output
};