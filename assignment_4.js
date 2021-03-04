//相加等於目標數值
function twoSum(nums, target){
    for( var i=0;i<nums.length;i++){
        for( var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                console.log(` show [${i},${j}] because nums[${i}]+nums[${j}] is ${target}`);
            }
        }
    }
}

result=twoSum([2, 11, 7, 15], 9)
result=twoSum([2, 11, 7, 15], 22)