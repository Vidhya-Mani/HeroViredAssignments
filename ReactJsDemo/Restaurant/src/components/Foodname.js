import React from "react";

class Foodname extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: "Dharun",
            age: "6",
            num: 1
        }
        this.trial = {
            val1: "MM",
           
        }
    }
    changePerson = () => {
        console.log("Pressed the button")
        this.setState({
            name: "Mahil",
            age: "8"

        })
    }
    changeNum = () => {
        console.log("Pressed the button")
        this.setState({
           num: this.state.num+1
    
        })
    }

    
    render = () => {
        return(
            <>
            <h1>My name is {this.state.name} and I am  
              {this.state.age}Number {this.state.num}</h1>
              <button type='button' onClick={this.changePerson}>Change Person</button>
              <button type='button' onClick={this.changeNum}>Change Number</button>
            </>
        )
    }

    
}

export default Foodname;