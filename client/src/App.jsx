import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-20 bg-amber-200'>Header</div>
    </>
  )
}

export default App
