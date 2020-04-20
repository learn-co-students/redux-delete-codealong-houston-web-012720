import React from 'react'

const Todo = props => {
    return (
        <div>
            <li>{props.todo.text}</li><br/>
            <li>Like: {props.todo.like}</li>
            <button onClick= {() => props.like(props.todo.id)}>Like</button>
            <button onClick= {() => props.dislike(props.todo.id)}>Dislike</button>
            <button onClick = {() => props.delete(props.todo.id)}>DELETE</button>
        </div>
    )
}

export default Todo;
