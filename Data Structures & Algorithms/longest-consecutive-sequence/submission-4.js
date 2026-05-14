class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let longestStreak = 0;
    for (const num of nums) {
      let streak = 0,
        curr = num;

      while (set.has(curr)) {
        streak++;
        curr++;
      }
      longestStreak = Math.max(longestStreak, streak);
    }

    return longestStreak;
  }
}