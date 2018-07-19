import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div style={{color: 'red'}}>Describe: {this.props.describe}</div>
      </div>
    )
  }
}
