import React ,{useState}from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [maintask, setMaintask] = useState([])

  const submitHandler =(e)=>{
      e.preventDefault();
      setMaintask([...maintask,{title}]);
      settitle("")
      console.log(maintask)
  };
    const deleteHandler =(i)=>{
      let copyTask =[...maintask]
      copyTask.splice(i,1)
      setMaintask(copyTask)
    }
  let renderTask =<h2 className='text-black'>No Task Available</h2>
  if(maintask.length>0){
      renderTask = maintask.map((t,i)=>{
        return (
        <li key={i} className='flex items-center justify-between mb-4'>
        <div className='flex justify-between -mb-2 w-2/3'>
          <div className=''><h5 className=''>{t.title}</h5></div>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-red-600 rounded font-bold px-4 py-2 text-white text-xl'>
          Delete
          </button>
        </li>
        )
      })
  }

  

  return (
    <>
    <div className=''>
    <h1 className='font-bold text-4xl text-center text-amber-100 m-5'>My Todo List</h1>
    <form onSubmit={submitHandler}>

      <input type="text" 
      className='border-2 border-black m-8 px-8 py-2 text-2xl '
      placeholder='Enter Task here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <button className=' bg-slate-500 px-4 py-2 m-5 rounded text-2xl text-white font-bold' >Add Task</button>
    </form>
    <hr />
    <h1 className='m-5 px-4 py-2 text-center font-bold text-3xl text-lime-100'>Tasks</h1>
    <div className='py-4 px-8 text-2xl text-bold  text-wrap  break-after-all '>
      <ul>{renderTask}</ul>
    </div>
    </div>
    </>
  )
}

export default App
