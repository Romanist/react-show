import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import BackButton from '../components/BackButton'
import { chooseExampleToShow } from "../actions/index"

function mapDispatchToProps(dispatch) {
  return {
    chooseExampleToShow: exampleToShow => dispatch(chooseExampleToShow(exampleToShow)),
  }
}

function mapStateToProps(state) {
  return {
    exampleToShow: state.exampleToShow,
  }
}

let Page1 = () => {
  return (
    <div className='page1 page'>
      <h2>Examples:</h2>

      <ul>
        <LinkToExample text='Example 1' />
        <LinkToExample text='Example 2' />
        <LinkToExample text='Example 3' />
        <LinkToExample text='Example 4' />
      </ul>


      <BackButton />

    </div>
  )
}

Page1 = connect(mapStateToProps, mapDispatchToProps)(Page1)

class LinkToExample extends Component {
  showExample = (e) => {
    let clickedElem = e.target
    clickedElem = clickedElem.parentElement
    const numberOfExample = [...clickedElem.parentElement.children].indexOf(clickedElem)
    this.props.chooseExampleToShow(numberOfExample)
  }

  render() {
    let text = this.props.text
    return(
      <li>
        <Link
          onClick = {this.showExample}
          to = '/example'
        >
          {text}
        </Link>
      </li>
    )
  }
}

LinkToExample = connect(mapStateToProps, mapDispatchToProps)(LinkToExample)

export default Page1
