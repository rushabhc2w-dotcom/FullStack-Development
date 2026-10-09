//String

// const str1 = "Rohit";
// const str2 = "Rohit negi";
// const day = 18;
// const str3 = `Strike is coming on ${day}`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// str = `Hello coders`;

// console.log(str.length);  // it gives us lenght of string.
// console.log(str[1]);  // we can also check the single charector by using index like array. 

// str[2]= 's';
// console.log(str);  // string is immutable we cannot change it once declared.

// console.log(str.toUpperCase()); // method use to make string all to upper case.
// console.log(str.toLowerCase()); // method used to make all string to lower case.

// // as we know the string is immutable so whe we convert it into upper or  lower case it give new string it doesn't change the orignsl syting
// // example
// const a = str.toUpperCase();
// const b= str.toLowerCase();

// console.log(b);
// console.log(a);


// const str = `Hello Coder Army Coder`;  
// console.log(str.indexOf('Cod'));
// console.log(str.lastIndexOf('Cod'));
// console.log(str.includes('Cod'));

//slice
// console.log(str.slice(2,7));
// console.log(str.slice(3));
// console.log(str.slice(-5,-2)); //it print reverse

//const str = `Hello Coder Army Coder`; 
//console.log(str.substring(2,5));  //in substring we cannot markdown the negative index.


//concatination

// const a ="Rohit";
// const b = "Negi";
// const c = a+" "+b;
// console.log(c);


// const str = `Hello Coder Army Coder`; 
// console.log(str.replace("ode","iam"));
// console.log(str.replaceAll("ode","iam"));

// const user = "  Rohit  Negi ";
// console.log(user.trim());

// const names = "Rohit,mohit,suraj,rohan,anjali";

// console.log(names.split(","));


// const now = new Date();

// console.log(now); // this show utc time 
// console.log(now.toString());      
// console.log(now.toISOString());    
// console.log(now.toLocaleString());         

// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());
// console.log(now.getMinutes());
// console.log(now.getMilliseconds());


// year month date hour min sec milisec
// const now = new Date(2025,8,20,8,25,16,125)
// console.log(now);
// console.log(now.toString());

const now = Date.now();
const dates = new Date(1791528009416);
const dates1 = new Date(0);
console.log(now);

console.log(dates);
console.log(dates.toString());
console.log(dates1);
console.log(dates1.toString());