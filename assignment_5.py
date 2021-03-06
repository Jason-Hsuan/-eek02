def maxZeros(nums):
  n=0
  n_max=0
  for i in range(0, len(nums)):
    if nums[i] == 0:
      n+=1
      if i == len(nums)-1:#8
        if n > n_max:
          n_max = n
    else:
      if n >= n_max:
        n_max = n
        n=0
      else:
        n=0
  print(n_max)
# 1:   nums[0]=1; 
# 2:   nums[1]=0; n=1;
# 3:   nums[2]=0; n=2;
# 4:   nums[3]=0; n=3;
# 5:   nums[4]=1; n=3; n_max=3;
# 6:   nums[5]=1; n=3; n_max=3;
# 7:   nums[6]=1; n=3; n_max=3;
# 8:   nums[7]=0; n=1; n_max=3;
# 9:   nums[8]=0; n=2; n_max=3;

maxZeros([0,1,0,0])
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0])
maxZeros([1, 1, 1, 1, 1])
maxZeros([0,0,0,1,0,0,0,1,0])
maxZeros([0,0,0,1,0,0,1,0,0])
