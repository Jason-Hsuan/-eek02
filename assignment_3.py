def maxProduct(nums):
    max_nums=nums[0]*nums[1]
    for i in range(0,len(nums)):
        for j in range(i,len(nums)-1):
            if max_nums < nums[i]*nums[j+1]:
                max_nums = nums[i]*nums[j+1]
            j+=1
        i+=1 
    print(f"得到{max_nums}為最大值")   

maxProduct([5, 20, 2, 10, 6, 10])
maxProduct([5, 30, 2, 4, 6, 10])
maxProduct([-1, 2, -10, 10, 20, 20])
maxProduct([-1, 2, -10, -10, -20, 20])
maxProduct([-1, 2, 20, 20, -20, -20])
maxProduct([-1,20])




    
