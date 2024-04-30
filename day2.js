// console.log("hello");
// console.log("welcome");
// let a=3;
// let b=5;
// if(a!=b);
// {
//     console.log("true statement");
// }
// console.log("hi");
// if(true);
// console.log("hello");
// console.log("hi");
// if(false)
// console.log("hello");
// if(false){
//     console.log("statement1")
// }
// else if(false){
//     console.log("statement2")
// }
// elseif ladder
// const prompt=require("prompt-sync")();
// let user=prompt("enter user: ")
// let password=prompt("enter password: ")
// if(user=="admin" && password=="password"){
//     console.log("login success")
// }
// else{
//     console.log("invalid credentials")
// }
//switch statement syntax
// let num=2;
// switch(expression){
//     case 1:State;
//     break;
//     case 2:State;
//     break;
//     case 3:State;
//     break;
//     default:state;
// }
// let num=0;
// switch(num){
//     case 1:console.log("monday");
//     case 2:console.log("tuesday");break;
//     case 3:console.log("wednesday");break;
//     case 4:console.log("thursday");break;
//     case 5:console.log("friday");break;
//     default:console.log("holiday")

// }
// let day= +prompt();
// let isholiday=true;
// switch(day){
//     case 0:console.log("sunday");break;
//     case 1:
//         if(false){
//             console.log("enjoy the holiday");
//         }
        
//     case 2:
//         if(true){
//             console.log("working day");
//         }
//         else{
//             console.log("hello")
//         }
//         break;
//     default:console.log("do work")

// }
// for(i=1;i<=15;i++){
//     if(i%3==0 && i%5==0){
//     console.log("FizzBuzz")
//     }
//     else if(i%3==0){
//         console.log("fizz")
//     }
//     else if(i%5==0){
//         console.log("buzz")
//     }
//     else{
//         console.log(i)
//     }
// }
// const prompt=require("prompt-sync")();
// let max;
// let num1=+prompt("enter a number: ");
// let num2=+prompt("enter a number: ");
// let num3=+prompt("enter a number: ");
// if (num1 >= num2 && num1 >= num3) {
//     max = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     max = num2;
// } else {
//     max = num3;
// }

// // Display the maximum using conditional statements
// console.log("maximum number is",max);

// // Using ternary operator to find the maximum
// max = (num1 >= num2 && num1 >= num3) ? num1 : (num2 >= num1 && num2 >= num3) ? num2 : num3;

// Display the maximum using ternary operator
// console.log("Maximum using ternary operator:", max);
// const prompt=require("prompt-sync")();
// let ch=prompt("enter a character: ");
// if(ch=='a'|| ch=='e' || ch=='i' || ch=='o' || ch=='u'){
//     console.log("enter character is vowel",ch)
// }
// else{
//     console.log(`${ch} is not a vowel`)
// }
// const prompt=require("prompt-sync")();
// let hour;
// hour=prompt("enter a hour: ");
// // hour=prompt("enter a hour: ");
// // hour=prompt("enter a hour: ");
// // hour=prompt("enter a hour: ");
// if(hour<=5 && hour<=11){
//     console.log("goodmorning")

// }
// else if(hour>11 && hour<=17){
//     console.log("good Afternoon")
// }
// else if(hour>17 && hour<=22){
//     console.log("good evening")
// }
// else{
//     console.log("good night")
// }
// prompt and alert are the bom methods
// bom(browser object method)
// const prompt=require("prompt-sync")();
// let ip=prompt()
// switch(ip){
//     case "user":console.log("user loged in")
//     break;
//     default:console.log("who r u")
// }
// //for even numbers
// for(i=100;i>=50;i=i-2){
//     console.log(i)
// }
//for even numbers using while loop
// let i=100
// while(i>=50){
// console.log(i);
// i--;
// }
// let i=10
// while(i>=5){
//     console.log(i)
//     i--;
// }
// let i=10;
// do{
//     console.log(i)
//     i++;
// }
// while(i<=15)
//to print 2table
// let a=2;
// for(i=1;i<=10;i++){
//     console.log(`${a} x ${i} = ${a*i}`);
// }
//functions
// function demo(){
//     //console.log("hello")
//     return "hello" 
// }
// console.log(demo());
// const prompt=require("prompt-sync")();
// let ip=prompt("enter a integer")
// let ip1=prompt("enter another integer")
// if(ip>ip1 ){
//     max=ip
//     console.log("entered number is highest",max)
// }
// let a=5;
// let b=-5;
// let c=7;
// if(a>b && a>=c){
//     console.log("the sign is +")
// }
// else if(b<a && b<c){
//     console.log("the sign is -")
// }
// let a=3;
// let b=-1;
// let c=0;
// if(a<b && a<c){
//     console.log(a)
// }
// else if(a>b && a>c){
//     console.log(a)
// }
// else if(c>a && c>b){
//     console.log(c)
// }
// else{
//     console.log("the sign is +")
// }
//   function addition(a,b){
//     let sum=`sum of ${a} and ${b} is ${sum}`
//     return sum;
//   }
//  Strings:group of characters
// the characters are written in double quotes is konown as string,even a single space can be treated as a character 
//let str="welco\"m\"e"
//console.log(str.length)
//console.log(str[2])
//console.log(str[str.length-1])
//console.log(str)
// let str=`w
// e
// l
// c
// o
// m
// e`
// to print the welcome in line vy line
// console.log(str)
// let str="welcome"
// for(i=0;i<str.length;i++){
//     if(i%2==0)
//     console.log(str[i])
// else{
//     console.log("divya")
// }
// }
//output
// w
// e
// l
// c
// o
// m
// e
//-------------------------------------------------------------
//Palindrome
// let str="nan";
// let ntr=""
// for(i=str.length-1;i>=0;i--){
//     console.log(str[i])
// }
// let str="nan";
// let ntr=""
// for(i=str.length-1;i>=0;i--){
//     nstr+=str[i]
//     console.log(str[i])
// To see the outuput by using index values at two methods
// 1.charAt
// 2.at
// variablename.method
// let str="welcome"
// console.log(str.charAt(3))
// // to see the ascii value of the character we use charCodeAt
// console.log(str.charCodeAt(3))
// // to represent the given character in Uppercase we wse toUpperCase(index value) method
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// // concatination
// let str1="divya"
// let str2="ramya"
// let str3=str2.concat(` divya`)
// console.log(str3)
// trim method:it is used to remove the spce between the strings
// to remove the space at starting we use trimStart()
// to remove the space at starting we use trimEnd()
// trim():to remove the space at starting and ending
// let str1="  divya ramya "
// console.log(str1.trim()) 
// let b1=10
// let b2=10
// let b3=10
// let b4=50
// if(b1>b2 && b1>b3 && b1>b4 ){
//     console.log("the bowel1 contains laddus without poision")
// }
// else if(b2>b1 && b2>b3 && b2>b4){
//     console.log("the bowel2 contains laddus without poision")
// }
// else if(b3>b1 && b3>b2 && b3>b4){
//     console.log("the bowel3 contains laddus without poision")
// }
// else{
//     console.log("the bowel4 contains poision laddus")
// }
// let str1="a,e,i,o,u"  
// let str="divya"
// let str2;
// for(i=5;i<=str1;i++){
//     if("a || e || i || o || u"){
//         console.log(str2)
//     }
// }
// let str="hElLo WorLD";
// for(i=str.length-1;i>=0;i++){
//     console.log(str.toUpperCase())
// }
// 24/4/24
// string slice
// let str="divya"
// console.log(str.slice(1,3))
// substring
// let str="something"
// let str1=str.substring(2,5)
// console.log(str1)
// padstart
// let str="divya"
// console.log(str.padStart(7,"*"))
// replace
// let str="divya"
//  console.log(str.replace("/javascript/i","react"))//i is the case insesitive means if the string is upper or lower case it will give output
// //  g is the global it will check globally
// console.log(str.replace("/javascript/g","react"))
// console.log(replaceAll("divya","javascript"))
// let str="d,i,v,y,a"
// console.log(str.split(","))
// javascript string search methods
// indexof
// let str="divya"
// console.log(str.indexOf("v"))
// lastindexof
// let str="divya"
// console.log(str.lastIndexOf("a"))
// search()method
// let str="divya"
// console.log(str.search("divya"))
// match() method
// let str="its rainin"
// console.log(str.match("in")) output:[ 'in', index: 6, input: 'its rainin', groups: undefined ]
// matchAll() method
// let str="mom"
// let nstr=""
// for(i=str.length-1;i>=0;i--){
//     nstr+=str[i];
// }
// console.log(nstr)
// if(nstr==str){
//     console.log("is palindrome")
// }
// else{
//     console.log("not a palindrome")
// }
// let str="hi goood morning"
// for(i=0;i<str.length;i++){
//     let str1=str[i]
// }
// console.log(str.toUpperCase()
// let str="hello"
// for(i=str.length-1;i<=str.length;i--){

// }
// console.log(str)
// function countOccurrences(sentence, word) {
//     // Initialize a variable to store the count
//     let count = 0;

//     // Loop through the sentence to find occurrences of the word
//     for (let i = 0; i < sentence.length; i++) {
//         // Check if the current position matches the word
//         if (sentence.slice(i, i + word.length) === word) {
//             count++; // Increment the count if a match is found
//         }
//     }

//     return count;
// }

// // Example usage
// let inputSentence = "hello world";
// let wordToCount = "l";
// let occurrences = countOccurrences(inputSentence, wordToCount);
// console.log("'" + wordToCount + "' count is " + occurrences); // Output: 'l' count is 3
// 25/4/24
// arrays
// let arr=[1,2,3,4,5]
// // arr[arr.length]
// // console.log(arr)
// console.log(arr.length)
// console.log(arr)
// let arr1=new Array("a")
// to string method
// push() method by using of this we can add the value at the last end of the elements
// and by using of push we can see the length of an array
// let arr=[1,2,3,4]
// console.log(arr)
// function arrayLength(arr){
//     var n1=arr.push();
//     return n1;
// }
// console.log(arrayLength([7,2,8,4,9,8]));

            // (or)      
            // Problem 2
            // 2.At:
            // Implement a function getElementAtIndex(array, index) that returns the element at the given index in the array.
            // Input: getElementAtIndex([5, 6, 7, 8, 9], 2)
            // Output: 7
            
            // function getElementAtIndex(arr,index){
            //     for(i=0;i<arr.length;i++)
            //     {
            //         if(i==index)
            //         return arr[i];
            //     }
            // }
            // console.log(getElementAtIndex([5, 6, 7, 8, 9], 2))
            
// Problem 3
// 3.Push:
// Write a function addToArrayEnd(array, element) that adds an element to the end of the array using the push method.
// // Input: addToArrayEnd([10, 20, 30], 40)
// // Output: [10, 20, 30, 40]

// function addToArrayEnd(arr,value){   
//     arr.push(value) ;
//     return arr;
//     }
// console.log(addToArrayEnd([10, 20, 30], 40));
// Problem 4
// 4.Pop:
// Implement a function removeLastElement(array) that removes the last element from the array using the pop method.
// Input: removeLastElement([10, 20, 30, 40, 50])
 // Output: [10, 20, 30, 40]

// function removeLastElement(arr){
//     arr.pop();
//     return arr;
// }
// console.log(removeLastElement([10,20,30,40,50]));
// max number in a given number
// const prompt=require("prompt-sync")();
// num =prompt("enter upto number: ")//17945
// max=Number(num[0])
// for(i=1;i<=num.length;i++){
//     if(num[i]>max)
//     max=num[i]
// }
// console.log("maximum is: ",max) 
// min and max number 
// const prompt=require("prompt-sync")();
// num=prompt("enert the number:")
// max=Number(num[0]),min=Number(num[0])
// for(i=1;i<=num.length;i++){
//     if(num[i]>max)
//     max=num[i]
//     if(num[i]<min)
//     min=num[i]
// }

// console.log("maxmimam number:",max)
// console.log("minimum number:",min)
// sum of primes and sum of non primes
// const prompt=require("prompt-sync")();
// num=prompt("enter the number:")
// sum=0,sum1=0
// for(n of num){
//     if(n>1){
//         c=true
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 sum1=sum1+Number(n)
//                 c=false
//                 break
//             }
//         }
//         if(c)
//         sum=sum+Number(n)
//     }

// }
// console.log("prime no sum:",sum)
// console.log("non prime no sum:",sum1)
// function largestPrimeFactor(n){
//     var i=2;
//     while (i<=n){
//         if (n%i == 0){
//             n/=i;    
//         }else{
//             i++;
//         }
//     }
//     console.log(i);
//     }
//     var a = 56318
//     largestPrimeFactor(a)
// date methods 30/4/24
//in date method date constructor by using this we can get the current date
// console.log(Date(),"full format")
// console.log(Date.now(),"milliseconds format")
// getday()method
// let dt=new Date(`april 29, 2024, 12:00:00`)
// console.log(dt.getDay())
// getSeconds()method
// let dt=new Date(`april 29, 2024, 12:00:00`)
//  console.log(dt.getSeconds())
//  dt.setSeconds('30')
//  console.log(dt.getSeconds())

// console.log(dt);
// let hrs=dt.getHours();
// console.log(hrs);
// let mins=dt.getMinutes();
// console.log(mins)
// let seconds=dt.getSeconds();
// console.log(seconds);
// console.log(`${dt.getHours}:${dt.getMinutes}:${dt.getSeconds()}`)
// DateUTC()method

// 1) Program to print 1 to num, num to 1, -1 to -num, -num to -1 by using while loop
// const prompt=require("prompt-sync")();
// num= +prompt("enter a number: ");
// console.log("1 to num");
// let sum=1
// while(sum!=num+1){
//     console.log(sum);
//     i++;
// }
// console.log("num to 1");
// let i=num
// while(i!=0){
//     console.log(i);
//     i--;
// }
// console.log("-1 to -num");
// let j=-1
// while(j!=-num-1){
//     console.log(j);
//     j--;
// }
// console.log("-num to -1");
// let k=-num
// while(k!=0){
//     console.log(k);
//     k++;
// }


// 2) Write a program to find the largest prime in the given number
// input: 46537
// output: 7
// const prompt=require("prompt-sync")();
// num = prompt("enter a number: ");
// sum = 0;
// for (n of num) {
//     if (n > 1) {
//         c = true;
//         for (i = 2; i > n; i--) {
//             if (n % i == 0) {
//                 c = false;
//                 break;
//             }
//         }
//         if (c) {
//             if (sum < n)
//                 sum = n;
//         }
//     }
// }
// console.log(sum);


// 3) Write a program to print the sum of largest and smallest prime digits in the given number
// input: 5497351
// output: 10
// const prompt=require("prompt-sync")();
// num = prompt("enter a number: ");
// lr = 0;
// sm=num[0]
// for (n of num) {
//     if (n > 1) {
//         c = true;
//         for (i = 2; i < n; i++) {
//             if (n % i == 0) {
//                 c = false;
//                 break;
//             }
//         }
//         if (c) {
//             if (lr < n)
//                 lr = n;
//             if(sm>n)
//             sm=n
//         }
//     }
// }
// console.log(Number(lr)+Number(sm));


// 4) Write a program to print the largest non prime digit in the given number
// input: 463482
// output: 8
const prompt=require("prompt-sync")();
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

