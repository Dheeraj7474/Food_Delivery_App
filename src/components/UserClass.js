import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            classCount : 0
        };
    }
    componentDidMount(props){
    }
    render(){
        return(
        <div className="User_details">
            <h3>I am a piece of life</h3>
            <h4>{this.props.name} is {this.props.quality}</h4>
            <button onClick={()=>{
                this.setState({
                    classCount : this.state.classCount+1
                })
            }}> setCountInClass</button>
            <p>{this.state.classCount}</p>
        </div>
        )
    }
} 
export default UserClass