const nums = [10, 20, 30, 40, 50];
console.log(nums)

var [a,,b]= nums;
nums[0]=b;nums[2]=a;
console.log(nums)

var [,a,,b]= nums;
nums[1]=b;nums[3]=a;
console.log(nums)