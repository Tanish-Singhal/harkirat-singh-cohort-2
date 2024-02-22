import React, { useState, useEffect, useCallback } from 'react'

function UseCallback() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(function() {
    // some operation to get the data
    setExchange1Data({
      returns: 100
    })
  }, [])

  useEffect(function() {
    // some operation to get the data
    setExchange2Data({
      returns: 100
    })
  }, [])

  useEffect(function() {
    // some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 5000)
  }, [])
  // useCallback is not about minimizing the amount of code that is run
  // useCallback is about not rendering a child component, if the function hasn't/doesn't need to change across renders

  // const calculateCryptoReturns = function() { 
  //   return exchange1Data.returns + exchange2Data.returns;
  // }
  const calculateCryptoReturns = useCallback(function() { 
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data])

  return (
    <>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
      <Dummy/>
    </>
  )
}

const CryptoGainsCalculator = React.memo(function({calculateCryptoReturns}) {
  console.log("crypto child re-render")
  return (
    <>
      <h2>Your crypto returns are {calculateCryptoReturns()}</h2>
    </>
  )
})

const Dummy = React.memo(function() {
  return (
    <>
      <h2>hi</h2>
    </>
  )
})

export default UseCallback;