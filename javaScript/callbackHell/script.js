//zomato application

const orderDetail={
    orderId:123123,
    food:["Pizza","Biryani","Burger","Coke"],
    cost:680,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restuaurant_location: "Delhi"
}

function placeOrder(orderDetail,Callback){
    console.log(`${orderDetail.cost} payment is in progress`);

    setTimeout(()=>{
        console.log("Payment is received and order get placed.");
        orderDetail.status = true;
        Callback(orderDetail);
    },3000)
}

function preparingOrder(orderDetail,Callback){
    console.log(`Your order is now preparation started of ${orderDetail.food}`);
    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        Callback(orderDetail);
    },3000)

}


function pickupOrder(orderDetail,Callback){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restuaurant_location}`);
        setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received=true;
        Callback(orderDetail);
    },3000)
}

function deliverOrder(){
    console.log(`I am on my way to deliver the order ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("Your order is delivered successfully.");
        orderDetail.deliverOrder=true;
    },3000)
}



placeOrder(orderDetail,(orderDetail)=>{
    preparingOrder(orderDetail, (orderDetail)=>{
        pickupOrder(orderDetail,(orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});

