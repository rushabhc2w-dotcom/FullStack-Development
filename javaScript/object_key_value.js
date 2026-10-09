//object
//key value

// const user={
//     name:"Rohit",
//     age:23,
//     emailId: "r@gmail.com",
//     amount: 3400,
// }
//console.log(user["name"]);
// console.log(typeof user);
//CRUD operation: Create read update delete

// console.log(user.age);

//insert value
// user.aadhar = 1234;
// user.amount = 5000;
// console.log(user);

//delete
// delete user.emailId;
// console.log(user);


// const user={
//     name:"Rohit",
//     age:23,
//     emailId: "r@gmail.com",
//     amount: 3400,
// }

// const user2 = user;
// user2.age = 90;
// console.log(user);


//=======Important============//
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (let keys in user){
//     console.log(keys);
// }

// for (let keys in user){
//     console.log(keys,user[keys]);
// }

// const user={
//     name:"Rohit",
//     age:23,
//     emailId: "r@gmail.com",
//     amount: 3400,
// }

// const name = user.name;
// const age = user.age;
//object destructuring

// const {name,age}=user;
// const {name:userName,age:userAge}=user;

// const arr = [10,20,40,90,11];
// const [first,second] =arr;
// console.log(first,second);
// console.log(userName,userAge);


// for (let keys of Object.keys(user)){
//     console.log(keys);
// }


// for (let values of Object.values(user)){
//     console.log(values);
// }


// for (let values of Object.entries(user)){
//     console.log(values);
// }


// for (let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }


// const user={
//     name:"Rohit",
//     age:23,
//     emailId: "r@gmail.com",
//     amount: 3400,
//     greeting:function(){
//         console.log(`dfgsfhggnsfb ${this.name}`);
//         return 20;
//     }
// }
// const user2 = {
//     name :"Mohit",
//     account:201,
//      greeting:function(){
//         console.log(`dfgsfhggnsfb ${this.name}`);
//         return 20;
//     }
// }
// user2.greeting = user.greeting;
// user2.greeting();

// const x = user.greeting();
// console.log(x);



// nested object


// const user={
//     name:"Rohit",
//     age:23,
//     emailId: "r@gmail.com",
//     amount: 3400,
//     address:{
//         city:"amaravati",
//         state:"Maharashtra"
//     }
// }


// const user2 = {...user};
// // user2.name = "Raj"
// user.address.city = "Dwarka";
// console.log(user2);
// console.log(user);


// console.log(user.address.city);
// console.log(user.address.state);


const sym = Symbol("id");
const user = {

    name:"Rohit",
    age:20,
    0:100,
    2:"Mohit",
    [sym]:"Hello ji"
}
console.log(user[sym]);