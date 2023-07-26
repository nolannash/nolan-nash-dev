// src/components/Nav.js
import React from 'react';

const NavBar = ({setSelected}) => {
    return (
    <header className=" text-gray-700 body-font border-b border-gray-200 bg-indigo-500" >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-indigo-500 ">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 text-white" href="#" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-black p-2 bg-indigo-200 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Nolan Nash - FullStack Software Developer</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
          <button className="mr-5 hover:text-gray-900 hover:bg-gray-200 rounded-full" onClick={() => { /* Add your onClick logic here */ }}>Home</button>
          <button className="mr-5 hover:text-gray-900 hover:bg-gray-200 rounded-full" onClick={() => { /* Add your onClick logic here */ }}>About Me</button>
          <button className="mr-5 hover:text-gray-900 hover:bg-gray-200 rounded-full" onClick={() => { /* Add your onClick logic here */ }}>Personal Projects</button>
          <button className="mr-5 hover:text-gray-900 hover:bg-gray-200 rounded-full" onClick={() => { /* Add your onClick logic here */ }}>Contact</button>
        </nav>
        </div>
    </header>
    );
};

export default NavBar;
