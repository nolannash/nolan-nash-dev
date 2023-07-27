import * as React from "react"
import NavBar from "./components/Nav"
import Clouds from "./components/Clouds"

const HomePage = () => {
  const [selected, setSelected] = React.useState('home')
  const [cloudsPaused, setCloudsPaused] = React.useState(false)


  const displaySelected = (selected) => {
    // switch (selected) {
    //   case 'home':
    //     return <Home/>
    //   case 'about':
    //     return <About/>
    //   case 'projects':
    //     return <Projects/>
    //   case 'contact':
    //     return <Contact/>
    //   default:
    //     return <Home/>
    // }
  }

  const handleCloudsToggle = () => {
    setCloudsPaused((prevPaused) => !prevPaused);
  };

  return (
    <main className="w-full h-full flex flex-col">
      <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex-grow">
        <div className="bg-gradient-to-b from-indigo-900 from to-indigo-500">
          <NavBar
            setSelected={setSelected}
            setCloudsPaused={handleCloudsToggle}
            cloudsPaused={cloudsPaused}
            selected={selected}
          />
        </div>
        <div className="w-full h-full flex-grow position-relative pt-40">
          <Clouds cloudsPaused={cloudsPaused} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
