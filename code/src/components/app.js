import React from "react"
import FillInForm from "./fillInForm/index.js"
import ToDoItems from "./todoItems/index.js"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [JSON.parse(localStorage.getItem("userSettings"))]
    }
  }

  updateToDoList = (newtoDoItem) => {
    const item = {
      name: newtoDoItem,
      id: (Date.now()),
      done: false
    }
    localStorage.setItem("userSettings", JSON.stringify(item))

    this.setState({
      items: [item, ...this.state.items]
    })
  }

  handleTodoDoneChange = (id) => {
    const newItems = this.state.items.map(item => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })

    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <div>
        <FillInForm
          updateToDoListInApp={this.updateToDoList} />

        {this.state.items.map(item => (
          <ToDoItems
            key={item.id}
            id={item.id}
            onChange={this.handleTodoDoneChange}
            name={item.name}
            done={item.done} />
        ))}
      </div>
    )
  }

}

export default App
