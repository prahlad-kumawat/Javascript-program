
// Match -->> Array
// test-->> true/false             

// ----------------i----------------------

// let intro="my name Is prahlad \n My name Is prahlad"

// let i=intro.match(/is/i)
// console.log(i);

// ------------------g----------------------

// let intro="my name is prahlad \n My name is prahlad"

// let i=intro.match(/My/ig )
// console.log(i);

// ------------------m----------------------

// let intro="my name is prahlad \n My name is prahlad"

// let i=intro.match(/is/m )
// console.log(i);

// ------------------^----------------------------

// let intro="my name is prahlad \n My name is prahlad"

// let i=intro.match(/^name/img)
// console.log(i)

// let check=/Is/i.test(intro)
// console.log(check);

// ----------------[]-----------------------------


// let intro="my name is 5879654123 prahlad \n My 2136 547895 87412 name is prahlad"
// let intro="5475745744"

// let arr=intro.match(/[0-9]/g)
// console.log(arr);

// let check=/[a-zA-Z]/g.test(intro)
// console.log(check);

// let ar=intro.match(/[a-z]/ig)
// console.log(ar);


// --------------------()-------------------------------


// let intro="MY name is 5879654123 prahlad \n My 2136 547895 87412 name is prahlad"

// let check = /(my|MY)/g.test(intro)
// console.log(check);

// ---------------------/d----------------------------


// let intro="my name is 5879654123 prahlad \n My 2136 547895 87412 name is prahlad"
// // let intro="my name is prahlad \n My name is prahlad"

// let x=/\d/.test(intro)
// console.log(x);

// // -------------\s--space check-----------------------

// let intro="my name is prahlad"
// let y=/\s/.test(intro)
// console.log(y);

// let x=intro.match(/\s/g)
// console.log(x);

// ---------------------\b-----------------------------

// let intro="my name is prahladpra \n My name is prahlad"

// // let x=/pra\b/img.test(intro)
// // console.log(x);

// let y =/\bpra/img.test(intro)
// console.log(y);


// ---------------------uxxxx--------------------------

// let intro="my name is prahladpra \n My W name is prahlad"

// let x=/\u0057/.test(intro)
// console.log(x);

// ---------------------+/*/?---------------------------

// let x="hello ooo l oo l  o oo oo o oooooooo l o f t t o o o ot fd "

// let y=x.match(/o+/g)
// console.log(y);
// let z=x.match(/o*/g)
// console.log(z);
// let a=x.match(/o?/g)
// console.log(a);



// --------------------E-mail-----------------------


// let a="123ab.cgABC@gmail.com"

// let b=/^([a-zA-Z0-9]+[a-zA-Z0-9_.]+[a-zA-Z0-9])+@gmail.com/img.test(a)
// console.log(b);







