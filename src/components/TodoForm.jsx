import {React,useState} from 'react'

const TodoForm = (props) => {
  const [text,Settext]=useState("");
  const handeleSubmit=(e)=>{
    e.preventDefault();
    props.onSubmit({
      id:
    })
  }
  const handelChange=(e)=>{
    Settext(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handeleSubmit} >
        <input className='input-field' type="text" onChange={handelChange} value={text}/>
        <button className='btn btn-primary m-2' onClick={handeleSubmit} > Add to do</button>
        {text}
      </form>

    </div>
  )
}

export default TodoForm