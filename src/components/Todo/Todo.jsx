import React from 'react'

import { List, ListItemText, ListItem, ListItemIcon, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    strike: {
      textDecoration: 'line-through',
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
  



const Todo = ({todos, setTodos, setEditTodo}) => {

    const classes = useStyles();


    const handleComplete = (todo) => {
      setTodos(
        todos.map((item) => {
          if(item.id === todo.id){
            return {...item, completed: !item.completed}
          }
          return item;
        })
      )
    }

const handleEdit = ({id}) => {
  const findTodo = todos.find((todo) => todo.id === id);
  setEditTodo(findTodo);
}

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
        <>
            {
            todos.map((todo) => ( 
                <div className={classes.demo}>
            <List  key={todo.id}>
                <ListItem>
                <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={todo.title}
                    className={todo.completed ? classes.strike :  ""}
                    // secondary={secondary ? '' : null}
                    onChange={(event) => event.preventDefault()}
                  />
                  <IconButton aria-label="done">
                    <AssignmentTurnedInIcon onClick={() => handleComplete(todo)}/>
                    </IconButton>
                  <IconButton aria-label="edit">
                    <EditIcon onClick={() => handleEdit(todo)}/>
                    </IconButton>
                  <IconButton aria-label="delete" onClick={() => handleDelete(todo)}>
                    <DeleteIcon/>
                    </IconButton>
                </ListItem>
            </List>
          </div>  
            ))}
            </>
    )
            }


export default Todo
