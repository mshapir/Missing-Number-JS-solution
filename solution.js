/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sorted = nums.sort((a,b) => a > b ? 1 : a < b ? -1 : 0)
    for(var i = 0; i < nums.length + 1; i++){
        if(sorted[i] !== i){
            return i
        }
    }
};
