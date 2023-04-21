import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  deleteTodoItem = unique => {
    const {todosList} = this.state
    const filterTodoList = todosList.filter(each => each.id !== unique)
    this.setState({todosList: filterTodoList})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todoContainer">
            {todosList.map(eachItem => (
              <TodoItem
                todoItem={eachItem}
                key={eachItem.id}
                todo={eachItem.title}
                deleteTodoItem={this.deleteTodoItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
