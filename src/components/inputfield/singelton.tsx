import React, { useEffect, useRef, useState } from 'react'
import { todoval } from '../todovalue'
import { RiDeleteBin6Line,RiEdit2Line } from "react-icons/Ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import "./styleInput.css"

interface single{
    snew:todoval;
    state:todoval[];
    newstate: React.Dispatch<React.SetStateAction<todoval[]>>
}

const singelton = ({snew,state,newstate}:single) => {
  const [edit,setEdit] = useState<boolean>(false);
  const [editTodo,setEditTodo] = useState<string>(snew.todo);

  const editRef = useRef<HTMLInputElement>(null);

  const taskDelete= (id:number|string) => {
      newstate(state.filter((item) => (item.id !== id)))
  }

  const taskdone = (id:string|number) => {
      newstate(state.map((item) => (
        item.id == id? {...item,done:!item.done}: item
      )));
  }

  const taskEdit = (e:React.FormEvent,id:string|number) => {
    e.preventDefault();
    newstate(state.map((item) => (
      item.id === id? {...item,todo:editTodo}:item
    )))
    setEdit(false);
  }

  useEffect(()=>{
    editRef.current?.focus()
  },[edit])
  return (
    <>
    <form action="" className='singleton__form' onSubmit={(e) => taskEdit(e,snew.id)}>
      {
        edit?(
          <input value={editTodo} ref={editRef} className='dataState editInput' onChange={(e) => {
            setEditTodo(e.target.value);
          }} />
        ):(
          snew.done?(
            <s className='dataState done'>{snew.todo}</s>
          ):(
            <span className='dataState'>{snew.todo}</span>
          )
        )
      }
      {
    }
        

        <div className="icon__cont">
              <span className="icons" onClick={() => {
                if(!edit && !snew.done){
                  setEdit(!edit)
                }
              }}><RiEdit2Line/></span>

              <span className="icons" onClick={()=>taskDelete(snew.id)}><RiDeleteBin6Line /></span>

              <span className="icons" onClick={() => {taskdone(snew.id)}}><IoCheckmarkDoneSharp/></span>
        </div>
    </form>
    </>
  )
}

export default singelton