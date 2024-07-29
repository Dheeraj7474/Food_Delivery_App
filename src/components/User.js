import { useState } from "react"

export const User = (props)=>{
    const [count,setCount] = useState("I am useState")
    return (
        <div className="User_details">
            <h3> I am a piece of life</h3>
            <h4>{props.name} is {props.quality}</h4>
            <button onClick={()=>{
                setCount("set count updated")
            }}> setCount</button>
            <p>{count}</p>
        </div>
    )
}