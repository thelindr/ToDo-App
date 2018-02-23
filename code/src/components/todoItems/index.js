import React from "react"
import "./style.css"

class ToDoItems extends React.Component {

  handleCheckboxChange = () => {
    this.props.onChange(this.props.id)
  }

  handleDeleteButtonClicked = () => {
    this.props.remove(this.props.id)
  }

  render() {
    return (
      <div className="wrapper">
        <div id={this.props.done ? "completed" : "notCompleted"} className="theList">
          <label>
            <input
              type="checkbox"
              onChange={this.handleCheckboxChange}
              checked={this.props.done}
              disabled={this.props.done} />
            {this.props.name}
          </label>
          <button
            className="deleteButton"
            onClick={this.handleDeleteButtonClicked}>
            <div className="sign" />
          </button>
        </div>
      </div>
    )
  }

}

export default ToDoItems
