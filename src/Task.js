import React from 'react'

export const Task = (props) => {
  return (
    <div style={{ backgroundColor: props.Status==="c" ? "green" : null }}>
            <h1>{props.task}{props.Status}</h1>
            <button   onClick={() => props.CompleteTask(props.id)}>Completed</button>
            <button   onClick={() => props.DeleteTask(props.id)}>Delete</button>
    </div>
  )
}
