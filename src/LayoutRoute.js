import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

let headerLinks = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Contact', path: '/contact'},
    {label: 'Register', path: '/register'},
]
  
let footerLinks = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Contact', path: '/contact'},
    {label: 'FAQs', path:'/faqs'},
    {label: 'Subscribe', path: '/subscribe'},
    {label: 'Terms & Conditions', path: '/terms-and-conditions'}
]

function LayoutRoute(props) {
    return (
        <div>
            <NavBar links={headerLinks} theme="light" />
            <Route path={props.path} exact={props.exact} component={props.component} />
            <NavBar links={footerLinks} theme="dark" />
        </div>
    )
}

export default LayoutRoute;