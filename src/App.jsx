import {React,useState} from 'react'
import TodoForm from './components/TodoForm'
import './index.css'

let [todos,settodos]=useState([])
const addTodo= (todo)=>{
  settodos([todo, ...todos])
}
const App = () => {
  return (
    <div className='container'>
      <TodoForm onSubmit={addTodo} />
    </div>
  )
}

export default App