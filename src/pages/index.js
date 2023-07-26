import * as React from "react"
import NavBar from "./components/Nav"
import Clouds from "../components/Clouds"

const IndexPage = () => {
  const [selected, setSelected] = React.useState('Home')

  const displaySelected = () => {}
  return (
    <main>
      <Clouds></Clouds>

      <div className="relative z-10">
        <NavBar setSelected={setSelected}></NavBar>
      </div>
    </main>
  )
}

export default IndexPage
