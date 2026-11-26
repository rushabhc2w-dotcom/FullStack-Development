import { useEffect } from "react";
import { useState } from "react";
import UseEffect from "./Useffect_use";
import Counter from "./SIdeEffect";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const[display,setDisplay]=useState(true);
  return (
    // <UseEffect/>
    <div>
      {
        display?<Counter count={count} data={data}></Counter>:null
      }
      <Counter count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  );
}

export default App;
