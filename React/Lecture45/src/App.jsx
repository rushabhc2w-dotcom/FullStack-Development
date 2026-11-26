// import { useTransition } from "react";
// import PureComponent from "./PureComponent";
// import DerivedState from "./DerivedState";
import {userState} from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import { useState } from "react";

function App() {
  // const [pending,startTransition]=useTransition();

  // const handleButton=()=>{
  //   startTransition(async ()=>{
  //     await new Promise(res=>setTimeout(res,5000))
  //   })
  // }

  // return(
  //   <div>
  //     <h1>usetransition Hook in React js 19</h1>
  //     {pending?<img style={{width:'200px'}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
  //      alt="" />:null}
  //     <button disabled={pending} onClick={handleButton}>Click</button>

  //   </div>
  // )


  // Lecture48
  const [user, setUser] = useState('');
  return (
    <div>
      {/* <PureComponent/> */}
      {/* <DerivedState/> */}

      <AddUser setUser={setUser} />
      <DisplayUser user={user} />
    </div>
  );
}
export default App;
