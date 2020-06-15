import React from 'react'

function TodoItem(props) {
    return (
        <>
       <h4>
           {props.todo.name}
       </h4>
       <p>
           {props.todo.description}
       </p>
       </>
    )
}

export default TodoItem
