/** 
 * next求值参考地址： https://blog.csdn.net/yearn520/article/details/6729426?depth_1-utm_source=distribute.wap_relevant.none-task&utm_source=distribute.wap_relevant.none-task
 * 1.如果当前字符i的前一个 prefix 为0， 当前值与首字母不相等， 则prefix[i] = 0
 * 2.如果当前字符i的前一个 prefix 为0， 当前值与首字母相等， 则prefix[i] = 1
 * 3.如果当前字符i 与位置为prefix[i-1]相等 则 prefix[i] = prefix[i-1] + 1;
 * 4.如果当前字符i 与位置为prefix[i-1]不相等， 此时存在子串匹配的情况需要进行递归求值
*/

function setPrefix(str) {
    let prefix = [];
    prefix[0] = 0;
    for (let i = 1, len = str.length; i < len; i++) {
        let k = prefix[i - 1];
        while(str[i] != str[k] && k != 0) {
            k = prefix[k - 1];
        }
        if (str[i] == str[k]) {
            prefix[i] = k + 1;
        } else {
            prefix[i] = 0;
        }
    }
    return prefix;
}
let result = setPrefix('agctagcagctagctg');
console.log(result);