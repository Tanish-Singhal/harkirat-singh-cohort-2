import React, { useState, useEffect } from 'react'

// TODO: Difference between function and class based components
// function MyComponent() {
//   const [count, setCount] = useState(0);
  
//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </>
//   );
// }


// class based component
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// --------------------------------------------------------------------------

// TODO: Life Cycle Events
function ClassComponents() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000);
  }, []);

  return (
    <>
      {render ? <MyComponent /> : <div>MyComponent vanished</div>}
    </>
  )
}

// function MyComponent() {
//   useEffect(() => {
//     console.log("component mounted");

//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return (
//     <>
//       From inside my component
//     </>
//   )
// }

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("component mounted");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    return (
      <>
        hi there
      </>
    )
  }
}

// -------------------------------------------------------------------------

export default ClassComponents;
