import React, { Component } from 'react'
import { Link } from "react-router-dom"

class QuarterBlock extends Component {
  constructor() {
    super()
    this.state ={
      isClicked: false
    }
  }

  squareClick = (e) => {
    let clickedSquare = e.target
    this.props.squareClick(clickedSquare)
    this.setState({
      isClicked: true
    })
  }

  render() {
    let styles = this.props.styles
    let link = this.props.link
    let text = this.props.text
    let classNameCustom = this.props.className

    return(
      <Link
        to = {link}
        className = {`quarterBlock ${!this.state.isClicked ? classNameCustom : ''} ${this.state.isClicked ? 'quarterBlock_no-opacity' : ''}`}
        style = {styles}
        onClick = {this.squareClick}
      >
        <span className = "quarterBlock-text">
          {text}
        </span>
      </Link>
    )
  }
}

export default QuarterBlock
