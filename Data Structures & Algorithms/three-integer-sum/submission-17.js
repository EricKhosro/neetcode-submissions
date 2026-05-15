class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort();
    const counts = new Map();
    const res = [];
    for (const num of nums) counts.set(num, (counts.get(num) || 0) + 1);

    for (let i = 0; i < nums.length - 1; i++) {
      counts.set(nums[i], counts.get(nums[i]) - 1);
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      for (let j = i + 1; j < nums.length; j++) {
        counts.set(nums[j], counts.get(nums[j]) - 1);
        if (j > i + 1 && nums[j] === nums[j - 1]) continue;
        
        const target = 0 - (nums[i] + nums[j]);
        if (counts.get(target)) {
          res.push([nums[i], nums[j], target]);
        }

      }
        for (let j = i + 1; j < nums.length; j++) {
          counts.set(nums[j], counts.get(nums[j]) + 1);
        }
    }

    return res;
  }
}