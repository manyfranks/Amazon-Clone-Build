import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';
import './Login.css'

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        // use preventDefault to avoid refreshing
        e.preventDefault()

        // firebase logic
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        // use preventDefault to avoid refreshing
        e.preventDefault()

        // firebase logic to register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // confirm successful creation of new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo' 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" 
                    alt="" 
                />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>
                <form>   
                        <h5>Email</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                        <button className='login__signInButton' onClick={signIn}>Sign In</button>
                    </form>

                    <p>
                        By signing-in you agree to Amazon Clone's Terms and Conditions. Please see our Privacy Policy, our Cookie Policy and our Interest Based Ads for more information.
                    </p>

                    <p>Need help?</p>

                    <button className="login__registerButton">Create Amazon Account</button>
            </div>
            <div className="login__createAccount">
                <p>New to Amazon?</p>
                <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
