import * as React from "react"
import NavBar from "./components/Nav"
import Clouds from "./components/Clouds"

const HomePage = () => {
  const [selected, setSelected] = React.useState('Home')

  const displaySelected = () => {}
  return (
    <main className="w-full h-full flex flex-col">
      <div className="bg-indigo-200 flex-grow">
        <div className="relative ">
          <NavBar setSelected={setSelected}></NavBar>
        </div>
        <div className="w-full h-full flex-grow position-relative pt-40">
          <Clouds/>
        </div>
      </div>
    </main>
  );
};

export default HomePage
