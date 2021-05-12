import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
 
                        {
                            props.links.map(
                                (linkObj) => {
                                    return <li className="nav-item">
                                        <Link className="nav-link" to={linkObj.path}>{linkObj.label}</Link>
                                    </li>
                                }
                            )
                        }
    
                    </ul>
                </div>
            </div>
            </nav>
    )
}

export default NavBar;