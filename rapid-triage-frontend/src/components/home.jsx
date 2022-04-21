import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

class Home extends Component {
    state = { 
        count: 0,
        pathToGo: ""
    };

    styles = {
        fontSize: 20,
        fontWeight: "bold"
    };

    goToLogin = () => {
        this.setState({ count: this.state.count + 1})
        console.log("login clicked", this);
    }

    goToRegister = () => {
        this.setState({ count: this.state.count - 1})
        console.log("register clicked", this);
        // const navigate = useNavigate()
        // navigate('http://localhost:8080/api/users');
    }

    render() { 
        return( 
        <React.Fragment>
            <h1>Welcome to RapidTriage app!</h1>
            <span style = {this.styles} className="badge badge-primary m-2">{this.state.count}</span>
            <button 
            onClick={this.goToLogin}
            >
                Log in
            </button>
            <button
            onClick={this.goToRegister}
            >
                Register
            </button>
        </React.Fragment>
        );
    }


}
 
export default Home;