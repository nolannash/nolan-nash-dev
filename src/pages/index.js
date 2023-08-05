import * as React from "react";
import NavBar from "./components/Nav";
import Clouds from "./components/Clouds";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import '@fontsource/vt323';
import '@fontsource-variable/lexend';

const HomePage = () => {
  const [selected, setSelected] = React.useState('home');
  const [cloudsPaused, setCloudsPaused] = React.useState(false);

  const displaySelected = (selected) => {
    switch (selected) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;

      default:
        return <Home />;
    }
  };

  const handleCloudsToggle = () => {
    setCloudsPaused((val) => !val);
  };

  return (
    <main className="
    flex 
    flex-col 
    min-h-screen
    bg-gradient-to-b 
    from-indigo-900 
    via-indigo-500 
    to-fuchsia-300">

      <div className="flex-grow">

        <div className="text-white z-11 ">

          <div className="flex 
          title-font 
          font-medium 
          justify-center 
          mb-4 
          pt-6 
          tracking-wide" 
          style={{ fontFamily: "'VT323', sans-serif"}}>

            <span className="text-8xl">Nolan Nash</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="w-16 h-15 text-white p-1 rounded-full m-4"
              viewBox="0 0 24 24"
            >
              
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>

            <span className="text-8xl ">
              FullStack Developer
            </span>
            </div>

          <NavBar
            setSelected={setSelected}
            setCloudsPaused={handleCloudsToggle}
            cloudsPaused={cloudsPaused}
          />
        </div>

        <div className="justify-center
        w-2/3 
        m-auto 
        h-2/3 
        z-10">
          {displaySelected(selected)}
        </div>

        <div className="
        w-full
        flex-grow 
        position-relative 
        pt-5 
        z-0">

          <Clouds 
          cloudsPaused={cloudsPaused} 
          handleCloudsToggle={handleCloudsToggle}/>

        </div>
      </div>
    </main>
  );
};

export default HomePage;




