import "./App.css";
import { useContext, useState } from "react";
import { CountContext } from "./context";

export default function App() {
  const [count, setCount] = useState(0);
  // to use the context api file value, you have to wrap those component which will need to use that value

  return (
    <>
      <h1>Hello World</h1>
      <CountContext.Provider value={{count, setCount}}>
        <Count />
      </CountContext.Provider>
    </>
  );
}

function Count() {
  console.log("re-render");

  return (
    <>
      <CountRender />
      <Button />
    </>
  );
}

function CountRender() {
  const { count } = useContext(CountContext);

  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

function Button() {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}
