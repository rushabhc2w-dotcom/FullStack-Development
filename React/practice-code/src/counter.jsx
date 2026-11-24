import { useState } from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);
    const [rCounter,setRCounter] = useState(10);
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <button onClick={()=>setCount(count-1)}>Update Counter</button>
            <h2>R Counter : {rCounter}</h2>
            <button onClick={()=>setRCounter(rCounter+1)}>Update R Counter</button>
            <button onClick={()=>setRCounter(rCounter-1)}>Update R Counter</button>
        </div>
    )
}


export default Counter