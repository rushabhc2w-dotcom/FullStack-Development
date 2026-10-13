// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent="Strick is coming";
// }

// const element = document.getElementById("first");

//this method is not use becouse it is not usefull for multiple calling on one element 
// element.onclick = function handleClick(){
//     element.textContent="Strike is coming";
// }


// element.addEventListener('dblclick',()=>{
//     element.textContent="Strike is coming";
// })


// element.addEventListener('mouseenter',()=>{
//     element.textContent="Strike is coming";
// })

// element.addEventListener('mouseleave',()=>{
//     element.textContent="Strike is coming";
// })

// element.addEventListener('click',()=>{
//     element.style.backgroundColor ="brown";
// })

// let a={
//     greet:function(value){
//         console.log("Hello",value);

//     }
// }

// a.greet(10);
// a.greet(20);

// const child1=document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })

const parent = document.getElementById("parent");

function handleClick(e){
    e.target.textContent = "I am clicked";
    //how to remove eventListener
    parent.removeEventListener('click',handleClick);
}

parent.addEventListener('click',handleClick)



// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent = "I am clicked";
//     })
// }

// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target);
//     // console.log("Grandparent is clicked");
// })
// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     console.log(e);
//     // console.log("Parent is clicked");
// })
// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     console.log(e);
//     e.stopPropagation();
//     // console.log("child is clicked");
// })

//e : it is event listner :it contains all information about where it is clicked how many time ,type of event ,we can stop bubling by using this " e.stopPropagation();"
//capture phase on hai ya off :ye hum true kerke on karte hai
//capture phase on hai: top se down aaoge: Us time pe event ko trigger kar diya jayega
//capture phase off hai: Event hai usko down se up(bubbling phase bolte hai, tab trigger kiya jayega)