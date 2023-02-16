// --------------JSON Objects----------

// let obj = {
//     name : "prahlad",
//     add : 25,
// }

// let x = JSON.stringify(obj)
// console.log(x);
// let y=JSON.parse(x)
// console.log(y);


// ----------Spread operatore--------------------

// let x=[10,20,58,55,8,4]
// let y=[87,89,5,65,655,547]
// let z=[...x,...y]
// console.log(z);



// let obj = {
//     name:"prahlad",
//     add:"indore",
//     age:22,
// }
// let obj1={...obj,name:"pavan"}
// console.log(obj1);


// ---------------Array flat() -------------------------

// let arr = [10,56,[456,85,96],[85,96,4,4],14]

// let arr1 = arr.flat()
// console.log(arr1);

// ----------------------------------------

// let arr = [10,56,[456,[85,96]],[85,[96,4],4],14]

// let arr1 = arr.flat(2)
// console.log(arr1);

// -------------------------------------------------

// let arr = [10,56,[456,[85,[96]]],[85,[96,4],4],14]

// let arr1 = arr.flat(3)
// console.log(arr1);

// -----------------------------------------------

// let arr = [10,56,[456,85],96,[4,4],14]

// let arr1 = arr.flatMap((v)=>{
//     return v;
// })
// console.log(arr1);

// ---------- Nullish Coalescing Operator (??-----------------

// let x=undefined;
// let y=null;

// let z = x??y
// console.log(z);

// ------------------- Optional Chaining Operator (?.)-----------

// let x = "hi";
// let y = "12";

// let z = x?.y
// console.log(z);

// ---------------Numeric Separator (_)----------------

let x=100_000_00
let y=10000000
x==y ? console.log(x+y):console.log(x-y);