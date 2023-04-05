import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }
        else{
       props.addTodo(title,desc);
      
        setTitle("");
        setDesc("");
 
       }
     
      

    }



  return (
    <div className='container my-5'>
      
        <h4>Add a todo</h4> 
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label my-3">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target
        .value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label my-3">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target
        .value)}} className="form-control" id="desc" aria-describedby="emailHelp"/>
  </div>
 
  <button type="submit" className="btn btn-sm btn-success my-3">Add Todo</button>
</form>
    </div>
  )
}
