import UserContext from "../utils/UserContext"
import { User } from "./User"
import UserClass from "./UserClass"
import React from "react"


export class About extends React.Component{

    constructor(props){
        super(props)
    }
    
    componentDidMount(){
    }
    render(){
        return(
            <div className="UserCard">
            
            <h1> Hello, This is Namasthe React</h1>
            <User name={"Adiyogi Shiva"} quality = {"Yogi"}/>
            <div>
                <UserContext.Consumer>
                    {(d)=>console.log(d)}
                </UserContext.Consumer>
            </div>
            <UserClass name={"Adiyogi Shiva"} quality = {"Yogi"}/>
            <UserClass name={"2nd"} quality = {"Yogi"}/>
            <UserClass name={"3rd"} quality = {"Yogi"}/>
        </div>
        )
    }
}
