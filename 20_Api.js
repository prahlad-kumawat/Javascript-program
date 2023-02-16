// console.log(history.length)

// --------------history.back()-----------------

const back = () => {
    history.back();
}

const forward = () => {
    history.forward();
}

const go = () => {
    history.go(-1)
}
const goback = () => {
    history.go(1)
}


// ----------------Storage()-------------------

// localStorage.setItem("name","prahlad");
// localStorage.setItem("age","22");
// localStorage.setItem("city","Indore");

// console.log(localStorage.getItem("age"));


// let x= localStorage.key(2);
// console.log(x);

// localStorage.removeItem("age");
// localStorage.clear();

// ---------------sessionStorage--------------------

sessionStorage.setItem("name","prahlad")
sessionStorage.setItem("age","22")
console.log(sessionStorage.getItem("age"));

