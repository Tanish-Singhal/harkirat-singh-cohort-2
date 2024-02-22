import React, { useState, useEffect, useMemo } from 'react'

function UseMemo() {
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

  const cryptoReturns = useMemo(() => {
    console.log("hi there, before");
    return exchange1Data.returns + exchange2Data.returns;
  })
  
  // console.log("hi there, before");
  // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
  // console.log("hi there, after");
  
  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <>
      <h2>hi there, your income tax returns are {incomeTax}</h2>
    </>
  )
}

export default UseMemo;