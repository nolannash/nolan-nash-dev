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
          <NavBar
            setSelected={setSelected}
            setCloudsPaused={handleCloudsToggle}
            cloudsPaused={cloudsPaused}
          />

        </div>
          
        <div className="w-full h-full flex-grow position-relative pt-5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 z-0">
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





