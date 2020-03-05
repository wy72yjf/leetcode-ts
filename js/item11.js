/** 
 * 盛最多水的容器
 * 双指针法
 * 盛水的多少取决于短的那一块， 左右两个指针高度比较较短的向内收缩进行求值
 * 通过双指针方法，两个指针一定会同时经过最大面积对应的指针位置。

                                                           
                  |                     
           |      |                     
           |      |                     
     ......|......|......               
——————————————————————————————————————— 
           m      n
如图，若m,n之间的面积为最大面积。
双指针方法的规律是：每次都会向内移动偏矮的指针（可观察案例）。要证明两个指针一定会移动到m和n位置，只需证明：

m左侧的指针点等于或矮于n，n右侧指针等于或矮于m。
假设m左侧有一个点p，高度高于n.

                                        
        |                                
        |          |                     
        |   |      |                     
        |   |      |                     
     ...|...|......|......               
——————————————————————————————————————— 
        p   m      n
因为:

    AreaMN = ( n - m ) * min( arr[ m ], arr[ n ] )
    AreaPN = ( n - p ) * min( arr[ p ], arr[ n ] )
又：

    (  n - m ) <= ( n - p )
    min( arr[ m ], arr[ n ] ) <= min( arr[ p ], arr[ n ] )
所以： AreaMN < AreaPN, 与m和n构成最大面积相矛盾，所以假设不成立，即m左侧的点都不高于n，即等于或矮于n。同理可证，n右侧指针等于或矮于m。所以通过双指针方法，两个指针一定会同时经过最大面积对应的指针位置。

 * https://leetcode-cn.com/problems/container-with-most-water/solution/sheng-zui-duo-shui-de-rong-qi-by-leetcode/
*/

function maxArea(hgArr) {
  let max = 0, l = 0, r = hgArr.length - 1; 
  while (l < r) {
    max = Math.max(max, (r - l) * Math.min(hgArr[l], hgArr[r]));
    if (hgArr[l] > hgArr[r]) {
      r--;
    } else {
      l++;
    }
  }
  return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));