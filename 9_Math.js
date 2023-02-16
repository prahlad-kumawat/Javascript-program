// console.log(Math.PI);

// -----------Math Round---------------

// let x=Math.round(4.3)
// let y=Math.round(6.5)
// let z=Math.round(8.6)
// console.log(x);
// console.log(y);
// console.log(z)
// --------------Math.floor()------------

// let x=Math.floor(4.3)
// let y=Math.floor(6.5)
// let z=Math.floor(8.9)
// console.log(x);
// console.log(y);
// console.log(z);

// -----------------.Math.ceil()-------------

// let x=Math.ceil(4.3)
// let y=Math.ceil(6.5)
// let z=Math.ceil(8.6)
// console.log(x);
// console.log(y);
// console.log(z);

// ----------------.Math.trunc()-------------------

// let x=Math.trunc(4.3)
// let y=Math.trunc(6.5)
// let z=Math.trunc(8.6)
// console.log(x);
// console.log(y);
// console.log(z);

// -------------diff. b/w trunc and floor------------

// let x=Math.trunc(-4.66)
// let y=Math.floor(-4.66)
// console.log(x);
// console.log(y);


// ---------------Math.sign()---------------------

// let x=Math.sign(-54)
// let y=Math.sign(0)
// let z=Math.sign(54)

// console.log(x);
// console.log(y);
// console.log(z);

//-----------------Math.Pow()---------------------

// let x=Math.pow(5,2)
// console.log(x);

//-----------------Math.sqrt()---------------------


// let x=Math.sqrt(625)
// console.log(x);

// let y=Math.cbrt(512)
// console.log(y);


//-----------------Math.abs()---------------------


// let x=Math.abs(-625)
// console.log(x);

//-----------------Math.max/min()-------------------

// let x= Math.min(125,964,54,84,58)
// console.log(x);

// let x= Math.max(125,964,54,84,58)
// console.log(x);


// let x= Math.min.apply(null,[125,964,54,84,58])
// let y= Math.max.apply(null,[125,964,54,84,58])
// console.log(x);
// console.log(y);

// ------------------Math.random()-----------------

let n=Math.random()
// console.log(n*1000);

function randomno(min,max) {

    // val=  n*(max-min);  
    val=  n*(max-min)+min;  

    return val;
    
}
console.log(Math.round(randomno(1000,10000)));