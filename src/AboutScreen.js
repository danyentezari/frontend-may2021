import React from 'react';
import NavBar from './NavBar';

let headerLinks = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Contact', path: '/contact'},
  ]
  
  
let footerLinks = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Contact', path: '/contact'},
    {label: 'FAQs', path:'/faqs'},
    {label: 'Subscribe', path: '/subscribe'},
    {label: 'Terms & Conditions', path: '/terms-and-conditions'}
  ]

function AboutScreen() {
    return (
        <div>
            <NavBar theme="light" links={headerLinks} />
            <h1>About Us</h1>
        </div>  
    )
}

export default AboutScreen;