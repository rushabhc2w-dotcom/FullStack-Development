//scope and closure , HDF
//global_> accessible to everyone
//functional-> accessible only to that function
//block level scope-> accessible only to that block

//first the function or block search the element in there own scope
//if they do not find them in there scope they go outside the scope 
//if the function or block has nested then first it search in own scope if not found then go to outer function 
//if the element not found in either function thengo to global function 

// let a=10;
// let b=20;

// if(true){

//     let d = 30;
//     console.log(a,b,d)
// }

// function greet(){
//     let c =30;
//     console.log(a,b,c);
// }

// // console.log(c);
// greet();



// let global =30;
// function greet(){
//     let global =40;
//     // let global =10;     //we cannot declare same variable in same scope it give error 

//     function meet(){
//         let global =10; 
//         console.log(global);
//     }
//    meet();
// }
// greet();


// function createCounter(){
//     function increment(){
//         console.log("i am increment function");

//     }
//     return increment();
// }
// const count = createCounter();

// // console.log(count);
// count(); 




// function createCounter(){
//     let count =0;
//     function increment(){
//         count++;
//         return count;

//     }
//     return increment;
// }
// const counter = createCounter();
// // counter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let user={
//     balance: 500,
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//             this.balance+=amount;
//             return this.balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && this.balance>=amount){
//             this.balance+=amount;
//             return this.balance;
//         }
//     },
//     getbalance: function(){
      
//         return this.balance;
//     }
// }



// function createBankAccount(){
//     const user={
//         balance: 500,
//         deposit: function(amount){
//             if(typeof amount==="number" && amount>0){
//                 this.balance+=amount;
//                 return this.balance;
//             }
//         },
//         withdraw: function(amount){
//             if(typeof amount==="number" && amount>0 && this.balance>=amount){
//                 this.balance-=amount;
//                 return this.balance;
//             }
//         },
//         getbalance: function(){
        
//             return this.balance;
//         }
//     }
//     return user;
// }

// // user.balance ="rohit";

// const customer = createBankAccount();
// // console.log(customer.deposit(500));
// // console.log(customer.withdraw(200));
// // console.log(customer.getbalance());



//higher order fuction

// function double(value){
//     return function execute(num){
//         return num*value
//     }
// }

// const n = double(20);
// console.log(n(5));
// const n = double(20)(5);
// console.log(n);
