// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

// function num(a, b, c) {

//     if (((a == b) && (a == c))) {
//      return 30;
//     }
//     else if(a==b||b==c||c==a){
//         return 40;
//     } else {
//       return 20;
//     }
    
// }
// console.log(num("40","40","40"));

// -------------------------------------------

// 48. Write a JavaScript program to reverse a given string.

// function reverseString(str){

// var newString="";
// for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
// }
//     return newString;
// }
// console.log(
//     reverseString("JavaScript is the programming language of the Web"));

// ----------------------------------------------------

// function ReverseString(str) {
//     return str.split(' ').reverse()
// }

// console.log(ReverseString("JavaScript is the programming language of the Web"))

// -------------------------------------------------

// let a = "JavaScript is the programming language of the Web"
// let b = a.split(' ').reverse().join( " ")
// let c = a.split('').reverse().join('')

// console.log(b);
// console.log(c);

// --------------------------------------------------


// 51. Write a JavaScript program to convert a given number to hours and minutes.


// function time(a){
//    let Hour=Math.trunc(a/60)
//     let Minutes=a%60;
//     return `${Hour}:H :: ${Minutes}:M`

// }
// console.log(time(435));

// --------------------------------------------------


// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order.

// function str(a){
//     let b=a.split("").sort().join("")
//     return b;
// }
// console.log(str("prahladkumawat"));

// ---------------------------------------------


// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

// function strr(str){
// return (/a...b/).test(str)||(/b...a/).test(str)
// }
// console.log(strr("aababababaaabaaa"));

// --------------------------------------------

// 54. Write a JavaScript program to count the number of vowels in a given string.


// function vowel(str){

//     let count = str.match(/[aeiou]/img).length
//     return count
// }
// console.log(vowel("JAvaScript is the programming language of the Web"));

// ------------------------------------------------

// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's.


// function number(str){
//     let a = str.match(/[p]/img).length
//     let b=str.match(/[t]/img).length
//     if (a==b){
//         console.log("equal number");
//     }else{
//         console.log("Not equal");
//     }
//     return `${a}p:${b}t`;
// }
// console.log(number("prtrptrtppPPP0ghbhjkp tppppppTTTpppttttttttt"));

















