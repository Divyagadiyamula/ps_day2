// 1) Program to print 1 to num, num to 1, -1 to -num, -num to -1 by using while loop
// const prompt=require("prompt-sync")();
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


// 2) Write a program to find the largest prime in the given number
// input: 46537
// output: 7
const prompt=require("prompt-sync")();
num = prompt("enter a number: ");
sum = 0;
for (n of num) {
    if (n > 1) {
        c = true;
        for (i = 2; i > n; i--) {
            if (n % i == 0) {
                c = false;
                break;
            }
        }
        if (c) {
            if (sum < n)
                sum = n;
        }
    }
}
console.log(sum);


// 3) Write a program to print the sum of largest and smallest prime digits in the given number
// input: 5497351
// output: 10
const prompt=require("prompt-sync")();
num = prompt("enter a number: ");
lr = 0;
sm=num[0]
for (n of num) {
    if (n > 1) {
        c = true;
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                c = false;
                break;
            }
        }
        if (c) {
            if (lr < n)
                lr = n;
            if(sm>n)
            sm=n
        }
    }
}
console.log(Number(lr)+Number(sm));


// 4) Write a program to print the largest non prime digit in the given number
// input: 463482
// output: 8
// const prompt=require("prompt-sync")();
num = prompt("enter a number: ");
lr = 0;
for (n of num) {
    if (n > 1) {
        c = true;
        for (i = 2; i < n; i--) {
            if (n % i == 0) {
                if(n>lr)
                lr=n;
                c = false;
                break;
            }
        }
    }
}
console.log(lr);

