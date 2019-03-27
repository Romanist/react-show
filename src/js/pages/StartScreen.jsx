import React, { Component } from 'react'
import { connect } from "react-redux"
import uuidv1 from "uuid"

import QuarterBlock from '../components/QuarterBlock'

import text from '../../text/eng/text'
import { clickMainScreen, timeOutToMainPage, backToMainPage, firstLoadHandle } from "../actions/index"

function mapDispatchToProps(dispatch) {
  return {
    clickMainScreen: clickedSquare => dispatch(clickMainScreen(clickedSquare)),
    timeOutToMainPage: timeOutToMainPageState => dispatch(timeOutToMainPage(timeOutToMainPageState)),
    backToMainPage: backToMainPageState => dispatch(backToMainPage(backToMainPageState)),
    firstLoadHandle: firstLoaded => dispatch(firstLoadHandle(firstLoaded)),
  }
}

function mapStateToProps(state) {
  return {
    clickedSquare: state.clickedSquare,
    timeOutToMainPageState: state.timeOutToMainPageState,
    backToMainPageState: state.backToMainPageState,
    firstLoaded: state.firstLoaded,
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

  // timer to back to main page
  setTimer = () => {
    const timeOutToMainPageState = setTimeout(() => {
      this.props.history.push(`/`)
    }, 5000)
    this.props.timeOutToMainPage({ timeOutToMainPageState })
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
    // console.log(this.props.firstLoaded)

    // check if page just downloaded
    if (!this.props.firstLoaded) this.props.firstLoadHandle(true)

    // clear timeout if rerutn to main page another way
    if (this.props.timeOutToMainPageState) clearTimeout(this.props.timeOutToMainPageState.timeOutToMainPageState)
  }

  // propagate from layer lower component
  squareClick = (element) => {
    this.setState({
      centerSquares: false
    })

    const id = uuidv1()
    this.props.clickMainScreen({ element, id })

    // get class of clicked square and check it for right-bottom
    let classArray = element.getAttribute('class').split(' ')
    // check if user clicked span inside
    let childrenClicked = element.parentElement.getAttribute('class').split(' ')
    let timerClassCheck = classArray.includes("block-right-bot") ?
                            classArray.includes("block-right-bot") :
                            childrenClicked.includes("block-right-bot")

    // calling timer to back to main page
    if (timerClassCheck) this.setTimer()
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

StartScreen = connect(mapStateToProps, mapDispatchToProps)(StartScreen)

export default StartScreen
