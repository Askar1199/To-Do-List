import React from 'react'
import { todoval } from './todovalue'
import "./inputfield/styleInput.css"
import Singelton from './inputfield/singelton';

interface newP{
  state:todoval[];
  newState:React.Dispatch<React.SetStateAction<todoval[]>>
}
const listfield = ({state,newState}:newP) => {
  return (
    <div className='divlist'>
        {state.map((item) => (
          <Singelton snew={item} key={item.id} state={state} newstate={newState} />
        ))}
    </div>
  )
}

export default listfield