/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result=[];
    result[0]=0;
    for(var i=1;i<=num;i++){
        result[i]=result[i>>1]+(i&1); //i&1 判断最后一位是0还是1
    }
    return result;
};