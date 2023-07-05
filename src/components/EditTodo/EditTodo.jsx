import React,{useState} from 'react'
import "./EditTodo.css"

const EditTodo = ({edittodo,closeEditForm,updateTodo}) => {
    const [text,setText] = useState(edittodo.name)

    const handleUpdate =() =>{
        updateTodo(edittodo.id,text)
    }

  return (
    <div className='edit-form'>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className='update' onClick={handleUpdate}>Update</button>
        <button className='delete' onClick={()=>closeEditForm()}>Cancel</button>
    </div>
  )
}

export default EditTodo