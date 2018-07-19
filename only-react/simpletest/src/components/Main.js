import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import Describe from './Describe'

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {describe: 'none'}
    this.updateDescribe = this.updateDescribe.bind(this);
  }

  updateDescribe(describe){
        this.setState({describe: describe})
  }

  render() {
    const { value, onIncrement, onDecrement, onIncrementAsync, loading } = this.props
    console.log(value)
    return (
        <div>
            <Describe describe={this.state.describe}/>
            <Counter
                value={value}
                updateDescribe = {this.updateDescribe}
                loading = {loading}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onIncrementAsync = {onIncrementAsync}
            />
        </div>
    )
  }
}
