import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks=()=>{
    return (
        <nav>
            <NavLink to="/packages">
View Packages
            </NavLink>
            <NavLink to="/auth">
Authenticate
            </NavLink>
        </nav>
    )
}

export default NavLinks