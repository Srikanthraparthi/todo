import React from 'react'

const Middle = ({ todos, deleteTodo }) => {
  return (
    <div className='container'>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <div key={index} className='todo'>
            <p>{todo}</p>
            <div className='actions'>
              <input type='checkbox' />
              <button onClick={() => deleteTodo(index)}>Delete</button> {/* Call deleteTodo */}
            </div>
          </div>
        ))
      ) : (
        <p>No todos available.</p>
      )}
    </div>
  )
}

export default Middle
