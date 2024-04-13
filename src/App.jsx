import React ,{useState}from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setMaintask] = useState([])

  const submitHandler =(e)=>{
      e.preventDefault();
      setMaintask([...maintask,{title,desc}]);
      settitle("")
      setdesc("")
      console.log(maintask)
  };

  let renderTask =<h2>No task available</h2>
  if(maintask.length>0){
      renderTask = maintask.map((t,i)=>{
        return (<div className='flex justify-between mb-5 '>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h4 className='text-xl font-semibold '>{t.desc}</h4>
        </div>
        )
      })
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
    <hr />
    <div className='p-6 bg-slate-200 text-2xl text-bold '>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default App
