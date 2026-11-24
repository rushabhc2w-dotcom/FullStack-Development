import College from "./college"
import User from "./User"
import Student from "./Student"
import { useState } from "react"
import User2 from "./User2"
import Wrapper from "./Wrapper"

function App(){
//  let userName = "Rushabh Pawar"
//  let age=29
//  let email="rushabh@gmail.com"
let userObject={
  name:"Rushabh Pawar",
  age:"24",
  email:"rushabh@gmail.com"
}
let userObject2={
  name:"Rohit",
  age:"34",
  email:"rohit@gmail.com"
}

let userObject3={
  name:"Soham",
  age:"14",
  email:"Soham@gmail.com"
}

let collegeNames=['IET','DU','IIT','NIT','MIT']
// const [student,setStudent]=useState("sam")
const [student,setStudent]=useState()

  return(
    <div>
      <h1>Props in React Js</h1>
     { student && <Student name={student}/>}
      <button onClick={()=>setStudent("Bhaskar")}>Update student name</button>

      <Wrapper color="orange">
        <h1>Hello Everyone</h1>
      </Wrapper>
      <Wrapper color="blue">
        <h1>Hello Everyone</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello Admin</h1>
        <h2 style={{color:"red"}}>Please login</h2>
      </Wrapper>


      <College name={collegeNames[0]}/>
      <College name={collegeNames[1]}/>
      <College name={collegeNames[2]}/>
      
      

      {/* <User name={userName} age={age} email={email}/> */}
      <User user={userObject}/>
      <User user={userObject2}/>
      <User user={userObject3}/>
      

      <User2 name="Sam"/>
      <User2/>
      
    </div>
  )
}


export default App