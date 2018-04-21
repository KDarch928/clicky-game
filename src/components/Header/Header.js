import React from "react";
import "./Header.css";

const Header = () => (
    <header className="header text-center">
        <div className="title">
            <h1>Clicky Game</h1>
            <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
    </header>
);

export default Header;