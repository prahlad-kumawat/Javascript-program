
// let x=[34,454,"prahlad","kumawat",55];
// console.log(x[4]);
// console.log(x);

// let y= [];
// console.log(y);
// y[0] = "10";
// y[1] = "120";
// y[2] = "50";
// y[3] = "100";

// let x= new Array(10,20560,"jfpdaoif");
// console.log(x[2]);

// let x=new Array(10,10);
// console.log(x);
// let y=new Array(10); //this is empty array
// console.log(y);

// let fruits=["orange","mango", "apple","banana","grapes"];
// fruits[3]="cherry";
// console.log(fruits);
// console.log(fruits.length);

// let obj={a:"hello",b:"hi"};
// console.log(obj.a);



// let obj = { a: "hello", b: "hi" };
// let fruits = ["orange", "mango", "apple", "banana", "grapes"];

// console.log(typeof fruits);
// let x = Array.isArray(fruits);   //true or false return
// console.log(x);
// let y = Array.isArray(obj);
// console.log(y);

// --------------------Array method-----------------

// // toString---------->>>>>

//  let fruits = ["orange", "mango", "apple", "banana", "grapes"];

//     console.log(fruits);
//  let x=fruits.toString();
//  console.log(x);

// console.log(`to string : ${fruits.toString()}`);

// // join------------->>>>>

// console.log(`join : ${fruits.join(" * ")}`);


// --------------------------------------------------

// pop and push------------->>>>from back

// let fruits = ["orange", "mango", "apple", "banana", "grapes"];

// fruits.pop();
// fruits.pop();
// console.log(fruits);
// fruits.push("cherry");
// fruits.push("lemon");
// fruits.push("potato");
// console.log(fruits);

// ----------------------------------------------------

// shift and unshift----------->>>>>>

// let fruits = ["orange", "mango", "apple", "banana", "grapes"];

// fruits.shift()
// fruits.shift()
// console.log(fruits);
// fruits.unshift("cherry")
// console.log(fruits);
// fruits.unshift("coconut")
// console.log(fruits);

// -------------------------------------------

// concat-------------->>>>>

// let x=[334,44,5340];
// let y=["hdfs","sdgu",'fdsg',25];
// let z=[26,"fsdhj","fdsahku"];

// let a=x.concat(y," gfh",z,"hello");
// console.log(a);


// -----------------Splice//Slice-------------------------------------

// let arr=[10,15,143,56,86,98];

// arr.splice(2,3,"prahlad")
// console.log(arr);

// let x=arr.slice(2,5);
// console.log(x);
// let y=arr.slice(1);
// console.log(y);


// --------------Sort-----------------------

// let fruits = ["orange", "mango", "apple", "banana", "grapes"];
// fruits.sort();
// console.log(fruits);  //arrange alphabetically

// let arr=[10,15,13,56,816,98];
// arr.sort();
// console.log(arr); 



// let arr=[10,15,143,56,86,98];
// let x=arr.reverse();
// console.log(x);           //series reverse


// let fruits = ["orange", "mango", "apple", "banana", "grapes"];
// let x=fruits.reverse();
// console.log(x);

// let arr = [10,15,143,56,86,98];
// let n = arr.sort(function(a,b)
// {
//             return b-a;
//         }
    
//         )
//     console.log(n);
    
//     let arr = [10,15,143,56,86,98];
// let m=arr.sort(function(a,b)
// {
//         return a-b;
// }
// )
// console.log(m);

// --------------max/minimum number------------------

// let ar = [10,15,143,56,869,98];
// let x = Math.max.apply(null ,ar)
// let x = Math.min.apply(null ,ar)

// console.log(x);

// ----------------------------------------------------


// let arr =[
//  {fname:"Prahlad", year:"2003"},
//  {fname:"Mahesh", year:"2015"},
//  {fname:"Ram", year:"2009"},
//  {fname:"Narendra", year:"2008"},
//  {fname:"Shiv", year:"2013"}]

// //  arr.sort(function(a,b){
// //     // console.log(a.year);
// //     return a.year-b.year;
// //  })
// //  console.log(arr);


// arr.sort(function (a,b) {
//     if (b.fname<a.fname) {return 1}
//     if (b.fname>a.fname ) {return -1}
//     return 0;
// })
// console.log(arr);
// ------------------------------------------------

//----->>>>>> Array alternatuion method  <<<<<<--------

// ----------For Each---------------

// let arr = [23,73,943,34,83,64];
// let x= arr.forEach(function (value,index) {
//     console.log(value);
//     return index;
// })
// console.log(x);

// ---------------Map---------------------

// let arr = [23,73,943,34,83,64];
// let x=arr.map(function (value,index,array) {
//     // console.log(array);
//     return value/10;
    
// })
// console.log(x);

// ----------------Filter----------------------------

//     let arr = [23,73,943,34,83,64,64];

//    let x= arr.filter(function(value){
//         return value >= 64;
//     })
    
//     console.log(x);

// -------------------Reduce-------------------------------

// let arr = [23,73,943,34,83,64];

// let x=arr.reduce(function (total ,value, index,array) {
//     console.log(total);  //number of elements
//    total=total-value
//    return total;

// },2000)
//     console.log(x);

// -----------------------Every----------------------

// let arr = [23,73,943,34,83,64];

// let x = arr.every(function (value ,index,array) {
//     return value>22;
    
// })
// console.log(x);

// -----------------Some-----------------------------

// let arr = [23,73,943,34,83,64];

// let x = arr.some(function (value ,index,array) {
//     return value>943;
    
// })
// console.log(x);

// ----------Indexof/lastindexof----------------------

// let arr = [23,34,943,34,83,64];

// let x = arr.indexOf(34);
// console.log(x);
// let y = arr.lastIndexOf(34,5);
// console.log(y);

// ---------------Find---------------------------

// let arr = [23,34,83,36,33,64,89];

// let x=arr.find(function(value){
//     return value >36
   
// })
// console.log(x);

// -----------------------------------------------

// let arr = [23,34,3,36,83,64];

// let x= arr.findIndex(function (value) {
//     return value >36
    
// })
// console.log(x);

// --------------------Array.form-------------------------------

// let arr =[23,33,49,94,84,64,2,124] ;

// let x=Array.form("prahlad");  //that is not work with arr
// console.log(x);
// ------------------------------

// -----------------Split---------------------


// let fname="prahlad kumawat"
// let x=fname.split(" ");
// console.log(x);

// --------------Keys---------------------------------

// let arr =[23,33,49,94,84,64,2,124] ;

// let x=arr.keys();
// let y =Array.from(x)
// console.log(y[5]);
// console.log(y);

// ----------------Entries----------------------


// let arr= [54,56,568978,898,56,54]
// let x=arr.entries();
// // let y=Array.from(x);

// for(let y of x){
//     console.log(y);
// }
// // console.log(y);

// -----------------Include------------------------

// let arr =[55,2546,7586,68,214]
// let x= arr.includes(68);     //return true/false
// console.log(x);

// ------------------Const array------------------

// const arr = [546,568,1352,68,685]
// // arr = [754,5,7785,675,758]      
// arr[0]=6758;
// arr.push(789889)
// console.log(arr);   //throw the error
