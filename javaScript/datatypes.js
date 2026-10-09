//primitive
// types:- number,string,boolen,undefine,null,biint,symbol
//primitive data types are immutable
//means it doesn't disturb old value just create new value add assign new values address to variable 
//in primitive the values are copyed
//number
let a=10;       //data type is assign datatype after assigning value
let b = 2.36;  //float values are under number datatypes it doesn't have saparate data type
console.log(typeof a)
console.log(a,b)

//string
let c="strike is coming";
let d='anjali';
console.log(c,d);


//boolean
let login= true;
let f = false;
console.log(f);
console.log(login,f);


// undefined
let user;
const p = 10; //const has condition it has to assign value first after that it does not change
console.log(user,p);


//bigint
let num = 42353456758768457123676576546254654n; // here in bigint we add n at last of value so it can consider it as bigint number wich can't be stored in 8 byet
console.log(num);

//null
// let weather = null;
// console.log(weather); // null means i don't want to give value,

// difference b/w undefined and null
// example

// let weather = current_weather("Dwarka");
//what can it be return.
//25
//null 
//undifined

// symbol

//it is used to create unique value
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id2==id1)





//non primitive
// types:-Array,object,function
//all non primitive data type has object type
//in non-primitive data types if we assign one obj to another it refers to same value it doesn't create copy.

let arr = [10,20,11,"rohit",true]
console.log(arr);

//object
let obj = {
    name:'rohit',
    account:23534,
    age:18,
    category: 'gen'

}

// in this example we can se that we try to change the value of str but it doesn't chaange this type of data is immutable
let str = 'Rohit';
str = 'Mohit';
console.log(str);


//funtion

function add(){
    console.log("hello")
}
//in JS we can store the function in variable
let s =function add2(){
    console.log("hello 2")
}
console.log(add);
add();

let arr1=[10,20,30,40];
arr.push(90);
arr1[0]=70;
console.log(arr1);

let obj1 ={
    name:"Mohan",
    age:20
}
obj1.name="Rohan"
console.log(obj1);  //by this line we can see the value is really changed in array
console.log(obj1.name);
console.log(obj1.age);