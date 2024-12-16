import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1  className='text-[50px] mb-28'>To-Do-App</h1>
      <input type="text" className='border border-black rounded-xl h-10 w-72 mr-3'/>
      <button className='border border-black rounded-2xl p-2 bg-blue-900'>Submit</button>
     </div>
     <div className=' absolute top-0 left-1 h-[640px] border border-black w-[450px] text-[40px]'>
      <h1>Tasks list</h1>
     </div>
    </>
  )
}

export default App
