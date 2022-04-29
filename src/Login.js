
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import "./Login.css"

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if(userCredential){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
        // firebase login handler
    }
    const register = e => {
        e.preventDefault();

        // firebase login handler
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // success
            if(userCredential){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
            // failed
    }
  return (
    <div className='login'>
        <NavLink to="/">
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' alt=""/>
        </NavLink>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className='login__signInButton' onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in you agree to AMAZON-CLONE Conditions of Use & Sale. please see our Privacy Notice, 
                our Cookies Notice and our Interest-Based Ads Notice
            </p>
            <button className='login__registerButton' onClick={register}>Create your Amazon account</button>

        </div>
    </div>
  )
}
