/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return 1+(num-1)%9;
};
/*
	数字根问题
	一个数x的数根为mod(x-1,9)+1.因为正整数对9取模的结果取值为[0,8],,而数根的取值为[1,9]。
*/

