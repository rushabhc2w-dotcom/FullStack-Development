import {useState} from "react";
import Counter from "./counter";
function Dymanic_Func(){
    const [fruit,setFruit]=useState("Apple");
    const handleFruit=()=>{
        setFruit("Banana")
    }
    return(
        <div>
            <h1>State in React Js</h1>
            <h1>{fruit}</h1>
            <button onClick={handleFruit}>Change Fruit Name</button>
            <Counter/>
        </div>
    )
}

export default Dymanic_Func