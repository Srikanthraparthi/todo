import React from 'react'

function Home({ inputVal, writeToDo, addTodo }) {
  return (
    <div>
      <div className='input-container'>
        <input
          type='text'
          value={inputVal}
          onChange={writeToDo}
          placeholder='Enter a task'
        />
        <button onClick={addTodo}>+</button> {/* Correctly calling addTodo */}
      </div>
    </div>
  )
}

export default Home
