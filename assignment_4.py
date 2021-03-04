#相加等於目標數值
def twoSum(nums, target):
    for i in range(0, len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i]+nums[j] == target:
                print(f" show [{i},{j}] because nums[{i}]+nums[{j}] is {target}")

result=twoSum([2, 11, 7, 15], 9)
result=twoSum([2, 11, 7, 15], 22)
