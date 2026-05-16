class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    const subString = new Set();
    let start = 0,
      max = 0;

    for (let i = 0; i < s.length; i++) {
      while (subString.has(s[i])) {
        subString.delete(s[start]);
        start++;
      }
      subString.add(s[i]);
      max = Math.max(max, i - start + 1);
    }
    return max;
  }
}