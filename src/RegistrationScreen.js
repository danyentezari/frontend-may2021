import React, { useState } from 'react';

function RegistrationScreen() {

    // "initial", "sending", "successful", "unsuccessful", "validation error"
    const [state, setState] = useState("initial"); 

    return (
        <div className="container" style={{maxWidth: 600, minHeight: 'calc(100vh - 112px)'}}>

            <h1 className="py-5">Registration</h1>

            <div className="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" aria-describedby="firstName" />
            </div>

            <div className="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" aria-describedby="lastName" />
            </div>

            <div className="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" aria-describedby="password" />
            </div>

            <div className="mb-3">
                <label for="contactNumber" class="form-label">Contact Number</label>
                <input type="text" class="form-control" id="contactNumber" aria-describedby="contactNumber" />
            </div>

            <div className="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" aria-describedby="address" />
            </div>

            {
                state !== "sending" && state !== "successful" &&
                <button className="btn btn-primary mb-3" type="button">Submit</button>
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