import React, { useState, useEffect, Component } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './navbar';
import Link from '@material-ui/core/Link'

function Login (){

        const[email,setEmail]=useState("");
        const[password,setPassword]=useState("");
        const navigate = useNavigate();
        /*useEffect(() => {
            if(localStorage.getItem('user-info')){
                navigate("/app")
            }
        }, [])*/ 
        //hay que cargarse la userinfo en logout para poder volver al login

        async function login(){
            console.warn(email,password)
            let item ={email,password};
            let result = await fetch("http://localhost:8080/api/users/login",{
                method : 'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            localStorage.setItem("user-info", JSON.stringify(result))
            navigate("/app")

        }
        
        return( 
        <React.Fragment>
            <NavBar />
            <h1 className='col-sm-6 offset-sm-3'>Login page</h1>
            <br />
            <div className='col-sm-6 offset-sm-3'>
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
                <a href='/hospitalLogin'>
                Are you a hospital institution?
                </a>
                <br />
                <a href='/forgot'>
                Forgot your password?
                </a>
                <br />
                <br />
                <button 
                    className='col-sm-6 offset-sm-3'
                    onClick={login}
                    >
                        Login
                </button>
            </div>
        </React.Fragment>
        );
    }
 
export default Login;