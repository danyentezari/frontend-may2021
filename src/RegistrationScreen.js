import React, { useState } from 'react';

function RegistrationScreen() {

    // "initial", "sending", "successful", "unsuccessful", "validation error"
    const [state, setState] = useState("initial"); 

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
        if(emailField.value.length == 0) {
            errors.push("Please enter a valid email address");
        }
        if(passwordField.value.length == 0) {
            errors.push("Please enter a valid password");
        }

        // 1.1 If there are errors, set the state to "validation error"
        if(errors.length > 0) {
            setState("validation error");
        }
        // 1.2 If there are no errors, set the state to "sending"
        else {
            setState("sending");

            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);
            formData.append('contactNumber', contactField.value);
            formData.append('address', addressField.value);

            fetch('http://localhost:3001/user/add', {
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
                setState("unsuccessful")
            });
        }
    }

    return (
        <div className="container" style={{maxWidth: 600, minHeight: 'calc(100vh - 112px)'}}>

            <h1 className="py-5">Registration</h1>

            <div className="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input ref={ (elem)=>firstNameField = elem } type="text" class="form-control" id="firstName" aria-describedby="firstName" />
            </div>

            <div className="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input ref={ (elem)=>lastNameField = elem } type="text" class="form-control" id="lastName" aria-describedby="lastName" />
            </div>

            <div className="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input ref={ (elem)=>emailField = elem } type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="password" class="form-label">Password</label>
                <input ref={ (elem)=>passwordField = elem } type="password" class="form-control" id="password" aria-describedby="password" />
            </div>

            <div className="mb-3">
                <label for="contactNumber" class="form-label">Contact Number</label>
                <input ref={ (elem)=>contactField = elem } type="text" class="form-control" id="contactNumber" aria-describedby="contactNumber" />
            </div>

            <div className="mb-3">
                <label for="address" class="form-label">Address</label>
                <input ref={ (elem)=>addressField = elem } type="text" class="form-control" id="address" aria-describedby="address" />
            </div>

            {
                state !== "sending" && state !== "successful" &&
                <button 
                onClick={register}
                className="btn btn-primary mb-3" type="button">Submit</button>
            }

            { 
                state === "validation error" &&
                <div class="alert alert-danger" role="alert">
                    Please enter correct values.
                </div>
            }

            {
                state === "successful" &&
                <div class="alert alert-success" role="alert">
                    You have registered successfully!
                </div>
            }

            {
                state === "unsuccessful" &&
                <div class="alert alert-danger" role="alert">
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