// let detail1={fname :"prahlad", lname:"kumawat",age:22,add:"mds"};
// let detail2={fname :"prahlad", lname:"kumawat",age:22,add:"indore"};
// console.log(detail1.age);
// console.log(detail2.add);
// console.log(detail1["fname"]);

// let x= detail1.add + "  "+ detail2.add;
// console.log(x);
// ----------------------------------------------------

let object={
    fname:"prahlad",
    lname:"kumawat",
    age:20,
    
    addition: function () {
       return("hello");
      
    },
    addition1: function () {
       return this.fname + this.lname;
       
     }

}
console.log(object);
console.log(object.age);
console.log(object.addition);
console.log(object.addition());
console.log(object.addition1());
object.addition();
console.log(this);