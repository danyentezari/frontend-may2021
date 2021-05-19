import React, { useState } from 'react';

function LoginScreen() {

    // "initial", "sending", "successful", "unsuccessful"
    const [state, setState] = useState("initial");
    
    // Declare undefined variables for later assignment (ref props)
    let emailField;
    let passwordField;

    // To instantiate a FormData object
    const formData = new FormData();

    return (
        <div className="container" style={{maxWidth: 600, minHeight: 'calc(100vh - 112px)'}}>

            <h1 className="py-5">Login</h1>

            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input ref={ (elem)=>emailField = elem } type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input ref={ (elem)=>passwordField = elem } type="password" className="form-control" id="password" aria-describedby="password" />
            </div>

            {
                state !== "sending" && state !== "successful" &&
                <button 
                className="btn btn-primary mb-3" type="button">Submit</button>
            }
        </div>
    )
}

export default LoginScreen;