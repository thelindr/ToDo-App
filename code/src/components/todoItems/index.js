import React from "react"
import "./style.css"

class ToDoItems extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.createTasks = this.createTasks.bind(this)
  }

  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return (
      <ul className="theList">
        {listItems}
      </ul>
    )
  }

}

export default ToDoItems
