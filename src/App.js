
import './App.css';
import Navbar from './Components/Navbar';
import { Todos } from './Components/Todos';
import React, { useState } from 'react'; 
import { Footer } from './Components/Footer';
import AddTodo from './Components/AddTodo';


function App() {

const [todos, setTodos] = useState([]);

const onDelete = (todo) =>{

console.log(" You can click todo item",todo) ;

// let index = todos.indexOf(todo);
// todos.splice(index,1);

setTodos(todos.filter((e)=>{
return  e!== todo;
}))

}

const addTodo =( title , desc)=>{
  console.log("I'm addtodo list", title, desc);

let id;

  if(todos.length==0){

    id=0;

  }else{


    id = todos[todos.length-1].id+1;

  }


  const myTodo ={
    title:title,
    desc:desc,
    id:id
  }


  setTodos([...todos , myTodo]);
  console.log(myTodo);
  
 localStorage.setItem("todos",JSON.stringify(todos))

  }
  




  return (
    <>
    <Navbar  title="TodoList"  searchBar={false} />
    <AddTodo  title="WELCOME TO TODOIST" addTodo={addTodo}/>
    <Todos title="TODOIST" todos ={todos}  onDelete ={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
