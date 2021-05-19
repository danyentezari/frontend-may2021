// Importing functions to create and use a Context component
import React, { useReducer, createContext, useCallback } from 'react';

// Create a Context component
export const UserContext = createContext();

// Declare actions for this component
const UPDATE_USER = "UPDATE_USER";

// Declare an initial state for the Context component (i.e, the global state)
const initialState = {
    firstName: undefined,
    lastName: undefined,
    jsonwebtoken: undefined,
    loggedIn: false,
    avatar: undefined
}


// The reducer that will change the (global) state
const reducer = (state=false, action) => {
    if(action.type === UPDATE_USER) {
        return {
            ...state,
            ...action.payload
        }
    }
}


// Create the Provider component
export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Declare function to send payload to reducer
    const updateUser = useCallback(
        (payload) => {
            dispatch(
                {
                    type: UPDATE_USER,
                    payload: payload
                }
            )
        }, [dispatch]
    );

    return (
        <UserContext.Provider 
            value={{
                firstName: state.firstName,
                lastName: state.lastName,
                jsonwebtoken: state.jsonwebtoken,
                loggedIn: state.loggedIn,
                avatar: state.avatar,
                updateUser
            }}
        >{children}
        </UserContext.Provider>

    )
};