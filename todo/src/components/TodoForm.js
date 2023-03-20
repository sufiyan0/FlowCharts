import React, {useState} from 'react'

export const TodoForm = () => {
  const [value , setValue] = useState("");
 
  const handelSubmint = e => {
    e.preventDefault();    
    console.log(value)

  }
 
  return (
    <form  className='TodoForm' onSubmit={handelSubmint}>
   
      <input type="text" className='todo-input' 
      placeholder='What is your task today' onChange = {(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'  >Add Todo</button>
    </form>
  )
}

// export default TodoForm
