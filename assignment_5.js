function maxZeros(nums){
    var n=0;
    var n_max=0;
    for(var i=0; i<nums.length; i++){
      if(nums[i]==0){
        n++;
        if(i==nums.length-1){
          if(n>n_max){
            n_max=n;
          }
        }
      }
      else{
        if(n>n_max){
          n_max=n;
          n=0;
        }
      }
  
    }
    console.log(n_max)
  }
  maxZeros([0,1,0,0])
  maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0])
  maxZeros([1, 1, 1, 1, 1])