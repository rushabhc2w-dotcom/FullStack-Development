// // Array

// let marks = [100,50,70,80,90];
// console.log(marks);
// console.log(marks.length);


// let arr = [100,30, "Rohit",true];  
// //In other languages we can only ad same type of date means numbers only or string only etc,
// //  but in java script we can add multiple type of data

// console.log(arr);
// console.log(arr[2]);
// console.log(typeof arr);


// arr[1]=90;
// console.log(arr);

// //push operation
// arr.push(60);
// arr.push("Strike");
// console.log(arr);

// //pop operation: delete element from end
// arr.pop();
// console.log(arr);

// //Starting add kar sakte hai , delete the element at first place

// arr.unshift(10);
// console.log(arr);

// // delete kar sakte hai
// arr.shift();
// console.log(arr);

// let arr = [10,30,50,90,11];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//for of loop

// for(let num of arr){
//     console.log(num);
// }


// let arr = [10,30,50,90,11];
// let arr2 = arr;  //it copy reference of each other when we change one array values it can be hange in other one

// arr2.push(30);

// console.log(arr);

// const arr = [10,30,50,90,11];

// arr = [80,90,100]   this is not allowd  because we declaired const arr we cannot change the address of const array
// console.log(arr);

//non primitive copy by reference se hota hai
//primitive copy  by value

// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);

// console.log(arr2);
// console.log(arr);
// const arr3=arr.splice(1,3)
// console.log(arr3);
// console.log(arr);
// const arr3=arr.splice(1,3,"Rohit",19);
// console.log(arr3);
// console.log(arr);

// const arr5 = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 =[90,4,false]

// arr.push(arr2);
// console.log(arr);
// const arr3 = arr.concat(arr2,arr4);



//spread operator

// const arr3 = [...arr5,...arr2,...arr4];

// console.log(arr3);


// const names = ["Alice","Rohit","Bob","Mohit","Charlie"];
// console.log(names.toString());
// console.log(names.join(" "));
// console.log(names.indexOf("Bob"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bob"));

// names.sort();
// names.reverse();

// console.log(names);


// const a= [101,90,80,32,91];
// a.sort();
// console.log(a);

//  const arr = [10,40,31,71,5,11];
// console.log(arr)
//  arr.sort((a,b)=>a-b);
//  //ascending order
// console.log(arr)
//  arr.sort((a,b)=> b-a);
// //dscending order
// console.log(arr)

// const arr = [10,30,50,[40,90,[60,19,99],11],80];
// console.log(arr);
// console.log(arr[3][1]);
// console.log(arr[3][2][1]);
// const a = arr.flat(Infinity);
// console.log(a)

