// let BMW={
//     model:"S8",
//     color:"red",
//     start:function(){
//         console.log("Car is starting.......");
//     },
//     details:function(){ 
//         console.log(`car model is ${this.model} and color is ${this.color} `);
//     }
// }
// BMW.start()

// ---------------------------------------

// class person {
//     constructor(name, age, city, mobile) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.mobile = mobile;
//     }
//     walk() {
//         console.log(this.name + " is walking......");
//     }
//     details(country) {
//         console.log(`User name is ${this.name} , age ${this.age} and city is ${this.city}. and country ${country}`);
//     }
// }

// let mohan = new person("Mohan", "65", 'Indore', "9685996859");
// let Shyam = new person("Shyam", "55", 'Dewas', "8596996859");
// let Ram = new person("Ram", "25", "Ratlam", "8596796859");
// let Sunil = new person("Sunil", "36", 'Mandsaur', "7777777859");
// Sunil.details()
// Shyam.details('Japan')

// ------------------------------------------------------

// class person {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;

//     }
//     walk() {
//         console.log(this.name + " is walking......");
//     }
//     details(country) {
//         return (`User name is ${this.name} , age ${this.age} and city is ${this.city}.`);
//     }
// }

// class student extends person {
//     constructor(name, age, city, rollno) {
//         super(name, age, city, rollno)
//         this.rollno = rollno;
//     }
//     detail(college) {
//         console.log(`${this.details()} and his rollno ${this.rollno} and college is ${college}`);
//     }
//     static subject(s) {
//         console.log(`All student subject is ${s}`);

//     }
// }

// let prahlad = new person("prahlad", "21", "indore")
// let mohan = new student("mohan", "21", "mds", "141414")
// // prahlad.walk();
// mohan.detail("DAVV");
// student.subject("Msc.CS")

// ------------------------------GET/SET------------------------------



class person {
    constructor(name, add) {
        this.name = name;
        this.add = add;
    }
    get age() {

        return this.a;
    }
    set age(x) {
        this.a = x;
    }

    detail() {
        return `My name is ${this.name} and Address is ${this.add}`;
    }
}
let prahlad = new person("Prahlad", "Mandsaur");
prahlad.age = "22";
console.log(`${prahlad.detail()} and Age is ${prahlad.age}`);












