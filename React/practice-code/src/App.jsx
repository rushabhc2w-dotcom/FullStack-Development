
// import { createElement } from "react"
// import ToDo from "./Lecture11"

// import Demo from "./Lecture13"
// import Dymanic_Func from "./Lecture16"

// import { useState } from "react"
// import User from "./Lecture17"
import Demo from "./Lecture18"
function App(){
// LECTURE = 10
  // const userName = "Rushabh Sarvesh";
  // let x=20;
  // let y=30;
  // return(
  //   <>
  //     <h1>{userName}</h1>
  //     <h1>{10+20+30}</h1>
  //     <h1>{x+y}</h1>
  //     <button onClick={()=>alert("Hello")}>Click</button>
  //   </>
  // )
    

// return createElement("div",{id:"rootDiv"},createElement("h1",{class:'h1tag'},"Heading"));
// return(
//   <div className="rootOther">Hello Other</div>
// )





//LECTURE =11

return(
  <div>
  {/* <ToDo/> */}
  {/* <Demo/> */}
  {/* <Dymanic_Func/> */}
  <Demo/>
</div>
)


// LECTURE 17
// const [display,setDisplay]=useState(true)
// return(
//   <>
//   <h1>Toggle in React is</h1>
//   <button onClick={()=>setDisplay(!display)}>Toggle</button>

//   {/* {
//     display? <h1>Rushabh Pawar</h1>:null
//   } */}

//   {
//     display? <User/>:null
//   }
//   </>
// )


}


export default App