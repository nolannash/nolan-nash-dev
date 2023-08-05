import React from 'react';
import  {CloudButton}  from './CloudToggle';
import '@fontsource-variable/lexend';

const NavBar = ({setSelected, cloudsPaused,setCloudsPaused }) => {

  return (
    <header className="text-white body-font  justify-center object-center " style={{ fontFamily: "'Lexend Variable', sans-serif" }}>
      <div className="container mx-auto flex items-center justify-between p-5">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 text-white md:mr-auto  "
          href="/"
        >
          <span className="text-4xl">Nolan Nash</span>
          <svg
  
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            className="w-10 h-8 text-white p-1 rounded-full m-4"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-4xl">FullStack Software Developer</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center text-xl p-4">
          <button className="mr-5 hover:bg-pink-300 focus:bg-red-300 rounded-full p-3 shadow-2xl shadow-inner brightness-130" onClick={() => setSelected('home')}>Home</button>
          <button className="mr-5 hover:bg-lime-600 focus:bg-emerald-800 rounded-full p-3" onClick={() => setSelected('about')}>About Me</button>
          <button className="mr-5 hover:bg-blue-400 focus:bg-sky-700 rounded-full p-3" onClick={() => setSelected('projects')}>Personal Projects</button>
          <button className="mr-5 
          hover:bg-amber-300 focus:bg-orange-400 rounded-full p-3" onClick={() => setSelected('blog')}>Blog</button>
          <button className="mr-5 
          hover:bg-violet-400 focus:bg-fuchsia-950 rounded-full p-3" onClick={() => setSelected('contact')}>Contact</button>
          
        </nav>
        <div className="ml-auto ">
          {cloudsPaused === true ? <span>Clouds Off</span>:<span>Clouds On</span>}
          <CloudButton cloudsPaused={cloudsPaused}setCloudsPaused={setCloudsPaused}/>
        </div>
      </div>
    </header>
  );
};

export default NavBar;