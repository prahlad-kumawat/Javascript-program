

// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.


// function str(a) {
//     let b = a.length;
//     if (b >= 3) {
//         let c = a.substring(b - 3)
//         return c + c + c + c;
//     }
//     else {
//         return false;
//     }
// }
// console.log(str("abcdefghijkl"));

// ---------------------------------------------------------

// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.

// function number(value){
//     let a=value[0];
//     let b=value[1];
//     return (a==30&&b==30)||(a==40&&b==40)

// }
// console.log(number([30,40]));
// console.log(number([40,40]));
// console.log(number([30,30]));
// console.log(number([40,30]));
// console.log(number([40]));
// console.log(number([30]));

// -------------------------------------------

// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

// function num(arr){
//     arr[0]==arr[1]
//     arr[1]==arr[0]
//         return` ${arr[1]}:${arr[0]};`
// }
// console.log(num([10,20]));
// console.log(num([110,201]));

// -----------------------------------------------------

// 82. Write a JavaScript to add two positive integers without carry.

// function xSum(n, m) {

//     let res = 0;
//     let multi =1;
//     let b;
//     while (n||m) {
//         b = (n % 10) + (m % 10);
//         b %= 10;
//         res = (b*multi) + res;
//         n = Math.trunc(n / 10);
//         m = Math.trunc(m / 10);
//         multi *= 10;
//     }
//     return res;
// }
// console.log(xSum(69,58));


// 83. Write a JavaScript to find the longest string from a given array of strings.



// function arr(arra)
//   {
//     var max_str = arra[0].length;
//     var ans = arra[0];
//     for (var i = 1; i < arra.length; i++) {
//         var maxi = arra[i].length;
//         console.log(maxi);
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(arr(["python","c++","React","javascript","java","acncnncncnccc"]));



// 84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.  Go to the editor
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

// function name(a) {
//     let v = a.split("");

//     for (let i = 0; i < v.length; i++) {
//         let c = v[i].charCodeAt() - 'a'.charCodeAt()
//         c = (c + 1) % 26;
//         v[i] = String.fromCharCode(c + 'a'.charCodeAt());
//     }
//     return v.join(" ")
// }
// console.log(name("zsceghopx"));


// 85. Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.

// function arry(ar) {
//     let result = [0, 0];
//     for (let i = 0; i < ar.length; i++) {
//         if (i % 2) {

//             result[1] += ar[i];

//         }
//         else {
//             result[0] += ar[i];
//         }
//     }
//     return result;
// }
// console.log(arry([10, 52, 10, 1000, 10, 85, 800, 5, 8, 7, 7, 4, 1, 12, 96,]));
