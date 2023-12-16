import { useState } from "react"
export default function StateFunction()
{
    const[carName,setCarName]=useState("ROLLS");
    const changeCarName=()=>setCarName("ALTO")
    
    const [count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)
    return(
        <div>
            <h1>My Car name is {carName}</h1>
            <button onClick={changeCarName}>Click Me</button>
            <h1>Count {count}</h1>
            <button onClick={changeCount}>increment</button>
            <button onClick={decrCount}>decrement</button>
        </div>

    )


}