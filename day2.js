// 1) Program to print 1 to num, num to 1, -1 to -num, -num to -1 by using while loop
const prompt=require("prompt-sync")();
num= +prompt("enter a number: ");
console.log("1 to num");
let sum=1
while(sum!=num+1){
    console.log(sum);
    i++;
}
console.log("num to 1");
let i=num
while(i!=0){
    console.log(i);
    i--;
}
console.log("-1 to -num");
let j=-1
while(j!=-num-1){
    console.log(j);
    j--;
}
console.log("-num to -1");
let k=-num
while(k!=0){
    console.log(k);
    k++;
}