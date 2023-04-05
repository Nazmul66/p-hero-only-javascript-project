import React, { useState } from 'react';
import './Headers.css';
import { Bars3BottomLeftIcon , XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Headers = () => {
    const [count, setCount] = useState(false);


    return (
    <div className='py-10 bg-lime-700'>
       <div className="container max-w-[1240px] mx-auto flex justify-between items-center">
          <h1>Hello world</h1>
          <div onClick={ () =>setCount(!count)}>
             <span className="z-50 lg:hidden"> 
                {
                count === true ? 
                <XMarkIcon className="h-6 w-6 text-purple-500" /> :
               <Bars3BottomLeftIcon className="h-6 w-6 text-purple-500" />
               }  
             </span>
          </div>
          <nav className={` ${count  ? "top-24 opacity-100 " : '-top-80 opacity-0 lg:opacity-100'}`}>
             <ul className='lg:flex'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">Faq</Link></li>
                <li><Link to="/dataLoad">DataLoad</Link></li>
             </ul>
          </nav>
       </div>
    </div>
    );
};

export default Headers;