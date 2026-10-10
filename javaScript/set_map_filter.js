//forEach,filter,reducer,map,set

// const arr = [10,20,30,90,87];
// let sum =0;
// arr.forEach((number)=>{
//     sum+=number;
// })

// console.log(sum);

//filter
// const arr = [10,20,30,90,87];
// const newArr=arr.filter((number)=> number>25);

// console.log(newArr);


//FILTER CUSTOM METHOD 
// Array.prototype.filtering = function(compare){
//     const ans=[];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }

// const newArr=arr.filtering((num)=>num>25);
// console.log(newArr);


// const arr = [10,20,30,90,87];

// const newArr=arr.map((num)=>num*3);
// console.log(newArr);

const products = [
    // Electronics
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
    { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
    { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
    { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

    // Books
    { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
    { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
    { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

    // Home Goods
    { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
    { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
    { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

    // Groceries
    { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
    { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];


// const newProduct=products.filter((product)=>product.price>50).sort((a,b)=>b.price-a.price).map((product)=>({name:product.name ,price:product.price}));
// console.log(newProduct);

// const ans = products.map((product)=>({name:product.name ,price:product.price}));
// console.log(ans);

//REDUCE
//accumulator=sum=0,
//accumulator = 1200
// const totalprice = products.reduce((accumulator,currentValue)=>{
//     if (currentValue.inStock)
//         return accumulator+currentValue.price;
//     else 
//         return accumulator;
// },0);
// console.log(totalprice);


//DATA STRUCTURE : SET

//no duplicate value allowed 
//only unique value


// const arr = [10,20,30,40,50,60,70,10,20]
// const s1= new Set(arr);
// s1.add(11);
// console.log(s1);
// // console.log(s1.has(23));
// console.log(s1.delete(10));
// console.log(s1.size);
// s1.clear();
// console.log(s1);


// const emailId = ["ro@gm","ra@gm","mo@gm","ro@gm"];

// const uniqueEmail = [...new Set(emailId)];
// console.log(uniqueEmail);

// const s1= new Set(emailId);

// for (let num of s1){
//     console.log(num);
// }




//MAP:

const m1 = new Map([
    ["Rohit",40],
    [2,"Rohit"],
    [true,11],
    [[10,30,11],"Mohit"]
]);



for(let [keys,values] of m1){
    console.log(keys,values);
}

// m1.set({name:"Manish",age:20},false);
// console.log(m1.has("Rohit"));
// console.log(m1.get("Rohit"));
// console.log(m1.size);

// console.log(m1);