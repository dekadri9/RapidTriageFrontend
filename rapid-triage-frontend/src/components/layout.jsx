import React, { Component } from 'react'
import Flux from 'flux'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from './home';
import Login from './login';
import Signup from './signUp';

class Layout extends Flux.View {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Routes>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/log-in" component={Login} />
                            <Route exact path="/sign-up" component={Signup} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default Layout;