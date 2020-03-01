var twoSum = function(nums, target) {
    let map = {};
    let result = [];
    nums.forEach((el, index) => {
        map[el] = index;
    });
    for(let i = 0, len=nums.length; i < len; i++) {
        let subnum = target - nums[i];
        if (map[subnum] && i != map[subnum]) {
            result = [i, map[subnum]]
        }
    }
    console.log(result);
    return result
};
twoSum([2, 7, 11, 15], 9);