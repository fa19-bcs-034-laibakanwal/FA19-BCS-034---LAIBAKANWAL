/*************Question#7*************/
function first_last(nums)
{
    var end_pos=nums.length-1;
    if (nums.length-1>=2){
        return nums[0]||nums[end_pos]==10;
    }
}
console.log(first_last([10]));
console.log(first_last([1,3,5,10]));
console.log(first_last([2,4,6]));