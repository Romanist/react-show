import React, { Component } from 'react'
import { connect } from "react-redux"

import BackButton from '../components/BackButton'
import ExampleCont from '../components/ExampleCont'
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

class Example extends Component {
  render() {
    let exampleToRender
    // check if user chose example to show from page
    if (this.props.exampleToShow || this.props.exampleToShow === 0)
      exampleToRender = <ExampleCont exampleToShow = {this.props.exampleToShow} />
    else
      exampleToRender = <h1>You should have chosen example</h1>

    return (
        <div
          className="page"
        >
          {exampleToRender}
          <BackButton />
        </div>
    )
  }
}

Example = connect(mapStateToProps, mapDispatchToProps)(Example)

export default Example
