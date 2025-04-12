import './App.css'
import { useState } from 'react'
import Home from './components/Home'
import Middle from './components/Middle'

function App() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])

  function writeToDo(e) {
    setInputVal(e.target.value)
  }

  function addToDo() {
    if (inputVal.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, inputVal])
      setInputVal('') // Clear input field after adding
    }
  }

  function deleteTodo(index) {
    setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index))
  }

  console.log(todos) // This will log the updated todos

  return (
    <main>
      <h1>To Do List</h1>
      <Home inputVal={inputVal} writeToDo={writeToDo} addTodo={addToDo} />
      <Middle todos={todos} deleteTodo={deleteTodo} />
    </main>
  )
}

export default App
