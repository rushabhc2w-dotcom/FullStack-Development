import { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    counterFunction();
  }, [counter, data]);

  function counterFunction() {
    console.log("Counterfunction", counter);
  }
  function callOne() {
    console.log("callOnce function called");
  }

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </div>
  );
}

export default UseEffect;
