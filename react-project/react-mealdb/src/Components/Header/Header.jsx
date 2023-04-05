import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-emerald-600 py-8">
            <div className="max-w-[1240px] mx-auto flex justify-between items-center">
                <Link className="text-3xl font-bold text-white"> Nazmul Hassan </Link>
                <ul className='flex'>
                    <li><NavLink to="/" 
                        className={({ isActive }) =>
                        isActive ? "active" : "default"}
                      >Home</NavLink></li>

                    <li><NavLink to="/meal"
                        className={({ isActive }) =>
                        isActive ? "active" : "default"}
                    >Meal</NavLink></li>

                    <li><NavLink to="/about"
                        className={({ isActive }) =>
                        isActive ? "active" : "default"}
                    >About</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;