//this: class object method
//strict mode vs non strict mode
//'use strict'
//global Object: In Window it it called window, in node js, it is called global
//globalThis points to global object of the environment
//normal function: non strict mode, this will point to global object
//in strict mode: it will point to undifined



// var a= 10;
// var b = 20;

// console.log(a,b);

// function greet(name1,name2){
//     console.log(name1,name2);
// }

// greet("Rohit","Mohit");

// document.getElementById("first");
// console.log(global);
// console.log(globalThis)



//learn about This keyword
//this keyword in global scope: NodeJS(Empty Object), in browser it will point to global object

// 'use strict'

// console.log(this);


//Function
//100 user: greet function:100*memory , code copy paste

'use strict'

function greet(){
    console.log(`hi ${this.name}`);
}

function incrementAge(value,name){
    this.age+=value;
    this.name=name;
    console.log (this.name);
    console.log(this.age);
}

const user = {
    name:"Rohit",
    age:30,
}
const user2 ={
    name:"Mohit",
    age:20
}
// greet.call(user);
// greet.call(user2);

incrementAge.call(user,5,10);

//this == user
// user2.greet();









