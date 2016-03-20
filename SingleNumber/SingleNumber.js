/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((prev,cur)=>(prev^cur)); //ES6函数写法 ^异或 1^1=0 0^0=0 1^0=1 0^1=1
};