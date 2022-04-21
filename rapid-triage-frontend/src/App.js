import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className='container'>
        <Home />
    </main>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
