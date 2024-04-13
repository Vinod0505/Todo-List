import React ,{useState}from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const submitHandler =(e)=>{
      e.preventDefault();
      console.log(title)
      console.log(desc)
      settitle("")
      setdesc("")
  }
  return (
    <>
    <h1 className='font-bold bg-black text-5xl text-center text-white'>My Todo List</h1>
    <form onSubmit={submitHandler}>

      <input type="text" 
      className='border-2 border-black m-8 px-8 py-2 text-2xl '
      placeholder='Enter Title here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />

      <input type="text" 
      className='border-2 border-black m-8 px-8 py-2 text-2xl '
      placeholder='Enter Description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />

      <button className=' bg-slate-500 px-4 py-2 m-5 rounded text-2xl text-white font-bold' >Add Task</button>
    </form>
    </>
  )
}

export default App
