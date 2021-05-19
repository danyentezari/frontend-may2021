import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainScreen from './MainScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import LayoutRoute from "./LayoutRoute";

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={MainScreen} />
                <LayoutRoute path="/about" exact={true} component={AboutScreen} />
                <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
                <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
                <LayoutRoute path="/login" exact={true} component={LoginScreen} />
                <LayoutRoute path="/profile" exact={true} component={ProfileScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;