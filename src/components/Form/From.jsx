import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

import useStyles from './fromStyle';

import {Input, Button} from '@material-ui/core';

const From = ({input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const classes = useStyles();
   const updateTodo = (title, id , completed) => {
       const newTodo = todos.map((todo) => 
           todo.id === id ? {title, id, completed} : todo
       )
       setTodos(newTodo);
       setEditTodo("");
   }
   useEffect(() => {
       if(editTodo){
           setInput(editTodo.title);
       } else {
        setInput("");
       }
   }, [setInput, editTodo])
   
    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
    return (
        <form onSubmit={onFormSubmit}>
           <Input type='text' className={classes.input} placeholder="Enter a task..." value={input} required onChange={onInputChange}/>
           <Button type='submit' className={classes.buttons}>{
           editTodo ? "OK" : "Add"
           }</Button>
        </form>
    )
}

export default From
