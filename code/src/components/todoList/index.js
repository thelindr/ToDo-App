import React from "react"
import "./style.css"
import ToDoItems from "../todoItems/index.js"

class ToDoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(e) {
    const itemArray = this.state.items
    if (this.inputElement.value !== "") {
      itemArray.unshift({
        text: this.inputElement.value,
        key: Date.now()
      })
      this.setState({
        items: itemArray
      })
      this.inputElement.value = ""
    }
    console.log(itemArray)
    e.preventDefault()
  }

  render() {
    return (
      <div className="ToDoList">
        <h4>To Do</h4>
        <form onSubmit={this.addItem}>
          <div className="inputholder">
            <input
              ref={(a) => this.inputElement = a}
              placeholder="Enter what to do" />
            <button type="submit">add</button>
          </div>
        </form>
        <ToDoItems
          entries={this.state.items} />
      </div>
    )
  }
}
export default ToDoList
