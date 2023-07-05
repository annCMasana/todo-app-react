import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'

const TodoList = ({todos,changeStatus,deleteTodo,showEditForm}) => {
  return (
    <div className="todo-list">
        {
          todos.length == 0 ? "No Available Todos!!" 
          : todos.map((todo,i) => <TodoItem key={i} todo={todo} 
                                            changeStatus={changeStatus} 
                                            deleteTodo={deleteTodo}
                                            showEditForm={showEditForm}/>)
        }
    </div>
  )
}

export default TodoList