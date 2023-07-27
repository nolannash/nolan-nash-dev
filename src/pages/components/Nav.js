import React from 'react';
import * as styles from './cloudToggle.module.css'; 

const NavBar = ({selected, setSelected, setCloudsPaused, cloudsPaused }) => {
  const handleToggle = () => {
    setCloudsPaused((prevPaused) => !prevPaused);
  };

  const navItems = [
    { label: 'Home', key: 'home' },
    { label: 'About Me', key: 'about' },
    { label: 'Personal Projects', key: 'projects' },
    { label: 'Contact', key: 'contact' },
  ];

  return (
    <header className="text-white body-font">
      <div className="container mx-auto flex flex-wrap items-center p-5 flex-col md:flex-row">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 text-white md:mr-auto"
          href="/"
        >
          <span className="text-4xl mr-3">Nolan Nash</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-8 text-white p-1 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-4xl ml-3">FullStack Software Developer</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center justify-end text-xl">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={`mr-5 hover:bg-${item.key === 'home' ? 'green-400' : item.key === 'about' ? 'amber-300' : item.key === 'projects' ? 'pink-400' : 'violet-400'} focus:bg-${item.key === 'home' ? 'lime-700' : item.key === 'about' ? 'orange-400' : item.key === 'projects' ? 'pink-700' : 'purple-800'} rounded-full p-2 shadow-2xl`}
              onClick={() => setSelected(item.key)}
            >
              {item.label}
            </button>
          ))}
<div className="flex items-center ml-3">
            <input
              type="checkbox"
              id="toggleClouds"
              className="hidden"
              onChange={handleToggle}
              checked={cloudsPaused}
            />
            <label
              htmlFor="toggleClouds"
              className={`w-12 h-6 rounded-full cursor-pointer ${styles.cloudToggleLabel}`} // Use the CSS module class for the label
            >
              <div className={`cloudSlider ${cloudsPaused ? styles.cloudPaused : styles.cloudMoving}`}>
                <div className="cloud" /> {/* Use the cloud class for the cloud shape */}
              </div>
            </label>
            <span className={`text-white font-medium ml-2 ${cloudsPaused ? styles.textPaused : styles.textMoving}`}>
              {cloudsPaused ? 'Clouds Paused' : 'Clouds Moving'}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
