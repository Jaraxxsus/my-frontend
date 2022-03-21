import React from "react";
import './components_css/navbar.css'
import {  Link } from "react-router-dom";


const Navbar = ()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to = "/about">WT</Link></li>
                    <li><Link to = "/help"></Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;