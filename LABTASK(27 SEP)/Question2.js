/*************Question 2************/
var digits = "23618";
var arr=[];
for(var i=0; i <=digits.length-1;i++)
{
    arr.push(parseInt(digits[i]));
}
function sum(sum,num)
{
    return sum+num;
}
console.log(arr.reduce(sum));