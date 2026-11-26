import { useEffect } from "react";

const Counter=({count,data})=>{

    // const handleCounter=()=>{
    //     console.log("handleCounter called");
    // }

    // const handleData=()=>{
    //     console.log("handleData called")
    // }
    useEffect(()=>{
        // handleCounter();
        console.log("mounting phase only");
       
    },[])

    useEffect(()=>{
        //  handleData()
        console.log("update phase only");
    },[count])

    useEffect(()=>{
        return()=>{
            console.log("unmount phase only")
        }
    },[])
    return (
        <div>
            <h1>Counter Value {count}</h1>
            <h1>data Value {data}</h1>
        </div>
    )
}

export default Counter