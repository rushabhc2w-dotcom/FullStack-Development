//function

// function greeting(){
//     console.log("hello world");
//     return 10;
// }

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum= num1+num2+num3+num4;
//     console.log(sum);

// }


// rest operator
// function addNumber(...num){
//     let sum =0;
//     for(let i of num){
//         sum+=i;
//     }
//     console.log(sum);
// }

// greeting();
// addNumber(3,4);
// addNumber(3,4,8);
// addNumber(3,4,8,9);
// addNumber(3,4,8,9,10,11,12,13);

// console.log(greeting());



//spread operator

// const arr=[10,20,30,40,50];
// const arr2 =[30,70,80,90];

// // console.log(first,second,...num)=arr;
// // console.log(first,second,num);


// const ans = [...arr,...arr2];
// console.log(ans);

// addNumber(3,4,8,9);


// Arrow function

// const addNumber = (num1,num2)=> num1+num2;
// const sqarenumber = num =>num*num;

// console.log(sqarenumber(6));
// console.log(addNumber(3,4));

// const greeting=()=>({name:'Rohit',age:20});
// console.log(greeting());


// IIFE

// (function greeting(){
//     console.log("Hello world");
// })();


//call bAck Function

// function greet(){
//     console.log("hello");
// }

// function meet(){
//     console.log("i am going to meet someone");
//     callback();
// }
// meet(greet);



// function dance(){
//     console.log("i am dancing");
// }

// function meet(){
//     console.log("i am going to meet someone");
//     callback();
//     function greet(){
//         console.log("hello");
//     }
// }
// ṁeet(greet);
// meet(dance);  


function blinkitOrderPlaced(){
    console.log("wehave started prepairing your food");
}

function zomatoOrderPlaced(){
    console.log("wehave started prepairing your food");
}
function payment(amount,callback){
    console.log(`${amount} payment has initialized`)
    console.log("payment is received");
    callback();
}

payment(500,zomatoOrderPlaced);
payment(300,blinkitOrderPlaced);