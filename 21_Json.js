// let details = {
//     fname:"Prahlad",
//     age:23,
//     city:"indore"
// }
// console.log(details);

// let json =JSON.stringify(details)
// console.log(json);

// let jsonrev = JSON.parse(json)
// console.log(jsonrev);

// --------------------------

// let arr = [10,555,1,0,4,44,4,4,48,5,2]

// console.log(arr);

// let arrs = JSON.stringify(arr)
// console.log(arrs);

// let arr_rev = JSON.parse(arrs)
// console.log(arr_rev);

// ------------------------

// let details = {
//     fname:"Prahlad",
//     age:23,
//     city:"indore",
//     sum: function (){
//         console.log(this.name);
//     }
// }
// console.log(details);

// let s=JSON.stringify(details)
// console.log(s);

// details.sum = details.sum.toString()
// let x= JSON.stringify(details)
// console.log(x);

// let y = JSON.parse(x)
// console.log(y);

// eval('var fun =' + y.sum)
// fun();


// ------------------------------------

// let obj ={
//     date  : new Date()
// }
// console.log(obj);

// let x=JSON.stringify(obj);
// console.log(x);

// let y=JSON.parse(x)
// console.log(y);

// let h=new Date (y.date);
// console.log(h);

// ---------------------------------------



//     let x = Math.random()*10;
//     let y= Math.ceil(x)
//     console.log(y);
// let  z= x*(6-1)+1;
// Math.ceil(x)
// console.log(z);

function dice(min, max) {
    let x = Math.random()
    let value = x * (max - min) + max;
return value;
}
console.log(Math.round(1, 6));
