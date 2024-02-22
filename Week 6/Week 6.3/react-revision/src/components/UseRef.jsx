import React, { useEffect, useState, useRef } from 'react';

function UseRef() {
  const [incomeTax, setIncomeTax] = useState(20000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 10;
      setIncomeTax(10);
    }, 5000);
  }, []);

  return (
    <>
      <h2>hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div></h2>
    </>
  );
}

export default UseRef;

// TODO: useRef
// suppose you to overwrite some text, so you just cahnge the setIncomeTax(10)
// so that the value was changed to 20000 to 10.
// But this was not a good practise as, you confuse the React because according to the React he put 20000 on the website, but you change that to 10
// so if in future, if you do some calculation on that variable then the calculation was done according to the 20000 not 10