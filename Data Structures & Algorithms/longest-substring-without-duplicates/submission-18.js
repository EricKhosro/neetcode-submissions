class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let start = 0,
      max = 0,
      curr = 0;

    let map = new Map();
    let currMax = 0;
    while (curr < s.length) {
      if (!map.has(s[curr])) {
        map.set(s[curr], true);
        currMax++;
      } else {
        max = Math.max(max, currMax);
        currMax = 1;
        start++;
        curr = start;
        map = new Map();
        map.set(s[curr], true);
      }
      max = Math.max(max, currMax);
      curr++;
    }

    return max;
  }
}