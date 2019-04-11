import React, { Component } from 'react'

import examples from "../../text/eng/examples"

class ExampleCont extends Component {
  render() {
    let numbOfEx = this.props.exampleToShow
    return (
        <div
          className=""
        >
          <h1>{examples[numbOfEx].headerDesc}</h1>
          <p>{examples[numbOfEx].text1}</p>
          <p>{examples[numbOfEx].text2}</p>
          <p>{examples[numbOfEx].text3}</p>
        </div>
    )
  }
}

export default ExampleCont
