import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task,setTask] = useState([]);
  const [data, setData] = useState("")
  function handleTask(){
    if(data.trim() !== ""){
   setTask([...task,data]);
      setData("");
  }else {
    alert("please enter a task first");
  }};
 const removeFunction = (index)=>{
    const updatedTasks = task.filter((_,i)=> i !== index);
    setTask(updatedTasks);
  }

  return (
    <>
     <div>
      <h1  className='text-[50px] mb-28 ml-[600px] bg-gray-500 max-w-[280px] rounded-[38%_35%_31%_42%_/_37%_10%_36%_10%] p-4'>To-Do-App</h1>
      <div className='ml-[300px]'>
      <input value={data} onChange={(e)=> setData(e.target.value)} type="text" className='border border-black rounded-xl h-10 w-72 mr-3'/>
      <button className='border border-black rounded-2xl p-2 bg-gray-500 ' onClick={handleTask} >Submit</button>
      </div>
     </div>
     <div className=' absolute top-0 left-1 h-[640px] border border-black w-[450px] text-[40px]'>
      <h1 className='mb-5 underline'>Task list</h1>
      <ul className='flex flex-col gap-2'> {task.map((item,index)=>(

           <li className='text-[30px] flex gap-x-7 ' key={index}>  {(index + 1) +") " }  {item} <button onClick={()=> removeFunction(index)}className='text-red-500 '>Remove</button></li>  
      ))}</ul>
     </div>
    </>
  )
}

export default App
