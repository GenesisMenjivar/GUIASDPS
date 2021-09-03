import React from 'react'
const Todo =({todo,index,deleteTodo,todo1}) => {
    return (
        <>
        <div className="list">
        <h3> {todo} </h3> <button className="btn-delete" onClick ={() => deleteTodo (index)}>x</button>
        <h3> {todo1} </h3>
        </div>
        </>
        
    )
}
export default Todo