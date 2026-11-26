import { useRef } from "react"
import User from "./User"
import UserInput from "./UserInput";

function App() {

// const displayName=(name)=>{
//   alert(name)
// }

// const getUser=()=>{
//   alert("get user function called")
// }
//   return (
//     <>
//       <h1>Call Parent component Function from child component</h1>
//       <User displayName={displayName} name="anil" onClick={getUser} />
//       <User displayName={displayName} name="sam" onClick={getUser}/>
//       <User displayName={displayName} name="peter" onClick={getUser}/>
//       <User displayName={displayName} name="bruce" onClick={getUser}/>

//     </>
//   )


// Lecture43

const inputRef =useRef(null)
const updateInput=()=>{
  inputRef.current.value=1000;
  inputRef.current.focus();
  inputRef.current.style.color="red"
}
return(
  <>
  <h1>Forward Ref</h1>
  <UserInput ref={inputRef}/>
  <button onClick={updateInput}>Update Input field</button>
  </>
)
}

export default App