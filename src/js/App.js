import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import StartScreen from './pages/StartScreen'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'

import '../styles/styles.sass'

class App extends Component {

  render() {
    return (
      <Router>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={{ enter: 700, exit: 700 }}
                  classNames={'transition'}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={StartScreen} />
                    <Route path="/page1" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    <Route path="/page3" component={Page3} />
                    <Route path="/page4" component={Page4} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
      </Router>
    )
  }
}

export default App
