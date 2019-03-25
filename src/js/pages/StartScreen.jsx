import React, { Component } from 'react'
import { connect } from "react-redux"
import uuidv1 from "uuid"

import QuarterBlock from '../components/QuarterBlock'

import text from '../../text/eng/text'
import { clickMainScreen } from "../actions/index"

function mapDispatchToProps(dispatch) {
  return {
    clickMainScreen: clickedSquare => dispatch(clickMainScreen(clickedSquare))
  }
}

class StartScreen extends Component {
  constructor() {
    super()
    this.state = {
      centerSquares: false,
      textLeftTop: text.textLeftTop,
      textRightTop: text.textRightTop,
      textLeftBot: text.textLeftBot,
      textRightBot: text.textRightBot,
    }
  }

  componentDidMount = () => {
    if (document.hasFocus()) {
      setTimeout(() => {
        this.handleLoad()
      }, 10);
    }
    window.addEventListener('focus', this.handleLoad)
  }

  handleLoad = () => {
    this.setState({
      centerSquares: true
    })
  }

  squareClick = (element) => {
    this.setState({
      centerSquares: false
    })
    // console.log(element)
    const id = uuidv1()
    this.props.clickMainScreen({ element, id })
  }

  render() {
    return(
      <div
        className = 'startScreen'
      >
        <QuarterBlock
          className = {`block-left-top ${this.state.centerSquares ? 'quarterBlock_center' : ''}`}
          squareClick = {this.squareClick}
          text={this.state.textLeftTop.text}
          link={this.state.textLeftTop.link}
        />
        <QuarterBlock
          className = {`block-right-top ${this.state.centerSquares ? 'quarterBlock_center' : ''}`}
          squareClick = {this.squareClick}
          text={this.state.textRightTop.text}
          link={this.state.textRightTop.link}
        />
        <QuarterBlock
          className = {`block-left-bot ${this.state.centerSquares ? 'quarterBlock_center' : ''}`}
          squareClick = {this.squareClick}
          text={this.state.textLeftBot.text}
          link={this.state.textLeftBot.link}
        />
        <QuarterBlock
          className = {`block-right-bot ${this.state.centerSquares ? 'quarterBlock_center' : ''}`}
          squareClick = {this.squareClick}
          text={this.state.textRightBot.text}
          link={this.state.textRightBot.link}
        />
      </div>
    )
  }
}

StartScreen = connect(null, mapDispatchToProps)(StartScreen)

export default StartScreen
