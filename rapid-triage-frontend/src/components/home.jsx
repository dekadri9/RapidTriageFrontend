import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

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
            <span className="badge bg-primary m-2">{this.state.count}</span>
            <button 
            onClick={this.goToLogin}
            className = "btn btn-secondary btn-sm m-2"
            >
                Log in
            </button>
            <button
            onClick={this.goToRegister}
            className = "btn btn-secondary btn-sm"
            >
                Register
            </button>
        </React.Fragment>
        );
    }


}
 
export default Home;