import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { colorsArray } from "../../styles/cssInJS/css"
import BackButton from '../components/BackButton'

class Page3 extends Component {
  getNewColor = (e) => {
    e.preventDefault()
    e.stopPropagation()

    let randomColor = colorsArray[Math.floor(Math.random()*colorsArray.length)]

    let currentColor1 = getComputedStyle(document.documentElement).getPropertyValue('--main-color-1')

    if (randomColor.color2 === currentColor1) randomColor = colorsArray[Math.floor(Math.random()*colorsArray.length)]

    document.documentElement.style.setProperty('--main-color-1', randomColor.color2)
    document.documentElement.style.setProperty('--main-color-2', randomColor.color1)
  }

  reverseColors = (e) => {
    e.preventDefault()
    e.stopPropagation()

    let currentColor1 = getComputedStyle(document.documentElement).getPropertyValue('--main-color-1')
    let currentColor2 = getComputedStyle(document.documentElement).getPropertyValue('--main-color-2')

    document.documentElement.style.setProperty('--main-color-1', currentColor2)
    document.documentElement.style.setProperty('--main-color-2', currentColor1)
  }

  render() {
    return (
        <div
          className="page3 page"
        >
          <Link to="#" onClick={this.getNewColor}>Change Colors to Random</Link>
          <Link to="#" onClick={this.reverseColors}>Reverse Colors</Link>
          <BackButton />
        </div>
    )
  }
}

export default Page3
