import React from 'react';
import {Link} from "react-router-dom";

const hancleClick = (target) =>{
const text = target.classList
    // console.log(text.remove("active"))
    if (target.className.includes("active"))
    {
       return
    }
    else{
        target.className.add(" active")
    }
}
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Being Coder</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link
                                onClick={(e)=> hancleClick(e.target)}

                                to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link   onClick={(e)=> hancleClick(e.target)} to="/counter" className="nav-link" href="#">Counter</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Rentals</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                javaScript
                            </a>
                            <ul className="dropdown-menu" >
                                <li><Link to="/toggle" className="dropdown-item" >Toggle</Link></li>
                                <li><a className="dropdown-item" >Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link ">login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/toggle" className="nav-link ">Toggle</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;