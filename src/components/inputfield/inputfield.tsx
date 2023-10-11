import { useRef } from 'react';
import  './styleInput.css'

interface list{
  value:string;
  setvalue: React.Dispatch<React.SetStateAction<string>>;
  submit:(event:React.FormEvent)=>void
}
const inputfield = ({value,setvalue,submit}:list) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
    <form className="field" onSubmit={(e)=>{
      submit(e);
      inputRef.current?.blur();
      }}>
        <input type="text" ref={inputRef} placeholder='What You Want To Do?' value={value} onChange={(e)=>setvalue(e.target.value)} className='textInput'/>
        <button className='btnS' >Done</button>
    </form>
    </>
  )
}

export default inputfield