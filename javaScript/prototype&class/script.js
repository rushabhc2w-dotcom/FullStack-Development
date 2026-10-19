//prototype and classes


// console.log(obj.greet());
// obj.greet();

// console.log(obj.hasOwnProperty("name"));
// console.log(obj.toString());


// const arr =[10,20,30];

// console.log(arr.length);


// const obj2 = {
//     account:30
// }



// obj2.__proto__=obj;
// console.log(obj2.name);


// class Person{
//     constructor(name,age){

//         this.name = name;
//         this.age = age;
//     }

//     sayHi(){
//         console.log(`hi ${this.name}`);
//     }
// }

// const person1=new Person("Rohit",20);
// const person2 = new Person("Mohit",10);

// console.log(person1.sayHi());
// console.log(person2.sayHi());

// console.log(person1);



// class Customer extends Person{
//     constructor(name,age,account,balance){
//         super(name,age);
//         this.account=account;
//         this.balance=balance;
//     }


//     checkBalance(){
//         return this.balance;
//     }
// }

// const c1 = new Customer("Mohan",20,12,540);

// console.log(c1);
// console.log(c1.sayHi());
// console.log(c1.checkBalance());



const obj ={
    name:"Rohit",
    age:20
}

const obj2 = Object.create(obj);
obj2.account=10;

console.log(obj2.account);