/** 
 * 三数之和
 * 双指针思想
 * 1. 将数组进行排序
 * 2. 第一位数字采用从前往后遍历进行定位
 * 3. 选定第一个数组后，分别在该数字剩余的头部和尾部添加指针进行搜索
 * https://leetcode-cn.com/problems/3sum/solution/three-sum-ti-jie-by-wonderful611/
*/
let MAXNUM = 100;
let cur_index = 1;
function threeSum(nums) {
  let res = [];
  let len = nums.length;
  nums.sort((a, b) => a - b) // 升序的方式
  if (nums[0]<= 0 && nums[len-1] >=0) { // 同正或同负无解
    for (let i = 0; i < len; ) {
      if (nums[i] > 0) break; // 最小值已为正数
      let l = i + 1;
      let r = len - 1;
      while (l < r && nums[i] * nums[r] <= 0) {  // num[i] * num[r] <= 0 同符号则跳过
        let sum = nums[i] + nums[l] + nums[r];
        console.log(sum);
        if (sum === 0) {
          res.push([nums[i], nums[l], nums[r]])
          while(l < r && nums[l] === nums[++l]) {}  // 数值相同则继续向后
        }
        if (sum < 0) {
          while(l < r && nums[l] === nums[++l]) {}  // 数值相同则继续向后
        }
        if (sum > 0) {
          
          while(l < r && nums[r] === nums[--r]) {}
        }
      }

      while(nums[i] === nums[++i]) {}
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0,0,0,0]))
// console.log(threeSum([-4, -1, -1, 0, 1, 2]));

