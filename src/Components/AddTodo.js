import React, { useState } from 'react'; 

function AddTodo({addTodo},props) {

const [title , setTitle] = useState("");
const [desc , setdese] = useState("");


const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
    alert("Title  or Description  cannot be blank");
    }
    addTodo(title,desc);
}

    return (
        <div className="container my-3">
        <form  onSubmit={submit}  >
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}  className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text"  value={desc} onChange={(e)=>setdese(e.target.value)} className="form-control" id="desc"/>
            </div>
            <button type="submit" className="btn btn-success">Add Todo List</button>
        </form>
        </div>
    )
}

export default AddTodo



