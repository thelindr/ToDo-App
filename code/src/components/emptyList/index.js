import React from "react"
import "./style.css"

class EmptyList extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="speech-bubble">
          <p>Type in some things in the text-field to make a list!</p>
        </div>
      </div>
    )
  }

}

export default EmptyList
