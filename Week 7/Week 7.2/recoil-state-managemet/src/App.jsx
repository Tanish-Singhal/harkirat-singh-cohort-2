import './App.css'
import { CountContext } from './context';
import { useContext, useMemo } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

// TODO: Recoil help you to get rid of state variable and manage all the state inside "store" name folder
// so that you can easily see all the state at a single place and also get rid of prop drilling and minimize re-rendering

function App() {
  return (
    <>
      {/* and where we have to use the atom component we need to wrap thing inside RecoilRoot component */}
       <RecoilRoot>     
        <Count />
      </RecoilRoot>
    </>
  )
}

function Count() {
  console.log("re-render");       

  return (
    <>
      <CountRender />
      <br /><br />
      <Button />
      <br /><br />
      <EvenOrNot />
    </>
  )
}

// code need count and setCount value, as we remove them
// TODO: so in recoil we use three api, by which we can do state management.
// useRecoilState -> excatly same as the useState
// useRecoilValue -> If you want just the value, and you don't want ot worry about updating the value
// useSetRecoilState -> If you only to update the variable, and not actually get the variable 

function CountRender() {
  // const [count, setCount] = useRecoilValue(countAtom);
  const count = useRecoilValue(countAtom);

  return (
    <>
      <b>{count}</b>
    </>
  )
}

function Button() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);

  console.log("re-render button");
  return (
    <>
      {/* <button onClick={count + 1}>Increase</button>
      <button onClick={count - 1}>Decrease</button> */}
      
      <button onClick={() => {
        setCount(c => c + 1);
      }}>Increase</button>

      <button onClick={() => {
        setCount(c => c - 1);
      }}>Decrease</button>
    </>
  )
}

// TODO: Selectors -> A selectors represents a piece if derived state. You can think of derived state as the output of passing to a pure function that derives a neew value from the said state.

function EvenOrNot() {
  console.log("re-render Even Statement")
  const isEven = useRecoilValue(evenSelector);

  if (isEven) {
    return <b>It is even</b>
  }
}

export default App
