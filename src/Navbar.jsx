import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';
import { useState } from "react";
import { useGlobalContext } from './context';

const Navbar = () =>
{
    const [menuOpen, setMenuOpen] = useState(false);
    const {query,searchPost} = useGlobalContext();

    const handleToggleMenu = () =>
    {
        setMenuOpen(!menuOpen);
    }

    const handleSearch = (e) =>
    {
        searchPost(e.target.value);    
    }

    return(
        <>
            <div className="Navbar">
                <div className="left-section" onClick={handleToggleMenu}>
                    <div className={`menu-bar1 ${menuOpen ? "menu-bar1-change":""}`}></div>
                    <div className={`menu-bar2 ${menuOpen ? "menu-bar2-change":""}`}></div>
                    <div className={`menu-bar3 ${menuOpen ? "menu-bar3-change":""}`}></div>
                </div>
                <div className="middle-section">
                    <input type="text" placeholder="Search Products" value={query} className="searchbox" onChange={handleSearch}></input>
                </div>
                <div className="right-section">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={`offscreen-menu ${menuOpen ? "offscreen-menu-show":""}`}>
                <ul>
                    <li><NavLink to="/bestsoldproducts">Best sold products</NavLink></li>
                    <li><NavLink to="/clothing">Clothing</NavLink></li>
                    <li><NavLink to="/electronics">Electronics</NavLink></li>
                </ul> 
            </div>
        </>
    )
}

export default Navbar;