import React from "react"
import "./style.css"

class FillInForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  addItem = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("Trying to add todo", this.state.text)
    this.props.updateToDoListInApp(this.state.text) // This is the callback
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div className="fillInForm">
        <h4>To Do:</h4>
        <form onSubmit={this.handleFormSubmit}>
          <div className="inputholder">
            <input
              type="text"
              value={this.setState.text}
              onChange={this.addItem}
              placeholder="What do you want to do?" />
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }
}
export default FillInForm
