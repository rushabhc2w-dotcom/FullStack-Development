//this: class object method
//strict mode vs non strict mode
//'use strict'
//global Object: In Window it it called window, in node js, it is called global
//globalThis points to global object of the environment
//normal function: non strict mode, this will point to global object
//in strict mode: it will point to undifined
//this keyword in global scope: NodeJS(Empty Object), in browser it will point to global object
//call ,Apply,Bind this point to the invoking object
//in class constructor, this will point to newly create empty object

//Arrow function take this keyword from lexical environment 





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

// 'use strict'

// function greet(){
//     console.log(`hi ${this.name}`);
// }

// function incrementAge(value,name){
//     this.age+=value;
//     this.name=name;
//     console.log (this.name);
//     console.log(this.age);
// }

// const user = {
//     name:"Rohit",
//     age:30,
// }
// const user2 ={
//     name:"Mohit",
//     age:20
// }
// greet.call(user);
// greet.call(user2);

// incrementAge.call(user,5,10,"Mohan");
// incrementAge.apply(user2,[10,"Mohan"]);
// const incr = incrementAge.bind(user2,10,"Mohan");
// incr();

//this == user
// user2.greet();



//Class

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// //this = {}<----Empty Object

// const p1 = new Person("Rohit",20);
// console.log(p1);



//Arrow Function: this doesn't exist for arrow function,it take it from lexical environment scope

// console.log(this);

// const greet=()=>{
//     console.log(this);
// }

// function meet(){
//     console.log(this);
// }

// greet();

// 'use strict'

// const user ={
//     name:"Rohit",
//     greet:function(){
//         // console.log(this);
//         const that = this;
//         function meet(){
//             console.log(that);
//         }
//         meet();
//     }
// }

// user.greet();


// const stopWatch ={
//     second:0,
//     start: function(){
//         const that = this;
//         setInterval(function(){
           
//             that.second++;
//             console.log(that.second);
//         },1000);
//     }
// }

// const stopWatch={
//     second:0,
//     start: function(){
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second);
//         },1000)
//     }
// }
// stopWatch.start();



// 'use strict'
// console.log(this);



// const user ={
//     name:"Rohit",
//     greet:()=>{
//         console.log(this);
//     }
// }

// user.greet();


// const button = document.getElementById("first");

// button.addEventListener('click',()=>{
//     console.log(this);
// })


//this keyword global scope in node JS : {}
//im window it point to window object

//function: this keyword, if someone invoke the method or function ,this will point to that
//Normal function me : when no one is invoking it,
//Non strict: Global Objectt for node and browser
//strict mode: Undifine

//arrow function : it takes this from its lexical environment scope




// 'use strict'
// function greet(){
//     console.log(this);
// }

// greet();




