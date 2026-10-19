//async await

//async function always return a promise

// async function greet(){
//     return "Rohit";
    // return Promise((resolve,reject)=>{
    //     reject("Rohit");
    // })
// }

// const response = greet();
// //console.log(response);
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:",error);
// })


// async function github() {
//     try{
//         const response = await fetch("https://api.github.com/users");
//         if(!response.ok){
//             throw new Error("Data is not present")
//         }
//         const data = await response.json();
//         // console.log(data);
//         const parent = document.getElementById("first");
//         for (let user of data){

//             const element = document.createElement("div");
//             element.classList.add('user');

//             const image = document.createElement('img');
//             image.src = user.avatar_url;

//             const userName = document.createElement("h2");
//             userName.textContent = user.login;

//             const anchor = document.createElement('a');
//             anchor.href=user.html_url;
//             anchor.textContent = "Visit Profile";


//             element.append(image,userName,anchor);
//             parent.append(element);
//         }
//     }catch(error){
//         console.log("Error:", error)
//     }
// }

// github();

// console.log("Hello core2web");


// const orderDetail={
//     orderId:123123,
//     food:["Pizza","Biryani","Burger","Coke"],
//     cost:680,
//     customer_name: "Rohit",
//     customer_location: "Dwarka",
//     restuaurant_location: "Delhi"
// }

// function placeOrder(orderDetail,){
//     console.log(`${orderDetail.cost} payment is in progress`);

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(Math.random()>0.1){
//                 console.log("Payment is received and order get placed.");
//                 orderDetail.status = true;
//                 resolve(orderDetail);
//             }else{
//                 reject("Payment is failed");
//             }
//         },3000)
//     })
// }

// function preparingOrder(orderDetail){
//     console.log(`Your order is now preparation started of ${orderDetail.food}`);

//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             if(Math.random()>0.05){
//             console.log("Your order is now prepared");
//             orderDetail.token = 123;
//             resolve(orderDetail);
//             }else{
//                 reject("Food item is not Available.")
//             }
//         },3000)
//     })
    

// }


// function pickupOrder(orderDetail){
//     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restuaurant_location}`);
       

//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             if(Math.random()>0.05){
//             console.log("I have picked up the order");
//             orderDetail.received=true;
//             resolve(orderDetail);
//             }else{
//                 reject("Unable to rich resturant");
//             }
//         },3000)
//     })
// }

// function deliverOrder(orderDetail){
//     console.log(`I am on my way to deliver the order ${orderDetail.customer_location}`);
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Your order is delivered successfully.");
//             orderDetail.deliverOrder=true;
//             resolve(orderDetail);
//         },3000)
//     })
    
// }



// async function ordering() {
//     try{
//     const Response1 = await placeOrder(orderDetail);
//     const Response2 = await preparingOrder(Response1);
//     const Response3 =  await pickupOrder(Response2);
//     const Response4 = await deliverOrder(Response3);

//     console.log(Response4)
//     }catch(error){
//         console.log("Error: ",error);
//     }

// }


// ordering();



async function userComment(params) {
    
    // const comment = await fetch("userComment");
    // const photo = await fetch("userPhoto");
    // const chat = await fetch("chat");

    const [comment,photo,chat] = await Promise.all([fetch("userComment"),fetch("userPhoto"),fetch("chat")])
}
