import React, { Component } from 'react'

class Home extends Component {
    state = { 
        count: 0,
        pathToGo: ""
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    constructor(){
        super();
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleLogin = () =>{
        console.log("login clicked", this);
        this.setState({ count: this.state.count + 1})
    }

    handleRegister = () =>{
        console.log("register clicked", this);
        this.setState({ count: this.state.count - 1})

    }

    render() { 
        return( 
        <React.Fragment>
            <h1>Welcome to RapidTriage app!</h1>
            <span style = {this.styles} className="badge badge-primary m-2">{this.state.count}</span>
            <button onClick={this.handleLogin}>Log in</button>
            <button onClick={this.handleRegister}>Register</button>
        </React.Fragment>
        );
    }


}
 
export default Home;