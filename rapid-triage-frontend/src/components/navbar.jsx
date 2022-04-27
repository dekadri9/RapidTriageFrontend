import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">RapidTriage</a>
            </div>
        </nav>
        );
    }
}
 
export default NavBar;