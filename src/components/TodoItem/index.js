import './index.css'

const TodoItem = props => {
  const {todo, deleteTodoItem, todoItem} = props
  const {id} = todoItem

  const deleteTodo = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="todoItemContainer">
      <p className="todo">{todo}</p>
      <button className="deleteButton" type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
