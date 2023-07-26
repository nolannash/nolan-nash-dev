import * as React from "react"
import NavBar from "./components/Nav"

const IndexPage = () => {
  return (
    <main >
      {NavBar}
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
