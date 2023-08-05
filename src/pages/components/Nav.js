import React from 'react';
import { CloudButton } from './CloudToggle';
import '@fontsource-variable/lexend';

const NavBar = ({ setSelected, cloudsPaused, setCloudsPaused }) => {
  return (
    <header className="text-white justify-center object-center" style={{ fontFamily: "'Lexend Variable', sans-serif" }}>
      <div className="container mx-auto flex flex-col items-center justify-between pb-5">

        <nav className="md:m-auto flex flex-wrap items-center text-white justify-center text-2xl p-4">
          <button className="mr-5 hover:bg-pink-300 focus:bg-red-300 rounded-full p-3 shadow-2xl shadow-inner brightness-130" onClick={() => setSelected('home')}>Home</button>
          <button className="mr-5 hover:bg-lime-600 focus:bg-emerald-800 rounded-full p-3" onClick={() => setSelected('about')}>About Me</button>
          <button className="mr-5 hover:bg-blue-400 focus:bg-sky-700 rounded-full p-3" onClick={() => setSelected('projects')}>Personal Projects</button>
          <button className="mr-5 hover:bg-amber-300 focus:bg-orange-400 rounded-full p-3" onClick={() => setSelected('blog')}>Blog</button>
          <button className="hover:bg-violet-400 focus:bg-fuchsia-950 rounded-full p-3" onClick={() => setSelected('contact')}>Contact</button>
        </nav>

        {/* Second Row: Toggle */}
        <div className="flex items-center justify-center text-white text-2xl">
          {cloudsPaused === true ? <p className='mr-3'>Clouds Off</p> : <p className='mr-3'>Clouds On</p>}
          <CloudButton cloudsPaused={cloudsPaused} setCloudsPaused={setCloudsPaused} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
