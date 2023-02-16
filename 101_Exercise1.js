// 1.Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the difference.

// Answer>>>>>>>

// let a=20;
// let b=13;
// if(a<=b){
//     console.log(b-a);
// }else{
//     console.log((a-b)*2);
// }

// 2.Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.


// let a=50;
// let b=26;
// let c=a+b;
// if(((a==50)||(b==50))||(c==50)){
//     console.log("true");
// }else{
//     console.log("False");
// }

// 3.Write a JavaScript program to check from one given integers, print number is possitive or Negetive.


// let a=-23;
// if(a>=0){
//     console.log("Number is Positive");
// }else
// {
//     console.log("number is Negative");
// }


// 4.Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// let a="Python is a good programming language"
// let b="Javascript is a good programming language"
// let c = b.concat(" ",a);
// console.log(c);

// let ma=a.startsWith("Py")
// if(ma==true){
//     console.log(a);
// }else{
//     console.log("False");
// }


// 5. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// let z = "helloworld";
// let y=z.split("")
// x=y.slice(5,10)
// console.log(x);


// 6.Write a JavaScript program to create a new string from a given string changing the position of first and last characters. (23) // Rahul  ---> lahuR

// function first(str) 
//   {
//   if (str.length <= 1)
//   {
//     return str;
//   }
//   c = str.substring(1, str.length - 1);
//   return (str.charAt(str.length - 1)) + c + str.charAt(0);
// }

// console.log(first('abcdefgh'));

// 7.Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.(24)  Rahul --> RRahulR

// function first(str) 
//   {  
//   return str.charAt(0) + str + str.charAt(0);
// }
// console.log(first('Prahlad'));


// 8.Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.(25) 

// let a=18;

//  (a%3)==0||(a%7)==0 ? console.log("Multiple of 3 or 7"):console.log("Not multiple");



//  9.Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more. (26)    Rahul ---> hulRahulhul

// function first(str) 
//   {
//   if (str.length < 3)
//   {
//     return "string length must be 3 or more";
//   }
//   c = str.substring(str.length-3, str.length );
//   return c+str+c;
 
// }

// console.log(first("rprghfhggggggggggggg"));

// 10.Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.(27)

// let a="Java is programming language"

// let ma=a.startsWith("Java")
// if(ma==true){
//     console.log("string starts with 'Java'");
// }else{
//     console.log("False");
// }




