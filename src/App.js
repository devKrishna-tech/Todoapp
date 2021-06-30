import React, {useState} from 'react'

import {Paper, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import From from './components/Form/From'
import Todo from './components/Todo/Todo'

const useStyles = makeStyles((theme) => ({
    root: {
        // border: '2px solid red',
        textAlign: 'center',
        margin: '50px 30%',
        backgroundColor: '#9575cd',
        '& > *': {
        margin: '1% 2%',
        width: '10% 50%',
        height: theme.spacing(10),
      },
    },
    head:{
        color: 'white',
    }
  }));



function App() {
    const classes = useStyles();
const initialState = JSON.parse(localStorage.getItem("todos")) || [];
const [input, setInput] = useState("");
const [todos, setTodos] = useState(initialState);
const [editTodo, setEditTodo] = useState(null)

    return (
        <div>
        <Paper elevation={3} className={classes.root} variant="outlined">
            <Typography variant='h2' className={classes.head}>ToDo List</Typography>
            <From 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo} 
            setEditTodo={setEditTodo}
            />
            <Todo 
            todos={todos} 
            setTodos={setTodos} 
            setEditTodo={setEditTodo}/>
        </Paper>
        </div>
    )
}

export default App
