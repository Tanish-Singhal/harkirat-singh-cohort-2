import React from 'react'

function Footer() {
  return (
    // <div className='text-white flex justify-center items-center bg-black'>
    //   This is the Footer of the App
    // </div>
    <div className='fixed bottom-3 inset-x-0 px-3'>
      <div className='h-40 w-full flex flex-wrap justify-center items-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
        <p className='text-black font-semibold'>This is the footer of the App</p>
      </div>
    </div>
  )
}

export default Footer