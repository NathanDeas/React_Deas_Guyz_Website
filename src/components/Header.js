import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="Navbar">
            <div className="deas-guyz-logo"></div>
            <div className="nav_buttons_full">
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
                        </li>                        
                        <li>
                        <div className="dropdown_menu">
                            MORE...
                            <div className="d_options">
                                <ul>
                                    <li><NavLink to="/mailinglist" activeClassName="active">JOIN OUR MAILING LIST</NavLink></li>
                                    <li><NavLink to="/guestbook" activeClassName="active">GUESTBOOK</NavLink></li>
                                </ul>
                            </div>
                        
                            
                        </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="nav_buttons_small">
                <div id="test">Menu</div>
                <div className="small_menu_dropdown">
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
                        </li>  
                        <li>
                            <NavLink to="/mailinglist" activeClassName="active">JOIN OUR MAILING LIST</NavLink>
                        </li>
                        <li>
                            <NavLink to="/guestbook" activeClassName="active">GUESTBOOK</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Header;