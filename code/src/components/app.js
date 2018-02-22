import React from "react"
import FlipMove from "react-flip-move"
import FillInForm from "./fillInForm/index.js"
import ToDoItems from "./todoItems/index.js"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    if (localStorage.getItem("userSettings")) {
      this.setState(JSON.parse(localStorage.getItem("userSettings")))
    }
  }
  // Add one item to list:
  updateToDoList = text => { // Receiving a new to do item as an argument
    if (text === ("")) { // If the userinput is none you cant add anything
      return null
    }
    const item = {
      name: text,
      id: (Date.now()),
      done: false
    }
    this.setState({
      items: [item, ...this.state.items]
    }, () => {
      localStorage.setItem("userSettings", JSON.stringify(this.state))
    })
  }
  // Function to handle when checkbox is ticked
  handleTodoDoneChange = id => {
    const newItems = this.state.items.map(item => {
      if (item.id === id) {
        item.done = !item.done
      }
      return item
    })
    this.setState({
      items: newItems
    }, () => {
      localStorage.setItem("userSettings", JSON.stringify(this.state))
    })
  }

  removeItemFromList = id => {
    this.setState({
      items: this.state.items.filter(item => (
        item.id !== id
      ))
    }, () => {
      localStorage.setItem("userSettings", JSON.stringify(this.state))
    })
  }

  render() {
    return (
      <div>
        <FillInForm
          updateToDoListInApp={this.updateToDoList} />
        <FlipMove duration={250} easing="ease-out">
          {this.state.items.map(items => (
            <ToDoItems
              key={items.id} // id for computer
              id={items.id} // id for us to see in console
              onChange={this.handleTodoDoneChange}
              name={items.name}
              done={items.done}
              remove={this.removeItemFromList} />
          ))}
        </FlipMove>
      </div>
    )
  }

}

export default App
