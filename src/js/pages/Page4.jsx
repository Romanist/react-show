import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Page1 extends Component {
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
}


export default Page1
