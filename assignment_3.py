def maxProduct(nums):
  a = nums[0]
  b = nums[0]
  c = nums[0]
  d = nums[0]
  for i in nums:
    if i > a and i > b:
      b = a
      a = i
    elif i > b:
      b = i
  for j in nums:
    if j < c and j < d:
      d = c
      c = j
    elif j < d:
      d=j
  pos_max=a*b
  neg_max=c*d
  if pos_max > neg_max:
    print(f"得到{pos_max} 因為 {a} 和 {b} 相乘得到最大值")
  elif pos_max < neg_max:
    print(f"得到{neg_max} 因為 {c} 和 {d} 相乘得到最大值")
  else:
    print(f"得到{pos_max} 因為 {a} 和 {b} 還有{c} 和 {d} 相乘得到最大值")

maxProduct([5, 20, 2, 20, 6, 10])
maxProduct([5, 20, 2, 4, 6, 10])
maxProduct([-1, 2, -10, 10, 20, 20])
maxProduct([-1, 2, -10, -10, -20, 20])
maxProduct([-1, 2, 20, 20, -20, -20])




    