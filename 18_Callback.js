// const sum = (x,y,hello)=>{
//     let z=x+y;
//     hello(z);  //callBack function
// }
// const print =(s)=>{
//     console.log("The Sum is : "+ s );
// }
// sum(10,20,print)


// ----------Timeout/interval----------------------

// const sum = (x,y,hello)=>{
//     let z=x+y;
//     hello(z);  //callBack function
// }
// const print =(s)=>{
//     setTimeout(()=>{
//         console.log("The Sum is : "+ s );
//     },1000)
//     setInterval(()=>{
//         console.log('\n');
//         console.log("The Sum is : "+ s );

//     },1000)
// }
// sum(10,20,print)


// -------------------------------------------

// const sum = (x,y,callback)=>{
//     setTimeout(()=>{
//         let z=x+y;
//         callback(z)
//     },2000)
// }
// const print=(s)=>{
//         console.log("The sum is : "+s);
// }
// sum(10,20,print)

// --------------clock------------------


setInterval(() => {
    let x = new Date();
    let a = x.getHours();
    let b = x.getMinutes();
    let c = x.getSeconds();
    let d = x.getFullYear();
    document.getElementById("clock").innerHTML = a + ":" + b + ":" + c + ":Year:" + d;

}, 1000)

