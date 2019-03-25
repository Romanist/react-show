import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return { clickedSquare: state.clickedSquare }
}

class Page1 extends Component {
  // constructor(props) {
  //   super(props)
  //
  // }

  render() {
    return (
        <div
          className="page4 page"
        >
          <span>This page is not ready yet</span>
          <Link to="/">Get Back</Link>
          <span>or get backed in few seconds</span>
        </div>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.props)
      this.props.history.push(`/`)
    }, 5000);
  }
}

Page1 = connect(mapStateToProps)(Page1)

export default Page1
