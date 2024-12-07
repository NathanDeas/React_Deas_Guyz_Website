import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="Navbar">
            <div className="deas-guyz-logo"></div>
            <div className="nav_buttons">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/calendar" activeClassName="active">SCHEDULE</NavLink>
                        </li>
                        <li>
                            <NavLink to="/songlist" activeClassName="active">SONG LIST</NavLink>
                        </li>
                        <li>
                            <NavLink to="/booking" activeClassName="active">BOOK THE BAND</NavLink>
                        </li>MORE...<li>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>

    );
}

export default Header;