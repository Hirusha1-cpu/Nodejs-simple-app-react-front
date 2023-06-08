import React from 'react';

class CounterClass extends React.Component {
    constructor(){
        super();
        this.state = {
            number:0
        }
    }

    increment =()=>{
        this.setState({
            number: this.state.number+100
        })
    }

    render(){
        return(
            <div>
                <h1>This is a class based component!</h1>
                <h1>Counter = {this.state.number}</h1>
                <button onClick={this.increment}>Increment</button>

            </div>
        )
    }
}

export default CounterClass;