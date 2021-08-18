import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.state = {
            number : 0
        }
    }

    increment(){
        this.setState({
            number : this.state.number + 1
            // number : ++this.state.number
        })
    }

    decrement(){
        this.setState({
            number : this.state.number - 1
        })
    }
    render() {
        return( 
            <div>
                <h1>Counter = {this.state.number}</h1>
                <button onClick = {this.increment}>Increment</button>
                <br></br>
                <button onClick = {this.decrement}>decrement</button>

            </div>

        );
    }
}

export default Counter;

 