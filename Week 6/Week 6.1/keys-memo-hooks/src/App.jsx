import React, { useEffect } from "react";
import './App.css'
import ReactMemo from "./components/ReactMemo";
import ReactKeys from "./components/ReactKeys"
import CardWrapper from "./components/CardWrapper";
import TextComponent from "./components/TextComponent";
import UseEffect from "./components/UseEffect"


function App() {
  return (
    <div>
      {/* <ReactMemo /> */}
      {/* <ReactKeys /> */}

      {/* <CardWrapper children={<TextComponent />} /> */}
      {/* That's how we can pass a component inside a component */}

      <UseEffect />
    </div>
  )
}

export default App;