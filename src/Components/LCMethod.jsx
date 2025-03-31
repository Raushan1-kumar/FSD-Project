import React, { Component } from "react";

class LCMethod extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 ,color:"white"};
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
     
    static getDerivedStateFromProps(props, state) {
        console.log("getderivedfromprops");
        console.log(props);
        console.log(state);
        return null;
    }

    componentDidMount(){
        console.log("componentdidmount");
    }

    render() {
        console.log("render method called");
        return (
            <div>
                <p>This is for component lifecycle</p>
                <p>color:{this.state.color}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default LCMethod;
