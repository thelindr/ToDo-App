import React from "react"
import "./style.css"

class ToDoItems extends React.Component {

  handleCheckboxChange = () => {
    this.props.onChange(this.props.id)
  }

  render() {
    return (
      <ul className="theList">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckboxChange}
            checked={this.props.done} />
          {this.props.name}
        </label>
      </ul>
    )
  }

}

export default ToDoItems
