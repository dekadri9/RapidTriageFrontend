import React, { useState, useEffect, Component } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './navbar';

function SignUp (){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[username,setUsername]=useState("");
    const[name,setName]=useState("");
    const[birthDate,setBirthDate]=useState("");
    const navigate = useNavigate();

    async function signUp(){
        console.warn(email,password,name,username,birthDate)
        let item ={email,password,name,username,birthDate};
        let result = await fetch("http://localhost:8080/api/users/",{
            method : 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/login")

    }
    
    return( 
        //comprobar repeticion de contraseña y restriccion de campos
        //username, correo, contraseña segura...
    <React.Fragment>
        <NavBar />
        <h1 className='col-sm-6 offset-sm-3'>Register</h1>
        <br />
        <div className='col-sm-6 offset-sm-3'>
            <input
                type="text" 
                placeholder='Name and surname' 
                onChange={(e)=>setName(e.target.value)} 
                className='form-control'
            />
            <br />
            <input
                type="date" 
                placeholder='Date of birth' 
                onChange={(e)=>setBirthDate(e.target.value)} 
                className='form-control'
            />
            <br />
            <input
                type="text" 
                placeholder='username' 
                onChange={(e)=>setUsername(e.target.value)} 
                className='form-control'
            />
            <br />
            <input
                type="text" 
                placeholder='email' 
                onChange={(e)=>setEmail(e.target.value)} 
                className='form-control'
            />
            <br />
            <input
                type="password" 
                placeholder='password' 
                onChange={(e)=>setPassword(e.target.value)} 
                className='form-control'
            />
            <br />
            <input
                type="password" 
                placeholder='repeat password' 
                onChange={
                    (e)=>setPassword(e.target.value)
                } 
                className='form-control'
            />
            <br />
            <a href='/hospitalLogin'>
            Are you a hospital institution?
            </a>
            <br />
            <br />
            <button 
                className='col-sm-6 offset-sm-3'
                onClick={signUp}
                >
                    Register
            </button>
        </div>
    </React.Fragment>
    );
}

export default SignUp;

/*class SignUp extends Component {
    state = { };
    render() { 
        return( 
        <React.Fragment>
            <h1>Sign up</h1>
            <button>All required fields</button>
        </React.Fragment>
        );
    }
}
 
export default SignUp;*/