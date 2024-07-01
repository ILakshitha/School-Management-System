import React from "react";


class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this)
        this.state ={
            number : 0

        }
    }

    increment(){
        this.setState({
            number: ++this.state.number
        })
    }

    render(){
        return(
            <dev>
                <h1> Counter = {this.state.number}</h1>
                <button onClick={this.increment}> Inctreement</button>
            </dev>
        )
    }


}

export default CounterClass;