import * as React from "react"
import NavBar from "./components/Nav"
import Clouds from "./components/Clouds"
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";


const HomePage = () => {
  const [selected, setSelected] = React.useState('home')
  const [cloudsPaused, setCloudsPaused] = React.useState(false)


  const displaySelected = (selected) => {
    switch (selected) {
      case 'home':
        return <Home/>
      case 'about':
        return <About/>
      case 'projects':
        return <Projects/>
      case 'contact':
        return <Contact/>
      case 'blog':
        return <Blog/>
      default:
        setSelected('home')
        return <Home/>
    }
  }

  const handleCloudsToggle = () => {
    setCloudsPaused((val) => !val);
  };

  return (
    <main className="w-full h-full flex flex-col">
      <div className="grow">
        <div className="bg-gradient-to-b from-indigo-900 from to-indigo-500 ">
        <div className=" text-white flex title-font font-medium justify-center text-white mb-4 pt-6">
          <span className="text-5xl">Nolan Nash</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            className="w-12 h-10 text-white p-1 rounded-full m-4"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="text-5xl">FullStack Software Developer</span>
        </div>
          <NavBar
            setSelected={setSelected}
            setCloudsPaused={handleCloudsToggle}
            cloudsPaused={cloudsPaused}
          />
        </div>
          
        <div className="w-full h-full flex-grow position-relative pt-5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-400 z-0">
          <div className="justify-center flex-grow w-2/3 m-auto">
            {displaySelected(selected)}
          </div>
          <Clouds cloudsPaused={cloudsPaused} handleCloudsToggle={handleCloudsToggle} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;





