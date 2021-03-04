//0x1,0x2,0x3,0x4,..
//1x2,1x3,1x4...
//2x3,2x4....
function maxProduct(nums){
  var max_nums=nums[0]*nums[1];
  for(var i = 0; i <nums.length; i++){
    for(var j = i; j <nums.length-1; j++){
      if(max_nums < nums[i]*nums[j+1]){
        max_nums = nums[i]*nums[j+1];
    } 
  }
  }
console.log(`得到${max_nums}為最大值`);
}
maxProduct([5, 20, 2, 10, 6, 10])
maxProduct([5, 30, 2, 4, 6, 10])
maxProduct([-1, 2, -10, 10, 20, 20])
maxProduct([-1, 2, -10, -10, -20, 20])
maxProduct([-1, 2, 20, 20, -20, -20])
maxProduct([-1,20])
