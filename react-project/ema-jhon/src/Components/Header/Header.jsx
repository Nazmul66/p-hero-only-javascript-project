import React from 'react';
import "./Header.css";
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
                <div className="menu">
                    <ul>
                        <li><a href="#Order">Order</a></li>
                        <li><a href="#OrderReview">Order Review</a></li>
                        <li><a href="#ManageInventory">Manage Inventory</a></li>
                        <li><a href="#Login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;