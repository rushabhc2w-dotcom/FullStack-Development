// import { useState } from "react";

import Controlled_component from "./controlled_component";

function App() {
  // const [val,setVal]=useState()
  // return(

  //   <div>
  //     <h1>Get Input field Value</h1>
  //     <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter User name" />
  //     <h1>{val}</h1>
  //     <button onClick={()=>setVal("")}>Clear Value</button>
  //   </div>
  // )

  // Lecture-22
  return (
    <div>
      <Controlled_component />
    </div>
  );
}
export default App;
