import React from "react";
import "./Navbar.css";


const Navbar = props => <nav className="navbar fixed-top">{props.children}</nav>;

export default Navbar;