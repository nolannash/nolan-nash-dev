import * as React from "react"
import NavBar from "./components/Nav"
import Clouds from "./components/Clouds"

const HomePage = () => {
  const [selected, setSelected] = React.useState('Home')

  const displaySelected = () => {}
  return (
    <main>
      <div className="bg-indigo-200">
        <div className="relative z-10">
          <NavBar setSelected={setSelected}></NavBar>
        </div>
        <div className="relatize z-0"><Clouds></Clouds>
        </div>
      </div>
    </main>
  )
}

export default HomePage
