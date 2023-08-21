import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black w-full h-full text-red-700'>
        Hello
      </div> 
    </>
  )
}

export default App
