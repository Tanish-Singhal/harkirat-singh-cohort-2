import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [exchangeDate, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("hi, render")

  // assume these data was return to you from a backend server
  // setTimeout(() => {
  //   setBankData({income: 100});
  // }, 3000)

  // setTimeout(() => {
  //   setExchangeData({returns: 100});
  // }, 1000);
  
  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 3000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100
      });
    }, 1000);
  }, [])

  const incomeTax = (bankData.income + exchangeDate) * 0.3;

  return (
    <div>
      <h2>hi there, your income tax returns are {incomeTax}</h2>
    </div>
  )
}

export default UseEffect;