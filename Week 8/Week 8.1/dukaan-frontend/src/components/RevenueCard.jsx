import React from 'react'
import Button from '@mui/material/Button';  // button with Material UI theme

function RevenueCard({
  title,
  amount,
  orderNumber
}) {
  return (
    <div className='bg-stone-700 text-white font-semibold p-4 m-2 rounded-md shadow-sm'>
      <div className='flex justify-between items-center p-2'>
        <div className='p-2 text-2xl'>{title}</div>
        <Button variant="outlined">Pay</Button>
      </div>
      <div className='flex justify-between items-end p-2'>
        <div className='text-5xl'>₹ {amount}</div>
        <div className='text-xl underline'>{orderNumber} orders</div>
      </div>
    </div>
  )
}

export default RevenueCard;

// 1 44