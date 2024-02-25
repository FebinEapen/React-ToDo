import React, { useState } from 'react'


export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("") 
    const handleSubmit = e => {
        e.preventDefault() 

        addTodo(value)     

        setValue('') //clearing up the input box 
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
               className='todo-input'
               placeholder='Type in your task!'
               value={value} 
               onChange={(e) => setValue(e.target.value)}  
        /> 
        <button type='submit' className='todo-btn'>Add</button>
    </form>

  )
}
