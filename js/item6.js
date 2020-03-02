/** 
 * 按照z字进行字符串打印
 * 在向下的过程中行号增加， 拐点向上后 行号减小  向下的长度等于row 斜向上的长度等于row
 * 参考地址： https://leetcode-cn.com/problems/zigzag-conversion/solution/zzi-xing-bian-huan-by-jyd/
*/


function convert(s, row) {
    if (s.length <= row) {
        return s;
    }
    if (row < 2) {
        return s;
    }
    let result = [];
    let i = 0; flag = -1;
    for (let j = 0, len = s.length; j <len; j++) {
        if (!result[i]) {
            result[i] = '';
        }
        result[i] += s[j];
        if (i === 0 || (i === (row - 1))) {
            flag = -flag;
        }
        i += flag;  // 向下的过程i++ 向上的过程i--
    }
    return result.join('');
}

function  transposeMatrix(arr) {
    let lenI = arr.length;
    let arr2 = [];
    for (let i = 0; i < lenI; i++) {
        lenJ = arr[i].length;
        for (let j = 0; j < lenJ; j++) {
            if (!arr2[j]) {
                arr2[j] = [];
            }
            arr2[j][i] = arr[i][j];
        }

    }
    return arr2;
}
// let result = transposeMatrix([[1, 2, 3, 4], [5, 6, 7, 8]]);


let result = convert('LEETCODEISHIRING', 4);
console.log(result);