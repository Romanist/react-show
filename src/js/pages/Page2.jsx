import React, { Component } from 'react'
import { connect } from "react-redux"

import BackButton from '../components/BackButton'
import { getData } from '../actions/index'

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }
}

class Page2 extends Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
        <div
          className="page2 page"
        >
          <ul className="list-group list-group-flush">
            {this.props.articles.map(el => (
              <li className="list-group-item" key={el.id}>
                {el.title}
              </li>
            ))}
          </ul>
          <BackButton />
        </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Page2)
