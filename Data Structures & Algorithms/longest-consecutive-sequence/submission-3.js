class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let longestStreak = 0;
    for (const num of nums) {
      let curr = num;
      let streak = 0;
      while (set.has(curr)) {
        streak++;
        curr++;
      }
      longestStreak = Math.max(streak, longestStreak);
    }
    return longestStreak;
  }
}