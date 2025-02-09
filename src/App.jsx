// eslint-disable-next-line no-unused-vars
import React from "react"
import { Analytics } from "@vercel/analytics/react"

import MainContent from "./components/MainContent"

const App = () => {
  return (
    <>
      <div className="flex animate-fadeIn duration-1000">
        <MainContent />
        <Analytics />
      </div>
    </>
  )
}

export default App
