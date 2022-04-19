import React, { Component } from 'react'

class Login extends Component {
    state = { 
        username: '',
        password: ''
    };
    render() { 
        return( 
        <React.Fragment>
            <h1>Log in</h1>
            <button>username</button>
            <button>password</button>
        </React.Fragment>
        );
    }
}
 
export default Login;