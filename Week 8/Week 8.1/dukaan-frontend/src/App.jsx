import { useState } from 'react'
import './App.css'
import RevenueCard from './components/RevenueCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* grid */}
      <div className='grid grid-cols-10'>
        <h1 className='bg-red-500 col-span-6'>hello</h1>
        <h1 className='bg-yellow-500 col-span-3'>hello</h1>
        <h1 className='bg-green-500 col-span-1'>hello</h1>
      </div>

    {/* Responsiveness */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2 gap-2'>
        <div className='p-4 bg-violet-600 text-white'>box 1</div>
        <div className='p-4 bg-violet-600 text-white'>box 2</div>
        <div className='p-4 bg-violet-600 text-white'>box 3</div>
      </div>

    {/* Example */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <RevenueCard title={"Amount Pending"} amount={"92,312.30"} orderNumber={13}/>
        <RevenueCard title={"Amount Pending"} amount={"92,312.30"} orderNumber={13}/>
        <RevenueCard title={"Amount Pending"} amount={"92,312.30"} orderNumber={13}/>
      </div>
    </>
  )
}

export default App
