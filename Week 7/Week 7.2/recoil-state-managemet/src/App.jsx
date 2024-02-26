import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context';
import { useContext, useMemo } from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';

// TODO: Recoil help you to get rid of state variable and manage all the state inside "store" name folder, so thst you can easily see all the state at a single place

function App() {
  return (
    <>
       <RecoilRoot>     {/* and where we have to use the atom component we need to wrap thing inside RecoilRoot component */}
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

// we know that, below two compoent need the value of count and set count from the functioning
// but we remove all the state and props from the code 
// TODO: so in recoil we use three api, by which we can do state management.
// useRecoilState -> It is excatly same as the useState (array with two values)
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
  console.log("re-render button");
  const setCount = useSetRecoilState(countAtom);

  return (
    <>
      <button onClick={() => {
        setCount(count => count + 1);
      }}>Increase</button>

      <button onClick={() => {
        setCount(count => count - 1);
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
