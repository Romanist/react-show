import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Page1 extends Component {
  render() {
    return (
        <div
          className="page2 page"
        >
          <Link to="/">BACK</Link>
        </div>
    )
  }
}

export default Page1
