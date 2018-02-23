import React from "react"
import uuidv4 from "uuid/v4"
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
      id: uuidv4(),
      done: false
    }
    this.setState({
      items: [item, ...this.state.items]
    }, () => {
      localStorage.setItem("userSettings", JSON.stringify(this.state))
    })
  }
  // sendToBottom = item => {
  //   let sortedListOfItems = null
  //   console.log("send to bottom:", item)
  //   if (item.done === true) {
  //     sortedListOfItems = this.state.items.concat(this.state.items.splice(item.index, 1))
  //     this.setState({
  //       items: sortedListOfItems
  //     }, () => {
  //       localStorage.setItem("userSettings", JSON.stringify(this.state))
  //     })
  //   }
  // }

  handleTodoDoneChange = id => {
    let indexOfItemToMove = null
    let updatedListOfItems = this.state.items.map((item, index) => {
      if (item.id === id) {
        indexOfItemToMove = index
        item.done = !item.done
        console.log("indexOfItemToMove", indexOfItemToMove, item.done)
      }
      console.log("item", item.id)
      return item
    })
    if (indexOfItemToMove !== null) {
      updatedListOfItems = updatedListOfItems.concat(updatedListOfItems.splice(indexOfItemToMove, 1))
    }
    this.setState({
      items: updatedListOfItems
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
        <FlipMove duration={250} easing="ease-in-out">
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
