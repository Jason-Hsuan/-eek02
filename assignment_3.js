function maxProduct(nums){
    var a = nums[0];
    var b = nums[0];
    var c = nums[0];
    var d = nums[0];
    for(var i = 0; i <=nums.length; i++){
        if(nums[i] > a && nums[i] > b){
            b = a;
            a = nums[i];
        }
        else if (nums[i] > b){
            b = nums[i];
        } 
    }
    for(var j = 0; j <=nums.length; j++){
        if(nums[j] < c && nums[j] < d){
            d = c;
            c = nums[j];
        }
        else if (nums[j] < d){
            d = nums[j];
        } 
    }
    var pos_max=a*b;
    var neg_max=c*d;
    if(pos_max > neg_max){
        console.log(`得到${pos_max} 因為 ${a} 和 ${b} 相乘得到最大值`);
        }
    else if(pos_max < neg_max){
        console.log(`得到${neg_max} 因為 ${c} 和 ${d} 相乘得到最大值`);
        }
    else{
        console.log(`得到${pos_max} 因為 ${a} 和 ${b} 還有${c} 和 ${d} 相乘得到最大值`);
        }
}
maxProduct([5, 20, 2, 20, 6, 10])
maxProduct([5, 20, 2, 4, 6, 10])
maxProduct([-1, 2, -10, 10, 20, 20])
maxProduct([-1, 2, -10, -10, -20, 20])
maxProduct([-1, 2, 20, 20, -20, -20])
