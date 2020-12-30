import React, { Component } from "react";

import "./styles/Navigation.css";
import { Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom'
import logo from "../images/icon-logo.png";

class Navigation extends Component {
    render() {
        return (
            <Navbar className="navbar">
                <Link to='/'>
                    <Navbar.Brand className="navbar__brand">
                        <img className="navbar__brand-logo" src={logo} alt="Logo" />
                        <span>Cover</span>
                        <span>Letter</span>
                        <span>Cards</span>
                    </Navbar.Brand>
                 </Link>
            </Navbar>
        );
    }
}

export default Navigation;
