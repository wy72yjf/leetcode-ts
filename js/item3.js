// 滑动窗口
function lengthOfLongestSubstring(s) {

    let i = 0;
    let j = 0;
    let MaxL = 0;
    while (i < s.length && j < s.length) {
        let index = s.substring(i, j).indexOf(s[j]);
        if (index < 0 ) {
            MaxL = (j - i + 1) > MaxL ? (j - i + 1) : MaxL;
        } else {
            i = i + 1 + index;
        }
        j++;
    }
    return MaxL;
}
lengthOfLongestSubstring('pwwkew');
