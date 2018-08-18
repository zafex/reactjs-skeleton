import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to {this.props.pageTitle}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pageTitle: state.common.pageTitle
})

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({
      type: process.env.PAGE_LOAD,
      payload
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
