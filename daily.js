// arr = [1,2,3,4,5,6,7,8,9,10]
// let evenCount = 0;
// let oddCount = 0;
// for (const num of arr) {
//     if(num%2===0)
//         evenCount++;
//     else
//     oddCount++;

// }
// console.log(evenCount);
// console.log(oddCount);

// i=1
// while(i<10){
//     console.log("I am a programmer")
//     i++
// }

var strg = "You will be an amazing developer";
// index=strg.indexOf('developer');
// console.log(index);
// ind=strg.lastIndexOf('developer');
// console.log(ind);
// sl_Strg=strg.slice(7,13);
// console.log(sl_Strg);
// substr=strg.substring(7,13)
// console.log(substr);

// var strg = "Hi Prepbytes"
// e = strg.slice(-9);
// console.log(e)

// var arr =[1,4,6,9,16]
// console.log(arr.shift())
// console.log(arr.map(x=>x*3));
// var arr =[1,2,3,4]
// let sum =0;
// arr.forEach((num)=> sum+=num);
// console.log(sum);
// var arr =[3,2,4,5,6];
// e = arr.unshift(67);
// console.log(e);     // new length
// console.log(arr);   // new array as output
// var arr = [1,2,3]
// console.log(arr.concat(5,6,7));     // o/p [ 1, 2, 3, 5, 6, 7 ]
// var my_Arr= ["hi","how", "are"]
// console.log(my_Arr.join("-"))       // hi-how-are


// var arr = [1,2,3,4,5,3,6,5,7,3,4]
// console.log(arr.sort((a,b)=> a-b));

// program to count vowels in a given string
var Str = "My nAme Is Dhruv TAkkAr"
var arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
var count = 0;
for (i = 0; i < Str.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (Str[i] == arr[j]) {
            console.log(Str[i]);
count++;
        }
    }
}
console.log("Number of vowels in a given string is :" + " ",count);
// program to count even and odd in an array
var zero_Count=0;
var one_Count=0;
var arr=[0,1,0,0,0,1,0,1,0,1,1,0]
for (const num of arr) {
    if(num==0){
        zero_Count++;
    }
    else{
        one_Count++;
    }
    
}
console.log("Number of zeros in a given array is :" + " ",zero_Count);
console.log("Number of ones in a given array is :" + " ",one_Count);