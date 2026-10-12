const newElement = document.createElement("h2");
newElement.textContent = "Strike is coming";
newElement.id  = "second";



//select element 
const element = document.getElementById("first");
element.after(newElement);


const newElement2 = document.createElement('h3');
newElement2.textContent = "Diwali aa rahi hai";
newElement2.id = "third";

// newElement2.className="diwali";
newElement2.classList.add("diwali");
newElement2.style.backgroundColor = "red";
newElement2.style.fontSize = "30px";
newElement2.setAttribute("hello","ji");

element.before(newElement2);

//before after

// const list = document.createElement("li");
// list.textContent= "Milk";
// const list2 = document.createElement("li");
// list2.textContent= "Cake";
// const list3 = document.createElement("li");
// list3.textContent= "Halwa";
// const list4 = document.createElement("li");
// list4.textContent= "Paneer";

// const unorderElement = document.getElementById("listing");
// unorderElement.append(list);
// unorderElement.append(list2);
// unorderElement.prepend(list3);
// unorderElement.children[1].after(list4);

const arr = ["Milk","Halwa","Paneer","Tofu","Tea"];
const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();
for(let food of arr){
    const list = document.createElement("li");
    list.textContent=food;
    fragment.append(list);
}

unorderElement.append(fragment);

//deletion
const s1 = document.getElementById("first");
s1.remove();

const month = document.getElementById("ten");

const lister = document.createElement("li");
// lister.textContent = "help:md,s";

lister.innerHTML="<img src='https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=s1600-w1600-h1000'>";
month.prepend(lister);
// month.insertAdjacentElement("beforeend",lister);
