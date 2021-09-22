import React from 'react'

import { TodoItem} from "./TodoItem";

export const Todos = (props) => {

    let Todostyle={

        minHeight:"80vh",
        margin:"40px auto"



    }

    return (
        <div className="container my-3 " style={Todostyle}>
            <h3 className ="my-3">{props.title}</h3>

            {props.todos.length===0?"No Todo display":
            
            props.todos.map((todo)=>{

                return (
                <>

                 <TodoItem todo={todo}  key={todo.id}  onDelete={props.onDelete} /><hr/>

                </>

                )

            })

            }
        </div>
    )
}
