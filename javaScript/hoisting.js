//execution context 
//memory allocation
//a=undifine
//b=undifine
// addnumber = fccode
//sumresult1=undifine
// sumResult2=undefined

// execution phase



// var a = 10;
// var b=20;
// // console.log(a);
// function addNumber(num1,num2){
//     var sum = num1+num2;
//     return sum;
// }

// var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);
// console.log(sumResult1,sumResult2);


// let const
// memory allocation
// a=<uninitialised/> (Temporal dead zone)
// b=<uninitialised/> (Temporal dead zone)
// addnumber = <uninitialised/> (Temporal dead zone)
//result=<uninitialised/> (Temporal dead zone)

// After runing code 
// let const
// memory allocation
// a=10
// b=20
// addnumber = fncode
//result=30

//execution phase

let a = 10;
let b=20;

function addNumber(num1,num2){
    const sum = num1+num2;
    return sum;
}

const result = addNumber(a,b);
console.log(result);
