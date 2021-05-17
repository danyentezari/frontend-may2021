import React, { useState } from 'react';


// RegEx (Regular Expressions)
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}

function RegistrationScreen() {

    // "initial", "sending", "successful", "unsuccessful", "validation error"
    const [state, setState] = useState("initial"); 
    const [errorsState, setErrorsState] = useState([]);

    // Declare undefined variables for later assignment (ref props)
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let contactField;
    let addressField;

    // To instantiate a FormData object
    const formData = new FormData();

    const register = () => {

        const errors = [];

        // 1. Validate the fields
        if(firstNameField.value.length == 0) {
            errors.push("Please enter your first name");
        }
        if(lastNameField.value.length == 0) {
            errors.push("Please enter your last name");
        }
        if(!validateEmail(emailField.value)) {
            errors.push("Please enter a valid email address");
        }
        if(!validatePassword(passwordField.value)) {
            errors.push("Please enter a valid password");
        }

        // 1.1 If there are errors, set the state to "validation error"
        if(errors.length > 0) {
            setState("validation error");
            // Populate the alert box with the errors
            setErrorsState(errors);
        }
        // 1.2 If there are no errors, set the state to "sending"
        else {
            setState("sending");
            setErrorsState([]);

            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);
            formData.append('contactNumber', contactField.value);
            formData.append('address', addressField.value);

            fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/add`, {
                method: 'POST',
                //headers: {"Content-Type": "application/json"},
                body: formData
            })
            // 2.1 If the submission is successful, set the state "successful"
            .then((backendResponse)=> backendResponse.json())
            .then((theJson)=>{
                console.log(theJson);
                setState("successful");
            })
            // 2.2 If the submission is unsuccessful, set the state "unsuccessful"
            .catch((error)=>{
                console.log(error);
                setState("unsuccessful");
            });
        }
    }

    return (
        <div className="container" style={{maxWidth: 600, minHeight: 'calc(100vh - 112px)'}}>

            <h1 className="py-5">Registration</h1>

            <div className="mb-3">
                <label for="firstName" className="form-label">First Name</label>
                <input ref={ (elem)=>firstNameField = elem } type="text" className="form-control" id="firstName" aria-describedby="firstName" />
            </div>

            <div className="mb-3">
                <label for="lastName" className="form-label">Last Name</label>
                <input ref={ (elem)=>lastNameField = elem } type="text" className="form-control" id="lastName" aria-describedby="lastName" />
            </div>

            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input ref={ (elem)=>emailField = elem } type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input ref={ (elem)=>passwordField = elem } type="password" className="form-control" id="password" aria-describedby="password" />
            </div>

            <div className="mb-3">
                <label for="contactNumber" className="form-label">Contact Number</label>
                <input ref={ (elem)=>contactField = elem } type="text" className="form-control" id="contactNumber" aria-describedby="contactNumber" />
            </div>

            <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input ref={ (elem)=>addressField = elem } type="text" className="form-control" id="address" aria-describedby="address" />
            </div>

            {
                state !== "sending" && state !== "successful" &&
                <button 
                onClick={register}
                className="btn btn-primary mb-3" type="button">Submit</button>
            }

            { 
                state === "validation error" &&
                <div className="alert alert-danger" role="alert">
                   <ul>
                   {
                       errorsState.map(
                        (error) => <li>{error}</li>
                       )
                   }
                   </ul>
                </div>
            }

            {
                state === "successful" &&
                <div className="alert alert-success" role="alert">
                    You have registered successfully!
                </div>
            }

            {
                state === "unsuccessful" &&
                <div className="alert alert-danger" role="alert">
                    Internal error. Please try again later.
                </div>
            }

            {
                state === "sending" &&
                <p>Loading...</p>
            }


        </div>
    )

};

export default RegistrationScreen;