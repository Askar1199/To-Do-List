import { useState } from 'react'
import './App.css'
import Inputfield from './components/inputfield/inputfield'
import { todoval } from './components/todovalue'
import Listfield from './components/listfield'



function App() {
  const [value, setvalue] = useState('')

  const[todo,setTodo] = useState<todoval[]>([])

  let idR:number;
  
  const submit =(event:React.FormEvent) => {
    event.preventDefault();
    
    if(value){
    setTodo([...todo,{ id:Math.random().toFixed(4), todo:value,done:false}])
    setvalue('')
    }
  }

  // console.log(todo)
  return (
    <>
      <div className="container">
        <h2 className="heading">To Do List</h2>
         <Inputfield value={value} setvalue={setvalue} submit={submit}/>
         {/* {todo.map((i)=>(
          <li>{i.todo}</li>
         ))} */}
         <Listfield state={todo} newState={setTodo} />
      </div>
    </>
  )
}

export default App
